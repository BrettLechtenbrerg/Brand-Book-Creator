// ============================================================
// Brand Book Data Types
// Unified TypeScript interfaces for all 6 brand sections
// ============================================================

export interface ColorSwatch {
  id: number;
  name: string;
  hex: string;
  usage: string;
}

export interface BrandValue {
  id: number;
  name: string;
  description: string;
  inAction: string;
}

export interface Persona {
  id: number;
  name: string;
  role: string;
  age: string;
  painPoints: string;
  goals: string;
  objections: string;
  whereToBuy: string;
}

export interface KeyMessage {
  id: number;
  pillar: string;
  mainMessage: string;
  supporting: string;
  proofPoint: string;
}

export interface BrandBookData {
  // Section 1: Foundation
  foundation: {
    businessName: string;
    tagline: string;
    purpose: string;
    vision: string;
    mission: string;
    positioning: string;
  };

  // Section 2: Values & Story
  values: BrandValue[];
  story: {
    short: string;
    full: string;
  };

  // Section 3: Voice & Personality
  voiceAdjectives: string[];
  selectedArchetype: string;
  toneShifts: Record<string, string>;
  copyRules: Record<string, string>;
  neverWords: string[];

  // Section 4: Visual Identity
  primaryColors: ColorSwatch[];
  secondaryColors: ColorSwatch[];
  typography: Record<string, string>;
  logoGuidelines: Record<string, string>;
  imageStyle: string;

  // Section 5: Audience & Messaging
  personas: Persona[];
  pitches: Record<string, string>;
  keyMessages: KeyMessage[];

  // Section 6: Brand Assets
  hashtags: Record<string, string[]>;
  keywords: Record<string, string[]>;
  trademark: Record<string, string>;
  usageGuidelines: Record<string, string>;
}

export interface BrandBook {
  id: string;
  slug: string;
  data: BrandBookData;
  is_published: boolean;
  is_password_protected: boolean;
  share_password?: string;
  company_name: string;
  created_at: string;
  updated_at: string;
}
