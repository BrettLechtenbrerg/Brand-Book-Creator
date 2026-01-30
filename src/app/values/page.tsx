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
  Heart,
  Plus,
  Trash2,
  Save,
  CheckCircle2,
  Lightbulb,
  BookOpen,
  GripVertical,
} from "lucide-react";

interface BrandValue {
  id: number;
  name: string;
  description: string;
  inAction: string;
}

export default function ValuesPage() {
  const [saved, setSaved] = useState(false);
  const [values, setValues] = useState<BrandValue[]>([
    {
      id: 1,
      name: "Quality Over Speed",
      description: "We never ship something we're not proud of. Every product, every interaction, every system meets our standard.",
      inAction: "We'd rather delay a launch than deliver something half-baked. Our clients deserve our best work.",
    },
    {
      id: 2,
      name: "Radical Transparency",
      description: "We share the why behind every decision. No hidden agendas, no corporate speak.",
      inAction: "If something goes wrong, we tell clients immediately and explain how we're fixing it.",
    },
    {
      id: 3,
      name: "Automate the Grind",
      description: "If a computer can do it, a human shouldn't have to. We relentlessly eliminate busywork.",
      inAction: "Every process gets evaluated: Can this be automated? If yes, it should be.",
    },
    {
      id: 4,
      name: "Elevate the Human",
      description: "Technology serves people, not the other way around. We free humans to do what only humans can.",
      inAction: "Our tools handle the data crunching so owners can focus on relationships and strategy.",
    },
    {
      id: 5,
      name: "Continuous Growth",
      description: "We're students first, experts second. The moment we stop learning, we stop leading.",
      inAction: "Monthly team learning sessions, open feedback culture, and celebrating mistakes as lessons.",
    },
  ]);

  const [story, setStory] = useState({
    short: "Total Success AI was born when two business owners realized they were spending more time fighting their software than running their businesses. Brett and Manny combined their expertise in AI and business operations to build tools that actually work — automation that handles the grind so entrepreneurs can focus on what matters.",
    full: "It started with frustration. Brett Lechtenberg was drowning in admin work — scheduling, follow-ups, reporting — the endless cycle that keeps business owners busy but not productive. When he met Manny Torres, they discovered they shared the same vision: what if AI could handle all the repetitive work that steals entrepreneurs' time?\n\nThey started building. Not generic tools that sort of work, but purpose-built systems for real business problems. The kind of tools they wished existed when they were scaling their own businesses. Every prompt, every workflow, every dashboard was designed with one question: 'Will this actually save a business owner time and make them money?'\n\nThe Master's Edge Business Program became their answer — a complete system of AI-powered tools that turns chaos into clarity. From hiring decisions to brand strategy to competitor intelligence, each tool automates the grind and elevates the human.\n\nToday, Total Success AI serves business owners who refuse to accept that 'busy' means 'productive.' Because the most successful people aren't the ones who work the hardest — they're the ones who work the smartest.",
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const addValue = () => {
    const newValue: BrandValue = {
      id: Date.now(),
      name: "",
      description: "",
      inAction: "",
    };
    setValues([...values, newValue]);
  };

  const removeValue = (id: number) => {
    setValues(values.filter((v) => v.id !== id));
  };

  const updateValue = (id: number, field: keyof BrandValue, value: string) => {
    setValues(values.map((v) => (v.id === id ? { ...v, [field]: value } : v)));
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-600 to-rose-600 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              Values & Story
            </h1>
            <p className="text-muted-foreground mt-1">
              Your core values and origin story — the heart of your brand.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="success">Section 2 of 6</Badge>
            <Button onClick={handleSave} className="gap-2">
              {saved ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Saved!
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Save Values
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Values Section */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Core Values</CardTitle>
                <CardDescription>
                  3-7 non-negotiable principles that guide every decision. Good values are specific enough to screen hiring decisions.
                </CardDescription>
              </div>
              <Button variant="outline" size="sm" onClick={addValue} className="gap-2">
                <Plus className="h-4 w-4" />
                Add Value
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {values.map((value, index) => (
              <div key={value.id} className="rounded-lg border p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GripVertical className="h-4 w-4 text-muted-foreground" />
                    <Badge variant="outline">Value {index + 1}</Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeValue(value.id)}
                    className="h-8 w-8 text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium">Value Name</label>
                    <Input
                      value={value.name}
                      onChange={(e) => updateValue(value.id, "name", e.target.value)}
                      placeholder="e.g., Quality Over Speed"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">What It Means</label>
                    <Textarea
                      value={value.description}
                      onChange={(e) => updateValue(value.id, "description", e.target.value)}
                      placeholder="Explain this value in plain language..."
                      rows={2}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">What It Looks Like in Action</label>
                    <Textarea
                      value={value.inAction}
                      onChange={(e) => updateValue(value.id, "inAction", e.target.value)}
                      placeholder="Give a real example of this value being practiced..."
                      rows={2}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            ))}

            {values.length < 3 && (
              <div className="flex items-start gap-2 rounded-md bg-amber-50 dark:bg-amber-950/30 p-3">
                <Lightbulb className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                <p className="text-xs text-amber-800 dark:text-amber-200">
                  We recommend at least 3 core values. They should be specific enough that someone could
                  disagree with them — &ldquo;We value excellence&rdquo; is too generic, but &ldquo;We&apos;d rather delay a launch
                  than ship something mediocre&rdquo; is specific and screenable.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Brand Story */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-pink-500" />
              Brand Origin Story
            </CardTitle>
            <CardDescription>
              Every great brand has a story. Tell yours in two versions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Short Version (50-75 words)</label>
              <p className="text-xs text-muted-foreground">For social media bios, elevator conversations, and quick intros.</p>
              <Textarea
                value={story.short}
                onChange={(e) => setStory({ ...story, short: e.target.value })}
                placeholder="Tell your origin story in 2-3 sentences..."
                rows={4}
              />
              <p className="text-xs text-muted-foreground text-right">
                {story.short.split(/\s+/).filter(Boolean).length} words
              </p>
            </div>

            <Separator />

            <div className="space-y-2">
              <label className="text-sm font-medium">Full Version (250-400 words)</label>
              <p className="text-xs text-muted-foreground">For your website About page, press kits, and brand book.</p>
              <Textarea
                value={story.full}
                onChange={(e) => setStory({ ...story, full: e.target.value })}
                placeholder="Tell the full story — what problem did you see? What was the 'aha' moment? What are you building toward?"
                rows={12}
              />
              <p className="text-xs text-muted-foreground text-right">
                {story.full.split(/\s+/).filter(Boolean).length} words
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
