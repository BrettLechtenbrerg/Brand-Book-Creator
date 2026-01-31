"use client";

import { useState } from "react";
import {
  Globe,
  Lock,
  Copy,
  CheckCircle2,
  ExternalLink,
  Eye,
  EyeOff,
  Loader2,
  Share2,
  Sparkles,
  XCircle,
} from "lucide-react";
import { DEFAULT_BRAND_DATA } from "@/lib/brand-defaults";

export function PublishPanel() {
  const [isPublished, setIsPublished] = useState(false);
  const [isPasswordProtected, setIsPasswordProtected] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [brandBookId, setBrandBookId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePublish = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/brand-book/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: brandBookId,
          data: DEFAULT_BRAND_DATA, // For MVP — uses default data
          company_name: DEFAULT_BRAND_DATA.foundation.businessName,
          is_password_protected: isPasswordProtected,
          password: isPasswordProtected ? password : null,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to publish");
      }

      const result = await res.json();
      setBrandBookId(result.id);
      setShareUrl(`${window.location.origin}${result.share_url}`);
      setIsPublished(true);
    } catch {
      setError("Failed to publish brand book. Make sure Supabase is configured.");
    } finally {
      setLoading(false);
    }
  };

  const handleUnpublish = async () => {
    if (!brandBookId) return;
    setLoading(true);

    try {
      const res = await fetch("/api/brand-book/publish", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: brandBookId,
          is_published: false,
        }),
      });

      if (!res.ok) throw new Error("Failed to unpublish");

      setIsPublished(false);
      setShareUrl("");
    } catch {
      setError("Failed to unpublish.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateSettings = async () => {
    if (!brandBookId) return;
    setLoading(true);

    try {
      const res = await fetch("/api/brand-book/publish", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: brandBookId,
          is_password_protected: isPasswordProtected,
          password: isPasswordProtected ? password : null,
        }),
      });

      if (!res.ok) throw new Error("Failed to update");
    } catch {
      setError("Failed to update sharing settings.");
    } finally {
      setLoading(false);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Publish Status Card */}
      <div className="rounded-xl border p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                isPublished
                  ? "bg-green-100 dark:bg-green-900/30"
                  : "bg-gray-100 dark:bg-gray-800"
              }`}
            >
              {isPublished ? (
                <Globe className="w-5 h-5 text-green-600" />
              ) : (
                <EyeOff className="w-5 h-5 text-gray-500" />
              )}
            </div>
            <div>
              <h3 className="font-semibold">
                {isPublished ? "Brand Book is Live" : "Brand Book is a Draft"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isPublished
                  ? "Anyone with the link can view your brand book"
                  : "Publish to create a shareable link"}
              </p>
            </div>
          </div>

          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              isPublished
                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
            }`}
          >
            {isPublished ? "Published" : "Draft"}
          </span>
        </div>

        {!isPublished && (
          <button
            onClick={handlePublish}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold hover:from-blue-500 hover:to-blue-700 transition-all disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4" />
            )}
            Publish Brand Book
          </button>
        )}

        {isPublished && (
          <button
            onClick={handleUnpublish}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border text-sm text-red-600 hover:bg-red-50 transition-all disabled:opacity-50"
          >
            <XCircle className="w-4 h-4" />
            Unpublish
          </button>
        )}
      </div>

      {/* Share Link */}
      {isPublished && shareUrl && (
        <div className="rounded-xl border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-blue-500" />
            <h3 className="font-semibold">Share Link</h3>
          </div>

          <div className="flex gap-2">
            <input
              readOnly
              value={shareUrl}
              className="flex-1 px-4 py-2.5 rounded-lg border bg-muted font-mono text-sm"
            />
            <button
              onClick={copyLink}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border hover:bg-accent transition-colors shrink-0"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="text-sm">Copy</span>
                </>
              )}
            </button>
          </div>

          <a
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Preview in new tab
          </a>
        </div>
      )}

      {/* Access Control */}
      <div className="rounded-xl border p-6 space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Lock className="w-5 h-5 text-blue-500" />
          Access Control
        </h3>

        <div className="space-y-4">
          {/* Public / Password Toggle */}
          <div className="flex items-center justify-between p-4 rounded-lg border">
            <div className="flex items-center gap-3">
              {isPasswordProtected ? (
                <Lock className="w-5 h-5 text-amber-500" />
              ) : (
                <Globe className="w-5 h-5 text-green-500" />
              )}
              <div>
                <p className="font-medium text-sm">
                  {isPasswordProtected ? "Password Protected" : "Public Access"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {isPasswordProtected
                    ? "Viewers must enter a password to see the brand book"
                    : "Anyone with the link can view the brand book"}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsPasswordProtected(!isPasswordProtected);
                if (isPublished) handleUpdateSettings();
              }}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isPasswordProtected ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isPasswordProtected ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Password Input */}
          {isPasswordProtected && (
            <div className="space-y-2 pl-4 border-l-2 border-blue-200">
              <label className="text-sm font-medium">Share Password</label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter a password for viewers..."
                    className="w-full px-4 py-2.5 rounded-lg border focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {isPublished && (
                  <button
                    onClick={handleUpdateSettings}
                    disabled={loading}
                    className="px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
          {error}
        </div>
      )}
    </div>
  );
}
