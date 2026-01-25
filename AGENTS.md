## Project Summary
This project is a high-fidelity clone of a medical professional's website for Dr. Willmer Obregón, a medical internist based in Medellín. The website serves as a digital presence for his clinical practice, highlighting his expertise, services, and providing clear paths for patient engagement via WhatsApp and phone.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Animations:** tw-animate-css (Tailwind CSS Animate)
- **Build Tool:** Turbopack

## Architecture
- **src/app:** Contains the main application routes and layout.
- **src/components/sections:** Modular components representing each section of the cloned website (Header, Hero, Services, etc.).
- **src/app/globals.css:** Global styles and Tailwind theme configurations specifically tailored to the medical brand aesthetic.

## User Preferences
(None yet)

## Project Guidelines
- No comments unless requested.
- Maintain a clean, professional "Medical Blue" theme.
- Ensure high legibility and mobile responsiveness.
- **SEO Rules:**
  - **H1 único por página:** `<h1>{{primary_keyword}} en {{city}} - {{brand}}</h1>`. Máximo 1 H1, keyword al inicio para CTR SERP.
  - **H2/H3 jerarquía:** H2 para secciones principales (ej. "Servicios", "Contacto"), H3 para subsecciones. No saltar niveles; semántica estricta para crawlability.
  - **Meta Title:** `<title>{{primary_keyword}} | {{brand}} {{city}}</title>`. 50-60 chars, keyword izquierda.
  - **Meta Description:** `<meta name="description" content="{{150-char summary con CTA + keywords locales}}">`. Incluye llamada a acción (ej. "Agenda cita hoy").
  - **Meta Robots:** `<meta name="robots" content="index, follow">` en `<head>` de landings públicas. Sitemap.xml auto-generado si multi-página.
  - **Imágenes ALT:** Todo `<img>` con `alt="{{descriptivo + keyword local}}"` width/height definidos. Ej. `alt="Dr. internista Medellín consulta hipertensión"`. Unsplash sources.
  - **Responsive/Index:** `<meta name="viewport" content="width=device-width, initial-scale=1">`. Mobile-first Tailwind/flex/grid; evita espacios vacíos >20% viewport.
  - **Regla global:** Siempre genera SEO on-page completo antes de UI. Verifica jerarquía headings, metas y ALTs en preview. No cookie-cutter: production-ready con schema.org si aplica.

## Common Patterns
- Section-based component architecture for easy maintenance and scaling.
- Usage of Lucide icons for medical and navigational context.
- Gradient CTAs for primary actions.
