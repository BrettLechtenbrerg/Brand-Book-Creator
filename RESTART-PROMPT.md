# ULTIMATE RESTART PROMPT — Master's Edge Companion Apps

> **Last Updated:** January 31, 2026 (6:55 AM MST)
> **Session:** Brand Book Creator — Shareable Brand Book feature complete with Supabase backend
> **Status:** Build 1 of 6 COMPLETE. Ready for Build 2 (P&L Creation System).
> **All work saved:** GitHub pushed (`6a13e8c`), Vercel deployed, Supabase env vars set, no uncommitted changes.

---

## QUICK CONTEXT — Read This First

You are helping **Brett Lechtenberg** build **6 companion Next.js web apps** for the **Master's Edge Business Program** by **Total Success AI (TSAI)**. These apps are part of a larger business ecosystem with 15 flagship systems across 3 tiers.

The **first app (Brand Book Creator)** is **COMPLETE and DEPLOYED** with a **shareable brand book feature** (Supabase-backed, password-protected option, PDF download). The next 5 apps need to be built following the same architecture.

**Key rule:** Brett co-founded TSAI with **Manny Torres**. Philosophy: *"People-Centered AI Solutions for the Real World."*

---

## COMPLETE ASSET INVENTORY

### Master Documentation Repository
| Item | Value |
|------|-------|
| **Location** | `/Users/brettlechtenberg/Desktop/Claude Projects/Masters Edge Business Program/` |
| **GitHub** | `https://github.com/BrettLechtenbrerg/Masters-Edge-Business-Program` |
| **Latest Commit** | `57ff3be` — docs: add duplicate manifest file |
| **Contents** | 15 system folders, 64+ files, 30,435+ lines, PROJECT-MANIFEST.md, RESTART-PROMPT.md |
| **Key Files** | `PROJECT-MANIFEST.md` (full inventory), `RESTART-PROMPT.md` (program-level restart) |

### Brand Book PDF (Source of Truth for TSAI Brand Data)
```
/Users/brettlechtenberg/Desktop/TSAI-Brand-Book-Complete.pdf
```

---

## ALL COMPANION APPS — COMPLETE INVENTORY

### Build 1: Brand Book Creator — COMPLETE ✅
| Item | Value |
|------|-------|
| **Local Path** | `/Users/brettlechtenberg/Desktop/Claude Projects/Brand-Book-Creator/` |
| **GitHub** | `https://github.com/BrettLechtenbrerg/Brand-Book-Creator` |
| **Vercel URL** | `https://ts-brand-book-creator.vercel.app` |
| **Vercel Project** | `ts-brand-book-creator` (org: `bretts-projects-3e254e58`) |
| **Latest Commit** | `6a13e8c` — feat: add shareable brand book with Supabase storage |
| **Git Status** | Clean, up to date with origin/main |
| **Framework** | Next.js 15.5, TypeScript, Tailwind CSS, shadcn/ui, Lucide React |
| **Backend** | Supabase (PostgreSQL) for brand book storage & sharing |

### Builds 2-6: NOT STARTED
| # | App Name | Tier 2 System | Status |
|---|----------|---------------|--------|
| 2 | **P&L Creation System** | Financial Foundation | NOT STARTED |
| 3 | **Delegation Engine** | Operational Foundation | NOT STARTED |
| 4 | **SOP Factory** | SOP & Process System | NOT STARTED |
| 5 | **Hiring Oracle** | Hiring System | NOT STARTED |
| 6 | **Difficult Conversations Coach** | People Management | NOT STARTED |

### Existing Tier 3 Apps (Already Built)
| App | Local Path | GitHub | Vercel URL | Git Status |
|-----|-----------|--------|------------|------------|
| **CEO Dashboard** | `/Users/brettlechtenberg/Desktop/Claude Projects/ceo-dashboard/` | `BrettLechtenbrerg/CEO-Dashboard` | `ceo-dashboard.vercel.app` | Clean |
| **Refferq** | `/Users/brettlechtenberg/Desktop/Claude Projects/refferq-referral-engine/` | `BrettLechtenbrerg/Refferq-Referral-Engine` | `refferq-referral-engine.vercel.app` | Clean |
| **Competitor Intel** | `/Users/brettlechtenberg/Desktop/Claude Projects/competitor-intel/` | `BrettLechtenbrerg/Competitor-Intel` | `competitor-intel.vercel.app` | Clean |
| **Performance Review Pro** | `/Users/brettlechtenberg/Desktop/Claude Projects/Performance Review Pro/` | `BrettLechtenbrerg/Performance-Review-Pro` | See GitHub README | Linked to remote |

