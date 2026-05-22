import { motion } from 'motion/react';
import { Mail, Linkedin, Phone, MapPin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-white/20"></span>
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">Connect</span>
            <span className="w-12 h-[1px] bg-white/20"></span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display font-medium text-white tracking-tight mb-8">
            Get in touch.
          </h2>
          
          <p className="text-zinc-400 text-lg mb-16 max-w-xl mx-auto font-light">
            Currently open for new opportunities to build scalable and resilient cloud architectures. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <a href="mailto:vsrahul822@gmail.com" className="glass-card flex flex-col items-center justify-center p-8 transition-colors group">
              <Mail className="w-6 h-6 text-white mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-[11px] uppercase tracking-widest text-zinc-400 font-mono">Email</span>
            </a>
            
            <a href="tel:+917975844822" className="glass-card flex flex-col items-center justify-center p-8 transition-colors group">
              <Phone className="w-6 h-6 text-white mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-[11px] uppercase tracking-widest text-zinc-400 font-mono">Phone</span>
            </a>
            
            <a href="#" className="glass-card flex flex-col items-center justify-center p-8 transition-colors group">
              <Linkedin className="w-6 h-6 text-white mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-[11px] uppercase tracking-widest text-zinc-400 font-mono">LinkedIn</span>
            </a>

            <div className="glass-card flex flex-col items-center justify-center p-8 group">
              <MapPin className="w-6 h-6 text-white mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-[11px] uppercase tracking-widest text-zinc-400 font-mono">Bengaluru</span>
            </div>
          </div>
          
          <a href="mailto:vsrahul822@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors">
            Say Hello
          </a>
        </motion.div>
      </div>

      <div className="mt-32 pt-8 border-t border-white/5 text-center flex flex-col items-center">
        <p className="text-zinc-600 text-sm font-light">
          Designed & Built with React & Tailwind. 
        </p>
        <p className="text-zinc-700 font-mono text-[10px] uppercase tracking-widest mt-4">© {new Date().getFullYear()} Rahul V.</p>
      </div>
    </section>
  );
}
