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

      {ACHIEVEMENTS.length > 0 && (
        <div>
          <h2 className="font-semibold text-2xl md:text-3lg font-light text-center mb-12 text-primary dark:text-white tracking-tight">
            Awards
          </h2>

          <div className="flex flex-col border-t border-neutral-200 dark:border-neutral-800">
            {ACHIEVEMENTS.map((award, idx) => (
              <div 
                key={`${award.title}-${idx}`} 
                className="group relative flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-200 dark:border-neutral-800 py-6 md:py-8 px-4 transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
              >
                
                <div className="flex-1 mb-4 md:mb-0 pr-0 md:pr-6">
                  <h3 className="text-lg md:text-xl font-bold text-primary dark:text-white group-hover:text-black dark:group-hover:text-gray-300 transition-colors leading-snug">
                    {award.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-3 text-xs md:text-sm text-neutral-500 dark:text-neutral-400">
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">{award.type}</span>
                    <span className="hidden md:inline">•</span>
                    <span className="bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded md:bg-transparent md:p-0 md:border-none uppercase md:normal-case tracking-wider md:tracking-normal text-[10px] md:text-sm">
                      {award.scale}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-3 md:gap-2">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${award.rank.includes('Finalist') ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700' : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-700'}`}>
                    <Trophy size={14} /> {award.rank}
                  </span>
                  <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                    {award.date}
                  </span>
                </div>

                <div className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-primary dark:group-hover:bg-white transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
};

export default Experience;