---

## BUILD 1 DETAIL: BRAND BOOK CREATOR

### Project Structure
```
Brand-Book-Creator/
├── src/
│   ├── app/
│   │   ├── globals.css          # Navy theme + @media print CSS for PDF export
│   │   ├── layout.tsx           # Root layout, Inter font
│   │   ├── page.tsx             # Dashboard (100% complete, Share CTA card)
│   │   ├── foundation/page.tsx  # Brand foundation (real TSAI data)
│   │   ├── values/page.tsx      # 7 core values + brand story
│   │   ├── voice/page.tsx       # Voice, tone shifts, archetype (Sage+Ally)
│   │   ├── visual/page.tsx      # Navy colors, typography, logo, imagery
│   │   ├── audience/page.tsx    # 4 personas, 3 pitches, 5 message pillars
│   │   ├── assets/page.tsx      # Hashtags, keywords, trademark, boilerplate
│   │   ├── settings/page.tsx    # GHL webhook, custom fields, Share & Export tab
│   │   ├── guide/page.tsx       # Admin walkthrough
│   │   ├── share/[slug]/
│   │   │   ├── layout.tsx       # Minimal layout (no sidebar/header)
│   │   │   └── page.tsx         # Client-side share page (loading → password → loaded)
│   │   └── api/
│   │       ├── brand-book/
│   │       │   ├── route.ts     # GET/POST: Save/load brand book
│   │       │   └── publish/
│   │       │       └── route.ts # POST: Publish, PATCH: Update sharing settings
│   │       ├── share/
│   │       │   └── route.ts     # GET: Fetch by slug, POST: Verify password
│   │       └── webhooks/ghl/route.ts  # GHL webhook endpoint
│   ├── components/
│   │   ├── sidebar.tsx          # 9 nav items including Share & Export
│   │   ├── header.tsx           # Dark mode toggle, help, user avatar
│   │   ├── dashboard-layout.tsx # 256px sidebar + sticky header + content
│   │   ├── PublishPanel.tsx     # Publish/unpublish UI, share link, password toggle
│   │   ├── help/help-button.tsx # Help modal
│   │   ├── share/
│   │   │   ├── ShareableBrandBook.tsx  # ~500 line beautiful read-only brand book
│   │   │   ├── PasswordGate.tsx        # Password entry screen
│   │   │   └── PdfDownloadButton.tsx   # Floating PDF download button
│   │   └── ui/                  # shadcn/ui components
│   └── lib/
│       ├── utils.ts             # cn(), formatDate(), helper functions
│       ├── brand-types.ts       # TypeScript interfaces for all brand data
│       ├── brand-defaults.ts    # Complete TSAI demo data (DEFAULT_BRAND_DATA)
│       └── supabase.ts          # Lazy-initialized Supabase client (Proxy pattern)
├── .env.local                   # Supabase URL + anon key (gitignored)
├── .env.local.example           # Template for env vars
├── RESTART-PROMPT.md            # THIS FILE
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── .gitignore
```

### Supabase Configuration
| Item | Value |
|------|-------|
| **Project Name** | Brand Book |
| **Project Ref** | `yqdamzadvwcicgfaydfi` |
| **Supabase URL** | `https://yqdamzadvwcicgfaydfi.supabase.co` |
| **Dashboard** | `https://supabase.com/dashboard/project/yqdamzadvwcicgfaydfi` |
| **Database Password** | `BrandBookTSAI` |
| **Anon Key** | Stored in `.env.local` and Vercel env vars (JWT format `eyJ...`) |
| **Table** | `brand_books` |
| **RLS** | Enabled with "Allow all operations" policy (MVP, no auth yet) |

### Database Schema (`brand_books` table)
```sql
id                    uuid        (PK, auto-generated)
slug                  text        (unique, for share URLs)
data                  jsonb       (entire brand book data as one document)
is_published          boolean     (default false)
is_password_protected boolean     (default false)
share_password        text        (nullable, plain text for MVP)
company_name          text        (for display)
created_at            timestamptz (auto)
updated_at            timestamptz (auto)
```
Index: `idx_brand_books_slug` on `slug` column.

