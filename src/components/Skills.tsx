import { motion } from "framer-motion";
import { Brain, Server, Monitor, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        "Python",
        "PyTorch",
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "Computer Vision",
        "Reinforcement Learning",
        "RAG Systems",
      ],
    },
    {
      title: "Backend & APIs",
      icon: Server,
      skills: ["FastAPI", "Flask", "REST APIs"],
    },
    {
      title: "Frontend Development",
      icon: Monitor,
      skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "SQL"],
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      skills: [
        "OpenCV",
        "FAISS",
        "Git",
        "Ollama",
        "Power BI",
        "Tableau",
        "Jupyter Notebook",
        "Google Colab",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-32 px-6 md:px-8 bg-[#0A0A0A] border-b border-white/5 relative overflow-hidden"
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
            id="skills-badge"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-[#FAFAFA]"
            id="skills-heading"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#A1A1AA] text-base mt-2"
          >
            A breakdown of frameworks, programming libraries, databases, and engineering methodologies.
          </motion.p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="premium-card p-8 flex flex-col justify-between"
              id={`skills-card-${idx}`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded bg-primary/10 border border-primary/20 text-primary">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#FAFAFA] tracking-tight"
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
                      className="px-3 py-1.5 text-xs font-semibold rounded bg-white/5 border border-white/5 text-[#E5E5E5] hover:border-primary/25 transition-all duration-200"
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
