import { motion } from "framer-motion";
import { AlertTriangle, Workflow, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ClientWork = () => {
  const clients = [
    {
      title: "Komala Scented Supari",
      status: "Live",
      statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      description: "Built and deployed a business website focused on digital presence, product showcase, and customer engagement.",
      problem: "The regional packaging and vendor business lacked a centralized digital catalog, leading to repetitive manual inquiries for product dimensions, pricing, and shipping logistics.",
      solution: "Engineered a responsive, high-performance product showcase and logistics contact portal utilizing React and modern asset optimizations.",
      tech: ["React", "Tailwind CSS", "Vite"],
      outcomeType: "Impact",
      outcome: "Established a professional digital presence, centralized product information, and streamlined customer inquiry workflows through a modern, responsive web experience.",
      demo: "https://komalashop.vercel.app/",
    },
    {
      title: "Real Estate Management Platform",
      status: "Live Demo Available",
      statusColor: "bg-blue-50 text-blue-700 border-blue-200",
      description: "Interactive SaaS platform for plot inventory visualization, booking workflows, and property management.",
      problem: "Buyers struggled to inspect boundary layouts and availability statuses remotely, while administration tracked reservations on manual spreadsheets.",
      solution: "Designed and deployed a responsive WebGIS interactive layout plot visualizer. Note: The public version is a demonstration build while production versions include additional operational and authentication capabilities.",
      tech: ["React", "WebGIS SVG", "Supabase", "Leaflet"],
      outcomeType: "Impact",
      outcome: "Enabled interactive plot visualization, simplified availability tracking, and improved the property discovery experience through a digital-first workflow.",
      demo: "https://theapp-8582a.web.app/app",
    },
    {
      title: "Manasa Vet Pharma",
      status: "In Development",
      statusColor: "bg-amber-50 text-amber-700 border-amber-200",
      description: "Developing a business platform focused on operational workflows and digital transformation.",
      problem: "Friction in recording prescription dispatches and tracking veterinary stock alerts across clinic locations manually.",
      solution: "Developing a custom Electron desktop framework client and unified SQLite local databases featuring trigger alerts for expiration dates.",
      tech: ["Electron", "React", "SQLite", "Node.js"],
      outcomeType: "Current Focus",
      outcome: "Developing inventory management workflows, stock monitoring capabilities, expiration tracking, and automated alert systems to improve operational visibility.",
      demo: "",
    },
  ];

  return (
    <section
      id="client-work"
      className="py-32 px-6 md:px-8 bg-white border-b border-slate-200/60 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,#3b82f604,transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xs font-semibold tracking-wider uppercase mb-3"
            id="client-work-badge"
          >
            Consulting & Deployments
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900"
            id="client-work-heading"
          >
            Client Work & Freelance Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-lg mt-3 max-w-2xl leading-relaxed"
          >
            Delivering bespoke software workflows, interactive SaaS interfaces, and digital transformations focused on execution and practical value.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {clients.map((client, idx) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="premium-card p-8 flex flex-col justify-between bg-white border border-slate-100 shadow-sm hover:border-slate-200"
              id={`client-card-${idx}`}
            >
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="outline"
                      className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${client.statusColor}`}
                    >
                      {client.status}
                    </Badge>
                  </div>
                  <h3
                    className="text-2xl font-bold text-slate-900 tracking-tight"
                    id={`client-title-${idx}`}
                  >
                    {client.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    {client.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Problem */}
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-rose-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Client Painpoint</span>
                      <p className="text-slate-600 text-xs md:text-sm mt-0.5 leading-relaxed">
                        {client.problem}
                      </p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="flex items-start gap-2.5">
                    <Workflow className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Solution Delivered</span>
                      <p className="text-slate-700 text-xs md:text-sm mt-0.5 leading-relaxed">
                        {client.solution}
                      </p>
                    </div>
                  </div>

                  {/* Dynamic outcome field */}
                  <div className={`flex items-start gap-2.5 p-3 rounded-xl border ${client.outcomeType === "Current Focus"
                      ? "bg-amber-50/50 border-amber-100/50"
                      : "bg-blue-50/50 border-blue-100/50"
                    }`}>
                    <Sparkles className={`w-4 h-4 mt-0.5 flex-shrink-0 ${client.outcomeType === "Current Focus" ? "text-amber-600" : "text-blue-600"
                      }`} />
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-wide ${client.outcomeType === "Current Focus" ? "text-amber-700" : "text-blue-700"
                        }`}>{client.outcomeType}</span>
                      <p className="text-slate-800 text-xs md:text-sm font-semibold mt-0.5 leading-snug">
                        {client.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="w-full h-px bg-slate-100 my-6" />
                <div className="flex flex-wrap items-center justify-between gap-4">
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1">
                    {client.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded bg-slate-50 border border-slate-200 text-slate-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {client.demo ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-200 bg-white hover:bg-slate-50 text-slate-700 h-8 rounded-lg text-xs"
                      asChild
                      id={`client-demo-btn-${idx}`}
                    >
                      <a href={client.demo} target="_blank" rel="noopener noreferrer">
                        <Globe className="w-3.5 h-3.5 mr-1.5" />
                        Live Link
                      </a>
                    </Button>
                  ) : (
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">I</span>
                  )}
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
