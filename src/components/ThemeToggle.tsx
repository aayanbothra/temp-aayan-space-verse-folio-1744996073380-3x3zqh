
import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Stars, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      size="icon" 
      variant="ghost" 
      className="relative rounded-full w-10 h-10 bg-transparent hover:bg-white/20 transition-all duration-300"
      onClick={toggleTheme} 
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6 overflow-hidden flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{ 
            rotate: theme === 'dark' ? 0 : 180,
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0
          }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          className="absolute"
        >
          <Moon className="text-purple-300" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{ 
            rotate: theme === 'light' ? 0 : -180,
            scale: theme === 'light' ? 1 : 0,
            opacity: theme === 'light' ? 1 : 0
          }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          className="absolute"
        >
          <Sun className="text-amber-400" />
        </motion.div>
      </div>
      
      {/* Adding subtle stars animation around the toggle in dark mode */}
      {theme === 'dark' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 pointer-events-none"
        >
          <Stars className="absolute text-purple-300/20 w-3 h-3 top-0 right-1 animate-pulse" />
          <Stars className="absolute text-purple-300/30 w-2 h-2 bottom-1 left-0 animate-pulse" style={{ animationDelay: "0.5s" }} />
        </motion.div>
      )}
    </Button>
  );
};

export default ThemeToggle;
