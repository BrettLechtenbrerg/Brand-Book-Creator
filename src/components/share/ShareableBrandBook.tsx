"use client";

import { BrandBookData } from "@/lib/brand-types";
import {
  Building2,
  Heart,
  Mic2,
  Palette,
  Users,
  Hash,
  BookOpen,
  Target,
  Eye,
  Compass,
  Quote,
  MessageSquare,
  Shield,
  FileText,
  Sparkles,
  Volume2,
  PenTool,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

interface ShareableBrandBookProps {
  data: BrandBookData;
  companyName: string;
}

// ─── Helper: get contrasting text color ──────────────────────
function getContrastColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "#1a1a1a" : "#ffffff";
}

// ─── Section Header Component ────────────────────────────────
function SectionHeader({
  icon: Icon,
  number,
  title,
  subtitle,
  accentColor,
}: {
  icon: React.ElementType;
  number: number;
  title: string;
  subtitle: string;
  accentColor: string;
}) {
  return (
    <div className="mb-8 pb-4 border-b-2" style={{ borderColor: accentColor }}>
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: accentColor }}
        >
          <Icon className="w-5 h-5" style={{ color: getContrastColor(accentColor) }} />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: accentColor }}>
            Section {number}
          </p>
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
      </div>
      <p className="text-gray-500 ml-[52px]">{subtitle}</p>
    </div>
  );
}

// ─── Table of Contents ───────────────────────────────────────
function TableOfContents({ accentColor }: { accentColor: string }) {
  const sections = [
    { id: "foundation", label: "Brand Foundation", num: 1 },
    { id: "values", label: "Values & Story", num: 2 },
    { id: "voice", label: "Voice & Personality", num: 3 },
    { id: "visual", label: "Visual Identity", num: 4 },
    { id: "audience", label: "Audience & Messaging", num: 5 },
    { id: "assets", label: "Brand Assets", num: 6 },
  ];

  return (
    <nav className="print:hidden mb-12 p-6 bg-gray-50 rounded-xl">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
        Table of Contents
      </h3>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors group"
          >
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: accentColor, color: getContrastColor(accentColor) }}
            >
              {s.num}
            </span>
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
              {s.label}
            </span>
            <ChevronRight className="w-3 h-3 text-gray-300 ml-auto" />
          </a>
        ))}
      </div>
    </nav>
  );
}

