import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  const skillCategories = [
    { title: "AI / MACHINE LEARNING", items: ["PyTorch", "Computer Vision", "Grad-CAM", "Local RAG", "OpenCV", "NLP", "Scikit-Learn"] },
    { title: "BACKEND & ARCHITECTURE", items: ["FastAPI", "Python", "Node.js", "FAISS", "Ollama", "REST APIs", "Git"] },
    { title: "FRONTEND & UI", items: ["React 18", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Framer Motion", "Vite"] },
    { title: "DATA & STORAGE", items: ["PostgreSQL", "MongoDB", "SQL", "Tableau", "Power BI"] }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 border-b border-[#E2DDD5] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 border-b border-[#E2DDD5] pb-8">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#FF4D24] font-bold">
            <span className="w-8 h-[1px] bg-[#FF4D24]" />
            <span>08 / ABOUT ME</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-[#161616]">
            A LITTLE <br /> MORE HUMAN.
          </h2>
        </div>

        {/* Human Story Paragraph */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 font-mono text-xs uppercase font-bold text-[#FF4D24]">
            PERSONAL PERSPECTIVE
          </div>

          <div className="md:col-span-8 space-y-6 font-body text-base md:text-xl text-[#161616]/85 leading-relaxed">
            <p>
              I'm Prajwal, an engineering graduate who started out fascinated by AI and ended up becoming equally curious about products.
            </p>
            <p>
              I like building things, figuring out why something isn't working, talking through ideas, and turning complicated technical problems into something people can actually use.
            </p>
            <p>
              I'm early in my career, and I'm looking for environments where I can learn quickly, work with strong teams, and build useful things.
            </p>
          </div>
        </div>

        {/* Technical Context Summary */}
        <div className="pt-12 border-t border-[#E2DDD5] space-y-8">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#161616]">
            TECHNICAL FOUNDATION & TOOLS
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="bg-[#F3F0E8] p-6 border-2 border-[#161616] space-y-3">
                <h4 className="font-mono text-xs font-bold text-[#FF4D24] uppercase">
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs text-[#161616]">
                  {cat.items.map((item) => (
                    <span key={item} className="px-2 py-1 bg-[#FAF8F5] border border-[#161616]/20">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
