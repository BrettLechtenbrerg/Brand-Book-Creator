# RESTART PROMPT — Brand Book Creator & Master's Edge Companion Apps

> **Last Updated:** January 30, 2026
> **Session:** Brand Book Creator — real TSAI data populated, deployed to production
> **Status:** Build 1 of 6 COMPLETE. Ready for Build 2.

---

## QUICK CONTEXT — Read This First

You are helping **Brett Lechtenberg** build **6 companion Next.js web apps** for the **Master's Edge Business Program** by **Total Success AI (TSAI)**. These apps are part of a larger business ecosystem with 15 flagship systems across 3 tiers.

The **first app (Brand Book Creator)** is **COMPLETE and DEPLOYED**. The next 5 apps need to be built following the same architecture.

---

## THE MASTER'S EDGE BUSINESS PROGRAM

**Company:** Total Success AI (TSAI)
**Founders:** Brett Lechtenberg & Manny Torres
**Tagline:** "People-Centered AI Solutions for the Real World"
**Program:** The Master's Edge Business Program — 15 flagship systems, 64 files, 30,435+ lines

### Three Tiers:
- **Tier 1 (Foundation):** 6 systems — Brand DNA, Financial Foundation, Operational Foundation
- **Tier 2 (Flagship):** 6 systems — The core revenue-generating tools
- **Tier 3 (Advanced):** 3 systems — Strategic competitive advantage

### System Documentation Location:
```
/Users/brettlechtenberg/Desktop/Claude Projects/Masters Edge Business Program/
```
Each system has a dedicated `.md` documentation file in this folder.

---

## COMPANION APPS — BUILD STATUS

We are building companion Next.js web apps for all 6 **Tier 2 Flagship Systems**. Three Tier 3 apps already exist.

### Build Order (determined for optimal data flow + GHL integration):

| # | App Name | Tier 2 System | Status | Location |
|---|----------|---------------|--------|----------|
| 1 | **Brand Book Creator** | Brand DNA System | **COMPLETE** | See below |
| 2 | **P&L Creation System** | Financial Foundation | NOT STARTED | — |
| 3 | **Delegation Engine** | Operational Foundation | NOT STARTED | — |
| 4 | **SOP Factory** | SOP & Process System | NOT STARTED | — |
| 5 | **Hiring Oracle** | Hiring System | NOT STARTED | — |
| 6 | **Difficult Conversations Coach** | People Management | NOT STARTED | — |

### Already Existing Tier 3 Apps:
| App | Location |
|-----|----------|
| Performance Review Pro | `/Users/brettlechtenberg/Desktop/Claude Projects/Performance-Review-Pro/` |
| Refferq | `/Users/brettlechtenberg/Desktop/Claude Projects/Refferq/` |
| Competitor Intel | `/Users/brettlechtenberg/Desktop/Claude Projects/competitor-intel/` |
| CEO Dashboard | `/Users/brettlechtenberg/Desktop/Claude Projects/CEO-Dashboard/` |

---

## BUILD 1: BRAND BOOK CREATOR — COMPLETE

### Locations:
- **Code:** `/Users/brettlechtenberg/Desktop/Claude Projects/Brand-Book-Creator/`
- **GitHub:** `https://github.com/BrettLechtenbrerg/Brand-Book-Creator`
- **Vercel:** `https://ts-brand-book-creator.vercel.app`
- **Latest Commit:** `ad91251` — "feat: populate all sections with real TSAI brand data + navy theme"

### Tech Stack:
- Next.js 15.5 with App Router
- TypeScript
- Tailwind CSS with CSS variables (HSL format)
- Radix UI primitives (dialog, tabs, accordion, separator)
- shadcn/ui component pattern (class-variance-authority)
- Lucide React icons
- GHL webhook integration (`/api/webhooks/ghl`)
- Navy/blue brand theme (migrated from violet)

### Project Structure:
```
Brand-Book-Creator/
├── src/
│   ├── app/
│   │   ├── globals.css          # Navy theme (--primary: 214 49% 34%)
│   │   ├── layout.tsx           # Root layout, Inter font
│   │   ├── page.tsx             # Dashboard (100% complete, all sections done)
│   │   ├── foundation/page.tsx  # Brand foundation (real TSAI data)
│   │   ├── values/page.tsx      # 7 core values + brand story
│   │   ├── voice/page.tsx       # Voice, tone shifts, archetype (Sage+Ally)
│   │   ├── visual/page.tsx      # Navy colors, typography, logo, imagery
│   │   ├── audience/page.tsx    # 4 personas, 3 pitches, 5 message pillars
│   │   ├── assets/page.tsx      # Hashtags, keywords, trademark, boilerplate
│   │   ├── settings/page.tsx    # GHL webhook, custom fields, exports
│   │   ├── guide/page.tsx       # Admin walkthrough
│   │   └── api/webhooks/ghl/route.ts  # GHL webhook endpoint
│   ├── components/
│   │   ├── sidebar.tsx          # 8 nav items + help section (navy gradient)
│   │   ├── header.tsx           # Dark mode toggle, help, user avatar
│   │   ├── dashboard-layout.tsx # 256px sidebar + sticky header + content
│   │   ├── help/help-button.tsx # 6-step modal guide
│   │   └── ui/                  # button, card, dialog, tabs, badge, input,
│   │                            # textarea, progress, separator
│   └── lib/
│       └── utils.ts             # cn(), formatDate(), helper functions
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── .gitignore
```

