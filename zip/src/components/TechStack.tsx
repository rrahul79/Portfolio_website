import { motion } from 'motion/react';
import { Cpu, Server, Shield, Database, CloudRain, Binary, PenTool } from 'lucide-react';
import GithubActivity from './GithubActivity';

const techCategories = [
  {
    title: "Cloud & Infrastructure",
    icon: <CloudRain className="text-white w-6 h-6 mb-4" />,
    items: ["AWS S3", "AWS Glue", "Lambda", "Redshift", "CloudWatch", "Step Functions", "Amazon Bedrock"]
  },
  {
    title: "Data & Processing",
    icon: <Database className="text-white w-6 h-6 mb-4" />,
    items: ["Databricks", "PySpark", "Snowflake", "Delta Lake", "SQL", "ETL Pipelines"]
  },
  {
    title: "CI/CD & Automation",
    icon: <Server className="text-white w-6 h-6 mb-4" />,
    items: ["GitHub Actions", "Python Scripting", "Pipeline Automation", "Git", "APIs"]
  },
  {
    title: "Observability",
    icon: <Shield className="text-white w-6 h-6 mb-4" />,
    items: ["CloudWatch Dashboards", "Alerts", "Incident Triage", "Runbooks"]
  },
  {
    title: "Languages & Tools",
    icon: <Binary className="text-white w-6 h-6 mb-4" />,
    items: ["Python", "Jupyter", "dbt (Data Build Tool)", "Scikit-learn", "Pandas"]
  }
];

export default function TechStack() {
  return (
    <section id="tech" className="py-32 relative bg-zinc-950/20">
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
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight">
            Core Architecture.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 flex flex-col h-full group"
            >
              {category.icon}
              <h3 className="text-xs uppercase tracking-[0.2em] text-white font-bold mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-150 transition-transform"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1.5 bg-white/5 rounded-full text-[10px] font-bold text-zinc-300 border border-white/10 uppercase tracking-wider hover:bg-white hover:text-black transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <GithubActivity />
      </div>
    </section>
  );
}
