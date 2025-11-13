import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'FINTEL AI',
      subtitle: 'Autonomous Invoice Intelligence',
      description:
        'OCR-powered ML system with anomaly detection and agentic finance assistant using LLaMA and Gemini Vision.',
      tech: ['Gemini Vision', 'LangChain', 'LLaMA', 'Isolation Forest', 'MongoDB'],
      color: 'border-primary',
    },
    {
      title: 'Fake News Detection',
      subtitle: 'Hybrid BERT + GPT Model',
      description:
        'Advanced hybrid deep learning model achieving high accuracy for Indian news datasets using NLP techniques.',
      tech: ['BERT', 'Python', 'NLP', 'Deep Learning'],
      color: 'border-secondary',
    },
    {
      title: 'Business Directory RAG Chatbot',
      subtitle: 'Retrieval-Augmented Generation',
      description:
        'Dynamic retrieval-based chatbot for querying business datasets with n8n automation workflows.',
      tech: ['n8n', 'Python', 'RAG', 'LangChain'],
      color: 'border-accent',
    },
    {
      title: 'Human Emotion Detection',
      subtitle: 'Real-time Facial Analysis',
      description:
        'CNN-based computer vision model for real-time facial emotion classification with high accuracy.',
      tech: ['CNNs', 'Computer Vision', 'TensorFlow', 'OpenCV'],
      color: 'border-primary',
    },
    {
      title: 'Data Analysis Agent System',
      subtitle: 'Automated Analytics Platform',
      description:
        'Agent-based system for automated data analysis and intelligent reporting using CrewAI framework.',
      tech: ['CrewAI', 'Python', 'Pandas', 'Automation'],
      color: 'border-secondary',
    },
    {
      title: 'AI Garbage Classification',
      subtitle: 'Transfer Learning Model',
      description:
        'Mobile-ready classification model using MobileNetV2 with transfer learning for waste management.',
      tech: ['MobileNetV2', 'TensorFlow', 'Transfer Learning', 'Mobile'],
      color: 'border-accent',
    },
  ];

  return (
    <section className="py-20 px-4 relative" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, rotateX: 5 }}
              className={`glass-card p-6 rounded-xl border-2 ${project.color} hover:shadow-2xl transition-all group`}
            >
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all">
                {project.title}
              </h3>
              <p className={`text-sm font-semibold mb-3 ${project.color}`}>{project.subtitle}</p>
              <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-background/50 px-2 py-1 rounded text-xs text-foreground border border-border/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 group/btn">
                  <Github className="w-4 h-4 mr-2 group-hover/btn:animate-spin" />
                  Code
                </Button>
                <Button size="sm" variant="outline" className="flex-1 group/btn">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                  Demo
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
