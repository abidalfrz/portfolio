import React, { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Project from './sections/Project';
import Contact from './sections/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-primary dark:text-white font-sans selection:bg-neutral-200 dark:selection:bg-neutral-700 transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
      
      <Footer />
    </div>
  );
}

export default App;