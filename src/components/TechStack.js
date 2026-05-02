"use client";
import { motion } from "framer-motion";

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const stack = [
    {
      title: "Frontend Core",
      icon: "html",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)"],
      color: "var(--primary)"
    },
    {
      title: "Frameworks",
      icon: "grid_view",
      skills: ["React.js", "Next.js", "Vite"],
      color: "var(--primary)"
    },
    {
      title: "UI Libraries",
      icon: "palette",
      skills: ["Tailwind CSS", "Daisy UI", "Framer Motion", "Hero UI"],
      color: "var(--tertiary)"
    }
  ];

  return (
    <section className="mb-section-gap px-6 md:px-12" id="tech-stack">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-inter text-3xl md:text-5xl font-bold text-on-surface mb-16 text-center"
      >
        Tech Stack
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {stack.map((group, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              borderColor: group.color 
            }}
            className="bg-surface border border-outline p-8 rounded-3xl shadow-premium transition-colors duration-300 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <motion.span 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="material-symbols-outlined text-3xl md:text-4xl p-3 bg-primary-container rounded-2xl text-primary"
                style={{ color: group.color }}
              >
                {group.icon}
              </motion.span>
              <h4 className="font-inter text-xl md:text-2xl font-bold text-on-surface">{group.title}</h4>
            </div>

            <div className="flex flex-wrap gap-3 relative z-10">
              {group.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "white" }}
                  className="px-4 py-2 bg-surface-variant border border-outline text-on-surface-variant rounded-xl text-xs md:text-sm font-bold font-space transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
