import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import sofa from "@/assets/product-sofa.jpg";
import bed from "@/assets/product-bed.jpg";
import dining from "@/assets/product-dining.jpg";

const projects = [
  { img: portfolio1, name: "Pali Hill Residence", loc: "Mumbai", year: "2025", scale: "6,800 sq ft", span: "lg:col-span-8 lg:row-span-2" },
  { img: portfolio2, name: "Heritage Suite", loc: "Dubai", year: "2024", scale: "2,400 sq ft", span: "lg:col-span-4" },
  { img: portfolio3, name: "Maison du Marble", loc: "Delhi", year: "2024", scale: "3,200 sq ft", span: "lg:col-span-4" },
  { img: bed, name: "Le Quartier Privé", loc: "London", year: "2024", scale: "1,800 sq ft", span: "lg:col-span-6" },
  { img: dining, name: "Studio Verma", loc: "Mumbai", year: "2023", scale: "1,200 sq ft", span: "lg:col-span-6" },
  { img: sofa, name: "Cinque Apartments", loc: "Bangalore", year: "2023", scale: "4,500 sq ft", span: "lg:col-span-12" },
];

export default function Portfolio() {
  return (
    <>
      <section className="container-luxe pt-20 pb-16">
        <p className="eyebrow">Selected Works</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl max-w-4xl leading-[1.02]">A portfolio of <em className="italic text-bronze">stillness</em> and proportion.</h1>
      </section>

      <section className="container-luxe pb-32">
        <div className="grid lg:grid-cols-12 auto-rows-[18rem] md:auto-rows-[22rem] gap-6">
          {projects.map((p) => (
            <figure key={p.name} className={`group relative overflow-hidden bg-beige ${p.span}`}>
              <img src={p.img} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent opacity-90" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-8 text-ivory">
                <p className="text-[10px] tracking-[0.32em] uppercase text-champagne">{p.loc} · {p.year}</p>
                <h3 className="mt-2 font-display text-3xl">{p.name}</h3>
                <p className="text-xs opacity-75">{p.scale}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
