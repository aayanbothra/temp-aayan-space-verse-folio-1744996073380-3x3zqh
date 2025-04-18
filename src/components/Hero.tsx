import React from 'react';
import { motion } from 'framer-motion';
import { useExperience } from '@/context/ExperienceContext';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';
import { ArrowRight, Code, PlayCircle, FileText, Mail } from 'lucide-react';

interface RoleContent {
  headline: string;
  subheadline: string;
  cta: {
    text: string;
    icon: React.ReactNode;
  };
}

const Hero = () => {
  const { userRole } = useExperience();
  const { theme } = useTheme();
  
  const roleContent: Record<string, RoleContent> = {
    visitor: {
      headline: "Hello, I'm Aayan Bothra",
      subheadline: "Editor • Motion Designer • Fullstack Developer • Musician",
      cta: { text: "Explore My Work", icon: <ArrowRight className="ml-2 h-4 w-4" /> }
    },
    recruiter: {
      headline: "Looking for Creative Tech Talent?",
      subheadline: "Fullstack Development • Motion Design • Multimedia Production",
      cta: { text: "View My Projects", icon: <Code className="ml-2 h-4 w-4" /> }
    },
    student: {
      headline: "Learn & Explore With Me",
      subheadline: "Tutorials • Resources • Development Journey",
      cta: { text: "Start Learning", icon: <PlayCircle className="ml-2 h-4 w-4" /> }
    },
    fan: {
      headline: "Welcome to My Creative Universe",
      subheadline: "Music • Visual Art • Design • Code",
      cta: { text: "See Latest Work", icon: <FileText className="ml-2 h-4 w-4" /> }
    },
  };
  
  const content = roleContent[userRole || 'visitor'];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Abstract floating elements */}
      <motion.div
        className={`absolute w-64 h-64 rounded-full ${
          theme === 'dark' 
            ? 'bg-space-purple/20' 
            : 'bg-purple-300/20'
        } blur-3xl`}
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -30, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 15,
          ease: "easeInOut" 
        }}
        style={{ left: '10%', top: '20%' }}
      />
      
      <motion.div
        className={`absolute w-72 h-72 rounded-full ${
          theme === 'dark' 
            ? 'bg-space-gold/10' 
            : 'bg-amber-200/20'
        } blur-3xl`}
        animate={{ 
          x: [0, -20, 0], 
          y: [0, 20, 0],
          scale: [1, 1.05, 1] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 12,
          ease: "easeInOut" 
        }}
        style={{ right: '15%', bottom: '30%' }}
      />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl text-center"
      >
        <motion.h1 
          variants={itemVariants} 
          className="text-5xl md:text-7xl font-bold title-gradient leading-tight"
        >
          {content.headline}
        </motion.h1>
        
        <motion.p 
          variants={itemVariants} 
          className={`text-xl md:text-2xl mb-10 ${
            theme === 'dark' 
              ? 'text-gray-300' 
              : 'text-purple-900/80'
          }`}
        >
          {content.subheadline}
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className={`${
              theme === 'dark' 
                ? 'bg-space-purple hover:bg-space-purple/80'
                : 'bg-purple-600 hover:bg-purple-700'
            } text-white text-lg px-8 py-6`}
          >
            {content.cta.text}
            {content.cta.icon}
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className={`hero-contact-btn text-lg px-8 py-6`}
          >
            Contact Me
            <Mail className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
