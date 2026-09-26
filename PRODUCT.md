# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Undecided. Proposed, awaiting approval: static-first site (see `Docs/02_architecture/stack_tecnica.md`). Not delegated: the owner asked for a recommendation and approves it.

## Users

Visitors to a proposal/pitch for the Ateliê Doces Bruna brand site: (1) Bruna, the business owner, who will judge whether the site captures her brand; (2) local customers in Itapeva/MG arriving from Instagram, Google or Maps who want to order (delivery), order to measure (cakes, events) or visit the shop. Primary audience for the pitch: Bruna. Customer profile is not confirmed by her; do not invent one.

## Product Purpose

A single-page brand experience for a confectionery with a physical shop: present the brand and the person behind it, show the real work, and send people to the right channel (order now → Yooga; custom order → WhatsApp; visit → Google Maps). Success for the pitch: Bruna sees her own brand elevated, not replaced ("UAU, era disso que a minha marca precisava").

## Positioning

"A confectionery with soul, face and signature." Made from her real public material: her photography (hand + product, natural light), her logo, her voice. The site does not replace Instagram, Yooga, WhatsApp or Google; it connects them.

## Operating Context

Sources are public only (Track A): Instagram @ateliedocesbruna, Yooga delivery menu, Linktree, Google Maps listing (observed 2026-09-26). Instagram shows ~24 posts without login. Production launch (Track B) needs validation by Bruna: contacts, hours, permission to use images, legal data. See `Docs/atelier-bruna/00_CONTEXT_MASTER.md` and `Docs/atelier-bruna/17_INSTAGRAM_BRAND_ATLAS.md`.

## Capabilities and Constraints

- Outbound destinations only: Yooga `https://delivery.yooga.app/ateliedocesbruna`; WhatsApp `https://wa.me/5535984235184` (public via Linktree); Instagram; Google Maps.
- No prices, ratings counts, follower counts or hours hardcoded without a date; they change.
- "Menu de Bolos" (Google Drive) requires Google login: do not link it.
- Store hours differ across public sources (Google, Instagram captions, Yooga); unresolved until Bruna confirms.
- Performance budget and reduced-motion support are required (see `Docs/06_quality_gates/performance_gate.md`).

## Brand Commitments

- Name: Ateliê Doces Bruna. Logo: never redraw; use the official file (only a public PNG is available now, ≈#72482A cacao ground, ≈#FCECE4 cream lettering, ≈#D4A484 flower).
- Existing phrases: "Doces incríveis para transformar o seu dia!", "O seu momento mais doce!!". Other lines ("Feito para ser lembrado.", "Que tal um doce?", "Por trás de cada detalhe.") are creative direction, not confirmed slogans.
- Real photography of the brand takes priority over anything generated; no fabricated products, people, reviews or history.
- Where a trend conflicts with the brand's actual visual DNA, the brand wins.

## Evidence on Hand

Public only: 24 Instagram feed items (17 captions read), 6 highlights, logo PNG, Yooga menu (~20 categories, ~45 items), Linktree links, Google listing (4.6, 10 reviews, hours, phone). Third-party post by @mestresdopaladar (2026-09-23) narrates a trajectory; it is not confirmed by Bruna. Absent and must not be fabricated: founding date, personal history, awards, testimonials, customer counts, recipes, vector logo, licensed fonts, authorization to use images.

## Product Principles

1. Real over generic: only her photos, her logo, her words.
2. Order and custom-order are different journeys and stay separate.
3. Motion serves the story; content is readable without it.
4. Volatile facts are dated or omitted.
5. Prototype now, validate before launch.

## Accessibility & Inclusion

Respect `prefers-reduced-motion`; text contrast ≥ 4.5:1; keyboard and screen-reader access to all content and CTAs; no horizontal scroll on mobile; touch targets ≥ 44 px.
