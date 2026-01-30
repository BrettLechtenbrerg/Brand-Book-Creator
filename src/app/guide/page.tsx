"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  Building2,
  Heart,
  Mic2,
  Palette,
  Users,
  Hash,
  Settings,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Clock,
  Target,
  Sparkles,
} from "lucide-react";

const sections = [
  {
    icon: Building2,
    color: "from-blue-600 to-blue-600",
    title: "1. Brand Foundation",
    time: "30 min",
    description: "Start here. Define your business name, tagline, purpose, vision, mission, and positioning statement. This is the bedrock everything else builds on.",
    tips: [
      "Your purpose is WHY you exist beyond making money",
      "Your vision is the future you're building toward (10+ years)",
      "Your mission is HOW you achieve the vision (present tense)",
      "Use the positioning formula: For [audience] who [need], [brand] provides [what]...",
    ],
  },
  {
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    title: "2. Values & Story",
    time: "45 min",
    description: "Define your 3-7 core values with descriptions and real-world examples. Then craft your brand origin story in short (50-75 words) and full (250-400 words) versions.",
    tips: [
      "Good values are specific enough to screen hiring decisions",
      "Each value needs: Name, What It Means, What It Looks Like in Action",
      "Your origin story should have a clear problem/aha-moment/solution arc",
      "Short version for social media, full version for your About page",
    ],
  },
  {
    icon: Mic2,
    color: "from-amber-500 to-orange-500",
    title: "3. Voice & Personality",
    time: "45 min",
    description: "Establish how your brand sounds with 5 voice adjectives, tone shifts by context (social, email, sales, crisis), copy style rules, and your brand archetype.",
    tips: [
      "Voice is WHAT you sound like (consistent). Tone is HOW you say it (shifts by context)",
      "Choose one of 8 archetypes: Sage, Hero, Creator, Caregiver, Explorer, Ruler, Rebel, Everyperson",
      "Document words you ALWAYS use and words you NEVER use",
      "The Transformation Hierarchy: Transformation > Outcome > Benefit > Feature",
    ],
  },
  {
    icon: Palette,
    color: "from-blue-500 to-cyan-500",
    title: "4. Visual Identity",
    time: "30 min",
    description: "Set your brand colors with hex codes, typography choices, logo usage guidelines, and photography/imagery style.",
    tips: [
      "Always include hex codes so every platform matches exactly",
      "2-3 primary colors + 3-4 secondary/accent colors is ideal",
      "Document what NOT to do with your logo (just as important!)",
      "Choose web-safe fonts with fallbacks",
    ],
  },
  {
    icon: Users,
    color: "from-green-500 to-emerald-500",
    title: "5. Audience & Messaging",
    time: "60 min",
    description: "Create 2-4 target audience personas, craft three versions of your elevator pitch, and build 3-5 key messaging pillars with proof points.",
    tips: [
      "Give each persona a memorable name (Scaling Steve, Growth-Mode Gina)",
      "Include pain points, goals, objections, and where to reach them",
      "Three pitch versions: 15-sec (cocktail), 30-sec (networking), conversational",
      "Every message pillar needs a proof point (data, testimonial, case study)",
    ],
  },
  {
    icon: Hash,
    color: "from-slate-500 to-gray-600",
    title: "6. Brand Assets",
    time: "30 min",
    description: "Compile your hashtag library, SEO keywords, trademark rules, and usage guidelines with boilerplate copy.",
    tips: [
      "Organize hashtags: branded, values, service, industry, campaign",
      "Include negative keywords (what you don't want to rank for)",
      "Document exact spelling/capitalization rules",
      "Write 50-word and 100-word boilerplate descriptions",
    ],
  },
];

export default function GuidePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            Admin Guide
          </h1>
          <p className="text-muted-foreground mt-1">
            Complete walkthrough for building your brand book.
          </p>
        </div>

        {/* Overview */}
        <Card className="border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-500" />
              What is the Brand Book Creator?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              The Brand Book Creator helps you define the complete DNA of your business across <strong>15 essential brand elements</strong> organized into 6 sections. When complete, you&apos;ll have a professional brand identity document that ensures consistency across all marketing, hiring, operations, and customer interactions.
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg bg-blue-50 dark:bg-blue-950/30 p-4 text-center">
                <Clock className="h-6 w-6 text-blue-500 mx-auto" />
                <p className="text-2xl font-bold mt-2">~4 hours</p>
                <p className="text-xs text-muted-foreground">Total build time</p>
              </div>
              <div className="rounded-lg bg-blue-50 dark:bg-blue-950/30 p-4 text-center">
                <Target className="h-6 w-6 text-blue-500 mx-auto" />
                <p className="text-2xl font-bold mt-2">15</p>
                <p className="text-xs text-muted-foreground">Brand elements defined</p>
              </div>
              <div className="rounded-lg bg-blue-50 dark:bg-blue-950/30 p-4 text-center">
                <CheckCircle2 className="h-6 w-6 text-blue-500 mx-auto" />
                <p className="text-2xl font-bold mt-2">6</p>
                <p className="text-xs text-muted-foreground">Sections to complete</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step-by-step */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center shrink-0`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                      <Badge variant="secondary" className="gap-1">
                        <Clock className="h-3 w-3" />
                        {section.time}
                      </Badge>
                    </div>
                    <CardDescription className="mt-1">{section.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-amber-50 dark:bg-amber-950/30 p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-amber-500" />
                    <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">Pro Tips</p>
                  </div>
                  <ul className="space-y-1.5 ml-6">
                    {section.tips.map((tip, i) => (
                      <li key={i} className="text-xs text-amber-800 dark:text-amber-200 flex items-start gap-2">
                        <ArrowRight className="h-3 w-3 mt-0.5 shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GHL Setup */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Settings className="h-5 w-5 text-blue-500" />
              Go High Level Setup
            </CardTitle>
            <CardDescription>
              Connect your brand data to GHL so it flows into all Master&apos;s Edge apps.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {[
                "Create custom fields in GHL for each brand element (see Settings > Custom Fields)",
                "Add the webhook URL to a GHL workflow (Settings > Go High Level tab)",
                "Map your brand data to GHL custom fields",
                "Test the connection by saving your brand foundation",
                "Verify data appears in GHL contact records",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 text-xs font-bold text-blue-600">
                    {i + 1}
                  </div>
                  <p className="text-sm">{step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <Card className="bg-gradient-to-br from-blue-50 to-blue-50 dark:from-blue-950/30 dark:to-blue-950/30">
          <CardContent className="py-6 text-center space-y-2">
            <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
              Part of The Master&apos;s Edge Business Program
            </p>
            <p className="text-xs text-blue-600 dark:text-blue-400">
              by Total Success AI — &ldquo;Automate the grind. Elevate the human.&rdquo;
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
