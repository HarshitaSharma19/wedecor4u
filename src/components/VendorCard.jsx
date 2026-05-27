import { Star, MapPin, Clock, Package, ExternalLink } from "lucide-react";

const classificationColors = {
  Standard: "bg-taupe/15 text-taupe",
  Premium: "bg-champagne/30 text-bronze",
  Luxury: "bg-ink text-champagne",
};

const statusDot = {
  Active: "bg-green-500",
  Preferred: "bg-bronze",
  Limited: "bg-amber-400",
};

export function VendorCard({ vendor, compact = false }) {
  if (compact) {
    return (
      <div className="bg-ivory border border-border p-5 hover:border-bronze/50 hover:shadow-sm transition-all duration-300 group">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className={`inline-flex items-center gap-1.5 text-[9px] tracking-[0.28em] uppercase px-2 py-0.5 font-medium ${classificationColors[vendor.classification]}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${statusDot[vendor.status]}`} />
                {vendor.classification}
              </span>
            </div>
            <h3 className="font-display text-xl leading-tight">{vendor.name}</h3>
            <p className="text-[10px] tracking-widest uppercase text-bronze mt-0.5">{vendor.category}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="flex items-center gap-1 justify-end">
              <Star className="h-3 w-3 text-bronze fill-bronze" />
              <span className="text-sm font-medium">{vendor.rating}</span>
            </div>
            <p className="text-[10px] text-foreground/50 mt-0.5">{vendor.projectsCompleted} projects</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-foreground/60 leading-relaxed line-clamp-2">{vendor.description}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {vendor.finishTypes.slice(0, 2).map((f) => (
            <span key={f} className="text-[9px] tracking-wider uppercase border border-border px-2 py-0.5 text-foreground/50">
              {f}
            </span>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-border flex items-center justify-between text-[10px] text-foreground/50">
          <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{vendor.leadTime}</span>
          <span className="font-medium text-foreground">{vendor.priceRange}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ivory border border-border hover:border-bronze/40 hover:shadow-md transition-all duration-500 group overflow-hidden">
      {/* Header strip */}
      <div className="bg-pearl border-b border-border px-7 py-5 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`inline-flex items-center gap-1.5 text-[9px] tracking-[0.28em] uppercase px-2.5 py-1 font-medium ${classificationColors[vendor.classification]}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${statusDot[vendor.status]}`} />
              {vendor.classification}
            </span>
            <span className="text-[9px] tracking-widest uppercase text-foreground/40 border border-border px-2 py-0.5">{vendor.status}</span>
          </div>
          <h3 className="font-display text-3xl leading-tight">{vendor.name}</h3>
          <p className="text-[10px] tracking-[0.3em] uppercase text-bronze mt-1">{vendor.category} · {vendor.origin}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="flex items-center gap-1.5 justify-end">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-3 w-3 ${i < Math.floor(vendor.rating) ? "text-bronze fill-bronze" : "text-border"}`} />
            ))}
          </div>
          <p className="text-[10px] text-foreground/50 mt-1">{vendor.projectsCompleted} projects completed</p>
        </div>
      </div>

      <div className="p-7 space-y-5">
        <p className="text-sm text-foreground/70 leading-relaxed">{vendor.description}</p>

        {/* Specs grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-pearl p-3">
            <p className="eyebrow mb-1">Price Range</p>
            <p className="font-display text-lg">{vendor.priceRange}</p>
          </div>
          <div className="bg-pearl p-3">
            <p className="eyebrow mb-1">Lead Time</p>
            <p className="font-display text-lg flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-bronze" />{vendor.leadTime}
            </p>
          </div>
          <div className="bg-pearl p-3">
            <p className="eyebrow mb-1">Min. Order</p>
            <p className="font-display text-lg flex items-center gap-1.5">
              <Package className="h-3.5 w-3.5 text-bronze" />{vendor.moq}
            </p>
          </div>
          <div className="bg-pearl p-3">
            <p className="eyebrow mb-1">Location</p>
            <p className="font-display text-lg flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-bronze" />{vendor.origin}
            </p>
          </div>
        </div>

        {/* Specialty */}
        <div>
          <p className="eyebrow mb-2">Specialty</p>
          <div className="flex flex-wrap gap-2">
            {vendor.specialty.map((s) => (
              <span key={s} className="text-[10px] tracking-wider uppercase border border-border px-2.5 py-1 text-foreground/60 hover:border-bronze/50 transition">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Finishes */}
        <div>
          <p className="eyebrow mb-2">Available Finishes</p>
          <div className="flex flex-wrap gap-2">
            {vendor.finishTypes.map((f) => (
              <span key={f} className="text-[10px] tracking-wider bg-beige/60 px-3 py-1.5 text-foreground/70">
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Texture previews */}
        <div>
          <p className="eyebrow mb-2">Texture Previews</p>
          <div className="grid grid-cols-3 gap-2">
            {vendor.texturePreviews.map((t, i) => {
              const colors = [
                "from-stone-200 to-stone-300",
                "from-amber-50 to-amber-100",
                "from-zinc-700 to-zinc-900",
              ];
              return (
                <div key={t} className={`aspect-square bg-gradient-to-br ${colors[i % colors.length]} flex items-end p-2`}>
                  <span className="text-[9px] tracking-wider text-white/90 bg-black/30 px-1.5 py-0.5 leading-tight">{t}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-2 border-t border-border flex items-center justify-between">
          <div>
            <p className="text-[10px] tracking-widest uppercase text-foreground/40">Package Tiers</p>
            <div className="flex gap-1 mt-1">
              {vendor.tier.map((t) => (
                <span key={t} className="text-[9px] tracking-wider uppercase bg-bronze/10 text-bronze px-2 py-0.5">{t}</span>
              ))}
            </div>
          </div>
          <button className="flex items-center gap-2 text-[11px] tracking-[0.26em] uppercase text-bronze hover:text-ink transition group/btn">
            Request Quote <ExternalLink className="h-3 w-3 group-hover/btn:translate-x-0.5 transition" />
          </button>
        </div>
      </div>
    </div>
  );
}
