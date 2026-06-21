import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/prajwal-hp/", id: "hero-social-linkedin" },
    { icon: Github, label: "GitHub", href: "https://github.com/prajwalhp15", id: "hero-social-github" },
    { icon: Mail, label: "Email", href: "mailto:prajwalhp15@gmail.com", id: "hero-social-email" },
  ];

  const badges = [
    "Co-Founder @ Salutix AI",
    "IEEE Student Chair",
    "AI Product Builder",
  ];

  return (
    <section
      id="home"
      className="min-h-[85vh] flex flex-col justify-center relative overflow-hidden bg-white py-32 px-6 md:px-8 border-b border-slate-200/60"
    >
      {/* Premium Apple-like clean background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#3b82f606,transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10 flex-grow flex flex-col justify-center">
        {/* Badges row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10 mx-auto"
          id="hero-badges"
        >
          {badges.map((badge, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-3.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs font-bold tracking-wide text-slate-700 shadow-sm"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Large Name */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-[1.1] tracking-tight text-slate-900 uppercase"
          id="hero-name"
        >
          Prajwal H P
        </motion.h1>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight max-w-3xl mx-auto"
          id="hero-heading"
        >
          Building AI Products for Real-World Problems
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-normal"
          id="hero-subheadline"
        >
          Co-Founder at Salutix AI building AI-powered products across healthcare, education, and business operations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-4 mb-16"
          id="hero-actions"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-glow text-white font-semibold px-8 h-12 rounded-xl shadow-md shadow-primary/10 transition-all"
            asChild
            id="hero-cta-view-products"
          >
            <a href="#products">View Products</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-8 h-12 rounded-xl shadow-sm transition-all"
            asChild
            id="hero-cta-resume"
          >
            <a href="#contact">Download Resume</a>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-slate-500 hover:text-slate-900 hover:bg-slate-50 font-semibold px-6 h-12 rounded-xl transition-all"
            asChild
            id="hero-cta-contact"
          >
            <a href="#contact">Contact Me</a>
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
              className="text-slate-400 hover:text-slate-900 transition-colors"
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
