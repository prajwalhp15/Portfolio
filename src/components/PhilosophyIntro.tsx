import React from 'react';
import { motion } from 'framer-motion';
import { PHILOSOPHY_INTRO } from '@/data/portfolioData';

export const PhilosophyIntro: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 border-b border-[#E2DDD5] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Index Badge */}
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#FF4D24] font-bold">
          <span className="w-8 h-[1px] bg-[#FF4D24]" />
          <span>01 / PHILOSOPHY & BACKGROUND</span>
        </div>

        {/* Massive Editorial Transition Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2"
        >
          {PHILOSOPHY_INTRO.largeHeadline.map((line, idx) => (
            <h2
              key={idx}
              className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#161616] leading-[0.98]"
            >
              {idx === 1 ? <span className="text-[#FF4D24]">{line}</span> : line}
            </h2>
          ))}
        </motion.div>

        {/* Editorial Story Paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4 border-t border-[#E2DDD5]">
          <div className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-[#161616]/60 font-bold">
            PERSPECTIVE & SHIFT
          </div>

          <div className="md:col-span-8 space-y-6 font-body text-base md:text-xl text-[#161616]/85 leading-relaxed font-normal">
            {PHILOSOPHY_INTRO.storyText.map((paragraph, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
