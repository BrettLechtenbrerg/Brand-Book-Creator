"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Building2,
  Save,
  CheckCircle2,
  Lightbulb,
  Target,
  Eye,
  Compass,
  Quote,
} from "lucide-react";

export default function FoundationPage() {
  const [saved, setSaved] = useState(false);
  const [foundation, setFoundation] = useState({
    businessName: "Total Success AI (TSAI)",
    tagline: "People-Centered AI Solutions for the Real World",
    purpose: "To prove that AI and humanity aren't at odds—that when technology serves people first, everyone wins.",
    vision: "A future where AI makes work more human, not less.",
    mission: "We partner with businesses to embrace AI through strategic consulting, hands-on implementation, and practical training—working until every individual is confident, every team is elevated, and the business thrives.",
    positioning: "Unlike AI consultants who focus solely on efficiency and automation, Total Success AI puts people at the center—ensuring technology empowers individuals, strengthens teams, and creates lasting business success.",
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const fields = [
    {
      key: "businessName" as const,
      label: "Business Name",
      icon: Building2,
      type: "input",
      placeholder: "Your company name",
      tip: "The official name your customers know you by.",
    },
    {
      key: "tagline" as const,
      label: "Tagline",
      icon: Quote,
      type: "input",
      placeholder: "A memorable phrase that captures your brand essence",
      tip: "Keep it under 10 words. It should be immediately memorable.",
    },
    {
      key: "purpose" as const,
      label: "Brand Purpose",
      icon: Target,
      type: "textarea",
      placeholder: "Why does your business exist beyond making money?",
      tip: "Your purpose answers the question: 'If we disappeared tomorrow, what would the world lose?'",
    },
    {
      key: "vision" as const,
      label: "Vision Statement",
      icon: Eye,
      type: "textarea",
      placeholder: "What does the world look like when you've fully succeeded?",
      tip: "Think 10+ years out. Paint a picture of the future you're building toward.",
    },
    {
      key: "mission" as const,
      label: "Mission Statement",
      icon: Compass,
      type: "textarea",
      placeholder: "What do you do, for whom, and how?",
      tip: "Your mission is how you achieve the vision. It should be actionable and present-tense.",
    },
    {
      key: "positioning" as const,
      label: "Positioning Statement",
      icon: Lightbulb,
      type: "textarea",
      placeholder: "For [target audience] who [need], [brand] provides [solution] that [key benefit] — unlike [competitors], we [differentiator].",
      tip: "Use the formula: For [audience] who [need], [brand] provides [what] that [benefit] — unlike [alternatives], we [differentiator].",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-600 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              Brand Foundation
            </h1>
            <p className="text-muted-foreground mt-1">
              The core identity of your brand — everything else builds on this.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="success">Section 1 of 6</Badge>
            <Button onClick={handleSave} className="gap-2">
              {saved ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Saved!
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Save Foundation
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          {fields.map((field) => (
            <Card key={field.key}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <field.icon className="h-5 w-5 text-blue-500" />
                  {field.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {field.type === "input" ? (
                  <Input
                    value={foundation[field.key]}
                    onChange={(e) =>
                      setFoundation({ ...foundation, [field.key]: e.target.value })
                    }
                    placeholder={field.placeholder}
                  />
                ) : (
                  <Textarea
                    value={foundation[field.key]}
                    onChange={(e) =>
                      setFoundation({ ...foundation, [field.key]: e.target.value })
                    }
                    placeholder={field.placeholder}
                    rows={4}
                  />
                )}
                <div className="flex items-start gap-2 rounded-md bg-amber-50 dark:bg-amber-950/30 p-3">
                  <Lightbulb className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-xs text-amber-800 dark:text-amber-200">
                    {field.tip}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Preview Card */}
        <Card className="border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="text-lg">Preview: Brand Foundation Summary</CardTitle>
            <CardDescription>How your foundation looks when complete</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-50 dark:from-blue-950/30 dark:to-blue-950/30 p-6 space-y-4">
              <h2 className="text-2xl font-bold">{foundation.businessName || "Your Brand Name"}</h2>
              <p className="text-lg italic text-blue-700 dark:text-blue-300">
                &ldquo;{foundation.tagline || "Your tagline here"}&rdquo;
              </p>
              <Separator />
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider">Purpose</p>
                  <p className="text-sm mt-1">{foundation.purpose || "—"}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider">Vision</p>
                  <p className="text-sm mt-1">{foundation.vision || "—"}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider">Mission</p>
                  <p className="text-sm mt-1">{foundation.mission || "—"}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider">Positioning</p>
                  <p className="text-sm mt-1">{foundation.positioning || "—"}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
