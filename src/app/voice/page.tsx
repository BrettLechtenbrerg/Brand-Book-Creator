"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Mic2,
  Save,
  CheckCircle2,
  Lightbulb,
  Volume2,
  PenTool,
  Sparkles,
  MessageCircle,
  X,
  Plus,
} from "lucide-react";

const archetypes = [
  { name: "The Sage + The Ally", desc: "Wisdom and partnership — expert guidance with genuine care and collaboration", examples: "Total Success AI — combining deep expertise with true people-first partnership" },
  { name: "The Sage", desc: "Wisdom, expertise, thought leadership", examples: "Google, BBC, Harvard" },
  { name: "The Hero", desc: "Courage, determination, mastery", examples: "Nike, FedEx, US Army" },
  { name: "The Creator", desc: "Innovation, imagination, self-expression", examples: "Apple, Adobe, Lego" },
  { name: "The Caregiver", desc: "Nurturing, generosity, service", examples: "Campbell's, TOMS, Johnson & Johnson" },
  { name: "The Explorer", desc: "Freedom, discovery, adventure", examples: "Jeep, REI, National Geographic" },
  { name: "The Ruler", desc: "Authority, stability, premium quality", examples: "Rolex, Mercedes, Microsoft" },
  { name: "The Rebel", desc: "Revolution, disruption, liberation", examples: "Harley-Davidson, Virgin, Diesel" },
  { name: "The Everyperson", desc: "Belonging, authenticity, relatability", examples: "IKEA, Target, Budweiser" },
];

