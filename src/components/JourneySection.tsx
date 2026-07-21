import React from 'react';
import { motion } from 'framer-motion';
import { LEADERSHIP_ROLES, ACHIEVEMENTS } from '@/data/portfolioData';

export const JourneySection: React.FC = () => {
  const steps = [
    { title: "ENGINEERING", desc: "Foundational computer science & analytical problem solving." },
    { title: "DISCOVERED AI", desc: "Machine learning, deep learning, computer vision & neural networks." },
    { title: "PROJECTS + HACKATHONS", desc: "Building, testing, hackathons, and competing with student teams." },
    { title: "INDUSTRY EXPOSURE", desc: "AI Engineering internship @ Formaculture & startup workflows." },
    { title: "REAL CLIENT SOFTWARE", desc: "Building software for real client businesses, operations & GST billing." },
    { title: "0→1 PRODUCT WORK", desc: "Clinical validation, healthcare exploration & product roadmaps." },
    { title: "MORE INTERESTED IN USERS & PRODUCT", desc: "Understanding why something should be built, trade-offs & MVP scoping." },
    { title: "YOU ARE HERE — 2026", desc: "Exploring early-career opportunities in AI & Product." }
  ];

  return (
    <section id="journey" className="py-24 px-6 md:px-12 border-b border-[#E2DDD5] bg-[#F3F0E8]">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="space-y-4 border-b border-[#E2DDD5] pb-8">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#FF4D24] font-bold">
            <span className="w-8 h-[1px] bg-[#FF4D24]" />
            <span>06 / PROGRESSION STORY</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-[#161616]">
            JOURNEY & <br /> RECOGNITIONS.
          </h2>
        </div>

        {/* Journey Steps Visual Flow */}
        <div className="space-y-6">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF4D24]">
            CAREER TRAJECTORY
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-5 border-2 border-[#161616] space-y-2 ${
                  idx === steps.length - 1 ? 'bg-[#FF4D24] text-white' : 'bg-[#FAF8F5] text-[#161616]'
                }`}
              >
                <div className="flex justify-between items-center font-mono text-xs font-bold">
                  <span>0{idx + 1}</span>
                  {idx === steps.length - 1 && <span>NOW</span>}
                </div>
                <h4 className="font-display font-black text-sm uppercase tracking-tight">
                  {step.title}
                </h4>
                <p className={`font-body text-xs leading-relaxed ${idx === steps.length - 1 ? 'text-white/90' : 'text-[#161616]/75'}`}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Narrative Summary Quote */}
        <div className="p-8 bg-[#FAF8F5] border-2 border-[#161616] shadow-[8px_8px_0px_0px_#161616] space-y-4">
          <p className="font-display text-2xl sm:text-4xl font-bold text-[#161616] uppercase leading-tight">
            "AI GOT ME INTERESTED IN TECHNOLOGY. <br />
            BUILDING TAUGHT ME ENGINEERING. <br />
            <span className="text-[#FF4D24]">USERS MADE ME INTERESTED IN PRODUCT."</span>
          </p>
          <p className="font-body text-sm text-[#161616]/70">
            Looking for opportunities where I can learn fast, build useful products, and work with strong teams.
          </p>
        </div>

        {/* Leadership & Recognitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#E2DDD5]">
          <div className="space-y-6">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#161616]">
              LEADERSHIP
            </h3>
            <div className="space-y-4">
              {LEADERSHIP_ROLES.map((role) => (
                <div key={role.id} className="bg-[#FAF8F5] p-5 border border-[#E2DDD5] space-y-2">
                  <div className="flex justify-between items-start font-mono text-xs font-bold">
                    <span className="text-[#FF4D24]">{role.role} — {role.organization}</span>
                    <span className="text-[#161616]/60">{role.period}</span>
                  </div>
                  <p className="font-body text-xs text-[#161616]/80">{role.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#161616]">
              RECOGNITIONS
            </h3>
            <div className="space-y-4">
              {ACHIEVEMENTS.map((ach) => (
                <div key={ach.id} className="bg-[#FAF8F5] p-5 border border-[#E2DDD5] space-y-2">
                  <div className="flex justify-between items-start font-mono text-xs font-bold">
                    <span className="text-[#161616]">{ach.title}</span>
                    <span className="text-[#FF4D24]">{ach.date}</span>
                  </div>
                  <p className="font-body text-xs text-[#161616]/80">{ach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
