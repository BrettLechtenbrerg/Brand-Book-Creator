"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Settings,
  Copy,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Webhook,
  Database,
  Share2,
  Lightbulb,
  Link2,
  ArrowRight,
} from "lucide-react";
import { PublishPanel } from "@/components/PublishPanel";

const ghlCustomFields = [
  { name: "brand_name", label: "Brand Name", description: "Official business name", synced: true },
  { name: "brand_tagline", label: "Brand Tagline", description: "Primary tagline/slogan", synced: true },
  { name: "brand_purpose", label: "Brand Purpose", description: "Why the brand exists", synced: false },
  { name: "brand_vision", label: "Brand Vision", description: "Future state aspiration", synced: false },
  { name: "brand_mission", label: "Brand Mission", description: "How the vision is achieved", synced: false },
  { name: "brand_values", label: "Core Values", description: "Comma-separated value names", synced: true },
  { name: "brand_voice", label: "Voice Adjectives", description: "5 voice descriptors", synced: false },
  { name: "brand_archetype", label: "Brand Archetype", description: "Personality archetype", synced: false },
  { name: "brand_primary_color", label: "Primary Color", description: "Hex code of primary color", synced: true },
];

const connectedApps = [
  { name: "Hiring Oracle", description: "Uses brand values for culture-fit screening", status: "ready", color: "rose" },
  { name: "SOP Factory", description: "Applies brand voice to customer-facing SOPs", status: "ready", color: "blue" },
  { name: "Conversations Coach", description: "Uses values as ethical decision framework", status: "coming", color: "pink" },
  { name: "CEO Dashboard", description: "Brand metrics and consistency tracking", status: "coming", color: "emerald" },
];

export default function SettingsPage() {
  const [webhookUrl] = useState("https://brand-book-creator.vercel.app/api/webhooks/ghl");
  const [copied, setCopied] = useState(false);
  const [ghlApiKey, setGhlApiKey] = useState("");

  const copyWebhook = () => {
    navigator.clipboard.writeText(webhookUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-600 to-slate-700 flex items-center justify-center">
              <Settings className="w-5 h-5 text-white" />
            </div>
            Settings
          </h1>
          <p className="text-muted-foreground mt-1">
            Configure Go High Level integration and app preferences.
          </p>
        </div>

        <Tabs defaultValue="ghl" className="space-y-6">
          <TabsList>
            <TabsTrigger value="ghl">Go High Level</TabsTrigger>
            <TabsTrigger value="fields">Custom Fields</TabsTrigger>
            <TabsTrigger value="apps">Connected Apps</TabsTrigger>
            <TabsTrigger value="export">Share & Export</TabsTrigger>
          </TabsList>

          {/* GHL Integration Tab */}
          <TabsContent value="ghl" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Webhook className="h-5 w-5 text-blue-500" />
                  Webhook Configuration
                </CardTitle>
                <CardDescription>
                  Add this webhook URL to your GHL workflows to sync brand data.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Webhook URL</label>
                  <div className="flex gap-2">
                    <Input value={webhookUrl} readOnly className="font-mono text-sm" />
                    <Button variant="outline" onClick={copyWebhook} className="gap-2 shrink-0">
                      {copied ? (
                        <><CheckCircle2 className="h-4 w-4 text-green-500" /> Copied!</>
                      ) : (
                        <><Copy className="h-4 w-4" /> Copy</>
                      )}
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <label className="text-sm font-medium">GHL API Key (Optional)</label>
                  <p className="text-xs text-muted-foreground">For pushing brand data TO GHL custom fields.</p>
                  <Input
                    type="password"
                    value={ghlApiKey}
                    onChange={(e) => setGhlApiKey(e.target.value)}
                    placeholder="Enter your GHL API key..."
                  />
                </div>

                <div className="flex items-start gap-2 rounded-md bg-blue-50 dark:bg-blue-950/30 p-4">
                  <Lightbulb className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                  <div className="text-xs text-blue-800 dark:text-blue-200 space-y-2">
                    <p className="font-semibold">How to set up in GHL:</p>
                    <ol className="list-decimal ml-4 space-y-1">
                      <li>Go to GHL &rarr; Automation &rarr; Workflows</li>
                      <li>Create a new workflow (or edit existing)</li>
                      <li>Add a &ldquo;Webhook&rdquo; action</li>
                      <li>Paste the webhook URL above</li>
                      <li>Map your custom fields (see Custom Fields tab)</li>
                      <li>Save and activate the workflow</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Custom Fields Tab */}
          <TabsContent value="fields" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Database className="h-5 w-5 text-blue-500" />
                  GHL Custom Fields
                </CardTitle>
                <CardDescription>
                  Create these custom fields in GHL to store brand data. Other Master&apos;s Edge apps will read these fields.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {ghlCustomFields.map((field) => (
                    <div key={field.name} className="flex items-center justify-between p-3 rounded-lg border">
                      <div className="flex items-center gap-3">
                        {field.synced ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-muted-foreground" />
                        )}
                        <div>
                          <p className="font-medium text-sm">{field.label}</p>
                          <p className="text-xs text-muted-foreground">
                            Field: <code className="bg-muted px-1 rounded">{field.name}</code> — {field.description}
                          </p>
                        </div>
                      </div>
                      <Badge variant={field.synced ? "success" : "secondary"}>
                        {field.synced ? "Synced" : "Not Set"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Connected Apps Tab */}
          <TabsContent value="apps" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Link2 className="h-5 w-5 text-blue-500" />
                  Master&apos;s Edge Ecosystem
                </CardTitle>
                <CardDescription>
                  Your brand data flows into these companion apps through GHL custom fields.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {connectedApps.map((app) => (
                    <div key={app.name} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-${app.color}-100 dark:bg-${app.color}-900/30 flex items-center justify-center`}>
                          <ArrowRight className={`h-5 w-5 text-${app.color}-600 dark:text-${app.color}-400`} />
                        </div>
                        <div>
                          <p className="font-medium">{app.name}</p>
                          <p className="text-sm text-muted-foreground">{app.description}</p>
                        </div>
                      </div>
                      <Badge variant={app.status === "ready" ? "success" : "secondary"}>
                        {app.status === "ready" ? "Ready" : "Coming Soon"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Share & Export Tab */}
          <TabsContent value="export" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-blue-500" />
                  Share Brand Book
                </CardTitle>
                <CardDescription>
                  Publish your brand book as a shareable webpage. Share the link with your marketing team, agencies, or anyone who needs access.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PublishPanel />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
