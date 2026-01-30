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
  Palette,
  Save,
  CheckCircle2,
  Lightbulb,
  Plus,
  Trash2,
  Type,
  ImageIcon,
  Copy,
} from "lucide-react";

interface ColorSwatch {
  id: number;
  name: string;
  hex: string;
  usage: string;
}

export default function VisualPage() {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const [primaryColors, setPrimaryColors] = useState<ColorSwatch[]>([
    { id: 1, name: "Brand Violet", hex: "#8B5CF6", usage: "Primary buttons, headings, CTAs" },
    { id: 2, name: "Brand Purple", hex: "#7C3AED", usage: "Hover states, accents, gradients" },
    { id: 3, name: "Dark Navy", hex: "#1E1B4B", usage: "Body text, dark backgrounds" },
  ]);

  const [secondaryColors, setSecondaryColors] = useState<ColorSwatch[]>([
    { id: 4, name: "Success Green", hex: "#22C55E", usage: "Confirmations, positive states" },
    { id: 5, name: "Warning Amber", hex: "#F59E0B", usage: "Alerts, tips, highlights" },
    { id: 6, name: "Light Gray", hex: "#F1F5F9", usage: "Backgrounds, cards, borders" },
  ]);

  const [typography, setTypography] = useState({
    primary: "Inter",
    secondary: "System UI",
    headingWeight: "700 (Bold)",
    bodyWeight: "400 (Regular)",
    headingSize: "2rem / 32px for H1, scaling down by 0.25rem per level",
    bodySize: "1rem / 16px base, 0.875rem / 14px for small text",
  });

  const [logoGuidelines, setLogoGuidelines] = useState({
    clearSpace: "Minimum clear space equal to the height of the logomark on all sides",
    minSize: "Minimum 120px wide for digital, 1 inch for print",
    backgrounds: "Logo works on white, dark navy, and gradient violet backgrounds. Never place on busy images without overlay.",
    donts: "Never stretch, rotate, add effects, change colors outside brand palette, or place on low-contrast backgrounds.",
  });

  const [imageStyle, setImageStyle] = useState(
    "Clean, modern, professional photography. Bright and well-lit. Real people over stock photos where possible. Technology shots should feel approachable, not intimidating. Avoid overly corporate or staged imagery."
  );

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopied(hex);
    setTimeout(() => setCopied(null), 2000);
  };

  const addColor = (isPrimary: boolean) => {
    const newColor: ColorSwatch = { id: Date.now(), name: "", hex: "#000000", usage: "" };
    if (isPrimary) setPrimaryColors([...primaryColors, newColor]);
    else setSecondaryColors([...secondaryColors, newColor]);
  };

  const updateColor = (id: number, field: keyof ColorSwatch, value: string, isPrimary: boolean) => {
    const updater = isPrimary ? setPrimaryColors : setSecondaryColors;
    const colors = isPrimary ? primaryColors : secondaryColors;
    updater(colors.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
  };

  const removeColor = (id: number, isPrimary: boolean) => {
    if (isPrimary) setPrimaryColors(primaryColors.filter((c) => c.id !== id));
    else setSecondaryColors(secondaryColors.filter((c) => c.id !== id));
  };

  const ColorGrid = ({ colors, isPrimary }: { colors: ColorSwatch[]; isPrimary: boolean }) => (
    <div className="space-y-4">
      {colors.map((color) => (
        <div key={color.id} className="flex items-start gap-4 rounded-lg border p-4">
          <div className="space-y-2">
            <div
              className="w-20 h-20 rounded-lg color-swatch cursor-pointer border"
              style={{ backgroundColor: color.hex }}
              onClick={() => copyHex(color.hex)}
            />
            <p className="text-xs text-center font-mono">
              {copied === color.hex ? "Copied!" : color.hex}
            </p>
          </div>
          <div className="flex-1 space-y-2">
            <Input
              value={color.name}
              onChange={(e) => updateColor(color.id, "name", e.target.value, isPrimary)}
              placeholder="Color name"
            />
            <div className="flex gap-2">
              <Input
                value={color.hex}
                onChange={(e) => updateColor(color.id, "hex", e.target.value, isPrimary)}
                placeholder="#000000"
                className="w-32 font-mono"
              />
              <input
                type="color"
                value={color.hex}
                onChange={(e) => updateColor(color.id, "hex", e.target.value, isPrimary)}
                className="w-10 h-10 rounded cursor-pointer border-0"
              />
              <Button variant="ghost" size="icon" onClick={() => copyHex(color.hex)}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <Input
              value={color.usage}
              onChange={(e) => updateColor(color.id, "usage", e.target.value, isPrimary)}
              placeholder="When to use this color..."
            />
          </div>
          <Button variant="ghost" size="icon" onClick={() => removeColor(color.id, isPrimary)} className="text-destructive">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button variant="outline" size="sm" onClick={() => addColor(isPrimary)} className="gap-2">
        <Plus className="h-4 w-4" />
        Add Color
      </Button>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Palette className="w-5 h-5 text-white" />
              </div>
              Visual Identity
            </h1>
            <p className="text-muted-foreground mt-1">
              Colors, typography, logo rules, and imagery style.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="info">Section 4 of 6</Badge>
            <Button onClick={handleSave} className="gap-2">
              {saved ? <><CheckCircle2 className="h-4 w-4" /> Saved!</> : <><Save className="h-4 w-4" /> Save Visual</>}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="colors" className="space-y-6">
          <TabsList>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="logo">Logo Guidelines</TabsTrigger>
            <TabsTrigger value="imagery">Image Style</TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Primary Brand Colors</CardTitle>
                <CardDescription>Your core colors used in logos, buttons, and key brand elements. Click a swatch to copy hex code.</CardDescription>
              </CardHeader>
              <CardContent>
                <ColorGrid colors={primaryColors} isPrimary={true} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Secondary & Accent Colors</CardTitle>
                <CardDescription>Supporting colors for states, backgrounds, and accents.</CardDescription>
              </CardHeader>
              <CardContent>
                <ColorGrid colors={secondaryColors} isPrimary={false} />
              </CardContent>
            </Card>

            {/* Color Preview */}
            <Card className="border-violet-200 dark:border-violet-800">
              <CardHeader>
                <CardTitle className="text-lg">Color Palette Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  {[...primaryColors, ...secondaryColors].map((color) => (
                    <div key={color.id} className="text-center">
                      <div className="w-16 h-16 rounded-lg border" style={{ backgroundColor: color.hex }} />
                      <p className="text-xs mt-1 font-medium">{color.name}</p>
                      <p className="text-xs font-mono text-muted-foreground">{color.hex}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="typography" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Type className="h-5 w-5 text-blue-500" />
                  Typography System
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(typography).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <label className="text-sm font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}</label>
                    <Input value={value} onChange={(e) => setTypography({ ...typography, [key]: e.target.value })} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logo" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Logo Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(logoGuidelines).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <label className="text-sm font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}</label>
                    <Textarea value={value} onChange={(e) => setLogoGuidelines({ ...logoGuidelines, [key]: e.target.value })} rows={2} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="imagery" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-blue-500" />
                  Image & Photography Style
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea value={imageStyle} onChange={(e) => setImageStyle(e.target.value)} rows={6} placeholder="Describe the style of photography and imagery that represents your brand..." />
                <div className="flex items-start gap-2 rounded-md bg-amber-50 dark:bg-amber-950/30 p-3 mt-4">
                  <Lightbulb className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-xs text-amber-800 dark:text-amber-200">
                    Think about: lighting (bright vs moody), subjects (people vs products vs abstract), feel (corporate vs casual), editing style (clean vs filtered).
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
