import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Salutix from "@/components/Salutix";
import ClientWork from "@/components/ClientWork";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50/20 text-slate-800 font-sans antialiased">
      <Hero />
      <Products />
      <Salutix />
      <ClientWork />
      <Experience />
      <Projects />
      <Leadership />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
