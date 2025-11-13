import { motion } from 'framer-motion';
import { Code, Brain, Database, MessageSquare, Server, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming',
      skills: ['Python', 'Java', 'C++', 'SQL'],
      color: 'border-primary text-primary',
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      skills: ['Scikit-learn', 'TensorFlow', 'Keras', 'Random Forest', 'SVM'],
      color: 'border-secondary text-secondary',
    },
    {
      icon: Database,
      title: 'Data Analysis',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      color: 'border-accent text-accent',
    },
    {
      icon: MessageSquare,
      title: 'NLP',
      skills: ['BERT', 'NLTK', 'GPT', 'Text Classification'],
      color: 'border-primary text-primary',
    },
    {
      icon: Server,
      title: 'Databases',
      skills: ['MySQL', 'MongoDB'],
      color: 'border-secondary text-secondary',
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: ['Streamlit', 'Jupyter', 'Colab', 'n8n', 'Flowise', 'CrewAI'],
      color: 'border-accent text-accent',
    },
  ];

  return (
    <section className="py-20 px-4 relative" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className={`glass-card p-6 rounded-xl border-2 ${category.color} hover:shadow-2xl transition-all`}
            >
              <category.icon className={`w-10 h-10 ${category.color} mb-4`} />
              <h3 className={`text-xl font-bold mb-4 ${category.color}`}>{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-background/50 px-3 py-1 rounded-full text-sm text-foreground border border-border/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
