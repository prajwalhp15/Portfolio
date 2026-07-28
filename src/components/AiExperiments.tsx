import React from 'react';
import { motion } from 'framer-motion';
import { AI_EXPERIMENTS } from '@/data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const AiExperiments: React.FC = () => {
  const flagshipAi = AI_EXPERIMENTS[0]; // LuminaCXR
  const secondaryAi = AI_EXPERIMENTS.slice(1);

  return (
    <section className="py-24 px-6 md:px-12 border-b border-[#E2DDD5] bg-[#F3F0E8]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Transition */}
        <div className="space-y-4 border-b border-[#E2DDD5] pb-8">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#FF4D24] font-bold">
            <span className="w-8 h-[1px] bg-[#FF4D24]" />
            <span>04 / TECHNICAL DEEP DIVE</span>
          </div>

          <p className="font-mono text-sm md:text-base font-bold uppercase text-[#FF4D24]">
            BUT WAIT. I DO ACTUALLY KNOW WHAT A NEURAL NETWORK IS.
          </p>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-[#161616]">
            AI / ML <br /> EXPERIMENTS.
          </h2>
        </div>

        {/* Flagship AI Case: LuminaCXR */}
        <motion.article
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FAF8F5] border-2 border-[#161616] p-8 md:p-12 shadow-[8px_8px_0px_0px_#161616] space-y-8"
        >
          <div className="flex flex-wrap justify-between items-start gap-4 border-b border-[#E2DDD5] pb-4 font-mono text-xs font-bold uppercase">
            <span className="px-3 py-1 bg-[#FF4D24] text-white">
              ★ {flagshipAi.selectionBadge}
            </span>
            <span className="text-[#161616]/60">FEATURED AI RESEARCH</span>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#161616]">
              {flagshipAi.title}
            </h3>
            <p className="font-display text-lg text-[#FF4D24] font-bold">
              {flagshipAi.subtitle}
            </p>
          </div>

          <p className="font-body text-base md:text-lg text-[#161616]/85 max-w-4xl leading-relaxed">
            {flagshipAi.description}
          </p>

          {/* Product Thinking & Technical Decision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F3F0E8] p-6 border border-[#E2DDD5] font-body text-xs text-[#161616]/90">
            <div className="space-y-1">
              <span className="font-mono uppercase font-bold text-[#FF4D24]">THE CLINICAL & EXPLAINABILITY PROBLEM:</span>
              <p className="leading-relaxed">AI predictions in healthcare are not useful simply because a model outputs a class label. Clinical trust requires visual explainability showing model activation regions.</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono uppercase font-bold text-[#161616]">TECHNICAL & DESIGN DECISION:</span>
              <p className="leading-relaxed">Integrated Grad-CAM visual activation heatmaps overlaying DenseNet/ResNet feature maps to explain pathology focus regions for radiologists.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-[#E2DDD5]">
            {flagshipAi.workflowSteps.map((step, idx) => (
              <div key={idx} className="bg-[#F3F0E8] p-4 border border-[#E2DDD5] space-y-1 font-mono text-xs">
                <span className="text-[#FF4D24] font-bold">STEP 0{idx + 1}</span>
                <p className="text-[#161616] font-semibold">{step}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-between items-center gap-4 pt-2">
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {flagshipAi.technology.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-[#161616] text-[#F3F0E8]">
                  {tech}
                </span>
              ))}
            </div>
            {/* Dynamic Actions */}
            {flagshipAi.links && Object.keys(flagshipAi.links).length > 0 && (
              <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase">
                {flagshipAi.links.live && (
                  <a
                    href={flagshipAi.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#161616] text-[#F3F0E8] hover:bg-[#FF4D24] hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>VIEW LIVE</span> <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {flagshipAi.links.github && (
                  <a
                    href={flagshipAi.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-[#161616] text-[#161616] hover:bg-[#161616] hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>GITHUB</span> <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.article>

        {/* Secondary AI Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {secondaryAi.map((exp) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#FAF8F5] border-2 border-[#161616] p-6 shadow-[6px_6px_0px_0px_#161616] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-[#E2DDD5] pb-3 font-mono text-xs font-bold">
                  <span className="text-[#FF4D24]">{exp.number} / {exp.status}</span>
                </div>

                <h3 className="font-display text-xl font-black uppercase tracking-tight text-[#161616]">
                  {exp.title}
                </h3>
                <p className="font-body text-xs text-[#FF4D24] font-semibold">
                  {exp.subtitle}
                </p>
                <p className="font-body text-xs text-[#161616]/80 leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2DDD5] space-y-3">
                <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                  {exp.technology.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-[#F3F0E8] border border-[#161616]/20 text-[#161616]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Dynamic Actions */}
                {exp.links?.github && (
                  <a
                    href={exp.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-bold px-3 py-1.5 border border-[#161616] text-[#161616] hover:bg-[#161616] hover:text-white transition-colors flex items-center justify-center gap-1 w-full"
                  >
                    <span>GITHUB</span> <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