// ═══════════════════════════════════════════════════════════════
// Main Component
// ═══════════════════════════════════════════════════════════════
export function ShareableBrandBook({ data, companyName }: ShareableBrandBookProps) {
  const accentColor = data.primaryColors?.[0]?.hex || "#1a365d";
  const accentLight = data.primaryColors?.[1]?.hex || "#2c5282";

  return (
    <div className="min-h-screen bg-white">
      {/* ─── Cover Section ─────────────────────────────────── */}
      <section
        className="relative py-20 px-6"
        style={{
          background: `linear-gradient(135deg, ${accentColor} 0%, ${accentLight} 100%)`,
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-sm font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: `${getContrastColor(accentColor)}99` }}
          >
            Brand Book
          </p>
          <h1
            className="text-5xl sm:text-6xl font-extrabold mb-4"
            style={{ color: getContrastColor(accentColor) }}
          >
            {data.foundation.businessName || companyName}
          </h1>
          {data.foundation.tagline && (
            <p
              className="text-xl sm:text-2xl font-light italic max-w-2xl mx-auto"
              style={{ color: `${getContrastColor(accentColor)}cc` }}
            >
              &ldquo;{data.foundation.tagline}&rdquo;
            </p>
          )}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <TableOfContents accentColor={accentColor} />

        {/* ─── Section 1: Foundation ─────────────────────── */}
        <section id="foundation" className="mb-16 scroll-mt-8 page-break">
          <SectionHeader
            icon={Building2}
            number={1}
            title="Brand Foundation"
            subtitle="The core identity — everything else builds on this."
            accentColor={accentColor}
          />

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { label: "Purpose", value: data.foundation.purpose, icon: Target },
              { label: "Vision", value: data.foundation.vision, icon: Eye },
              { label: "Mission", value: data.foundation.mission, icon: Compass },
              { label: "Positioning", value: data.foundation.positioning, icon: Quote },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border p-5">
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className="w-4 h-4" style={{ color: accentColor }} />
                  <h3 className="text-xs font-bold uppercase tracking-wider" style={{ color: accentColor }}>
                    {item.label}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.value || "—"}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Section 2: Values & Story ─────────────────── */}
        <section id="values" className="mb-16 scroll-mt-8 page-break">
          <SectionHeader
            icon={Heart}
            number={2}
            title="Values & Story"
            subtitle="The heart of the brand — core values and origin story."
            accentColor={accentColor}
          />

          <h3 className="text-lg font-bold mb-4">Core Values</h3>
          <div className="space-y-4 mb-10">
            {data.values.map((value, i) => (
              <div key={value.id || i} className="rounded-xl border p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: accentColor, color: getContrastColor(accentColor) }}
                  >
                    {i + 1}
                  </span>
                  <h4 className="font-bold text-lg">{value.name}</h4>
                </div>
                <p className="text-gray-700 mb-2">{value.description}</p>
                {value.inAction && (
                  <div className="mt-3 pl-4 border-l-2" style={{ borderColor: accentColor }}>
                    <p className="text-sm text-gray-500 font-medium mb-1">In Action:</p>
                    <p className="text-sm text-gray-600">{value.inAction}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {data.story.short && (
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5" style={{ color: accentColor }} />
                Brand Story (Short)
              </h3>
              <blockquote
                className="rounded-xl p-6 italic text-gray-700 leading-relaxed border-l-4"
                style={{ borderColor: accentColor, backgroundColor: `${accentColor}08` }}
              >
                {data.story.short}
              </blockquote>
            </div>
          )}

          {data.story.full && (
            <div>
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5" style={{ color: accentColor }} />
                Brand Story (Full)
              </h3>
              <div className="rounded-xl border p-6 text-gray-700 leading-relaxed whitespace-pre-line">
                {data.story.full}
              </div>
            </div>
          )}
        </section>

        {/* ─── Section 3: Voice & Personality ────────────── */}
        <section id="voice" className="mb-16 scroll-mt-8 page-break">
          <SectionHeader
            icon={Mic2}
            number={3}
            title="Voice & Personality"
            subtitle="How the brand sounds, feels, and communicates."
            accentColor={accentColor}
          />

          {/* Voice Adjectives */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Volume2 className="w-5 h-5" style={{ color: accentColor }} />
              Voice Adjectives
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.voiceAdjectives.map((adj, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${accentColor}15`,
                    color: accentColor,
                    border: `1px solid ${accentColor}30`,
                  }}
                >
                  {adj}
                </span>
              ))}
            </div>
          </div>

          {/* Archetype */}
          {data.selectedArchetype && (
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5" style={{ color: accentColor }} />
                Brand Archetype
              </h3>
              <div
                className="inline-block px-6 py-3 rounded-xl text-lg font-semibold"
                style={{
                  backgroundColor: accentColor,
                  color: getContrastColor(accentColor),
                }}
              >
                {data.selectedArchetype}
              </div>
            </div>
          )}

          {/* Tone Shifts */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" style={{ color: accentColor }} />
              Tone by Context
            </h3>
            <div className="space-y-3">
              {Object.entries(data.toneShifts).map(([key, value]) => (
                <div key={key} className="rounded-xl border p-4">
                  <h4 className="font-semibold text-sm capitalize mb-1" style={{ color: accentColor }}>
                    {key.replace(/([A-Z])/g, " $1")}
                  </h4>
                  <p className="text-sm text-gray-600">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Copy Rules */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <PenTool className="w-5 h-5" style={{ color: accentColor }} />
              Copy Rules & Writing Style
            </h3>
            <div className="space-y-3">
              {Object.entries(data.copyRules).map(([key, value]) => (
                <div key={key} className="rounded-xl border p-4">
                  <h4 className="font-semibold text-sm capitalize mb-1" style={{ color: accentColor }}>
                    {key === "cta" ? "Calls to Action" : key}
                  </h4>
                  <p className="text-sm text-gray-600">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Forbidden Words */}
          {data.neverWords.length > 0 && (
            <div>
              <h3 className="text-lg font-bold mb-3">Words We Never Use</h3>
              <div className="flex flex-wrap gap-2">
                {data.neverWords.map((word, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-red-50 text-red-600 border border-red-200"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ─── Section 4: Visual Identity ────────────────── */}
        <section id="visual" className="mb-16 scroll-mt-8 page-break">
          <SectionHeader
            icon={Palette}
            number={4}
            title="Visual Identity"
            subtitle="Colors, typography, logo rules, and imagery style."
            accentColor={accentColor}
          />

          {/* Color Palettes */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Primary Colors</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.primaryColors.map((color) => (
                <div key={color.id} className="rounded-xl border overflow-hidden">
                  <div className="h-20" style={{ backgroundColor: color.hex }} />
                  <div className="p-3">
                    <p className="font-semibold text-sm">{color.name}</p>
                    <p className="text-xs font-mono text-gray-500">{color.hex}</p>
                    <p className="text-xs text-gray-400 mt-1">{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Secondary & Accent Colors</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.secondaryColors.map((color) => (
                <div key={color.id} className="rounded-xl border overflow-hidden">
                  <div className="h-16" style={{ backgroundColor: color.hex }} />
                  <div className="p-3">
                    <p className="font-semibold text-sm">{color.name}</p>
                    <p className="text-xs font-mono text-gray-500">{color.hex}</p>
                    <p className="text-xs text-gray-400 mt-1">{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Typography</h3>
            <div className="rounded-xl border p-5 space-y-3">
              {Object.entries(data.typography).map(([key, value]) => (
                <div key={key} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-sm font-semibold capitalize min-w-[120px]" style={{ color: accentColor }}>
                    {key.replace(/([A-Z])/g, " $1")}:
                  </span>
                  <span className="text-sm text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Logo Guidelines */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Logo Guidelines</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {Object.entries(data.logoGuidelines).map(([key, value]) => (
                <div key={key} className="rounded-xl border p-4">
                  <h4 className="font-semibold text-sm capitalize mb-2" style={{ color: accentColor }}>
                    {key.replace(/([A-Z])/g, " $1")}
                  </h4>
                  <p className="text-sm text-gray-600">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Style */}
          {data.imageStyle && (
            <div>
              <h3 className="text-lg font-bold mb-3">Image & Photography Style</h3>
              <div className="rounded-xl border p-5 text-gray-700 leading-relaxed">
                {data.imageStyle}
              </div>
            </div>
          )}
        </section>

        {/* ─── Section 5: Audience & Messaging ───────────── */}
        <section id="audience" className="mb-16 scroll-mt-8 page-break">
          <SectionHeader
            icon={Users}
            number={5}
            title="Audience & Messaging"
            subtitle="Who we serve, what we say, and how we prove it."
            accentColor={accentColor}
          />

          {/* Personas */}
          <h3 className="text-lg font-bold mb-4">Target Personas</h3>
          <div className="space-y-4 mb-10">
            {data.personas.map((persona, i) => (
              <div key={persona.id || i} className="rounded-xl border p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
                    style={{ backgroundColor: accentColor, color: getContrastColor(accentColor) }}
                  >
                    {persona.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{persona.name}</h4>
                    <p className="text-sm text-gray-500">
                      {persona.role} {persona.age && `\u2022 Age ${persona.age}`}
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { label: "Pain Points", value: persona.painPoints },
                    { label: "Goals", value: persona.goals },
                    { label: "Common Objections", value: persona.objections },
                    { label: "Where to Reach Them", value: persona.whereToBuy },
                  ].map((item) =>
                    item.value ? (
                      <div key={item.label}>
                        <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: accentColor }}>
                          {item.label}
                        </p>
                        <p className="text-sm text-gray-600">{item.value}</p>
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Elevator Pitches */}
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Quote className="w-5 h-5" style={{ color: accentColor }} />
            Elevator Pitches
          </h3>
          <div className="space-y-4 mb-10">
            {Object.entries(data.pitches).map(([key, value]) => (
              <div key={key} className="rounded-xl border p-5">
                <h4 className="font-semibold text-sm capitalize mb-2" style={{ color: accentColor }}>
                  {key === "cocktail"
                    ? "15-Second (Cocktail Party)"
                    : key === "networking"
                    ? "30-Second (Networking)"
                    : "Conversational (Casual)"}
                </h4>
                <p className="text-gray-700 italic leading-relaxed">&ldquo;{value}&rdquo;</p>
              </div>
            ))}
          </div>

          {/* Key Messages */}
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5" style={{ color: accentColor }} />
            Key Message Pillars
          </h3>
          <div className="space-y-4">
            {data.keyMessages.map((msg, i) => (
              <div key={msg.id || i} className="rounded-xl border p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: `${accentColor}15`,
                      color: accentColor,
                    }}
                  >
                    {msg.pillar}
                  </span>
                </div>
                <p className="font-semibold text-gray-900 mb-1">{msg.mainMessage}</p>
                <p className="text-sm text-gray-600 mb-2">{msg.supporting}</p>
                {msg.proofPoint && (
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    <strong>Proof:</strong> {msg.proofPoint}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ─── Section 6: Brand Assets ───────────────────── */}
        <section id="assets" className="mb-16 scroll-mt-8 page-break">
          <SectionHeader
            icon={Hash}
            number={6}
            title="Brand Assets"
            subtitle="Hashtags, keywords, trademark rules, and usage guidelines."
            accentColor={accentColor}
          />

          {/* Hashtags */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Hashtag Library</h3>
            <div className="space-y-4">
              {Object.entries(data.hashtags).map(([category, tags]) => (
                <div key={category} className="rounded-xl border p-4">
                  <h4 className="font-semibold text-sm capitalize mb-2" style={{ color: accentColor }}>
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm font-mono bg-gray-100 text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Keywords */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">SEO Keywords</h3>
            <div className="space-y-4">
              {Object.entries(data.keywords).map(([category, words]) => (
                <div key={category} className="rounded-xl border p-4">
                  <h4 className="font-semibold text-sm capitalize mb-2" style={{ color: accentColor }}>
                    {category === "longTail"
                      ? "Long-Tail"
                      : category === "negative"
                      ? "Negative (Exclude)"
                      : category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {words.map((word, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm ${
                          category === "negative"
                            ? "bg-red-50 text-red-600 border border-red-200"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trademark */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" style={{ color: accentColor }} />
              Trademark & Brand Protection
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {Object.entries(data.trademark).map(([key, value]) => (
                <div key={key} className="rounded-xl border p-4">
                  <h4 className="font-semibold text-sm capitalize mb-2" style={{ color: accentColor }}>
                    {key} Rules
                  </h4>
                  <p className="text-sm text-gray-600">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Usage Guidelines */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" style={{ color: accentColor }} />
              Usage Guidelines & Boilerplate
            </h3>
            <div className="space-y-4">
              {Object.entries(data.usageGuidelines).map(([key, value]) => (
                <div key={key} className="rounded-xl border p-4">
                  <h4 className="font-semibold text-sm capitalize mb-2" style={{ color: accentColor }}>
                    {key === "boilerplate50"
                      ? "50-Word Boilerplate"
                      : key === "boilerplate100"
                      ? "100-Word Boilerplate"
                      : `${key} Guidelines`}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Footer ────────────────────────────────────── */}
        <footer className="print:hidden text-center py-8 border-t">
          <p className="text-sm text-gray-400">
            Made with{" "}
            <span className="font-semibold" style={{ color: accentColor }}>
              Brand Book Creator
            </span>{" "}
            &mdash; Part of The Master&apos;s Edge Business Program
          </p>
        </footer>
      </div>
    </div>
  );
}
