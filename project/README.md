# Human Future Hub — Design System

**Human Future Hub (HFH)** is a Berlin-based AI literacy social enterprise. The mission: empower humans to thrive in the AI era — nobody is left behind.

Positioning: **AI realists, not evangelists.** Equity ethos: **nobody is left behind.** Two pillars: **Future of Work** and **Future of Education** (flagship programme: *Educate the Educator* — training teachers and parents).

This folder is the source of truth for HFH's visual and verbal identity: brand voice, colours, typography, iconography, and component recipes. It is cross-compatible with Claude Code as an Agent Skill (see `SKILL.md`).

---

## Index

| File / folder | What's in it |
|---|---|
| `README.md` | You are here. Brand context, content + visual foundations, iconography. |
| `SKILL.md` | Agent Skill entry point (works with Claude Code). |
| `colors_and_type.css` | Design tokens — CSS variables for colour, type, spacing, radii, shadows, motion. |
| `assets/` | Logos, flower mark, brand PDF. Copy from here — don't reference externally. |
| `preview/` | Cards that populate the **Design System** tab. |
| `ui_kits/web/` | High-fidelity recreation of the HFH marketing website (homepage, programmes, events). |
| `slides/` | Sample deck slides in HFH style (optional — created per product need). |
| `uploads/` | Raw uploaded materials from the brand owner. |

### Sources consulted

- `uploads/HFH_Brand_Guidelines.pdf` — canonical brand guidelines (voice, colours, typography, positioning). Authored by Kata, last updated April 2026.
- Logo assets: `HFH-Logo-Transparent.png`, `HFF-Flower-transp.png`, `HFF-Flower-circle.png`, `LN-Group-HFHLogo.png`, `LN-Logo-VersionAlt.png`.
- No codebase or Figma was provided. No existing website code was available to recreate from. UI kit choices are grounded in the brand guidelines and logo vocabulary, not a scraped live site — flagged where relevant.

---

## Content fundamentals

HFH's writing is the loudest part of the brand. Treat copy as a first-class design material.

### Voice in one line
A thoughtful person who has thought carefully about a serious problem and wants to talk about it honestly. Not a nonprofit newsletter. Not a startup deck. Not a tech blog.

### Core descriptors
- **Warm but not fluffy.** Hard topics, taken seriously, without performing concern. Empathy through specificity, not filler.
- **Punchy and curiosity-driven.** Short sentences earn their place. So do long ones, when they need to land.
- **Peer-to-peer, not broadcast.** "We" over "our audience". Direct address — "you", "we".
- **Specific over generic.** *"Teachers in Germany have no structured AI support"* beats *"AI is changing education"*. Always.
- **Honest, not sugar-coated.** Realistic optimism over hype. No promising what can't be delivered.

### Casing & punctuation
- **Sentence case** for headings and UI ("Future of Education", not "FUTURE OF EDUCATION"). Title Case is fine for programme names and section labels used as navigation.
- **UPPERCASE** only for eyebrows / labels (`PROGRAMME`, `EVENT`) — never for body, never for headlines.
- **En dashes** for ranges (`10–12 November`). **Em dashes** — sparingly — for asides.
- **Oxford comma** on. Serial clarity matters more than house-style minimalism.
- **British spelling** (programme, organisation, behaviour) — HFH is Berlin-based and European-facing.

### Pronouns
- `we` = HFH. `you` = the reader. Never "our audience", "our users", "the community of learners".
- Active voice. Subjects doing things to objects.

### Emoji
- **No.** Not in body copy, not in headings, not as decoration. Brand guidelines explicitly call out "No emojis as decoration."
- The one tolerable exception: a ✓ inside a guardrail checklist (as in the brand PDF itself). Treat it as a glyph, not an emoji.

### Do / avoid cheat sheet
| Do | Avoid |
|---|---|
| Sentences that sound like a person wrote them | Rhythmic three-part structures ("We educate. We connect. We empower.") |
| Direct address ("you", "we") | Corporate HR-speak, nonprofit boilerplate |
| Name specifics — countries, numbers, real examples | AI-generated patterns: manufactured warmth, generic enthusiasm |
| State positions confidently, no over-explaining | Hedging ("perhaps", "it might be worth considering") |
| Let short sentences land on their own | Filler openers ("In today's world…", "As we all know…") |
| Discuss systemic AI impact | Amplifying AI product hype, commenting on launches |

### Quick test (from the brand PDF)
Read it aloud. Does it sound like a committee wrote it? Rewrite. Does it start with the strongest idea? If not, restructure. Would a thoughtful peer find this useful? That's the bar.

