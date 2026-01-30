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
  Hash,
  Save,
  CheckCircle2,
  Plus,
  X,
  Search,
  Shield,
  FileText,
  Lightbulb,
  Copy,
} from "lucide-react";

export default function AssetsPage() {
  const [saved, setSaved] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const [hashtags, setHashtags] = useState({
    branded: ["#TotalSuccessAI", "#MastersEdge", "#AutomateTheGrind", "#ElevateTheHuman"],
    values: ["#WorkSmarter", "#BusinessAutomation", "#AIForBusiness"],
    service: ["#GoHighLevel", "#GHLAutomation", "#CRMAutomation"],
    industry: ["#SmallBusiness", "#Entrepreneur", "#BusinessGrowth"],
    campaign: ["#BuildSystems", "#ScaleWithAI"],
  });
  const [newHashtag, setNewHashtag] = useState({ category: "branded", value: "" });

  const [keywords, setKeywords] = useState({
    primary: ["business automation", "AI for small business", "Go High Level automation"],
    service: ["CRM automation", "sales automation", "marketing automation", "business systems"],
    audience: ["small business owner", "entrepreneur automation", "agency owner tools"],
    longTail: ["how to automate my small business", "best Go High Level tools", "AI business automation system"],
    negative: ["free", "cheap", "DIY", "no-code simple"],
  });

  const [trademark, setTrademark] = useState({
    spelling: "Total Success AI (always capitalize both words and AI). Never: total success ai, TotalSuccessAI, TSAI (unless in code/internal).",
    logo: "Logo must always appear in brand violet (#8B5CF6) or white. Never alter the logo proportions or add effects.",
    tagline: "\"Automate the grind. Elevate the human.\" Always in that exact format with period after each sentence. Both sentences required.",
    attribution: "Always attribute: \"Part of The Master's Edge Business Program by Total Success AI\"",
  });

  const [usageGuidelines, setUsageGuidelines] = useState({
    social: "Post in brand voice. Use brand hashtags (max 5 per post). Always include CTA. Respond to comments within 4 hours during business hours.",
    email: "Use email signature template. Subject lines under 50 characters. One CTA per email. Preview text should complement (not repeat) subject.",
    boilerplate50: "Total Success AI builds AI-powered automation systems for small businesses. Using Go High Level, we turn repetitive tasks into automated workflows — so business owners can focus on growth.",
    boilerplate100: "Total Success AI was founded by Brett Lechtenberg and Manny Torres with a simple belief: business owners should spend their time on strategy and relationships, not busywork. We build intelligent automation systems purpose-built for Go High Level that handle follow-ups, scheduling, reporting, and operations automatically. Our Master's Edge Business Program provides 15 complete systems — from hiring and delegation to competitive intelligence and financial modeling — that transform how small businesses operate. We automate the grind so entrepreneurs can elevate the human.",
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const addHashtag = () => {
    if (newHashtag.value.trim()) {
      const tag = newHashtag.value.startsWith("#") ? newHashtag.value : `#${newHashtag.value}`;
      setHashtags({
        ...hashtags,
        [newHashtag.category]: [...hashtags[newHashtag.category as keyof typeof hashtags], tag],
      });
      setNewHashtag({ ...newHashtag, value: "" });
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-600 to-gray-700 flex items-center justify-center">
                <Hash className="w-5 h-5 text-white" />
              </div>
              Brand Assets
            </h1>
            <p className="text-muted-foreground mt-1">
              Hashtags, keywords, trademark rules, and usage guidelines.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="info">Section 6 of 6</Badge>
            <Button onClick={handleSave} className="gap-2">
              {saved ? <><CheckCircle2 className="h-4 w-4" /> Saved!</> : <><Save className="h-4 w-4" /> Save Assets</>}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="hashtags" className="space-y-6">
          <TabsList>
            <TabsTrigger value="hashtags">Hashtags</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
            <TabsTrigger value="trademark">Trademark</TabsTrigger>
            <TabsTrigger value="usage">Usage Guidelines</TabsTrigger>
          </TabsList>

          <TabsContent value="hashtags" className="space-y-6">
            {Object.entries(hashtags).map(([category, tags]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg capitalize">{category} Hashtags</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-sm py-1.5 px-3 gap-1.5 font-mono">
                        {tag}
                        <button onClick={() => setHashtags({ ...hashtags, [category]: tags.filter((_, idx) => idx !== i) })}>
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => copyText(tags.join(" "))} className="gap-1 text-xs">
                    <Copy className="h-3 w-3" /> Copy All
                  </Button>
                </CardContent>
              </Card>
            ))}
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-2">
                  <select
                    value={newHashtag.category}
                    onChange={(e) => setNewHashtag({ ...newHashtag, category: e.target.value })}
                    className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    {Object.keys(hashtags).map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <Input value={newHashtag.value} onChange={(e) => setNewHashtag({ ...newHashtag, value: e.target.value })} placeholder="#YourHashtag" onKeyDown={(e) => e.key === "Enter" && addHashtag()} className="flex-1" />
                  <Button onClick={addHashtag}><Plus className="h-4 w-4" /></Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="keywords" className="space-y-6">
            {Object.entries(keywords).map(([category, words]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg capitalize flex items-center gap-2">
                    <Search className="h-5 w-5 text-slate-500" />
                    {category === "longTail" ? "Long-Tail" : category === "negative" ? "Negative (Exclude)" : category} Keywords
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {words.map((word, i) => (
                      <Badge key={i} variant={category === "negative" ? "destructive" : "secondary"} className="text-sm py-1.5 px-3">
                        {word}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="trademark" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 text-slate-500" />
                  Trademark & Brand Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(trademark).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <label className="text-sm font-medium capitalize">{key} Rules</label>
                    <Textarea value={value} onChange={(e) => setTrademark({ ...trademark, [key]: e.target.value })} rows={3} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5 text-slate-500" />
                  Usage Guidelines & Boilerplate Copy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(usageGuidelines).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium capitalize">
                        {key === "boilerplate50" ? "50-Word Boilerplate" : key === "boilerplate100" ? "100-Word Boilerplate" : `${key} Guidelines`}
                      </label>
                      <Button variant="ghost" size="sm" onClick={() => copyText(value)} className="gap-1 text-xs">
                        <Copy className="h-3 w-3" /> {copiedText === value ? "Copied!" : "Copy"}
                      </Button>
                    </div>
                    <Textarea value={value} onChange={(e) => setUsageGuidelines({ ...usageGuidelines, [key]: e.target.value })} rows={key.startsWith("boilerplate") ? 5 : 3} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
