import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_PROFILE } from '@/data/portfolioData';
import { Mail, Linkedin, Github, FileText, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#161616] text-[#F3F0E8]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-6 border-b border-[#333333] pb-12">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#FF4D24] font-bold">
            <span className="w-8 h-[1px] bg-[#FF4D24]" />
            <span>08 / GET IN TOUCH</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-[#F3F0E8] leading-[0.95]">
            HAVE A PROBLEM <br />
            WORTH BUILDING <br />
            AROUND? <br />
            <a
              href={`mailto:${PORTFOLIO_PROFILE.links.email}`}
              className="text-[#FF4D24] hover:underline inline-flex items-center gap-2"
            >
              LET'S TALK. <ArrowUpRight className="w-10 h-10 sm:w-16 sm:h-16" />
            </a>
          </h2>

          <p className="font-body text-base md:text-xl text-[#F3F0E8]/70 max-w-2xl leading-relaxed">
            I'm currently exploring opportunities across AI, Product, and technology. If you're building something interesting, I'd love to hear about it.
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 font-mono text-xs uppercase font-bold tracking-wider">
          <a
            href={`mailto:${PORTFOLIO_PROFILE.links.email}`}
            className="p-6 border border-[#333333] hover:border-[#FF4D24] hover:text-[#FF4D24] transition-all flex flex-col justify-between h-36 bg-[#1f1f1f]"
          >
            <div className="flex justify-between items-start">
              <span>EMAIL</span>
              <Mail className="w-5 h-5 text-[#FF4D24]" />
            </div>
            <span className="lowercase text-sm text-[#F3F0E8]">{PORTFOLIO_PROFILE.links.email}</span>
          </a>

          <a
            href={PORTFOLIO_PROFILE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-[#333333] hover:border-[#FF4D24] hover:text-[#FF4D24] transition-all flex flex-col justify-between h-36 bg-[#1f1f1f]"
          >
            <div className="flex justify-between items-start">
              <span>LINKEDIN</span>
              <Linkedin className="w-5 h-5 text-[#FF4D24]" />
            </div>
            <span className="text-sm text-[#F3F0E8]">prajwal-hp ↗</span>
          </a>

          <a
            href={PORTFOLIO_PROFILE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-[#333333] hover:border-[#FF4D24] hover:text-[#FF4D24] transition-all flex flex-col justify-between h-36 bg-[#1f1f1f]"
          >
            <div className="flex justify-between items-start">
              <span>GITHUB</span>
              <Github className="w-5 h-5 text-[#FF4D24]" />
            </div>
            <span className="text-sm text-[#F3F0E8]">prajwalhp15 ↗</span>
          </a>

          <a
            href={PORTFOLIO_PROFILE.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-[#333333] hover:border-[#FF4D24] hover:text-[#FF4D24] transition-all flex flex-col justify-between h-36 bg-[#1f1f1f]"
          >
            <div className="flex justify-between items-start">
              <span>RESUME</span>
              <FileText className="w-5 h-5 text-[#FF4D24]" />
            </div>
            <span className="text-sm text-[#F3F0E8]">DOWNLOAD RESUME ↗</span>
          </a>
        </div>

        {/* Editorial Footer */}
        <div className="pt-16 border-t border-[#333333] flex flex-wrap justify-between items-center gap-4 font-mono text-xs text-[#F3F0E8]/50 uppercase">
          <div>PRAJWAL H P — AI × PRODUCT × BUILDING</div>
          <div>Designed with precision & iterations © 2026</div>
        </div>
      </div>
    </section>
  );
};
