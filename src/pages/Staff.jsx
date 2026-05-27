import { useState } from 'react';
import {
  CalendarDays, ClipboardList, MessageSquare, Package2, CheckCircle2,
  Clock, AlertCircle, Building2, Layers, FileText, Users, ChevronRight,
  Star, ArrowUpRight, MoreHorizontal,
} from 'lucide-react';
import { projects, quotations, kanbanStages } from '../lib/projects';
import { vendors } from '../lib/vendors';

const staffTabs = ['Overview', 'Kanban', 'Projects', 'Vendor Assignment', 'Material Approvals', 'Quotations', 'Schedule'];

const assigned = [
  { client: 'Aanya Mehta', project: 'Bandra Penthouse · Ultra Premium', phase: 'Concept', due: 'Today · 16:00', priority: 'high', progress: 35 },
  { client: 'Karim Al-Sayed', project: 'Dubai Suite · Ultra Premium', phase: 'Procurement', due: 'Tomorrow', priority: 'medium', progress: 68 },
  { client: 'Studio Verma', project: 'Atelier Refresh · Premium', phase: 'Install', due: '12 Dec', priority: 'low', progress: 82 },
  { client: 'M. Singh', project: 'Goa Villa · Hospitality', phase: 'Onboarding', due: '15 Dec', priority: 'medium', progress: 12 },
];

const kanbanCards = {
  onboarding: [{ client: 'M. Singh', project: 'Goa Villa', tier: 'Premium', dueIn: '15 Dec' }],
  concept: [
    { client: 'Aanya Mehta', project: 'Bandra Penthouse', tier: 'Ultra Premium', dueIn: 'Today' },
    { client: 'R. Kapoor', project: 'Juhu Residence', tier: 'Economical', dueIn: '18 Dec' },
  ],
  procurement: [{ client: 'Karim Al-Sayed', project: 'Dubai Suite', tier: 'Ultra Premium', dueIn: 'Tomorrow' }],
  execution: [{ client: 'P. Nair', project: 'Kochi Villa', tier: 'Premium', dueIn: '20 Dec' }],
  complete: [
    { client: 'Studio Verma', project: 'Atelier Refresh', tier: 'Premium', dueIn: 'Done' },
  ],
};

const pendingApprovals = [
  { vendor: 'Royale Touche', item: 'Marble Veined Panel · 180 sqft', project: 'Bandra Penthouse', amount: '₹57,600', status: 'Pending' },
  { vendor: 'Blum', item: 'MOVENTO 760H · 24 pairs', project: 'Bandra Penthouse', amount: '₹1,96,800', status: 'Approved' },
  { vendor: 'Saint-Gobain', item: 'Stadip Silence · 450 sqft', project: 'Dubai Suite', amount: '₹6,30,000', status: 'Ordered' },
  { vendor: 'Merino', item: 'Exteria Anti-FP · 320 sqft', project: 'Atelier Refresh', amount: '₹44,800', status: 'Delivered' },
];

const priorityColor = {
  high: 'bg-bronze text-ivory',
  medium: 'bg-champagne/40 text-bronze',
  low: 'bg-pearl text-foreground/60',
};

const tierBadge = {
  'Ultra Premium': 'bg-ink text-champagne',
  'Premium': 'bg-champagne/20 text-bronze',
  'Economical': 'bg-taupe/10 text-taupe',
};

const approvalColor = {
  Pending: 'text-amber-600 bg-amber-50',
  Approved: 'text-bronze bg-champagne/20',
  Ordered: 'text-blue-600 bg-blue-50',
  Delivered: 'text-green-700 bg-green-50',
};

