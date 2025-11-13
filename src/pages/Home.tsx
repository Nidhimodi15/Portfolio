import { motion } from 'framer-motion';
import { Download, Rocket, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  const techStack = ['Python', 'ML', 'AI', 'NLP', 'TensorFlow', 'LangChain'];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mb-8 inline-block"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-1 animate-pulse-slow">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center neon-glow">
              <span className="text-5xl font-bold text-gradient">PH</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-gradient"
        >
          Parth Hindiya
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-4xl font-semibold mb-6 text-foreground"
        >
          AI Developer & Data Science Enthusiast
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 italic"
        >
          "I design intelligent, automated and next-gen AI systems."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow group"
          >
            <Download className="mr-2 group-hover:animate-bounce" />
            Download Resume
          </Button>
          <Link to="/projects">
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 neon-glow-secondary group"
            >
              <Rocket className="mr-2 group-hover:animate-bounce" />
              Explore Projects
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 neon-glow-accent group"
            >
              <Mail className="mr-2 group-hover:animate-bounce" />
              Contact Me
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="glass-card px-4 py-2 rounded-full text-sm font-medium text-primary border border-primary/30 hover:neon-glow transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
