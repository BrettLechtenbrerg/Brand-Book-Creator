"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ShareableBrandBook } from "@/components/share/ShareableBrandBook";
import { PasswordGate } from "@/components/share/PasswordGate";
import { PdfDownloadButton } from "@/components/share/PdfDownloadButton";
import { BrandBookData } from "@/lib/brand-types";
import { Loader2, AlertCircle } from "lucide-react";

type PageState =
  | { status: "loading" }
  | { status: "password_required"; companyName: string }
  | { status: "loaded"; data: BrandBookData; companyName: string }
  | { status: "error"; message: string };

export default function SharePage() {
  const params = useParams();
  const slug = params.slug as string;
  const [state, setState] = useState<PageState>({ status: "loading" });

  useEffect(() => {
    const fetchBrandBook = async () => {
      try {
        // Check if we already authenticated in this session
        const sessionAuth = sessionStorage.getItem(`brand-book-${slug}`);

        const res = await fetch(`/api/share?slug=${encodeURIComponent(slug)}`);

        if (res.status === 404) {
          setState({
            status: "error",
            message: "This brand book was not found or is no longer shared.",
          });
          return;
        }

        if (!res.ok) {
          setState({
            status: "error",
            message: "Something went wrong loading this brand book.",
          });
          return;
        }

        const data = await res.json();

        if (data.requires_password && !sessionAuth) {
          setState({
            status: "password_required",
            companyName: data.company_name || "Brand Book",
          });
        } else if (data.requires_password && sessionAuth) {
          // Already authenticated in this session — but we need to re-verify
          // because the GET endpoint doesn't return data for password-protected books.
          // The user will need to re-enter the password if the session is new.
          setState({
            status: "password_required",
            companyName: data.company_name || "Brand Book",
          });
        } else {
          setState({
            status: "loaded",
            data: data.data,
            companyName: data.company_name || data.data?.foundation?.businessName || "Brand Book",
          });
        }
      } catch {
        setState({
          status: "error",
          message: "Failed to connect. Please check your internet and try again.",
        });
      }
    };

    fetchBrandBook();
  }, [slug]);

  // ─── Loading State ────────────────────────────────────────
  if (state.status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-500">Loading brand book...</p>
        </div>
      </div>
    );
  }

  // ─── Error State ──────────────────────────────────────────
  if (state.status === "error") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Brand Book Not Found</h1>
          <p className="text-gray-500">{state.message}</p>
        </div>
      </div>
    );
  }

  // ─── Password Required ────────────────────────────────────
  if (state.status === "password_required") {
    return (
      <PasswordGate
        slug={slug}
        companyName={state.companyName}
        onSuccess={(responseData: unknown) => {
          const d = responseData as { data: BrandBookData; company_name?: string };
          setState({
            status: "loaded",
            data: d.data,
            companyName: d.company_name || d.data?.foundation?.businessName || "Brand Book",
          });
        }}
      />
    );
  }

  // ─── Brand Book Loaded ────────────────────────────────────
  return (
    <>
      <ShareableBrandBook data={state.data} companyName={state.companyName} />
      <PdfDownloadButton companyName={state.companyName} />
    </>
  );
}
