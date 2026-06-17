import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, AlertTriangle, Cpu, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      name: "LuminaCXR",
      subtitle: "AI-Powered Chest X-Ray Disease Detection System",
      problem: "Accurate and fast diagnosis of chest diseases from X-rays remains a bottleneck in medical workflows, often lacking explainability for clinical validation.",
      solution: "Built a deep learning-based detection system using DenseNet, ResNet, and EfficientNet architectures, integrated with Grad-CAM to visualize and explain model focus areas.",
      impact: "Automated detection of Tuberculosis, Pneumonia, and COVID with explainable visual highlights, earning selection for the 2nd Stage Evaluation in AICTE YUKTI Innovation Challenge 2025.",
      tech: ["DenseNet", "ResNet", "EfficientNet", "Grad-CAM Explainability", "Tuberculosis Detection", "Pneumonia Detection", "COVID Detection", "PyTorch", "Python"],
      github: "https://github.com/prajwalhp15",
      demo: "#",
    },
    {
      name: "Police Personnel Tracking System",
      subtitle: "Real-Time GPS Security Dashboard",
      problem: "Coordinating and tracking police personnel in real-time during major public events like the Ganapathi procession was manually intensive and lacked live visibility.",
      solution: "Built and deployed a web-based real-time GPS tracking and coordination dashboard utilizing secure WebSockets, Leaflet maps, and a scalable backend.",
      impact: "Successfully deployed and used by the Karnataka Police and Smart City Control Room to monitor security personnel live during processions.",
      tech: ["React", "Node.js", "WebSockets", "MongoDB", "Leaflet Maps", "GPS Integration"],
      github: "https://github.com/prajwalhp15",
      demo: "#",
    },
    {
      name: "RAG-Based Document Assistant",
      subtitle: "Citation-Grounded Local LLM Assistant",
      problem: "Traditional document search systems fail to answer context-specific questions directly and often suffer from hallucinations and lack of privacy.",
      solution: "Built a Retrieval-Augmented Generation assistant using local LLMs via Ollama, FAISS vector database, FastAPI, and a Streamlit user interface.",
      impact: "Enabled completely offline, citation-grounded document question answering, maintaining strict data privacy for proprietary text files.",
      tech: ["FastAPI", "FAISS", "Streamlit", "Ollama", "Local LLMs", "RAG Systems", "Python"],
      github: "https://github.com/prajwalhp15",
      demo: "#",
    },
    {
      name: "RainWise",
      subtitle: "Rooftop Rainwater Harvesting Feasibility Assessment",
      problem: "Assessing rainwater harvesting potential on rooftops requires manual, complex calculations, making sustainability audits inaccessible to property owners.",
      solution: "Developed an automated assessment platform that calculates rooftop catchment areas, generates feasibility reports, and evaluates cost-benefit structures.",
      impact: "Developed for the Smart India Hackathon, delivering automated reports, financial analyses, and sustainability insights.",
      tech: ["React", "Flask", "PostgreSQL", "Chart.js", "Data Analytics"],
      github: "https://github.com/prajwalhp15/Rainwise",
      demo: "#",
    },
    {
      name: "Holographic Display System",
      subtitle: "Gesture-Controlled Interactive 3D Interface",
      problem: "Touchless interactive systems are complex to interface with 3D models and require expensive custom hardware setups.",
      solution: "Designed a holographic display system featuring real-time hand gesture recognition utilizing OpenCV and MediaPipe computer vision technologies.",
      impact: "Enabled natural, touchless gesture controls without screen contact, perfect for public exhibits and sterile medical environments.",
      tech: ["OpenCV", "MediaPipe", "Python", "Computer Vision", "Gesture Recognition"],
      github: "https://github.com/prajwalhp15/Hologramarcade3D",
      demo: "#",
    },
    {
      name: "Reinforcement Learning Cyber Threat Detection",
      subtitle: "DQN-Powered Anomaly Detection System",
      problem: "Hardcoded network rules fail against dynamic, zero-day cyber attacks in next-generation network architectures.",
      solution: "Implemented a Deep Q-Network (DQN) reinforcement learning model for adaptive network anomaly detection.",
      impact: "Outperformed traditional rule-based models in detecting dynamic cyber threats, contributing to next-generation network security research.",
      tech: ["Python", "PyTorch", "Deep Q-Network (DQN)", "Reinforcement Learning", "Network Security"],
      github: "https://github.com/prajwalhp15/cybersecurity-in-6G-Network",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 px-6 md:px-8 bg-[#0A0A0A] border-b border-white/5 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xs font-semibold tracking-wider uppercase mb-3"
            id="projects-badge"
          >
            Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-[#FAFAFA]"
            id="projects-heading"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#A1A1AA] text-base mt-2"
          >
            Case studies detailing real-world engineering challenges, technological solutions, and operational outcomes.
          </motion.p>
        </div>

        {/* Case Study Stack */}
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-white/5 bg-card/25 rounded-2xl p-8 md:p-12 hover:border-white/10 transition-all duration-300"
              id={`project-case-${idx}`}
            >
              {/* Project Header */}
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-8">
                <div>
                  <h3
                    className="text-3xl font-extrabold text-[#FAFAFA]"
                    id={`project-name-${idx}`}
                  >
                    {project.name}
                  </h3>
                  <p
                    className="text-sm font-medium text-primary mt-1"
                    id={`project-subtitle-${idx}`}
                  >
                    {project.subtitle}
                  </p>
                </div>
                {/* Actions */}
                <div className="flex items-center gap-3 mt-4 md:mt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-[#FAFAFA] h-9"
                    asChild
                    id={`project-github-btn-${idx}`}
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo !== "#" && (
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary-glow text-white h-9"
                      asChild
                      id={`project-demo-btn-${idx}`}
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Case Study Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Problem */}
                <div className="space-y-2" id={`project-problem-block-${idx}`}>
                  <div className="flex items-center gap-2 text-[#A1A1AA] text-xs font-semibold uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    <span>Problem</span>
                  </div>
                  <p className="text-[#E5E5E5] text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-2" id={`project-solution-block-${idx}`}>
                  <div className="flex items-center gap-2 text-[#A1A1AA] text-xs font-semibold uppercase tracking-wider">
                    <Cpu className="w-4 h-4 text-primary" />
                    <span>Solution</span>
                  </div>
                  <p className="text-[#E5E5E5] text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Impact */}
                <div className="space-y-2" id={`project-impact-block-${idx}`}>
                  <div className="flex items-center gap-2 text-[#A1A1AA] text-xs font-semibold uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    <span>Impact</span>
                  </div>
                  <p className="text-[#FAFAFA] text-sm leading-relaxed font-medium">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Technology Tags */}
              <div>
                <div className="w-full h-px bg-white/5 mb-6" />
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium rounded bg-white/5 border border-white/5 text-[#E5E5E5]"
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
