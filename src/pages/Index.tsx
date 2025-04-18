
import React from 'react';
import { useExperience } from '@/context/ExperienceContext';
import { ExperienceProvider } from '@/context/ExperienceContext';
import ExperienceSelector from '@/components/ExperienceSelector';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import ParticlesBackground from '@/components/ParticlesBackground';
import Timeline from '@/components/Timeline';
import EditingSection from '@/components/EditingSection';
import SkillLibrary from '@/components/SkillLibrary';
import ProjectsSection from '@/components/ProjectsSection';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';

// Import framer-motion for animations
import { AnimatePresence } from 'framer-motion';

// Import Lucide icons
import { 
  Github, Linkedin, Instagram, Twitter, Mail
} from 'lucide-react';

const MainLayout = () => {
  const { experienceSelected } = useExperience();

  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      
      <AnimatePresence mode="wait">
        {!experienceSelected ? (
          <ExperienceSelector key="selector" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Navigation />
            
            <section id="home">
              <Hero />
            </section>
            
            <ProjectsSection />
            
            {/* Timeline Section */}
            <Timeline />
            
            {/* Editing Highlight Section */}
            <EditingSection />
            
            {/* Skill Library Section */}
            <SkillLibrary />
            
            <section id="music" className="py-20 px-4 bg-space-blue/30">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold title-gradient mb-4">Music Production</h2>
                  <p className="text-xl max-w-2xl mx-auto">
                    Listen to my latest compositions and productions
                  </p>
                </motion.div>
                
                <div className="glass-panel p-8">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      className="w-full h-80"
                      src="https://www.youtube.com/embed/jfKfPfyJRdk" 
                      title="YouTube video player" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="contact" className="py-20 px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold title-gradient mb-4">Get in Touch</h2>
                  <p className="text-xl max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Send me a message and let's create something amazing together!
                  </p>
                </motion.div>
                
                <ContactForm />
              </div>
            </section>
            
            <footer className="py-10 px-4 border-t border-white/10">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-heading font-bold title-gradient mb-2">
                      Aayan Bothra
                    </h2>
                    <p className="text-gray-400">
                      Editor • Motion Designer • Fullstack Developer • Musician
                    </p>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
                  © {new Date().getFullYear()} Aayan Bothra. All rights reserved.
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Index = () => {
  return (
    <ExperienceProvider>
      <MainLayout />
    </ExperienceProvider>
  );
};

export default Index;
