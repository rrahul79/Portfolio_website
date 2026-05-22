import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-white/20"></span>
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">About</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight">
            Bridging infrastructure<br />and intelligence.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="glass-card p-10 h-full flex flex-col justify-center">
              <h3 className="text-lg font-display text-white mb-8 border-b border-white/5 pb-4">Executive Summary</h3>
              <ul className="space-y-6 text-zinc-400 font-light">
                <li className="flex gap-4 items-start">
                  <span className="text-zinc-500 font-mono text-xs mt-1 shrink-0">01</span>
                  <span><strong>1.5+ years</strong> backend / data experience.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-zinc-500 font-mono text-xs mt-1 shrink-0">02</span>
                  <span>Currently building automated solutions at <strong>Accenture</strong> for a Fortune 500 entity.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-zinc-500 font-mono text-xs mt-1 shrink-0">03</span>
                  <span>Specializing in <strong>AWS data pipelines</strong> and AI monitoring systems.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-3 prose prose-invert prose-p:text-zinc-400 prose-strong:text-white max-w-none flex flex-col justify-center"
          >
            <p className="text-xl leading-relaxed mb-6 font-light">
              As a dedicated Cloud & Data Engineer, my mission is to ensure that enterprise-scale data pipelines run reliably, efficiently, and recover autonomously.
            </p>
            <p className="text-lg leading-relaxed mb-6 font-light text-zinc-500">
              My expertise spans <strong>Python scripting, PySpark, Databricks, and deeply integrated AWS architectures</strong>. Recently, I've expanded into the intersection of AI and Ops, establishing <strong>LLM-powered auto-triage systems</strong> using AWS Bedrock that significantly reduce MTTR for pipeline failures.
            </p>
            <p className="text-lg leading-relaxed font-light text-zinc-500">
              Whether deploying a streaming feature engine, establishing a Snowflake data mesh, or engineering DevOps tooling, I thrive on building highly structural and observable cloud systems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
