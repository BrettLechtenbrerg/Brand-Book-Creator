import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { DEFAULT_BRAND_DATA } from "@/lib/brand-defaults";

// GET: Load brand book data
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      const { data, error } = await supabase
        .from("brand_books")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return NextResponse.json(data);
    }

    // Default: get the most recent brand book (single-user MVP)
    const { data, error } = await supabase
      .from("brand_books")
      .select("*")
      .order("updated_at", { ascending: false })
      .limit(1)
      .single();

    if (error && error.code === "PGRST116") {
      // No rows found — return defaults
      return NextResponse.json({
        id: null,
        data: DEFAULT_BRAND_DATA,
        is_published: false,
        is_password_protected: false,
        company_name: DEFAULT_BRAND_DATA.foundation.businessName,
      });
    }

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error loading brand book:", error);
    return NextResponse.json(
      { error: "Failed to load brand book" },
      { status: 500 }
    );
  }
}

// POST: Save brand book data
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, data, company_name } = body;

    if (id) {
      // Update existing
      const { data: updated, error } = await supabase
        .from("brand_books")
        .update({
          data,
          company_name: company_name || data?.foundation?.businessName,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return NextResponse.json(updated);
    }

    // Create new — generate a slug from company name
    const companyName = company_name || data?.foundation?.businessName || "brand-book";
    const slug = companyName
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .substring(0, 60);

    // Add random suffix to ensure uniqueness
    const uniqueSlug = `${slug}-${Date.now().toString(36)}`;

    const { data: created, error } = await supabase
      .from("brand_books")
      .insert({
        slug: uniqueSlug,
        data,
        company_name: companyName,
        is_published: false,
        is_password_protected: false,
      })
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error("Error saving brand book:", error);
    return NextResponse.json(
      { error: "Failed to save brand book" },
      { status: 500 }
    );
  }
}
