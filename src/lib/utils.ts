import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatDateTime(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function calculateCompletionPercentage(
  sections: { completed: boolean }[]
): number {
  if (sections.length === 0) return 0;
  const completed = sections.filter((s) => s.completed).length;
  return Math.round((completed / sections.length) * 100);
}

export function getBrandStrengthLabel(percentage: number): string {
  if (percentage >= 90) return "World-Class";
  if (percentage >= 75) return "Strong";
  if (percentage >= 50) return "Developing";
  if (percentage >= 25) return "Foundation";
  return "Getting Started";
}

export function getBrandStrengthColor(percentage: number): string {
  if (percentage >= 90) return "text-green-500";
  if (percentage >= 75) return "text-blue-500";
  if (percentage >= 50) return "text-yellow-500";
  if (percentage >= 25) return "text-orange-500";
  return "text-red-500";
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}
