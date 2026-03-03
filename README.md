# Star Net Computers — Enterprise Website

Premium enterprise website for Star Net Computers built with React + Vite.

## Tech Stack
- React 18
- Vite 5
- Pure CSS (no Tailwind dependency needed — all styles are inline)
- Google Fonts: Playfair Display + DM Sans

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Build for Production

```bash
npm run build
```

Output is in the `dist/` folder.

---

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Vite — click **Deploy**

No environment variables required.

---

## Project Structure

```
starnet-computers/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Process.jsx
│   │   ├── Industries.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTABand.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── FadeIn.jsx
│   │   └── Particles.jsx
│   ├── data/
│   │   └── constants.js
│   ├── hooks/
│   │   └── useInView.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```
