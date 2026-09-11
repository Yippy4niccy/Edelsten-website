import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-[#1a1d24]/90 backdrop-blur-md shadow-[0_4px_24px_-12px_rgba(0,0,0,0.18)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 ml-auto">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  solid ? "text-[#9aa1ac] hover:text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/30"
            >
              Get a Quote
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
              solid ? "text-white hover:bg-white/5" : "text-white hover:bg-[#1a1d24]/10"
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#1a1d24] ${
          open ? "max-h-96 border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-6 py-4 flex flex-col gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-xl text-base font-medium text-white hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-base font-semibold text-white"
          >
            Get a Quote
          </a>
          <a
            href="tel:0423583033"
            className="inline-flex items-center justify-center gap-2 px-3 py-3 text-base font-medium text-[#9aa1ac]"
          >
            <Phone size={16} /> 0423 583 033
          </a>
        </div>
      </div>
    </header>
  );
}