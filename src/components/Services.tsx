import { motion } from 'motion/react';
import { Monitor, Smartphone, TrendingUp, Mail } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="w-8 h-8 text-rose-500 group-hover:text-white transition-colors" />,
    title: "Web Development",
    description: "Skilled in developing responsive and user-friendly web applications using modern front-end and back-end technologies.",
    hoverClass: "hover:bg-rose-600 dark:hover:bg-rose-600"
  },
  {
    icon: <Smartphone className="w-8 h-8 text-violet-500 group-hover:text-white transition-colors" />,
    title: "App Development",
    description: "Developed user-centric mobile applications with optimized performance and seamless functionality using modern development frameworks.",
    hoverClass: "hover:bg-violet-600 dark:hover:bg-violet-600"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-emerald-500 group-hover:text-white transition-colors" />,
    title: "Data Science & ML",
    description: "Building predictive models, analyzing complex datasets, and integrating AI solutions to solve real-world problems.",
    hoverClass: "hover:bg-emerald-600 dark:hover:bg-emerald-600"
  },
  {
    icon: <Mail className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors" />,
    title: "Digital Strategy",
    description: "Executed data-driven strategies to enhance visibility, engagement, and growth for digital products.",
    hoverClass: "hover:bg-amber-600 dark:hover:bg-amber-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-neutral-950 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-4">Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Features & Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-violet-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 ${service.hoverClass} hover:text-white dark:hover:text-white transition-all duration-500 group hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-black/50`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-500 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white group-hover:text-white">{service.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 group-hover:text-white/90 leading-relaxed text-sm transition-colors duration-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
