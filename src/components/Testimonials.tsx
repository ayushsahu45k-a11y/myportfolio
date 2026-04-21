import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Ayush is an exceptional developer. His ability to blend data science with intuitive frontend interfaces is truly remarkable. He consistently delivers high-quality work.",
    name: "Sarah Jenkins",
    role: "Product Manager, TechCorp"
  },
  {
    quote: "Working with Ayush on the Multi-AI Analytics platform was a breeze. He delivered clean, maintainable code well ahead of schedule and exceeded our expectations.",
    name: "David Chen",
    role: "Lead Data Scientist, InnovateAI"
  },
  {
    quote: "His attention to detail and proactive problem-solving saved our project. Highly recommend him for any complex web or AI tasks. A true professional.",
    name: "Priya Sharma",
    role: "CTO, StartupX"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-neutral-950 p-8 rounded-3xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-xl dark:hover:shadow-black/30 transition-all duration-300 relative"
            >
              <Quote className="w-10 h-10 text-cyan-100 dark:text-cyan-900/50 absolute top-6 right-6" />
              <p className="text-neutral-600 dark:text-neutral-400 italic mb-8 relative z-10 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
