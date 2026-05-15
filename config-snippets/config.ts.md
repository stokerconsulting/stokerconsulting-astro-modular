# `src/config.ts` — Stoker Consulting

Het exacte schema verschilt per versie van het thema. Hieronder de **logische blokken** met de juiste waarden. Open uw eigen `src/config.ts` en pas de overeenkomstige sleutels aan.

## Site-niveau

```ts
site: {
  title: 'Stoker Consulting',
  description: 'Toezicht en advies in het publieke domein.',
  url: 'https://stokerconsulting.nl',
  author: 'drs. J. Stoker RA',
  language: 'nl',
  locale: 'nl-NL',
},
```

## Navigatie

Vier vaste links, geen sub-menu's.

```ts
navigation: {
  pages: [
    { label: 'Home',     href: '/' },
    { label: 'Diensten', href: '/diensten' },
    { label: 'Over',     href: '/over' },
    { label: 'Contact',  href: '/contact' },
  ],
  showRSS: false,
},
```

## Logo

```ts
branding: {
  logo: '/logo-mark.png',
  logoDark: '/logo-mark-inverse.png',
  favicon: '/favicon.png',
},
```

## Theme (custom palette)

Indien het thema een `customTheme`-object accepteert:

```ts
theme: {
  default: 'light',
  allowToggle: true,
  custom: {
    light: {
      bg: '#F5F2EB',
      fg: '#111111',
      accent: '#1B3A5B',
      border: '#D9D2C2',
    },
    dark: {
      bg: '#111111',
      fg: '#F5F2EB',
      accent: '#6B97C2',
      border: 'rgba(245,242,235,0.18)',
    },
  },
},
```

## Typografie

```ts
typography: {
  bodyFont: '"Source Serif 4", Charter, Georgia, serif',
  headingFont: '"Source Serif 4", Charter, Georgia, serif',
  uiFont: '"Inter", system-ui, sans-serif',
  monoFont: '"JetBrains Mono", ui-monospace, Menlo, monospace',
},
```

## Features — uit zetten

Astro Modular komt met Obsidian-functies die niet passen bij een toezichtpraktijk. Zet uit:

```ts
features: {
  wikilinks: false,
  graphView: false,
  callouts: false,
  backlinks: false,
  tagsPage: false,
  search: true,        // mag aan blijven
  rss: false,
  comments: false,
  readingTime: false,
  tableOfContents: false,
},
```

## Deployment

```ts
deployment: {
  platform: 'netlify',
},
```

## Footer

```ts
footer: {
  text: '© 2012 — 2026 Stoker Consulting B.V.',
  legalLine: 'KvK 54025575 · BTW NL8511224215B01 · IBAN NL27 BUNQ 2047 1233 72',
  showSocial: false,
},
```
