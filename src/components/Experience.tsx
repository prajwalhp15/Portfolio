import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Co-Founder & Product Lead",
      company: "Salutix AI",
      period: "2026 – Present",
      bullets: [
        "Co-founding and building Salutix AI with a focus on healthcare technology and AI-powered workflows.",
        "Leading product planning, feature prioritization, and early-stage product development.",
        "Working closely with the team to identify real-world healthcare challenges and translate them into practical software solutions.",
        "Contributing to product design, database architecture, AI integrations, and frontend development.",
        "Building prototypes, validating ideas, and continuously refining products based on feedback and learnings.",
        "Managing day-to-day execution across product, engineering, and business discussions.",
      ],
    },
    {
      role: "AI Engineering Intern",
      company: "Formaculture",
      period: "2025 – Present",
      bullets: [
        "AI Development: Contributing to custom computer vision algorithms and spatial CAD pattern extraction workflows.",
        "Engineering Ownership: Designing spatial heuristics pipelines and deploying localized model inference systems.",
        "Product Implementation: Partnering directly with startup founders to translate CAD layouts into functional automated software features.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-32 px-6 md:px-8 bg-slate-50/50 border-b border-slate-200/60 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#3b82f604,transparent_50%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xs font-semibold tracking-wider uppercase mb-3"
            id="experience-badge"
          >
            History & Roles
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900"
            id="experience-heading"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-lg mt-3 max-w-2xl leading-relaxed"
          >
            Emphasizing startup ownership, customer validation, and end-to-end execution.
          </motion.p>
        </div>

        {/* Experience List */}
        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-10 border-t border-slate-200/60"
              id={`experience-block-${idx}`}
            >
              {/* Left Column: Period & Company */}
              <div className="md:col-span-4 space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider" id={`experience-period-${idx}`}>
                    {exp.period}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-slate-400" />
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight" id={`experience-company-${idx}`}>
                    {exp.company}
                  </h3>
                </div>
              </div>

              {/* Right Column: Role & Achievements */}
              <div className="md:col-span-8 space-y-6">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 tracking-tight" id={`experience-role-${idx}`}>
                    {exp.role}
                  </h4>
                </div>

                <ul className="space-y-3.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-3 text-slate-700 text-xs md:text-sm leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
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
