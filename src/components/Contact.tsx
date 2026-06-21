import { useState } from "react";
import { Mail, Linkedin, Github, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "prajwalhp15@gmail.com",
      href: "mailto:prajwalhp15@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/prajwal-hp",
      href: "https://www.linkedin.com/in/prajwal-hp/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/prajwalhp15",
      href: "https://github.com/prajwalhp15",
    },
  ];

  const milestones = [
    "Co-Founded Salutix AI (EHR & Clinical AI systems)",
    "Selected for 2nd Stage Evaluation in AICTE YUKTI Innovation Challenge 2025 (LuminaCXR)",
    "Deployed secure operations tracking dashboard used by Karnataka Police & Smart City Control",
    "2nd Place – Hack Yugma State-Level Hackathon",
    "Participated in Smart India Hackathon representing harvesting initiatives",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email Address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. Prajwal will get back to you shortly.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-8 bg-slate-50/50 border-b border-slate-200/60 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#3b82f604,transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xs font-semibold tracking-wider uppercase mb-3"
            id="contact-badge"
          >
            Connect
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900"
            id="contact-heading"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-lg mt-3 max-w-2xl leading-relaxed"
          >
            Open to AI Product Management, Product Builder, AI Engineering, and Startup opportunities. Let's collaborate.
          </motion.p>
        </div>

        {/* 2-Column Portal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Links & Recognition */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact details */}
            <div className="premium-card p-8 bg-white border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6 tracking-tight">
                Direct Channels
              </h3>
              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3.5 rounded-xl border border-slate-200/50 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition-all group"
                    id={`contact-link-${link.label.toLowerCase()}`}
                  >
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:scale-105 transition-transform">
                      <link.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {link.label}
                      </p>
                      <p className="text-sm font-semibold text-slate-900">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Achievements block */}
            <div className="premium-card p-8 bg-white border border-slate-100">
              <div className="flex items-center gap-2.5 mb-6 text-primary">
                <Award className="w-5 h-5" />
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Key Milestones & Recognition
                </h3>
              </div>
              <ul className="space-y-3.5">
                {milestones.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Modern Contact Form */}
          <div className="lg:col-span-7 premium-card p-8 md:p-10 bg-white border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-8">
              Submit an Inquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Name
                  </label>
                  <Input
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="bg-white border-slate-200 focus-visible:ring-primary focus-visible:border-primary/50 text-slate-800 rounded-xl h-11"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="bg-white border-slate-200 focus-visible:ring-primary focus-visible:border-primary/50 text-slate-800 rounded-xl h-11"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your product initiatives or engineering opportunities..."
                  rows={6}
                  className="bg-white border-slate-200 focus-visible:ring-primary focus-visible:border-primary/50 text-slate-800 rounded-xl resize-none p-4"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-glow text-white font-semibold h-11 rounded-xl shadow-md shadow-primary/10 transition-all"
                id="contact-submit-btn"
              >
                {isSubmitting ? "Sending Inquiry..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
