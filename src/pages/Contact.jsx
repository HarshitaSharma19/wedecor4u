import { useState } from "react";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

function Field({ label, name, type = "text" }) {
  return (
    <div>
      <label className="eyebrow">{label}</label>
      <input name={name} type={type} className="mt-3 w-full bg-transparent border-b border-border focus:border-bronze py-3 text-sm focus:outline-none" />
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="container-luxe pt-24 pb-12">
        <p className="eyebrow">Conversation</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.02] max-w-3xl">An <em className="italic text-bronze">unhurried</em> reply.</h1>
        <p className="mt-6 max-w-xl text-foreground/70">A senior member of the atelier responds personally — usually within a working day.</p>
      </section>

      <section className="container-luxe pb-32 grid md:grid-cols-12 gap-12">
        <aside className="md:col-span-4 space-y-10">
          {[
            { icon: MapPin, label: "Atelier", value: "12 Pali Hill, Bandra West\nMumbai 400050, India" },
            { icon: Mail, label: "Correspondence", value: "atelier@wedecor4u.com\npress@wedecor4u.com" },
            { icon: Phone, label: "Direct", value: "+91 22 4000 4000\n+971 4 000 4000 (Gulf)" },
          ].map((c) => (
            <div key={c.label} className="border-t border-border pt-6">
              <div className="flex items-center gap-3 text-bronze"><c.icon className="h-4 w-4" /><p className="eyebrow">{c.label}</p></div>
              <p className="mt-4 whitespace-pre-line text-sm text-foreground/75 leading-relaxed">{c.value}</p>
            </div>
          ))}
          <div className="border-t border-border pt-6">
            <p className="eyebrow">Hours</p>
            <p className="mt-4 text-sm text-foreground/75">Mon — Sat · 10:00 to 19:00 IST<br />Sunday by appointment</p>
          </div>
        </aside>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-7 md:col-start-6 bg-pearl p-10 md:p-14 space-y-8"
        >
          {sent ? (
            <div className="py-16 text-center">
              <p className="eyebrow text-bronze">Received with care</p>
              <h3 className="mt-6 font-display text-4xl">Thank you.</h3>
              <p className="mt-4 text-foreground/70">A member of the atelier will reach out shortly.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Full name" name="name" />
                <Field label="Email" name="email" type="email" />
                <Field label="City / Country" name="city" />
                <Field label="Telephone" name="phone" />
              </div>
              <div>
                <p className="eyebrow mb-3">Nature of enquiry</p>
                <div className="flex flex-wrap gap-3">
                  {["Residence", "Hospitality", "Commission", "Press", "Trade"].map((t) => (
                    <label key={t} className="cursor-pointer">
                      <input type="radio" name="kind" className="peer sr-only" defaultChecked={t === "Residence"} />
                      <span className="block px-4 py-2 border border-border text-[11px] tracking-[0.22em] uppercase peer-checked:bg-ink peer-checked:text-ivory peer-checked:border-ink transition">{t}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="eyebrow">Message</label>
                <textarea rows={5} className="mt-3 w-full bg-transparent border-b border-border focus:border-bronze py-3 text-sm focus:outline-none resize-none" placeholder="Tell us about your space, timeline and ambition…" />
              </div>
              <button type="submit" className="inline-flex items-center gap-3 bg-ink text-ivory px-9 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-bronze transition">
                Send Enquiry <ArrowUpRight className="h-4 w-4" />
              </button>
            </>
          )}
        </form>
      </section>
    </>
  );
}
