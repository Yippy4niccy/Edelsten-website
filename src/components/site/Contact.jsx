import { useState } from "react";
import { MapPin, Clock, Phone, Mail, Check } from "lucide-react";
import SectionReveal from "./SectionReveal";

const NEEDS = [
  "Panel & paint repair",
  "Insurance claim repair",
  "Boat/outboard respray",
  "Headlight restoration",
  "Buffing/paint correction",
  "Something else",
];

const MAP_SRC =
  "https://www.google.com/maps?q=215+Brisbane+Road,+Biggera+Waters+QLD+4216&output=embed";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
      <SectionReveal className="grid lg:grid-cols-2 gap-4 sm:gap-5">
        {/* Left: dark info card */}
        <div className="rounded-3xl bg-ink text-white p-6 sm:p-10 flex flex-col border border-white/10">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">Get your free quote</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            No obligation, no pressure - just an honest assessment and a fair price.
          </p>

          <div className="mt-8 space-y-5 text-sm">
            <a
              href="https://www.google.com/maps?q=215+Brisbane+Road,+Biggera+Waters+QLD+4216"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 hover:text-brand transition-colors"
            >
              <MapPin size={18} className="text-brand shrink-0 mt-0.5" />
              <span className="text-white/80 hover:text-white">215 Brisbane Road, Biggera Waters QLD 4216</span>
            </a>
            <div className="flex gap-3">
              <Clock size={18} className="text-brand shrink-0 mt-0.5" />
              <span className="text-white/80">
                Monday – Friday<br />8:00am – 5:00pm
              </span>
            </div>
            <a href="tel:0423583033" className="flex gap-3 hover:text-brand transition-colors">
              <Phone size={18} className="text-brand shrink-0 mt-0.5" />
              <span className="text-white/80 hover:text-white">0423 583 033</span>
            </a>
            <a href="mailto:Edelstenautogroup@gmail.com" className="flex gap-3 hover:text-brand transition-colors">
              <Mail size={18} className="text-brand shrink-0 mt-0.5" />
              <span className="text-white/80 hover:text-white text-xs sm:text-sm whitespace-nowrap">Edelstenautogroup@gmail.com</span>
            </a>
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 min-h-[220px]">
            <iframe
              title="Edelsten Paint & Panel location"
              src={MAP_SRC}
              className="w-full h-[220px] grayscale-[0.3]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right: form card */}
        <div className="rounded-3xl bg-[#1a1d24] border border-white/10 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.18)] p-6 sm:p-10">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Check size={32} strokeWidth={3} />
              </span>
              <h3 className="mt-5 font-heading font-extrabold text-2xl text-white">Thanks - request received!</h3>
              <p className="mt-2 text-[#9aa1ac] max-w-sm">
                We'll be in touch shortly. For anything urgent, call us on{" "}
                <a href="tel:0423583033" className="text-brand font-semibold">0423 583 033</a>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-semibold text-[#9aa1ac] hover:text-white underline underline-offset-4"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" required>
                  <input type="text" required className={inputCls} placeholder="Your name" />
                </Field>
                <Field label="Phone" required>
                  <input type="tel" required className={inputCls} placeholder="04xx xxx xxx" />
                </Field>
              </div>
              <Field label="Email" required>
                <input type="email" required className={inputCls} placeholder="you@email.com" />
              </Field>
              <Field label="What do you need?">
                <select className={inputCls} defaultValue="">
                  <option value="" disabled>Select a service…</option>
                  {NEEDS.map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </Field>
              <Field label="Tell us about the job">
                <textarea
                  rows={4}
                  className={inputCls + " resize-none"}
                  placeholder="Vehicle make/model, what happened, insurance or private job…"
                />
              </Field>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand/30 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-brand/40"
              >
                Request my free quote
              </button>
              <p className="text-xs text-[#9aa1ac]/70 text-center">
                We'll get back to you within one business day. No obligation.
              </p>
            </form>
          )}
        </div>
      </SectionReveal>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-white/10 bg-[#0c0e12] px-4 py-3 text-sm text-white placeholder:text-[#9aa1ac]/50 outline-none transition-all focus:border-brand focus:bg-[#1a1d24] focus:ring-2 focus:ring-brand/20";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-white mb-1.5">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      {children}
    </label>
  );
}