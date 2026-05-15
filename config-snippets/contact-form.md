# Contactformulier — Netlify Forms

Astro Modular heeft geen ingebouwd formulier. Op Netlify is dat in drie regels op te lossen.

## Stap 1 — maak `src/pages/contact.astro`

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Contact — Stoker Consulting">
  <section class="contact">
    <p class="eyebrow">Contact</p>
    <h1>Een <em>kort</em> bericht volstaat.</h1>

    <div class="contact-grid">
      <address>
        <strong>Stoker Consulting B.V.</strong><br />
        Vogelzangh 3<br />
        3417 GT&nbsp;&nbsp;Montfoort<br /><br />
        Telefoon: <a href="tel:+31641862796">06 — 41 86 27 96</a><br />
        E-mail: <a href="mailto:gertjan@stokerconsulting.nl">gertjan@stokerconsulting.nl</a>
      </address>

      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <p hidden><label>Niet invullen: <input name="bot-field" /></label></p>

        <label>Uw naam<input name="naam" required /></label>
        <label>Organisatie<input name="organisatie" /></label>
        <label>E-mailadres<input type="email" name="email" required /></label>
        <label>Onderwerp
          <select name="onderwerp">
            <option>Toezicht</option>
            <option>Consulting</option>
            <option>Interim</option>
            <option>Algemene kennismaking</option>
          </select>
        </label>
        <label>Bericht<textarea name="bericht" rows="6" required></textarea></label>

        <button type="submit">Verstuur bericht</button>
      </form>
    </div>
  </section>
</Layout>
```

## Stap 2 — Netlify pikt het automatisch op

Bij de eerstvolgende build detecteert Netlify het `data-netlify="true"`-attribuut en activeert Forms. Inzendingen verschijnen in het Netlify-dashboard → **Forms**.

## Stap 3 — Inzendingen doormailen

In Netlify dashboard → **Forms** → **Settings** → **Form notifications** → **Add notification** → **Email notification** → `gertjan@stokerconsulting.nl`.
