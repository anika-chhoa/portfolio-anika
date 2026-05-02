import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto">
        <Hero />
        <About />
        <TechStack />
        <Education />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

