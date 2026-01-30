"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Heart,
  Mic2,
  Palette,
  Users,
  Hash,
  CheckCircle2,
  Circle,
  ArrowRight,
  Sparkles,
  Target,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const brandSections = [
  {
    id: 1,
    name: "Brand Foundation",
    description: "Name, tagline, purpose, vision, mission",
    icon: Building2,
    href: "/foundation",
    completed: true,
    items: ["Business Name", "Tagline", "Purpose Statement", "Vision", "Mission", "Positioning"],
  },
  {
    id: 2,
    name: "Brand Values",
    description: "Core values that guide every decision",
    icon: Heart,
    href: "/values",
    completed: true,
    items: ["Core Values (3-7)", "Value Descriptions", "Brand Origin Story"],
  },
  {
    id: 3,
    name: "Voice & Personality",
    description: "How your brand sounds and feels",
    icon: Mic2,
    href: "/voice",
    completed: false,
    items: ["Brand Voice", "Tone Shifts", "Copy Style", "Brand Personality", "Archetype"],
  },
  {
    id: 4,
    name: "Visual Identity",
    description: "Colors, typography, logo, imagery",
    icon: Palette,
    href: "/visual",
    completed: false,
    items: ["Primary Colors", "Secondary Palette", "Typography", "Logo Guidelines", "Image Style"],
  },
  {
    id: 5,
    name: "Audience & Messaging",
    description: "Who you serve and what you say",
    icon: Users,
    href: "/audience",
    completed: false,
    items: ["Target Personas", "Elevator Pitches", "Key Messages", "Proof Points"],
  },
  {
    id: 6,
    name: "Brand Assets",
    description: "Hashtags, keywords, guidelines",
    icon: Hash,
    href: "/assets",
    completed: false,
    items: ["Hashtags", "Keywords", "Trademark Rules", "Usage Guidelines"],
  },
];

const completedCount = brandSections.filter((s) => s.completed).length;
const totalCount = brandSections.length;
const completionPercentage = Math.round((completedCount / totalCount) * 100);

const stats = [
  {
    name: "Sections Complete",
    value: `${completedCount}/${totalCount}`,
    icon: CheckCircle2,
    change: `${completionPercentage}% complete`,
  },
  {
    name: "Brand Strength",
    value: completionPercentage >= 75 ? "Strong" : completionPercentage >= 50 ? "Developing" : "Foundation",
    icon: TrendingUp,
    change: completionPercentage >= 75 ? "Looking great!" : "Keep building!",
  },
  {
    name: "Total Brand Elements",
    value: "15",
    icon: Sparkles,
    change: "Across all sections",
  },
  {
    name: "GHL Fields Synced",
    value: "0",
    icon: Target,
    change: "Connect in Settings",
  },
];

const recentActivity = [
  {
    action: "Brand Foundation completed",
    detail: "Name, tagline, purpose, vision, and mission defined",
    time: "2 hours ago",
    type: "complete",
  },
  {
    action: "Core Values added",
    detail: "5 values with descriptions saved",
    time: "3 hours ago",
    type: "complete",
  },
  {
    action: "Brand Book created",
    detail: "Started building your brand identity",
    time: "1 day ago",
    type: "start",
  },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Brand Book Dashboard</h1>
          <p className="text-muted-foreground">
            Build your complete brand identity — the DNA that drives everything.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.name}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.name}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Brand Book Progress</CardTitle>
            <CardDescription>
              Complete all 6 sections to unlock your full brand identity
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{completionPercentage}% Complete</span>
              <span className="text-muted-foreground">{completedCount} of {totalCount} sections</span>
            </div>
            <Progress value={completionPercentage} />
          </CardContent>
        </Card>

        {/* Sections Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {brandSections.map((section) => (
            <Link key={section.id} href={section.href}>
              <Card className="hover:border-primary/50 hover:shadow-md transition-all cursor-pointer h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        section.completed
                          ? "bg-green-100 dark:bg-green-900/30"
                          : "bg-violet-100 dark:bg-violet-900/30"
                      }`}>
                        <section.icon className={`h-5 w-5 ${
                          section.completed
                            ? "text-green-600 dark:text-green-400"
                            : "text-violet-600 dark:text-violet-400"
                        }`} />
                      </div>
                      <div>
                        <CardTitle className="text-base">{section.name}</CardTitle>
                      </div>
                    </div>
                    {section.completed ? (
                      <Badge variant="success" className="section-complete">Done</Badge>
                    ) : (
                      <Badge variant="secondary">To Do</Badge>
                    )}
                  </div>
                  <CardDescription className="mt-2">{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1.5">
                    {section.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        {section.completed ? (
                          <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                        ) : (
                          <Circle className="h-3.5 w-3.5" />
                        )}
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary">
                    {section.completed ? "Edit Section" : "Get Started"}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === "complete" ? "bg-green-500" : "bg-violet-500"
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.detail}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
