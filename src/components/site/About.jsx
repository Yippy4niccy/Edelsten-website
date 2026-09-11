import { Check } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { Image } from "@/components/ui/image";

const TEAM_IMG = "/media/edelsten-team-centered-v6.jpg";

const POINTS = [
  { title: "All insurers accepted", desc: "We deal directly with your insurance company from start to finish." },
  { title: "Know your rights", desc: "We'll explain your options so you get a quality repair, not just the cheapest one." },
  { title: "Free, no-obligation quotes", desc: "Every job's different — come in and we'll assess it properly." },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
      <SectionReveal>
        <div className="rounded-3xl bg-ink text-white overflow-hidden border border-white/10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-14">
            <div>
              <p className="text-sm font-semibold text-brand uppercase tracking-wider">About Edelsten</p>
              <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl leading-tight">
                Had an accident? We'll make it simple.
              </h2>
              <p className="mt-5 text-base text-white/70 leading-relaxed">
                Born and bred on the Gold Coast, Zac opened Edelsten Paint &amp; Panel on a simple idea:
                honest advice, quality workmanship, and a repair process that doesn't add to your stress.
                Whether you're going through insurance or paying privately, we'll walk you through your
                options and liaise directly with your insurer to keep things moving.
              </p>

              <div className="mt-8 space-y-4">
                {POINTS.map((p) => (
                  <div key={p.title} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{p.title}</p>
                      <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={TEAM_IMG}
                  alt="The Edelsten Auto Group team"
                  fittingType="fit"
                  className="h-full w-full"
                />
              </div>
              <div className="mt-3 rounded-xl bg-[#1a1d24] px-4 py-3 border border-white/10">
                <p className="font-heading font-bold text-white text-sm">The Edelsten team</p>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}