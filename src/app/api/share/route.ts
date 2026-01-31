import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET: Fetch published brand book by slug
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json(
        { error: "Slug is required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("brand_books")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .single();

    if (error && error.code === "PGRST116") {
      return NextResponse.json(
        { error: "Brand book not found" },
        { status: 404 }
      );
    }

    if (error) throw error;

    // If password-protected, don't send data — just metadata
    if (data.is_password_protected) {
      return NextResponse.json({
        id: data.id,
        slug: data.slug,
        company_name: data.company_name,
        requires_password: true,
      });
    }

    // Public — send everything (minus the password)
    const { share_password, ...safeData } = data;
    return NextResponse.json(safeData);
  } catch (error) {
    console.error("Error fetching shared brand book:", error);
    return NextResponse.json(
      { error: "Failed to load brand book" },
      { status: 500 }
    );
  }
}

// POST: Verify password and return brand book data
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, password } = body;

    if (!slug || !password) {
      return NextResponse.json(
        { error: "Slug and password are required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("brand_books")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .single();

    if (error && error.code === "PGRST116") {
      return NextResponse.json(
        { error: "Brand book not found" },
        { status: 404 }
      );
    }

    if (error) throw error;

    // Check password
    if (data.share_password !== password) {
      return NextResponse.json(
        { error: "Incorrect password" },
        { status: 401 }
      );
    }

    // Password correct — return data (minus the password)
    const { share_password, ...safeData } = data;
    return NextResponse.json(safeData);
  } catch (error) {
    console.error("Error verifying password:", error);
    return NextResponse.json(
      { error: "Failed to verify password" },
      { status: 500 }
    );
  }
}
