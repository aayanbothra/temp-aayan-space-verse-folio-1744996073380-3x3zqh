import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Code, FileText, Laptop, Music, Video, Award, Briefcase } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';

// Types for timeline data
interface TimelineEntry {
  id: number;
  date: string;
  title: string;
  role: string;
  description: string;
  icon: React.ReactNode;
  links?: { text: string; url: string }[];
  image?: string;
}

// Sample timeline data - this could be moved to a JSON file or CMS
const timelineData: TimelineEntry[] = [
  {
    id: 1,
    date: "2023 - Present",
    title: "Portfolio Website Redesign",
    role: "Fullstack Dev",
    description: "Comprehensive redesign of personal portfolio using React, Framer Motion, and Tailwind CSS.",
    icon: <Code className="text-space-purple" />,
    links: [{ text: "View Project", url: "#" }],
    image: "https://images.unsplash.com/photo-1581092921461-eab64ef6b38c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    date: "2022 - 2023",
    title: "Motion Design Collection",
    role: "Lead Editor",
    description: "Created a series of motion design pieces for various clients using After Effects and Cinema 4D.",
    icon: <Video className="text-space-purple" />,
    links: [{ text: "Watch Demo", url: "#" }],
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    date: "2021 - 2022",
    title: "Ambient Music Album",
    role: "Composer",
    description: "Composed and produced a full-length ambient music album using FL Studio and analog synthesizers.",
    icon: <Music className="text-space-purple" />,
    links: [{ text: "Listen", url: "#" }],
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    date: "2020 - 2021",
    title: "E-commerce Platform",
    role: "Fullstack Dev",
    description: "Developed a complete e-commerce solution with React, Node.js, and MongoDB.",
    icon: <Laptop className="text-space-purple" />,
    links: [{ text: "Case Study", url: "#" }]
  },
  {
    id: 5,
    date: "2019 - 2020",
    title: "Documentary Edit",
    role: "Video Editor",
    description: "Edited a feature-length documentary about sustainable urban development.",
    icon: <FileText className="text-space-purple" />,
    links: [{ text: "Trailer", url: "#" }]
  },
];

const Timeline = () => {
  const { theme } = useTheme();
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });
  
  return (
    <section id="timeline" className="py-20 px-4" ref={timelineRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold title-gradient mb-4">My Journey</h2>
          <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            A chronological timeline of my key projects, roles, and experiences
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline center line */}
          <div className="timeline-line"></div>

          {/* Timeline entries */}
          {timelineData.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row md:items-center gap-4 mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-space-purple shadow-lg shadow-space-purple/50 flex items-center justify-center z-10">
                <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
              </div>
              
              {/* Date marker */}
              <div className={`md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} pl-8 md:pl-0`}>
                <div className={`px-4 py-2 rounded-lg glass-panel flex items-center justify-center ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <Calendar className="mr-2 text-space-purple" size={16} />
                  <span className="font-medium">{entry.date}</span>
                </div>
              </div>

              {/* Content */}
              <motion.div 
                className={`md:w-1/2 glass-panel p-6 ml-8 md:ml-0 ${
                  index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                }`}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-3">
                  <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/5' : 'bg-purple-100/50'} mr-3`}>
                    {entry.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{entry.title}</h3>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      theme === 'dark' ? 'bg-space-purple/20 text-space-purple-light' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {entry.role}
                    </span>
                  </div>
                </div>
                
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {entry.description}
                </p>
                
                {entry.image && (
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={entry.image} 
                      alt={entry.title} 
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                )}
                
                {entry.links && (
                  <div className="flex gap-2">
                    {entry.links.map((link, i) => (
                      <a 
                        key={i}
                        href={link.url}
                        className={`text-sm px-3 py-1 rounded-full border ${
                          theme === 'dark' 
                            ? 'border-space-purple/30 hover:bg-space-purple/20 text-gray-200' 
                            : 'border-purple-300 hover:bg-purple-100 text-purple-800'
                        } transition-colors`}
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            variant="outline"
            className={`${theme === 'dark' ? 'border-white/20 text-white hover:bg-white/5' : 'border-purple-300 text-purple-800 hover:bg-purple-100'}`}
          >
            <Award className="mr-2 h-4 w-4" />
            View More Milestones
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