### Examples in practice

**Substack excerpt (brand-approved):**
> You turned it into a springboard, raising questions about AI agency, acceleration, governance and what it means to move through a world that's changing faster than most people and organisations can keep up with.

**Substack excerpt (brand-approved):**
> The Silicon Valley narrative is loud and too well funded, so conversations like ours are how we make sure it isn't the only one.

**Positioning lines (in-brand):**
- "AI realists, not evangelists."
- "Nobody is left behind."
- "Technology is the context. The human experience is the subject."

---

## Visual foundations

### Colour
Four brand colours do all the work. Use them deliberately — blue and teal carry the visual weight; orange is functional accent, not decoration; purple is used sparingly for backgrounds.

| Token | Hex | Role |
|---|---|---|
| `--hfh-blue` | `#1B4A9B` | Primary. Headers, body text, CTAs, document headings. |
| `--hfh-teal` | `#52CBBE` | Primary. Secondary text, backgrounds, table fills, CTAs. |
| `--hfh-orange` | `#FF6D4D` | Accent **only**. Highlights, pull quotes, callout labels. |
| `--hfh-purple` | `#5E17EB` | Supporting. Backgrounds, fills. Use sparingly. |

Tints (`-50`, `-200`, `-500`, `-700`, `-900`) are derived from these four and live in `colors_and_type.css`. Do not introduce new hues.

**Signal, not decoration.** Random colour mixing undermines recognition. A page almost always uses blue as anchor, white or a `-50` tint as surface, teal for a supporting block, and orange for exactly one highlight.

### Typography
- **League Spartan** — bold headlines (web, decks, social). Geometric, tight, confident. Weights 700–900 for display; 600 for H4s.
- **Public Sans** — body text on web. A workhorse humanist sans with open apertures and an honest, readable voice. Weights 400 (body), 500 (emphasis), 600–700 (UI labels, small headings).
- **Inter** — all document types (DOCX, email, PDF exports). Screen-legible, neutral, widely shipped.

Typography does the heavy lifting. When the copy is strong, typography can be minimal. Don't layer effects on text that already says something well.

> **Font source flag.** The uploaded `Inter,League_Spartan,Public_Sans.zip` was not accessible as a raw archive in this environment. The design system loads **League Spartan**, **Public Sans**, and **Inter** from Google Fonts (free open versions). If you have the licensed TTFs, drop them in `fonts/` and add `@font-face` declarations at the top of `colors_and_type.css`. Note: the brand PDF originally listed **Outfit** as body — the user updated this to **Public Sans** (web body) and **Inter** (documents). This design system follows the updated direction.

### Imagery
- **Human imagery over tech clichés.** Real people, real contexts.
- **No** circuit boards. **No** robot hands. **No** blue brain graphics. **No** abstract AI glow.
- Warmth comes from faces and situations people recognise — teachers at a whiteboard, a workshop room, a parent reading with a kid.
- Colour vibe: natural daylight, warm mids, no heavy filters. Black-and-white is acceptable for portraits. Avoid saturated gradients as photo overlays.

### Backgrounds & surfaces
- Primary: **clean white** (`--surface`) or near-white (`--surface-2 = #F7F8FB`).
- Section breaks: `--hfh-blue-50` or `--hfh-teal-50` washes — not gradients.
- **No** bluish-purple gradient backgrounds. **No** noise textures. **No** generic dot-grid backgrounds.
- Brand-accented sections: solid `--hfh-blue` panels with white text, used for hero callouts or CTA blocks. Teal solid panels are used for supporting content.
- Occasional use of the **flower mark** as a large, cropped, low-contrast background motif. Crop it off-canvas so only a petal shows.

### Layout
- **White space is doing work. Don't fill it.** One strong visual idea per asset.
- 12-column grid at desktop, 1200–1280px max content width. Generous gutters.
- Left-aligned text. Centred text only for small callouts or quotes.
- Section padding: `--space-8` (64px) minimum between major sections; `--space-10` (128px) for hero + hero-adjacent sections.

### Corner radii
- Cards / panels: `--radius-md` (12px) default, `--radius-lg` (20px) for hero cards.
- Buttons / inputs: `--radius-sm` (8px). Pill (`--radius-pill`) for tags and programme labels.
- The logo blob has an organic, asymmetric form (`--radius-petal`) — use sparingly, once per page, as a decorative fill behind an image or number.

