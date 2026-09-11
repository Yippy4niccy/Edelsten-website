const LOGO_URL = "/media/edelsten-logo-transparent.png";
const HERO_VIDEO = "/media/hero-porsche-oilslick.mp4";
const HERO_POSTER = "/media/hero-poster.png";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-start justify-center overflow-hidden">
      {/* Background video element - swap the <source> src with your spray-booth clip later */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster={HERO_POSTER}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Dark gradient overlay for text readability (fixed so it stays over the video as you scroll) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/70" />

      {/* Logo over video */}
      <div className="relative z-10 mx-auto flex items-center justify-center px-5 sm:px-6 w-full pt-[20vh] sm:pt-[24vh]">
        <img
          src={LOGO_URL}
          alt="Edelsten - Quality Paint and Panel"
          className="w-56 sm:w-64 h-auto mix-blend-screen"
        />
      </div>
    </section>
  );
}