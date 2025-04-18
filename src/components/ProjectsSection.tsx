
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Code, PlayCircle, Music, FileText } from 'lucide-react';

// Project data with expanded information
const projectItems = [
  {
    title: "Portfolio Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1581092921461-eab64ef6b38c?q=80&w=2070&auto=format&fit=crop",
    icon: <Code />,
    description: "A responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features smooth animations, dark/light mode, and a custom design system.",
    links: [
      { url: "https://github.com/aayanbothra/portfolio", label: "Source Code", icon: "github" },
      { url: "https://aayanbothra.com", label: "Live Demo", icon: "external" }
    ],
    tools: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Music Visualizer",
    category: "Motion Design",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
    icon: <PlayCircle />,
    description: "An audio-reactive visualizer that creates dynamic animations based on music frequencies. Built with WebGL and Three.js for immersive visual experiences.",
    links: [
      { url: "https://github.com/aayanbothra/visualizer", label: "View Project", icon: "github" }
    ],
    tools: ["Three.js", "WebGL", "JavaScript", "Web Audio API"]
  },
  {
    title: "Ambient Album",
    category: "Music Production",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop",
    icon: <Music />,
    description: "A collection of ambient tracks exploring themes of space, technology, and human emotion. Composed and produced using a mix of analog synthesizers and digital tools.",
    links: [
      { url: "https://soundcloud.com/aayanbothra", label: "Listen on SoundCloud", icon: "external" }
    ],
    tools: ["FL Studio", "Ableton Live", "Analog Synthesizers"]
  },
  {
    title: "Brand Identity",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
    icon: <FileText />,
    description: "Complete brand identity design for a tech startup, including logo design, color palette, typography system, and brand guidelines document.",
    links: [
      { url: "https://dribbble.com/aayanbothra", label: "View on Dribbble", icon: "external" }
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold title-gradient mb-4">Featured Projects</h2>
          <p className="text-xl max-w-2xl mx-auto">
            A selection of my work across various creative disciplines
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectItems.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              image={project.image}
              icon={project.icon}
              description={project.description}
              links={project.links}
              tools={project.tools}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
