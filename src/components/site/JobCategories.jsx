import { useState } from "react";
import { motion } from "framer-motion";
import { Wrench, PaintBucket, Lightbulb, SprayCan, ShieldCheck, Sun, Sparkles } from "lucide-react";
import SectionReveal from "./SectionReveal";
import GalleryLightbox from "./GalleryLightbox";

const PANEL_PHOTOS = [
  { src: "/media/panel-step-1-damage-assessed.jpg", step: "1 / 5", caption: "Damage assessed" },
  { src: "/media/panel-step-2-prepped-filled.jpg", step: "2 / 5", caption: "Panel prepped & filled" },
  { src: "/media/panel-step-3-masked-primed.jpg", step: "3 / 5", caption: "Masked & primed" },
  { src: "/media/panel-step-4-primer-sanded.jpg", step: "4 / 5", caption: "Primer sanded ready" },
  { src: "/media/panel-step-5-finished.jpg", step: "5 / 5", caption: "Finished - like new" },
];

const CATS = [
  { id: "smash", label: "Smash Repair", Icon: Wrench, photos: [], videos: [
    "/media/smash-1.mp4",
    "/media/smash-2.mp4",
    "/media/smash-3.mp4",
    "/media/smash-4.mp4"
  ] },
  { id: "paint-panel", label: "Paint and Panel", Icon: PaintBucket, photos: PANEL_PHOTOS },
  { id: "headlights", label: "Headlight and Rim Restoration", Icon: Lightbulb, photos: [], videos: [
    "/media/headlights-repair.mp4",
    "/media/rim-paint-black-beauty.mp4"
  ] },
  { id: "respray", label: "Full Respray", Icon: SprayCan, photos: [], video: "/media/respray-jag.mp4" },
  { id: "buffing", label: "Buffing & Ceramic Coating", Icon: Sparkles, photos: [], video: "/media/buffing-ceramic.mp4" },
  { id: "sun", label: "Sun Damage", Icon: Sun, photos: [], video: "/media/sun-damage-f250.mp4" },
];

export default function JobCategories() {
  const [active, setActive] = useState(null);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
      <SectionReveal className="text-center max-w-2xl mx-auto">
        <p className="text-sm font-semibold text-brand uppercase tracking-wider">What we work on</p>
        <h2 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl text-white drop-shadow">
          Pick a job type to see examples
        </h2>
      </SectionReveal>

      <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
        {CATS.map((c, i) => (
          <motion.button
            key={c.id}
            onClick={() => setActive(c)}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="group flex flex-col items-center gap-2.5 rounded-2xl bg-[#1a1d24] border border-white/10 shadow-[0_8px_30px_-16px_rgba(0,0,0,0.15)] p-4 sm:p-5 min-h-[110px]"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              <c.Icon className="group-hover:animate-wiggle" size={22} />
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white text-center leading-tight">
              {c.label}
            </span>
          </motion.button>
        ))}
      </div>

      <GalleryLightbox cat={active} onClose={() => setActive(null)} />
    </section>
  );
}