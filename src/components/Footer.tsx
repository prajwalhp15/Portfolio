import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border/50 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <p className="text-[#A1A1AA] flex items-center justify-center gap-1.5 flex-wrap">
          <span className="font-bold text-[#FAFAFA]">Prajwal H P</span>
          <span className="text-xs text-white/20">|</span>
          <span>AI Engineer & Product Builder</span>
        </p>
        <p className="text-xs text-[#A1A1AA] mt-2">
          © {currentYear} • All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
