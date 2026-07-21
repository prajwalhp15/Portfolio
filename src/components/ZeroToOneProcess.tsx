import React from 'react';
import { motion } from 'framer-motion';

export const ZeroToOneProcess: React.FC = () => {
  return (
    <section id="process" className="py-24 px-6 md:px-12 border-b border-[#E2DDD5] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="space-y-4 border-b border-[#E2DDD5] pb-8">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#FF4D24] font-bold">
            <span className="w-8 h-[1px] bg-[#FF4D24]" />
            <span>06 / FROM "WHAT IF?" TO "LET'S TRY IT."</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-[#161616]">
            FROM 0 → 1.
          </h2>

          <p className="font-body text-base md:text-xl text-[#161616]/75 max-w-2xl font-normal leading-relaxed">
            "Some things don't start with a specification. They start with a problem, a question, or something worth exploring."
          </p>
        </div>

        {/* TWO EDITORIAL CHAPTERS */}

        {/* CHAPTER 01: PRODUCT 0→1 — CAREERPILOT AI */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F3F0E8] border-2 border-[#161616] p-8 md:p-12 shadow-[8px_8px_0px_0px_#161616] space-y-8"
        >
          {/* Chapter Label */}
          <div className="flex flex-wrap justify-between items-center gap-4 border-b border-[#E2DDD5] pb-4 font-mono text-xs font-bold uppercase">
            <span className="px-3 py-1 bg-[#161616] text-[#F3F0E8]">
              01 / PRODUCT 0→1
            </span>
            <span className="text-[#FF4D24]">CAREERPILOT AI</span>
          </div>

          {/* Big Editorial Question */}
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-[#FF4D24] uppercase tracking-widest block">
              THE CORE PRODUCT QUESTION
            </span>
            <h3 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#161616] leading-[1.05]">
              MORE INFORMATION? <br />
              <span className="text-[#FF4D24]">OR BETTER DIRECTION?</span>
            </h3>
          </div>

          {/* Editorial Storyline */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-b border-[#E2DDD5] py-8 font-body">
            <div className="md:col-span-6 space-y-2">
              <span className="font-mono text-xs uppercase font-bold text-[#FF4D24] block">
                STARTING POINT & UNMET NEED
              </span>
              <p className="text-sm md:text-base text-[#161616]/85 leading-relaxed bg-[#FAF8F5] p-5 border border-[#E2DDD5]">
                Engineering graduates and early-career developers have access to countless tutorials, courses, and certifications, yet constantly ask: <em>'What should I personally learn next?'</em> Information overload leads to execution paralysis.
              </p>
            </div>

            <div className="md:col-span-6 space-y-2">
              <span className="font-mono text-xs uppercase font-bold text-[#161616]/60 block">
                PRODUCT DECISION & APPROACH
              </span>
              <p className="text-sm md:text-base text-[#161616]/85 leading-relaxed bg-[#FAF8F5] p-5 border border-[#E2DDD5]">
                Instead of serving more static tutorial lists, CareerPilot AI was conceptualized around career assessment, personalized roadmapping, and skill-gap understanding.
              </p>
            </div>
          </div>

          {/* 0->1 Progression Summary */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs font-bold text-[#161616]/80 pt-2">
            <span className="px-2.5 py-1 bg-[#FAF8F5] border border-[#161616]/30">PROBLEM</span>
            <span>→</span>
            <span className="px-2.5 py-1 bg-[#FAF8F5] border border-[#161616]/30">QUESTION</span>
            <span>→</span>
            <span className="px-2.5 py-1 bg-[#FAF8F5] border border-[#161616]/30">DECISION</span>
            <span>→</span>
            <span className="px-2.5 py-1 bg-[#FF4D24] text-white">BUILD CAREERPILOT AI</span>
          </div>
        </motion.article>

        {/* CHAPTER 02: AI + RESEARCH 0→1 — LUMINACXR */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F3F0E8] border-2 border-[#161616] p-8 md:p-12 shadow-[8px_8px_0px_0px_#161616] space-y-8"
        >
          {/* Chapter Label & Recognition Stamp */}
          <div className="flex flex-wrap justify-between items-center gap-4 border-b border-[#E2DDD5] pb-4 font-mono text-xs font-bold uppercase">
            <span className="px-3 py-1 bg-[#FF4D24] text-white">
              02 / AI + RESEARCH 0→1
            </span>
            <span className="text-[#161616] border border-[#161616] px-3 py-1 bg-[#FAF8F5]">
              ★ AICTE YUKTI 2025 RECOGNITION
            </span>
          </div>

          {/* Big Editorial Question */}
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-[#FF4D24] uppercase tracking-widest block">
              THE RESEARCH & EXPLAINABILITY QUESTION
            </span>
            <h3 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#161616] leading-[1.05]">
              CAN AI SHOW <span className="text-[#FF4D24]">WHY IT THINKS</span> WHAT IT THINKS?
            </h3>
          </div>

          {/* Editorial Storyline */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-b border-[#E2DDD5] py-8 font-body">
            <div className="md:col-span-6 space-y-2">
              <span className="font-mono text-xs uppercase font-bold text-[#FF4D24] block">
                TECHNICAL EXPLORATION
              </span>
              <p className="text-sm md:text-base text-[#161616]/85 leading-relaxed bg-[#FAF8F5] p-5 border border-[#E2DDD5]">
                Explored deep learning architectures (DenseNet, ResNet, EfficientNet) trained on chest X-ray pathology classification datasets using PyTorch.
              </p>
            </div>

            <div className="md:col-span-6 space-y-2">
              <span className="font-mono text-xs uppercase font-bold text-[#161616]/60 block">
                EXPLAINABILITY DECISION (GRAD-CAM)
              </span>
              <p className="text-sm md:text-base text-[#161616]/85 leading-relaxed bg-[#FAF8F5] p-5 border border-[#E2DDD5]">
                Raw prediction confidence scores are insufficient for medical assistance. Grad-CAM visual activation heatmaps were integrated to explain exact focus regions.
              </p>
            </div>
          </div>

          {/* 0->1 Progression Summary */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs font-bold text-[#161616]/80 pt-2">
            <span className="px-2.5 py-1 bg-[#FAF8F5] border border-[#161616]/30">QUESTION</span>
            <span>→</span>
            <span className="px-2.5 py-1 bg-[#FAF8F5] border border-[#161616]/30">RESEARCH</span>
            <span>→</span>
            <span className="px-2.5 py-1 bg-[#FAF8F5] border border-[#161616]/30">EXPERIMENT</span>
            <span>→</span>
            <span className="px-2.5 py-1 bg-[#FF4D24] text-white">GRAD-CAM PROTOTYPE</span>
          </div>
        </motion.article>

      </div>
    </section>
  );
};
