import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

export default function Shop() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list = products.filter((p) => (cat === "All" ? true : p.category === cat));
    if (q) list = list.filter((p) => (p.name + p.collection).toLowerCase().includes(q.toLowerCase()));
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [cat, q, sort]);

  return (
    <>
      <section className="container-luxe pt-20 pb-12">
        <p className="eyebrow">The Atelier · Shop</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.02] max-w-3xl">A house of <em className="italic text-bronze">considered</em> objects.</h1>
        <p className="mt-6 max-w-xl text-foreground/70">
          Every piece in the collection is selected or commissioned by the atelier — from
          curved bouclé sofas to hand-thrown porcelain.
        </p>
      </section>

      <section className="border-y border-border bg-pearl sticky top-20 z-30 backdrop-blur">
        <div className="container-luxe py-5 flex flex-wrap gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-[11px] tracking-[0.22em] uppercase">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`relative pb-1 transition ${cat === c ? "text-bronze" : "text-foreground/60 hover:text-foreground"}`}
              >
                {c}
                {cat === c && <span className="absolute left-0 right-0 -bottom-0 h-px bg-bronze" />}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border-b border-border/80 pb-1">
              <Search className="h-3.5 w-3.5 text-bronze" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" className="bg-transparent text-sm focus:outline-none w-32" />
            </div>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="bg-transparent text-[11px] tracking-widest uppercase border-b border-border/80 pb-1 focus:outline-none cursor-pointer">
              <option value="featured">Sort · Featured</option>
              <option value="low">Price · Low</option>
              <option value="high">Price · High</option>
            </select>
          </div>
        </div>
      </section>

      <section className="container-luxe py-16">
        {filtered.length === 0 ? (
          <p className="py-32 text-center text-muted-foreground">No pieces found in this category.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
            {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}

        <div className="mt-24 flex justify-center items-center gap-2 text-[11px] tracking-[0.28em] uppercase">
          <button className="px-4 py-2 text-foreground/40">‹ Prev</button>
          <span className="px-4 py-2 bg-ink text-ivory">01</span>
          <button className="px-4 py-2 hover:text-bronze">02</button>
          <button className="px-4 py-2 hover:text-bronze">03</button>
          <button className="px-4 py-2 hover:text-bronze">Next ›</button>
        </div>
      </section>
    </>
  );
}
