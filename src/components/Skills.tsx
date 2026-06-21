import { motion } from "framer-motion";
import { Brain, Compass, Code2, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        "PyTorch",
        "TensorFlow",
        "Computer Vision",
        "NLP",
        "Deep Learning",
        "Reinforcement Learning",
        "OpenCV",
      ],
    },
    {
      title: "Product & Strategy",
      icon: Compass,
      skills: [
        "Product Discovery",
        "User Research",
        "Roadmapping",
        "MVP Design",
        "Go-To-Market Planning",
        "Customer Validation",
      ],
    },
    {
      title: "Engineering",
      icon: Code2,
      skills: [
        "React",
        "FastAPI",
        "PostgreSQL",
        "Supabase",
        "TypeScript",
        "Node.js",
        "SQLite",
      ],
    },
    {
      title: "AI Infrastructure",
      icon: Server,
      skills: [
        "RAG Systems",
        "FAISS",
        "Ollama",
        "Vector Databases",
        "API Integration",
        "Docker Containment",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-32 px-6 md:px-8 bg-white border-b border-slate-200/60 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,#3b82f604,transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xs font-semibold tracking-wider uppercase mb-3"
            id="skills-badge"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900"
            id="skills-heading"
          >
            Skills & Core Competencies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-lg mt-3 max-w-2xl leading-relaxed"
          >
            Structured capability cards covering technical, infrastructure, and strategic product disciplines.
          </motion.p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="premium-card p-8 flex flex-col justify-between bg-white border border-slate-100 shadow-sm hover:border-slate-200"
              id={`skills-card-${idx}`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3
                    className="text-xl font-bold text-slate-900 tracking-tight"
                    id={`skills-cat-title-${idx}`}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 hover:border-primary/30 transition-all duration-200"
                    >
                      {skill}
                    </span>
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

export default Skills;