### Shareable Brand Book Feature (Session 4)
The complete publish → share → PDF flow:
1. **Publish**: Settings → Share & Export → "Publish Brand Book" button
2. **Data**: Sends `DEFAULT_BRAND_DATA` to Supabase via `/api/brand-book/publish`
3. **Slug**: Auto-generated from company name + timestamp (`total-success-ai-tsai-ml2dfjlm`)
4. **Share URL**: `https://ts-brand-book-creator.vercel.app/share/[slug]`
5. **Access Control**: Toggle between Public (anyone with link) or Password-Protected
6. **Password Gate**: Shows password form, verifies via `POST /api/share`, stores auth in sessionStorage
7. **Brand Book Page**: Beautiful standalone page with cover, TOC, all 6 sections, footer
8. **Dynamic Theming**: Uses brand's own primary color as accent throughout
9. **PDF Download**: Floating button (bottom-right), uses `window.print()` with `@media print` CSS

### Vercel Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL     → production + preview
NEXT_PUBLIC_SUPABASE_ANON_KEY → production + preview
```

### Help Modal Structure (help-button.tsx)
The help modal has this flow:
1. **"Why Your Brand Book Is Everything"** — Blue card, Sparkles icon, 23% revenue stat, DNA metaphor
2. **"Sound Familiar?"** — Amber card, AlertTriangle icon, relatable scenario of inconsistent branding
3. **"What This Tool Does"** — Green card, Shield icon, 6-section overview + GHL sync mention
4. **--- The 6 Steps ---** divider
5. **Steps 1-6** — Each with icon, gradient color, description, and tip
6. **"Connects to Your Other Apps"** — Cross-app integration note (Hiring Oracle, SOP Factory, Conversations Coach)
7. **"Got it, let's build!"** button

### Real TSAI Brand Data (populated from 27-page PDF)
- **Business Name:** Total Success AI (TSAI)
- **Tagline:** "People-Centered AI Solutions for the Real World"
- **Short Tagline:** "People-First AI. Real Results."
- **Purpose:** To prove that AI and humanity aren't at odds
- **Vision:** A future where AI makes work more human, not less
- **Mission:** Partner with businesses through consulting, implementation, training
- **Positioning:** People at the center, unlike efficiency-focused AI consultants
- **7 Core Values:** People First, Empowerment Over Dependence, Partnership Not Just Service, Practical Over Theoretical, Continuous Learning, Community, Integrity & Transparency
- **Archetype:** The Sage + The Ally
- **Voice Adjectives:** Warm, Confident, Encouraging, Clear, Grounded, Empowering
- **15 Banned Words:** Revolutionary, Game-changing, Disruptive, Cutting-edge, Left behind, Obsolete, Replaced, Leverage, Synergy, Optimize, Stakeholders, Utilize, Simply, Just, Obviously
- **Primary Colors:** Navy #1a365d, Navy Light #2c5282, Silver #a0aec0, White #ffffff
- **Secondary Colors:** Silver Light #e2e8f0, Slate #334155, Warm Gray #78716c, Light Blue #3b82f6, Success Green #22c55e, Soft Navy #1e3a5f
- **Typography:** Inter (primary), System UI (secondary)
- **4 Target Personas:** Overwhelmed Owen (SMB owner), Connected Carol (Chamber member), Manager Mike (Team leader), Solo Sarah (Solopreneur)
- **3 Elevator Pitches:** Cocktail (1 sentence), Networking (3 sentences), Conversational (casual)
- **5 Message Pillars:** People-First AI, Three Levels of Success, Partnership Model, Practical Results, Accessible Expertise
- **7 Tone Contexts:** Social Media, Website Copy, Training, Consulting, Email, Technical, Crisis
- **Hashtags:** #TotalSuccessAI, #TSAI, #PeopleFirstAI, #PeopleCenteredAI + mission, service, industry, campaign sets
- **Copy Rules:** Transformation hierarchy, headlines, CTAs, forbidden words/patterns

### CSS Theme (globals.css)
```css
:root {
  --primary: 214 49% 34%;        /* Navy */
  --ring: 214 49% 34%;
}
.dark {
  --primary: 214 60% 55%;        /* Lighter navy for dark mode */
  --ring: 214 60% 55%;
}
```
Plus `@media print` styles for PDF export (page breaks, color fidelity, hidden interactive elements).

---

## ARCHITECTURE PATTERN (For Building Remaining Apps)

All companion apps follow the same pattern:

1. **Framework:** Next.js 15 with App Router
2. **Styling:** Tailwind CSS + CSS variables (navy/blue theme, HSL format)
3. **Components:** shadcn/ui pattern with Radix primitives + class-variance-authority
4. **Layout:** 256px fixed sidebar + sticky header + scrollable content
5. **Icons:** Lucide React
6. **Backend:** Supabase for data persistence + GHL webhook endpoints for data sync
7. **Deployment:** GitHub repo → Vercel production
8. **Naming:** `ts-[app-name]` for Vercel projects
9. **GitHub org:** `BrettLechtenbrerg` (note the spelling)

### GHL Integration Strategy
- Each app has a `/api/webhooks/ghl/route.ts` endpoint
- Custom fields in GHL store app data
- Other Master's Edge apps read shared GHL custom fields
- Settings page in each app manages GHL webhook URL + API key

### UI Patterns
- Sidebar: Logo gradient `from-blue-900 to-blue-700`, footer with "Part of The Master's Edge Program by Total Success AI"
- Header: Dark mode toggle, Help button, Bell icon, user avatar with "B" initial
- Cards: `CardHeader` + `CardContent` pattern from shadcn/ui
- Badge variants: `success`, `info`, `outline`, `secondary`, `destructive`
- Section headers: Icon in gradient square + title + description + Badge ("Section X of 6")
- Save buttons: Toggle between Save/Saved with CheckCircle2 animation

---

## WHAT TO DO NEXT

The immediate next task is **Build 2: P&L Creation System** — a companion app for the Financial Foundation system.

### To build it:
1. Read the system documentation at `/Users/brettlechtenberg/Desktop/Claude Projects/Masters Edge Business Program/12-PL-Creation-System/`
2. Follow the same architecture pattern as Brand Book Creator
3. Create the project at `/Users/brettlechtenberg/Desktop/Claude Projects/P-L-Creation-System/` (or similar)
4. GitHub repo under `BrettLechtenbrerg` org
5. Deploy to Vercel as `ts-p-l-creation-system`

### Build Order Rationale
- **P&L Creation System (Build 2):** Financial reality — budgets feed into SOP Factory and Hiring Oracle
- **Delegation Engine (Build 3):** Task identification — which tasks to delegate feeds into SOPs
- **SOP Factory (Build 4):** THE GHL hub — consumes brand voice + delegation data, creates procedures
- **Hiring Oracle (Build 5):** Uses brand values from Brand Book + financial data from P&L
- **Difficult Conversations Coach (Build 6):** Final people-management tool, uses values + voice data

### System Documentation Folders
```
/Users/brettlechtenberg/Desktop/Claude Projects/Masters Edge Business Program/
├── 07-Delegation-Engine/        # Build 3
├── 08-SOP-Factory/              # Build 4
├── 09-Difficult-Conversations-Coach/  # Build 6
├── 10-Hiring-Oracle/            # Build 5
├── 11-Brand-Book-Creator/       # Build 1 (DONE)
├── 12-PL-Creation-System/       # Build 2 (NEXT)
```

---

## KEY COMMANDS

```bash
# Navigate to Brand Book Creator
cd "/Users/brettlechtenberg/Desktop/Claude Projects/Brand-Book-Creator"

