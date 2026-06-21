import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Target, AlertCircle, Sparkles, CheckCircle } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "CareerPilot AI",
      subtitle: "Personalized AI Career Assistance Engine",
      status: "Prototype Development",
      statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      problem: "Students and entry-level professionals lack clear, data-driven, and personalized pathways to navigate modern technical careers, resulting in mismatched skills and high guidance counseling overhead.",
      targetUser: "Students, Career Coaches, and Academic Institutions",
      solution: "Designed and prototyped an LLM-driven roadmap engine that analyzes a candidate's background, benchmarks it against target industry roles, and generates real-time skill acquisition paths and resume audits.",
      features: [
        "Dynamic Skill-Gap Identification & Roadmapping",
        "Automated Resume Auditing with Contextual Feedback",
        "Local LLM Execution for Cost Efficiency & Data Privacy",
      ],
      tech: ["React", "FastAPI", "Ollama LLMs", "FAISS"],
      github: "",
      demo: "",
    },
    {
      title: "Oral Cancer AI",
      subtitle: "Early-Detection Diagnostics Assistant",
      status: "Research & Validation Stage",
      statusColor: "bg-amber-50 text-amber-700 border-amber-200",
      problem: "In rural and underserved regions, early-stage oral cancer screening is delayed due to a lack of local oncology experts, leading to late-stage diagnoses and poor patient prognosis.",
      targetUser: "Primary Healthcare Centers, Rural Clinics, and Medical Researchers",
      solution: "An AI-assisted clinical screening platform utilizing deep-learning computer vision models and machine learning classifiers to analyze oral lesions from smartphone images.",
      features: [
        "Convolutional Neural Networks (CNN) for Lesion Classification",
        "Real-time Edge Deployment for Remote Area Usage",
        "Low-latency API integration for instant triage feedback",
      ],
      tech: ["Python", "PyTorch", "OpenCV", "FastAPI"],
      github: "",
      demo: "",
    },
    {
      title: "Healthcare EHR Platform",
      subtitle: "Workflow-Optimized Patient Chart Database",
      status: "Product Development Stage",
      statusColor: "bg-blue-50 text-blue-700 border-blue-200",
      problem: "Traditional Electronic Health Records (EHR) systems are bloated, slow, and impose severe cognitive load on doctors, leading to database lookup delays and clinician fatigue.",
      targetUser: "Independent Practices, Outpatient Clinics, and Medical Teams",
      solution: "A secure, developer-focused, workflow-optimized patient charts database that prioritizes query speed, clean data schemas, and high-frequency clinical actions.",
      features: [
        "Patient-centric database indexes for fast query speeds",
        "HIPAA-compliant secure schemas with access control",
        "Intuitive clinical templates for quick chart logging",
      ],
      tech: ["React", "FastAPI", "PostgreSQL", "Supabase"],
      github: "",
      demo: "",
    },
  ];

  return (
    <section
      id="products"
      className="py-32 px-6 md:px-8 bg-white border-b border-slate-200/60 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#3b82f604,transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xs font-semibold tracking-wider uppercase mb-3"
            id="products-badge"
          >
            Active Ventures & Products
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900"
            id="products-heading"
          >
            Products Under Development
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-lg mt-3 max-w-2xl leading-relaxed"
          >
            A look at validation loops, early-stage prototyping, and technical architectures built for healthcare and productivity.
          </motion.p>
        </div>

        {/* Vertical Case Studies Layout */}
        <div className="space-y-12">
          {products.map((product, idx) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="premium-card p-8 md:p-10 bg-white border border-slate-100 hover:border-slate-200 shadow-sm transition-all duration-300"
              id={`product-card-${idx}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Product Core Info */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge
                        variant="outline"
                        className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${product.statusColor}`}
                        id={`product-status-${idx}`}
                      >
                        {product.status}
                      </Badge>
                    </div>

                    <h3
                      className="text-3xl font-black text-slate-900 tracking-tight"
                      id={`product-title-${idx}`}
                    >
                      {product.title}
                    </h3>
                    <p className="text-sm font-semibold text-primary/80 mt-1" id={`product-sub-${idx}`}>
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Problem & Solution block */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded bg-rose-50 text-rose-600 border border-rose-100 mt-0.5">
                        <AlertCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">The Problem</span>
                        <p className="text-slate-600 text-sm md:text-base mt-0.5 leading-relaxed" id={`product-problem-${idx}`}>
                          {product.problem}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded bg-blue-50 text-blue-600 border border-blue-100 mt-0.5">
                        <Target className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Target User</span>
                        <p className="text-slate-600 text-sm mt-0.5 font-medium" id={`product-target-${idx}`}>
                          {product.targetUser}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded bg-indigo-50 text-indigo-600 border border-indigo-100 mt-0.5">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">The Product Solution</span>
                        <p className="text-slate-700 text-sm md:text-base mt-0.5 leading-relaxed" id={`product-solution-${idx}`}>
                          {product.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features & Tech column */}
                <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-100 pt-8 lg:pt-0 lg:pl-8">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Key Value & Features</h4>
                    <ul className="space-y-3.5 mb-8">
                      {product.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600 leading-normal">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="w-full h-px bg-slate-100 mb-6" />
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {product.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-50 border border-slate-200 text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {product.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-200 bg-white hover:bg-slate-50 text-slate-700 h-9 px-4 rounded-xl"
                          asChild
                          id={`product-github-btn-${idx}`}
                        >
                          <a href={product.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            GitHub Repo
                          </a>
                        </Button>
                      )}
                      {product.demo && (
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary-glow text-white h-9 px-4 rounded-xl shadow-sm"
                          asChild
                          id={`product-demo-btn-${idx}`}
                        >
                          <a href={product.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {!product.github && !product.demo && (
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          🔒 Proprietary Startup Product
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
