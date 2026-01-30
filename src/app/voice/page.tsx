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
  const [selectedArchetype, setSelectedArchetype] = useState("The Sage");
  const [voiceAdjectives, setVoiceAdjectives] = useState(["Confident", "Approachable", "Direct", "Witty", "Expert"]);
  const [newAdjective, setNewAdjective] = useState("");
  const [neverWords, setNeverWords] = useState(["Synergy", "Pivot", "Disrupt", "Leverage", "Circle back"]);
  const [newNeverWord, setNewNeverWord] = useState("");

  const [toneShifts, setToneShifts] = useState({
    social: "Casual and energetic. Short sentences. Occasional humor. Always end with a question or CTA.",
    email: "Professional but warm. Clear subject lines. Get to the point fast. Sign off personally.",
    sales: "Confident, not pushy. Lead with transformation. Use client success stories. Address objections head-on.",
    crisis: "Calm and transparent. Own the mistake immediately. Explain the fix. Follow up with action.",
    support: "Patient and empathetic. No jargon. Step-by-step guidance. Always confirm understanding.",
  });

  const [copyRules, setCopyRules] = useState({
    transformation: "Lead with WHO they become, not WHAT the product does.",
    headlines: "Use numbers, action verbs, and specific outcomes. 'Save 10 Hours a Week' > 'Increase Efficiency'",
    cta: "Use first-person: 'Start My Free Trial' not 'Start Your Free Trial'. Make the action clear.",
    forbidden: "No buzzwords, no corporate speak, no passive voice. Write like you talk.",
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
                    <label className="text-sm font-medium capitalize">{key === "cta" ? "Calls to Action" : key} Tone</label>
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

                <div className="flex items-start gap-2 rounded-md bg-violet-50 dark:bg-violet-950/30 p-4">
                  <Lightbulb className="h-4 w-4 text-violet-500 mt-0.5 shrink-0" />
                  <div className="text-xs text-violet-800 dark:text-violet-200 space-y-1">
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
