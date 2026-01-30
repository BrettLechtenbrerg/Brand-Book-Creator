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
      name: "People First",
      description: "Humans are at the center of every decision we make. Technology exists to serve people, not the other way around.",
      inAction: "Every AI solution starts with understanding the humans who will use it. We never implement technology that doesn't empower the people it touches.",
    },
    {
      id: 2,
      name: "Empowerment Over Dependence",
      description: "We teach people to fish, not just catch fish for them. Our goal is confident, capable teams — not perpetual clients.",
      inAction: "Every engagement includes hands-on training until team members are confident using AI tools independently. We measure success by their self-sufficiency.",
    },
    {
      id: 3,
      name: "Partnership Not Just Service",
      description: "We're true collaborators, not vendors. We stay engaged until goals are met — no implement-and-disappear.",
      inAction: "We don't hand off a deliverable and walk away. We work alongside teams through implementation, training, and optimization until success is achieved.",
    },
    {
      id: 4,
      name: "Practical Over Theoretical",
      description: "Real-world, actionable solutions beat academic frameworks every time. If it doesn't work in practice, it doesn't work.",
      inAction: "Every tool and system is designed for real businesses with real constraints. No ivory tower strategies — just practical solutions that produce measurable results.",
    },
    {
      id: 5,
      name: "Continuous Learning",
      description: "Growth mindset for all. The AI landscape evolves daily, and so do we. We're students first, experts second.",
      inAction: "Regular team learning sessions, staying current with AI developments, and openly sharing knowledge with our community and clients.",
    },
    {
      id: 6,
      name: "Community",
      description: "Building connections and ecosystems matters. Success is better when shared, and collaboration beats isolation.",
      inAction: "We actively build communities around our programs, connect clients with each other, and contribute to the broader conversation about responsible AI adoption.",
    },
    {
      id: 7,
      name: "Integrity & Transparency",
      description: "Honest guidance, always. We tell clients what they need to hear, not just what they want to hear.",
      inAction: "If AI isn't the right solution, we say so. We share our reasoning openly, admit when we're wrong, and never oversell capabilities.",
    },
  ]);

  const [story, setStory] = useState({
    short: "Total Success AI was founded by Brett Lechtenberg and Manny Torres who saw a gap in the AI consulting space — everyone was focused on technology, but nobody was putting people first. They built TSAI on a simple belief: when AI serves people, not the other way around, everyone wins. Today, TSAI partners with businesses to implement AI solutions that empower individuals, strengthen teams, and drive lasting success.",
    full: "It started with a question that wouldn't go away: Why does adopting AI have to feel threatening?\n\nBrett Lechtenberg and Manny Torres saw it everywhere — businesses rushing to implement AI, employees worried about being replaced, leaders overwhelmed by promises of 'disruption' and 'revolution.' The AI industry was moving fast, but it was leaving people behind.\n\nThey knew there had to be a better way. Not AI that replaces humans, but AI that empowers them. Not consultants who implement and disappear, but partners who stay until every team member is confident and every system is thriving.\n\nThat conviction became Total Success AI.\n\nFrom day one, TSAI was built on a different philosophy: People First. Every tool, every training, every consultation starts with the humans who will use it. Because the most powerful AI in the world is worthless if the people it's meant to serve don't trust it, understand it, or feel empowered by it.\n\nThe approach works at three levels. First, individuals gain confidence — they go from fearing AI to wielding it. Then teams align — collaboration improves, communication sharpens, and silos break down. Finally, the business transforms — not through disruption, but through sustainable, people-centered growth.\n\nThrough The Master's Edge Business Program, TSAI delivers 15 integrated systems that cover everything from brand identity to hiring, from SOPs to competitive intelligence. Each system is practical, actionable, and designed for real businesses with real constraints.\n\nToday, Total Success AI serves small business owners, chamber members, team leaders, and solopreneurs who believe technology should work for people — not the other way around. Because when you put people at the center, success isn't just possible. It's inevitable.",
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
