import { Link } from "react-router-dom";
import hero from "@/assets/portfolio-2.jpg";
import suite from "@/assets/portfolio-1.jpg";
import villa from "@/assets/portfolio-3.jpg";
import { ArrowUpRight, Check } from "lucide-react";

const journey = [
  { step: "01", title: "Property audit", desc: "On-site survey, photography brief and revenue analysis." },
  { step: "02", title: "Concept & moodboard", desc: "A single narrative — material palette, lighting tone, signature object." },
  { step: "03", title: "Procurement", desc: "Furniture, art, linen and amenity sets curated and shipped." },
  { step: "04", title: "Install & shoot", desc: "White-glove install, editorial photography and listing copy." },
];

const tiers = [
  { name: "Studio", area: "Up to 600 sq ft", price: "₹3.8L", features: ["Concept moodboard", "Furniture & decor", "Linen + amenity kit", "Listing photography"] },
  { name: "Boutique", area: "Up to 1800 sq ft", price: "₹9.5L", features: ["Multi-room narrative", "Custom joinery", "Art & sculpture curation", "Hospitality-grade linen", "Editorial shoot"], featured: true },
  { name: "Estate", area: "Villas & retreats", price: "₹22L+", features: ["End-to-end architecture", "Bespoke commissions", "Operational onboarding", "Staff training", "PR launch"] },
];

export default function Hospitality() {
  return (
    <>
      <section className="relative h-[80svh] min-h-[560px] overflow-hidden">
        <img src={hero} alt="Boutique hospitality suite" className="absolute inset-0 h-full w-full object-cover ken-burns" />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative h-full container-luxe flex flex-col justify-end pb-24 text-ivory">
          <p className="eyebrow text-champagne reveal">Hospitality Atelier</p>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.98] max-w-4xl">
            Suites, villas and retreats —<br /><em className="italic text-champagne">composed for the guest.</em>
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-ivory/85">
            We transform short-stay properties into boutique destinations — from a single Airbnb studio to an estate-scale retreat.
          </p>
        </div>
      </section>

      <section className="container-luxe py-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="eyebrow">Why owners choose us</p>
          <h2 className="mt-4 font-display text-5xl leading-[1.05]">Higher ADR. Longer stays. A property that <em className="italic text-bronze">photographs itself.</em></h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 grid sm:grid-cols-2 gap-8 text-sm">
          {[
            ["+38%", "average uplift in nightly rate post-transformation"],
            ["4.92★", "median guest rating across managed properties"],
            ["21 days", "from concept approval to first guest"],
            ["End-to-end", "design, procurement, install and listing"],
          ].map(([k, v]) => (
            <div key={k} className="border-t border-border pt-5">
              <p className="font-display text-4xl text-bronze">{k}</p>
              <p className="mt-2 text-foreground/70">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-pearl py-28">
        <div className="container-luxe">
          <p className="eyebrow">The onboarding journey</p>
          <h2 className="mt-4 font-display text-5xl">Four weeks, four movements.</h2>
          <div className="mt-16 grid md:grid-cols-4 gap-px bg-border">
            {journey.map((j) => (
              <div key={j.step} className="bg-pearl p-10">
                <span className="text-[10px] tabular-nums tracking-widest text-bronze">{j.step}</span>
                <h3 className="mt-6 font-display text-2xl">{j.title}</h3>
                <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-28 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img src={suite} alt="Heritage suite transformation" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="eyebrow">Case Study · Heritage Suite, Dubai</p>
          <h2 className="mt-4 font-display text-5xl leading-[1.05]">From dated penthouse to <em className="italic text-bronze">boutique residence.</em></h2>
          <p className="mt-6 text-foreground/75 leading-relaxed">A 2,400 sq ft Dubai penthouse re-imagined as a six-guest boutique stay — cognac leather, travertine, brushed brass and a curated library.</p>
          <ul className="mt-8 space-y-3 text-sm">
            {["Nightly rate: AED 1,400 → AED 2,200", "Occupancy: 64% → 89%", "Editorial feature in AD Middle East"].map((x) => (
              <li key={x} className="flex items-center gap-3"><Check className="h-3.5 w-3.5 text-bronze" />{x}</li>
            ))}
          </ul>
          <Link to="/portfolio" className="mt-10 inline-block underline-hover text-[11px] tracking-[0.3em] uppercase text-bronze">View Portfolio →</Link>
        </div>
      </section>

      <section className="bg-ink text-ivory py-28">
        <div className="container-luxe">
          <p className="eyebrow text-champagne">Hospitality Packages</p>
          <h2 className="mt-4 font-display text-5xl">Engagements scaled to your property.</h2>
          <div className="mt-16 grid md:grid-cols-3 gap-px bg-ivory/10">
            {tiers.map((t) => (
              <div key={t.name} className={`p-10 ${t.featured ? "bg-bronze" : "bg-ink"}`}>
                <p className="eyebrow text-champagne">{t.area}</p>
                <h3 className="mt-4 font-display text-4xl">{t.name}</h3>
                <p className="mt-3 font-display text-3xl">{t.price}</p>
                <ul className="mt-8 space-y-3 text-sm">
                  {t.features.map((f) => <li key={f} className="flex gap-3"><Check className="h-3.5 w-3.5 mt-1 text-champagne" />{f}</li>)}
                </ul>
                <Link to="/consultation" className="mt-10 inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase border border-ivory/40 px-5 py-3 hover:bg-ivory hover:text-ink transition">
                  Enquire <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={villa} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative container-luxe py-32 text-center text-ivory">
          <h2 className="font-display text-5xl md:text-6xl max-w-3xl mx-auto">Ready to onboard your property?</h2>
          <Link to="/consultation" className="mt-10 inline-flex items-center gap-3 bg-champagne text-ink px-9 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-ivory transition">
            Begin Onboarding <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
