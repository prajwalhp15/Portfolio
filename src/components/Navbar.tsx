import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_PROFILE } from '@/data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { label: "WORK", href: "#work", external: false },
    { label: "PROCESS", href: "#process", external: false },
    { label: "ABOUT", href: "#about", external: false },
    { label: "JOURNEY", href: "#journey", external: false },
    { label: "RESUME ↗", href: PORTFOLIO_PROFILE.links.resume, external: true },
    { label: "SAY HI ↗", href: `mailto:${PORTFOLIO_PROFILE.links.email}`, external: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F3F0E8]/90 backdrop-blur-md border-b border-[#E2DDD5] transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center select-none">
        {/* Brand Mark */}
        <a href="#" className="flex items-center gap-1 group">
          <span className="font-display font-black text-2xl tracking-tighter text-[#161616]">
            PH<span className="text-[#FF4D24]">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider uppercase font-semibold text-[#161616]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="editorial-underline py-1 text-[#161616]/80 hover:text-[#161616] transition-colors flex items-center gap-0.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-[#161616] hover:text-[#FF4D24] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#F3F0E8] border-b border-[#E2DDD5] px-6 py-6"
          >
            <div className="flex flex-col gap-4 font-mono text-sm uppercase tracking-wider font-bold">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="py-2 border-b border-[#E2DDD5]/60 text-[#161616] flex justify-between items-center"
                >
                  <span>{link.label}</span>
                  {link.external && <ArrowUpRight className="w-4 h-4 text-[#FF4D24]" />}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
