# `tailwind.config.mjs` — Stoker palette

Open `tailwind.config.mjs` in uw clone. Vervang of vul de `theme.extend.colors` aan met:

```js
export default {
  // ... bestaande config ...
  theme: {
    extend: {
      colors: {
        paper:   '#F5F2EB',
        'paper-2': '#ECE7DC',
        ink:     '#111111',
        'ink-2': '#3B3B3B',
        'ink-3': '#6E6A63',
        accent:  '#1B3A5B',
        'accent-2': '#0F2740',
        rule:    '#D9D2C2',
        'rule-soft': '#E6E0D2',
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        serif:   ['"Source Serif 4"', 'Charter', 'Georgia', 'serif'],
        display: ['"Source Serif 4"', 'Charter', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightish: '-0.012em',
        tighter:  '-0.018em',
      },
    },
  },
};
```

## Belangrijk

Het thema heeft waarschijnlijk al een eigen `colors`-blok met semantische namen (`primary`, `surface`, etc.). U kunt het **bovenstaande aanvullend** toevoegen — bestaande klassen blijven werken — of u **vervangt** de semantische kleuren door onze waarden, bv.:

```js
primary: '#1B3A5B',     // accent → primary
background: '#F5F2EB',  // paper  → background
foreground: '#111111',  // ink    → foreground
```

Welke aanpak het beste werkt, hangt af van hoe het thema z'n eigen classes opbouwt. Begin met **aanvullend** en check lokaal.
