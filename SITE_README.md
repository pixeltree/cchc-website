# Calgary Conservative Housing Coalition (CCHC) Website

## Overview
A high-intensity advocacy website designed to oppose the repeal of rezoning in Calgary, framing pro-density as a "Common Sense" fiscal and property-rights issue.

**Target:** March 23, 2026 Public Hearing  
**Key Message:** Stop the $1 Billion Taxpayer Penalty

## Features

### 1. Hero Section
- Urgent, high-contrast design with Conservative Blue (#00205B) and Warning Gold (#FFB81C)
- Countdown timer to the March 23, 2026 Public Hearing
- Key statistics: $861M federal funding at risk, 14 councillors to pressure, days remaining
- Primary CTAs: "Calculate Your Tax Penalty" and "Send Letter to Council"

### 2. Interactive Tax Calculator
- Users enter their home value
- Calculates estimated annual property tax increase if Calgary loses $861M in federal funding
- Shows 5-year total impact
- "Print for your records" functionality
- Red warning design to emphasize urgency

### 3. Gatekeeper Watch List
- Directory of Calgary City Councillors
- Each card shows:
  - Councillor name and ward
  - Risk level (High/Medium/Low)
  - Contact information (email, Twitter)
  - "Email This Office" button (pre-filled template)
  - "Post on X/Twitter" button (pre-filled tweet)
- High-priority councillors highlighted

### 4. Property Rights Manifesto
- Four core principles:
  1. Your Land, Your Right
  2. Market Solutions Work
  3. Common Sense Fiscal Policy
  4. Housing Choice for All
- Key facts section with compelling statistics

### 5. Social Sharing
- Pre-filled social media templates
- Easy sharing to Twitter/X and Facebook
- Viral-ready messaging

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

## Brand Identity

### Colors
- **Conservative Blue:** `#00205B`
- **Taxpayer Warning Gold:** `#FFB81C`
- **Alert Red:** `#DC2626`
- **White:** `#FFFFFF`

### Voice & Tone
- Aggressive, urgent, "Common Sense"
- Populist conservative messaging
- Avoid urban planning jargon
- Use words like "Ban," "Gatekeepers," "Tax Hike," "Property Rights"

## Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles with CCHC brand colors
├── components/
│   ├── navbar.tsx          # Top navigation with donate CTA
│   ├── hero.tsx            # Hero section with countdown
│   ├── tax-calculator.tsx  # Interactive tax penalty calculator
│   ├── property-rights-manifesto.tsx  # Core principles
│   ├── gatekeeper-list.tsx # Councillor pressure campaign
│   ├── footer.tsx          # Footer with social sharing
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── data/
│   └── councillors.json    # Councillor contact information
└── lib/
    └── utils.ts            # Utility functions (cn helper)
```

## Data Management

### Councillors Data
Edit `src/data/councillors.json` to update councillor information:

```json
{
  "id": 1,
  "name": "Councillor Name",
  "ward": "Ward X",
  "riskLevel": "High|Medium|Low",
  "email": "email@calgary.ca",
  "twitter": "@TwitterHandle"
}
```

## Key Dates

- **Current Date:** February 12, 2026
- **Public Hearing:** March 23, 2026
- **Days Remaining:** 39 days

## Deployment

The site is optimized for static export and can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages
- Any static hosting provider

```bash
npm run build
# Output will be in .next/ directory
```

## SEO & Metadata

- Title: "CCHC - Stop the $1 Billion Taxpayer Penalty"
- Description: Optimized for social sharing and search
- Keywords: Calgary, housing, rezoning, property tax, City Council, property rights

## Messaging Strategy

### Core Frames
1. **Fiscal Responsibility:** $861M federal funding loss → property tax increases
2. **Property Rights:** Government overreach vs. landowner freedom
3. **Market Solutions:** Let builders respond to demand, not bureaucrats
4. **Urgency:** 39 days until the vote

### Language Guidelines
- ✅ USE: "Housing Ban," "Gatekeepers," "Tax Penalty," "Property Rights"
- ❌ AVOID: "Missing middle," "density," "urban planning jargon"

## Social Media Integration

### Pre-filled Tweet Template
```
I just checked my Tax Penalty on CCHC.ca. Calgary can't afford to lose $861M in federal funding! #StopTheBan #yyccc
```

### Email Template
Pre-filled email to councillors emphasizing:
- $861M funding loss
- Property tax impact
- Property rights
- Market-based solutions

## License

This is a grassroots advocacy campaign. Not affiliated with any political party.

## Disclaimer

Tax calculations are estimates based on proportional distribution of the $861M federal funding loss across Calgary households. Actual tax impacts may vary.

