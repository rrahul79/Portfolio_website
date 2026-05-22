import { motion } from 'motion/react';
import { Code, ExternalLink, GitBranch, Layers } from 'lucide-react';

const projects = [
  {
    title: "Intelligent Failure Detection & Auto-Resolution System",
    description: "An end-to-end automated pipeline failure monitoring system designed for Databricks operations. It aggregates CloudWatch and Databricks logs into S3, utilizes Bedrock LLM APIs to detect error patterns, and uses SES to send resolution runbooks.",
    highlights: [
      "Integrated Step Functions, S3, and Lambda for serverless log processing.",
      "Merged logs to structured JSON for centralized observability.",
      "Applied LLM APIs (OpenAI/AWS Bedrock) for autonomous error diagnosis.",
      "Reduced MTTD/MTTR drastically with proactive email notification strategies."
    ],
    tags: ["AWS Step Functions", "Databricks", "AWS Bedrock", "Lambda", "SES", "Python"],
    glowColor: "cyan"
  },
  {
    title: "Real-Time Financial Fraud Detection Pipeline",
    description: "A streaming data pipeline engineered to process high-velocity transaction payloads with near-zero latency, detecting potentially fraudulent financial activities dynamically.",
    highlights: [
      "Configured AWS Kinesis for high-throughput streaming ingestion.",
      "Deployed Databricks Structured Streaming with PySpark for real-time feature derivation.",
      "Persisted structured outputs into Delta Lake for downstream analytics.",
      "Managed AWS Lambda integrations for critical alarm triggers."
    ],
    tags: ["AWS Kinesis", "Databricks Streaming", "PySpark", "Delta Lake", "Lambda"],
    glowColor: "blue"
  },
  {
    title: "Enterprise Data Mesh & Governance Platform",
    description: "A highly governed Lakehouse architecture built to enforce data quality and compliance. Implemented automated transform layers and secured PII across the analytics mesh.",
    highlights: [
      "Engineered reliable scheduled pipelines with Snowflake and dbt (Data Build Tool).",
      "Applied dynamic data masking and RBAC for robust PII compliance.",
      "Implemented comprehensive data quality constraints prior to reporting layers.",
      "Utilized Git/GitHub Actions for smooth CI/CD deployments."
    ],
    tags: ["Snowflake", "dbt", "AWS S3", "Data Governance", "SQL", "Python"],
    glowColor: "purple"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
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
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight">
            Featured Constructs.
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group glass-card p-10 md:p-12 relative overflow-hidden flex flex-col justify-center"
            >
              <div className="flex flex-col gap-8 relative z-10">
                <div className="flex pl-6 border-l border-white/10 flex-col space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-zinc-300 transition-colors">{project.title}</h3>
                    <a href="#" className="hidden md:flex text-zinc-600 hover:text-white p-2 transition-colors"><ExternalLink className="w-5 h-5" /></a>
                  </div>
                  
                  <p className="text-zinc-400 text-lg leading-relaxed font-light">{project.description}</p>
                  
                  <ul className="space-y-3 mt-6 text-sm text-zinc-300 font-light">
                    {project.highlights.map((bullet, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <span className="text-zinc-600 mt-1 shrink-0 px-2 border border-white/5 bg-white/5 rounded-full text-[10px]">&gt;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-8 items-center">
                    {project.tags.map((tag, i) => (
                      <div key={tag} className="flex gap-2 items-center">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                          {tag}
                        </span>
                        {i < project.tags.length - 1 && (
                          <span className="text-[10px] font-mono text-zinc-700 uppercase">•</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
