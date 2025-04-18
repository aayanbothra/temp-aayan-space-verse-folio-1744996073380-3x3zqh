
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Film, Code, Music, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Editing', href: '#editing', icon: <Film size={16} className="mr-1" /> },
    { name: 'Skills', href: '#skills', icon: <Code size={16} className="mr-1" /> },
    { name: 'Music', href: '#music', icon: <Music size={16} className="mr-1" /> },
    { name: 'Contact', href: '#contact' },
  ];
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className={`${scrolled ? 'nav-blur-fix' : 'bg-transparent'} px-4 py-3 rounded-b-lg flex items-center justify-between transition-all duration-300`}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href="#home" className="text-2xl font-heading font-bold title-gradient">
              Aayan Bothra
            </a>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  theme === 'dark' 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-purple-900'
                } transition-colors duration-200 flex items-center font-medium`}
              >
                {item.icon && item.icon}
                {item.name}
              </a>
            ))}
            
            <ThemeToggle />
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className={`${
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                  : 'text-gray-700 hover:text-purple-900 hover:bg-purple-100/50'
              }`}
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="nav-blur-fix mt-2 rounded-lg px-4 py-5 md:hidden mx-4"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-700 hover:text-purple-900'
                  } transition-colors duration-200 py-2 flex items-center`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon && item.icon}
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
