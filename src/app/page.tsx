import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import ResultsCarousel from "@/components/ResultsCarousel";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-black overflow-hidden">
      <Hero />
      <About />
      <Features />
      <ResultsCarousel />
      <FAQ />
      <Contact />
    </main>
  );
}
