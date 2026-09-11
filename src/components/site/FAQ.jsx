import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionReveal from "./SectionReveal";

const FAQS = [
  {
    q: "Do you have a set price list?",
    a: "Every repair job is different, so we don't work off a fixed price list. Bring your vehicle in and we'll give you a competitive, no-obligation quote based on the actual work required.",
  },
  {
    q: "How long will my car be with you?",
    a: "It depends on the extent of the repair. We'll give you a realistic timeframe alongside your quote so there are no surprises.",
  },
  {
    q: "Do you take on custom paint projects?",
    a: "Always. From custom colours to full restorations, talk to us about what you're after and we'll let you know what's possible.",
  },
  {
    q: "Can I prep the car myself before you spray it?",
    a: "We'd recommend talking to us first. It's hard for us to warrant our paintwork if we haven't done the prep, and a well-meant DIY attempt can sometimes make the job more expensive to fix. Happy to share advice if you want to give it a go.",
  },
  {
    q: "Can I get a quote outside business hours?",
    a: "Give us a call - we're happy to accommodate quoting outside standard hours where we can.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faqs" className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
      <SectionReveal className="text-center">
        <p className="text-sm font-semibold text-brand uppercase tracking-wider">FAQs</p>
        <h2 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl text-white">
          Frequently asked questions
        </h2>
      </SectionReveal>

      <div className="mt-8 space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <SectionReveal key={i} delay={i * 0.04}>
              <div className="rounded-2xl bg-[#1a1d24] border border-white/10 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.12)] overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                >
                  <span className="font-heading font-semibold text-base sm:text-lg text-white">{f.q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-brand transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 text-sm sm:text-base text-[#9aa1ac] leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          );
        })}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
    </section>
  );
}