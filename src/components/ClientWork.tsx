import React from 'react';
import { motion } from 'framer-motion';
import { CLIENT_PROJECTS } from '@/data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const ClientWork: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 border-b border-[#E2DDD5] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Transition Headline */}
        <div className="space-y-4 border-b border-[#E2DDD5] pb-8">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#FF4D24] font-bold">
            <span className="w-8 h-[1px] bg-[#FF4D24]" />
            <span>03 / REAL CLIENT SOFTWARE</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-[#161616]">
            MORE CLIENT <br /> PROBLEMS TURNED <br /> INTO SOFTWARE.
          </h2>

          <p className="font-body text-base md:text-xl text-[#161616]/75 max-w-xl font-normal">
            "Turns out, building for a real client is very different from building for localhost."
          </p>
        </div>

        {/* Client Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLIENT_PROJECTS.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#F3F0E8] border-2 border-[#161616] p-8 shadow-[8px_8px_0px_0px_#161616] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-[#E2DDD5] pb-3 font-mono text-xs font-bold">
                  <span className="px-2.5 py-0.5 bg-[#FF4D24] text-white">
                    {project.status}
                  </span>
                  <span className="text-[#161616]/60">{project.clientType}</span>
                </div>

                <h3 className="font-display text-2xl font-black uppercase tracking-tight text-[#161616]">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-[#FF4D24] font-bold">
                  "{project.subtitle}"
                </p>

                <div className="space-y-3 font-body text-xs text-[#161616]/85">
                  <div className="bg-[#FAF8F5] p-4 border border-[#E2DDD5] space-y-1">
                    <span className="font-mono uppercase font-bold text-[#FF4D24] block">
                      BUSINESS PROBLEM:
                    </span>
                    <p className="leading-relaxed">{project.businessProblem}</p>
                  </div>

                  <div>
                    <span className="font-mono uppercase font-bold text-[#161616] block mb-1">
                      SOLUTION & DELIVERY:
                    </span>
                    <p className="leading-relaxed">{project.solutionDesigned}</p>
                  </div>
                </div>
              </div>

              {/* Dynamic Links & Tags */}
              <div className="pt-4 border-t border-[#E2DDD5] flex flex-wrap justify-between items-center gap-4">
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-[#FAF8F5] border border-[#161616]/20 text-[#161616]/70">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Dynamic Actions */}
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-bold px-4 py-2 bg-[#161616] text-[#F3F0E8] hover:bg-[#FF4D24] hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>VIEW LIVE</span> <ArrowUpRight className="w-3.5 h-3.5" />
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
