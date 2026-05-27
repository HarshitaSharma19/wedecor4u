import { useState } from 'react';
import {
  TrendingUp, Users, Package, Sparkles, Activity, ShoppingBag, Server,
  Building2, Layers, FileText, BarChart3, Settings, Bot, ArrowUpRight,
  Star, ChevronUp, ChevronDown,
} from 'lucide-react';
import { vendors, packageConfigs } from '../lib/vendors';
import { projects, quotations, vendorAnalytics, packageDistribution } from '../lib/projects';

const adminTabs = [
  'Overview', 'Vendors', 'Materials', 'Packages', 'Projects', 'Quotations',
  'Analytics', 'AI Logs', 'Inventory', 'Settings',
];

const revenueBars = [42, 58, 51, 73, 65, 82, 91, 78, 96, 110, 124, 138];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const tierBadge = {
  'Ultra Premium': 'bg-ink text-champagne',
  'Premium': 'bg-champagne/20 text-bronze',
  'Economical': 'bg-taupe/10 text-taupe',
};

const vendorClassColor = {
  Standard: 'bg-taupe/15 text-taupe',
  Premium: 'bg-champagne/30 text-bronze',
  Luxury: 'bg-ink text-champagne',
};

const quotationStatusColor = {
  Draft: 'text-foreground/50 bg-pearl',
  Sent: 'text-blue-600 bg-blue-50',
  Approved: 'text-bronze bg-champagne/20',
  Revised: 'text-amber-600 bg-amber-50',
  Invoiced: 'text-green-700 bg-green-50',
};

const aiLogs = [
  { id: 'AI-8821', session: 'Package comparison · Ultra vs Premium', user: 'Aanya Mehta', tokens: '2,841', recommendations: 4, outcome: 'Upgrade confirmed', time: '28 Nov · 14:22' },
  { id: 'AI-8820', session: 'Vendor recommendation · Woodwork', user: 'M. Singh', tokens: '1,204', recommendations: 3, outcome: 'Hettich selected', time: '27 Nov · 11:05' },
  { id: 'AI-8819', session: 'Material cost estimation · 3 BHK', user: 'R. Kapoor', tokens: '3,102', recommendations: 6, outcome: 'Quotation generated', time: '26 Nov · 16:44' },
  { id: 'AI-8818', session: 'Hospitality moodboard generation', user: 'Karim Al-Sayed', tokens: '4,580', recommendations: 8, outcome: 'Approved', time: '25 Nov · 09:30' },
  { id: 'AI-8817', session: 'Package onboarding · Economical', user: 'P. Nair', tokens: '890', recommendations: 2, outcome: 'Consultation booked', time: '24 Nov · 13:15' },
];

