import React from 'react';
import { motion } from 'framer-motion';
import { FEATURED_CASE_STUDIES } from '@/data/portfolioData';
import { ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 border-b border-[#E2DDD5] bg-[#F3F0E8]">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="space-y-4 border-b border-[#E2DDD5] pb-8">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#FF4D24] font-bold">
            <span className="w-8 h-[1px] bg-[#FF4D24]" />
            <span>02 / FEATURED WORK</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-[#161616]">
            SELECTED <br /> WORK.
          </h2>

          <p className="font-body text-base md:text-xl text-[#161616]/70 max-w-xl">
            "A few things that taught me more than the tutorials did."
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-24">
          {FEATURED_CASE_STUDIES.map((study) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#FAF8F5] border-2 border-[#161616] p-8 md:p-12 shadow-[8px_8px_0px_0px_#161616] space-y-10"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-wrap justify-between items-start gap-4 border-b border-[#E2DDD5] pb-6 font-mono text-xs font-bold uppercase tracking-wider">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-[#161616] text-[#F3F0E8] font-mono">
                    {study.number} / {study.category}
                  </span>
                  <span className="px-3 py-1 border border-[#161616] text-[#FF4D24]">
                    ● {study.status}
                  </span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-3">
                <h3 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#161616]">
                  {study.title}
                </h3>
                <p className="font-display text-lg sm:text-2xl font-bold text-[#FF4D24]">
                  "{study.tagline}"
                </p>
                <p className="font-body text-base text-[#161616]/75 max-w-3xl leading-relaxed">
                  {study.subtitle}
                </p>
              </div>

              {/* Problem & Users Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-b border-[#E2DDD5] py-8">
                <div className="md:col-span-6 space-y-3">
                  <h4 className="font-mono text-xs uppercase font-bold tracking-widest text-[#FF4D24]">
                    01 — USER PROBLEM
                  </h4>
                  <p className="font-body text-sm md:text-base text-[#161616]/90 leading-relaxed bg-[#F3F0E8] p-5 border border-[#E2DDD5]">
                    {study.problem}
                  </p>
                </div>

                <div className="md:col-span-6 space-y-3">
                  <h4 className="font-mono text-xs uppercase font-bold tracking-widest text-[#FF4D24]">
                    02 — TARGET USERS
                  </h4>
                  <p className="font-body text-sm md:text-base text-[#161616]/90 leading-relaxed bg-[#F3F0E8] p-5 border border-[#E2DDD5]">
                    {study.users}
                  </p>
                </div>
              </div>

              {/* Product Thinking & Decisions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase font-bold tracking-widest text-[#161616]/60">
                    03 — PRODUCT THINKING
                  </h4>
                  <ul className="space-y-2 font-body text-sm text-[#161616]/85">
                    {study.productThinking.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#FF4D24] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase font-bold tracking-widest text-[#161616]/60">
                    04 — PRODUCT DECISIONS & TRADE-OFFS
                  </h4>
                  <ul className="space-y-2 font-body text-sm text-[#161616]/85">
                    {study.productDecisions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-[#FF4D24] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* System Technology Tags & Dynamic Links */}
              <div className="pt-6 border-t border-[#E2DDD5] flex flex-wrap justify-between items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs px-3 py-1 bg-[#F3F0E8] border border-[#161616]/20 text-[#161616]/80">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Dynamic Actions */}
                <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase">
                  {study.links?.live && (
                    <a
                      href={study.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#161616] text-[#F3F0E8] hover:bg-[#FF4D24] hover:text-white transition-colors flex items-center gap-1"
                    >
                      <span>VIEW LIVE</span> <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {study.links?.demo && (
                    <a
                      href={study.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#161616] text-[#F3F0E8] hover:bg-[#FF4D24] hover:text-white transition-colors flex items-center gap-1"
                    >
                      <span>VIEW DEMO</span> <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {study.links?.github && (
                    <a
                      href={study.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-[#161616] text-[#161616] hover:bg-[#161616] hover:text-white transition-colors flex items-center gap-1"
                    >
                      <span>GITHUB</span> <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
