import React, { useState, useEffect, useLayoutEffect } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Project from './sections/Project';
import Writes from './sections/Writes';
import Contact from './sections/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  // () => {
  //     if (typeof window !== 'undefined') {
  //       const savedTheme = localStorage.getItem('theme');
  //       if (savedTheme) {
  //         return savedTheme === 'dark';
  //       }
  //       return false; 
  //     }
  //     return false;
  //   });

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

  useLayoutEffect(() => {
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return;

    const targets = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0,
    });

    targets.forEach((element) => {
      element.classList.add('reveal-pending');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-primary dark:text-white font-sans selection:bg-neutral-200 dark:selection:bg-neutral-700 transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Writes />
      <Contact />
      
      <Footer />
    </div>
  );
}

export default App;