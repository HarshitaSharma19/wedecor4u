import { Link } from "react-router-dom";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import { ArrowUpRight } from "lucide-react";

const services = [
  { title: "Architecture", desc: "Spatial planning, façade and full architectural coordination from concept to completion.", img: portfolio1 },
  { title: "Interior Design", desc: "Editorial residences shaped through proportion, material and quiet light.", img: portfolio3 },
  { title: "Bespoke Furniture", desc: "Custom commissions executed by our in-house joinery and upholstery atelier.", img: portfolio2 },
];

const process = [
  { n: "01", title: "Conversation", desc: "A private dialogue to understand intent, rhythm and the way you wish to live." },
  { n: "02", title: "Composition", desc: "Mood, material palette and architectural narrative — presented in our atelier." },
  { n: "03", title: "Documentation", desc: "Drawings, 3D walkthroughs and a tactile box of finishes for your approval." },
  { n: "04", title: "Commission", desc: "Bespoke pieces enter our workshops; procurement and site choreography begin." },
  { n: "05", title: "Reveal", desc: "White-glove install, styled to completion, finished with an editorial reveal shoot." },
];

export default function Services() {
  return (
    <>
      <section className="container-luxe pt-20 pb-24">
        <p className="eyebrow">Services</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl max-w-4xl leading-[1.02]">
          Architecture, interiors and the <em className="italic text-bronze">slow craft</em> of furniture.
        </h1>
        <p className="mt-8 max-w-xl text-foreground/75 leading-relaxed">
          We engage with a small number of residences each year — selected for the depth of
          collaboration they invite and the quality of restraint they reward.
        </p>
      </section>

      <section className="bg-pearl py-28">
        <div className="container-luxe space-y-32">
          {services.map((s, i) => (
            <div key={s.title} className={`grid md:grid-cols-12 gap-10 items-center ${i % 2 ? "md:flex-row-reverse" : ""}`}>
              <div className={`md:col-span-6 ${i % 2 ? "md:order-2" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden bg-beige">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="md:col-span-5 md:col-start-auto">
                <span className="text-bronze tabular-nums text-sm">0{i + 1} ·</span>
                <h2 className="mt-3 font-display text-5xl">{s.title}</h2>
                <p className="mt-6 text-foreground/75 leading-relaxed">{s.desc}</p>
                <Link to="/consultation" className="mt-8 inline-flex items-center gap-2 underline-hover text-[11px] tracking-[0.3em] uppercase text-bronze">
                  Enquire <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-luxe py-32">
        <p className="eyebrow">The Atelier Process</p>
        <h2 className="mt-4 font-display text-5xl md:text-6xl">Five movements, one composition.</h2>
        <div className="mt-20 grid md:grid-cols-5 gap-px bg-border">
          {process.map((p) => (
            <div key={p.n} className="bg-background p-8 hover:bg-beige/60 transition group">
              <p className="font-display text-5xl text-bronze">{p.n}</p>
              <h3 className="mt-6 font-display text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-ivory py-32 text-center">
        <div className="container-luxe">
          <p className="eyebrow text-champagne">Begin a Project</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl max-w-3xl mx-auto">Let us compose your residence.</h2>
          <Link to="/consultation" className="mt-12 inline-flex items-center gap-3 bg-champagne text-ink px-9 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-ivory transition">
            Book Consultation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
