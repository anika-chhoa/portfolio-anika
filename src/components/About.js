"use client";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="mb-section-gap scroll-mt-24 px-6 md:px-0"
      id="about"
    >
      <motion.h2 variants={itemVariants} className="font-inter text-3xl md:text-5xl font-bold text-on-surface mb-8">
        About Me
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* LEFT SIDE - ABOUT TEXT */}
        <div className="space-y-6">
          <motion.div variants={itemVariants} className="w-20 h-1 bg-primary"></motion.div>

          <motion.p variants={itemVariants} className="font-inter text-sm md:text-lg text-on-surface-variant leading-relaxed opacity-90">
            My journey into MERN Stack development began with the analytical mindset I developed during my Master's studies. Passionate about problem-solving, I transitioned into web development, building modern, scalable applications with Next.js, React, Express.js, and MongoDB.
          </motion.p>
          {/* <motion.p variants={itemVariants} className="font-inter text-sm md:text-lg text-on-surface-variant leading-relaxed opacity-90">
            I started my programming journey out of curiosity — trying to understand how websites work behind the scenes.
            Over time, it became a passion for building modern, interactive, and meaningful web applications.
          </motion.p> */}

          <motion.p variants={itemVariants} className="font-inter text-sm md:text-lg text-on-surface-variant leading-relaxed opacity-90">
            I thrive on building full-stack applications with rich features—such as AI integrations with Google Gemini, Stripe payments, real-time chat, and secure authentication (JWT/BetterAuth). Connecting high-performance backend logic with responsive, polished UIs is what excites me most about full-stack development.
          </motion.p>
          {/* <motion.p variants={itemVariants} className="font-inter text-sm md:text-lg text-on-surface-variant leading-relaxed opacity-90">
            I enjoy working with React and Next.js, especially creating clean UI systems, reusable components,
            and smooth user experiences that feel intuitive and fast.
          </motion.p> */}

          <motion.p variants={itemVariants} className="font-inter text-sm md:text-lg text-on-surface-variant leading-relaxed opacity-90">
            Beyond coding, I enjoy painting, reading tech blogs, traveling, and solving logic puzzles.  Combining analytical thinking with my favorite activities helps me stay focused, communicate effectively, and continuously evolve as a developer.
          </motion.p>
          {/* <motion.p variants={itemVariants} className="font-inter text-sm md:text-lg text-on-surface-variant leading-relaxed opacity-90">
            Outside programming, I enjoy exploring design ideas, listening to music, and observing real-world problems
            that can be solved through technology.
          </motion.p> */}
        </div>

        {/* RIGHT SIDE - PERSONALITY + INTERESTS */}
        <motion.div variants={itemVariants} className="bg-surface border border-outline p-8 rounded-3xl shadow-premium relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <h3 className="font-inter text-2xl font-bold text-primary mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-primary"></span>
            Personality & Mindset
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            {[
              { text: "Problem Solving", icon: "🧠" },
              { text: "Learning New Tech", icon: "📚" },
              { text: "Creative Thinking", icon: "🎨" },
              { text: "Self Growth", icon: "🌱" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10, color: "var(--primary)" }}
                className="flex items-center gap-4 text-on-surface-variant text-base md:text-lg font-medium p-3 rounded-xl hover:bg-primary/5 transition-all"
              >
                <span className="text-2xl">{item.icon}</span>
                {item.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}