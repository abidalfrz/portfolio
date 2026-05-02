import { ArrowUpRight, BookOpen } from "lucide-react";
import { WRITES } from "../constants";

const WriteRow = ({ write }) => {
  return (
    <a 
      href={write.link}
      target="_blank"
      rel="noreferrer"
      className="group block border-b border-neutral-200 dark:border-neutral-800 py-8 md:py-10 px-4 md:px-6 transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 first:border-t opacity-60 hover:opacity-100"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-12">
        
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-white leading-tight group-hover:text-black dark:group-hover:text-gray-300 transition-colors">
            {write.title}
          </h3>
          <p className="mt-3 text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">
            {write.description}
          </p>
        </div>

        <div className="shrink-0 flex items-center md:mt-1">
          <div className="flex items-center gap-2 text-sm font-semibold text-neutral-400 group-hover:text-primary dark:group-hover:text-white transition-colors">
            <span className="md:hidden">Read Article</span>
            <div className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
              <ArrowUpRight 
                size={20} 
                className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
              />
            </div>
          </div>
        </div>

      </div>
    </a>
  );
};

const Writes = () => {
  return (
    <section id="writes" className="py-20 w-full bg-surface/30 dark:bg-neutral-900/30">
      
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="mb-12">
          <h2 className="font-semibold text-2xl md:text-3xl text-primary dark:text-white text-center tracking-tight mb-4">
            Featured Writes
          </h2>
          <h3 className="text-center text-secondary dark:text-neutral-400 max-w-2xl mx-auto">
            A collection of my technical articles and insights, sharing knowledge on data science, machine learning, and AI.
          </h3>
        </div>

        <div className="flex flex-col">
          {WRITES.map((write, idx) => (
            <WriteRow key={idx} write={write} />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <a 
            href="https://medium.com/@abidalfaridzi18" 
            target="_blank" 
            rel="noreferrer" 
            className="group flex items-center gap-3 px-6 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-sm transition-all duration-300"
          >
            <BookOpen size={20} className="text-neutral-500 dark:text-neutral-400 group-hover:text-primary dark:group-hover:text-white transition-colors" />
            <span className="font-semibold text-primary dark:text-white">Read More</span>
          </a>
        </div>

      </div>

    </section>
  );
};

export default Writes;