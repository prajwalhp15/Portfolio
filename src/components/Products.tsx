import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const products = [
    {
      title: "Oral Cancer AI",
      status: "Research & Funding Stage",
      statusColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
      description:
        "An AI-assisted oral cancer screening platform focused on supporting early detection through state-of-the-art computer vision models and machine learning classifiers.",
      tech: ["Python", "PyTorch", "OpenCV", "FastAPI"],
    },
    {
      title: "Healthcare EHR Platform",
      status: "Product Development Stage",
      statusColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      description:
        "A secure, scalable Electronic Health Record platform focused on clinical workflow optimization, patient charts management, and digital health records organization.",
      tech: ["React", "FastAPI", "PostgreSQL"],
    },
    {
      title: "CareerPilot AI",
      status: "Prototype Development",
      statusColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
      description:
        "An AI-powered career guidance and planning platform helping students with personalized roadmap generation, resume audits, and skill development advice.",
      tech: ["React", "FastAPI", "LLMs"],
    },
  ];

  return (
    <section
      id="products"
      className="py-32 px-6 md:px-8 bg-[#0A0A0A] border-b border-white/5 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xs font-semibold tracking-wider uppercase mb-3"
            id="products-badge"
          >
            Initiatives
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-[#FAFAFA]"
            id="products-heading"
          >
            Research, Prototype & Product Development Initiatives
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#A1A1AA] text-base mt-2"
          >
            Active product conceptualizations, medical research integrations, and prototype workflows.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="premium-card p-8 flex flex-col justify-between"
              id={`product-card-${idx}`}
            >
              <div>
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-6">
                  <Badge
                    variant="outline"
                    className={`text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full ${product.statusColor}`}
                    id={`product-status-${idx}`}
                  >
                    {product.status}
                  </Badge>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold text-[#FAFAFA] mb-4 tracking-tight"
                  id={`product-title-${idx}`}
                >
                  {product.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#E5E5E5] text-sm leading-relaxed mb-8"
                  id={`product-desc-${idx}`}
                >
                  {product.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <div className="w-full h-px bg-white/5 mb-6" />
                <div className="flex flex-wrap gap-2">
                  {product.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/5 text-[#E5E5E5]"
                    >
                      {tech}
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

export default Products;
