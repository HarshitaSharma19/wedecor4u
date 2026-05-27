import { Link } from "react-router-dom";
import hero from "@/assets/hero-interior.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import sofa from "@/assets/product-sofa.jpg";
import sculpture from "@/assets/product-sculpture.jpg";
import plant from "@/assets/product-plant.jpg";
import candle from "@/assets/product-candle.jpg";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { ArrowUpRight, Check } from "lucide-react";

const concepts = [
  { name: "Modern Luxury", desc: "Sculpted forms · bronze · marble" },
  { name: "Scandinavian", desc: "Soft light · linen · pale oak" },
  { name: "Contemporary", desc: "Architectural restraint" },
  { name: "Minimal", desc: "Silence as material" },
  { name: "Industrial", desc: "Patina · concrete · steel" },
  { name: "Classic Luxury", desc: "Stately · enduring · refined" },
];

const decor = [
  { img: sculpture, name: "Sculpture & Objet", caption: "Patinated forms, sculptural weight" },
  { img: candle, name: "Light & Hours", caption: "Pillar candles · ribbed brass" },
  { img: plant, name: "Verdure", caption: "Botanical poise, low maintenance" },
];

const packages = [
  {
    name: "Economical",
    price: "₹1.2L",
    suffix: "/ room",
    tag: "Value-driven",
    features: ["1 room design", "Mood board & 2D layout", "Indian brand materials", "Standard finishes", "2 revision rounds", "4–6 week delivery"],
  },
  {
    name: "Premium",
    price: "₹6.5L",
    suffix: "/ residence",
    tag: "Most Composed",
    features: ["Up to 3 rooms", "Full 3D walkthrough", "German hardware (Hettich)", "Premium laminates", "Procurement managed", "On-site styling", "8–12 week delivery"],
    featured: true,
  },
  {
    name: "Ultra Premium",
    price: "₹15L+",
    suffix: "/ bespoke",
    tag: "No compromise",
    features: ["Complete residence", "Architectural coordination", "Blum & Häfele systems", "Saint-Gobain glass", "Custom commissions", "Personal design director", "White-glove install", "Editorial reveal shoot"],
  },
];

