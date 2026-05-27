# WEDECOR4U Atelier

A luxury interior design platform built with React. It offers three curated package tiers — **Economical**, **Premium**, and **Ultra Premium** — each with a tailored vendor ecosystem, material library, AI design concierge, client dashboard, staff console, and admin panel.

---

## About the Project

WEDECOR4U Atelier is a full-featured interior design studio web app. Clients can browse curated furniture and decor, explore vendor partnerships across woodwork, hardware, laminate and glass categories, book design consultations, and track active projects. Staff and admins have dedicated portals to manage projects, quotations, procurement, and analytics.

**Key features:**
- 🏠 Home, Shop, Portfolio, Services, Hospitality, and Consultation pages
- 🛒 Product catalogue with detail pages
- 📦 Three-tier package system (Economical / Premium / Ultra Premium)
- 🪵 Curated vendor library (Blum, Häfele, Saint-Gobain, Hettich, Merino, and more)
- 💬 AI Design Concierge chatbot (Meena)
- 📊 Client Dashboard — projects, materials, quotations, orders, wishlist
- 🧑‍💼 Staff Console — kanban board, schedules, approvals, vendor assignment
- ⚙️ Admin Panel — analytics, AI logs, inventory, settings

---

## Tech Stack

| | |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Routing | React Router 7 |
| Styling | Tailwind CSS 3 |
| Icons | lucide-react |
| Notifications | sonner |
| Fonts | Cormorant Garamond · Playfair Display · Inter |

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/HarshitaSharma19/wedecor4u.git

# Navigate into the project
cd wedecor4u

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The output goes to the `dist/` folder.

### Preview the Production Build

```bash
npm run preview
```

---

## Project Structure

```
src/
├── assets/          # Images (hero, portfolio, products)
├── components/      # Shared components (SiteHeader, SiteFooter, PackageCard, AIChatAssistant…)
├── lib/             # Data (products.js, vendors.js, projects.js)
├── pages/           # All route pages
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── ProductDetail.jsx
│   ├── Services.jsx
│   ├── Hospitality.jsx
│   ├── Portfolio.jsx
│   ├── Materials.jsx
│   ├── Consultation.jsx
│   ├── Contact.jsx
│   ├── Dashboard.jsx
│   ├── Staff.jsx
│   └── Admin.jsx
├── App.jsx          # Routes and layout
├── main.jsx         # Entry point
└── index.css        # Tailwind + design tokens
```

---

## Pages Overview

| Route | Page |
|---|---|
| `/` | Home |
| `/shop` | Shop |
| `/product/:id` | Product Detail |
| `/services` | Services |
| `/hospitality` | Hospitality |
| `/portfolio` | Portfolio |
| `/materials` | Materials & Vendor Library |
| `/consultation` | Book a Consultation |
| `/contact` | Contact |
| `/dashboard` | Client Dashboard |
| `/staff` | Staff Console |
| `/admin` | Admin Panel |