export default function Admin() {
  const [tab, setTab] = useState('Overview');
  const [activePeriod, setActivePeriod] = useState('YTD');
  const max = Math.max(...revenueBars);

  return (
    <section className="container-luxe py-12 min-h-[80vh]">
      {/* Header */}
      <header className="flex justify-between items-end flex-wrap gap-6 mb-8">
        <div>
          <p className="eyebrow">Control · Architecture</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">
            Atelier Overview · <em className="italic text-bronze">FY25</em>
          </h1>
        </div>
        <div className="flex gap-2 text-[10px] tracking-widest uppercase">
          {['7D', '30D', 'QTD', 'YTD'].map((p) => (
            <button
              key={p}
              onClick={() => setActivePeriod(p)}
              className={`px-4 py-2 transition ${activePeriod === p ? 'bg-ink text-ivory' : 'border border-border hover:border-bronze/50'}`}
            >
              {p}
            </button>
          ))}
        </div>
      </header>

      {/* Tab nav */}
      <div className="flex gap-0 border-b border-border mb-8 overflow-x-auto">
        {adminTabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-3 text-[10px] tracking-[0.24em] uppercase border-b-2 whitespace-nowrap transition flex items-center gap-1.5 ${
              tab === t ? 'border-bronze text-bronze' : 'border-transparent text-foreground/50 hover:text-foreground'
            }`}
          >
            {t === 'AI Logs' && <Bot className="h-3 w-3" />}
            {t}
          </button>
        ))}
      </div>

      {/* ── OVERVIEW ─────────────────────────────── */}
      {tab === 'Overview' && (
        <>
          {/* KPI row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-8">
            {[
              { icon: TrendingUp, k: '₹4.82 Cr', v: 'Revenue · YTD', d: '+24%', up: true },
              { icon: ShoppingBag, k: '1,284', v: 'Orders fulfilled', d: '+18%', up: true },
              { icon: Users, k: '412', v: 'Active patrons', d: '+9%', up: true },
              { icon: Sparkles, k: '62%', v: 'AI-assisted orders', d: '+31%', up: true },
            ].map((s) => (
              <div key={s.v} className="bg-ivory p-6">
                <div className="flex justify-between items-start">
                  <s.icon className="h-4 w-4 text-bronze" />
                  <span className={`text-[10px] tracking-widest flex items-center gap-0.5 ${s.up ? 'text-bronze' : 'text-red-500'}`}>
                    {s.up ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}{s.d}
                  </span>
                </div>
                <p className="mt-4 font-display text-3xl">{s.k}</p>
                <p className="text-xs text-foreground/60 mt-1">{s.v}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Revenue chart */}
            <div className="md:col-span-2 bg-ivory border border-border p-8">
              <div className="flex justify-between items-baseline mb-8">
                <div>
                  <p className="eyebrow">Revenue trajectory</p>
                  <p className="mt-2 font-display text-3xl">₹4.82 Cr <span className="text-sm text-bronze">↑ 24%</span></p>
                </div>
                <div className="flex gap-4 text-[10px] tracking-widest uppercase">
                  <span className="flex items-center gap-2"><span className="h-2 w-4 bg-bronze" />Atelier</span>
                  <span className="flex items-center gap-2"><span className="h-2 w-4 bg-champagne" />Shop</span>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 h-48 items-end">
                {revenueBars.map((b, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-full flex flex-col gap-px items-stretch h-full justify-end">
                      <div className="bg-bronze hover:bg-bronze/80 transition cursor-pointer" style={{ height: `${(b / max) * 70}%` }} title={`₹${b}L`} />
                      <div className="bg-champagne" style={{ height: `${(b / max) * 25}%` }} />
                    </div>
                    <span className="text-[10px] text-foreground/50">{months[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI usage */}
            <div className="bg-ink text-ivory p-8">
              <p className="eyebrow text-champagne mb-6">AI usage · 30D</p>
              <div className="space-y-5 text-sm">
                {[
                  ['Concierge sessions', '3,284', 82],
                  ['Product matches', '1,920', 64],
                  ['Consultations booked', '146', 41],
                  ['Vendor recs sent', '892', 55],
                  ['Tokens · 1.2M', 'Within plan', 28],
                ].map(([k, v, w]) => (
                  <div key={k}>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{k}</span>
                      <span className="text-champagne">{v}</span>
                    </div>
                    <div className="h-1 bg-ivory/10">
                      <div className="h-full bg-champagne" style={{ width: `${w}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-5 border-t border-ivory/15 flex items-center gap-3 text-xs text-ivory/60">
                <Server className="h-3.5 w-3.5 text-champagne" /> All systems nominal · 99.98% uptime
              </div>
            </div>
          </div>

          {/* Package distribution + Recent orders */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-ivory border border-border p-8">
              <p className="eyebrow mb-6">Recent orders</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[10px] tracking-widest uppercase text-bronze border-b border-border">
                    <th className="text-left py-3">Order</th>
                    <th className="text-left">Patron</th>
                    <th className="text-left">Piece</th>
                    <th className="text-left">Status</th>
                    <th className="text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['WD-10248', 'A. Mehta', 'Luna Curved Sofa', 'Production', '₹1,84,000'],
                    ['WD-10247', 'K. Al-Sayed', 'Heritage suite · linen', 'Procurement', '₹3,20,000'],
                    ['WD-10246', 'Studio Verma', 'Atlas Bronze Figure', 'Shipped', '₹62,000'],
                    ['WD-10245', 'M. Singh', 'Albâtre Dining Set', 'Delivered', '₹38,000'],
                    ['WD-10244', 'R. Kapoor', 'Monolith Dining Table', 'Production', '₹2,45,000'],
                  ].map((r) => (
                    <tr key={r[0]} className="border-b border-border/50 hover:bg-pearl/50 transition">
                      <td className="py-4 font-mono text-xs">{r[0]}</td>
                      <td>{r[1]}</td>
                      <td>{r[2]}</td>
                      <td><span className="text-[10px] tracking-widest uppercase text-bronze">{r[3]}</span></td>
                      <td className="text-right font-display">{r[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-6">
              {/* Package distribution */}
              <div className="bg-ivory border border-border p-8">
                <p className="eyebrow mb-5">Package distribution</p>
                {packageDistribution.map((pkg) => (
                  <div key={pkg.tier} className="mb-4">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-medium">{pkg.tier}</span>
                      <span className="text-bronze">{pkg.revenue}</span>
                    </div>
                    <div className="h-2 bg-border">
                      <div className="h-full bg-bronze" style={{ width: `${pkg.percentage}%` }} />
                    </div>
                    <p className="text-[9px] text-foreground/40 mt-1">{pkg.count} projects · {pkg.percentage}% of revenue</p>
                  </div>
                ))}
              </div>

              {/* Inventory */}
              <div className="bg-ivory border border-border p-8">
                <p className="eyebrow mb-4">Inventory snapshot</p>
                <ul className="space-y-3 text-sm">
                  {[['Furniture', 86], ['Plants', 64], ['Crockery', 32], ['Sculpture', 18]].map(([k, w]) => (
                    <li key={k}>
                      <div className="flex justify-between text-xs mb-1">
                        <span>{k}</span>
                        <span className="text-bronze">{w}%</span>
                      </div>
                      <div className="h-1 bg-border">
                        <div className="h-full bg-bronze" style={{ width: `${w}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── VENDORS ─────────────────────────────── */}
      {tab === 'Vendors' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-foreground/50">{vendors.length} vendors in database</p>
            <button className="flex items-center gap-2 px-5 py-3 bg-ink text-ivory text-[10px] tracking-widest uppercase hover:bg-bronze transition">
              <Building2 className="h-3.5 w-3.5" /> Add Vendor
            </button>
          </div>
          <div className="bg-ivory border border-border p-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[10px] tracking-widest uppercase text-bronze border-b border-border">
                    <th className="text-left py-3">Vendor</th>
                    <th className="text-left">Category</th>
                    <th className="text-left">Classification</th>
                    <th className="text-left">Price Range</th>
                    <th className="text-left">Tiers</th>
                    <th className="text-center">Rating</th>
                    <th className="text-center">Projects</th>
                    <th className="text-left">Status</th>
                    <th className="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((v) => (
                    <tr key={v.id} className="border-b border-border/50 hover:bg-pearl/50 transition">
                      <td className="py-4">
                        <p className="font-medium">{v.name}</p>
                        <p className="text-xs text-foreground/40">{v.origin}</p>
                      </td>
                      <td className="text-foreground/70">{v.category}</td>
                      <td><span className={`text-[9px] tracking-widest uppercase px-2 py-0.5 ${vendorClassColor[v.classification]}`}>{v.classification}</span></td>
                      <td className="text-foreground/70">{v.priceRange}</td>
                      <td>
                        <div className="flex gap-1">
                          {v.tier.map((t) => (
                            <span key={t} className={`text-[8px] tracking-wider uppercase px-1.5 py-0.5 ${tierBadge[t]}`}>{t.split(' ')[0]}</span>
                          ))}
                        </div>
                      </td>
                      <td className="text-center">
                        <span className="flex items-center justify-center gap-1">
                          <Star className="h-3 w-3 text-bronze fill-bronze" />
                          <span className="text-xs">{v.rating}</span>
                        </span>
                      </td>
                      <td className="text-center text-foreground/60">{v.projectsCompleted}</td>
                      <td>
                        <span className={`text-[9px] tracking-widest uppercase px-2 py-0.5 ${
                          v.status === 'Preferred' ? 'bg-champagne/20 text-bronze' :
                          v.status === 'Limited' ? 'bg-amber-50 text-amber-600' :
                          'bg-green-50 text-green-700'
                        }`}>{v.status}</span>
                      </td>
                      <td className="text-right">
                        <button className="text-[10px] tracking-widest uppercase text-bronze hover:text-ink transition">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ── MATERIALS ─────────────────────────────── */}
      {tab === 'Materials' && (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Woodwork', 'Hardware', 'Laminate', 'Glass'].map((cat) => {
              const catVendors = vendors.filter((v) => v.category === cat);
              return (
                <div key={cat} className="bg-ivory border border-border p-6">
                  <p className="eyebrow mb-3">{cat}</p>
                  <p className="font-display text-4xl">{catVendors.length}</p>
                  <p className="text-xs text-foreground/50 mt-1">vendors</p>
                  <div className="mt-4 space-y-1">
                    {catVendors.slice(0, 3).map((v) => (
                      <div key={v.id} className="flex items-center justify-between text-xs">
                        <span className="text-foreground/70">{v.name}</span>
                        <span className={`text-[8px] tracking-wider uppercase px-1.5 py-0.5 ${vendorClassColor[v.classification]}`}>{v.classification}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Material catalog overview */}
          <div className="bg-ivory border border-border p-8">
            <p className="eyebrow mb-6">Full material catalog</p>
            {['Woodwork', 'Hardware', 'Laminate', 'Glass'].map((cat) => (
              <div key={cat} className="mb-8 pb-8 border-b border-border last:mb-0 last:pb-0 last:border-0">
                <p className="font-display text-2xl mb-4">{cat}</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {vendors.filter((v) => v.category === cat).map((v) => (
                    <div key={v.id} className="border border-border p-4 hover:border-bronze/40 transition">
                      <div className="flex items-start justify-between mb-2">
                        <p className="font-medium">{v.name}</p>
                        <span className={`text-[8px] tracking-wider uppercase px-1.5 py-0.5 ${vendorClassColor[v.classification]}`}>{v.classification}</span>
                      </div>
                      <p className="text-xs text-foreground/55 mb-2">{v.priceRange}</p>
                      <div className="flex flex-wrap gap-1">
                        {v.finishTypes.slice(0, 2).map((f) => (
                          <span key={f} className="text-[8px] tracking-wider border border-border/60 px-1.5 py-0.5 text-foreground/40">{f}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── PACKAGES ─────────────────────────────── */}
      {tab === 'Packages' && (
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {packageConfigs.map((pkg) => (
              <div key={pkg.tier} className={`border p-8 ${pkg.tier === 'Ultra Premium' ? 'bg-ink text-ivory border-ink' : 'bg-ivory border-border'}`}>
                <p className={`text-[9px] tracking-[0.32em] uppercase mb-4 ${pkg.tier === 'Ultra Premium' ? 'text-champagne/60' : 'text-bronze'}`}>Package Tier</p>
                <h3 className={`font-display text-3xl mb-2 ${pkg.tier === 'Ultra Premium' ? 'text-champagne' : ''}`}>{pkg.tier}</h3>
                <p className={`font-display text-2xl mb-5 ${pkg.tier === 'Ultra Premium' ? 'text-ivory' : 'text-bronze'}`}>{pkg.startingPrice}</p>
                <div className="space-y-2 mb-6">
                  {[
                    { k: 'Timeline', v: pkg.estimatedTimeline },
                    { k: 'Consultation', v: pkg.consultationRate },
                    { k: 'Material Quality', v: pkg.materialQuality.split(',')[0] },
                    { k: 'Vendor Tier', v: pkg.vendorTier },
                  ].map((item) => (
                    <div key={item.k} className="flex justify-between text-xs">
                      <span className={pkg.tier === 'Ultra Premium' ? 'text-ivory/40' : 'text-foreground/40'}>{item.k}</span>
                      <span className={pkg.tier === 'Ultra Premium' ? 'text-ivory/80' : ''}>{item.v}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-2.5 text-[10px] tracking-[0.28em] uppercase border transition ${
                  pkg.tier === 'Ultra Premium'
                    ? 'border-champagne/30 text-champagne hover:bg-champagne hover:text-ink'
                    : 'border-border hover:border-bronze hover:text-bronze'
                }`}>
                  Configure
                </button>
              </div>
            ))}
          </div>

          {/* Vendor → Tier mapping */}
          <div className="bg-ivory border border-border p-8">
            <p className="eyebrow mb-6">Vendor tier mapping</p>
            <div className="grid md:grid-cols-3 gap-6">
              {['Economical', 'Premium', 'Ultra Premium'].map((tier) => {
                const tierVendors = vendors.filter((v) => v.tier.includes(tier));
                return (
                  <div key={tier} className="space-y-3">
                    <p className={`text-[9px] tracking-widest uppercase font-medium px-3 py-1.5 inline-block ${tierBadge[tier]}`}>{tier}</p>
                    {tierVendors.map((v) => (
                      <div key={v.id} className="flex items-center justify-between text-sm border-b border-border/50 pb-2">
                        <span>{v.name}</span>
                        <span className="text-[9px] tracking-wider uppercase text-foreground/40">{v.category}</span>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── ANALYTICS ─────────────────────────────── */}
      {tab === 'Analytics' && (
        <div className="space-y-8">
          {/* Vendor spend analytics */}
          <div className="bg-ivory border border-border p-8">
            <p className="eyebrow mb-6">Vendor spend analysis · YTD</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[10px] tracking-widest uppercase text-bronze border-b border-border">
                    <th className="text-left py-3">Vendor</th>
                    <th className="text-left">Category</th>
                    <th className="text-right">Orders</th>
                    <th className="text-right">Total Spend</th>
                    <th className="text-center">Rating</th>
                    <th className="text-right">Share</th>
                  </tr>
                </thead>
                <tbody>
                  {vendorAnalytics.map((v, i) => (
                    <tr key={v.name} className="border-b border-border/50">
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-foreground/30 font-mono w-4">{String(i + 1).padStart(2, '0')}</span>
                          <span className="font-medium">{v.name}</span>
                        </div>
                      </td>
                      <td className="text-foreground/60">{v.category}</td>
                      <td className="text-right">{v.orders}</td>
                      <td className="text-right font-display">{v.spend}</td>
                      <td className="text-center">
                        <span className="flex items-center justify-center gap-1">
                          <Star className="h-3 w-3 text-bronze fill-bronze" />
                          <span className="text-xs">{v.rating}</span>
                        </span>
                      </td>
                      <td className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <div className="w-16 h-1 bg-border">
                            <div className="h-full bg-bronze" style={{ width: `${(v.orders / 82) * 100}%` }} />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Revenue by tier */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-ivory border border-border p-8">
              <p className="eyebrow mb-6">Revenue by package tier</p>
              {packageDistribution.map((pkg) => (
                <div key={pkg.tier} className="mb-5">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">{pkg.tier}</span>
                    <div className="flex gap-4 text-right">
                      <span className="text-foreground/50">{pkg.count} projects</span>
                      <span className="font-display text-bronze">{pkg.revenue}</span>
                    </div>
                  </div>
                  <div className="h-3 bg-border">
                    <div className="h-full bg-bronze" style={{ width: `${pkg.percentage}%` }} />
                  </div>
                  <p className="text-[10px] text-foreground/40 mt-1">{pkg.percentage}% of total revenue</p>
                </div>
              ))}
            </div>

            <div className="bg-ink text-ivory p-8">
              <p className="eyebrow text-champagne mb-6">Business insights · AI summary</p>
              <div className="space-y-5">
                {[
                  { label: 'Avg. project value', value: '₹28.4L', trend: '+12% vs LY' },
                  { label: 'Conversion rate (consult → project)', value: '68%', trend: '+5 pts' },
                  { label: 'Avg. material spend / project', value: '₹8.2L', trend: '+18%' },
                  { label: 'Ultra Premium mix', value: '65%', trend: '+22 pts' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-ivory/10 last:border-0">
                    <div>
                      <p className="text-xs text-ivory/50">{item.label}</p>
                      <p className="font-display text-2xl text-champagne mt-0.5">{item.value}</p>
                    </div>
                    <span className="text-[10px] tracking-wider text-green-400">{item.trend}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── PROJECTS ─────────────────────────────── */}
      {tab === 'Projects' && (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-4 gap-px bg-border mb-6">
            {[
              { k: projects.length, v: 'Total active projects' },
              { k: projects.filter((p) => p.packageTier === 'Ultra Premium').length, v: 'Ultra Premium' },
              { k: projects.filter((p) => p.packageTier === 'Premium').length, v: 'Premium' },
              { k: '₹1.32 Cr', v: 'Active project value' },
            ].map((s) => (
              <div key={s.v} className="bg-ivory p-6">
                <p className="font-display text-4xl">{s.k}</p>
                <p className="text-xs text-foreground/60 mt-1">{s.v}</p>
              </div>
            ))}
          </div>
          <div className="bg-ivory border border-border p-8">
            <div className="flex items-center justify-between mb-6">
              <p className="eyebrow">All projects</p>
              <button className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-bronze">
                Export CSV <ArrowUpRight className="h-3 w-3" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[10px] tracking-widest uppercase text-bronze border-b border-border">
                    <th className="text-left py-3">Project</th>
                    <th className="text-left">Client</th>
                    <th className="text-left">Designer</th>
                    <th className="text-left">Tier</th>
                    <th className="text-left">Status</th>
                    <th className="text-right">Progress</th>
                    <th className="text-right">Budget</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((p) => (
                    <tr key={p.id} className="border-b border-border/50 hover:bg-pearl/50 transition">
                      <td className="py-4">
                        <p className="font-medium">{p.projectName.split(' · ')[0]}</p>
                        <p className="text-xs font-mono text-foreground/40">{p.id}</p>
                      </td>
                      <td>{p.clientName}</td>
                      <td className="text-foreground/60">{p.designer}</td>
                      <td><span className={`text-[9px] tracking-widest uppercase px-2 py-0.5 ${tierBadge[p.packageTier]}`}>{p.packageTier}</span></td>
                      <td><span className="text-[10px] tracking-widest uppercase text-bronze">{p.status}</span></td>
                      <td className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <div className="w-20 h-1 bg-border">
                            <div className="h-full bg-bronze" style={{ width: `${p.progress}%` }} />
                          </div>
                          <span className="text-xs w-8">{p.progress}%</span>
                        </div>
                      </td>
                      <td className="text-right font-display">{p.budget}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ── QUOTATIONS ─────────────────────────────── */}
      {tab === 'Quotations' && (
        <div className="bg-ivory border border-border p-8">
          <div className="flex items-center justify-between mb-6">
            <p className="eyebrow">All quotations</p>
            <button className="flex items-center gap-2 px-5 py-3 bg-ink text-ivory text-[10px] tracking-widest uppercase hover:bg-bronze transition">
              <FileText className="h-3.5 w-3.5" /> New Quotation
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[10px] tracking-widest uppercase text-bronze border-b border-border">
                  <th className="text-left py-3">ID</th>
                  <th className="text-left">Client</th>
                  <th className="text-left">Tier</th>
                  <th className="text-left">Date</th>
                  <th className="text-right">Amount</th>
                  <th className="text-center">Status</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {quotations.map((q) => (
                  <tr key={q.id} className="border-b border-border/50 hover:bg-pearl/50 transition">
                    <td className="py-4 font-mono text-xs text-foreground/40">{q.id}</td>
                    <td className="font-medium">{q.clientName}</td>
                    <td><span className={`text-[9px] tracking-widest uppercase px-2 py-0.5 ${tierBadge[q.packageTier]}`}>{q.packageTier}</span></td>
                    <td className="text-foreground/60">{q.date}</td>
                    <td className="text-right font-display text-lg">{q.amount}</td>
                    <td className="text-center"><span className={`text-[9px] tracking-widest uppercase px-2 py-0.5 ${quotationStatusColor[q.status]}`}>{q.status}</span></td>
                    <td className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="text-[10px] tracking-widest uppercase text-bronze hover:text-ink transition">View</button>
                        {q.status === 'Draft' && <button className="text-[10px] tracking-widest uppercase border border-border px-3 py-1 hover:border-bronze transition">Send</button>}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── AI LOGS ─────────────────────────────── */}
      {tab === 'AI Logs' && (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-4 gap-px bg-border mb-6">
            {[
              { k: '3,284', v: 'Total sessions · 30D' },
              { k: '1.2M', v: 'Tokens used · 30D' },
              { k: '68%', v: 'Conversion rate' },
              { k: '4.8★', v: 'Avg. satisfaction' },
            ].map((s) => (
              <div key={s.v} className="bg-ivory p-6">
                <p className="font-display text-3xl">{s.k}</p>
                <p className="text-xs text-foreground/60 mt-1">{s.v}</p>
              </div>
            ))}
          </div>

          <div className="bg-ivory border border-border p-8">
            <p className="eyebrow mb-6">Recent AI sessions</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[10px] tracking-widest uppercase text-bronze border-b border-border">
                    <th className="text-left py-3">Session ID</th>
                    <th className="text-left">Query</th>
                    <th className="text-left">User</th>
                    <th className="text-right">Tokens</th>
                    <th className="text-center">Recs</th>
                    <th className="text-left">Outcome</th>
                    <th className="text-left">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {aiLogs.map((log) => (
                    <tr key={log.id} className="border-b border-border/50 hover:bg-pearl/50 transition">
                      <td className="py-4 font-mono text-xs text-foreground/40">{log.id}</td>
                      <td className="max-w-[220px]">
                        <p className="text-sm truncate">{log.session}</p>
                      </td>
                      <td className="text-foreground/70">{log.user}</td>
                      <td className="text-right text-foreground/60">{log.tokens}</td>
                      <td className="text-center">
                        <span className="flex items-center justify-center gap-1">
                          <Bot className="h-3 w-3 text-bronze" />
                          <span>{log.recommendations}</span>
                        </span>
                      </td>
                      <td><span className="text-[10px] tracking-widest uppercase text-bronze">{log.outcome}</span></td>
                      <td className="text-foreground/40 text-xs">{log.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-ink text-ivory p-8">
            <p className="eyebrow text-champagne mb-5">AI recommendation accuracy</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { label: 'Vendor suggestions accepted', rate: 74 },
                { label: 'Package upgrades converted', rate: 58 },
                { label: 'Material combos approved', rate: 82 },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-ivory/50 mb-2">{item.label}</p>
                  <p className="font-display text-3xl text-champagne">{item.rate}%</p>
                  <div className="mt-2 h-1 bg-ivory/10">
                    <div className="h-full bg-champagne" style={{ width: `${item.rate}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── INVENTORY ─────────────────────────────── */}
      {tab === 'Inventory' && (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-ivory border border-border p-8">
            <p className="eyebrow mb-6">Product inventory</p>
            {[
              { cat: 'Furniture', items: 284, inStock: 86, lowStock: 12, outOfStock: 3 },
              { cat: 'Botanical', items: 142, inStock: 64, lowStock: 24, outOfStock: 8 },
              { cat: 'Sculpture', items: 68, inStock: 18, lowStock: 8, outOfStock: 2 },
              { cat: 'Crockery', items: 196, inStock: 32, lowStock: 18, outOfStock: 5 },
              { cat: 'Lighting', items: 112, inStock: 72, lowStock: 10, outOfStock: 1 },
            ].map((item) => (
              <div key={item.cat} className="mb-5 pb-5 border-b border-border last:mb-0 last:pb-0 last:border-0">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-display text-lg">{item.cat}</p>
                  <span className="text-xs text-foreground/40">{item.items} total SKUs</span>
                </div>
                <div className="flex gap-2 text-[10px] tracking-widest uppercase">
                  <span className="text-green-700 bg-green-50 px-2 py-0.5">In stock: {item.inStock}%</span>
                  <span className="text-amber-600 bg-amber-50 px-2 py-0.5">Low: {item.lowStock}</span>
                  <span className="text-red-600 bg-red-50 px-2 py-0.5">Out: {item.outOfStock}</span>
                </div>
                <div className="mt-2 h-1.5 bg-border flex">
                  <div className="h-full bg-green-500" style={{ width: `${item.inStock}%` }} />
                  <div className="h-full bg-amber-400" style={{ width: `${(item.lowStock / item.items) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-ivory border border-border p-8">
              <p className="eyebrow mb-5">Material inventory alerts</p>
              {[
                { item: 'Italian bouclé · ivory', status: 'Low', action: 'Reorder needed' },
                { item: 'Walnut plank · 4cm', status: 'Critical', action: 'Order immediately' },
                { item: 'Travertine slab · beige', status: 'OK', action: 'Sufficient stock' },
                { item: 'Brass rod · brushed', status: 'OK', action: 'Sufficient stock' },
                { item: 'Saint-Gobain Lacobel', status: 'Low', action: 'Reorder in 7 days' },
              ].map((item) => (
                <div key={item.item} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div>
                    <p className="text-sm font-medium">{item.item}</p>
                    <p className="text-xs text-foreground/40">{item.action}</p>
                  </div>
                  <span className={`text-[9px] tracking-widest uppercase px-2 py-0.5 ${
                    item.status === 'Critical' ? 'bg-red-50 text-red-600' :
                    item.status === 'Low' ? 'bg-amber-50 text-amber-600' :
                    'bg-green-50 text-green-700'
                  }`}>{item.status}</span>
                </div>
              ))}
            </div>

            <div className="bg-pearl border border-border p-8">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="h-4 w-4 text-bronze" />
                <p className="eyebrow">System status</p>
              </div>
              <div className="space-y-3 text-sm">
                {[
                  { k: 'API · Uptime', v: '99.98%', ok: true },
                  { k: 'AI Concierge', v: 'Operational', ok: true },
                  { k: 'Payment Gateway', v: 'Operational', ok: true },
                  { k: 'Vendor Sync', v: 'Last: 2 hrs ago', ok: true },
                ].map((s) => (
                  <div key={s.k} className="flex justify-between items-center">
                    <span className="text-foreground/60">{s.k}</span>
                    <span className={`text-[10px] tracking-widest ${s.ok ? 'text-green-600' : 'text-red-500'}`}>{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── SETTINGS ─────────────────────────────── */}
      {tab === 'Settings' && (
        <div className="max-w-2xl space-y-8">
          <div className="bg-ivory border border-border p-8">
            <div className="flex items-center gap-2 mb-6">
              <Settings className="h-4 w-4 text-bronze" />
              <p className="eyebrow">Platform configuration</p>
            </div>
            {[
              { label: 'Platform Name', value: 'WEDECOR4U' },
              { label: 'Default Package Tier', value: 'Premium' },
              { label: 'AI Concierge Name', value: 'Meena, Design Concierge' },
              { label: 'Consultation Lead Time', value: '24 hours' },
              { label: 'Base Currency', value: 'INR (₹)' },
            ].map((setting) => (
              <div key={setting.label} className="py-4 border-b border-border last:border-0 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{setting.label}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-foreground/60">{setting.value}</span>
                  <button className="text-[10px] tracking-widest uppercase text-bronze hover:text-ink transition">Edit</button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-ink text-ivory p-8">
            <div className="flex items-center gap-2 mb-5">
              <Bot className="h-4 w-4 text-champagne" />
              <p className="eyebrow text-champagne">AI configuration</p>
            </div>
            {[
              { label: 'AI Model', value: 'Gemini 1.5 Pro' },
              { label: 'Max tokens / session', value: '8,000' },
              { label: 'Vendor recommendation depth', value: '5 results' },
              { label: 'Package suggestions', value: 'Enabled' },
              { label: 'Cost estimation', value: 'Enabled' },
            ].map((setting) => (
              <div key={setting.label} className="py-3.5 border-b border-ivory/10 last:border-0 flex items-center justify-between">
                <p className="text-sm text-ivory/70">{setting.label}</p>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-champagne">{setting.value}</span>
                  <button className="text-[10px] tracking-widest uppercase text-ivory/30 hover:text-champagne transition">Edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