const testimonials = [
  { quote: "WEDECOR4U did not decorate our villa — they composed it. Every corner breathes intention.", name: "Aanya & Rohan Mehta", project: "Pali Hill Residence" },
  { quote: "The most considered atelier we have worked with. Quiet, exacting, profoundly modern.", name: "Karim Al-Sayed", project: "Dubai Penthouse" },
  { quote: "A creative restraint that is now rare. The Gold engagement is worth every rupee.", name: "Studio Verma", project: "Mumbai Atelier" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={hero}
          alt="Luxury interior with curved sofa, marble table and arched windows"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover ken-burns"
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative h-full container-luxe flex flex-col justify-end pb-20 md:pb-32 text-ivory">
          <p className="eyebrow text-champagne reveal">Atelier · Established Mumbai</p>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-[clamp(2.75rem,7vw,7rem)] leading-[0.95] tracking-tight max-w-5xl text-balance">
            Architecture for the<br />
            <em className="font-serif italic text-champagne">art of living.</em>
          </h1>
          <p className="reveal reveal-delay-2 mt-8 max-w-xl text-base md:text-lg text-ivory/85 leading-relaxed">
            WEDECOR4U is a luxury interior and architecture studio composing residences, suites and ateliers — paired with a curated house of bespoke furniture and objet.
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-4">
            <Link to="/shop" className="group inline-flex items-center gap-3 bg-ivory text-ink px-7 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-champagne transition-colors">
              Explore Collection
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link to="/consultation" className="inline-flex items-center gap-3 border border-ivory/60 text-ivory px-7 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-ivory hover:text-ink transition-colors">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="container-luxe py-32 md:py-44 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <p className="eyebrow">The Atelier</p>
          <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05] text-balance">
            Composed in <em className="italic text-bronze">ivory, bronze</em><br /> and quiet light.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 space-y-6 text-base leading-relaxed text-foreground/80">
          <p>
            For over a decade, WEDECOR4U has shaped private residences and intimate hospitality
            spaces across India and the Gulf. Our practice begins where ornament ends —
            with architecture, proportion and the slow assembly of materials that age beautifully.
          </p>
          <p>
            Each engagement is led personally by our principal designer and supported by an
            atelier of artisans — joiners, upholsterers, metalworkers and stoneworkers. The
            result is a residence that feels inevitable, never decorated.
          </p>
          <Link to="/services" className="inline-block mt-2 underline-hover text-[11px] tracking-[0.3em] uppercase text-bronze">
            Our Philosophy →
          </Link>
        </div>
      </section>

      {/* CONCEPTS */}
      <section className="bg-beige/60 py-28 md:py-36">
        <div className="container-luxe">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="eyebrow">Design Concepts</p>
              <h2 className="mt-4 font-display text-5xl md:text-6xl">Six languages, one signature.</h2>
            </div>
            <p className="max-w-md text-foreground/70">
              Our studio fluently composes across modern luxury, Scandinavian restraint and
              industrial architecture — always with editorial calm.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {concepts.map((c, i) => (
              <div key={c.name} className="bg-beige/60 hover:bg-ivory transition-colors p-10 group cursor-pointer">
                <span className="text-[10px] tabular-nums tracking-widest text-bronze">0{i + 1}</span>
                <h3 className="mt-6 font-display text-3xl">{c.name}</h3>
                <p className="mt-3 text-sm text-foreground/65">{c.desc}</p>
                <ArrowUpRight className="mt-10 h-5 w-5 text-bronze translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED FURNITURE */}
      <section className="container-luxe py-32 md:py-44">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <p className="eyebrow">Featured Collection</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">The Luxeholic Series.</h2>
          </div>
          <Link to="/shop" className="underline-hover text-[11px] tracking-[0.3em] uppercase text-bronze">View All Pieces →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* DECOR SHOWCASE */}
      <section className="bg-pearl py-32">
        <div className="container-luxe grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 md:sticky md:top-32 self-start">
            <p className="eyebrow">Objet & Atmosphere</p>
            <h2 className="mt-4 font-display text-5xl leading-[1.05]">Curated <em className="italic text-bronze">decor</em> for the considered home.</h2>
            <p className="mt-6 text-foreground/70 leading-relaxed">
              Sculpture, light, botanical and table — each object selected for its
              architectural quietness and tactile depth.
            </p>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-3 gap-6">
            {decor.map((d, i) => (
              <figure key={d.name} className={`group ${i === 1 ? "sm:mt-16" : ""}`}>
                <div className="relative overflow-hidden aspect-[3/4] bg-beige">
                  <img src={d.img} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                </div>
                <figcaption className="mt-4">
                  <h4 className="font-display text-xl">{d.name}</h4>
                  <p className="mt-1 text-sm text-foreground/60">{d.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* VERDURE */}
      <section className="relative container-luxe py-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-beige">
          <img src={plant} alt="Artificial palm in bronze planter" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="eyebrow">Verdure</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">Botanical poise, engineered to last.</h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">
            Hand-finished artificial palms, vertical garden mats and wall grass — composed
            from silk fibres and cast in tactile planters. Lifelike, low-light, life-long.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {["Hand-finished silk fronds", "Hospitality-grade fade resistance", "Architectural planters in brass & stone", "On-site styling consultation"].map((x) => (
              <li key={x} className="flex items-center gap-3"><Check className="h-3.5 w-3.5 text-bronze" />{x}</li>
            ))}
          </ul>
          <Link to="/shop" className="mt-10 inline-block underline-hover text-[11px] tracking-[0.3em] uppercase text-bronze">Browse Verdure →</Link>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-ink text-ivory py-32 md:py-44">
        <div className="container-luxe">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="eyebrow text-champagne">Packages</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">Three doors into the atelier.</h2>
            <p className="mt-6 text-ivory/60 text-sm leading-relaxed">Each tier unlocks a distinct material world — from trusted Indian brands to Austrian precision engineering.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-ivory/10">
            {packages.map((p) => (
              <div key={p.name} className={`p-10 md:p-12 ${p.featured ? "bg-bronze text-ivory" : "bg-ink"}`}>
                <p className={`eyebrow ${p.featured ? "text-ivory/80" : "text-champagne"}`}>{p.tag}</p>
                <h3 className="mt-6 font-display text-4xl">{p.name}</h3>
                <p className="mt-4 font-display text-3xl">{p.price}<span className="text-sm tracking-wider ml-1 opacity-70">{p.suffix}</span></p>
                <ul className="mt-10 space-y-4 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3"><Check className={`h-3.5 w-3.5 mt-1 ${p.featured ? "text-ivory" : "text-champagne"}`} />{f}</li>
                  ))}
                </ul>
                <Link to="/consultation" className={`mt-12 inline-block w-full text-center py-3.5 text-[11px] tracking-[0.3em] uppercase border transition ${p.featured ? "border-ivory hover:bg-ivory hover:text-bronze" : "border-ivory/40 hover:bg-ivory hover:text-ink"}`}>
                  Begin
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/materials" className="inline-flex items-center gap-2 text-champagne/70 text-[11px] tracking-[0.3em] uppercase hover:text-champagne transition underline-hover">
              Explore full material library → each tier
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="container-luxe py-32 md:py-44">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <p className="eyebrow">Selected Residences</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">A portfolio of stillness.</h2>
          </div>
          <Link to="/portfolio" className="underline-hover text-[11px] tracking-[0.3em] uppercase text-bronze">All Projects →</Link>
        </div>
        <div className="grid md:grid-cols-12 gap-6">
          <figure className="md:col-span-7 group overflow-hidden">
            <div className="relative aspect-[4/5] overflow-hidden bg-beige">
              <img src={portfolio1} alt="Pali Hill Residence" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105" />
            </div>
            <figcaption className="mt-5 flex justify-between items-baseline">
              <div><h4 className="font-display text-2xl">Pali Hill Residence</h4><p className="text-sm text-foreground/60">Mumbai · 6800 sq ft</p></div>
              <span className="text-[10px] tracking-widest text-bronze">2025</span>
            </figcaption>
          </figure>
          <div className="md:col-span-5 space-y-6">
            <figure className="group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden bg-beige">
                <img src={portfolio2} alt="Heritage Suite" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105" />
              </div>
              <figcaption className="mt-4 flex justify-between items-baseline">
                <div><h4 className="font-display text-xl">Heritage Suite</h4><p className="text-xs text-foreground/60">Dubai · 2400 sq ft</p></div>
                <span className="text-[10px] tracking-widest text-bronze">2024</span>
              </figcaption>
            </figure>
            <figure className="group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden bg-beige">
                <img src={portfolio3} alt="Maison du Marble" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105" />
              </div>
              <figcaption className="mt-4 flex justify-between items-baseline">
                <div><h4 className="font-display text-xl">Maison du Marble</h4><p className="text-xs text-foreground/60">Delhi · 3200 sq ft</p></div>
                <span className="text-[10px] tracking-widest text-bronze">2024</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-beige/60 py-32">
        <div className="container-luxe">
          <p className="eyebrow text-center">In the words of our patrons</p>
          <div className="mt-16 grid md:grid-cols-3 gap-px bg-border">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-beige/40 p-10 md:p-12">
                <blockquote className="font-display text-2xl leading-snug">"{t.quote}"</blockquote>
                <figcaption className="mt-10 hairline pt-6">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-[11px] tracking-widest uppercase text-bronze mt-1">{t.project}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src={sofa} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-ink/85" />
        <div className="relative container-luxe py-40 text-center text-ivory">
          <p className="eyebrow text-champagne">An Invitation</p>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] max-w-4xl mx-auto text-balance">
            Transform your space<br /> into <em className="italic text-champagne">luxury.</em>
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-ivory/75 leading-relaxed">
            Begin with a complimentary consultation. Our principal designer will reach out personally within 24 hours.
          </p>
          <Link to="/consultation" className="mt-12 inline-flex items-center gap-3 bg-champagne text-ink px-9 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-ivory transition">
            Book Consultation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
