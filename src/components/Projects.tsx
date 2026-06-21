import { motion } from "framer-motion";
import { Github, ExternalLink, AlertTriangle, Cpu, TrendingUp, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      name: "RainWise",
      subtitle: "Rooftop Rainwater Harvesting Feasibility Assessment",
      status: "Live",
      statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      badgeText: "Live",
      problem: "Assessing rainwater harvesting potential on rooftops requires manual, complex calculations, making sustainability audits inaccessible to property owners.",
      approach: "Developed an automated assessment platform that calculates rooftop catchment areas, generates feasibility reports, and evaluates cost-benefit structures.",
      outcome: "Developed for the Smart India Hackathon, delivering automated reports, financial analyses, and sustainability insights.",
      tech: ["React", "Flask", "PostgreSQL", "Chart.js", "Data Analytics"],
      github: "https://github.com/prajwalhp15/Rainwise",
      demo: "https://rainwise-st1z.onrender.com",
      isConfidential: false,
    },
    {
      name: "RAG-Based Document Assistant",
      subtitle: "Citation-Grounded Local LLM Assistant",
      status: "Production Ready",
      statusColor: "bg-blue-50 text-blue-700 border-blue-200",
      badgeText: "Production Ready",
      problem: "Traditional document search systems fail to answer context-specific questions directly and often suffer from hallucinations and lack of privacy.",
      approach: "Built a Retrieval-Augmented Generation assistant using local LLMs via Ollama, FAISS vector database, FastAPI, and a Streamlit user interface.",
      outcome: "Enabled completely offline, citation-grounded document question answering, maintaining strict data privacy for proprietary text files.",
      tech: ["FastAPI", "FAISS", "Streamlit", "Ollama", "Local LLMs", "Python"],
      github: "https://github.com/prajwalhp15/document-qa",
      demo: "",
      isConfidential: false,
    },
    {
      name: "Lumina CXR",
      subtitle: "AI-Powered Chest X-Ray Disease Detection",
      status: "Ethical Clearance Stage",
      statusColor: "bg-amber-50 text-amber-700 border-amber-200",
      badgeText: "SIMS Ethical Clearance",
      problem: "Accurate and fast diagnosis of chest diseases from X-rays remains a bottleneck in medical workflows, often lacking explainability for clinical validation.",
      approach: "Built a deep learning-based detection system using DenseNet, ResNet, and EfficientNet architectures, integrated with Grad-CAM to visualize and explain model focus areas.",
      outcome: "Automated detection of Tuberculosis, Pneumonia, and COVID with explainable visual highlights. Note: Currently undergoing ethical clearance at SIMS Medical College, Shivamogga.",
      tech: ["DenseNet", "ResNet", "EfficientNet", "Grad-CAM Explainability", "PyTorch", "Python"],
      github: "https://github.com/prajwalhp15",
      demo: "",
      isConfidential: false,
    },
    {
      name: "Hologram Arcade 3D",
      subtitle: "Hackathon Winning Project",
      status: "Winner",
      statusColor: "bg-purple-50 text-purple-700 border-purple-200",
      badgeText: "🏆 Hackathon Winning Project",
      problem: "Designing immersive and interactive touchless user interfaces rapidly under competitive hackathon constraints.",
      approach: "Developed a gesture-controlled 3D visualization arcade integrating real-time 3D rendering engines and camera-based input APIs.",
      outcome: "An interactive 3D experience developed during a competitive hackathon environment. The project focused on immersive user interaction, rapid prototyping, and creative problem-solving using modern web technologies.",
      tech: ["React", "Three.js", "JavaScript", "3D Graphics"],
      github: "https://github.com/prajwalhp15/Hologramarcade3D",
      demo: "",
      isConfidential: false,
    },
    {
      name: "Confidential Government Project",
      subtitle: "Secure Personnel Tracking & Operations System",
      status: "Confidential",
      statusColor: "bg-blue-50 text-blue-700 border-blue-200",
      badgeText: "Government Deployment",
      problem: "Designed and developed a personnel tracking and operational monitoring platform for law enforcement operations in Shivamogga. The system was utilized to support field personnel visibility, operational coordination, and centralized monitoring during large-scale public events.",
      approach: "Used by Shivamogga Police during major public event operations, with monitoring conducted through the city control room to improve situational awareness and operational coordination.",
      outcome: "Due to confidentiality requirements, source code, screenshots, technical architecture, and deployment details cannot be publicly disclosed.",
      tech: ["React", "Node.js", "WebSockets", "MongoDB", "Leaflet"],
      github: "",
      demo: "",
      isConfidential: true,
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 px-6 md:px-8 bg-white border-b border-slate-200/60 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,#3b82f604,transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xs font-semibold tracking-wider uppercase mb-3"
            id="projects-badge"
          >
            Engineering & Innovation
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900"
            id="projects-heading"
          >
            Technical Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-lg mt-3 max-w-2xl leading-relaxed"
          >
            A technical showcase of AI architectures, real-time sync networks, and experimental 3D rendering environments.
          </motion.p>
        </div>

        {/* Case Study Stack */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-slate-200/60 bg-white rounded-2xl p-8 md:p-10 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300"
              id={`project-case-${idx}`}
            >
              {/* Project Header */}
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-3">
                    <h3
                      className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                      id={`project-name-${idx}`}
                    >
                      {project.name}
                    </h3>
                    <Badge
                      variant="outline"
                      className={`text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${project.statusColor}`}
                    >
                      {project.badgeText}
                    </Badge>
                  </div>
                  <p
                    className="text-sm font-semibold text-primary mt-1"
                    id={`project-subtitle-${idx}`}
                  >
                    {project.subtitle}
                  </p>
                </div>
                {/* Actions or Confidentiality Badge */}
                <div className="flex items-center gap-3 mt-2 md:mt-0">
                  {project.isConfidential ? (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-200 bg-amber-50 text-[10px] font-bold text-amber-800 uppercase tracking-wider shadow-sm">
                      <Lock className="w-3.5 h-3.5" />
                      🔒 Confidential Project
                    </div>
                  ) : (
                    <>
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-200 bg-white hover:bg-slate-50 text-slate-700 h-9 px-4 rounded-xl"
                          asChild
                          id={`project-github-btn-${idx}`}
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary-glow text-white h-9 px-4 rounded-xl shadow-sm"
                          asChild
                          id={`project-demo-btn-${idx}`}
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Case Study Grid */}
              {project.isConfidential ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  {/* Description */}
                  <div className="space-y-2" id={`project-problem-block-${idx}`}>
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                      <div className="p-1 rounded bg-rose-50 text-rose-600 border border-rose-100">
                        <AlertTriangle className="w-3.5 h-3.5" />
                      </div>
                      <span>Description</span>
                    </div>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Deployment Context */}
                  <div className="space-y-2" id={`project-approach-block-${idx}`}>
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                      <div className="p-1 rounded bg-blue-50 text-blue-600 border border-blue-100">
                        <Cpu className="w-3.5 h-3.5" />
                      </div>
                      <span>Deployment Context</span>
                    </div>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                      {project.approach}
                    </p>
                  </div>

                  {/* Note */}
                  <div className="space-y-2" id={`project-outcome-block-${idx}`}>
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                      <div className="p-1 rounded bg-amber-50 text-amber-600 border border-amber-100">
                        <Lock className="w-3.5 h-3.5" />
                      </div>
                      <span>Note</span>
                    </div>
                    <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-semibold italic">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  {/* Problem */}
                  <div className="space-y-2" id={`project-problem-block-${idx}`}>
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                      <div className="p-1 rounded bg-rose-50 text-rose-600 border border-rose-100">
                        <AlertTriangle className="w-3.5 h-3.5" />
                      </div>
                      <span>Problem</span>
                    </div>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="space-y-2" id={`project-approach-block-${idx}`}>
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                      <div className="p-1 rounded bg-blue-50 text-blue-600 border border-blue-100">
                        <Cpu className="w-3.5 h-3.5" />
                      </div>
                      <span>Approach</span>
                    </div>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                      {project.approach}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="space-y-2" id={`project-outcome-block-${idx}`}>
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                      <div className="p-1 rounded bg-emerald-50 text-emerald-600 border border-emerald-100">
                        <TrendingUp className="w-3.5 h-3.5" />
                      </div>
                      <span>Outcome</span>
                    </div>
                    <p className="text-slate-800 text-xs md:text-sm leading-relaxed font-semibold">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              )}

              {/* Technology Tags */}
              <div>
                <div className="w-full h-px bg-slate-100 mb-6" />
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-semibold rounded bg-slate-50 border border-slate-200 text-slate-600"
                    >
                      {t}
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

export default Projects;
