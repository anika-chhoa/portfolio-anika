"use client";
import Link from "next/link";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="mb-section-gap px-6 md:px-12" id="projects">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-16"
      >
        <div>
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Portfolio</p>
          <h2 className="font-inter text-3xl md:text-5xl font-bold text-on-surface">
            Featured Projects
          </h2>
        </div>

        <motion.a
          whileHover={{ x: 5, color: "var(--primary)" }}
          className="text-primary hover:underline font-space text-sm font-bold flex items-center gap-2 group"
          href="https://github.com/anika-chhoa"
          target="_blank"
        >
          View all GitHub
          <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
            arrow_right_alt
          </span>
        </motion.a>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -15 }}
            className="bg-surface border border-outline rounded-[2rem] overflow-hidden flex flex-col shadow-premium hover:shadow-2xl transition-all duration-500 group"
          >
            {/* Image Container */}
            <div className="h-64 relative overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-space text-xs font-bold tracking-widest uppercase">View Details</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1 relative bg-surface">
              <span className="text-primary font-space text-[10px] font-black mb-3 uppercase tracking-[0.2em] px-3 py-1 bg-primary/5 rounded-full self-start">
                {project.number} / {project.category}
              </span>

              <h3 className="font-inter text-2xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-on-surface-variant text-sm md:text-base line-clamp-3 mb-8 opacity-80 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-surface-variant/50 border border-outline rounded-lg text-[10px] text-on-surface-variant font-bold uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={`/projects/${project.id}`}
                  className="block w-full py-4 bg-primary text-white font-black rounded-2xl hover:bg-primary-hover transition-all text-center text-sm shadow-premium uppercase tracking-[0.1em]"
                >
                  View Case Study
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}