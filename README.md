# Medanta Hospital Website Clone

A pixel-perfect frontend clone of the Medanta hospital website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
http://localhost:3000
```

## 📁 Project Structure

```
medanta-clone/
├── app/
│   ├── globals.css          # Global styles + Tailwind
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Homepage (assembles all sections)
├── components/
│   ├── Navbar.tsx           # Sticky navbar with mobile menu
│   ├── Hero.tsx             # Hero banner + quick action bar
│   ├── Specialities.tsx     # Specialities list + alphabet search
│   ├── Sections.tsx         # Services, Stats, Updates, Locations, Awards
│   ├── Stories_News.tsx     # Patient Stories carousel + News grid
│   └── Footer.tsx           # Multi-column footer
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Red | `#e8402a` |
| Dark Red | `#c73520` |
| Text | `#222222` |
| Text Light | `#555555` |
| Background Light | `#f7f7f7` |
| Border | `#e5e5e5` |
| Font (Body) | Nunito Sans |
| Font (Headings) | Playfair Display |

## 📐 Sections Implemented

1. **Navbar** — Sticky, responsive, with dropdown indicators & mobile hamburger menu
2. **Hero** — Search bar, Dr. Trehan quote, World's Best Hospitals award badge
3. **Quick Actions** — Book appointment, second opinion, health check, etc.
4. **Specialities** — 6 specialities list + alphabet-based ailment search
5. **Doctors** — Location/speciality filter + team photo
6. **Model of Care** — 5-point radial diagram around surgical image
7. **Services** — 6 service cards with images
8. **Patient Stories** — Mosaic video thumbnail grid
9. **Beyond Boundaries** — Red stats banner with world map
10. **Updates** — 3-column card grid
11. **Medanta Network** — Hospital location cards with 360-view links
12. **Awards & Recognitions** — 3 award cards with laurel styling
13. **News & Events** — Featured + 6 news items in 3-column layout
14. **Latest Blogs** — 2 featured + 3 sidebar blog cards
15. **Footer** — 5-column with app download + emergency button

## 🔧 Key Features

- **Mobile-first responsive** design across all breakpoints
- **Hover effects** and smooth transitions on all interactive elements
- **Intersection Observer** scroll reveal animations
- **Sticky navbar** with shadow on scroll
- **Tab switching** in specialities search
- Clean, **component-based** architecture for easy scaling

## 📦 Dependencies

- `next` 14.2.3
- `react` 18
- `tailwindcss` 3.3
- `typescript` 5
- Google Fonts: Nunito Sans + Playfair Display
