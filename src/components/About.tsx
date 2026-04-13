import { motion } from 'motion/react';
import { Code2, GraduationCap, FolderOpen, Terminal, Brain, Database, Atom, BarChart, FileCode2 } from 'lucide-react';
import aboutImage from './img2.jpg';

const skills = [
  { name: 'Python', level: 90, color: 'bg-blue-500', icon: <Terminal size={16} /> },
  { name: 'Machine Learning', level: 85, color: 'bg-emerald-500', icon: <Brain size={16} /> },
  { name: 'SQL', level: 80, color: 'bg-amber-500', icon: <Database size={16} /> },
  { name: 'React', level: 75, color: 'bg-cyan-500', icon: <Atom size={16} /> },
  { name: 'Power BI', level: 85, color: 'bg-yellow-500', icon: <BarChart size={16} /> },
  { name: 'JavaScript/TypeScript', level: 70, color: 'bg-rose-500', icon: <FileCode2 size={16} /> },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-neutral-950 px-6 md:px-12 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-bold tracking-widest text-rose-500 uppercase mb-4">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Building Meaningful <br className="hidden md:block" />
            Digital Experiences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-violet-200/50 dark:shadow-violet-900/20 border-8 border-white dark:border-neutral-900 relative z-10">
              <img 
                src={aboutImage} 
                alt="Anime Aesthetic" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-violet-400 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-20 animate-pulse z-0"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-emerald-400 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-10 animate-pulse z-0" style={{ animationDelay: '1.5s' }}></div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-12"
            >
              <p>
                I'm a creative front-end developer and data analyst passionate about building modern, responsive web experiences and extracting actionable insights from complex datasets. My journey began with a love for design and evolved into a deep curiosity for how data and the web work together.
              </p>
              <p>
                When I'm not coding or analyzing data, I enjoy learning new technologies, improving my machine learning models, and exploring better ways to make the web faster and more engaging. I believe in continuous learning, attention to detail, and the power of clean, meaningful design.
              </p>
            </motion.div>

            <div className="mb-12">
               <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
                 <Code2 className="text-rose-500" /> Core Skills
               </h3>
               <div className="space-y-5">
                 {skills.map((skill, index) => (
                   <div key={index}>
                     <div className="flex justify-between mb-2">
                       <span className="text-sm font-bold text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                         <span className="text-neutral-400 dark:text-neutral-500">{skill.icon}</span>
                         {skill.name}
                       </span>
                       <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{skill.level}%</span>
                     </div>
                     <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-full h-2.5 overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: `${skill.level}%` }}
                         viewport={{ once: true }}
                         transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                         className={`h-2.5 rounded-full ${skill.color}`}
                       ></motion.div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:bg-white dark:hover:bg-neutral-800 hover:shadow-xl hover:shadow-amber-100 dark:hover:shadow-amber-900/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-bold text-neutral-900 dark:text-white mb-2">Education</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">B.Tech CSE-Data Science in Oriental College of Technology (CGPA: 8.85)</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:bg-white dark:hover:bg-neutral-800 hover:shadow-xl hover:shadow-emerald-100 dark:hover:shadow-emerald-900/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FolderOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-bold text-neutral-900 dark:text-white mb-2">Experience</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Python Intern at TechSimplus Learning & Analyst Assistant at Oneroadmap</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
