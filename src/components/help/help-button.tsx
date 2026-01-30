"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  HelpCircle,
  BookOpen,
  Palette,
  Heart,
  Mic2,
  Users,
  Settings,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  AlertTriangle,
  Shield,
} from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    color: "from-blue-500 to-blue-500",
    title: "Step 1: Brand Foundation",
    subtitle: "Define who you are",
    description:
      "Start with your business name, tagline, purpose, vision, and mission. This is the core of your brand identity that everything else builds on.",
    tip: "Your purpose answers WHY you exist beyond making money.",
  },
  {
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    title: "Step 2: Values & Story",
    subtitle: "Define what you stand for",
    description:
      "Document your 3-7 core values and craft your brand origin story. Values are the non-negotiables that guide every decision.",
    tip: "Good values are specific enough to screen hiring decisions.",
  },
  {
    icon: Mic2,
    color: "from-amber-500 to-orange-500",
    title: "Step 3: Voice & Personality",
    subtitle: "Define how you sound",
    description:
      "Establish your brand voice, tone shifts by context, copy style, and brand personality archetype (Sage, Hero, Creator, etc.).",
    tip: "Voice stays consistent. Tone shifts by situation.",
  },
  {
    icon: Palette,
    color: "from-blue-500 to-cyan-500",
    title: "Step 4: Visual Identity",
    subtitle: "Define how you look",
    description:
      "Set your brand colors with hex codes, typography choices, logo guidelines, and imagery style. Everything visual lives here.",
    tip: "Always include hex codes so every platform matches exactly.",
  },
  {
    icon: Users,
    color: "from-green-500 to-emerald-500",
    title: "Step 5: Audience & Messaging",
    subtitle: "Define who you serve",
    description:
      "Create 2-4 audience personas, craft elevator pitches, and build your key messaging pillars with supporting proof points.",
    tip: "Use the Transformation Hierarchy: Transformation > Outcome > Benefit > Feature",
  },
  {
    icon: Settings,
    color: "from-slate-500 to-gray-500",
    title: "Step 6: Connect to Go High Level",
    subtitle: "Sync your brand to GHL",
    description:
      "Push your brand values, voice guidelines, and key messaging to GHL custom fields. This data flows into Hiring Oracle, SOP Factory, and other Master's Edge apps.",
    tip: "Your brand data becomes the DNA for all other systems.",
  },
];

export function HelpButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="gap-2"
        onClick={() => setOpen(true)}
      >
        <HelpCircle className="h-4 w-4" />
        <span className="hidden sm:inline">Help</span>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-600 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              Brand Book Creator Guide
            </DialogTitle>
            <DialogDescription>
              Build your complete brand identity in 6 steps. Each section builds on the last.
            </DialogDescription>
          </DialogHeader>

          <div className="overflow-y-auto flex-1 -mx-6 px-6 space-y-4 py-4">
            {/* Why Brand Books Matter */}
            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950/40 dark:to-slate-950/40 border border-blue-200 dark:border-blue-800 p-5 space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-500" />
                <h3 className="font-semibold text-lg text-blue-900 dark:text-blue-100">
                  Why Your Brand Book Is Everything
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Businesses with consistent branding across all channels see up to <strong className="text-foreground">23% more revenue</strong> than those without it. A brand book isn&apos;t a nice-to-have — it&apos;s the single document that keeps your entire team, your marketing, and your customer experience aligned.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Think of it as <strong className="text-foreground">your business&apos;s DNA on paper</strong> — who you are, what you stand for, how you sound, and how you look. It&apos;s the difference between a brand people recognize and trust, and one they forget.
              </p>
            </div>

            {/* Relatable Example */}
            <div className="rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 p-5 space-y-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <h3 className="font-semibold text-amber-900 dark:text-amber-100">
                  Sound Familiar?
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                &ldquo;Your front desk greets customers with &apos;Hey, what&apos;s up!&apos; while your website sounds like a Fortune 500 press release. Your social media uses bright orange, but your invoices are forest green. A new hire asks &apos;What do we actually stand for?&apos; and three employees give three different answers.&rdquo;
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Without a brand book, every person on your team is guessing. With one, <strong className="text-foreground">everyone speaks the same language</strong> — from your receptionist to your social media manager to the AI tools you deploy.
              </p>
            </div>

            {/* What This Tool Does */}
            <div className="rounded-lg border border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20 p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <h3 className="font-semibold text-green-900 dark:text-green-100">
                  What This Tool Does
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Brand Book Creator walks you through <strong className="text-foreground">6 sections</strong> that capture every piece of your brand identity — from your core purpose to your exact hex colors. When you&apos;re done, you&apos;ll have a living brand guide that syncs directly into your Go High Level account and powers every other Master&apos;s Edge tool.
              </p>
            </div>

            {/* Section Divider */}
            <div className="flex items-center gap-3 pt-2">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">The 6 Steps</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded-lg border p-4 space-y-3"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center shrink-0`}
                  >
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
                <div className="flex items-start gap-2 rounded-md bg-amber-50 dark:bg-amber-950/30 p-3">
                  <Lightbulb className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-xs text-amber-800 dark:text-amber-200">
                    {step.tip}
                  </p>
                </div>
              </div>
            ))}

            {/* Cross-app integration note */}
            <div className="rounded-lg border-2 border-dashed border-blue-200 dark:border-blue-800 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-500" />
                <h3 className="font-semibold text-blue-900 dark:text-blue-100">
                  Connects to Your Other Apps
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Your Brand Book feeds data into the entire Master&apos;s Edge ecosystem:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-3 w-3" />
                  <span><strong>Hiring Oracle</strong> screens candidates against your values</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-3 w-3" />
                  <span><strong>SOP Factory</strong> applies your voice to customer processes</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-3 w-3" />
                  <span><strong>Conversations Coach</strong> uses your values as ethical framework</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-4">
            <Button onClick={() => setOpen(false)} className="w-full">
              Got it, let&apos;s build!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
