import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function GalleryLightbox({ cat, onClose }) {
  if (!cat) return null;
  const photos = cat.photos || [];
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl bg-[#1a1d24] p-5 sm:p-7 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1d24]/80 hover:bg-white/5 text-white"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-white pr-10">{cat.label}</h3>
        <p className="mt-1 text-sm text-[#9aa1ac]">
          {photos.length ? "A recent paint & panel repair, start to finish." : `A selection of recent ${cat.label.toLowerCase()} work.`}
        </p>
        {cat.video && (
          <div className="mt-5 rounded-xl overflow-hidden border border-white/10">
            <video className="w-full h-auto" src={cat.video} autoPlay loop muted playsInline />
          </div>
        )}
        {cat.videos?.map((v, i) => (
          <div key={i} className="mt-5 rounded-xl overflow-hidden border border-white/10">
            <video className="w-full h-auto" src={v} autoPlay loop muted playsInline />
          </div>
        ))}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {photos.length
            ? photos.map((p, i) => (
                <figure key={i} className="relative rounded-xl overflow-hidden">
                  <div className="aspect-[4/3] w-full">
                    <Image src={p.src} alt={`${cat.label} — step ${i + 1}`} fittingType="fill" className="h-full w-full" />
                  </div>
                  <figcaption className="absolute top-2 left-2 rounded-full bg-ink/80 px-2.5 py-1 text-[11px] font-semibold text-white">
                    {p.step}
                  </figcaption>
                  <span className="absolute bottom-2 left-2 right-2 text-xs font-medium text-white drop-shadow">
                    {p.caption}
                  </span>
                </figure>
              ))
            : Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-2 text-[#9aa1ac]/70 bg-[#0c0e12]"
                >
                  <span className="text-xs font-medium">Add photo</span>
                </div>
              ))}
        </div>
      </motion.div>
    </div>
  );
}