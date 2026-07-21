import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_PROFILE } from '@/data/portfolioData';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between px-6 md:px-12 pt-12 pb-16 border-b border-[#E2DDD5]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">

        {/* Left Column: Approved Editorial Headline & Actions (Unchanged) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#161616]/70 border border-[#E2DDD5] px-3.5 py-1.5 bg-[#F3F0E8]"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF4D24] animate-pulse" />
            <span>{PORTFOLIO_PROFILE.statusNotice}</span>
          </motion.div>

          {/* Huge Editorial Headline */}
          <div className="space-y-1">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#FF4D24] font-bold"
            >
              AI × PRODUCT × BUILDING
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.95] text-[#161616]"
            >
              HEY, I'M <br />
              <span className="text-[#161616]">PRAJWAL.</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#161616]/90 pt-4 leading-[1.05]"
            >
              I BUILD AT THE INTERSECTION OF <span className="text-[#FF4D24]">AI</span>, <span className="text-[#FF4D24]">PRODUCT</span> & REAL-WORLD PROBLEMS.
            </motion.h2>
          </div>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-body text-base md:text-xl text-[#161616]/75 max-w-2xl leading-relaxed font-normal pt-2"
          >
            "{PORTFOLIO_PROFILE.supportingCopy}"
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs uppercase font-bold tracking-wider"
          >
            <a
              href="#work"
              className="px-8 py-4 bg-[#161616] text-[#F3F0E8] hover:bg-[#FF4D24] hover:text-white transition-all flex items-center gap-2 group"
            >
              <span>VIEW MY WORK</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href={PORTFOLIO_PROFILE.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-[#161616] text-[#161616] hover:bg-[#161616] hover:text-white transition-all flex items-center gap-2"
            >
              <span>RESUME</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: APPROVED MINIMAL EDITORIAL BUILDER CHARACTER POSTER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center select-none"
        >
          <motion.div
            whileHover={{ y: -3 }}
            className="relative w-full max-w-md bg-[#FAF8F5] border-2 border-[#161616] p-6 shadow-[8px_8px_0px_0px_#161616] space-y-4 transition-transform"
          >
            {/* Poster Header */}
            <div className="flex justify-between items-center text-[10px] font-mono text-[#161616]/70 border-b border-[#E2DDD5] pb-2.5 uppercase tracking-wider font-bold">
              <span>FIG. 01 — CURRENTLY BUILDING</span>
              <span className="text-[#FF4D24]">AI × PRODUCT × BUILDING</span>
            </div>

            {/* Central Minimalist Editorial Character Visual Container */}
            <div className="relative h-[380px] bg-[#F3F0E8] border border-[#E2DDD5] flex items-center justify-center p-4 overflow-hidden">
              {/* Character Illustration Asset */}
              <img
                src="/portfolio/hero/builder-character.svg"
                alt="Prajwal — The Builder"
                className="w-full h-full object-contain pointer-events-none drop-shadow-sm"
              />

              {/* Playful Annotation 1: "what if...?" with arrow */}
              <div className="absolute top-6 left-6 font-mono text-[11px] font-bold text-[#FF4D24] italic leading-tight">
                "what if...?"
                <svg className="w-10 h-6 text-[#FF4D24]" viewBox="0 0 40 24" fill="none">
                  <path d="M 5 5 Q 20 20 35 15" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
                  <polygon points="35,15 28,12 30,18" fill="currentColor" />
                </svg>
              </div>

              {/* Playful Annotation 2: "still building." */}
              <div className="absolute bottom-6 right-6 font-mono text-[10px] font-bold text-[#161616] bg-[#FAF8F5] px-2.5 py-1 border border-[#161616] shadow-sm rotate-[-3deg]">
                "still building."
              </div>

              {/* Small Spark Icon Accent */}
              <div className="absolute top-8 right-8 text-[#FF4D24]">
                <Sparkles className="w-4 h-4 animate-spin" />
              </div>
            </div>

            {/* Poster Footer */}
            <div className="flex justify-between items-center text-[10px] font-mono text-[#161616]/60 border-t border-[#E2DDD5] pt-2.5 uppercase tracking-wider font-bold">
              <span>BUILD · TEST · LEARN · SHIP</span>
              <span className="text-[#FF4D24]">● 2026 EDITION</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="max-w-7xl mx-auto w-full pt-8 flex justify-between items-center text-[11px] font-mono uppercase tracking-widest text-[#161616]/50">
        <span>SCROLL TO EXPLORE</span>
        <span>01 // INTRODUCTION</span>
      </div>
    </section>
  );
};
