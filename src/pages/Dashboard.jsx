import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart, Package, MessageCircle, Sparkles, CreditCard, User, ArrowUpRight,
  Check, FileText, Calendar, Download, Star, ChevronRight, Palette,
} from 'lucide-react';
import { products } from '../lib/products';
import { projects, quotations } from '../lib/projects';
import { packageConfigs, getVendorsByTier } from '../lib/vendors';
import { PackageCard } from '../components/PackageCard';

const tabs = [
  'Overview', 'My Projects', 'Materials', 'Packages', 'Quotations',
  'Orders', 'Wishlist', 'AI History', 'Payments', 'Profile',
];

const orders = [
  { id: 'WD-10248', item: 'Luna Curved Sofa', status: 'In production', eta: '12 Dec', amount: '₹1,84,000' },
  { id: 'WD-10231', item: 'Halo Ribbed Candle ×3', status: 'Delivered', eta: '21 Nov', amount: '₹20,400' },
  { id: 'WD-10209', item: 'Atlas Bronze Figure', status: 'Shipped', eta: '02 Dec', amount: '₹62,000' },
];

const statusColor = {
  Onboarding: 'text-taupe bg-taupe/10',
  Brief: 'text-foreground/60 bg-pearl',
  Concept: 'text-bronze bg-champagne/20',
  Procurement: 'text-bronze bg-bronze/10',
  Execution: 'text-foreground bg-ink/10',
  Install: 'text-ink bg-beige',
  Complete: 'text-green-700 bg-green-50',
};

const materialStatusColor = {
  Pending: 'text-amber-600 bg-amber-50',
  Approved: 'text-bronze bg-champagne/20',
  Ordered: 'text-blue-600 bg-blue-50',
  Delivered: 'text-green-700 bg-green-50',
};

const quotationStatusColor = {
  Draft: 'text-foreground/50 bg-pearl',
  Sent: 'text-blue-600 bg-blue-50',
  Approved: 'text-bronze bg-champagne/20',
  Revised: 'text-amber-600 bg-amber-50',
  Invoiced: 'text-green-700 bg-green-50',
};

function Panel({ title, children }) {
  return (
    <div className="bg-ivory border border-border p-8">
      <div className="flex items-center gap-3 mb-6">
        <User className="h-3.5 w-3.5 text-bronze" />
        <p className="eyebrow">{title}</p>
      </div>
      {children}
    </div>
  );
}

