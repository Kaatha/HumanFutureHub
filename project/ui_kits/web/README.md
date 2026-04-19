# HFH Web — UI Kit

A high-fidelity recreation of the Human Future Hub marketing surface: nav, hero, programme cards, event listing, pull quotes, CTAs, footer. One `index.html` composes a realistic page; components live alongside.

> **Source note.** No live HFH website code was provided. This kit is built from the brand guidelines PDF and logo vocabulary — it's an informed recreation, not a scrape. Flag for iteration once the real site is available.

## Files

- `index.html` — interactive prototype. Navigates between Home / Programmes / Events / Write with pure React state.
- `Nav.jsx` — sticky top nav with logo mark + links + primary CTA.
- `Hero.jsx` — headline + lede + CTA pair + flower-mark decoration.
- `ProgrammeCard.jsx` — card for a programme (eyebrow, title, description, meta).
- `EventRow.jsx` — dense list row for upcoming events.
- `PullQuote.jsx` — blue-block full-bleed quote (positioning statements).
- `CTABand.jsx` — closing band with headline and a primary action.
- `Footer.jsx` — logo, tagline, links, guardrails.

## Fonts

Loads League Spartan (display), Public Sans (body), Inter (doc) from Google Fonts.

## Tweaks

The page exposes a Tweaks toggle: switch the hero accent (orange / teal / purple) and toggle a dense vs airy layout rhythm.
