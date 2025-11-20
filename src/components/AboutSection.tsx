import { motion } from 'framer-motion';
import { Code2, Database, Brain, Zap } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    { icon: Brain, text: 'AI & Machine Learning', color: 'text-primary' },
    { icon: Code2, text: 'Data Science & Analytics', color: 'text-secondary' },
    { icon: Database, text: 'NLP & LLMs', color: 'text-accent' },
    { icon: Zap, text: 'Automation Systems', color: 'text-primary' },
  ];

  return (
    <section className="py-20 px-4 relative" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12 rounded-2xl neon-glow mb-12"
        >
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Computer Engineering student specializing in{' '}
            <span className="text-primary font-semibold">Data Science</span>,{' '}
            <span className="text-secondary font-semibold">AI automation</span>,{' '}
            <span className="text-accent font-semibold">NLP</span>, and{' '}
            <span className="text-primary font-semibold">machine learning</span>. Skilled at
            building full data pipelines, ML models, LLM-powered agentic systems, and intelligent
            automation. Experienced with Python, LangChain, TensorFlow, n8n, and deep-learning
            workflow engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all cursor-default"
            >
              <item.icon className={`w-12 h-12 ${item.color} mb-4`} />
              <h3 className="text-lg font-semibold text-foreground">{item.text}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
