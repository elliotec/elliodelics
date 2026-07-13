---
name: elliodelics
description: One drenched green page proving engineering rigor and psychedelic fluency at once
colors:
  void: "oklch(0.29 0.09 152)"
  void-deep: "oklch(0.245 0.075 152)"
  void-abyss: "oklch(0.19 0.058 152)"
  void-lift: "oklch(0.34 0.105 152)"
  ink: "oklch(0.975 0.008 152)"
  ink-dim: "oklch(0.975 0.008 152 / 0.8)"
  ink-faint: "oklch(0.975 0.008 152 / 0.28)"
  acid: "oklch(0.76 0.19 155)"
  bloom: "oklch(0.7 0.13 305)"
  violet-room: "oklch(0.235 0.075 300)"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.1rem, 0.5rem + 7.2vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.028em"
  headline:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.2rem + 4vw, 4.25rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.028em"
  title:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 1.3rem + 2vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Source Serif 4 Variable, SS4 Fallback, Georgia, serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.62
  body-large:
    fontFamily: "Source Serif 4 Variable, SS4 Fallback, Georgia, serif"
    fontSize: "clamp(1.375rem, 1.15rem + 1vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "JetBrains Mono, Lucida Console, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    letterSpacing: "0.02em"
  logo:
    fontFamily: "MuseoModerno, Bricolage Grotesque, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
rounded:
  none: "0"
  pill: "99px"
  full: "50%"
spacing:
  section: "clamp(7rem, 14vh + 3rem, 13rem)"
  gutter: "clamp(1.25rem, 4vw, 4rem)"
  measure: "34em"
components:
  link-cue:
    textColor: "{colors.acid}"
    typography: "{typography.label}"
    padding: "1em 0"
  button-copy:
    textColor: "{colors.ink-dim}"
    rounded: "{rounded.pill}"
    typography: "{typography.label}"
    padding: "0.7em 1.3em"
  button-copy-hover:
    textColor: "{colors.acid}"
  service-row:
    backgroundColor: "{colors.void}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(1.6rem, 4vh, 2.6rem) clamp(0.5rem, 1.5vw, 1.25rem)"
  service-row-hover:
    backgroundColor: "{colors.acid}"
    textColor: "{colors.void-abyss}"
  mail-cta:
    textColor: "{colors.acid}"
    padding: "0.3em 0"
---

# Design System: elliodelics

## 1. Overview

**Creative North Star: "The Green Void"**

The surface IS the color. This is a drenched system: one deep forest, near-black green (`void`) floods every screen edge to edge, and everything else — near-white green-tinted serif prose, a single spring-green accent, hairline rules — lives inside it. The page reads like a schematic drawn on a dark field: thin strokes, mono annotations, generative interference geometry. It is the visual argument for the brand itself: engineering precision applied to psychedelic territory, "strange with a straight face." The strangeness is in the concept (a wordmark braced by mushrooms, psilocybin annotated like a code review, a canvas that paints the Flower of Life); the execution is ruler-straight.

Layout is one long single-column page in seven full-bleed bands, each a slightly different luminance of the same green — hero (`void`), ticker (`void-deep`), manifesto (the one violet room), services (`void`), work (`void-deep`), founder (`void`), contact (`void-abyss`). Depth comes entirely from this banding, never from shadows or cards. Sections breathe with `spacing.section` vertical padding; text columns hold a tight reading measure (34em body, 44–52ch descriptions); big display headings occasionally swing right-aligned (Field reports) or cap at a character count (`max-width: 12ch`) to keep tension in the column.

The system explicitly rejects its anti-references: no Corporate SaaS template (no gradient hero, no three feature cards, no logo wall, no pricing table, no "Book a demo"), no clinical medical-white minimalism, and no trippy clichés — no tie-dye, no fractals, no melting rainbows. Psychedelic fluency here looks like sacred geometry drawn as a lab schematic, not a costume.

**Key Characteristics:**
- Drenched monochrome green surface with luminance banding for depth
- Serif body on a dark ground — editorial, warm, not techy-cold
- Uppercase 800-weight display type at extreme fluid sizes
- One acid green accent that always means "interactive"; one purple that means "the field"
- Stroke-drawn SVG and canvas artwork (no fills, no photos except one portrait)
- Zero border-radius except pills and circles; zero shadows
- Motion is choreographed but fully degradable: no JS, no motion, no problem

