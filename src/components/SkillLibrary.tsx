
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Code, Figma, FileCode, Film, Laptop, Layers, Music, Package, Palette, Search, X, Info } from 'lucide-react';

// Types for skill data
interface Skill {
  id: number;
  name: string;
  category: 'design' | 'development' | 'music' | 'editing' | 'webstack';
  description: string;
  icon: React.ReactNode;
  level?: number; // Optional mastery level from 0-100
  details?: string;
}

// Sample skills data
const skillsData: Skill[] = [
  // Design Skills
  {
    id: 1,
    name: "Figma",
    category: "design",
    description: "UI/UX design, prototyping, and design systems",
    icon: <Figma />,
    level: 90,
    details: "Advanced prototyping, component libraries, auto layout, variables, and collaborative design workflows."
  },
  {
    id: 2,
    name: "Photoshop",
    category: "design",
    description: "Photo manipulation, digital painting, and compositing",
    icon: <Palette />,
    level: 85,
    details: "Expert in photo manipulation, compositing, digital painting, and creating visual effects for various projects."
  },
  {
    id: 3,
    name: "Illustrator",
    category: "design",
    description: "Vector graphics, icon design, and typography",
    icon: <Palette />,
    level: 80,
    details: "Creating scalable vector graphics, icon systems, and typography layouts for print and digital media."
  },
  
  // Development Skills
  {
    id: 4,
    name: "React",
    category: "development",
    description: "Frontend framework for building interactive UIs",
    icon: <Code />,
    level: 95,
    details: "Building complex, interactive web applications with React, Redux, Context API, and custom hooks."
  },
  {
    id: 5,
    name: "TypeScript",
    category: "development",
    description: "Strongly typed programming for safer code",
    icon: <FileCode />,
    level: 90,
    details: "Writing type-safe applications that scale with advanced TypeScript features like generics, utility types, and module augmentation."
  },
  {
    id: 6,
    name: "Python",
    category: "development",
    description: "Backend development, data analysis, and automation",
    icon: <Code />,
    level: 85,
    details: "Creating backend services, data processing scripts, and machine learning applications with Python and its ecosystem."
  },
  
  // Music Skills
  {
    id: 7,
    name: "FL Studio",
    category: "music",
    description: "Digital audio workstation for music production",
    icon: <Music />,
    level: 92,
    details: "Producing electronic music, creating sound design elements, and mixing audio for various projects."
  },
  {
    id: 8,
    name: "Classical Piano",
    category: "music",
    description: "Classical training and composition techniques",
    icon: <Music />,
    level: 75,
    details: "Classically trained in piano with experience in composition, arrangement, and performance."
  },
  {
    id: 9,
    name: "Sound Design",
    category: "music",
    description: "Creating unique audio elements and textures",
    icon: <Music />,
    level: 80,
    details: "Crafting immersive sound environments and effects for multimedia projects, including films and games."
  },
  
  // Editing Skills
  {
    id: 10,
    name: "Premiere Pro",
    category: "editing",
    description: "Video editing, color grading, and compositing",
    icon: <Film />,
    level: 95,
    details: "Professional video editing for commercials, short films, documentaries, and online content."
  },
  {
    id: 11,
    name: "After Effects",
    category: "editing",
    description: "Motion graphics, visual effects, and animation",
    icon: <Layers />,
    level: 90,
    details: "Creating complex motion graphics, animations, and visual effects for various video projects."
  },
  {
    id: 12,
    name: "DaVinci Resolve",
    category: "editing",
    description: "Color grading and professional video editing",
    icon: <Film />,
    level: 80,
    details: "Professional color grading and finishing for high-end video projects with advanced node-based workflows."
  },
  
  // Web Stack
  {
    id: 13,
    name: "Next.js",
    category: "webstack",
    description: "React framework for production-grade applications",
    icon: <Laptop />,
    level: 95,
    details: "Building performant, SEO-friendly applications with server-side rendering, static generation, and API routes."
  },
  {
    id: 14,
    name: "Tailwind CSS",
    category: "webstack",
    description: "Utility-first CSS framework for rapid UI development",
    icon: <Laptop />,
    level: 90,
    details: "Creating responsive, custom designs efficiently with utility classes and component extraction."
  },
  {
    id: 15,
    name: "Supabase",
    category: "webstack",
    description: "Open-source Firebase alternative with PostgreSQL",
    icon: <Package />,
    level: 85,
    details: "Implementing authentication, database, and real-time features with Supabase for modern web applications."
  }
];

const SkillLibrary = () => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  
  // Get all unique skill categories
  const categories = ['all', ...Array.from(new Set(skillsData.map(skill => skill.category)))];
  
  // Filter skills based on active filter and search query
  const filteredSkills = skillsData.filter(skill => {
    const matchesFilter = activeFilter === 'all' || skill.category === activeFilter;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleSkillClick = (skill: Skill) => {
    setActiveSkill(activeSkill?.id === skill.id ? null : skill);
  };
  
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold title-gradient mb-4">Skill Library</h2>
          <p className={`text-xl max-w-2xl mx-auto mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            A comprehensive collection of my technical and creative abilities across various disciplines
          </p>
          
          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-3xl mx-auto mb-8">
            <div className="relative flex-grow max-w-md">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} size={18} />
              <input
                type="text"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10 text-white focus:ring-space-purple' 
                    : 'bg-white border-purple-100 text-gray-800 focus:ring-purple-400'
                } border rounded-full py-3 pl-10 pr-4 focus:outline-none focus:ring-2`}
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category 
                      ? theme === 'dark'
                        ? 'bg-space-purple text-white' 
                        : 'bg-purple-600 text-white'
                      : theme === 'dark'
                        ? 'bg-white/5 text-gray-300 hover:bg-white/10'
                        : 'bg-purple-100/50 text-gray-700 hover:bg-purple-100'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              onClick={() => handleSkillClick(skill)}
              className={`skill-card cursor-pointer ${
                activeSkill?.id === skill.id 
                  ? theme === 'dark' 
                    ? 'border-space-purple/50' 
                    : 'border-purple-300'
                  : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${
                  theme === 'dark' 
                    ? 'bg-space-purple/20 text-space-purple-light' 
                    : 'bg-purple-100 text-purple-600'
                }`}>
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{skill.name}</h3>
                  <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {skill.description}
                  </p>
                  
                  {skill.level && (
                    <div className={`w-full ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'} h-2 rounded-full overflow-hidden`}>
                      <motion.div 
                        className="h-full skill-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  )}
                  
                  <div className="mt-2 flex items-center justify-between">
                    <span className={`inline-block text-xs px-2 py-1 rounded-full ${
                      theme === 'dark' 
                        ? 'bg-space-purple/10 text-gray-400' 
                        : 'bg-purple-50 text-gray-500'
                    }`}>
                      {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
                    </span>
                    
                    <Info 
                      size={16} 
                      className={`${
                        theme === 'dark' 
                          ? 'text-gray-400 hover:text-white' 
                          : 'text-gray-500 hover:text-purple-600'
                      } transition-colors`} 
                    />
                  </div>
                </div>
              </div>
              
              {/* Expanded details */}
              <AnimatePresence>
                {activeSkill?.id === skill.id && skill.details && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`mt-4 pt-4 ${theme === 'dark' ? 'border-t border-white/10' : 'border-t border-purple-100'}`}
                  >
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {skill.details}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        {filteredSkills.length === 0 && (
          <div className="text-center py-10">
            <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
              No skills match your search criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillLibrary;
