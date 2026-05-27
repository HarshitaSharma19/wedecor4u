import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ivory mt-32">
      <div className="container-luxe py-20 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow text-champagne">Atelier</p>
          <h3 className="mt-4 text-4xl font-display leading-tight">
            Your ideas,<br />styled to perfection.
          </h3>
          <p className="mt-6 text-sm text-ivory/70 max-w-md leading-relaxed">
            Subscribe to our journal for new collections, residence reveals and quiet
            invitations to private showroom evenings.
          </p>
          <form className="mt-8 flex border-b border-ivory/30 max-w-md" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent py-3 text-sm placeholder:text-ivory/40 focus:outline-none"
            />
            <button className="text-[11px] tracking-[0.3em] uppercase text-champagne hover:text-ivory transition">
              Subscribe
            </button>
          </form>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow text-champagne">Explore</p>
          <ul className="mt-4 space-y-3 text-sm text-ivory/80">
            <li><Link to="/shop" className="underline-hover">Shop</Link></li>
            <li><Link to="/services" className="underline-hover">Services</Link></li>
            <li><Link to="/materials" className="underline-hover">Materials</Link></li>
            <li><Link to="/hospitality" className="underline-hover">Hospitality</Link></li>
            <li><Link to="/portfolio" className="underline-hover">Portfolio</Link></li>
            <li><Link to="/consultation" className="underline-hover">Consult</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow text-champagne">Packages</p>
          <ul className="mt-4 space-y-3 text-sm text-ivory/80">
            <li><Link to="/materials" className="underline-hover">Economical</Link></li>
            <li><Link to="/materials" className="underline-hover">Premium</Link></li>
            <li><Link to="/materials" className="underline-hover">Ultra Premium</Link></li>
            <li><Link to="/dashboard" className="underline-hover">My Account</Link></li>
            <li><Link to="/staff" className="underline-hover">Staff Portal</Link></li>
            <li><Link to="/admin" className="underline-hover">Admin</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-champagne">Atelier</p>
          <address className="mt-4 not-italic text-sm text-ivory/80 leading-relaxed">
            12 Marble House, Crescent Avenue<br />
            Mumbai · Dubai · London<br />
            <a href="mailto:atelier@wedecor4u.com" className="underline-hover">atelier@wedecor4u.com</a><br />
            +91 98765 43210
          </address>
          <div className="flex gap-4 mt-6 text-ivory/70">
            <a href="#" aria-label="Instagram" className="hover:text-champagne transition">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-champagne transition">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-champagne transition">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
          <div className="mt-8 pt-6 border-t border-ivory/10">
            <p className="text-[10px] tracking-widest uppercase text-ivory/30 mb-3">Vendor Partners</p>
            <div className="flex flex-wrap gap-2">
              {["Blum", "Häfele", "Saint-Gobain", "Hettich", "Merino"].map((v) => (
                <span key={v} className="text-[9px] tracking-wider border border-ivory/15 px-2 py-0.5 text-ivory/40">{v}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-luxe py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] tracking-widest uppercase text-ivory/50">
          <span>© {new Date().getFullYear()} WEDECOR4U Atelier · All rights reserved</span>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>Crafted in Ivory &amp; Bronze</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
