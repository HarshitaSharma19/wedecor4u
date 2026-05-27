import { useState } from "react";
import { Search, Filter, ArrowUpRight, Layers } from "lucide-react";
import { vendors, packageConfigs, materialCategories, allTiers, getVendorsByTier, getVendorsByCategory } from "@/lib/vendors";
import { VendorCard } from "@/components/VendorCard";
import { PackageCard } from "@/components/PackageCard";

const categoryIcons = {
  Woodwork: "🪵",
  Hardware: "⚙️",
  Laminate: "🎨",
  Glass: "🪟",
  Stone: "🪨",
  Fabric: "🧵",
  Lighting: "💡",
  Sanitary: "🚿",
};

export default function Materials() {
  const [activeTab, setActiveTab] = useState("vendors");
  const [selectedTier, setSelectedTier] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVendors = vendors.filter((v) => {
    const matchTier = selectedTier === "All" || v.tier.includes(selectedTier);
    const matchCategory = selectedCategory === "All" || v.category === selectedCategory;
    const matchSearch = searchQuery === "" ||
      v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.specialty.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchTier && matchCategory && matchSearch;
  });

  return (
    <>
      {/* HERO */}
      <section className="bg-ink text-ivory py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(196,168,130,0.4) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>
        <div className="container-luxe relative">
          <p className="eyebrow text-champagne reveal">Material Architecture</p>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-[clamp(3rem,7vw,7rem)] leading-[0.95] tracking-tight max-w-4xl">
            Vendors curated for<br />
            <em className="italic text-champagne">every tier of luxury.</em>
          </h1>
          <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-ivory/75 leading-relaxed text-lg">
            From ISI-certified plywood to Austrian precision hardware — every vendor in our library is evaluated against our quality matrix and matched to Economical, Premium and Ultra Premium project tiers.
          </p>
          <div className="reveal reveal-delay-3 mt-10 grid sm:grid-cols-3 gap-px bg-ivory/10 max-w-2xl">
            {[
              { k: `${vendors.length}+`, v: "Curated Vendors" },
              { k: "4", v: "Material Categories" },
              { k: "3", v: "Package Tiers" },
            ].map((s) => (
              <div key={s.v} className="bg-ink p-6">
                <p className="font-display text-4xl text-champagne">{s.k}</p>
                <p className="text-xs tracking-widest uppercase text-ivory/50 mt-1">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABS */}
      <div className="border-b border-border bg-pearl sticky top-20 z-30">
        <div className="container-luxe flex gap-0">
          {[
            { id: "vendors", label: "Vendor Library", icon: Layers },
            { id: "packages", label: "Package Tiers", icon: ArrowUpRight },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-8 py-5 text-[11px] tracking-[0.28em] uppercase border-b-2 transition ${
                activeTab === tab.id
                  ? "border-bronze text-bronze"
                  : "border-transparent text-foreground/50 hover:text-foreground"
              }`}
            >
              <tab.icon className="h-3.5 w-3.5" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "vendors" && (
        <section className="container-luxe py-16">
          {/* FILTERS */}
          <div className="flex flex-wrap gap-4 items-center mb-12">
            {/* Search */}
            <div className="flex-1 min-w-[200px] max-w-sm relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-foreground/40" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search vendors, materials…"
                className="w-full pl-9 pr-4 py-3 border border-border bg-transparent text-sm focus:outline-none focus:border-bronze transition text-foreground placeholder:text-foreground/40"
              />
            </div>

            {/* Package tier filter */}
            <div className="flex gap-1">
              <span className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-foreground/40 mr-2">
                <Filter className="h-3 w-3" /> Tier
              </span>
              {["All", ...allTiers].map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTier(t)}
                  className={`px-3 py-1.5 text-[10px] tracking-wider uppercase border transition ${
                    selectedTier === t
                      ? "bg-ink text-ivory border-ink"
                      : "border-border hover:border-bronze/50"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Category filter */}
            <div className="flex gap-1 flex-wrap">
              {["All", ...materialCategories].map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-3 py-1.5 text-[10px] tracking-wider uppercase border transition ${
                    selectedCategory === c
                      ? "bg-bronze text-ivory border-bronze"
                      : "border-border hover:border-bronze/50"
                  }`}
                >
                  {c !== "All" && categoryIcons[c] + " "}{c}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-foreground/50">
              Showing <span className="font-medium text-foreground">{filteredVendors.length}</span> vendors
              {selectedTier !== "All" && <> for <span className="text-bronze">{selectedTier}</span></>}
              {selectedCategory !== "All" && <> in <span className="text-bronze">{selectedCategory}</span></>}
            </p>
          </div>

          {filteredVendors.length === 0 ? (
            <div className="text-center py-24 text-foreground/40">
              <Layers className="h-10 w-10 mx-auto mb-4 opacity-30" />
              <p className="font-display text-2xl">No vendors match your filters</p>
              <button onClick={() => { setSelectedTier("All"); setSelectedCategory("All"); setSearchQuery(""); }} className="mt-4 text-[11px] tracking-widest uppercase text-bronze underline-hover">Clear filters</button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} />
              ))}
            </div>
          )}
        </section>
      )}

      {activeTab === "packages" && (
        <section className="container-luxe py-16">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow">Package Architecture</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.02]">
              Three tiers.<br /><em className="italic text-bronze">One philosophy.</em>
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed">
              Every project tier is a complete ecosystem — from material selection and vendor assignment through to installation and styling. Choose your tier to discover what's included.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packageConfigs.map((pkg) => (
              <PackageCard key={pkg.tier} pkg={pkg} />
            ))}
          </div>

          {/* Comparison table */}
          <div className="mt-20">
            <p className="eyebrow mb-8 text-center">Detailed Comparison</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 text-[10px] tracking-widest uppercase text-foreground/50 w-[30%]">Feature</th>
                    {packageConfigs.map((p) => (
                      <th key={p.tier} className="text-left py-4 text-[10px] tracking-widest uppercase text-bronze">{p.tier}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Starting Price", key: "startingPrice" },
                    { label: "Timeline", key: "estimatedTimeline" },
                    { label: "Consultation Rate", key: "consultationRate" },
                    { label: "Material Quality", key: "materialQuality" },
                  ].map((row) => (
                    <tr key={row.label} className="border-b border-border/50">
                      <td className="py-4 text-foreground/60">{row.label}</td>
                      {packageConfigs.map((p) => (
                        <td key={p.tier} className="py-4">{String(p[row.key])}</td>
                      ))}
                    </tr>
                  ))}
                  <tr className="border-b border-border/50">
                    <td className="py-4 text-foreground/60">Design Styles</td>
                    {packageConfigs.map((p) => (
                      <td key={p.tier} className="py-4 text-xs text-foreground/70">{p.designStyle.join(", ")}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
