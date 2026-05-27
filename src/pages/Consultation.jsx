import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Check, ArrowUpRight, Sparkles, ChevronRight, Clock, Star } from "lucide-react";
import { packageConfigs, getVendorsByTier } from "@/lib/vendors";

const budgets = ["Under ₹5L", "₹5L – ₹15L", "₹15L – ₹50L", "₹50L+"];
const properties = ["Apartment", "Villa / Bungalow", "Penthouse", "Hospitality", "Commercial"];
const timelines = ["4 weeks", "8 weeks", "3 months", "Open"];
const tiers = ["Economical", "Premium", "Ultra Premium"];

const tierLabel = {
  Economical: "₹1.2L+ / room",
  Premium: "₹6.5L+ / home",
  "Ultra Premium": "₹15L+ / bespoke",
};

const tierDesc = {
  Economical: "Value-driven design with durable Indian brands.",
  Premium: "Elevated aesthetics with German & premium finishes.",
  "Ultra Premium": "Total architectural mastery — no compromise.",
};

const tierColor = {
  Economical: "border-taupe/50 bg-pearl",
  Premium: "border-champagne/70 bg-champagne/10",
  "Ultra Premium": "border-bronze bg-ink text-ivory",
};

export default function Consultation() {
  const [selectedTier, setSelectedTier] = useState("Premium");
  const [step, setStep] = useState(1);
  const pkgConfig = packageConfigs.find((p) => p.tier === selectedTier);
  const tierVendors = getVendorsByTier(selectedTier);

  return (
    <>
      <section className="container-luxe pt-20 pb-32 grid md:grid-cols-12 gap-12">
        {/* LEFT COLUMN */}
        <div className="md:col-span-7">
          <p className="eyebrow">Begin</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.02]">
            A private <em className="italic text-bronze">conversation</em>
            <br />with the atelier.
          </h1>
          <p className="mt-8 max-w-lg text-foreground/75 leading-relaxed">
            Share a few notes and a senior designer will reach out within 24 hours to schedule
            your studio visit or virtual consultation.
          </p>

          {/* Trust signals */}
          <ul className="mt-8 space-y-3 text-sm">
            {["Complimentary first consultation", "Direct access to principal designer", "NDAs honoured for confidential commissions"].map((x) => (
              <li key={x} className="flex items-center gap-3">
                <Check className="h-3.5 w-3.5 text-bronze flex-shrink-0" />{x}
              </li>
            ))}
          </ul>

          {/* Package tier selector */}
          <div className="mt-14">
            <p className="eyebrow mb-4">Select Your Package Tier</p>
            <div className="space-y-3">
              {tiers.map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`w-full text-left border-2 transition-all duration-300 p-5 group ${
                    selectedTier === tier
                      ? tierColor[tier] + " " + (tier === "Ultra Premium" ? "" : "border-opacity-100")
                      : "border-border hover:border-bronze/30 bg-pearl"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {selectedTier === tier && (
                        <div className={`h-5 w-5 rounded-full flex items-center justify-center ${tier === "Ultra Premium" ? "bg-champagne" : "bg-bronze"}`}>
                          <Check className={`h-3 w-3 ${tier === "Ultra Premium" ? "text-ink" : "text-ivory"}`} />
                        </div>
                      )}
                      {selectedTier !== tier && <div className="h-5 w-5 rounded-full border-2 border-border" />}
                      <div>
                        <div className="flex items-center gap-2">
                          {tier === "Ultra Premium" && <Sparkles className="h-3.5 w-3.5 text-champagne" />}
                          <span className={`font-display text-xl ${selectedTier === tier && tier === "Ultra Premium" ? "text-champagne" : ""}`}>{tier}</span>
                        </div>
                        <p className={`text-xs mt-0.5 ${selectedTier === tier && tier === "Ultra Premium" ? "text-ivory/60" : "text-foreground/55"}`}>{tierDesc[tier]}</p>
                      </div>
                    </div>
                    <span className={`text-sm font-display ${selectedTier === tier && tier === "Ultra Premium" ? "text-champagne" : "text-bronze"}`}>
                      {tierLabel[tier]}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic package preview */}
          {selectedTier && pkgConfig && (
            <div className="mt-8 border border-border p-6 bg-pearl">
              <p className="eyebrow mb-4">What's included · {selectedTier}</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                {[
                  { label: "Timeline", value: pkgConfig.estimatedTimeline, icon: Clock },
                  { label: "Consultation", value: pkgConfig.consultationRate, icon: Star },
                ].map((item) => (
                  <div key={item.label} className="bg-ivory p-3">
                    <p className="text-[9px] tracking-widest uppercase text-foreground/40 mb-1">{item.label}</p>
                    <p className="font-display text-lg">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <p className="text-[9px] tracking-widest uppercase text-bronze mb-2">Recommended Vendors</p>
                <div className="flex flex-wrap gap-2">
                  {tierVendors.slice(0, 5).map((v) => (
                    <span key={v.id} className="text-[10px] tracking-wider uppercase bg-beige/70 border border-border px-2.5 py-1 text-foreground/60">
                      {v.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[9px] tracking-widest uppercase text-bronze mb-2">Design Styles</p>
                <div className="flex flex-wrap gap-2">
                  {pkgConfig.designStyle.map((s) => (
                    <span key={s} className="text-[10px] tracking-wider italic text-foreground/55">{s}</span>
                  ))}
                </div>
              </div>
              <Link to="/materials" className="mt-5 inline-flex items-center gap-1.5 text-[10px] tracking-[0.28em] uppercase text-bronze underline-hover">
                View Full Material Library <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN — FORM */}
        <form
          onSubmit={(e) => { e.preventDefault(); toast.success("Thank you. Our atelier will reach out shortly."); }}
          className="md:col-span-5 bg-pearl border border-border p-8 md:p-10 space-y-6 self-start"
        >
          <div>
            <p className="eyebrow mb-1">Step {step} of 3</p>
            <div className="flex gap-1">
              {[1, 2, 3].map((s) => (
                <div key={s} className={`h-0.5 flex-1 transition-all duration-500 ${s <= step ? "bg-bronze" : "bg-border"}`} />
              ))}
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-6">
              <h3 className="font-display text-2xl">Personal Details</h3>
              <div>
                <label className="eyebrow">Full Name</label>
                <input required className="mt-2 w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-bronze" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="eyebrow">Email</label>
                  <input required type="email" className="mt-2 w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-bronze" />
                </div>
                <div>
                  <label className="eyebrow">Phone</label>
                  <input required className="mt-2 w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-bronze" />
                </div>
              </div>
              <div>
                <label className="eyebrow">City / Location</label>
                <input className="mt-2 w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-bronze" placeholder="e.g. Mumbai, Dubai…" />
              </div>
              <button type="button" onClick={() => setStep(2)} className="w-full bg-ink text-ivory py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-bronze transition inline-flex items-center justify-center gap-3">
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="font-display text-2xl">Project Details</h3>
              <div>
                <label className="eyebrow">Selected Package</label>
                <div className={`mt-2 p-3 border ${selectedTier === "Ultra Premium" ? "border-bronze bg-ink text-ivory" : "border-bronze/50 bg-beige/30"}`}>
                  <p className="font-display text-lg">{selectedTier}</p>
                  <p className="text-xs text-foreground/60 mt-0.5">{tierLabel[selectedTier]}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="eyebrow">Budget</label>
                  <select className="mt-2 w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none">
                    {budgets.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label className="eyebrow">Property Type</label>
                  <select className="mt-2 w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none">
                    {properties.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="eyebrow">Area (sq ft)</label>
                <input placeholder="Approximate area…" className="mt-2 w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-bronze" />
              </div>
              <div>
                <label className="eyebrow">Timeline</label>
                <select className="mt-2 w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none">
                  {timelines.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="flex-1 border border-border py-4 text-[11px] tracking-[0.3em] uppercase hover:border-foreground transition">
                  Back
                </button>
                <button type="button" onClick={() => setStep(3)} className="flex-1 bg-ink text-ivory py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-bronze transition inline-flex items-center justify-center gap-3">
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="font-display text-2xl">Your Vision</h3>
              <div>
                <label className="eyebrow">Design Style Preferences</label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {pkgConfig && pkgConfig.designStyle.map((s) => (
                    <label key={s} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-bronze" />
                      <span className="text-xs tracking-wider">{s}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="eyebrow">Material Preferences</label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Natural Wood", "Marble / Stone", "Glass", "Metal Accents", "Fabric / Upholstery", "Concrete"].map((m) => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer border border-border px-3 py-1.5 text-xs tracking-wider hover:border-bronze/50 transition">
                      <input type="checkbox" className="accent-bronze" />
                      {m}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="eyebrow">Project Brief</label>
                <textarea rows={4} className="mt-2 w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-bronze resize-none" placeholder="A few notes on the space, your taste, references…" />
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(2)} className="border border-border py-4 px-6 text-[11px] tracking-[0.3em] uppercase hover:border-foreground transition">
                  Back
                </button>
                <button type="submit" className="flex-1 bg-ink text-ivory py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-bronze transition inline-flex items-center justify-center gap-3">
                  Request Consultation <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          <p className="text-[11px] tracking-widest uppercase text-foreground/40 text-center pt-2">
            Or chat with our concierge → bottom right
          </p>
        </form>
      </section>
    </>
  );
}
