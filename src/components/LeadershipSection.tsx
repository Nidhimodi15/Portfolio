import { motion } from 'framer-motion';
import { Users, Calendar, Award } from 'lucide-react';

const LeadershipSection = () => {
  const leadership = [
    {
      icon: Users,
      title: 'Department Coordinator',
      org: 'Techfest GEC Bharuch',
      description: 'Led technical event coordination and student engagement initiatives',
    },
    {
      icon: Calendar,
      title: 'Workshop Organizer',
      org: 'Data Science Events',
      description: 'Organized and conducted multiple data science workshops for students',
    },
    {
      icon: Award,
      title: 'Competition Manager',
      org: 'Coding & Analytics Events',
      description: 'Managed coding competitions and analytics challenges across campus',
    },
  ];

  return (
    <section className="py-20 px-4 relative" id="leadership">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Leadership
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-xl text-center hover:neon-glow-secondary transition-all"
            >
              <item.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-primary font-semibold mb-3">{item.org}</p>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
