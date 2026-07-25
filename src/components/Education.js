"use client";
import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      degree: "Master of Science in Aquaculture",
      institution: "Bangladesh Agricultural University, Mymensingh",
      period: "2022 — 2023",
      result: "CGPA 3.97 / 4.00",
      level: "M.S.",
      type: "university",
    },
    {
      degree: "Bachelor of Science in Fisheries (Honours)",
      institution: "Bangladesh Agricultural University, Mymensingh",
      period: "2017 — 2022",
      result: "CGPA 3.83 / 4.00",
      level: "B.Sc.",
      type: "university",
    },
    {
      degree: "Higher Secondary Certificate — Science",
      institution: "Cantonment Public School and College, Rangpur",
      period: "2015 — 2016",
      result: "GPA 5.00 / 5.00",
      level: "HSC",
      type: "school",
    },
    {
      degree: "Secondary School Certificate — Science",
      institution: "Cantonment Public School and College, Rangpur",
      period: "2013 — 2014",
      result: "GPA 5.00 / 5.00",
      level: "SSC",
      type: "school",
    },
  ];

  // Container animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  // Card animation (alternate left-right)
  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -60 : 60,
      y: 40,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="mb-section-gap scroll-mt-24 px-6 md:px-12 flex flex-col items-center"
      id="education"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">
          Academic Background
        </p>
        <h2 className="font-inter text-3xl md:text-5xl font-bold text-on-surface">
          Education
        </h2>
      </motion.div>

      {/* Timeline Wrapper */}
      <div className="relative w-full max-w-6xl">
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-outline/40"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {educationData.map((edu, index) => {
            const isUniversity = edu.type === "university";
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  rotateX: 3,
                  rotateY: -3,
                }}
                className={`relative bg-surface border border-outline rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 shadow-premium transition-all duration-300 group overflow-hidden
                ${isUniversity
                    ? "border-l-4 border-l-primary"
                    : "border-l-4 border-l-on-surface-variant/30"
                  }
                ${isLeft ? "md:mr-auto" : "md:ml-auto"}
                `}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg"></div>

                {/* Glow Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Content */}
                <div className="flex flex-col gap-3 relative z-10">
                  <span className="self-start text-[10px] font-bold font-space px-3 py-1 rounded-full bg-primary-container text-primary uppercase tracking-wider">
                    {edu.level}
                  </span>

                  <h3 className="font-inter text-lg md:text-xl font-bold text-on-surface leading-tight group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>

                  <p className="text-sm text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">
                      location_on
                    </span>
                    {edu.institution}
                  </p>

                  <p className="text-xs text-on-surface-variant">
                    {edu.period}
                  </p>
                </div>

                {/* Result */}
                <span className="text-xs font-bold font-space text-primary relative z-10">
                  {edu.result}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}