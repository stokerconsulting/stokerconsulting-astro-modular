# Home-pagina

Astro Modular gebruikt doorgaans `src/pages/index.astro` voor de landingspagina. Open dat bestand en vervang de hero-tekst:

## Suggestie voor de hero

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Stoker Consulting — Toezicht en advies">
  <section class="hero">
    <p class="eyebrow">Toezicht &amp; advies — publiek domein</p>
    <h1>Toezicht <em>met</em> rekenschap, advies <em>met</em> richting.</h1>
    <p class="lead">
      Stoker Consulting B.V. vervult toezichthoudende rollen en levert advies aan
      organisaties in het publieke domein. De praktijk is bewust klein gehouden:
      één vaste hand, langlopende relaties, schriftelijke verantwoording.
    </p>
  </section>

  <!-- Lijst van uitgelichte posts (Toezicht, Consulting, Interim) -->
  <FeaturedPosts limit={3} />
</Layout>
```

De drie `featured: true`-posts in `src/content/posts/` worden automatisch opgepikt als de drie pijlers.
