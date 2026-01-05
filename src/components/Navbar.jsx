import { Sun, Moon, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { PERSONAL_INFO, NAVIGATION } from "../constants";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tighter text-primary dark:text-white">
          {PERSONAL_INFO.name}
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-secondary dark:text-neutral-400 hover:text-primary dark:hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          
          {/* Theme Toggle Button (Desktop) */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-primary dark:text-white transition-all"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          {/* Theme Toggle Button (Mobile) */}
          <button 
            onClick={toggleTheme} 
            className="p-2 text-primary dark:text-white"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-primary dark:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-800 py-4 px-6 flex flex-col gap-4">
          {NAVIGATION.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-secondary dark:text-neutral-400 hover:text-primary dark:hover:text-white block"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;