import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import StatStrip from "@/components/site/StatStrip";
import JobCategories from "@/components/site/JobCategories";
import Services from "@/components/site/Services";
import About from "@/components/site/About";
import Reviews from "@/components/site/Reviews";
import FAQ from "@/components/site/FAQ";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c0e12]">
      <Header />
      <main>
        <Hero />
        <StatStrip />
        <JobCategories />
        <Services />
        <About />
        <Reviews />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}