## 2. Colors

A single green hue (OKLCH hue 152) stretched across four surface depths and one ink, with two chromatic voices on top; every value in this system is authored in OKLCH, and the canvas reads `--void` from the token at runtime via `getComputedStyle` so the artwork can never desync from the palette.

### Primary
- **Acid** (`oklch(0.76 0.19 155)`, `--acid`): the spring green of elliot.ec. Strictly the interactive voice — links, cues, arrows, the sentence-ending dot on display headings, focus outlines, `::selection` background, glyph strokes, the mono aside in Founder, and the full-row hover flood in Services. If it's acid, you can click it (or it's a deliberate annotation mark like `✺` or the schematic comments).

### Secondary
- **Bloom** (`oklch(0.7 0.13 305)`, `--bloom`): the canvas purple, now also brand. The psychedelic voice: the closing mushroom brace of the wordmark, the hero's interference rings and pointer rings, and the flower-burst petals. Bloom decorates and signifies the field; it is never an interactive color.

### Tertiary
- **Violet Room** (`oklch(0.235 0.075 300)`): a one-off surface used only on the Manifesto section — the one violet room in the green house, where the altered-state argument gets the altered surface. Same luminance band as `void-deep`, hue shifted to 300. Not a token in `global.css`; it must never spread to a second section.

