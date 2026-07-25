"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiStripe,
  SiGoogle,
  SiCloudinary,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { FaCode, FaShieldAlt, FaTerminal } from "react-icons/fa";

export default function TechStack() {
  const iconMap = {
    "Next.js": <SiNextdotjs className="text-on-surface" />,
    "React": <SiReact className="text-[#38BDF8]" />,
    "JavaScript": <SiJavascript className="text-[#FACC15]" />,
    "TypeScript": <SiTypescript className="text-[#60A5FA]" />,
    "Tailwind CSS": <SiTailwindcss className="text-[#38BDF8]" />,
    "HeroUI": <FaCode className="text-primary" />,
    "DaisyUI": <FaCode className="text-secondary" />,
    "Framer Motion": <SiFramer className="text-[#C084FC]" />,
    "Node.js": <SiNodedotjs className="text-[#4ADE80]" />,
    "Express.js": <SiExpress className="text-on-surface" />,
    "MongoDB": <SiMongodb className="text-[#34D399]" />,
    "Better Auth": <FaShieldAlt className="text-primary" />,
    "JWT": <SiJsonwebtokens className="text-[#F43F5E]" />,
    "REST APIs": <FaTerminal className="text-secondary" />,
    "Stripe": <SiStripe className="text-[#818CF8]" />,
    "Google Gemini AI": <SiGoogle className="text-[#60A5FA]" />,
    "Cloudinary": <SiCloudinary className="text-[#38BDF8]" />,
    "Git & GitHub": <SiGithub className="text-on-surface" />,
    "Postman": <SiPostman className="text-[#FB923C]" />,
    "Vercel": <SiVercel className="text-on-surface" />,
  };

  const stack = [
    {
      title: "Frontend Development",
      category: "UI & INTERACTION",
      icon: "html",
      skills: [
        "Next.js",
        "React",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "HeroUI",
        "DaisyUI",
        "Framer Motion",
      ],
      accentColor: "var(--primary)",
      glowGradient: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
    },
    {
      title: "Backend Architecture",
      category: "SERVER & DATABASE",
      icon: "grid_view",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Better Auth",
        "JWT",
        "REST APIs",
      ],
      accentColor: "var(--secondary)",
      glowGradient: "radial-gradient(circle, rgba(52, 211, 153, 0.15) 0%, transparent 70%)",
    },
    {
      title: "Tools & Integrations",
      category: "SERVICES & DEVOPS",
      icon: "construction",
      skills: [
        "Stripe",
        "Google Gemini AI",
        "Cloudinary",
        "Git & GitHub",
        "Postman",
        "Vercel",
      ],
      accentColor: "var(--tertiary)",
      glowGradient: "radial-gradient(circle, rgba(110, 231, 183, 0.15) 0%, transparent 70%)",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="mb-section-gap px-6 md:px-12 scroll-mt-24" id="skills">
      
      {/* Background Soft Glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none opacity-30"
        style={{ background: "var(--primary-container)" }}
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12 sm:mb-16"
      >
        <div>
          <p className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-primary mb-2">
            TECHNICAL PROFICIENCY
          </p>
          <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight">
            Tech Stack & Tools
          </h2>
        </div>
      </motion.div>

      {/* Grid Container */}
      <motion.div
        className="relative z-10 scroll-mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-element-gap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {stack.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="glass-card group relative rounded-xl p-card-padding transition-all duration-300 flex flex-col justify-between overflow-hidden hover:border-primary hover:shadow-xl"
          >
            {/* Inner Background Soft Gradient */}
            <div
              className="absolute inset-0 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: item.glowGradient }}
            />

            <div className="relative z-10">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shadow-sm border border-outline bg-surface"
                >
                  <span
                    className="material-symbols-outlined text-2xl"
                    style={{ color: item.accentColor }}
                  >
                    {item.icon}
                  </span>
                </div>
                <span
                  className="font-space text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md border border-outline text-on-surface-variant bg-surface-variant"
                >
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-space text-xl font-bold mb-6 tracking-tight text-on-surface"
              >
                {item.title}
              </h3>

              {/* Skills Graphical Badges */}
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-outline text-xs font-medium text-on-surface bg-surface transition-all duration-200 shadow-sm cursor-default hover:border-primary hover:bg-primary-container"
                  >
                    <span className="text-sm shrink-0">
                      {iconMap[skill] || (
                        <span className="material-symbols-outlined text-sm">code</span>
                      )}
                    </span>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div
              className="relative z-10 mt-8 pt-4 flex items-center justify-between text-[11px] font-mono border-t border-outline text-on-surface-variant font-space"
            >
              <span>{item.skills.length} core technologies</span>
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: item.accentColor }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}