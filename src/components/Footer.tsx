export default function Footer() {
  return (
    <footer className="bg-neutral-900 dark:bg-black text-white py-12 px-6 md:px-12 border-t border-neutral-800 dark:border-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-2xl font-bold tracking-tighter">
          Ayush
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-neutral-400">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
        </div>
        
        <div className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Ayush Sahu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
