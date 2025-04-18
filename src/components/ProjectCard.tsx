
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react';

interface Link {
  url: string;
  label: string;
  icon: string; // Changed to string type
}

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  icon: React.ReactNode;
  description: string;
  links?: Link[];
  tools?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  image,
  icon,
  description,
  links,
  tools,
}) => {
  const { theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Function to render the appropriate icon based on the icon string
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={16} />;
      case 'external':
        return <ExternalLink size={16} />;
      default:
        return <ExternalLink size={16} />;
    }
  };

  return (
    <motion.div
      layout
      className={isExpanded ? "project-card-expanded" : "project-card"}
      whileHover={!isExpanded ? { y: -5 } : {}}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div 
        className="relative w-full h-48 rounded-t-xl overflow-hidden cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
        />
        <div className={`absolute top-3 right-3 p-2 rounded-full ${theme === 'dark' ? 'bg-black/40' : 'bg-white/70'}`}>
          {icon}
        </div>
        <div className={`absolute bottom-0 left-0 right-0 p-4 ${theme === 'dark' ? 'bg-gradient-to-t from-black/80 to-transparent' : 'bg-gradient-to-t from-white/80 to-transparent'}`}>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${theme === 'dark' ? 'bg-space-purple/40 text-white' : 'bg-purple-100 text-purple-800'}`}>
            {category}
          </span>
          <h3 className={`text-xl font-bold mt-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
        </div>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-6"
          >
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{description}</p>
            
            {tools && tools.length > 0 && (
              <div className="mb-4">
                <h4 className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <span 
                      key={index} 
                      className={`text-xs px-2 py-1 rounded-full ${
                        theme === 'dark' 
                          ? 'bg-white/10 text-gray-200' 
                          : 'bg-purple-50 text-purple-700'
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {links && links.length > 0 && (
              <div className="flex gap-3">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-3 py-2 rounded-full text-xs font-medium ${
                      theme === 'dark'
                        ? 'bg-space-purple/20 hover:bg-space-purple/30 text-space-purple-light'
                        : 'bg-purple-100 hover:bg-purple-200 text-purple-800'
                    }`}
                  >
                    {renderIcon(link.icon)}
                    <span className="ml-1">{link.label}</span>
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full py-2 flex items-center justify-center ${
          theme === 'dark' 
            ? 'hover:bg-white/5 text-gray-300' 
            : 'hover:bg-purple-50 text-gray-700'
        } rounded-b-xl transition-colors`}
      >
        {isExpanded ? (
          <>
            <span className="text-sm mr-1">Show less</span>
            <ChevronUp size={16} />
          </>
        ) : (
          <>
            <span className="text-sm mr-1">Show more</span>
            <ChevronDown size={16} />
          </>
        )}
      </button>
    </motion.div>
  );
};

export default ProjectCard;
