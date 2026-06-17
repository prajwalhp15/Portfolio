import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Products from "@/components/Products";
import ClientWork from "@/components/ClientWork";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Products />
      <ClientWork />
      <Projects />
      <Leadership />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
