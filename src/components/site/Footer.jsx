import { Phone, Mail } from "lucide-react";

const LOGO_URL = "/media/edelsten-logo-transparent.png";

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28 pb-10">
      <div className="rounded-3xl bg-ink text-white p-6 sm:p-10 border border-white/10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <a href="#top" className="flex items-center">
            <img src={LOGO_URL} alt="Edelsten — Quality Paint and Panel" className="h-12 w-auto rounded-lg" />
          </a>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
            <a href="tel:0423583033" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
              <Phone size={16} className="text-brand" /> 0423 583 033
            </a>
            <a href="mailto:Edelstenautogroup@gmail.com" className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/80 hover:text-white whitespace-nowrap">
              <Mail size={16} className="text-brand" /> Edelstenautogroup@gmail.com
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:-translate-y-0.5"
            >
              Get a quote
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Edelsten Paint &amp; Panel. All rights reserved.
          </p>
          <a
            href="https://www.google.com/maps?q=215+Brisbane+Road,+Biggera+Waters+QLD+4216"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/50 hover:text-brand transition-colors"
          >
            215 Brisbane Road, Biggera Waters QLD 4216
          </a>
        </div>
      </div>
    </footer>
  );
}