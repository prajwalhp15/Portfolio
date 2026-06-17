import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-32 px-6 md:px-8 bg-[#0A0A0A] border-b border-white/5 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Heading and Tag */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-primary text-xs font-semibold tracking-wider uppercase mb-3"
              id="about-badge"
            >
              Background
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black tracking-tight text-[#FAFAFA]"
              id="about-heading"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-12 h-1 bg-primary mt-6 origin-left rounded"
            />
          </div>

          {/* Right Column: Detailed Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-[#E5E5E5] text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              id="about-p-1"
            >
              I am an Artificial Intelligence and Machine Learning Engineer passionate about building
              technology that creates real-world impact.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              id="about-p-2"
            >
              My experience spans machine learning, computer vision, NLP, deep learning, AI-powered
              automation, and full-stack development. I have worked on healthcare AI systems,
              retrieval-augmented generation applications, real-time tracking systems, and commercial
              software projects.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              id="about-p-3"
            >
              Alongside technical development, I actively contribute to leadership initiatives through IEEE
              and product development efforts through early-stage ventures and client-focused projects.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              id="about-p-4"
            >
              I enjoy combining technical expertise, product thinking, and problem-solving to create
              scalable solutions.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
