import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { PhilosophyIntro } from '@/components/PhilosophyIntro';
import { SelectedWork } from '@/components/SelectedWork';
import { ClientWork } from '@/components/ClientWork';
import { AiExperiments } from '@/components/AiExperiments';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ZeroToOneProcess } from '@/components/ZeroToOneProcess';
import { JourneySection } from '@/components/JourneySection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F3F0E8] text-[#161616] font-body selection:bg-[#FF4D24] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PhilosophyIntro />
        <SelectedWork />
        <ClientWork />
        <AiExperiments />
        <ExperienceSection />
        <ZeroToOneProcess />
        <JourneySection />
        <AboutSection />
      </main>
      <ContactSection />
    </div>
  );
};

export default Index;