export default function VoicePage() {
  const [saved, setSaved] = useState(false);
  const [selectedArchetype, setSelectedArchetype] = useState("The Sage + The Ally");
  const [voiceAdjectives, setVoiceAdjectives] = useState(["Warm", "Confident", "Encouraging", "Clear", "Grounded", "Empowering"]);
  const [newAdjective, setNewAdjective] = useState("");
  const [neverWords, setNeverWords] = useState(["Revolutionary", "Game-changing", "Disruptive", "Cutting-edge", "Left behind", "Obsolete", "Replaced", "Leverage", "Synergy", "Optimize", "Stakeholders", "Utilize", "Simply", "Just", "Obviously"]);
  const [newNeverWord, setNewNeverWord] = useState("");

  const [toneShifts, setToneShifts] = useState({
    socialMedia: "Warm and conversational. Short sentences. Lead with value, not sales. Use encouraging language. End with questions to spark engagement. Emoji use: moderate and purposeful.",
    websiteCopy: "Confident and clear. Lead with transformation, not features. Use the people-first framework. Headlines should inspire, body copy should inform. Every page should have a clear CTA.",
    training: "Patient, encouraging, step-by-step. Meet people where they are. Celebrate small wins. Use real examples. Avoid jargon. Make AI feel approachable and exciting, not intimidating.",
    consulting: "Professional yet warm. Listen first, advise second. Use data to support recommendations. Frame solutions around their specific situation. Always tie back to people-first principles.",
    email: "Professional but personal. Clear subject lines under 50 characters. Get to the value fast. One CTA per email. Sign off warmly. Footer includes boilerplate.",
    technical: "Clear, precise, and thorough. Use plain language where possible. Include step-by-step instructions. Add context for WHY, not just HOW. Make documentation accessible to non-technical users.",
    crisis: "Calm, transparent, and empathetic. Acknowledge the concern immediately. Explain what happened and what we are doing about it. Follow up with concrete next steps. Never minimize or deflect.",
  });

  const [copyRules, setCopyRules] = useState({
    transformation: "Lead with WHO they become, not WHAT the product does. Use the Transformation Hierarchy: Transformation > Outcome > Benefit > Feature.",
    headlines: "Focus on empowerment and possibility. Use clear, encouraging language. 'Empower Your Team with AI' > 'AI Automation Tools'. Always people-first framing.",
    cta: "Use empowering, action-oriented language: 'Start Your Journey' > 'Buy Now'. Frame CTAs as the beginning of partnership, not a transaction.",
    forbidden: "Never use: revolutionary, game-changing, disruptive, cutting-edge, left behind, obsolete, replaced, leverage, synergy, optimize, stakeholders, utilize. No fear-based messaging. No passive voice.",
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const addAdjective = () => {
    if (newAdjective.trim()) {
      setVoiceAdjectives([...voiceAdjectives, newAdjective.trim()]);
      setNewAdjective("");
    }
  };

  const addNeverWord = () => {
    if (newNeverWord.trim()) {
      setNeverWords([...neverWords, newNeverWord.trim()]);
      setNewNeverWord("");
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Mic2 className="w-5 h-5 text-white" />
              </div>
              Voice & Personality
            </h1>
            <p className="text-muted-foreground mt-1">
              How your brand sounds, feels, and communicates across every touchpoint.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="info">Section 3 of 6</Badge>
            <Button onClick={handleSave} className="gap-2">
              {saved ? <><CheckCircle2 className="h-4 w-4" /> Saved!</> : <><Save className="h-4 w-4" /> Save Voice</>}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="voice" className="space-y-6">
          <TabsList>
            <TabsTrigger value="voice">Brand Voice</TabsTrigger>
            <TabsTrigger value="tone">Tone Shifts</TabsTrigger>
            <TabsTrigger value="copy">Copy Style</TabsTrigger>
            <TabsTrigger value="personality">Personality</TabsTrigger>
          </TabsList>

          {/* Brand Voice Tab */}
          <TabsContent value="voice" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Volume2 className="h-5 w-5 text-amber-500" />
                  Voice Adjectives
                </CardTitle>
                <CardDescription>
                  5 words that describe how your brand sounds. These should be consistent across ALL communication.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {voiceAdjectives.map((adj, i) => (
                    <Badge key={i} variant="outline" className="text-sm py-1.5 px-3 gap-1.5">
                      {adj}
                      <button onClick={() => setVoiceAdjectives(voiceAdjectives.filter((_, idx) => idx !== i))}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newAdjective}
                    onChange={(e) => setNewAdjective(e.target.value)}
                    placeholder="Add a voice adjective..."
                    onKeyDown={(e) => e.key === "Enter" && addAdjective()}
                  />
                  <Button variant="outline" onClick={addAdjective}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Words We Never Use</CardTitle>
                <CardDescription>
                  Words that don&apos;t fit your brand. Ban corporate jargon and anything that feels inauthentic.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {neverWords.map((word, i) => (
                    <Badge key={i} variant="destructive" className="text-sm py-1.5 px-3 gap-1.5">
                      {word}
                      <button onClick={() => setNeverWords(neverWords.filter((_, idx) => idx !== i))}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newNeverWord}
                    onChange={(e) => setNewNeverWord(e.target.value)}
                    placeholder="Add a banned word..."
                    onKeyDown={(e) => e.key === "Enter" && addNeverWord()}
                  />
                  <Button variant="outline" onClick={addNeverWord}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tone Shifts Tab */}
          <TabsContent value="tone" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-amber-500" />
                  Tone by Context
                </CardTitle>
                <CardDescription>
                  Your voice stays the same but your tone shifts by situation — like how you talk differently to your best friend vs. a new client.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(toneShifts).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <label className="text-sm font-medium capitalize">{key.replace(/([A-Z])/g, " $1")} Tone</label>
                    <Textarea
                      value={value}
                      onChange={(e) => setToneShifts({ ...toneShifts, [key]: e.target.value })}
                      rows={2}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Copy Style Tab */}
          <TabsContent value="copy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <PenTool className="h-5 w-5 text-amber-500" />
                  Copy Rules & Writing Style
                </CardTitle>
                <CardDescription>
                  The rules your team follows when writing anything — from social posts to email campaigns.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(copyRules).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <label className="text-sm font-medium capitalize">
                      {key === "cta" ? "Calls to Action" : key} Rule
                    </label>
                    <Textarea
                      value={value}
                      onChange={(e) => setCopyRules({ ...copyRules, [key]: e.target.value })}
                      rows={2}
                    />
                  </div>
                ))}

                <div className="flex items-start gap-2 rounded-md bg-blue-50 dark:bg-blue-950/30 p-4">
                  <Lightbulb className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                  <div className="text-xs text-blue-800 dark:text-blue-200 space-y-1">
                    <p className="font-semibold">The Transformation Hierarchy:</p>
                    <p>1. Transformation (highest) — Who they BECOME</p>
                    <p>2. Outcome — The result they achieve</p>
                    <p>3. Benefit — What&apos;s in it for them</p>
                    <p>4. Feature (lowest) — What it is/does</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Personality Tab */}
          <TabsContent value="personality" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-amber-500" />
                  Brand Archetype
                </CardTitle>
                <CardDescription>
                  If your brand were a person, which archetype fits best? This shapes how people emotionally connect with you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2">
                  {archetypes.map((arch) => (
                    <button
                      key={arch.name}
                      onClick={() => setSelectedArchetype(arch.name)}
                      className={`rounded-lg border p-4 text-left transition-all ${
                        selectedArchetype === arch.name
                          ? "border-primary bg-primary/5 ring-2 ring-primary"
                          : "hover:border-primary/50"
                      }`}
                    >
                      <p className="font-semibold">{arch.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">{arch.desc}</p>
                      <p className="text-xs text-muted-foreground mt-2">Examples: {arch.examples}</p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
