import { ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import React, { useState } from "react";
import { EXPERIENCE, VOLUNTEER, ACHIEVEMENTS } from "../constants";


const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % ACHIEVEMENTS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + ACHIEVEMENTS.length) % ACHIEVEMENTS.length);
  };

  const visibleAwards = [
    ACHIEVEMENTS[currentIndex % ACHIEVEMENTS.length],
    ACHIEVEMENTS[(currentIndex + 1) % ACHIEVEMENTS.length],
    ACHIEVEMENTS[(currentIndex + 2) % ACHIEVEMENTS.length],
  ];
  
  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      {EXPERIENCE.length > 0 &&
        <div className="mb-16">
          <h2 className="font-semibold text-2xl md:text-3lg font-light text-center mb-16 text-primary dark:text-white tracking-tight">
            Professional Experiences
          </h2>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-12">
                
                <div className="flex flex-col md:items-end">
                  <div className="font-medium text-secondary dark:text-neutral-400 text-sm md:text-base mb-1">
                    {exp.year}
                  </div>
                  <div className="text-xs text-neutral-400 dark:text-neutral-500 font-medium tracking-wide">
                    {exp.place}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary dark:text-white mb-1">{exp.role}</h3>
                  <div className="text-secondary dark:text-neutral-400 font-medium mb-4">{exp.company}</div>
                  
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed text-justify mb-6">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      }

      {VOLUNTEER.length > 0 &&
        <div className="mb-16">
          <h2 className="font-semibold text-2xl md:text-3lg font-light text-center mb-16 text-primary dark:text-white tracking-tight">
            Volunteer Experiences
          </h2>
          <div className="space-y-12">
            {VOLUNTEER.map((exp, idx) => ( 
              <div key={idx} className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-12">
                
                <div className="flex flex-col md:items-end">
                  <div className="font-medium text-secondary dark:text-neutral-400 text-sm md:text-base mb-1">
                    {exp.year}
                  </div>
                  <div className="text-xs text-neutral-400 dark:text-neutral-500 font-medium tracking-wide">
                    {exp.place}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary dark:text-white mb-1">{exp.role}</h3>
                  <div className="text-secondary dark:text-neutral-400 font-medium mb-4">{exp.company}</div>
                  
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed text-justify mb-4">
                    {exp.description}
                  </p>

                  {exp.impact && (
                    <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg mb-6">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 text-sm tracking-wide">Impact</h4>
                      <p className="text-blue-800 dark:text-blue-300 leading-relaxed text-justify text-sm">
                        {exp.impact}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      }

      <div>
        <h2 className="font-semibold text-2xl md:text-3l font-light text-center mb-12 text-primary dark:text-white tracking-tight">
          Awards
        </h2>

        <div className="flex items-center gap-4 md:gap-8">
          
          <button 
            onClick={prevSlide}
            className="hidden md:flex shrink-0 p-3 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-primary dark:hover:bg-white hover:text-white dark:hover:text-primary hover:border-primary transition-all duration-300 z-10"
            aria-label="Previous Award"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleAwards.map((award, idx) => (
              <div 
                key={`${award.title}-${idx}`} 
                className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 rounded-2xl hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-xl dark:hover:shadow-neutral-900/50 transition-all duration-300 ease-in-out hover:-translate-y-1 h-full flex flex-col"
              >
                <div className="absolute top-6 right-6 text-neutral-50 dark:text-neutral-800 group-hover:text-neutral-100 dark:group-hover:text-neutral-700 transition-colors duration-300">
                  <Trophy size={32} strokeWidth={1} />
                </div>

                <div className="flex items-center gap-3 text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-4 relative z-10">
                  <span>{award.date}</span>
                  <span>•</span>
                  <span>{award.scale}</span>
                </div>

                <div className="relative z-10 mb-auto">
                  <h3 className="text-xl font-bold text-primary dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors mb-3 min-h-[3.5rem] flex items-end">
                    {award.title}
                  </h3>
                  
                  <div className="mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${award.rank.includes('Finalist') ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700' : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-700'}`}>
                      {award.rank}
                    </span>
                  </div>
                </div>

                <div className="relative z-10 mt-2 border-t border-neutral-100 dark:border-neutral-800 pt-4">
                    <div className="text-sm font-semibold text-neutral-400 dark:text-neutral-500">
                      {award.type}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neutral-200 to-transparent group-hover:from-primary group-hover:to-neutral-400 transition-all duration-300 rounded-b-2xl dark:from-neutral-800 dark:group-hover:from-white dark:group-hover:to-neutral-600"></div>
              </div>
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="hidden md:flex shrink-0 p-3 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-primary dark:hover:bg-white hover:text-white dark:hover:text-primary hover:border-primary transition-all duration-300 z-10"
            aria-label="Next Award"
          >
            <ChevronRight size={24} />
          </button>

        </div>

        <div className="md:hidden flex justify-center gap-6 mt-8">
          <button onClick={prevSlide} className="p-3 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-primary dark:hover:bg-white hover:text-white transition-all">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="p-3 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-primary dark:hover:bg-white hover:text-white transition-all">
            <ChevronRight size={24} />
          </button>
        </div>

      </div>

    </section>
  );
};

export default Experience;