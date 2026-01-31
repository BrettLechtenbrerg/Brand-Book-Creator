import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// POST: Publish a brand book (save data + generate share link)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, data, company_name, password, is_password_protected } = body;

    const companyName = company_name || data?.foundation?.businessName || "brand-book";
    const slug = companyName
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .substring(0, 60);

    if (id) {
      // Update existing brand book and publish it
      const updateData: Record<string, unknown> = {
        data,
        company_name: companyName,
        is_published: true,
        is_password_protected: !!is_password_protected,
        updated_at: new Date().toISOString(),
      };

      if (password !== undefined) {
        updateData.share_password = password || null;
      }

      const { data: updated, error } = await supabase
        .from("brand_books")
        .update(updateData)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;

      return NextResponse.json({
        ...updated,
        share_url: `/share/${updated.slug}`,
      });
    }

    // Create new and publish
    const uniqueSlug = `${slug}-${Date.now().toString(36)}`;

    const { data: created, error } = await supabase
      .from("brand_books")
      .insert({
        slug: uniqueSlug,
        data,
        company_name: companyName,
        is_published: true,
        is_password_protected: !!is_password_protected,
        share_password: password || null,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(
      {
        ...created,
        share_url: `/share/${created.slug}`,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error publishing brand book:", error);
    return NextResponse.json(
      { error: "Failed to publish brand book" },
      { status: 500 }
    );
  }
}

// PATCH: Update sharing settings
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, is_published, is_password_protected, password } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Brand book ID is required" },
        { status: 400 }
      );
    }

    const updateData: Record<string, unknown> = {
      updated_at: new Date().toISOString(),
    };

    if (is_published !== undefined) updateData.is_published = is_published;
    if (is_password_protected !== undefined)
      updateData.is_password_protected = is_password_protected;
    if (password !== undefined) updateData.share_password = password || null;

    const { data: updated, error } = await supabase
      .from("brand_books")
      .update(updateData)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      ...updated,
      share_url: updated.is_published ? `/share/${updated.slug}` : null,
    });
  } catch (error) {
    console.error("Error updating sharing settings:", error);
    return NextResponse.json(
      { error: "Failed to update sharing settings" },
      { status: 500 }
    );
  }
}
