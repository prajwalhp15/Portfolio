import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const ClientWork = () => {
  const clients = [
    {
      title: "Manasa Vet Pharma",
      description:
        "Engineered custom business software and inventory workflow solutions designed to improve day-to-day operational efficiency and automate stock record-keeping.",
      highlights: ["Inventory Automation", "Operational Efficiency", "Workflow Integration"],
    },
    {
      title: "Real Estate Management Platform",
      description:
        "Developed an interactive property visualization and management platform featuring dynamic plot layout mapping, customer engagement tracking, and administrative business workflows.",
      highlights: ["Plot Layout Visualizer", "CRM Workflows", "Interactive Dashboard"],
    },
    {
      title: "Komala Scented Supari",
      description:
        "Built custom digital presence assets and backend software workflows supporting scalable brand visibility, logistics overview, and daily business operations.",
      highlights: ["Brand Visibility Assets", "Operational Workflows", "Order Tracking"],
    },
    {
      title: "Tasty Treats",
      description:
        "Designed and deployed business-focused digital solutions targeting customer engagement optimization and retail billing workflow improvement.",
      highlights: ["Customer Engagement", "Billing Optimization", "Loyalty Workflows"],
    },
  ];

  return (
    <section
      id="client-work"
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
            id="client-work-badge"
          >
            Consulting
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-[#FAFAFA]"
            id="client-work-heading"
          >
            Client Work & Freelance Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#A1A1AA] text-base mt-2"
          >
            Commercial software engineering, workflow consulting, and tailored enterprise solutions.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clients.map((client, idx) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="premium-card p-8 flex flex-col justify-between"
              id={`client-card-${idx}`}
            >
              <div>
                <h3
                  className="text-2xl font-bold text-[#FAFAFA] mb-4 tracking-tight"
                  id={`client-title-${idx}`}
                >
                  {client.title}
                </h3>
                <p
                  className="text-[#E5E5E5] text-sm md:text-base leading-relaxed mb-6"
                  id={`client-desc-${idx}`}
                >
                  {client.description}
                </p>
              </div>

              <div>
                <div className="w-full h-px bg-white/5 mb-6" />
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {client.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-1.5 text-xs text-[#A1A1AA]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientWork;
