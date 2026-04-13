import { motion } from 'motion/react';
import { ArrowRight, Download, MapPin, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for Data Science Work
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
            Hi, I'm Ayush
          </h1>
          <h2 className="text-2xl md:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500 mb-6">
            Frontend Developer & Data Scientist
          </h2>
          
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl leading-relaxed">
            I create beautiful, functional, and user-centered digital experiences. With 2+ years of experience in web development and data science, I bring ideas to life through clean code and thoughtful design.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10 text-neutral-600 dark:text-neutral-400 text-sm font-medium">
            <div className="flex items-center gap-2 bg-white dark:bg-neutral-900 px-4 py-2 rounded-lg shadow-sm border border-neutral-100 dark:border-neutral-800">
              <MapPin size={18} className="text-rose-500" />
              <span>Bhopal, Madhya Pradesh</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-neutral-900 px-4 py-2 rounded-lg shadow-sm border border-neutral-100 dark:border-neutral-800">
              <Briefcase size={18} className="text-amber-500" />
              <span>Available Now</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 bg-rose-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-rose-700 transition-all shadow-lg shadow-rose-200 dark:shadow-rose-900/20 hover:shadow-rose-300 dark:hover:shadow-rose-900/40 hover:-translate-y-1">
              Hire Me <ArrowRight size={18} />
            </a>
            <a href="/ayush_sahu(1).pdf" download className="inline-flex items-center gap-2 bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white px-8 py-4 rounded-xl font-medium hover:border-orange-500 dark:hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-all hover:-translate-y-1">
              <Download size={18} /> Download CV
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 w-full max-w-md relative"
        >
          <div className="aspect-square rounded-[2.5rem] overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative shadow-2xl shadow-orange-200/50 dark:shadow-orange-900/20 border-8 border-white dark:border-neutral-900 z-10">
            <img 
              src="src/components/img.jpg" 
              alt="Anime Style Illustration" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Colorful Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-400 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-60 dark:opacity-30 animate-pulse z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-400 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-60 dark:opacity-30 animate-pulse z-0" style={{ animationDelay: '2s' }}></div>
        </motion.div>
      </div>
    </section>
  );
}
