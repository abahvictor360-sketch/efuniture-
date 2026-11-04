# Efuniture — Furniture Shopping App UI

**Crafted Comfort. Timeless Style.** A furniture e-commerce mobile app built with React + Vite, with a liquid glass UI.

## Screens
Splash → Login / Sign up → Home → Shop → Category (e.g. Living Room, with filter/sort/price/color/material) → Product details → Cart → Checkout → Orders (tracking) → Favorites → Profile (liquid glass avatar) → Search

## Features
- Navigation between every screen with a liquid glass tab bar
- Cart, favorites and orders saved in localStorage
- Liquid glass effects (backdrop blur + SVG refraction filter)
- Inter font, responsive: phone mockup on desktop, full screen on mobile

## Run locally
```bash
npm install
npm run dev
```

## Deploy
Static Vite build (`npm run build` → `dist/`), with SPA rewrites in `vercel.json`.

To use your own profile photo, replace `public/img/avatar.jpg`.
