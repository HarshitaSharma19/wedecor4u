import { Check, ArrowUpRight, Sparkles, Layers, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const tierBadgeStyle = {
  "Economical": "bg-taupe/10 text-taupe border-taupe/30",
  "Premium": "bg-champagne/20 text-bronze border-champagne/50",
  "Ultra Premium": "bg-ink text-champagne border-ink",
};

export function PackageCard({ pkg, isSelected, onClick, showCTA = true }) {
  const isUltra = pkg.tier === "Ultra Premium";

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden border transition-all duration-500 cursor-pointer group
        ${isUltra ? "bg-ink text-ivory border-ink" : "bg-ivory border-border"}
        ${isSelected ? "border-bronze shadow-lg shadow-bronze/10 ring-1 ring-bronze/30" : "hover:border-bronze/40 hover:shadow-md"}
        ${onClick ? "cursor-pointer" : ""}
      `}
    >
      {isSelected && (
        <div className="absolute top-4 right-4 bg-bronze text-ivory h-6 w-6 flex items-center justify-center rounded-full">
          <Check className="h-3.5 w-3.5" />
        </div>
      )}

      {pkg.tier === "Premium" && (
        <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-champagne via-bronze to-champagne" />
      )}

      {isUltra && (
        <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-champagne/40 via-champagne to-champagne/40" />
      )}

      <div className="p-8 md:p-10">
        {/* Tier label */}
        <div className={`inline-flex items-center gap-2 text-[9px] tracking-[0.32em] uppercase border px-3 py-1 mb-5 ${isUltra ? "border-champagne/30 text-champagne" : tierBadgeStyle[pkg.tier]}`}>
          {isUltra && <Sparkles className="h-2.5 w-2.5" />}
          {pkg.tier}
        </div>

        {/* Price */}
        <div className="mb-2">
          <p className={`font-display text-4xl md:text-5xl ${isUltra ? "text-champagne" : "text-foreground"}`}>
            {pkg.startingPrice.split(" ")[0]}
          </p>
          <p className={`text-sm mt-1 ${isUltra ? "text-ivory/50" : "text-foreground/50"}`}>
            {pkg.startingPrice.replace(pkg.startingPrice.split(" ")[0] + " ", "")}
          </p>
        </div>

        <p className={`text-sm leading-relaxed mb-7 ${isUltra ? "text-ivory/70" : "text-foreground/65"}`}>
          {pkg.tagline}
        </p>

        {/* Stats row */}
        <div className={`grid grid-cols-2 gap-3 mb-7 p-4 ${isUltra ? "bg-ivory/5" : "bg-pearl"}`}>
          <div>
            <div className={`flex items-center gap-1.5 mb-1 ${isUltra ? "text-champagne/70" : "text-bronze"}`}>
              <Clock className="h-3 w-3" />
              <span className="text-[9px] tracking-widest uppercase">Timeline</span>
            </div>
            <p className={`text-sm font-medium ${isUltra ? "text-ivory" : ""}`}>{pkg.estimatedTimeline}</p>
          </div>
          <div>
            <div className={`flex items-center gap-1.5 mb-1 ${isUltra ? "text-champagne/70" : "text-bronze"}`}>
              <DollarSign className="h-3 w-3" />
              <span className="text-[9px] tracking-widest uppercase">Consultation</span>
            </div>
            <p className={`text-sm font-medium ${isUltra ? "text-ivory" : ""}`}>{pkg.consultationRate}</p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <p className={`text-[9px] tracking-[0.3em] uppercase mb-3 ${isUltra ? "text-champagne/60" : "text-bronze"}`}>Includes</p>
          <ul className="space-y-2.5">
            {pkg.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <Check className={`h-3.5 w-3.5 mt-0.5 flex-shrink-0 ${isUltra ? "text-champagne" : "text-bronze"}`} />
                <span className={`text-xs leading-relaxed ${isUltra ? "text-ivory/80" : "text-foreground/75"}`}>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Materials preview */}
        <div className={`mb-6 border-t pt-5 ${isUltra ? "border-ivory/10" : "border-border"}`}>
          <div className={`flex items-center gap-2 mb-3 ${isUltra ? "text-champagne/60" : "text-bronze"}`}>
            <Layers className="h-3 w-3" />
            <p className="text-[9px] tracking-[0.3em] uppercase">Key Materials</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {pkg.materials.slice(0, 3).map((m) => (
              <span key={m} className={`text-[9px] tracking-wider px-2 py-1 ${isUltra ? "bg-ivory/10 text-ivory/70" : "bg-beige/60 text-foreground/60"}`}>
                {m.split(" ")[0]} {m.split(" ")[1]}
              </span>
            ))}
            {pkg.materials.length > 3 && (
              <span className={`text-[9px] tracking-wider px-2 py-1 ${isUltra ? "bg-ivory/10 text-ivory/50" : "bg-beige/60 text-foreground/40"}`}>
                +{pkg.materials.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Mood palette */}
        <div className={`mb-7 border-t pt-5 ${isUltra ? "border-ivory/10" : "border-border"}`}>
          <p className={`text-[9px] tracking-[0.3em] uppercase mb-3 ${isUltra ? "text-champagne/60" : "text-bronze"}`}>Mood Palette</p>
          <div className="flex gap-2">
            {pkg.moodPalette.slice(0, 5).map((color, i) => {
              const swatches = [
                "bg-stone-100", "bg-amber-50", "bg-stone-400",
                "bg-amber-700", "bg-zinc-800", "bg-zinc-900",
                "bg-yellow-200", "bg-green-100",
              ];
              return (
                <div key={color} className="flex flex-col items-center gap-1">
                  <div className={`h-7 w-7 ${swatches[i % swatches.length]} border border-border/50`} title={color} />
                  <span className={`text-[8px] leading-tight text-center max-w-[40px] ${isUltra ? "text-ivory/40" : "text-foreground/40"}`}>{color.split(" ")[0]}</span>
                </div>
              );
            })}
          </div>
        </div>

        {showCTA && (
          <Link
            to="/consultation"
            className={`w-full inline-flex items-center justify-center gap-2 py-3.5 text-[11px] tracking-[0.3em] uppercase border transition group/cta
              ${isUltra
                ? "border-champagne text-champagne hover:bg-champagne hover:text-ink"
                : "border-ink text-ink hover:bg-ink hover:text-ivory"
              }`}
          >
            Begin Engagement
            <ArrowUpRight className="h-3.5 w-3.5 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition" />
          </Link>
        )}
      </div>
    </div>
  );
}
