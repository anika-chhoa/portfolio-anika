// "use client";
// import Link from "next/link";
// import { projects } from "@/data/projects";
// import { motion } from "framer-motion";

// export default function Projects() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" }
//     }
//   };

//   return (
//     <section className="mb-section-gap px-6 md:px-12" id="projects">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-16"
//       >
//         <div>
//           <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">Portfolio</p>
//           <h2 className="font-inter text-3xl md:text-5xl font-bold text-on-surface">
//             Featured Projects
//           </h2>
//         </div>

//         <motion.a
//           whileHover={{ x: 5, color: "var(--primary)" }}
//           className="text-primary hover:underline font-space text-sm font-bold flex items-center gap-2 group"
//           href="https://github.com/anika-chhoa"
//           target="_blank"
//         >
//           View all GitHub
//           <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
//             arrow_right_alt
//           </span>
//         </motion.a>
//       </motion.div>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
//       >
//         {projects.map((project) => (
//           <motion.div
//             key={project.id}
//             variants={cardVariants}
//             whileHover={{ y: -15 }}
//             className="bg-surface border border-outline rounded-[2rem] overflow-hidden flex flex-col shadow-premium hover:shadow-2xl transition-all duration-500 group"
//           >
//             {/* Image Container */}
//             <div className="h-64 relative overflow-hidden">
//               <motion.img
//                 whileHover={{ scale: 1.15 }}
//                 transition={{ duration: 0.8 }}
//                 className="w-full h-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
//                 src={project.image}
//                 alt={project.title}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
//                 <span className="text-white font-space text-xs font-bold tracking-widest uppercase">View Details</span>
//               </div>
//             </div>

//             {/* Content */}
//             <div className="p-8 flex flex-col flex-1 relative bg-surface">
//               <span className="text-primary font-space text-[10px] font-black mb-3 uppercase tracking-[0.2em] px-3 py-1 bg-primary/5 rounded-full self-start">
//                 {project.number} / {project.category}
//               </span>

//               <h3 className="font-inter text-2xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
//                 {project.title}
//               </h3>

//               <p className="text-on-surface-variant text-sm md:text-base line-clamp-3 mb-8 opacity-80 leading-relaxed">
//                 {project.description}
//               </p>

//               {/* Tags */}
//               <div className="flex flex-wrap gap-2 mb-8 mt-auto">
//                 {project.tags.slice(0, 3).map((tag, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 bg-surface-variant/50 border border-outline rounded-lg text-[10px] text-on-surface-variant font-bold uppercase tracking-wider"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                 <Link
//                   href={`/projects/${project.id}`}
//                   className="block w-full py-4 bg-primary text-white font-black rounded-2xl hover:bg-primary-hover transition-all text-center text-sm shadow-premium uppercase tracking-[0.1em]"
//                 >
//                   View Case Study
//                 </Link>
//               </motion.div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaFolder,
  FaGithub,
} from "react-icons/fa";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      className="mb-section-gap scroll-mt-24 px-6 md:px-12"
      id="projects"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12 sm:mb-16"
      >
        <div>
          <p className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-primary mb-2">
            Selected Works
          </p>
          <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight">
            Featured Projects
          </h2>
        </div>

        <motion.a
          whileHover={{ x: 4 }}
          className="text-primary hover:text-primary-hover font-space text-sm font-bold flex items-center gap-2 group transition-colors"
          href="https://github.com/anika-chhoa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View all on GitHub</span>
          <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
        </motion.a>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="glass-card rounded-2xl border border-outline overflow-hidden flex flex-col shadow-premium transition-all duration-300 hover:border-primary/40 hover:shadow-2xl group"
          >
            {/* Project Image Container with Overlay Link */}
            <div className="h-56 sm:h-60 relative overflow-hidden bg-surface-variant">
              <Image
                src={project.image}
                alt={`${project.title} Preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Explore Architecture Clickable Overlay */}
              <Link
                href={`/projects/${project.id}`}
                className="absolute inset-0 bg-gradient-to-t from-on-background/85 via-on-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
              >
                <span className="text-surface font-space text-xs font-bold tracking-wider uppercase flex items-center gap-2 hover:text-primary transition-colors">
                  <FaFolder className="text-primary text-sm" /> Explore
                </span>
              </Link>
            </div>

            {/* Project Details Content */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 relative bg-surface">
              {/* Category & Number Header Tag */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-primary font-mono text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 bg-primary-container rounded-md border border-primary/20">
                  #{project.number} &bull; {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-space text-2xl font-extrabold text-on-surface mb-3 group-hover:text-primary transition-colors">
                <Link href={`/projects/${project.id}`}>{project.title}</Link>
              </h3>

              {/* Description - Truncated to exactly 2 lines */}
              <p className="text-on-surface-variant text-sm line-clamp-2 mb-6 leading-relaxed font-inter">
                {project.description}
              </p>

              {/* Tech Stack Pills - Strictly single line with flex-nowrap */}
              <div className="flex items-center gap-1.5 mb-6 mt-auto flex-nowrap overflow-hidden">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-surface-container border border-outline rounded-md text-[11px] text-on-surface-variant font-mono font-medium whitespace-nowrap truncate max-w-[110px]"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2.5 py-1 bg-primary/10 border border-primary/30 rounded-md text-[11px] text-primary font-mono font-bold whitespace-nowrap shrink-0">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Bottom Card Action Bar */}
              <div className="pt-4 border-t border-outline/60 flex items-center justify-between gap-3">
                {/* Main Action Link: Case Study */}
                <Link
                  href={`/projects/${project.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-primary hover:bg-primary-hover text-surface-container font-space font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-sm active:scale-[0.98]"
                >
                  <span>View More</span>
                  <FaArrowRight className="text-[10px]" />
                </Link>

                {/* External Links (Live & Client GitHub) */}
                <div className="flex items-center gap-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Live Demo"
                      className="p-2.5 rounded-xl bg-surface-variant hover:bg-primary-container text-on-surface-variant hover:text-primary border border-outline transition-colors text-sm"
                      aria-label="Live Demo Link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}

                  {project.client && (
                    <a
                      href={project.client}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Client Repository"
                      className="p-2.5 rounded-xl bg-surface-variant hover:bg-primary-container text-on-surface-variant hover:text-primary border border-outline transition-colors text-sm"
                      aria-label="Client Repository Link"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
