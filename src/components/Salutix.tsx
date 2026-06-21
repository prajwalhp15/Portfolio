import { motion } from "framer-motion";
import { Sparkles, Activity, Layers, Stethoscope, Landmark, Lightbulb } from "lucide-react";

const Salutix = () => {
  const steps = [
    {
      title: "Observation",
      subtitle: "The Core Friction",
      description: "Salutix AI started with a simple observation: healthcare professionals spend significant time navigating fragmented systems, managing records, and handling repetitive administrative tasks. We believe modern AI can reduce this friction and allow professionals to focus more on patient care.",
      icon: Lightbulb,
    },
    {
      title: "Why We Started",
      subtitle: "Simplifying Workflows",
      description: "As engineering students interested in AI and healthcare, we saw an opportunity to build practical solutions that solve everyday operational challenges rather than adding more complexity. Salutix AI was founded to explore how AI can simplify healthcare workflows through thoughtful product design and automation.",
      icon: Sparkles,
    },
    {
      title: "What We're Building",
      subtitle: "Product Focus",
      description: "We are currently developing AI-powered healthcare products focused on: Oral Cancer AI for early screening assistance, modern EHR workflows designed around usability, AI-assisted documentation and knowledge retrieval, and secure healthcare data management systems.",
      icon: Stethoscope,
    },
    {
      title: "Our Approach",
      subtitle: "Continuous Validation",
      description: "We believe successful healthcare products are built through continuous validation, close feedback loops, and a deep understanding of user workflows. Rather than building features in isolation, we focus on understanding real problems and designing solutions that fit naturally into existing processes.",
      icon: Layers,
    },
    {
      title: "Current Focus",
      subtitle: "Validation & Prototypes",
      description: "Our current efforts are centered around product development, technical validation, and refining prototypes through feedback from healthcare professionals and domain experts.",
      icon: Activity,
    },
    {
      title: "What We've Learned",
      subtitle: "Trust Over Complexity",
      description: "Building in healthcare has taught us that trust matters more than features. Good products are not created by adding complexity—they are created by solving one meaningful problem at a time. Every conversation with a potential user teaches us more than months of assumptions.",
      icon: Landmark,
    },
  ];

  return (
    <section
      id="salutix"
      className="py-32 px-6 md:px-8 bg-slate-50/50 border-b border-slate-200/60 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#3b82f605,transparent_50%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xs font-semibold tracking-wider uppercase mb-3"
            id="salutix-badge"
          >
            From Conversations to Products
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900"
            id="salutix-heading"
          >
            Building Salutix AI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-lg mt-3 max-w-2xl leading-relaxed"
          >
            A dedicated founder narrative detailing observations, approaches, and practical lessons from early-stage concept validation.
          </motion.p>
        </div>

        {/* Timeline Journey */}
        <div className="relative border-l border-slate-200 ml-4 md:ml-6 space-y-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-10 group"
              id={`salutix-step-${idx}`}
            >
              {/* Timeline dot */}
              <div className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border flex items-center justify-center bg-white shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                <step.icon className="w-4 h-4 text-primary" />
              </div>

              {/* Card Container */}
              <div className="premium-card p-6 md:p-8 bg-white border border-slate-100 hover:border-slate-200 transition-all duration-300">
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block" id={`salutix-step-sub-${idx}`}>
                  {step.subtitle}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight" id={`salutix-step-title-${idx}`}>
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed" id={`salutix-step-desc-${idx}`}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Salutix;