# Navigate to system docs
cd "/Users/brettlechtenberg/Desktop/Claude Projects/Masters Edge Business Program"

# Navigate to P&L system docs (next build)
cd "/Users/brettlechtenberg/Desktop/Claude Projects/Masters Edge Business Program/12-PL-Creation-System"

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
- GitHub username is `BrettLechtenbrerg` (note the spelling)
- Performance Review Pro local folder has spaces: `Performance Review Pro` (use quotes in commands)
- Vercel org ID: `team_TP2l0A1jczMx76uLuijabKp3`
- Supabase anon key is in legacy JWT format (`eyJ...`), NOT the newer `sb_publishable_` format
- Supabase RLS policy is permissive (MVP) — needs auth added in future

---

## CRITICAL RULES (From Master's Edge Program)

1. NEVER use Zapier, Make, or n8n — direct integrations only
2. Use high-quality open source options
3. GHL should handle as much data storage as possible
4. File names must be simple and clear for non-techy people
5. Quality products are the main concern
6. Keep all DOCUMENTATION files in the Masters Edge Business Program folder
7. Keep all SOFTWARE in their respective project folders
8. Follow naming conventions: UPPERCASE-WITH-HYPHENS.md for docs
9. Update PROJECT-MANIFEST.md when adding new content
10. Commit and push to GitHub when finishing significant work

