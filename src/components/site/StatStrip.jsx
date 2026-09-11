import SectionReveal from "./SectionReveal";

const STATS = [
  { value: "200+", label: "5★ Google reviews" },
  { value: "✓", label: "Insurance approved repairer" },
  { value: "✓", label: "High quality collision repairs" },
  { value: "GC", label: "Owned & operated" },
];

export default function StatStrip() {
  return (
    <section className="relative z-20 mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionReveal className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl bg-[#1a1d24] border border-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] px-5 py-6 sm:py-7 text-center"
          >
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white">{s.value}</div>
            <div className="mt-1 text-xs sm:text-sm text-[#9aa1ac] font-medium">{s.label}</div>
          </div>
        ))}
      </SectionReveal>
    </section>
  );
}