### Neutral
- **Void** (`oklch(0.29 0.09 152)`, `--void`): the drench. Default page and section background; also the canvas ground and phosphor-fade wash.
- **Void Deep** (`oklch(0.245 0.075 152)`, `--void-deep`): the darker band (ticker, work); also the `::selection` text color.
- **Void Abyss** (`oklch(0.19 0.058 152)`, `--void-abyss`): the lowest band — contact and footer; also the text color on acid floods.
- **Void Lift** (`oklch(0.34 0.105 152)`, `--void-lift`): hover lift on void surfaces (the copy button's failure state background).
- **Ink** (`oklch(0.975 0.008 152)`, `--ink`): green-tinted white. Headings, primary prose, schematic strokes.
- **Ink Dim** (ink at 80% alpha, `--ink-dim`): secondary prose, descriptions, subheads, mono metadata.
- **Ink Faint** (ink at 28% alpha, `--ink-faint`): rules and hairlines only — borders, ledger dots, leader lines, the portrait ring. Never body text.

The hero canvas carries three additional one-off stroke colors that live only in that script: deep emerald stamps (`oklch(0.63 0.17 155)` at 0.3 alpha), a white birth flash (`oklch(0.975 0.008 152)`), and the acid pulse (`oklch(0.76 0.19 155)`).

### Named Rules
**The Drench Rule.** The surface IS the green. No white backgrounds, no light mode, no cards floating on a different color. Every band is a luminance of hue 152 — except the one violet room.

**The Acid Means Interactive Rule.** Acid appears on interactive elements and deliberate annotation marks, nothing else. A visitor should be able to navigate the page by color alone.

**The One Violet Room Rule.** `oklch(0.235 0.075 300)` belongs to the Manifesto section and only the Manifesto section. A second violet surface dilutes the argument.

**The Faint Ink Rule.** `ink-faint` (28% alpha) is for hairlines — 1px borders, dotted ledgers, dashed leaders. It is forbidden as a text color; it fails contrast by design.

Measured contrast on these pairings runs from 6.8:1 (acid on void) to 15.9:1 (ink on void-abyss) — everything interactive or textual clears WCAG AA with room to spare.

## 3. Typography

**Display Font:** Bricolage Grotesque, static 800 only (with Helvetica Neue, Arial fallback)
**Body Font:** Source Serif 4 Variable, weights 400/600/700 (with the SS4 Fallback metric-adjusted Georgia, then Georgia)
**Label/Mono Font:** JetBrains Mono, static 400 (with Lucida Console, ui-monospace fallback)
**Logo Font:** MuseoModerno, static 700 — the wordmark and nothing else, preloaded so it never flashes its Bricolage fallback

**Character:** A loud, characterful grotesque shouting in uppercase over a calm, bookish serif — the pairing itself performs the brand's dual fluency. JetBrains Mono is the lab-notebook voice: captions, tickers, cues, and code-review annotations.

All fonts are self-hosted via Fontsource packages (`@fontsource/bricolage-grotesque/800`, `@fontsource-variable/source-serif-4`, `@fontsource/jetbrains-mono/400`, `@fontsource/museomoderno/700`). The `SS4 Fallback` `@font-face` maps local Georgia with `size-adjust: 95.2%`, `ascent-override: 97%`, `descent-override: 25%`, `line-gap-override: 0%` so the serif swap never reflows the page.

### Hierarchy
- **Display** (800, `clamp(2.1rem, 0.5rem + 7.2vw, 6rem)`, 0.98): the `.display` class — uppercase, `-0.028em` tracking. Hero H1 and the contact headline. The clamp floor is sized so PSYCHEDELIC fits at 320px viewports.
- **Headline** (800, `clamp(2rem, 1.2rem + 4vw, 4.25rem)`, 0.98): section H2s (Set setting and schema, What we build, Field reports), same `.display` treatment.
- **Title** (800, `clamp(1.75rem, 1.3rem + 2vw, 2.6rem)`, ~1.02): service row titles and case-study org names — uppercase Bricolage, `-0.02em`. The Founder lede is the serif exception at this size: Source Serif 600, line-height 1.25, sentence case.
- **Body** (400, `clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem)`, 1.62): Source Serif prose at a 34em max measure. A larger body step (`clamp(1.375rem, 1.15rem + 1vw, 1.75rem)`, line-height 1.4) carries the hero subhead and Founder follow-up in `ink-dim`.
- **Label** (400, `0.8125rem`, `0.02em`, lowercase): the `.mono` class — JetBrains Mono for captions (`fig. 01 · psilocybin, annotated like a code review`), the ticker, cue links, roles, and the footer.

The fluid scale follows a ~1.33 modular ratio with viewport-fluid `clamp()` on top. Display headings end in an acid-colored period (`<span class="dot">.</span>`); that dot is part of the type system.

### Named Rules
**The Lowercase Wordmark Rule.** "elliodelics" is always lowercase — in the wordmark, in prose, in the `<title>`. MuseoModerno exists for the wordmark alone; it never sets any other text.

**The One Weight Rule.** Bricolage Grotesque ships and renders at 800 only, always uppercase. If a heading wants to be quieter, it becomes serif or mono instead of a lighter grotesque.

**The Balanced Heads Rule.** All h1–h3 get `text-wrap: balance`; paragraphs get `text-wrap: pretty`. Ragged display type is a bug.

## 4. Elevation

Flat. This system has no `box-shadow` anywhere and no border-radius beyond pills and the circular portrait. Depth is conveyed tonally: the page descends through luminance bands of the same green — `void` → `void-deep` → `void-abyss` — like descending floors, and the hero canvas sits behind content on a three-step z-index scale (`--z-canvas: 0`, `--z-content: 1`, `--z-header: 2`). Separation within a band is a 1px `ink-faint` hairline, never a lifted surface.

### Named Rules
**The Banding Rule.** Depth = darkness. To push a section back, band it darker (`void-deep`); the final destination (contact) sits at `void-abyss`. Never simulate depth with shadows, glows, or borders thicker than 1px.

## 5. Components

The component vocabulary is small and stroke-drawn: links, one pill button, hairline-ruled lists, and schematic SVGs. Nothing is boxed; nothing is carded.

### Buttons
- **Shape:** the single true button (copy address) is a pill (`border-radius: 99px`); everything else that looks actionable is a link.
- **Copy button:** transparent background, 1px `ink-faint` border, `ink-dim` mono text, `0.7em 1.3em` padding (grows to `1em 1.5em` on coarse pointers for a ≥44px target). Hover shifts border and text to acid. Success floods the pill with acid (`copied ✺`, void-abyss text); failure floods with `void-lift` (`copy failed`) — both states also announced via a `role="status"` live region.
- **Mail CTA:** acid JetBrains Mono at `clamp(1.1rem, 0.6rem + 2.4vw, 2.1rem)` with a 2px acid underline that sweeps in from the left on hover/focus (`scale: 0 1` → `1 1`, 0.5s `--ease-expo`), plus a magnetic pointer pull (0.22 strength, skipped under reduced motion).

### Links
- **Cue links** (`begin descent ↓`, `skip to contact ↘`, `email about this →`): acid mono, no underline at rest, underline on hover, always ending in a directional glyph. Hit areas are inflated to thumb size with padding plus negative margin so layout never shifts.
- **External links** carry a superscript mono `↗` and an `aria-describedby` pointing at a shared sr-only "opens in new tab" note.
- **Focus:** every control gets `outline: 2px solid var(--acid)` at 3px offset via `:focus-visible`.

### Cards / Containers
- **There are no cards.** List items sit directly on the band, separated by 1px `ink-faint` hairlines (service index) or open whitespace (field reports, which alternate left/right via `nth-child(even) { margin-inline-start: auto }` for rhythm).
- **Service rows** are a responsive grid (glyph / title / desc / cue) whose hover state is the system's loudest move: when the row's cue link is hovered or focused, the entire row floods acid with `void-abyss` text and glyph strokes. The flood is scoped with `:has(.row-cue:hover)` and gated behind `@media (hover: hover)` so touch never gets sticky hover — and it follows the actual link, not the whole row, so hovering plain text never advertises a click that isn't there.
- **Field reports** open with an acid `✺` mark and an elliot.ec-style ledger line — org name, a dotted `ink-faint` leader, mono role — that hides below 40rem.

### Inputs / Fields
- None. Contact is a mailto plus the copy button; there are no forms by design ("goes straight to Mike · no funnel, no sales team").

### Navigation
- A single top bar inside the hero: the wordmark left, mono email right (hidden below 40rem — the contact section carries the address). No menu, no hamburger. In-page cue links do the wayfinding.

### The Wordmark (signature)
`{ elliodelics }` — the brand name in lowercase MuseoModerno 700, braced by two stroke-drawn mushrooms that read as code braces (fill: none, stroke-width 2.2, round caps and joins, 1.55em tall so they overshoot the caps height like real braces). The left/opening mushroom strokes acid; the right/closing mushroom is the same path mirrored (`scale: -1 1`) and strokes bloom. Green opens, purple closes. The favicon is the opening mushroom alone, acid on a void field (rendered as sRGB hex `#00d379` on `#003712` — the same values behind `theme-color`).

### The Hero Canvas (signature)
A full-bleed generative field behind the hero: closed-eye geometry drawn like a schematic.

- **Interference field:** three slowly drifting ring emitters draw concentric circles at 34px spacing in faint bloom (`oklch(0.7 0.13 305 / 0.055)`), creating a slow moiré. Each emitter also carries a continuous expanding acid pulse with a sine brightness envelope — never an indexed ring that would pop on phase wrap.
- **Phosphor rendering:** no hard clears. Each frame washes the canvas with the page green at 0.35 alpha, so strokes decay like phosphor persistence. Steady-state stroke brightness ≈ stroke alpha ÷ fade alpha; tune the pair together, never separately. The ground color is read from `--void` at runtime so a palette change can't desync it.
- **Pointer painting:** a mouse (never touch — touch-scroll must not paint) lays deep-emerald circles onto a fixed triangular lattice with spacing = radius (`STAMP_R = 26`, row height `26·√3/2`), so every circle passes through its neighbours' centers — the classic Flower of Life construction. Circles bloom in with an ease-out-quart, flash white at birth, keep growing ~7px/s toward a 2.6× cap so painted regions thicken into mandala overlap, ride local ripples on their edge, then dissolve after 12s of life (2.5s fade; a 300-circle cap starts dissolving the oldest early).
- **Click bursts:** a click or tap on open hero ground blooms a purple flower — 8 outer petals (118px) and 6 delayed inner petals, slowly counter-rotating, with a shockwave ring riding ahead — then dissolves over ~5.2s.
- **Self-drawing intro:** 1.4s after load the field paints one diagonal stroke by itself over 2.6s and ends it the way a click begins — with a flower burst — otherwise the interaction stays a secret.
- **Discipline:** DPR capped at 1.75; the loop stops when the hero leaves the viewport or the tab hides; under `prefers-reduced-motion` the canvas draws exactly one static frame — the geometry stays, the motion goes.

### Motion conventions (apply to every component)
Two easings only: `--ease-out` `cubic-bezier(0.22, 1, 0.36, 1)` for state transitions and reveals, `--ease-expo` `cubic-bezier(0.16, 1, 0.3, 1)` for entrances and sweeps. Scroll reveals (`.reveal` → `.in`, 0.9s rise from 2.5rem, staggered via `--reveal-delay`) are gated on an `html.io` class set by the observer script itself, so a stalled bundle can never strand content invisible; hero entrance choreography is gated on `html.js` the same way. The ticker is a 88s linear marquee, duplicated for the loop, pausable by real hover (`@media (hover: hover)`), keyboard focus, or a tap toggle on touch — and under reduced motion it stops animating and wraps into a static centered grid. Every animation in the system has a reduced-motion alternative; this is non-negotiable.

## 6. Do's and Don'ts

### Do:
- **Do** keep every surface a luminance of green hue 152 — `void`, `void-deep`, or `void-abyss` — and reserve `oklch(0.235 0.075 300)` for the Manifesto alone.
- **Do** use acid (`oklch(0.76 0.19 155)`) exclusively for interactive elements, annotation marks, and the display-heading dot. Bloom purple decorates; acid acts.
- **Do** set all display type in Bricolage Grotesque 800, uppercase, negative tracking, with fluid `clamp()` sizes from the token scale.
- **Do** write "elliodelics" in lowercase, always and everywhere.
- **Do** keep hit targets thumb-sized (≥44px on coarse pointers) using padding plus negative margin so the layout never shifts, and grow the copy button's padding under `@media (pointer: coarse)`.
- **Do** gate every hover flood behind `@media (hover: hover)` and scope it to the actual link with `:has()`; mirror each hover state with a `:focus-visible` equivalent.
- **Do** ship a real reduced-motion alternative for every animation: static canvas frame, wrapped ticker grid, instant reveals, no magnetic pull.
- **Do** keep prose in the house voice: direct, a little wry, no em dashes, no semicolons, no colons in body copy; the middot `·` separates mono labels (`fig. 01 · psilocybin`, `goes straight to Mike · no funnel, no sales team`).
- **Do** draw illustration as stroke-only SVG in ink or acid on the band — schematics, glyphs, annotated molecules — with round caps and 1–2.2px strokes.
- **Do** maintain WCAG 2.1 AA: 6.8:1 minimum on interactive color pairs, sr-only text for decorative marquees and icons, `aria-describedby` new-tab notes on external links, `role="status"` announcements for async feedback.

### Don't:
- **Don't** build the Corporate SaaS template — no gradient hero, no three feature cards, no logo wall, no pricing table, no "Book a demo." The generic startup landing template is disqualifying here.
- **Don't** go clinical or sterile — no cold medical-white minimalism, no white backgrounds, no light mode. This is a brand with a pulse, not a compliance document.
- **Don't** reach for trippy clichés — no tie-dye, no fractals, no melting rainbows. Fluency in the space means not needing the costume.
- **Don't** use `ink-faint` as a text color; it exists for 1px hairlines, dotted ledgers, and dashed leaders only.
- **Don't** add box-shadows, border-radius (beyond the pill and the circular portrait), gradients, or glassmorphism. Depth is banding; separation is a hairline.
- **Don't** set MuseoModerno on anything but the wordmark, or Bricolage at any weight but 800.
- **Don't** publish churning numeric stats or promise-shaped claims ("10x faster", "guaranteed compliance"). The copy states facts on the public record and lets the page itself be the proof.
- **Don't** let hover state advertise a click that isn't there — floods follow the focusable element, never inert text.
- **Don't** hard-clear the hero canvas or tune stroke alpha and fade alpha independently; the phosphor balance (steady-state ≈ stroke ÷ fade) is the look.
- **Don't** paint the canvas from touch input or animate it off-screen; scroll is not a brush and hidden tabs don't burn frames.
