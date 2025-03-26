
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import StatsSection from "@/components/sections/Stats";
import About from "@/components/sections/About";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <StatsSection />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