export default function Dashboard() {
  const [tab, setTab] = useState('Overview');
  const myProject = projects[0];
  const myVendors = getVendorsByTier('Ultra Premium');
  const myPackage = packageConfigs.find((p) => p.tier === 'Ultra Premium');

  return (
    <section className="container-luxe py-16 grid md:grid-cols-12 gap-10 min-h-[80vh]">
      {/* SIDEBAR */}
      <aside className="md:col-span-3">
        <div className="bg-ink text-ivory p-8">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-champagne text-ink flex items-center justify-center font-display text-xl font-bold">A</div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-champagne/70">Patron · Ultra Premium</p>
              <p className="font-display text-lg text-ivory">Aanya Mehta</p>
            </div>
          </div>
          <div className="mt-5 pt-5 border-t border-ivory/10">
            <p className="text-xs text-ivory/40">Member since 2023 · Mumbai</p>
            <p className="text-xs text-ivory/40 mt-1">Project ID: WD-P-001</p>
          </div>
        </div>
        <nav className="mt-4 flex md:flex-col gap-0.5 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`text-left text-[11px] tracking-[0.24em] uppercase px-4 py-3 transition whitespace-nowrap flex items-center gap-2 ${
                tab === t ? 'bg-bronze text-ivory' : 'hover:bg-pearl'
              }`}
            >
              {t}
            </button>
          ))}
        </nav>
      </aside>

      {/* MAIN */}
      <div className="md:col-span-9 space-y-10">
        <header>
          <p className="eyebrow">My Atelier</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">
            Welcome back, <em className="italic text-bronze">Aanya.</em>
          </h1>
        </header>

        {/* ── OVERVIEW ─────────────────────────────────────────── */}
        {tab === 'Overview' && (
          <>
            {/* KPI row */}
            <div className="grid sm:grid-cols-4 gap-px bg-border">
              {[
                { icon: Package, k: '3', v: 'Active orders' },
                { icon: Heart, k: '12', v: 'Saved pieces' },
                { icon: MessageCircle, k: '2', v: 'Consultations' },
                { icon: Sparkles, k: 'Ultra', v: 'Package tier' },
              ].map((s) => (
                <div key={s.v} className="bg-ivory p-6">
                  <s.icon className="h-4 w-4 text-bronze" />
                  <p className="mt-4 font-display text-3xl">{s.k}</p>
                  <p className="text-xs text-foreground/60 mt-1">{s.v}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Active project */}
              <Panel title="Active Project">
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-display text-xl">{myProject.projectName}</p>
                      <p className="text-xs text-foreground/55 mt-1">{myProject.location} · {myProject.area}</p>
                    </div>
                    <span className={`text-[9px] tracking-widest uppercase px-2.5 py-1 font-medium ${statusColor[myProject.status]}`}>{myProject.status}</span>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-foreground/50 mb-1">
                      <span>Progress</span><span>{myProject.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-border rounded-full">
                      <div className="h-full bg-bronze rounded-full transition-all" style={{ width: `${myProject.progress}%` }} />
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-1">
                    {myProject.milestones.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className={`h-1 mb-2 ${m.done ? 'bg-bronze' : 'bg-border'}`} />
                        <p className="text-[9px] tracking-wider text-foreground/50 leading-tight">{m.label}</p>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setTab('My Projects')} className="mt-5 flex items-center gap-1.5 text-[10px] tracking-[0.28em] uppercase text-bronze">
                    Full Project View <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </Panel>

              {/* Recommendations */}
              <Panel title="Recommended for you">
                <div className="grid grid-cols-3 gap-3">
                  {products.slice(0, 3).map((p) => (
                    <Link key={p.id} to={`/product/${p.id}`} className="group">
                      <div className="aspect-square overflow-hidden bg-beige">
                        <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
                      </div>
                      <p className="mt-2 text-[11px] leading-tight">{p.name}</p>
                    </Link>
                  ))}
                </div>
              </Panel>
            </div>

            {/* Material palette preview */}
            <Panel title="My Material Palette · Ultra Premium">
              <div className="flex flex-wrap gap-3">
                {myPackage.moodPalette.map((color, i) => {
                  const swatches = ['bg-stone-100', 'bg-amber-50', 'bg-stone-400', 'bg-yellow-800/60', 'bg-zinc-800', 'bg-purple-900/80'];
                  return (
                    <div key={color} className="flex flex-col items-center gap-2">
                      <div className={`h-14 w-14 ${swatches[i % swatches.length]}`} />
                      <span className="text-[9px] text-center text-foreground/50 max-w-[56px] leading-tight">{color}</span>
                    </div>
                  );
                })}
              </div>
              <button onClick={() => setTab('Materials')} className="mt-5 flex items-center gap-1.5 text-[10px] tracking-[0.28em] uppercase text-bronze">
                View Full Material Selection <ChevronRight className="h-3 w-3" />
              </button>
            </Panel>

            {/* Quick actions */}
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: FileText, label: 'Download Quotation', action: () => setTab('Quotations') },
                { icon: Calendar, label: 'Schedule Meeting', action: () => {} },
                { icon: Palette, label: 'View Moodboard', action: () => setTab('Materials') },
              ].map((a) => (
                <button
                  key={a.label}
                  onClick={a.action}
                  className="flex items-center gap-3 p-5 border border-border hover:border-bronze/40 hover:bg-pearl transition-all group"
                >
                  <a.icon className="h-4 w-4 text-bronze" />
                  <span className="text-[11px] tracking-[0.24em] uppercase">{a.label}</span>
                  <ArrowUpRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition text-bronze" />
                </button>
              ))}
            </div>
          </>
        )}

        {/* ── MY PROJECTS ─────────────────────────────────────────── */}
        {tab === 'My Projects' && (
          <Panel title="Active engagements">
            {projects.map((project) => (
              <div key={project.id} className="py-8 border-b border-border last:border-0">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-xs text-foreground/40">{project.id}</span>
                      <span className={`text-[9px] tracking-widest uppercase px-2.5 py-1 font-medium ${statusColor[project.status]}`}>{project.status}</span>
                      <span className="text-[9px] tracking-widest uppercase px-2.5 py-1 bg-bronze/10 text-bronze">{project.packageTier}</span>
                    </div>
                    <h3 className="font-display text-2xl">{project.projectName}</h3>
                    <p className="text-xs text-foreground/55 mt-1">{project.location} · {project.area} · Designer: {project.designer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl text-bronze">{project.budget}</p>
                    <p className="text-xs text-foreground/40 mt-1">Est. end: {project.estimatedEnd}</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mb-5">
                  <div className="flex justify-between text-xs text-foreground/50 mb-1.5">
                    <span>Overall progress</span><span className="font-medium text-foreground">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-border">
                    <div className="h-full bg-bronze transition-all" style={{ width: `${project.progress}%` }} />
                  </div>
                </div>

                {/* Milestones */}
                <div className="grid grid-cols-4 md:grid-cols-7 gap-2 mb-5">
                  {project.milestones.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className={`h-1 mb-2 ${m.done ? 'bg-bronze' : 'bg-border'}`} />
                      <div className={`h-4 w-4 rounded-full mx-auto mb-1 flex items-center justify-center ${m.done ? 'bg-bronze' : 'bg-border'}`}>
                        {m.done && <Check className="h-2.5 w-2.5 text-ivory" />}
                      </div>
                      <p className="text-[8px] tracking-wider text-foreground/50 leading-tight">{m.label}</p>
                      <p className="text-[8px] text-foreground/30 mt-0.5">{m.date}</p>
                    </div>
                  ))}
                </div>

                {/* Material selections */}
                <div>
                  <p className="eyebrow mb-3">Material Selections</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="text-[9px] tracking-widest uppercase text-bronze border-b border-border">
                          <th className="text-left py-2">Category</th>
                          <th className="text-left">Vendor</th>
                          <th className="text-left">Product</th>
                          <th className="text-left">Finish</th>
                          <th className="text-left">Qty</th>
                          <th className="text-right">Amount</th>
                          <th className="text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.materialSelections.map((m, i) => (
                          <tr key={i} className="border-b border-border/50">
                            <td className="py-3 text-foreground/60">{m.category}</td>
                            <td className="font-medium">{m.vendor}</td>
                            <td className="text-foreground/70">{m.product}</td>
                            <td className="text-foreground/60">{m.finish}</td>
                            <td className="text-foreground/60">{m.qty}</td>
                            <td className="text-right font-display">{m.totalPrice}</td>
                            <td className="text-right">
                              <span className={`text-[9px] tracking-widest uppercase px-2 py-0.5 ${materialStatusColor[m.status]}`}>{m.status}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </Panel>
        )}

        {/* ── MATERIALS ─────────────────────────────────────────── */}
        {tab === 'Materials' && (
          <div className="space-y-8">
            {/* Moodboard */}
            <Panel title="AI-Generated Moodboard · Bandra Penthouse">
              <div className="grid grid-cols-5 gap-3 mb-6">
                {[
                  { bg: 'bg-stone-100', label: 'Alabaster' },
                  { bg: 'bg-amber-800/40', label: 'Cognac Leather' },
                  { bg: 'bg-zinc-800', label: 'Onyx' },
                  { bg: 'bg-yellow-600/50', label: 'Brushed Gold' },
                  { bg: 'bg-stone-400/50', label: 'Travertine' },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center gap-2">
                    <div className={`aspect-square w-full ${s.bg} border border-border`} />
                    <span className="text-[9px] tracking-wider text-foreground/50 text-center">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Primary', desc: 'Travertine & Alabaster — warm, timeless' },
                  { label: 'Accent', desc: 'Brushed Gold & Cognac — rich, grounded' },
                  { label: 'Contrast', desc: 'Onyx & Smoked Glass — depth and drama' },
                ].map((item) => (
                  <div key={item.label} className="bg-pearl p-4">
                    <p className="text-[9px] tracking-widest uppercase text-bronze mb-1">{item.label}</p>
                    <p className="text-xs text-foreground/65 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Panel>

            {/* Saved material palettes */}
            <Panel title="Saved Material Palettes">
              <div className="space-y-4">
                {[
                  { name: 'Living Room · Palette A', vendors: ['Royale Touche', 'Häfele', 'Saint-Gobain'], saved: '18 Nov 2025' },
                  { name: 'Master Bedroom · Palette B', vendors: ['Merino', 'Blum', 'Royale Touche'], saved: '22 Nov 2025' },
                  { name: 'Kitchen · Palette C', vendors: ['CenturyPly', 'Blum', 'AIS Glass'], saved: '28 Nov 2025' },
                ].map((palette) => (
                  <div key={palette.name} className="flex items-center justify-between py-4 border-b border-border last:border-0">
                    <div>
                      <p className="font-display text-lg">{palette.name}</p>
                      <div className="flex gap-1.5 mt-1">
                        {palette.vendors.map((v) => (
                          <span key={v} className="text-[9px] tracking-wider uppercase border border-border px-2 py-0.5 text-foreground/50">{v}</span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-foreground/40">{palette.saved}</p>
                      <button className="mt-1 text-[10px] tracking-widest uppercase text-bronze">Load</button>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>

            {/* Vendor recommendations */}
            <Panel title="AI Vendor Recommendations · Your Project">
              <div className="grid sm:grid-cols-2 gap-4">
                {myVendors.slice(0, 4).map((vendor) => (
                  <div key={vendor.id} className="border border-border p-4 hover:border-bronze/40 transition">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-display text-lg">{vendor.name}</p>
                        <p className="text-[10px] tracking-widest uppercase text-bronze">{vendor.category}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-bronze fill-bronze" />
                        <span className="text-xs">{vendor.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-foreground/60 leading-relaxed mb-3">{vendor.description}</p>
                    <p className="text-xs font-medium">{vendor.priceRange}</p>
                  </div>
                ))}
              </div>
              <Link to="/materials" className="mt-5 inline-flex items-center gap-1.5 text-[10px] tracking-[0.28em] uppercase text-bronze">
                Browse Full Vendor Library <ArrowUpRight className="h-3 w-3" />
              </Link>
            </Panel>
          </div>
        )}

        {/* ── PACKAGES ─────────────────────────────────────────── */}
        {tab === 'Packages' && (
          <div className="space-y-10">
            <div>
              <p className="eyebrow mb-2">Your Current Package</p>
              <div className="inline-flex items-center gap-2 bg-ink text-champagne px-4 py-2">
                <Sparkles className="h-3.5 w-3.5" />
                <span className="text-[11px] tracking-[0.3em] uppercase">Ultra Premium · Active</span>
              </div>
            </div>

            <Panel title="Package Comparison">
              <div className="grid md:grid-cols-3 gap-5">
                {packageConfigs.map((pkg) => (
                  <PackageCard key={pkg.tier} pkg={pkg} isSelected={pkg.tier === 'Ultra Premium'} showCTA={pkg.tier !== 'Ultra Premium'} />
                ))}
              </div>
            </Panel>
          </div>
        )}

        {/* ── QUOTATIONS ─────────────────────────────────────────── */}
        {tab === 'Quotations' && (
          <Panel title="Project Quotations">
            <div className="space-y-0">
              {quotations.map((q) => (
                <div key={q.id} className="py-5 border-b border-border last:border-0 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-xs text-foreground/40">{q.id}</span>
                      <span className={`text-[9px] tracking-widest uppercase px-2 py-0.5 ${quotationStatusColor[q.status]}`}>{q.status}</span>
                      <span className="text-[9px] tracking-widest uppercase bg-bronze/10 text-bronze px-2 py-0.5">{q.packageTier}</span>
                    </div>
                    <p className="font-display text-xl">{q.clientName}</p>
                    <p className="text-xs text-foreground/50 mt-0.5">{q.date} · {q.items} line items</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-display text-2xl text-bronze">{q.amount}</p>
                    <button className="flex items-center gap-1.5 border border-border px-4 py-2 text-[10px] tracking-[0.24em] uppercase hover:border-bronze transition">
                      <Download className="h-3 w-3" /> PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        )}

        {/* ── ORDERS ─────────────────────────────────────────── */}
        {tab === 'Orders' && (
          <Panel title="Recent orders">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[10px] tracking-widest uppercase text-bronze border-b border-border">
                  <th className="text-left py-3">Order</th>
                  <th className="text-left">Piece</th>
                  <th className="text-left">Status</th>
                  <th className="text-left">ETA</th>
                  <th className="text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-b border-border/50">
                    <td className="py-4 font-mono text-xs">{o.id}</td>
                    <td>{o.item}</td>
                    <td><span className="text-[10px] tracking-widest uppercase text-bronze">{o.status}</span></td>
                    <td>{o.eta}</td>
                    <td className="text-right font-display">{o.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>
        )}

        {/* ── WISHLIST ─────────────────────────────────────────── */}
        {tab === 'Wishlist' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-beige">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <p className="mt-4 font-display text-lg">{p.name}</p>
                <p className="text-xs text-foreground/60">{p.currency}{p.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        )}

        {/* ── AI HISTORY ─────────────────────────────────────────── */}
        {tab === 'AI History' && (
          <Panel title="Concierge transcripts">
            {[
              { n: 1, desc: 'Vendor recommendation for hardwood — Blum vs Hettich comparison', date: '28 Nov 2025', pkg: 'Ultra Premium' },
              { n: 2, desc: 'Laminate finish selection for master bedroom feature wall', date: '22 Nov 2025', pkg: 'Ultra Premium' },
              { n: 3, desc: 'Package upgrade discussion: Premium → Ultra Premium', date: '15 Nov 2025', pkg: 'Premium' },
            ].map((i) => (
              <div key={i.n} className="py-5 border-b border-border last:border-0 flex justify-between items-start">
                <div>
                  <p className="font-display text-lg">Conversation #{String(i.n).padStart(3, '0')}</p>
                  <p className="text-xs text-foreground/60 mt-1">{i.desc}</p>
                  <span className="text-[9px] tracking-widest uppercase bg-bronze/10 text-bronze px-2 py-0.5 mt-2 inline-block">{i.pkg} suggested</span>
                </div>
                <span className="text-[10px] tracking-widest uppercase text-foreground/40 flex-shrink-0 ml-4">{i.date}</span>
              </div>
            ))}
          </Panel>
        )}

        {/* ── PAYMENTS ─────────────────────────────────────────── */}
        {tab === 'Payments' && (
          <Panel title="Payment methods">
            <div className="space-y-4">
              {['Visa · ending 4218', 'Mastercard · ending 8090'].map((c) => (
                <div key={c} className="flex justify-between items-center border border-border p-5">
                  <div className="flex items-center gap-4">
                    <CreditCard className="h-5 w-5 text-bronze" />
                    <p className="text-sm">{c}</p>
                  </div>
                  <button className="text-[10px] tracking-widest uppercase text-bronze">Edit</button>
                </div>
              ))}
            </div>
          </Panel>
        )}

        {/* ── PROFILE ─────────────────────────────────────────── */}
        {tab === 'Profile' && (
          <Panel title="Profile details">
            <div className="grid sm:grid-cols-2 gap-6">
              {['Aanya Mehta', 'aanya@mehta.in', '+91 98200 00000', 'Pali Hill, Mumbai'].map((v, i) => (
                <div key={i}>
                  <p className="eyebrow">{['Name', 'Email', 'Phone', 'Address'][i]}</p>
                  <p className="mt-2 text-sm">{v}</p>
                </div>
              ))}
            </div>
            <Link to="/consultation" className="mt-10 inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-bronze">
              Begin new engagement <ArrowUpRight className="h-3 w-3" />
            </Link>
          </Panel>
        )}
      </div>
    </section>
  );
}
