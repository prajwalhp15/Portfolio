import { motion } from "framer-motion";
import { Users, Megaphone, Trophy } from "lucide-react";

const Leadership = () => {
  const roles = [
    {
      title: "IEEE Student Chair",
      organization: "PESITM Student Branch",
      period: "2024 – 2026",
      description: "Leading student branch activities, coordinating technical events, fostering industry engagement, and supporting initiatives that encourage learning, innovation, and professional development among students.",
      icon: Users,
    },
    {
      title: "AIML Forum Coordinator",
      organization: "AIML Department, PESITM",
      period: "2024 – 2026",
      description: "Coordinated student-focused technical and cultural initiatives, organized workshops and guest sessions, and supported the planning and execution of departmental events and community activities.",
      icon: Trophy,
    },
  ];

  return (
    <section
      id="leadership"
      className="py-32 px-6 md:px-8 bg-slate-50/50 border-b border-slate-200/60 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#3b82f604,transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xs font-semibold tracking-wider uppercase mb-3"
            id="leadership-badge"
          >
            Ownership & Community
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900"
            id="leadership-heading"
          >
            Leadership Initiatives
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-lg mt-3 max-w-2xl leading-relaxed"
          >
            Empowering technical communities, organizing state-level competitions, and directing student operations.
          </motion.p>
        </div>

        {/* Grid of Roles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, idx) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="premium-card p-8 flex flex-col justify-between bg-white border border-slate-100 shadow-sm hover:border-slate-200"
              id={`leadership-card-${idx}`}
            >
              <div>
                {/* Icon & Timeframe */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    <role.icon className="w-5 h-5" />
                  </div>
                  <span
                    className="text-xs font-bold text-primary uppercase tracking-wider"
                    id={`leadership-period-${idx}`}
                  >
                    {role.period}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold text-slate-900 tracking-tight mb-1"
                  id={`leadership-title-${idx}`}
                >
                  {role.title}
                </h3>
                <p
                  className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4"
                  id={`leadership-org-${idx}`}
                >
                  {role.organization}
                </p>
                <p
                  className="text-slate-600 text-sm md:text-base leading-relaxed"
                  id={`leadership-desc-${idx}`}
                >
                  {role.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