### Real TSAI Brand Data (populated from 27-page brand book PDF):
- **Business Name:** Total Success AI (TSAI)
- **Tagline:** "People-Centered AI Solutions for the Real World"
- **Short Tagline:** "People-First AI. Real Results."
- **Purpose:** To prove that AI and humanity aren't at odds
- **Vision:** A future where AI makes work more human, not less
- **Mission:** Partner with businesses through consulting, implementation, training
- **Positioning:** People at the center, unlike efficiency-focused AI consultants
- **7 Core Values:** People First, Empowerment Over Dependence, Partnership Not Just Service, Practical Over Theoretical, Continuous Learning, Community, Integrity & Transparency
- **Archetype:** The Sage + The Ally
- **Voice:** Warm, Confident, Encouraging, Clear, Grounded, Empowering
- **Primary Colors:** Navy #1a365d, Navy Light #2c5282, Silver #a0aec0, White #ffffff
- **4 Target Audiences:** Small Business Owners, Chamber Members, Team Leaders/Managers, Solopreneurs
- **5 Message Pillars:** People-First AI, Three Levels of Success, Partnership Model, Practical Results, Accessible Expertise

### Brand Book PDF Location:
```
/Users/brettlechtenberg/Desktop/TSAI-Brand-Book-Complete.pdf
```

---

## ARCHITECTURE PATTERN (For Building Remaining Apps)

All companion apps follow the same pattern established by Brand Book Creator and the existing Tier 3 apps:

1. **Framework:** Next.js 15 with App Router
2. **Styling:** Tailwind CSS + CSS variables (navy/blue theme)
3. **Components:** shadcn/ui pattern with Radix primitives
4. **Layout:** 256px fixed sidebar + sticky header + scrollable content
5. **Icons:** Lucide React
6. **Backend:** GHL webhook endpoints for data sync
7. **Deployment:** GitHub repo → Vercel production
8. **Naming:** `ts-[app-name]` for Vercel projects

### GHL Integration Strategy:
- Each app has a `/api/webhooks/ghl/route.ts` endpoint
- Custom fields in GHL store app data
- Other Master's Edge apps read shared GHL custom fields
- Settings page in each app manages GHL webhook URL + API key

---

## WHAT TO DO NEXT

The immediate next task is **Build 2: P&L Creation System** — a companion app for the Financial Foundation system.

To build it:
1. Read the system documentation at `/Users/brettlechtenberg/Desktop/Claude Projects/Masters Edge Business Program/` (look for P&L or Financial Foundation .md file)
2. Follow the same architecture pattern as Brand Book Creator
3. Create the project at `/Users/brettlechtenberg/Desktop/Claude Projects/P-L-Creation-System/` (or similar)
4. GitHub repo under `BrettLechtenbrerg` org
5. Deploy to Vercel as `ts-p-l-creation-system`

### Build Order Rationale:
- **P&L Creation System (Build 2):** Financial reality — budgets feed into SOP Factory and Hiring Oracle
- **Delegation Engine (Build 3):** Task identification — which tasks to delegate feeds into SOPs
- **SOP Factory (Build 4):** THE GHL hub — consumes brand voice + delegation data, creates procedures
- **Hiring Oracle (Build 5):** Uses brand values from Brand Book + financial data from P&L
- **Difficult Conversations Coach (Build 6):** Final people-management tool, uses values + voice data

---

## KEY COMMANDS

```bash
# Navigate to Brand Book Creator
cd "/Users/brettlechtenberg/Desktop/Claude Projects/Brand-Book-Creator"

# Navigate to system docs
cd "/Users/brettlechtenberg/Desktop/Claude Projects/Masters Edge Business Program"

# Build
npm run build

# Dev server
npm run dev

# Deploy
vercel --prod --yes

# Push to GitHub
git push origin main
```

---

## KNOWN ISSUES / NOTES

- `@next/swc` version mismatch warning (15.5.7 vs 15.5.11) — non-blocking, builds fine
- ESLint font warning in layout.tsx — non-blocking
- Dev server defaults to port 3002 if 3000 is busy
- Vercel project names cannot have capital letters
- `Image` import from lucide-react renamed to `ImageIcon` to avoid HTML conflict

---

## SESSION HISTORY

1. **Session 1:** Built Brand Book Creator from scratch (scaffold, all pages, UI components, deploy)
2. **Session 2 (current):** Populated all 6 sections with real TSAI brand data from PDF, migrated theme from violet to navy, committed, pushed, deployed

**Git History:**
- `73aed75` — Initial Brand Book Creator with all pages and components
- `ad91251` — Real TSAI brand data + navy theme migration
