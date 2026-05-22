import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Database, Cloud, Code2, ShieldAlert } from 'lucide-react';

const Typewriter = ({ texts, delay = 100, pause = 2000 }: { texts: string[], delay?: number, pause?: number }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText.length > 0) {
        timeout = setTimeout(() => setCurrentText(currentText.slice(0, -1)), delay / 2);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (currentText.length < texts[currentTextIndex].length) {
        timeout = setTimeout(() => setCurrentText(texts[currentTextIndex].slice(0, currentText.length + 1)), delay);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, delay, pause]);

  return (
    <span className="inline-block min-w-[20px]">
      {currentText}
      <span className="animate-pulse text-cyan-400">|</span>
    </span>
  );
};

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20 overflow-hidden bg-[#050505]">
      {/* Background abstract gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zinc-800/10 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full mt-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-7 space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-zinc-400 uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
              Based in Bengaluru, India
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold text-white tracking-tighter leading-[1.1]">
              Rahul V<span className="text-zinc-600 font-light ml-2">_</span>
              <br/>
              Cloud & Data.
            </h1>
            
            <h2 className="text-xl md:text-2xl font-light text-zinc-400 h-10 tracking-wide">
              <Typewriter texts={['Architecting data pipelines', 'LLM-driven resolution systems', 'AWS Infrastructure automation']} />
            </h2>
            
            <p className="text-lg text-zinc-500 max-w-xl leading-relaxed font-light">
              Junior Data Engineer at Accenture. Architecting data pipelines for Fortune 500 insurance giants with a focus on automation and high-velocity processing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="#projects" 
                className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white hover:border-white transition-colors flex items-center justify-center"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5 relative hidden md:block"
          >
            <div className="glass-card p-10 flex flex-col justify-center items-center h-full min-h-[400px] border border-white/10 group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent"></div>
               
               <div className="relative z-10 w-full">
                 <h3 className="section-heading mb-6">Core Focus</h3>
                 <div className="space-y-4 w-full">
                   {['AWS Cloud Infrastructure', 'Data Lake Architecture', 'Streaming Pipelines', 'LLM Integrations'].map((skill, i) => (
                     <div key={i} className="flex justify-between items-center pb-4 border-b border-white/5 last:border-0 group-hover:border-white/20 transition-colors">
                       <span className="text-lg font-display text-white">{skill}</span>
                       <span className="text-zinc-600 font-mono text-sm leading-none">0{i+1}</span>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
