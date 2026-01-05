import { Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "../constants";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto mb-20">
      <div className="bg-primary dark:bg-white text-white dark:text-primary border dark:border-white rounded-3xl p-10 md:p-20 text-center transition-colors duration-300">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Collaborate.</h2>
        
        <p className="text-neutral-400 dark:text-neutral-600 mb-10 max-w-xl mx-auto">
          I always welcome new opportunities and connections. Whether it's a project collaboration, internship, research opportunity, or just to say hi, feel free to reach out!
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
          
          <a 
            href={SOCIAL_LINKS.find(social => social.platform == "Email").href} 
            className="flex items-center gap-2 bg-white text-primary dark:bg-primary dark:text-white px-8 py-4 rounded-full font-bold hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
          >
            <Mail size={20} />
            Get in Touch
          </a>

          <a 
            href={SOCIAL_LINKS.find(social => social.platform === "LinkedIn").href} 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 border border-neutral-700 text-white dark:text-primary dark:border-neutral-300 px-8 py-4 rounded-full font-bold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition"
          >
            <Linkedin size={20} />
            Connect on LinkedIn
          </a>
        </div>

        <div className="pt-8 flex flex-wrap gap-10 text-neutral-400 justify-center border-t border-neutral-800/50 dark:border-neutral-200 mt-8">
            {SOCIAL_LINKS.map((social, idx) => (
              social.href.includes('linkedin') ? null : (

                <div 
                  key={idx} 
                  className="flex flex-col items-center gap-3 transition-all duration-300 transform group cursor-default"
                >
                  
                  <div className="p-2 rounded-full bg-white/5 dark:bg-neutral-100 text-white dark:text-primary transition-colors">
                    {social.icon}
                  </div>
                  
                  <span className="text-xs font-medium tracking-wide text-center text-white dark:text-primary transition-colors">
                    {social.name}
                  </span>
                </div>
              )
            ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;