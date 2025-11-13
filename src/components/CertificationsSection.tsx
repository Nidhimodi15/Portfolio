import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    'Amazon ML Summer School',
    'NPTEL Database Management System',
    'CDAC Multilingual Programming (A Grade)',
    'IIT Bombay Java Programming (90%)',
    'Udemy Machine Learning Masterclass',
    'Udemy AI Operations & Deployment',
    'Udemy Deep Reinforcement Learning',
    'Edunet AI Foundation Program',
    'Green Skills Certification',
  ];

  return (
    <section className="py-20 px-4 relative" id="certifications">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="glass-card p-6 rounded-xl flex items-center gap-4 hover:border-accent hover:neon-glow-accent transition-all group"
            >
              <Award className="w-8 h-8 text-accent flex-shrink-0 group-hover:animate-pulse" />
              <p className="text-foreground font-medium">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
