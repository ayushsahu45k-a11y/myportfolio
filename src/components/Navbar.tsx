import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold tracking-tighter text-neutral-900 dark:text-white hover:text-rose-500 dark:hover:text-rose-400 transition-colors">
          Ayush.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm px-8 py-3 rounded-full shadow-sm border border-neutral-100 dark:border-neutral-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-neutral-600 dark:text-neutral-300 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="text-neutral-600 dark:text-neutral-300 hover:text-rose-500 dark:hover:text-rose-400 transition-colors ml-2">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="text-neutral-900 dark:text-white hover:text-rose-500 dark:hover:text-rose-400 transition-colors">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-neutral-900 dark:text-white hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 shadow-xl border-t border-neutral-100 dark:border-neutral-800 py-4 px-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-neutral-600 dark:text-neutral-300 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
