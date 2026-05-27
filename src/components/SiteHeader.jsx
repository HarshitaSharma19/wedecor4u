import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, Heart, X, User } from "lucide-react";
import { useLocation } from "react-router-dom";

const nav = [
  { to: "/", label: "Atelier" },
  { to: "/shop", label: "Shop" },
  { to: "/services", label: "Services" },
  { to: "/materials", label: "Materials" },
  { to: "/hospitality", label: "Hospitality" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/consultation", label: "Consultation" },
  { to: "/contact", label: "Contact" },
];

const utilityLinks = [
  { to: "/dashboard", label: "My Account" },
  { to: "/staff", label: "Staff" },
  { to: "/admin", label: "Admin" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex items-center justify-between h-20">
        <div className="flex items-center gap-10">
          <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
          <Link to="/" className="font-display text-xl tracking-[0.18em]">
            WEDECOR<span className="text-bronze">4U</span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`text-[11px] tracking-[0.26em] uppercase underline-hover ${location.pathname === n.to ? "text-bronze" : ""}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-foreground">
          <button aria-label="Search" className="hover:text-bronze transition"><Search className="h-4 w-4" /></button>
          <Link to="/dashboard" aria-label="Account" className="hover:text-bronze transition hidden sm:block"><User className="h-4 w-4" /></Link>
          <button aria-label="Wishlist" className="hover:text-bronze transition hidden sm:block"><Heart className="h-4 w-4" /></button>
          <button aria-label="Bag" className="hover:text-bronze transition"><ShoppingBag className="h-4 w-4" /></button>
          <div className="hidden lg:flex items-center gap-1 border-l border-border/50 pl-4 ml-1">
            {utilityLinks.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-[9px] tracking-[0.28em] uppercase px-2.5 py-1 border border-border/40 hover:border-bronze/50 hover:text-bronze transition"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col p-8 lg:hidden overflow-y-auto">
          <div className="flex justify-between items-center mb-12">
            <span className="font-display text-xl tracking-[0.18em]">WEDECOR<span className="text-bronze">4U</span></span>
            <button onClick={() => setOpen(false)}><X className="h-5 w-5" /></button>
          </div>
          <nav className="flex flex-col gap-5">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-2xl font-display hover:text-bronze transition"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-[9px] tracking-[0.3em] uppercase text-foreground/40 mb-4">Portals</p>
            <div className="flex flex-col gap-3">
              {utilityLinks.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="text-base tracking-wider text-foreground/60 hover:text-bronze transition font-display"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
