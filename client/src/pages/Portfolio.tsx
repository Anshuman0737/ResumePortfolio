import { useState, useEffect } from 'react';
import GenreLoader from '@/components/GenreLoader';
import HeroSection from '@/components/HeroSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import AflatusRAGSection from '@/components/AflatusRAGSection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';

export default function Portfolio() {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    // Force dark mode for portfolio
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      {!showMain && <GenreLoader onComplete={() => setShowMain(true)} />}
      
      {showMain && (
        <div className="bg-black min-h-screen">
          <HeroSection />
          <EducationSection />
          <ExperienceSection />
          <ProjectsSection />
          <AflatusRAGSection />
          <SkillsSection />
          <AchievementsSection />
          <ContactSection />
        </div>
      )}
    </>
  );
}
