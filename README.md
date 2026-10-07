# Marmor

A minimal, scroll-animated gallery of ancient Greek and Roman sculpture.

Built with React, Vite, Tailwind CSS v4 and Framer Motion.

## Run it

```bash
npm install
npm run dev
```

`npm run build` produces a static site in `dist/`.

## Sections

- **Hero** – Winged Victory of Samothrace with a staggered title and parallax on scroll
- **Prologue** – text that illuminates word by word as you scroll
- **Works** – Venus de Milo and Augustus of Prima Porta, revealed with clip-path wipes and parallax
- **Procession** – a pinned section where vertical scroll pans horizontally through Laocoön, Apollo Belvedere and Marcus Aurelius
- **Interlude** – The Dying Gaul opening from a framed window to full-bleed
- **Epilogue** – closing quote and image credits

Animations respect the visitor's `prefers-reduced-motion` setting.

## Images

All photographs are public domain and come from Wikimedia Commons; source links are in the page footer and `src/data/statues.js`.
