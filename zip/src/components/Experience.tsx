import { motion } from 'motion/react';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

const experienceData = [
  {
    role: "Junior Data Engineer \u2013 Cloud & Automation",
    company: "Accenture Software Solutions",
    location: "Bengaluru",
    date: "Nov 2024 \u2013 Present",
    client: "Fortune 500 U.S. Insurance Client",
    description: [
      "Designed and built scalable ETL data pipelines using AWS Glue, S3, and Lambda.",
      "Monitored cloud infrastructure via AWS CloudWatch, resolving SLA blockages.",
      "Developed Python automation scripts streamlining workflows and deployment.",
      "Led incident response with root cause analysis and maintained operational runbooks.",
      "Built AI-driven automation using AWS Bedrock and Anthropic models."
    ],
    icon: <Briefcase className="w-5 h-5 text-cyan-400" />
  },
  {
    role: "Technical Intern",
    company: "NanoRobotics Embed Technologies",
    location: "Bengaluru",
    date: "Jun 2023 \u2013 Jul 2023",
    client: "R&D Team",
    description: [
      "Built a Python ML pipeline using Scikit-Learn and Pandas achieving 82% accuracy on healthcare data.",
      "Automated analytical workflows saving approximately 30% of manual processing time.",
      "Applied foundational NLP techniques (tokenization, stemming) for text classification models, showcasing direct applicability to DevOps and log analysis tooling."
    ],
    icon: <Briefcase className="w-5 h-5 text-cyan-400" />
  },
  {
    role: "Bachelor of Engineering \u2013 Information Science",
    company: "HKBK College of Engineering",
    location: "Bengaluru",
    date: "2020 \u2013 2024",
    client: "Undergraduate",
    description: [
      "Relevant Coursework: Operating Systems, Computer Networks, Software Engineering, ML & Data Mining.",
      "Graduated with fundamental knowledge of algorithms, structure, and database architecture."
    ],
    icon: <GraduationCap className="w-5 h-5 text-blue-400" />
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative bg-zinc-950/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-white/20"></span>
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">History</span>
            <span className="w-12 h-[1px] bg-white/20"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight">
            Timeline.
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:left-1/2 md:-translate-x-[1px] space-y-16">
          {experienceData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Center Dot */}
              <div className="absolute -left-[5px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full bg-black border border-white z-10 top-8"></div>
              
              <div className={`ml-8 md:ml-0 md:w-1/2 p-0 md:p-8 relative group ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                
                <div className="flex flex-col mb-4">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{item.role}</h3>
                  <h4 className="text-zinc-300 font-medium">{item.company} <span className="text-zinc-600 font-normal">| {item.location}</span></h4>
                </div>
                
                <div className="text-[10px] text-zinc-500 font-mono mb-6 uppercase tracking-widest flex flex-wrap items-center gap-4">
                  <span>{item.date}</span>
                  <span className="bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-400">{item.client}</span>
                </div>
                
                <ul className="space-y-3">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-sm text-zinc-400 font-light flex items-start gap-4">
                      <span className="text-zinc-600 mt-1 shrink-0 px-2 bg-white/5 border border-white/10 rounded-full text-[10px]">&gt;</span>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
