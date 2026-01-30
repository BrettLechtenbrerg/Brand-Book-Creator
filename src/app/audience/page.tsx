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
  Users,
  Save,
  CheckCircle2,
  Plus,
  Trash2,
  MessageSquare,
  Target,
  Lightbulb,
  Quote,
} from "lucide-react";

interface Persona {
  id: number;
  name: string;
  role: string;
  age: string;
  painPoints: string;
  goals: string;
  objections: string;
  whereToBuy: string;
}

interface KeyMessage {
  id: number;
  pillar: string;
  mainMessage: string;
  supporting: string;
  proofPoint: string;
}

export default function AudiencePage() {
  const [saved, setSaved] = useState(false);

  const [personas, setPersonas] = useState<Persona[]>([
    {
      id: 1,
      name: "Scaling Steve",
      role: "Small Business Owner, 5-20 employees",
      age: "35-50",
      painPoints: "Drowning in admin work. Knows he should delegate but doesn't trust anyone to do it right. Working 60+ hours but revenue is flat.",
      goals: "Scale to 7 figures without burning out. Build systems that run without him. Finally take a vacation without the business falling apart.",
      objections: "\"I don't have time to learn new tools.\" \"My business is different.\" \"I've tried automation before and it didn't work.\"",
      whereToBuy: "LinkedIn, business podcasts, local BNI groups, Google searches for business automation",
    },
    {
      id: 2,
      name: "Growth-Mode Gina",
      role: "Agency Owner / Marketing Professional",
      age: "28-45",
      painPoints: "Struggling to standardize client delivery. Each project feels like starting from scratch. Team depends on her for every decision.",
      goals: "Build repeatable systems. Scale client capacity without proportional headcount growth. Position agency as premium.",
      objections: "\"We already have processes (kind of).\" \"My team won't use it.\" \"We're too unique for templates.\"",
      whereToBuy: "Instagram, YouTube, GHL community, marketing conferences, peer mastermind groups",
    },
  ]);

  const [pitches, setPitches] = useState({
    cocktail: "We build AI systems that handle the busywork so business owners can focus on growth.",
    networking: "Total Success AI builds intelligent automation for small businesses using Go High Level. We take the repetitive tasks that eat up your day — follow-ups, scheduling, reporting — and turn them into automated systems. Business owners typically save 10-15 hours a week.",
    conversational: "You know how most business owners spend half their time on stuff that doesn't actually grow the business? Emails, scheduling, data entry, follow-ups? We build AI systems that handle all of that automatically, so they can focus on the work that actually matters. Our clients usually get back 10-15 hours a week.",
  });

  const [keyMessages, setKeyMessages] = useState<KeyMessage[]>([
    {
      id: 1,
      pillar: "Time Freedom",
      mainMessage: "Stop working IN your business and start working ON it.",
      supporting: "Our automation systems handle the repetitive tasks that steal your strategic thinking time.",
      proofPoint: "Average client saves 12 hours per week within the first 30 days.",
    },
    {
      id: 2,
      pillar: "Built for GHL",
      mainMessage: "Purpose-built for Go High Level — not generic tools forced to fit.",
      supporting: "Every system integrates natively with your existing GHL setup. No Zapier. No duct tape.",
      proofPoint: "All 15 systems designed specifically for GHL's custom fields, workflows, and pipelines.",
    },
    {
      id: 3,
      pillar: "Enterprise Quality, Owner Price",
      mainMessage: "The tools big companies have, at a price small businesses can afford.",
      supporting: "Open source integrations + AI means you get Fortune 500 capabilities without the Fortune 500 budget.",
      proofPoint: "CEO Dashboard with 25+ KPIs costs $0/month to run on open source Metabase.",
    },
  ]);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const addPersona = () => {
    setPersonas([...personas, { id: Date.now(), name: "", role: "", age: "", painPoints: "", goals: "", objections: "", whereToBuy: "" }]);
  };

  const addMessage = () => {
    setKeyMessages([...keyMessages, { id: Date.now(), pillar: "", mainMessage: "", supporting: "", proofPoint: "" }]);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              Audience & Messaging
            </h1>
            <p className="text-muted-foreground mt-1">
              Who you serve, what you say to them, and how you prove it.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="info">Section 5 of 6</Badge>
            <Button onClick={handleSave} className="gap-2">
              {saved ? <><CheckCircle2 className="h-4 w-4" /> Saved!</> : <><Save className="h-4 w-4" /> Save Audience</>}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="personas" className="space-y-6">
          <TabsList>
            <TabsTrigger value="personas">Target Personas</TabsTrigger>
            <TabsTrigger value="pitches">Elevator Pitches</TabsTrigger>
            <TabsTrigger value="messages">Key Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="personas" className="space-y-6">
            <div className="flex justify-end">
              <Button variant="outline" size="sm" onClick={addPersona} className="gap-2">
                <Plus className="h-4 w-4" /> Add Persona
              </Button>
            </div>
            {personas.map((persona, index) => (
              <Card key={persona.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Target className="h-5 w-5 text-green-500" />
                      Persona {index + 1}
                    </CardTitle>
                    <Button variant="ghost" size="icon" onClick={() => setPersonas(personas.filter((p) => p.id !== persona.id))} className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-1">
                      <label className="text-sm font-medium">Persona Name</label>
                      <Input value={persona.name} onChange={(e) => setPersonas(personas.map((p) => p.id === persona.id ? { ...p, name: e.target.value } : p))} placeholder="e.g., Scaling Steve" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium">Role / Title</label>
                      <Input value={persona.role} onChange={(e) => setPersonas(personas.map((p) => p.id === persona.id ? { ...p, role: e.target.value } : p))} placeholder="e.g., Small Business Owner" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium">Age Range</label>
                      <Input value={persona.age} onChange={(e) => setPersonas(personas.map((p) => p.id === persona.id ? { ...p, age: e.target.value } : p))} placeholder="e.g., 35-50" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Pain Points</label>
                    <Textarea value={persona.painPoints} onChange={(e) => setPersonas(personas.map((p) => p.id === persona.id ? { ...p, painPoints: e.target.value } : p))} rows={3} placeholder="What keeps them up at night?" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Goals & Aspirations</label>
                    <Textarea value={persona.goals} onChange={(e) => setPersonas(personas.map((p) => p.id === persona.id ? { ...p, goals: e.target.value } : p))} rows={3} placeholder="What does success look like for them?" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Common Objections</label>
                    <Textarea value={persona.objections} onChange={(e) => setPersonas(personas.map((p) => p.id === persona.id ? { ...p, objections: e.target.value } : p))} rows={2} placeholder="What reasons do they give for not buying?" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Where to Reach Them</label>
                    <Textarea value={persona.whereToBuy} onChange={(e) => setPersonas(personas.map((p) => p.id === persona.id ? { ...p, whereToBuy: e.target.value } : p))} rows={2} placeholder="Platforms, communities, events..." />
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="pitches" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Quote className="h-5 w-5 text-green-500" />
                  Elevator Pitches
                </CardTitle>
                <CardDescription>Three versions for different situations — memorize these!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">15-Second (Cocktail Party)</label>
                  <p className="text-xs text-muted-foreground">One sentence. No jargon. Anyone could understand it.</p>
                  <Textarea value={pitches.cocktail} onChange={(e) => setPitches({ ...pitches, cocktail: e.target.value })} rows={2} />
                </div>
                <Separator />
                <div className="space-y-2">
                  <label className="text-sm font-medium">30-Second (Networking Event)</label>
                  <p className="text-xs text-muted-foreground">Who you serve, what you do, and one proof point.</p>
                  <Textarea value={pitches.networking} onChange={(e) => setPitches({ ...pitches, networking: e.target.value })} rows={4} />
                </div>
                <Separator />
                <div className="space-y-2">
                  <label className="text-sm font-medium">Conversational (Casual Intro)</label>
                  <p className="text-xs text-muted-foreground">Natural, relatable language. Like explaining to a friend.</p>
                  <Textarea value={pitches.conversational} onChange={(e) => setPitches({ ...pitches, conversational: e.target.value })} rows={4} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <div className="flex justify-end">
              <Button variant="outline" size="sm" onClick={addMessage} className="gap-2">
                <Plus className="h-4 w-4" /> Add Message Pillar
              </Button>
            </div>
            {keyMessages.map((msg, index) => (
              <Card key={msg.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-green-500" />
                      Message Pillar {index + 1}
                    </CardTitle>
                    <Button variant="ghost" size="icon" onClick={() => setKeyMessages(keyMessages.filter((m) => m.id !== msg.id))} className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Pillar Name</label>
                    <Input value={msg.pillar} onChange={(e) => setKeyMessages(keyMessages.map((m) => m.id === msg.id ? { ...m, pillar: e.target.value } : m))} placeholder="e.g., Time Freedom" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Main Message</label>
                    <Textarea value={msg.mainMessage} onChange={(e) => setKeyMessages(keyMessages.map((m) => m.id === msg.id ? { ...m, mainMessage: e.target.value } : m))} rows={2} />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Supporting Message</label>
                    <Textarea value={msg.supporting} onChange={(e) => setKeyMessages(keyMessages.map((m) => m.id === msg.id ? { ...m, supporting: e.target.value } : m))} rows={2} />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Proof Point</label>
                    <Input value={msg.proofPoint} onChange={(e) => setKeyMessages(keyMessages.map((m) => m.id === msg.id ? { ...m, proofPoint: e.target.value } : m))} placeholder="Specific data, testimonial, or case study..." />
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
