import { Link } from "react-router-dom";
import { Heart, Eye } from "lucide-react";

export function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-beige aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
          <button
            aria-label="Wishlist"
            onClick={(e) => e.preventDefault()}
            className="h-9 w-9 grid place-items-center bg-ivory/90 backdrop-blur hover:bg-champagne hover:text-ivory transition"
          >
            <Heart className="h-3.5 w-3.5" />
          </button>
          <button
            aria-label="Quick view"
            onClick={(e) => e.preventDefault()}
            className="h-9 w-9 grid place-items-center bg-ivory/90 backdrop-blur hover:bg-champagne hover:text-ivory transition"
          >
            <Eye className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] tracking-[0.28em] uppercase text-bronze">{product.collection}</p>
          <h3 className="mt-1.5 font-display text-xl leading-tight">{product.name}</h3>
        </div>
        <p className="text-sm tabular-nums mt-1">{product.currency}{product.price.toLocaleString("en-IN")}</p>
      </div>
    </Link>
  );
}
