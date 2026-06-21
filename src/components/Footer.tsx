import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-slate-200 relative bg-white">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <p className="text-slate-400 flex items-center justify-center gap-1.5 flex-wrap">
          <span className="font-bold text-slate-800">Prajwal H P</span>
          <span className="text-xs text-slate-300">|</span>
          <span>Founder, Product Builder & AI Operator</span>
        </p>
        <p className="text-xs text-slate-400 mt-2">
          © {currentYear} • All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
