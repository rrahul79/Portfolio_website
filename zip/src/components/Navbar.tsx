import { motion } from 'motion/react';
import { Terminal, Database, Cloud } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center font-bold text-black text-sm transition-transform group-hover:scale-105">RV</div>
          <span className="font-mono text-xs tracking-widest uppercase text-zinc-400">system.init()</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#tech" className="hover:text-white transition-colors">Stack</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Timeline</a>
          <a 
            href="#contact" 
            className="text-white relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[1px] before:bg-white before:origin-right before:scale-x-0 hover:before:scale-x-100 hover:before:origin-left before:transition-transform before:duration-300"
          >
            Connect
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
