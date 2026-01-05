import { MapPin, ArrowUpRight, Mail } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS, HERO_IMAGES } from "../constants";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
        
        <div className="space-y-8">
          
          <div className="flex items-center gap-3 text-sm font-medium text-secondary dark:text-neutral-400">
            <div className="flex items-center gap-1">
              <MapPin size={16} className="text-primary dark:text-white" />
              {PERSONAL_INFO.location}
            </div>
            <span className="text-neutral-300 dark:text-neutral-600">•</span>
            <div className="text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full border border-green-100 dark:border-green-800">
              {PERSONAL_INFO.status}
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold lg:text-7xl text-primary dark:text-white leading-[0.9]">
            Muhammad Abid Baihaqi Al Faridzi <br /> 
            <div className="text-2xl md:text-3xl lg:text-4xl text-secondary dark:text-neutral-400 mt-3">
              Informatics Student
            </div>
          </h1>

          <p className="text-xl text-secondary dark:text-neutral-400 max-w-lg leading-relaxed">
            Passionate about Data Science, Machine Learning, and AI. 
            Dedicated to leveraging data-driven insights to solve real world problems and build innovative solutions. 
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#projects" 
              className="bg-primary dark:bg-white text-white dark:text-primary px-8 py-4 rounded-xl font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition flex items-center gap-2"
            >
              View My Work <ArrowUpRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="border border-neutral-200 dark:border-neutral-700 text-primary dark:text-white px-8 py-4 rounded-xl font-semibold hover:bg-surface dark:hover:bg-neutral-800 transition flex items-center gap-2"
            >
              <Mail size={18} />
              Get In Touch
            </a>
          </div>

          <div className="pt-8 flex gap-6 text-neutral-400 dark:text-neutral-500">
            {SOCIAL_LINKS.map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-primary dark:hover:text-white transition hover:scale-110 transform"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 h-full relative">
          <div className="flex flex-col gap-4">
            <img 
              src={HERO_IMAGES[0].src} 
              alt={HERO_IMAGES[0].alt}
              className="w-full h-80 object-cover rounded-2xl hover:scale-105 transition-transform duration-300 shadow-sm dark:shadow-none dark:opacity-90"
            />
            <img 
              src={HERO_IMAGES[2].src} 
              alt={HERO_IMAGES[2].alt}
              className="w-full h-60 object-cover rounded-2xl hover:scale-105 transition-transform duration-300 shadow-sm dark:shadow-none dark:opacity-90"
            />
          </div>
          <div className="flex flex-col gap-4 pt-12">
            <img 
              src={HERO_IMAGES[1].src} 
              alt={HERO_IMAGES[1].alt}
              className="w-full h-60 object-cover rounded-2xl hover:scale-105 transition-transform duration-300 shadow-sm dark:shadow-none dark:opacity-90"
            />
            <img 
              src={HERO_IMAGES[3].src} 
              alt={HERO_IMAGES[3].alt}
              className="w-full h-80 object-cover rounded-2xl hover:scale-105 transition-transform duration-300 shadow-sm dark:shadow-none dark:opacity-90"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;