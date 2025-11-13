import AnimatedBackground from '@/components/AnimatedBackground';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import LeadershipSection from '@/components/LeadershipSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <LeadershipSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 py-8 text-center border-t border-border/20">
        <p className="text-muted-foreground">
          © 2025 Parth Hindiya. Designed with{' '}
          <span className="text-gradient">AI & Innovation</span>
        </p>
      </footer>
    </div>
  );
};

export default Index;