### Borders
- Hairline `1px solid var(--border)` (`#E3E7EE`) for most card boundaries.
- `1px solid var(--border-strong)` for form inputs at rest.
- On brand-coloured surfaces, use a `rgba(255,255,255,0.2)` hairline instead.

### Shadows
Soft, low-key, never dramatic. The brand is clean, not skeuomorphic.
- `--shadow-1` — hairline lift. Cards at rest.
- `--shadow-2` — modest elevation. Hover state for cards, dropdowns.
- `--shadow-3` — floating elements. Menus, modals. Never more than one level-3 shadow on screen.
- **No** inner shadows. **No** colourful glows. **No** neumorphism.

### Motion
- Brand motion is **restrained**. Short durations (120–360ms), natural easing (`cubic-bezier(0.2, 0.8, 0.2, 1)`).
- Hover: `opacity` nudge or a `-2px` translate-Y on cards. No bouncing.
- Press: 98% scale, 80ms. Then release.
- Page transitions: fade + 4px rise, not slides or zooms.
- **No** parallax. **No** Lottie-style animations. **No** floating particles.

### Hover / press states
- **Primary button hover:** background shifts from `--hfh-blue` → `--hfh-blue-900`. Text stays white.
- **Secondary button hover:** border stays, background fills `--hfh-blue-50`.
- **Link hover:** colour shifts blue → orange, underline thickens.
- **Card hover:** `translateY(-2px)` + `--shadow-2`.
- **Press:** 98% scale, 80ms. Applies to buttons and cards.
- **Disabled:** 40% opacity, `cursor: not-allowed`. No colour change.

### Transparency & blur
- Rare. A small amount of `backdrop-filter: blur(8px)` is acceptable for a sticky nav over content.
- No frosted-glass cards. No translucent modals over tinted backgrounds.

### Protection gradients vs capsules
When placing text over imagery, prefer a **solid coloured capsule** (blue or white) over a gradient scrim. Gradient scrims are only used on full-bleed hero imagery with a `--overlay` wash.

### Cards
Default card: white surface, `--radius-md` radius, `--shadow-1`, 1px `--border` hairline. No colour accent strip on the left (AI-slop trope). Differentiation comes from content hierarchy and a small eyebrow label in `--hfh-orange` when needed.

---

## Iconography

HFH does not ship a proprietary icon set. The brand guidelines do not mention one.

**Default choice: [Lucide](https://lucide.dev/)** — open-source, clean 1.5–2px stroke, geometric but not cold. It pairs well with Outfit's rounded warmth without clashing against League Spartan's edge.

Load from CDN in prototypes:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```

### Rules
- **Stroke weight:** 2px at 24px icon size. Scale up proportionally.
- **Colour:** `currentColor`. Inherit from surrounding text colour. Never multi-colour.
- **Size tokens:** 16 · 20 · 24 · 32 · 48.
- **Icon + label:** always prefer icon + label over icon-only in primary UI. Icon-only is fine for condensed toolbars with tooltips.
- **No** emoji as icons. **No** Unicode dingbats (`►`, `★`) as UI chrome.
- **No** filled/solid icons — HFH reads better with outline icons only. Mixing fill and stroke is a visual inconsistency we avoid.

### Brand marks (not icons)
The **flower mark** (`assets/flower-mark.png` / `flower-circle.png`) is a brand asset, not an icon. Use it:
- At header / footer of decks and docs.
- As a large decorative crop behind hero headlines (one petal visible).
- Never inside a button or inline in text. Never recoloured.

### Substitution flag
Lucide is a substitute. If HFH later commissions a bespoke set, drop SVGs into `assets/icons/` and update `ui_kits/web/Icon.jsx`.

---

## How to use this system

**In a prototype / mock:**
1. `<link rel="stylesheet" href="colors_and_type.css">` (or copy the file in).
2. Use semantic CSS vars (`var(--fg-1)`, `var(--hfh-blue)`).
3. Pull components from `ui_kits/web/` and compose.
4. Copy logos from `assets/` — do not hotlink.

**In production code:**
Read the token values, port them into your framework's theme file, and keep the names — `hfh-blue`, `hfh-teal`, etc. — so design reviews stay grounded.

**Writing copy:**
Run the four guardrails from the brand PDF before publishing:
1. Systemic, not reactive.
2. Realist, not evangelist.
3. Human first.
4. No political commentary.

---

*Last updated: April 2026. Maintained alongside the brand guidelines PDF (`assets/HFH_Brand_Guidelines.pdf`).*
