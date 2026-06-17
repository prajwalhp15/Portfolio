import { motion } from "framer-motion";
import { Users, Layout, ShieldCheck } from "lucide-react";

const Leadership = () => {
  const roles = [
    {
      title: "IEEE Student Chair",
      organization: "PESITM",
      period: "2025 – Present",
      description:
        "Leading student initiatives, workshops, technical events, and professional development activities for the student branch.",
      icon: Users,
    },
    {
      title: "Social Media Head",
      organization: "AIML Department, PESITM",
      period: "2025 – Present",
      description:
        "Managing departmental branding, communication strategy, and student engagement initiatives through digital channels.",
      icon: Layout,
    },
    {
      title: "Forum Coordinator",
      organization: "AIML Department, PESITM",
      period: "2024 – 2025",
      description:
        "Organized student events, technical hackathons, guest lectures, and community engagement programs.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="leadership"
      className="py-32 px-6 md:px-8 bg-[#0D0D0D] border-b border-white/5 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xs font-semibold tracking-wider uppercase mb-3"
            id="leadership-badge"
          >
            Initiatives
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-[#FAFAFA]"
            id="leadership-heading"
          >
            Leadership & Initiatives
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#A1A1AA] text-base mt-2"
          >
            Fostering technical communities, leading committees, and organizing departmental initiatives.
          </motion.p>
        </div>

        {/* Grid of Roles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role, idx) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="premium-card p-8 flex flex-col justify-between"
              id={`leadership-card-${idx}`}
            >
              <div>
                {/* Icon & Timeframe */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded bg-primary/10 border border-primary/20 text-primary">
                    <role.icon className="w-5 h-5" />
                  </div>
                  <span
                    className="text-xs font-semibold text-primary uppercase tracking-wide"
                    id={`leadership-period-${idx}`}
                  >
                    {role.period}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold text-[#FAFAFA] tracking-tight mb-1"
                  id={`leadership-title-${idx}`}
                >
                  {role.title}
                </h3>
                <p
                  className="text-sm font-medium text-[#A1A1AA] mb-4"
                  id={`leadership-org-${idx}`}
                >
                  {role.organization}
                </p>
                <p
                  className="text-[#E5E5E5] text-sm leading-relaxed"
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
