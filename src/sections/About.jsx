import { ABOUT_ME, EDUCATION, SKILLS_CATEGORIES } from "../constants";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      
      <div className="grid md:grid-cols-[2fr_1fr] gap-12 mb-16">
        
        <div>
          <h2 className="text-3xl font-bold mb-6 text-primary dark:text-white">About Me</h2>
          <div className="space-y-4 text-secondary dark:text-neutral-400 text-lg text-justify leading-relaxed">
            {ABOUT_ME.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-surface/50 dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 mt-2 md:mt-14 transition-colors">
             <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Achievements</h3>
             <div className="space-y-6">
               <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4">
                 <span className="text-secondary dark:text-neutral-400">Total Projects</span>
                 <span className="text-3xl font-bold text-primary dark:text-white">{ABOUT_ME.stats.projectCount}</span>
               </div>
               <div className="flex items-center justify-between pt-2">
                 <span className="text-secondary dark:text-neutral-400">Total Awards</span>
                 <span className="text-3xl font-bold text-primary dark:text-white">{ABOUT_ME.stats.awardCount}</span>
               </div>
             </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-primary dark:text-white">Education</h2>
        
        <div className="space-y-8">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="border-l-2 border-neutral-100 dark:border-neutral-800 pl-6 relative">
              <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-600"></span>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-primary dark:text-white">{edu.institution}</h3>
                <span className="text-sm font-mono text-secondary dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900 px-2 py-1 rounded">
                  {edu.year}
                </span>
              </div>
              <div className="text-base text-secondary dark:text-neutral-400 mb-4 font-medium">{edu.degree}</div>
              <p className="text-neutral-500 dark:text-neutral-500 text-sm leading-relaxed max-w-3xl">
                <span className="font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">Relevant Coursework:</span>
                {edu.coursework}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-8 text-primary dark:text-white">Tech Stack</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {SKILLS_CATEGORIES.map((category, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-bold text-primary dark:text-white mb-4 border-b border-neutral-100 dark:border-neutral-800 pb-2">
                {category.title}
              </h4>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skillObj, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-3 py-2 rounded-lg hover:border-primary dark:hover:border-neutral-500 hover:bg-surface dark:hover:bg-neutral-800 transition group cursor-default"
                  >
                    <span className="text-xl text-neutral-600 dark:text-neutral-400 group-hover:text-primary dark:group-hover:text-white transition">
                      {skillObj.icon}
                    </span>
                    <span className="text-sm font-medium text-secondary dark:text-neutral-300 group-hover:text-primary dark:group-hover:text-white transition">
                      {skillObj.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;