export default function Staff() {
  const [tab, setTab] = useState('Overview');

  return (
    <section className="container-luxe py-12 min-h-[80vh]">
      {/* Header */}
      <header className="flex justify-between items-end flex-wrap gap-6 mb-8">
        <div>
          <p className="eyebrow">Atelier Console</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">
            Today · <em className="italic text-bronze">Meena Iyer</em>
          </h1>
        </div>
        <div className="flex gap-3 text-[11px] tracking-[0.22em] uppercase">
          <button className="px-5 py-3 bg-ink text-ivory hover:bg-bronze transition">+ Log activity</button>
          <button className="px-5 py-3 border border-border hover:border-bronze transition">Open calendar</button>
        </div>
      </header>

      {/* Tab navigation */}
      <div className="flex gap-0 border-b border-border mb-8 overflow-x-auto">
        {staffTabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-3 text-[11px] tracking-[0.24em] uppercase border-b-2 whitespace-nowrap transition ${
              tab === t ? 'border-bronze text-bronze' : 'border-transparent text-foreground/50 hover:text-foreground'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* ── OVERVIEW ─────────────────────────────── */}
      {tab === 'Overview' && (
        <>
          <div className="grid sm:grid-cols-4 gap-px bg-border mb-8">
            {[
              { icon: ClipboardList, k: '4', v: 'Assigned engagements' },
              { icon: CalendarDays, k: '7', v: 'Meetings this week' },
              { icon: MessageSquare, k: '12', v: 'Unread client messages' },
              { icon: Package2, k: '9', v: 'Procurement pending' },
            ].map((s) => (
              <div key={s.v} className="bg-ivory p-6">
                <s.icon className="h-4 w-4 text-bronze" />
                <p className="mt-4 font-display text-3xl">{s.k}</p>
                <p className="text-xs text-foreground/60 mt-1">{s.v}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Assigned engagements */}
            <div className="md:col-span-2 bg-ivory border border-border p-8">
              <p className="eyebrow mb-6">Assigned engagements</p>
              <div className="divide-y divide-border">
                {assigned.map((a) => (
                  <div key={a.client} className="py-5">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <p className="font-display text-lg">{a.client}</p>
                        <p className="text-xs text-foreground/60 mt-0.5">{a.project}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-[9px] tracking-widest uppercase text-bronze">{a.phase}</span>
                        <span className={`text-[9px] tracking-widest uppercase px-2 py-0.5 ${priorityColor[a.priority]}`}>{a.priority}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="h-1 bg-border">
                          <div className="h-full bg-bronze" style={{ width: `${a.progress}%` }} />
                        </div>
                      </div>
                      <span className="text-xs text-foreground/50 flex items-center gap-1 flex-shrink-0">
                        <Clock className="h-3 w-3" />{a.due}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's tasks + alerts */}
            <div className="space-y-6">
              <div className="bg-ivory border border-border p-8">
                <p className="eyebrow mb-5">Today's tasks</p>
                <ul className="space-y-4 text-sm">
                  {[
                    { t: 'Submit Pali Hill 3D walkthrough', done: true },
                    { t: 'Approve Heritage Suite linen procurement', done: true },
                    { t: 'Walnut sample review with client', done: false },
                    { t: 'Confirm install crew for Goa Villa', done: false },
                    { t: 'Send proposal to Studio Verma', done: false },
                  ].map((task) => (
                    <li key={task.t} className="flex items-start gap-3">
                      {task.done
                        ? <CheckCircle2 className="h-4 w-4 text-bronze mt-0.5 flex-shrink-0" />
                        : <AlertCircle className="h-4 w-4 text-foreground/30 mt-0.5 flex-shrink-0" />}
                      <span className={task.done ? 'line-through text-foreground/40' : ''}>{task.t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-pearl border border-border p-6">
                <p className="eyebrow mb-4">Inventory alerts</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between"><span>Italian bouclé · ivory</span><span className="text-bronze font-medium">Low</span></li>
                  <li className="flex justify-between"><span>Walnut plank · 4cm</span><span className="text-bronze font-medium">Order</span></li>
                  <li className="flex justify-between"><span>Brass rod · brushed</span><span className="text-foreground/50">OK</span></li>
                  <li className="flex justify-between"><span>Travertine slab</span><span className="text-foreground/50">OK</span></li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── KANBAN ─────────────────────────────── */}
      {tab === 'Kanban' && (
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-[900px]">
            {kanbanStages.map((stage) => (
              <div key={stage.id} className="flex-1 min-w-[180px]">
                {/* Column header */}
                <div className={`flex items-center justify-between px-4 py-3 mb-3 text-[10px] tracking-widest uppercase font-medium ${stage.color}`}>
                  <span>{stage.label}</span>
                  <span className="bg-white/30 rounded-full h-5 w-5 flex items-center justify-center text-[9px]">
                    {(kanbanCards[stage.id] || []).length}
                  </span>
                </div>

                {/* Cards */}
                <div className="space-y-3">
                  {(kanbanCards[stage.id] || []).map((card, i) => (
                    <div key={i} className="bg-ivory border border-border p-4 hover:border-bronze/40 hover:shadow-sm transition-all cursor-pointer group">
                      <div className="flex items-start justify-between mb-2">
                        <span className={`text-[9px] tracking-widest uppercase px-1.5 py-0.5 ${tierBadge[card.tier]}`}>{card.tier}</span>
                        <MoreHorizontal className="h-3.5 w-3.5 text-foreground/30 opacity-0 group-hover:opacity-100 transition" />
                      </div>
                      <p className="font-display text-base leading-tight">{card.client}</p>
                      <p className="text-xs text-foreground/55 mt-1">{card.project}</p>
                      <div className="mt-3 flex items-center gap-1.5 text-[10px] text-foreground/40">
                        <Clock className="h-3 w-3" />{card.dueIn}
                      </div>
                    </div>
                  ))}

                  {/* Add card placeholder */}
                  <button className="w-full border border-dashed border-border/60 p-3 text-[10px] tracking-widest uppercase text-foreground/30 hover:border-bronze/30 hover:text-bronze/50 transition">
                    + Add project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── PROJECTS ─────────────────────────────── */}
      {tab === 'Projects' && (
        <div className="bg-ivory border border-border p-8">
          <p className="eyebrow mb-6">All assigned projects</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[10px] tracking-widest uppercase text-bronze border-b border-border">
                  <th className="text-left py-3">Project</th>
                  <th className="text-left">Client</th>
                  <th className="text-left">Tier</th>
                  <th className="text-left">Phase</th>
                  <th className="text-left">Progress</th>
                  <th className="text-left">Budget</th>
                  <th className="text-left">Due</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr key={p.id} className="border-b border-border/50 hover:bg-pearl/50 transition">
                    <td className="py-4">
                      <p className="font-medium">{p.projectName.split(' · ')[0]}</p>
                      <p className="text-xs text-foreground/40 font-mono">{p.id}</p>
                    </td>
                    <td>{p.clientName}</td>
                    <td><span className={`text-[9px] tracking-widest uppercase px-2 py-0.5 ${tierBadge[p.packageTier]}`}>{p.packageTier}</span></td>
                    <td><span className="text-[10px] tracking-widest uppercase text-bronze">{p.status}</span></td>
                    <td>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-1 bg-border">
                          <div className="h-full bg-bronze" style={{ width: `${p.progress}%` }} />
                        </div>
                        <span className="text-xs text-foreground/50">{p.progress}%</span>
                      </div>
                    </td>
                    <td className="font-display">{p.budget}</td>
                    <td className="text-foreground/60">{p.estimatedEnd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── VENDOR ASSIGNMENT ─────────────────────────────── */}
      {tab === 'Vendor Assignment' && (
        <div className="space-y-6">
          <div className="bg-ivory border border-border p-8">
            <p className="eyebrow mb-6">Vendor assignment by project</p>
            {projects.slice(0, 2).map((project) => (
              <div key={project.id} className="mb-8 pb-8 border-b border-border last:mb-0 last:pb-0 last:border-0">
                <div className="flex items-center gap-3 mb-5">
                  <Building2 className="h-4 w-4 text-bronze" />
                  <div>
                    <p className="font-display text-xl">{project.projectName}</p>
                    <p className="text-xs text-foreground/50">{project.clientName} · {project.packageTier}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {project.materialSelections.map((m, i) => (
                    <div key={i} className="border border-border p-4 hover:border-bronze/40 transition">
                      <p className="text-[9px] tracking-widest uppercase text-bronze mb-1">{m.category}</p>
                      <p className="font-display text-lg">{m.vendor}</p>
                      <p className="text-xs text-foreground/60 mt-1">{m.product}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs font-medium">{m.totalPrice}</span>
                        <span className={`text-[9px] tracking-widest uppercase px-2 py-0.5 ${approvalColor[m.status]}`}>{m.status}</span>
                      </div>
                    </div>
                  ))}
                  <button className="border border-dashed border-border/60 p-4 text-[10px] tracking-widest uppercase text-foreground/30 hover:border-bronze/30 hover:text-bronze/50 transition flex items-center justify-center gap-2">
                    <Layers className="h-3.5 w-3.5" /> Add vendor
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Available vendors quick add */}
          <div className="bg-pearl border border-border p-8">
            <p className="eyebrow mb-5">Available vendors</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {vendors.slice(0, 8).map((v) => (
                <div key={v.id} className="bg-ivory border border-border p-4 group hover:border-bronze/40 transition cursor-pointer">
                  <div className="flex items-start justify-between mb-1">
                    <p className="font-display text-base">{v.name}</p>
                    <div className="flex items-center gap-1">
                      <Star className="h-2.5 w-2.5 text-bronze fill-bronze" />
                      <span className="text-[10px]">{v.rating}</span>
                    </div>
                  </div>
                  <p className="text-[9px] tracking-widest uppercase text-bronze">{v.category}</p>
                  <p className="text-xs text-foreground/50 mt-1">{v.priceRange}</p>
                  <button className="mt-3 w-full border border-border py-1.5 text-[9px] tracking-widest uppercase hover:bg-ink hover:text-ivory hover:border-ink transition flex items-center justify-center gap-1">
                    Assign <ArrowUpRight className="h-2.5 w-2.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── MATERIAL APPROVALS ─────────────────────────────── */}
      {tab === 'Material Approvals' && (
        <div className="bg-ivory border border-border p-8">
          <p className="eyebrow mb-6">Pending material approvals</p>
          <div className="space-y-0">
            {pendingApprovals.map((item, i) => (
              <div key={i} className="py-5 border-b border-border last:border-0 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{item.vendor}</span>
                    <span className={`text-[9px] tracking-widest uppercase px-2 py-0.5 ${approvalColor[item.status]}`}>{item.status}</span>
                  </div>
                  <p className="text-sm text-foreground/70">{item.item}</p>
                  <p className="text-xs text-foreground/40 mt-0.5">Project: {item.project}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-display text-xl">{item.amount}</p>
                  {item.status === 'Pending' && (
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-ink text-ivory text-[10px] tracking-widest uppercase hover:bg-bronze transition">Approve</button>
                      <button className="px-4 py-2 border border-border text-[10px] tracking-widest uppercase hover:border-foreground transition">Reject</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── QUOTATIONS ─────────────────────────────── */}
      {tab === 'Quotations' && (
        <div className="bg-ivory border border-border p-8">
          <div className="flex items-center justify-between mb-6">
            <p className="eyebrow">Quotation management</p>
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
                  <th className="text-left">Items</th>
                  <th className="text-right">Amount</th>
                  <th className="text-right">Status</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {quotations.map((q) => (
                  <tr key={q.id} className="border-b border-border/50 hover:bg-pearl/50 transition">
                    <td className="py-4 font-mono text-xs text-foreground/50">{q.id}</td>
                    <td className="font-medium">{q.clientName}</td>
                    <td><span className={`text-[9px] tracking-widest uppercase px-2 py-0.5 ${tierBadge[q.packageTier]}`}>{q.packageTier}</span></td>
                    <td className="text-foreground/60">{q.date}</td>
                    <td className="text-foreground/60">{q.items} items</td>
                    <td className="text-right font-display text-lg">{q.amount}</td>
                    <td className="text-right">
                      <span className={`text-[9px] tracking-widest uppercase px-2 py-0.5 ${approvalColor[q.status] || 'text-foreground/50 bg-pearl'}`}>{q.status}</span>
                    </td>
                    <td className="text-right">
                      <button className="text-[10px] tracking-widest uppercase text-bronze hover:text-ink transition flex items-center gap-1 ml-auto">
                        View <ChevronRight className="h-3 w-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── SCHEDULE ─────────────────────────────── */}
      {tab === 'Schedule' && (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-ivory border border-border p-8">
            <p className="eyebrow mb-6">This week's schedule</p>
            {[
              { day: 'Mon 02 Dec', events: [{ time: '10:00', client: 'Aanya Mehta', type: 'Concept presentation', loc: 'Bandra' }, { time: '15:00', client: 'Studio Verma', type: 'Install walkthrough', loc: 'Colaba' }] },
              { day: 'Tue 03 Dec', events: [{ time: '11:30', client: 'Karim Al-Sayed', type: 'Procurement review (Virtual)', loc: 'Dubai (Online)' }] },
              { day: 'Wed 04 Dec', events: [{ time: '09:00', client: 'Internal', type: 'Material approval committee', loc: 'Studio' }] },
              { day: 'Thu 05 Dec', events: [{ time: '14:00', client: 'M. Singh', type: 'Onboarding brief', loc: 'Bandra' }] },
            ].map((day) => (
              <div key={day.day} className="mb-6 pb-6 border-b border-border last:mb-0 last:pb-0 last:border-0">
                <p className="text-[10px] tracking-widest uppercase text-foreground/40 mb-3">{day.day}</p>
                <div className="space-y-3">
                  {day.events.map((ev, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="text-xs font-mono text-bronze flex-shrink-0 w-10 pt-0.5">{ev.time}</span>
                      <div className="flex-1 border-l border-border pl-4">
                        <p className="font-medium text-sm">{ev.type}</p>
                        <p className="text-xs text-foreground/50 mt-0.5">{ev.client} · {ev.loc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-ink text-ivory p-8">
              <p className="eyebrow text-champagne mb-4">Hospitality workflow</p>
              <div className="space-y-3">
                {['Audit', 'Concept', 'Procurement', 'Install', 'Launch'].map((s, i) => (
                  <div key={s} className="flex items-center gap-3">
                    <div className={`h-2 w-2 rounded-full flex-shrink-0 ${i < 3 ? 'bg-champagne' : 'bg-ivory/20'}`} />
                    <div className="flex-1">
                      <p className="text-xs tracking-widest uppercase">{s}</p>
                    </div>
                    <span className="text-[10px] text-ivory/40">{i < 3 ? 'Done' : 'Upcoming'}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-ivory/60">Goa Villa · Day 18 of 28</p>
            </div>

            <div className="bg-pearl border border-border p-6">
              <p className="eyebrow mb-4">Staff load this week</p>
              <div className="flex items-end gap-2 h-24 mb-3">
                {[60, 80, 45, 90, 55].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end">
                    <div className="bg-bronze/70 rounded-sm" style={{ height: `${h}%` }} />
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[9px] text-foreground/40">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d) => <span key={d}>{d}</span>)}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Users className="h-3.5 w-3.5 text-bronze" />
                <p className="text-xs text-foreground/60">6 designers · avg 66% capacity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
