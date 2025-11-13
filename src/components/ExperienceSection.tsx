import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section className="py-20 px-4 relative" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-20 pb-12"
          >
            <div className="absolute left-5 top-0 w-6 h-6 rounded-full bg-primary neon-glow border-4 border-background" />

            <div className="glass-card p-6 rounded-xl hover:neon-glow transition-all">
              <div className="flex items-start gap-4 mb-4">
                <Briefcase className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">AI Intern</h3>
                  <p className="text-primary font-semibold">Codepoets Pvt Ltd</p>
                  <p className="text-muted-foreground text-sm">May 2025 - July 2025</p>
                </div>
              </div>

              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▹</span>
                  <span>
                    Automated data pipelines using <strong>n8n + Python</strong>, saving 35% manual
                    effort
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▹</span>
                  <span>Built ML models for business automation and chatbots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▹</span>
                  <span>Designed LangChain workflows for structured data extraction</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {['Python', 'n8n', 'Flowise', 'LangChain', 'Data Analysis', 'CrewAI'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs border border-primary/30"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
