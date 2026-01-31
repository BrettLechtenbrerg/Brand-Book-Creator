import { BrandBookData } from "./brand-types";

// ============================================================
// Default Brand Book Data
// Extracted from all 6 section pages' hardcoded useState values
// This is the TSAI demo data that ships with the app
// ============================================================

export const DEFAULT_BRAND_DATA: BrandBookData = {
  // ─── Section 1: Foundation ──────────────────────────────────
  foundation: {
    businessName: "Total Success AI (TSAI)",
    tagline: "People-Centered AI Solutions for the Real World",
    purpose:
      "To prove that AI and humanity aren't at odds\u2014that when technology serves people first, everyone wins.",
    vision: "A future where AI makes work more human, not less.",
    mission:
      "We partner with businesses to embrace AI through strategic consulting, hands-on implementation, and practical training\u2014working until every individual is confident, every team is elevated, and the business thrives.",
    positioning:
      "Unlike AI consultants who focus solely on efficiency and automation, Total Success AI puts people at the center\u2014ensuring technology empowers individuals, strengthens teams, and creates lasting business success.",
  },

  // ─── Section 2: Values & Story ──────────────────────────────
  values: [
    {
      id: 1,
      name: "People First",
      description:
        "Humans are at the center of every decision we make. Technology exists to serve people, not the other way around.",
      inAction:
        "Every AI solution starts with understanding the humans who will use it. We never implement technology that doesn't empower the people it touches.",
    },
    {
      id: 2,
      name: "Empowerment Over Dependence",
      description:
        "We teach people to fish, not just catch fish for them. Our goal is confident, capable teams \u2014 not perpetual clients.",
      inAction:
        "Every engagement includes hands-on training until team members are confident using AI tools independently. We measure success by their self-sufficiency.",
    },
    {
      id: 3,
      name: "Partnership Not Just Service",
      description:
        "We're true collaborators, not vendors. We stay engaged until goals are met \u2014 no implement-and-disappear.",
      inAction:
        "We don't hand off a deliverable and walk away. We work alongside teams through implementation, training, and optimization until success is achieved.",
    },
    {
      id: 4,
      name: "Practical Over Theoretical",
      description:
        "Real-world, actionable solutions beat academic frameworks every time. If it doesn't work in practice, it doesn't work.",
      inAction:
        "Every tool and system is designed for real businesses with real constraints. No ivory tower strategies \u2014 just practical solutions that produce measurable results.",
    },
    {
      id: 5,
      name: "Continuous Learning",
      description:
        "Growth mindset for all. The AI landscape evolves daily, and so do we. We're students first, experts second.",
      inAction:
        "Regular team learning sessions, staying current with AI developments, and openly sharing knowledge with our community and clients.",
    },
    {
      id: 6,
      name: "Community",
      description:
        "Building connections and ecosystems matters. Success is better when shared, and collaboration beats isolation.",
      inAction:
        "We actively build communities around our programs, connect clients with each other, and contribute to the broader conversation about responsible AI adoption.",
    },
    {
      id: 7,
      name: "Integrity & Transparency",
      description:
        "Honest guidance, always. We tell clients what they need to hear, not just what they want to hear.",
      inAction:
        "If AI isn't the right solution, we say so. We share our reasoning openly, admit when we're wrong, and never oversell capabilities.",
    },
  ],

  story: {
    short:
      "Total Success AI was founded by Brett Lechtenberg and Manny Torres who saw a gap in the AI consulting space \u2014 everyone was focused on technology, but nobody was putting people first. They built TSAI on a simple belief: when AI serves people, not the other way around, everyone wins. Today, TSAI partners with businesses to implement AI solutions that empower individuals, strengthen teams, and drive lasting success.",
    full: "It started with a question that wouldn't go away: Why does adopting AI have to feel threatening?\n\nBrett Lechtenberg and Manny Torres saw it everywhere \u2014 businesses rushing to implement AI, employees worried about being replaced, leaders overwhelmed by promises of 'disruption' and 'revolution.' The AI industry was moving fast, but it was leaving people behind.\n\nThey knew there had to be a better way. Not AI that replaces humans, but AI that empowers them. Not consultants who implement and disappear, but partners who stay until every team member is confident and every system is thriving.\n\nThat conviction became Total Success AI.\n\nFrom day one, TSAI was built on a different philosophy: People First. Every tool, every training, every consultation starts with the humans who will use it. Because the most powerful AI in the world is worthless if the people it's meant to serve don't trust it, understand it, or feel empowered by it.\n\nThe approach works at three levels. First, individuals gain confidence \u2014 they go from fearing AI to wielding it. Then teams align \u2014 collaboration improves, communication sharpens, and silos break down. Finally, the business transforms \u2014 not through disruption, but through sustainable, people-centered growth.\n\nThrough The Master's Edge Business Program, TSAI delivers 15 integrated systems that cover everything from brand identity to hiring, from SOPs to competitive intelligence. Each system is practical, actionable, and designed for real businesses with real constraints.\n\nToday, Total Success AI serves small business owners, chamber members, team leaders, and solopreneurs who believe technology should work for people \u2014 not the other way around. Because when you put people at the center, success isn't just possible. It's inevitable.",
  },

  // ─── Section 3: Voice & Personality ─────────────────────────
  voiceAdjectives: [
    "Warm",
    "Confident",
    "Encouraging",
    "Clear",
    "Grounded",
    "Empowering",
  ],

  selectedArchetype: "The Sage + The Ally",

  toneShifts: {
    socialMedia:
      "Warm and conversational. Short sentences. Lead with value, not sales. Use encouraging language. End with questions to spark engagement. Emoji use: moderate and purposeful.",
    websiteCopy:
      "Confident and clear. Lead with transformation, not features. Use the people-first framework. Headlines should inspire, body copy should inform. Every page should have a clear CTA.",
    training:
      "Patient, encouraging, step-by-step. Meet people where they are. Celebrate small wins. Use real examples. Avoid jargon. Make AI feel approachable and exciting, not intimidating.",
    consulting:
      "Professional yet warm. Listen first, advise second. Use data to support recommendations. Frame solutions around their specific situation. Always tie back to people-first principles.",
    email:
      "Professional but personal. Clear subject lines under 50 characters. Get to the value fast. One CTA per email. Sign off warmly. Footer includes boilerplate.",
    technical:
      "Clear, precise, and thorough. Use plain language where possible. Include step-by-step instructions. Add context for WHY, not just HOW. Make documentation accessible to non-technical users.",
    crisis:
      "Calm, transparent, and empathetic. Acknowledge the concern immediately. Explain what happened and what we are doing about it. Follow up with concrete next steps. Never minimize or deflect.",
  },

  copyRules: {
    transformation:
      "Lead with WHO they become, not WHAT the product does. Use the Transformation Hierarchy: Transformation > Outcome > Benefit > Feature.",
    headlines:
      "Focus on empowerment and possibility. Use clear, encouraging language. 'Empower Your Team with AI' > 'AI Automation Tools'. Always people-first framing.",
    cta: "Use empowering, action-oriented language: 'Start Your Journey' > 'Buy Now'. Frame CTAs as the beginning of partnership, not a transaction.",
    forbidden:
      "Never use: revolutionary, game-changing, disruptive, cutting-edge, left behind, obsolete, replaced, leverage, synergy, optimize, stakeholders, utilize. No fear-based messaging. No passive voice.",
  },

  neverWords: [
    "Revolutionary",
    "Game-changing",
    "Disruptive",
    "Cutting-edge",
    "Left behind",
    "Obsolete",
    "Replaced",
    "Leverage",
    "Synergy",
    "Optimize",
    "Stakeholders",
    "Utilize",
    "Simply",
    "Just",
    "Obviously",
  ],

  // ─── Section 4: Visual Identity ─────────────────────────────
  primaryColors: [
    {
      id: 1,
      name: "Navy",
      hex: "#1a365d",
      usage: "Primary brand color, headings, buttons, key UI elements",
    },
    {
      id: 2,
      name: "Navy Light",
      hex: "#2c5282",
      usage: "Hover states, links, secondary buttons, gradients",
    },
    {
      id: 3,
      name: "Silver",
      hex: "#a0aec0",
      usage: "Body text accents, icons, secondary elements",
    },
    {
      id: 4,
      name: "White",
      hex: "#ffffff",
      usage: "Backgrounds, cards, light text on dark backgrounds",
    },
  ],

  secondaryColors: [
    {
      id: 5,
      name: "Silver Light",
      hex: "#e2e8f0",
      usage: "Backgrounds, cards, dividers, subtle borders",
    },
    {
      id: 6,
      name: "Slate",
      hex: "#334155",
      usage: "Body text, dark UI elements, footers",
    },
    {
      id: 7,
      name: "Warm Gray",
      hex: "#78716c",
      usage: "Subtle text, captions, supporting elements",
    },
    {
      id: 8,
      name: "Light Blue",
      hex: "#3b82f6",
      usage: "Info states, links, interactive highlights",
    },
    {
      id: 9,
      name: "Success Green",
      hex: "#22c55e",
      usage: "Success states, confirmations, positive indicators",
    },
    {
      id: 10,
      name: "Soft Navy",
      hex: "#1e3a5f",
      usage: "Dark backgrounds, overlays, depth elements",
    },
  ],

  typography: {
    primary: "Inter",
    secondary: "System UI",
    headingWeight:
      "600 (Semi-Bold) \u2014 700 (Bold) for Hero headings",
    bodyWeight: "400 (Regular) \u2014 500 (Medium) for emphasis",
    headingSize:
      "Hero: 48-64px, Section: 36-48px, H1: 32-36px, H2: 24-28px, H3: 20-24px, H4: 18-20px",
    bodySize: "Body: 16-18px, Small: 14px, Caption: 12px",
  },

  logoGuidelines: {
    clearSpace:
      "Minimum clear space equal to the height of the logomark on all sides. Ensure the logo breathes in all applications.",
    minSize:
      "Minimum 120px wide for digital, 1 inch for print. Below this size, use the icon mark only.",
    backgrounds:
      "Logo works on white, navy (#1a365d), and light gray (#e2e8f0) backgrounds. May use transparent overlays on photography. Never place on busy or low-contrast backgrounds.",
    donts:
      "Never stretch, rotate, add drop shadows, change colors outside brand palette, place on clashing backgrounds, or modify the letterforms.",
  },

  imageStyle:
    "Clean, professional, and approachable. Focus on real people in real business settings \u2014 workshops, meetings, team collaborations. Warm lighting, natural environments. Show diversity and inclusion. Avoid overly corporate, staged, or stock-looking imagery. Technology should feel empowering and accessible, never intimidating. Prefer candid moments over posed shots. Color grading should align with brand palette \u2014 warm tones with navy accents.",

  // ─── Section 5: Audience & Messaging ────────────────────────
  personas: [
    {
      id: 1,
      name: "Overwhelmed Owen",
      role: "Small Business Owner, 5-25 employees",
      age: "35-55",
      painPoints:
        "Hearing about AI everywhere but doesn't know where to start. Worried about disrupting current workflows. Team is resistant to change. Spending too much time on operations, not enough on growth.",
      goals:
        "Integrate AI without disrupting operations. Empower team with technology skills. Scale efficiently. Stay competitive in a rapidly changing market.",
      objections:
        '"My business is too small for AI." "My team won\'t adapt." "I\'ve tried tech solutions before and they didn\'t stick." "I don\'t have time to learn new systems."',
      whereToBuy:
        "LinkedIn, local chamber events, business podcasts, Google searches, small business networking groups",
    },
    {
      id: 2,
      name: "Connected Carol",
      role: "Chamber of Commerce Member / Community Business Leader",
      age: "40-60",
      painPoints:
        "Seeing other businesses adopt AI and feeling left behind. Wants to modernize but values relationships and community over pure tech. Needs solutions that feel personal, not corporate.",
      goals:
        "Stay relevant in a changing business landscape. Bring AI benefits to the local business community. Lead by example with responsible innovation.",
      objections:
        '"AI feels impersonal." "Our community businesses are different." "We value relationships over automation." "Is this really practical for our members?"',
      whereToBuy:
        "Chamber events, LinkedIn, local business associations, community workshops, referral networks",
    },
    {
      id: 3,
      name: "Manager Mike",
      role: "Team Leader / Department Manager",
      age: "30-50",
      painPoints:
        "Team is overwhelmed with repetitive tasks. Hard to standardize processes across team members. Needs to show leadership ROI on new initiatives. Wants to upskill team but doesn't know where to start.",
      goals:
        "Build a high-performing, tech-savvy team. Standardize operations. Demonstrate measurable improvement. Develop team confidence with AI tools.",
      objections:
        '"My team is already stretched thin." "We don\'t have budget for another tool." "Training takes too long." "What if AI replaces some of my team?"',
      whereToBuy:
        "LinkedIn, management forums, professional development conferences, industry webinars, internal referrals",
    },
    {
      id: 4,
      name: "Solo Sarah",
      role: "Solopreneur / Freelancer",
      age: "25-45",
      painPoints:
        "Wearing every hat in the business. No team to delegate to. Spending more time on admin than actual revenue-generating work. Feels isolated in decision-making.",
      goals:
        "Reclaim time by automating repetitive tasks. Compete with larger businesses. Build systems that scale without hiring. Make confident decisions with AI support.",
      objections:
        '"I can\'t afford enterprise solutions." "I need something simple and immediately useful." "I don\'t want to become dependent on technology." "Will AI really understand my niche?"',
      whereToBuy:
        "Instagram, YouTube, online communities, freelancer platforms, productivity blogs, podcasts",
    },
  ],

  pitches: {
    cocktail:
      "We help businesses embrace AI in a way that puts people first \u2014 building confidence in individuals, strength in teams, and real results for the business.",
    networking:
      "Total Success AI partners with businesses to integrate AI through strategic consulting, hands-on implementation, and practical training. Unlike typical tech consultants, we focus on people first \u2014 making sure every individual is confident, every team is aligned, and the business sees real, measurable results. We don't just implement and leave \u2014 we stay until success is achieved.",
    conversational:
      "You know how most AI companies talk about disruption and replacing humans? We're the opposite. We believe AI should make work more human, not less. So we partner with businesses to help their people actually embrace AI \u2014 not fear it. We do consulting, implementation, and training, and we don't leave until everyone on the team feels confident. It's people-first AI, and it actually works.",
  },

  keyMessages: [
    {
      id: 1,
      pillar: "People-First AI",
      mainMessage: "AI should empower people, not replace them.",
      supporting:
        "Every solution we build starts with the humans who will use it. Technology serves people, not the other way around.",
      proofPoint:
        "100% of our implementations include hands-on training until every team member is confident.",
    },
    {
      id: 2,
      pillar: "Three Levels of Success",
      mainMessage:
        "True success happens at three levels: Individual, Team, and Business.",
      supporting:
        "We don't just optimize workflows \u2014 we build individual confidence, strengthen team collaboration, and drive measurable business results.",
      proofPoint:
        "Our three-level framework ensures no one gets left behind in the AI transformation.",
    },
    {
      id: 3,
      pillar: "Partnership Model",
      mainMessage: "We're partners, not just service providers.",
      supporting:
        "We stay engaged until goals are met. No implement-and-disappear. No leaving you to figure it out alone.",
      proofPoint:
        "Ongoing partnership model with dedicated support through The Master's Edge Business Program.",
    },
    {
      id: 4,
      pillar: "Practical Results",
      mainMessage:
        "Real solutions for real businesses \u2014 not theoretical frameworks.",
      supporting:
        "Every tool, training, and system is designed to produce immediate, measurable results in your business.",
      proofPoint:
        "15 integrated business systems with actionable implementation across all departments.",
    },
    {
      id: 5,
      pillar: "Accessible Expertise",
      mainMessage:
        "Enterprise-grade AI expertise accessible to every business.",
      supporting:
        "You don't need a Fortune 500 budget or a tech team to benefit from AI. We make it approachable and affordable.",
      proofPoint:
        "Tailored programs for small businesses, chamber members, team leaders, and solopreneurs.",
    },
  ],

  // ─── Section 6: Brand Assets ────────────────────────────────
  hashtags: {
    branded: [
      "#TotalSuccessAI",
      "#TSAI",
      "#PeopleFirstAI",
      "#PeopleCenteredAI",
    ],
    mission: [
      "#AIForHumans",
      "#HumanCenteredAI",
      "#AIWithHeart",
      "#PeopleOverTech",
      "#EmpowerNotReplace",
    ],
    service: [
      "#AIConsulting",
      "#AIImplementation",
      "#AITraining",
      "#BusinessAI",
      "#SmartBusiness",
    ],
    industry: [
      "#SmallBusiness",
      "#BusinessGrowth",
      "#FutureOfWork",
      "#AIForBusiness",
    ],
    campaign: [
      "#ThreeLevelsOfSuccess",
      "#MastersEdge",
      "#PeopleCenteredAI",
    ],
  },

  keywords: {
    primary: [
      "people-centered AI",
      "AI consulting",
      "AI implementation",
      "business AI solutions",
      "people-first AI",
    ],
    service: [
      "AI training",
      "AI strategy consulting",
      "business AI implementation",
      "team AI empowerment",
      "AI for small business",
    ],
    audience: [
      "small business AI",
      "chamber of commerce AI",
      "team leader AI tools",
      "solopreneur AI solutions",
    ],
    longTail: [
      "how to implement AI without replacing employees",
      "people-centered AI consulting for small business",
      "AI that empowers teams not replaces them",
    ],
    negative: [
      "free AI tools",
      "AI job replacement",
      "cheap AI",
      "automated replacement",
      "no-human AI",
    ],
  },

  trademark: {
    spelling:
      "Total Success AI \u2014 always spelled out, with 'AI' in capitals. Abbreviation 'TSAI' acceptable in internal communications and code. Never: totalsuccess ai, total success Ai, TotalSuccessAi.",
    logo: "Logo appears in Navy (#1a365d) or White. Maintain clear space equal to the height of the logomark on all sides. Never alter proportions, add effects, or change brand colors.",
    tagline:
      '"People-Centered AI Solutions for the Real World" \u2014 always in that exact format. Short version: "People-First AI. Real Results." Both are approved for use.',
    attribution:
      "Always attribute: \"Part of The Master's Edge Business Program by Total Success AI\"",
  },

  usageGuidelines: {
    social:
      "Post in brand voice (warm, confident, encouraging). Use 3-5 branded hashtags per post. Lead with value, not sales. Respond authentically within business hours.",
    email:
      "Professional yet warm. Clear subject lines under 50 characters. One clear CTA per email. Sign off personally. Use the approved boilerplate in footers.",
    boilerplate50:
      "Total Success AI provides people-centered AI consulting, implementation, and training for businesses. We partner with organizations to empower individuals, strengthen teams, and drive lasting business success \u2014 because AI should make work more human, not less.",
    boilerplate100:
      "Total Success AI was founded by Brett Lechtenberg and Manny Torres with a belief that AI and humanity aren't at odds. We partner with businesses through strategic consulting, hands-on implementation, and practical training \u2014 working until every individual is confident, every team is elevated, and the business thrives. Through The Master's Edge Business Program, we deliver 15 integrated business systems covering everything from brand identity to competitive intelligence. Our people-first approach ensures technology empowers individuals, strengthens teams, and creates lasting success. Because when you put people at the center, everyone wins.",
  },
};
