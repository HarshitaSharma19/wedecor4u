# WEDECOR4U Atelier

> Luxury interior design platform — Economical · Premium · Ultra Premium

Built with **React 19 + Vite 8 + Tailwind CSS 3 + React Router 7**.

---

## 🚀 Deploy to Vercel

### Option A — Vercel Dashboard (recommended)

1. Push the **`wedecor4u`** folder to a GitHub / GitLab / Bitbucket repository  
   *(if it's a subfolder of a larger repo, set the Root Directory in step 3)*

2. Go to [vercel.com/new](https://vercel.com/new) → **Import Git Repository**

3. In the **Configure Project** screen:
   | Setting | Value |
   |---|---|
   | **Root Directory** | `wedecor4u` *(only if it's inside a parent repo)* |
   | **Framework Preset** | Vite |
   | **Build Command** | `npm run build` |
   | **Output Directory** | `dist` |
   | **Install Command** | `npm install` |

4. Click **Deploy** — done ✅

### Option B — Vercel CLI

```bash
# Install CLI
npm i -g vercel

# From inside the wedecor4u folder
cd wedecor4u
vercel

# For production
vercel --prod
```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
wedecor4u/
├── public/            # Static assets (favicon, icons)
├── src/
│   ├── assets/        # Images (hero, portfolio, products)
│   ├── components/    # Shared UI (SiteHeader, SiteFooter, AI Chat, PackageCard…)
│   ├── lib/           # Data libraries (products, vendors, projects)
│   ├── pages/         # Route pages (Home, Shop, Dashboard, Admin, Staff…)
│   ├── App.jsx        # Router + layout shell
│   ├── index.css      # Tailwind base + custom tokens
│   └── main.jsx       # React entry point
├── index.html
├── vite.config.js     # @ alias configured
├── tailwind.config.js # Custom colour palette (ivory, bronze, champagne…)
├── postcss.config.js
└── vercel.json        # SPA rewrites + security headers + caching
```

---

## 🗺️ Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/shop` | Shop |
| `/product/:id` | Product Detail |
| `/services` | Services |
| `/hospitality` | Hospitality |
| `/portfolio` | Portfolio |
| `/materials` | Materials & Vendor Library |
| `/consultation` | Consultation |
| `/contact` | Contact |
| `/dashboard` | Client Dashboard |
| `/staff` | Staff Console |
| `/admin` | Admin Panel |

---

## ⚙️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Routing | React Router 7 |
| Styling | Tailwind CSS 3 |
| Icons | lucide-react |
| Toasts | sonner |
| Fonts | Cormorant Garamond · Playfair Display · Inter (Google Fonts) |
