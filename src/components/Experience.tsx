import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Product Lead",
      company: "Salutix AI (Early-Stage Product Initiative)",
      period: "2026 – Present",
      outcomes: [
        "Leading product planning and development activities for healthcare and education sectors.",
        "Coordinating key initiatives, specifically the Oral Cancer AI and Healthcare EHR platforms.",
        "Supporting core technical architecture design, system validation, and go-to-market product strategy.",
        "Contributing to AI-driven software architectures and executing enterprise-grade client projects.",
      ],
    },
    {
      role: "AI Engineering Intern",
      company: "Formaculture",
      period: "2025 – Present",
      outcomes: [
        "Developed custom, production-grade AI models for industrial automation and architectural design analysis.",
        "Built CAD-based data pipelines and pattern extraction algorithms to process complex spatial layouts.",
        "Contributed to core machine learning workflow research and solved complex spatial indexing challenges.",
        "Collaborated directly with founders to conceptualize and build automation-focused AI software features.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-32 px-6 md:px-8 bg-[#0D0D0D] border-b border-white/5 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xs font-semibold tracking-wider uppercase mb-3"
            id="experience-badge"
          >
            History
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-[#FAFAFA]"
            id="experience-heading"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#A1A1AA] text-base mt-2"
          >
            Engineering systems, managing product life-cycles, and contributing to core AI research.
          </motion.p>
        </div>

        {/* Experience List */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 pt-8 border-t border-white/5"
              id={`experience-block-${idx}`}
            >
              {/* Left Column: Period & Company */}
              <div className="md:col-span-4 flex flex-col justify-start">
                <span className="text-sm text-primary font-semibold tracking-wide uppercase mb-1" id={`experience-period-${idx}`}>
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-[#FAFAFA]" id={`experience-company-${idx}`}>
                  {exp.company}
                </h3>
              </div>

              {/* Right Column: Role & Achievements */}
              <div className="md:col-span-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1.5 rounded bg-primary/10 border border-primary/20">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#FAFAFA]" id={`experience-role-${idx}`}>
                    {exp.role}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {exp.outcomes.map((outcome, oIdx) => (
                    <li
                      key={oIdx}
                      className="flex items-start gap-3 text-[#E5E5E5] text-base leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
