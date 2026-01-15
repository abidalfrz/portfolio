import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../constants";

const ProjectCard = ({ project }) => {
  const visibleStack = project.techStack.slice(0, 3);
  const remainingCount = project.techStack.length - 3;

  return (
    <div 
      className="w-[320px] md:w-[340px] shrink-0 group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-xl dark:hover:shadow-neutral-900/50 transition-all duration-300 ease-in-out hover:-translate-y-1 h-full flex flex-col snap-center"
    >
      
      <div className="absolute top-6 right-6 text-neutral-50 dark:text-neutral-800 group-hover:text-neutral-100 dark:group-hover:text-neutral-700 transition-colors duration-300">
      </div>

      <div className="relative z-10 flex justify-between items-start mb-4 h-[3.5rem]">
        <h3 className="text-xl font-bold text-primary dark:text-white leading-tight group-hover:text-black dark:group-hover:text-white transition-colors pr-8 line-clamp-2">
          {project.title}
        </h3>
        
        <div className="flex gap-3 shrink-0">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="text-neutral-400 dark:text-neutral-500 hover:text-primary dark:hover:text-white transition-colors">
              <Github size={18} />
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="text-neutral-400 dark:text-neutral-500 hover:text-primary dark:hover:text-white transition-colors">
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="relative z-10 text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3 h-[4.5rem]">
        {project.description}
      </p>

      <div className="relative z-10 mb-6 flex flex-wrap gap-x-4 gap-y-2 h-[3rem] content-start overflow-hidden">
        {project.tags.map((tag, tIdx) => (
          <div key={tIdx} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]"></span>
            <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400 tracking-wide">
              {tag}
            </span>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800">
        <div className="flex flex-wrap items-center gap-2">
          {visibleStack.map((tech, i) => (
            <span key={i} className="text-[10px] font-semibold px-2 py-1 bg-neutral-50 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-md border border-neutral-200 dark:border-neutral-700">
              {tech}
            </span>
          ))}
          {remainingCount > 0 && (
            <span className="text-[10px] font-bold px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-primary dark:text-white rounded-md border border-neutral-200 dark:border-neutral-700">
              +{remainingCount}
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 w-full">
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center justify-center gap-2 py-1 bg-primary dark:bg-white text-white dark:text-primary border border-primary dark:border-white rounded-xl font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all"
          >
            View Project <ExternalLink size={16} />
          </a>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neutral-200 to-transparent group-hover:from-primary group-hover:to-neutral-400 transition-all duration-300 rounded-b-2xl dark:from-neutral-800 dark:group-hover:from-white dark:group-hover:to-neutral-600"></div>

    </div>
  );
};

const Project = () => {
  return (
    <section id="projects" className="py-20 w-full bg-surface/30 dark:bg-neutral-900/30">
      
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-12">
          <h2 className="font-semibold text-2xl md:text-3l font-light text-primary dark:text-white text-center tracking-tight mb-6">
            Featured Projects
          </h2>
          <h3 className="text-center text-secondary dark:text-neutral-400 max-w-2xl mx-auto">
            A collection of my continuously evolving projects, showcasing my expertise in data science, machine learning, and web development.
          </h3>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory no-scrollbar">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
          <div className="w-2 shrink-0"></div>
        </div>
        
        <div className="mt-4 flex justify-center">
          <a 
            href="https://github.com/abidalfrz" 
            target="_blank" 
            rel="noreferrer" 
            className="group flex items-center gap-3 px-6 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-sm transition-all duration-300"
          >
            <Github size={20} className="text-neutral-500 dark:text-neutral-400 group-hover:text-primary dark:group-hover:text-white transition-colors" />
            <span className="font-semibold text-primary dark:text-white">View All Projects</span>
          </a>
        </div>

      </div>

    </section>
  );
};

export default Project;