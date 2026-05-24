"use client";
import { motion } from "framer-motion";

export default function Services() {
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const expertise = [
    {
      title: "Modern Web Interfaces",
      desc: "Building clean, responsive, and performance-optimized web interfaces using React, Next.js, Tailwind CSS, and Framer Motion for smooth user experiences.",
      icon: "code",
    },
    {
      title: "Full-Stack Development",
      desc: "Connecting beautiful frontends with robust backends and efficient database schemas.",
      icon: "layers",
    },
    {
      title: "Authentication & User Systems",
      desc: "Implementing secure authentication using Better Auth, including login, registration, and session management.",
      icon: "verified_user",
    },
    {
      title: "UI/UX Design",
      desc: "Creating visually stunning and highly intuitive user interfaces with a focus on modern aesthetics and user experience.",
      icon: "design_services",
    },
  ];

  return (
    <section className="mb-section-gap px-6 md:px-12" id="services">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-inter text-3xl md:text-5xl font-bold text-on-surface mb-16"
      >
        Expertise
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {expertise.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10, borderColor: "var(--primary)" }}
            className="bg-surface border border-outline p-8 rounded-3xl transition-all duration-300 shadow-premium relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center mb-8 relative z-10"
            >
              <span className="material-symbols-outlined text-3xl text-primary">
                {item.icon}
              </span>
            </motion.div>

            <h3 className="font-inter text-xl font-bold text-on-surface mb-4 relative z-10 group-hover:text-primary transition-colors">
              {item.title}
            </h3>

            <p className="text-on-surface-variant text-sm leading-relaxed opacity-80 relative z-10">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
