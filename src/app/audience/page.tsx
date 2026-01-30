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
      name: "Overwhelmed Owen",
      role: "Small Business Owner, 5-25 employees",
      age: "35-55",
      painPoints: "Hearing about AI everywhere but doesn't know where to start. Worried about disrupting current workflows. Team is resistant to change. Spending too much time on operations, not enough on growth.",
      goals: "Integrate AI without disrupting operations. Empower team with technology skills. Scale efficiently. Stay competitive in a rapidly changing market.",
      objections: "\"My business is too small for AI.\" \"My team won't adapt.\" \"I've tried tech solutions before and they didn't stick.\" \"I don't have time to learn new systems.\"",
      whereToBuy: "LinkedIn, local chamber events, business podcasts, Google searches, small business networking groups",
    },
    {
      id: 2,
      name: "Connected Carol",
      role: "Chamber of Commerce Member / Community Business Leader",
      age: "40-60",
      painPoints: "Seeing other businesses adopt AI and feeling left behind. Wants to modernize but values relationships and community over pure tech. Needs solutions that feel personal, not corporate.",
      goals: "Stay relevant in a changing business landscape. Bring AI benefits to the local business community. Lead by example with responsible innovation.",
      objections: "\"AI feels impersonal.\" \"Our community businesses are different.\" \"We value relationships over automation.\" \"Is this really practical for our members?\"",
      whereToBuy: "Chamber events, LinkedIn, local business associations, community workshops, referral networks",
    },
    {
      id: 3,
      name: "Manager Mike",
      role: "Team Leader / Department Manager",
      age: "30-50",
      painPoints: "Team is overwhelmed with repetitive tasks. Hard to standardize processes across team members. Needs to show leadership ROI on new initiatives. Wants to upskill team but doesn't know where to start.",
      goals: "Build a high-performing, tech-savvy team. Standardize operations. Demonstrate measurable improvement. Develop team confidence with AI tools.",
      objections: "\"My team is already stretched thin.\" \"We don't have budget for another tool.\" \"Training takes too long.\" \"What if AI replaces some of my team?\"",
      whereToBuy: "LinkedIn, management forums, professional development conferences, industry webinars, internal referrals",
    },
    {
      id: 4,
      name: "Solo Sarah",
      role: "Solopreneur / Freelancer",
      age: "25-45",
      painPoints: "Wearing every hat in the business. No team to delegate to. Spending more time on admin than actual revenue-generating work. Feels isolated in decision-making.",
      goals: "Reclaim time by automating repetitive tasks. Compete with larger businesses. Build systems that scale without hiring. Make confident decisions with AI support.",
      objections: "\"I can't afford enterprise solutions.\" \"I need something simple and immediately useful.\" \"I don't want to become dependent on technology.\" \"Will AI really understand my niche?\"",
      whereToBuy: "Instagram, YouTube, online communities, freelancer platforms, productivity blogs, podcasts",
    },
  ]);

  const [pitches, setPitches] = useState({
    cocktail: "We help businesses embrace AI in a way that puts people first — building confidence in individuals, strength in teams, and real results for the business.",
    networking: "Total Success AI partners with businesses to integrate AI through strategic consulting, hands-on implementation, and practical training. Unlike typical tech consultants, we focus on people first — making sure every individual is confident, every team is aligned, and the business sees real, measurable results. We don't just implement and leave — we stay until success is achieved.",
    conversational: "You know how most AI companies talk about disruption and replacing humans? We're the opposite. We believe AI should make work more human, not less. So we partner with businesses to help their people actually embrace AI — not fear it. We do consulting, implementation, and training, and we don't leave until everyone on the team feels confident. It's people-first AI, and it actually works.",
  });

  const [keyMessages, setKeyMessages] = useState<KeyMessage[]>([
    {
      id: 1,
      pillar: "People-First AI",
      mainMessage: "AI should empower people, not replace them.",
      supporting: "Every solution we build starts with the humans who will use it. Technology serves people, not the other way around.",
      proofPoint: "100% of our implementations include hands-on training until every team member is confident.",
    },
    {
      id: 2,
      pillar: "Three Levels of Success",
      mainMessage: "True success happens at three levels: Individual, Team, and Business.",
      supporting: "We don't just optimize workflows — we build individual confidence, strengthen team collaboration, and drive measurable business results.",
      proofPoint: "Our three-level framework ensures no one gets left behind in the AI transformation.",
    },
    {
      id: 3,
      pillar: "Partnership Model",
      mainMessage: "We're partners, not just service providers.",
      supporting: "We stay engaged until goals are met. No implement-and-disappear. No leaving you to figure it out alone.",
      proofPoint: "Ongoing partnership model with dedicated support through The Master's Edge Business Program.",
    },
    {
      id: 4,
      pillar: "Practical Results",
      mainMessage: "Real solutions for real businesses — not theoretical frameworks.",
      supporting: "Every tool, training, and system is designed to produce immediate, measurable results in your business.",
      proofPoint: "15 integrated business systems with actionable implementation across all departments.",
    },
    {
      id: 5,
      pillar: "Accessible Expertise",
      mainMessage: "Enterprise-grade AI expertise accessible to every business.",
      supporting: "You don't need a Fortune 500 budget or a tech team to benefit from AI. We make it approachable and affordable.",
      proofPoint: "Tailored programs for small businesses, chamber members, team leaders, and solopreneurs.",
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
