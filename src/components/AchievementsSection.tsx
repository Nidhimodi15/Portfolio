import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    { text: 'Finalist: FINNOVATE HACK 2025 (IIT Gandhinagar)', icon: Trophy },
    { text: 'Finalist: NEXATHON (GCET Anand)', icon: Award },
    { text: 'Finalist: HACKSETU (Amity University)', icon: Star },
    { text: '4th Place: IEEE Hackathon (SCET Surat)', icon: Medal },
    { text: 'SSIP Grants (Smart Library & Smart IoT Dustbin)', icon: Award },
    { text: 'Dewang Mehta IT Awards Nominee (twice)', icon: Trophy },
    { text: 'National AI Poster Competition — Top 33/133', icon: Star },
  ];

  return (
    <section className="py-20 px-4 relative" id="achievements">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 rounded-xl flex items-start gap-4 hover:neon-glow transition-all group"
            >
              <achievement.icon className="w-8 h-8 text-accent flex-shrink-0 group-hover:animate-bounce" />
              <p className="text-foreground font-medium">{achievement.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
