import { motion } from 'motion/react';
import { Monitor, Smartphone, TrendingUp, Mail, Zap, Code2, Database, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="w-8 h-8 text-rose-500 group-hover:text-white transition-colors" />,
    title: "Web Development",
    description: "Skilled in developing responsive and user-friendly web applications using modern front-end and back-end technologies.",
    hoverClass: "hover:bg-rose-600 dark:hover:bg-rose-600",
    gradient: "from-rose-500 to-rose-600"
  },
  {
    icon: <Smartphone className="w-8 h-8 text-violet-500 group-hover:text-white transition-colors" />,
    title: "App Development",
    description: "Developed user-centric mobile applications with optimized performance and seamless functionality using modern development frameworks.",
    hoverClass: "hover:bg-violet-600 dark:hover:bg-violet-600",
    gradient: "from-violet-500 to-violet-600"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-emerald-500 group-hover:text-white transition-colors" />,
    title: "Data Science & ML",
    description: "Building predictive models, analyzing complex datasets, and integrating AI solutions to solve real-world problems.",
    hoverClass: "hover:bg-emerald-600 dark:hover:bg-emerald-600",
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    icon: <Mail className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors" />,
    title: "Digital Strategy",
    description: "Executed data-driven strategies to enhance visibility, engagement, and growth for digital products.",
    hoverClass: "hover:bg-amber-600 dark:hover:bg-amber-600",
    gradient: "from-amber-500 to-amber-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-neutral-950 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-4">Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Features & Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-violet-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`relative p-8 rounded-3xl bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200 dark:border-neutral-700 ${service.hoverClass} hover:text-white dark:hover:text-white transition-all duration-500 group hover:shadow-2xl overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-800 group-hover:bg-white/20 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 group-hover:text-white/90 leading-relaxed text-sm transition-colors duration-500">
                  {service.description}
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
