import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/prajwal-hp/", id: "hero-social-linkedin" },
    { icon: Github, label: "GitHub", href: "https://github.com/prajwalhp15", id: "hero-social-github" },
    { icon: Mail, label: "Email", href: "mailto:prajwalhp15@gmail.com", id: "hero-social-email" },
  ];


  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col justify-center relative overflow-hidden bg-[#0A0A0A] py-24 px-6 md:px-8 border-b border-white/5"
    >
      {/* Vercel-like clean background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#3b82f60a,transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10 flex-grow flex flex-col justify-center">
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-white/5 bg-white/2 text-xs font-semibold tracking-wider uppercase text-primary mx-auto"
          id="hero-badge"
        >
          AI Engineer • Product Builder
        </motion.div>

        {/* Large Headline */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tight text-[#FAFAFA]"
          id="hero-heading"
        >
          PRAJWAL H P
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-[#E5E5E5] mb-10 max-w-2xl mx-auto leading-relaxed font-normal"
          id="hero-description"
        >
          Building intelligent systems across Healthcare AI, Computer Vision, NLP, LLM Applications, and Full-Stack Development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
          id="hero-actions"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-glow text-white font-semibold px-8 h-12 rounded-lg transition-all"
            asChild
            id="hero-cta-projects"
          >
            <a href="#projects">View Work</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-[#FAFAFA] font-semibold px-8 h-12 rounded-lg transition-all"
            asChild
            id="hero-cta-resume"
          >
            <a href="#contact">Download Resume</a>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-white/5 font-semibold px-6 h-12 rounded-lg transition-all"
            asChild
            id="hero-cta-contact"
          >
            <a href="#contact">Contact</a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center items-center gap-6"
          id="hero-socials"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
              aria-label={link.label}
              id={link.id}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default Hero;
