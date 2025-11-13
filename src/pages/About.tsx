import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import LeadershipSection from '@/components/LeadershipSection';
import CertificationsSection from '@/components/CertificationsSection';

const About = () => {
  return (
    <div className="pt-20">
      <AboutSection />
      <SkillsSection />
      <LeadershipSection />
      <CertificationsSection />
    </div>
  );
};

export default About;
