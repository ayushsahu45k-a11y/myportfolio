import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Map, Network, Leaf, Bot, Train, Heart } from 'lucide-react';

const projects = [
  {
    title: "SafeRoute",
    description: "A smart web application that predicts accident risk in real time using live data like weather, traffic, and route conditions. Calculates accurate routes and distances using map APIs. Uses a lightweight machine learning model to dynamically assess risk levels.",
    tags: ["Machine Learning", "Map API", "Real-time"],
    categories: ["AI", "Data Science"],
    live: "https://safe-route-cyan.vercel.app",
    github: "https://github.com/ayushsahu45k-a11y/SafeRoute",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800",
    icon: Map,
    gradient: "from-emerald-400 to-teal-600",
    color: "emerald"
  },
  {
    title: "Multi-AI Analytics Platform",
    description: "Streamlit-based app integrating Machine Learning, Deep Learning, NLP, and Data Visualization. Supports model training (RF, XGBoost, SVM), image classification, sentiment analysis, and interactive dashboards—all in one simple, no-API setup.",
    tags: ["Streamlit", "ML/DL", "NLP", "Python"],
    categories: ["AI", "Data Science"],
    live: "https://huggingface.co/spaces/ayushsahu45/Multi-AI-Analytics-Platform",
    github: "https://github.com/ayushsahu45k-a11y/Multi-AI-Analytics-Platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    icon: Network,
    gradient: "from-violet-400 to-purple-600",
    color: "violet"
  },
  {
    title: "Agri-Vision-Ai",
    description: "An intelligent farming assistant designed to help farmers make better agricultural decisions. Using machine learning, real-time weather data, and soil analysis, the app predicts the most suitable crops for a farmer's land.",
    tags: ["Machine Learning", "Weather API", "Agriculture"],
    categories: ["AI", "Data Science"],
    live: "https://agri-vision-ai-1-m10.vercel.app",
    github: "https://github.com/ayushsahu45k-a11y/Agri-Vision-Ai",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800",
    icon: Leaf,
    gradient: "from-amber-400 to-orange-500",
    color: "amber"
  },
  {
    title: "Kyoto-X",
    description: "A smart, context-aware AI chatbot built with React and TypeScript. Offers multi-session chat, modern UI, fast responses, and customizable features. Designed for personal assistance, learning, and AI experimentation.",
    tags: ["React", "TypeScript", "AI"],
    categories: ["AI", "Web Development"],
    live: "https://kyoto-x-30-cy11etp1u-ayush-sahus-projects-10ca795a.vercel.app/",
    github: "https://github.com/ayushsahu45k-a11y/Kyoto-X",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    icon: Bot,
    gradient: "from-rose-400 to-red-500",
    color: "rose"
  },
  {
    title: "railoptix-ai-controller",
    description: "A prototype of an intelligent decision-support system that assists railway traffic controllers in making optimized, real-time decisions for train movements using AI-powered recommendations and simulations.",
    tags: ["AI", "Simulation", "Optimization"],
    categories: ["AI"],
    github: "https://github.com/ayushsahu45k-a11y/railoptix-ai-controller",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800",
    icon: Train,
    gradient: "from-orange-400 to-rose-500",
    color: "orange"
  },
  {
    title: "Royal-Vows",
    description: "A comprehensive wedding destination booking system designed to streamline the process of finding and securing venues and services for weddings.",
    tags: ["Web Development", "Booking System"],
    categories: ["Web Development"],
    github: "https://github.com/ayushsahu45k-a11y/Royal-Vows",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
    icon: Heart,
    gradient: "from-fuchsia-400 to-pink-500",
    color: "fuchsia"
  }
];

const categories = ["All", "Web Development", "Data Science", "AI"];

const getColorClasses = (color: string) => {
  const colors: Record<string, string> = {
    emerald: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300",
    violet: "bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300",
    amber: "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300",
    rose: "bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300",
    orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300",
    fuchsia: "bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-800 dark:text-fuchsia-300",
  };
  return colors[color] || "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200";
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  
  const filteredProjects = projects.filter(p => filter === "All" || p.categories.includes(filter));

  return (
    <section id="projects" className="py-20 bg-neutral-50 dark:bg-neutral-900 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-bold tracking-widest text-violet-500 uppercase mb-4">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Featured Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mb-8"></div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mb-8">
            A showcase of my recent projects demonstrating expertise in full-stack development, machine learning, and creative problem-solving.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-md' 
                    : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-violet-500 dark:hover:border-violet-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white dark:bg-neutral-950 rounded-3xl p-6 border border-neutral-100 dark:border-neutral-800 hover:shadow-2xl hover:shadow-neutral-200/50 dark:hover:shadow-black/50 transition-all duration-300 flex flex-col h-full group cursor-pointer"
              >
                <div className="h-48 w-full mb-6 overflow-hidden rounded-2xl relative">
                  <div className="absolute inset-0 bg-neutral-900/10 dark:bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${project.gradient}`}>
                      <project.icon size={64} className="text-white opacity-90 group-hover:scale-110 transition-transform duration-700 drop-shadow-lg" />
                    </div>
                  )}

                </div>
                
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{project.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8 flex-grow leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`px-3 py-1 text-xs font-bold rounded-full ${getColorClasses(project.color)}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-neutral-100 dark:border-neutral-800">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      <Github size={18} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white hover:text-rose-600 dark:hover:text-rose-400 transition-colors ml-4"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
