import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { getProduct, recommended } from "@/lib/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProduct(id);
  const [qty, setQty] = useState(1);
  const [zoom, setZoom] = useState(false);

  if (!product) {
    return (
      <div className="container-luxe py-40 text-center">
        <p className="eyebrow">Not in the atelier</p>
        <h1 className="font-display text-5xl mt-4">Piece not found</h1>
        <Link to="/shop" className="mt-8 inline-block underline-hover text-[11px] tracking-widest uppercase text-bronze">Return to Shop →</Link>
      </div>
    );
  }

  const recs = recommended(product.id, 3);

  return (
    <>
      <nav className="container-luxe pt-10 text-[11px] tracking-widest uppercase text-foreground/55">
        <Link to="/" className="hover:text-bronze">Atelier</Link> <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-bronze">Shop</Link> <span className="mx-2">/</span>
        <span className="text-foreground">{product.category}</span>
      </nav>

      <section className="container-luxe py-12 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div
            className="relative aspect-[4/5] bg-beige overflow-hidden cursor-zoom-in"
            onClick={() => setZoom((z) => !z)}
          >
            <img
              src={product.image}
              alt={product.name}
              className={`h-full w-full object-cover transition-transform duration-700 ${zoom ? "scale-150" : "scale-100"}`}
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="aspect-square bg-beige overflow-hidden cursor-pointer hover:opacity-80">
                <img src={product.image} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
          <p className="eyebrow">{product.collection}</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05]">{product.name}</h1>
          <div className="flex items-center gap-3 mt-4 text-bronze">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
            <span className="text-xs text-foreground/60 ml-2">42 patrons</span>
          </div>
          <p className="mt-8 font-display text-3xl">{product.currency}{product.price.toLocaleString("en-IN")}</p>

          <p className="mt-8 text-base leading-relaxed text-foreground/80">{product.story}</p>

          <dl className="mt-10 grid grid-cols-2 gap-y-5 text-sm hairline pt-8">
            <dt className="eyebrow">Material</dt><dd className="text-foreground/80">{product.material}</dd>
            <dt className="eyebrow">Dimensions</dt><dd className="text-foreground/80">{product.dimensions}</dd>
            <dt className="eyebrow">Lead time</dt><dd className="text-foreground/80">6–8 weeks</dd>
            <dt className="eyebrow">Finish</dt><dd className="text-foreground/80">Ivory · Bronze · Custom</dd>
          </dl>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex items-center border border-border">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3 hover:bg-beige" aria-label="Decrease"><Minus className="h-3.5 w-3.5" /></button>
              <span className="w-12 text-center tabular-nums">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="p-3 hover:bg-beige" aria-label="Increase"><Plus className="h-3.5 w-3.5" /></button>
            </div>
            <button className="flex-1 inline-flex items-center justify-center gap-3 bg-ink text-ivory py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-bronze transition">
              <ShoppingBag className="h-4 w-4" /> Add to Bag
            </button>
            <button className="p-4 border border-border hover:text-bronze hover:border-bronze transition" aria-label="Wishlist">
              <Heart className="h-4 w-4" />
            </button>
          </div>

          <Link to="/consultation" className="mt-6 block w-full text-center border border-border py-3.5 text-[11px] tracking-[0.3em] uppercase hover:bg-ink hover:text-ivory transition">
            Request White-Glove Consultation
          </Link>

          <div className="mt-10 hairline pt-6 grid grid-cols-3 gap-4 text-[11px] tracking-widest uppercase text-foreground/60">
            <div><p className="text-bronze">01</p><p className="mt-2">Hand-finished</p></div>
            <div><p className="text-bronze">02</p><p className="mt-2">Bespoke trims</p></div>
            <div><p className="text-bronze">03</p><p className="mt-2">White-glove install</p></div>
          </div>
        </div>
      </section>

      {/* RECS */}
      <section className="container-luxe py-32">
        <p className="eyebrow">Composed with</p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl mb-12">From the same atelier.</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {recs.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </>
  );
}
