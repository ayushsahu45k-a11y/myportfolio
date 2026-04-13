import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-neutral-950 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-12">
              I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative magic or data-driven insights, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform">
                  <Mail className="text-rose-600 dark:text-rose-400" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-500 dark:text-neutral-500 uppercase tracking-wider mb-1">Email</h4>
                  <a href="mailto:ayushsahu.45k@gmail.com" className="text-lg font-medium text-neutral-900 dark:text-white hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
                    ayushsahu.45k@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform">
                  <Phone className="text-violet-600 dark:text-violet-400" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-500 dark:text-neutral-500 uppercase tracking-wider mb-1">Phone</h4>
                  <a href="tel:+919005538494" className="text-lg font-medium text-neutral-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                    +91 9005538494
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform">
                  <MapPin className="text-emerald-600 dark:text-emerald-400" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-500 dark:text-neutral-500 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-lg font-medium text-neutral-900 dark:text-white">
                    Bhopal, Madhya Pradesh, 462022
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex gap-4">
              <a href="https://github.com/ayushsahu45" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-all hover:-translate-y-1">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/ayush-sahu-08277330b" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-50 dark:bg-neutral-900 p-8 md:p-10 rounded-[2.5rem] border border-neutral-100 dark:border-neutral-800"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-5 py-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 dark:focus:ring-rose-500 transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-5 py-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 dark:focus:ring-rose-500 transition-shadow"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 dark:focus:ring-rose-500 transition-shadow resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-rose-200 dark:hover:shadow-rose-900/30 hover:-translate-y-1 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
