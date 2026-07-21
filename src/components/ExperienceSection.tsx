import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_TIMELINE } from '@/data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 border-b border-[#E2DDD5] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 border-b border-[#E2DDD5] pb-8">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#FF4D24] font-bold">
            <span className="w-8 h-[1px] bg-[#FF4D24]" />
            <span>05 / INDUSTRY & STARTUP EXPERIENCE</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-[#161616]">
            ENGINEERING & <br /> INDUSTRY EXPOSURE.
          </h2>
        </div>

        {/* Industry Experience Cards */}
        <div className="space-y-12">
          {EXPERIENCE_TIMELINE.map((exp) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#F3F0E8] border-2 border-[#161616] p-8 shadow-[8px_8px_0px_0px_#161616] space-y-6"
            >
              <div className="flex flex-wrap justify-between items-start gap-4 border-b border-[#E2DDD5] pb-4">
                <div>
                  <span className="font-mono text-xs font-bold text-[#FF4D24] block uppercase">
                    {exp.company}
                  </span>
                  <h3 className="font-display text-2xl sm:text-4xl font-black uppercase text-[#161616]">
                    {exp.role}
                  </h3>
                </div>
                <span className="font-mono text-xs font-bold px-3 py-1 bg-[#161616] text-[#F3F0E8]">
                  {exp.period} • {exp.location}
                </span>
              </div>

              <p className="font-body text-base text-[#161616]/85 max-w-3xl leading-relaxed">
                {exp.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E2DDD5] font-body text-sm">
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase font-bold text-[#FF4D24]">
                    KEY CONTRIBUTIONS:
                  </h4>
                  <ul className="space-y-1.5 text-[#161616]/85">
                    {exp.contributions.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#FF4D24] font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase font-bold text-[#161616]/60">
                    KEY LEARNINGS:
                  </h4>
                  <ul className="space-y-1.5 text-[#161616]/85">
                    {exp.learnings.map((l, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#161616] font-bold">•</span>
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
