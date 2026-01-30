"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Building2,
  Heart,
  BookOpen,
  Mic2,
  Palette,
  Users,
  Hash,
  Settings,
  HelpCircle,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Foundation", href: "/foundation", icon: Building2 },
  { name: "Values & Story", href: "/values", icon: Heart },
  { name: "Voice & Personality", href: "/voice", icon: Mic2 },
  { name: "Visual Identity", href: "/visual", icon: Palette },
  { name: "Audience & Messaging", href: "/audience", icon: Users },
  { name: "Brand Assets", href: "/assets", icon: Hash },
  { name: "Settings", href: "/settings", icon: Settings },
];

const helpNavigation = [
  { name: "Admin Guide", href: "/guide", icon: HelpCircle },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col fixed inset-y-0 z-50 bg-card border-r">
      {/* Logo */}
      <div className="flex h-16 shrink-0 items-center gap-2 px-6 border-b">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
          Brand Book
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Help Section */}
        <div className="pt-6">
          <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Help & Guides
          </p>
          <div className="mt-2 space-y-1">
            {helpNavigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t p-4">
        <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-950/30 p-4">
          <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
            Part of
          </p>
          <p className="mt-1 text-xs font-medium text-blue-700 dark:text-blue-400">
            The Master&apos;s Edge Program
          </p>
          <p className="mt-0.5 text-xs text-blue-600 dark:text-blue-500">
            by Total Success AI
          </p>
        </div>
      </div>
    </div>
  );
}
