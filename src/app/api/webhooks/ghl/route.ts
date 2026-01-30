import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("GHL Webhook Received:", JSON.stringify(body, null, 2));

    const {
      contact_id,
      contact_email,
      contact_name,
      custom_fields,
      tags,
    } = body;

    // Extract brand data from GHL custom fields
    const brandData: Record<string, string | undefined> = {};

    if (custom_fields) {
      brandData.brandName = custom_fields.brand_name;
      brandData.tagline = custom_fields.brand_tagline;
      brandData.values = custom_fields.brand_values;
      brandData.voiceAdjectives = custom_fields.brand_voice;
      brandData.archetype = custom_fields.brand_archetype;
      brandData.primaryColor = custom_fields.brand_primary_color;
    }

    // Process brand-related webhook events
    const result = {
      success: true,
      contactId: contact_id,
      contactEmail: contact_email,
      contactName: contact_name,
      brandData,
      tags: tags || [],
      message: "Brand data webhook processed successfully",
      timestamp: new Date().toISOString(),
    };

    console.log("Brand Webhook Result:", result);
    return NextResponse.json(result);
  } catch (error) {
    console.error("GHL Brand Webhook Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process brand webhook" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: "active",
    message: "Brand Book Creator GHL Webhook Endpoint",
    version: "1.0.0",
    supportedFields: [
      "brand_name",
      "brand_tagline",
      "brand_values",
      "brand_voice",
      "brand_archetype",
      "brand_primary_color",
      "brand_purpose",
      "brand_mission",
      "brand_vision",
    ],
    documentation: "https://brand-book-creator.vercel.app/guide",
  });
}
