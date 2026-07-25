"use client";
import { motion } from "framer-motion";
import { 
  FiZap, 
  FiBookOpen, 
  FiFeather, 
  FiTrendingUp, 
  FiCode, 
  FiCpu, 
  FiAward 
} from "react-icons/fi";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const highlights = [
    { title: "Master's Degree", desc: "Strong Analytical Mindset", icon: FiAward },
    { title: "Full-Stack Focus", desc: "Next.js, Node & Express", icon: FiCode },
    { title: "AI & Modern Tech", desc: "Gemini API & BetterAuth", icon: FiCpu }
  ];

  const traits = [
    { text: "Problem Solving", icon: FiZap, color: "text-amber-500 bg-amber-500/10" },
    { text: "Continuous Learning", icon: FiBookOpen, color: "text-blue-500 bg-blue-500/10" },
    { text: "Creative Thinking", icon: FiFeather, color: "text-emerald-500 bg-emerald-500/10" },
    { text: "Self Growth", icon: FiTrendingUp, color: "text-purple-500 bg-purple-500/10" }
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
      className="max-w-7xl mx-auto px-6 md:px-12 py-16 scroll-mt-24"
      id="about"
    >
      {/* SECTION TITLE */}
      <motion.div variants={itemVariants} className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-10 h-[2px] bg-primary"></span>
          <span className="text-primary font-mono text-sm tracking-widest uppercase">Get to know me</span>
        </div>
        <h2 className="font-inter text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight">
          About Me
        </h2>
      </motion.div>

      {/* BENTO GRID LAYOUT */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* LEFT COLUMN: MAIN STORY */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-7 bg-surface/60 border border-outline/50 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden group"
        >
          <div className="space-y-5">
            <p className="font-inter text-base md:text-lg text-on-surface-variant leading-relaxed">
              My journey into MERN Stack development began with an analytical mindset developed during my Master's studies. Driven by problem-solving, I transitioned into web development—crafting modern, scalable applications.
            </p>

            <p className="font-inter text-base md:text-lg text-on-surface-variant leading-relaxed">
              I thrive on building feature-rich applications—integrating Google Gemini AI, Stripe payments, real-time communications, and secure BetterAuth/JWT systems. Connecting robust backend architecture with intuitive UI is what drives me daily.
            </p>

            <p className="font-inter text-base md:text-lg text-on-surface-variant leading-relaxed">
              Beyond coding, I enjoy painting, tech blogs, traveling, and logic puzzles. Combining creative outlets with analytical thinking helps me write cleaner code and evolve continuously.
            </p>
          </div>

          {/* KEY HIGHLIGHT CARDS */}
          <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-outline/30">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-3 rounded-2xl bg-surface-variant/30 border border-outline/20">
                  <Icon className="text-primary text-xl mb-1" />
                  <h4 className="text-xs font-bold text-on-surface">{item.title}</h4>
                  <p className="text-[11px] text-on-surface-variant line-clamp-1">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: PERSONALITY & MINDSET */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <div className="bg-surface/60 border border-outline/50 backdrop-blur-xl p-8 rounded-3xl shadow-sm flex-1 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>

            <div>
              <h3 className="font-inter text-xl font-bold text-on-surface mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Personality & Mindset
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 relative z-10">
                {traits.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-4 p-3.5 rounded-2xl border border-outline/20 bg-surface-variant/20 hover:bg-surface-variant/50 transition-all cursor-default"
                    >
                      <div className={`p-3 rounded-xl ${item.color}`}>
                        <Icon className="text-xl" />
                      </div>
                      <span className="text-on-surface font-medium text-sm md:text-base">
                        {item.text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-outline/30 flex items-center justify-between text-xs text-on-surface-variant font-mono">
              <span>Always Adapting</span>
              <span>•</span>
              <span>Growth Mindset</span>
            </div>
          </div>

        </motion.div>

      </div>
    </motion.section>
  );
}