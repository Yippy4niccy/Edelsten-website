import { Wrench, PaintBucket, Lightbulb, SprayCan, ShieldCheck, Sparkles } from "lucide-react";
import SectionReveal from "./SectionReveal";

const SERVICES = [
  { Icon: ShieldCheck, title: "Insurance Jobs", desc: "We deal directly with your insurer from start to finish." },
  { Icon: Wrench, title: "High-Quality Collision Repair", desc: "Dents, chips, scratches and collision repairs done right." },
  { Icon: PaintBucket, title: "All Paint & Panel Work", desc: "From small dents and scratches to complete resprays." },
  { Icon: Lightbulb, title: "Headlight & Rim Restoration", desc: "Restore dull, faded headlights to like-new condition - fast and affordable." },
  { Icon: SprayCan, title: "Full Resprays", desc: "Complete colour resprays and custom paint finishes." },
  { Icon: Sparkles, title: "Buffing & Ceramic Coating", desc: "Paint correction and ceramic protection for a lasting, showroom shine." },
];

const TONES = ["bg-brand/10 text-brand", "bg-brand-blue/10 text-brand-blue"];

export default function Services() {
  return (
    <section id="services" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
      <SectionReveal className="max-w-2xl">
        <p className="text-sm font-semibold text-brand uppercase tracking-wider">Our services</p>
        <h2 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
          Specialising in quality panel and paint repair
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
          Full panel and paint capability under one roof - from insurance work to custom projects.
        </p>
      </SectionReveal>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {SERVICES.map((s, i) => (
          <SectionReveal key={s.title} delay={(i % 3) * 0.08}>
            <div className="group h-full rounded-2xl bg-[#1a1d24] border border-white/10 shadow-[0_8px_30px_-16px_rgba(0,0,0,0.12)] p-6 sm:p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-18px_rgba(0,0,0,0.22)]">
              <span className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${TONES[i % 2]}`}>
                <s.Icon size={22} />
              </span>
              <h3 className="mt-5 font-heading font-bold text-lg text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-[#9aa1ac] leading-relaxed">{s.desc}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}