---

## COMPLETE GIT HISTORY — Brand Book Creator

```
6a13e8c feat: add shareable brand book with Supabase storage
451bcb2 docs: update RESTART-PROMPT.md with complete asset inventory and session 3 history
a60625c feat: add intro section to help modal — why brand books matter + relatable example
22784a6 docs: add ultimate restart prompt for session continuity
ad91251 feat: populate all sections with real TSAI brand data + navy theme
73aed75 Initial commit: Brand Book Creator - Complete brand identity app with 6 sections, GHL integration, and Total Success AI branding
```

---

## SESSION HISTORY

1. **Session 1:** Built Brand Book Creator from scratch (scaffold, all pages, UI components, deploy)
2. **Session 2:** Populated all 6 sections with real TSAI brand data from PDF, migrated theme from violet to navy, committed, pushed, deployed
3. **Session 3 (Jan 30, 2026):** Enhanced help modal with intro section (why brand books matter, relatable example, what the tool does). Complete audit of all repos — fixed Performance Review Pro git linkage, restored competitor-intel layout.tsx, committed Masters Edge stray file. All repos verified clean and pushed. Generated restart prompt.
4. **Session 4 (Jan 31, 2026):** Built complete shareable brand book feature:
   - Added Supabase (PostgreSQL) backend for persistent storage
   - Created `brand_books` table with JSONB data, slug-based URLs, password protection
   - Built 12 new files: types, defaults, supabase client, 3 API routes, share page, 4 components
   - Modified 6 files: dashboard CTA, sidebar nav, settings tab, globals.css print styles
   - Set up Supabase project (`yqdamzadvwcicgfaydfi`), configured env vars locally + Vercel
   - End-to-end tested: publish, share API, password protection, wrong password rejection
   - Deployed to Vercel production with Supabase env vars
   - All committed and pushed to GitHub (`6a13e8c`)

---

## GITHUB REPOS — COMPLETE LIST

| Repo | URL | Status |
|------|-----|--------|
| Masters Edge Business Program | `https://github.com/BrettLechtenbrerg/Masters-Edge-Business-Program` | Clean |
| Brand Book Creator | `https://github.com/BrettLechtenbrerg/Brand-Book-Creator` | Clean |
| CEO Dashboard | `https://github.com/BrettLechtenbrerg/CEO-Dashboard` | Clean |
| Refferq Referral Engine | `https://github.com/BrettLechtenbrerg/Refferq-Referral-Engine` | Clean |
| Competitor Intel | `https://github.com/BrettLechtenbrerg/Competitor-Intel` | Clean |
| Performance Review Pro | `https://github.com/BrettLechtenbrerg/Performance-Review-Pro` | Clean |

---

## VERCEL DEPLOYMENTS

| App | Vercel URL | Env Vars | Status |
|-----|-----------|----------|--------|
| Brand Book Creator | `ts-brand-book-creator.vercel.app` | SUPABASE_URL + ANON_KEY (prod + preview) | 200 OK |
| CEO Dashboard | `ceo-dashboard.vercel.app` | — | 200 OK |
| Refferq | `refferq-referral-engine.vercel.app` | — | Live (auth redirect) |
| Competitor Intel | `competitor-intel.vercel.app` | — | Live (auth redirect) |

---

## PHASE 2 IDEAS (Future Enhancements)

These were discussed but NOT built yet:
- Wire up individual section "Save" buttons to persist to Supabase (replace hardcoded useState)
- User authentication (Supabase Auth or Clerk)
- Custom domains for share pages
- Markdown export
- GHL JSON push (export brand data to GHL custom fields)
- Version history for brand books
- Hash passwords instead of storing plain text
- Multiple brand books per account
