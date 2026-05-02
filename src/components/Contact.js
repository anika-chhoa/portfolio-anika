"use client";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="mb-section-gap px-6 md:px-12" 
      id="contact"
    >
      <div className="bg-surface border border-outline p-8 sm:p-12 md:p-16 rounded-[2.5rem] grid lg:grid-cols-2 gap-16 shadow-premium relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="space-y-10 text-center lg:text-left relative z-10">
          <div className="space-y-4">
            <h2 className="font-inter text-4xl md:text-6xl font-extrabold text-on-surface leading-tight">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-on-surface-variant text-lg max-w-md mx-auto lg:mx-0 opacity-80">
              Have a project in mind or just want to chat about tech? Drop me a message and I'll get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-6">
            <motion.a 
              whileHover={{ x: 10, backgroundColor: "var(--primary-container)" }}
              className="flex items-center gap-6 p-5 rounded-2xl bg-surface-variant/30 border border-outline transition-all group/card" 
              href="mailto:chhoa.anika07@gmail.com"
            >
              <div className="w-14 h-14 rounded-xl bg-primary text-white flex items-center justify-center shadow-premium group-hover/card:scale-110 transition-transform">
                <FaEnvelope className="text-2xl" />
              </div>
              <div className="text-left">
                <p className="text-xs font-black font-space text-primary uppercase tracking-widest mb-1">Email Me</p>
                <p className="font-bold text-lg text-on-surface">chhoa.anika07@gmail.com</p>
              </div>
            </motion.a>

            <motion.a 
              whileHover={{ x: 10, backgroundColor: "var(--primary-container)" }}
              className="flex items-center gap-6 p-5 rounded-2xl bg-surface-variant/30 border border-outline transition-all group/card" 
              href="tel:01761651313"
            >
              <div className="w-14 h-14 rounded-xl bg-primary text-white flex items-center justify-center shadow-premium group-hover/card:scale-110 transition-transform">
                <FaPhone className="text-2xl" />
              </div>
              <div className="text-left">
                <p className="text-xs font-black font-space text-primary uppercase tracking-widest mb-1">Mobile</p>
                <p className="font-bold text-lg text-on-surface">01761651313</p>
              </div>
            </motion.a>
          </div>
        </div>

        <div className="bg-surface-variant/30 p-8 sm:p-10 rounded-3xl border border-outline relative z-10">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface ml-1">Full Name</label>
              <motion.input
                whileFocus={{ scale: 1.01, borderColor: "var(--primary)", boxShadow: "0 0 15px rgba(16, 185, 129, 0.1)" }}
                className="w-full bg-surface border border-outline rounded-xl p-4 text-on-surface focus:outline-none transition-all"
                placeholder="Enter Your Name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface ml-1">Email Address</label>
              <motion.input
                whileFocus={{ scale: 1.01, borderColor: "var(--primary)", boxShadow: "0 0 15px rgba(16, 185, 129, 0.1)" }}
                className="w-full bg-surface border border-outline rounded-xl p-4 text-on-surface focus:outline-none transition-all"
                placeholder="Enter Your Email"
                type="email"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface ml-1">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.01, borderColor: "var(--primary)", boxShadow: "0 0 15px rgba(16, 185, 129, 0.1)" }}
                className="w-full bg-surface border border-outline rounded-xl p-4 text-on-surface focus:outline-none transition-all min-h-[150px]"
                placeholder="How can I help you?"
              ></motion.textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={{ 
                boxShadow: ["0 0 0px rgba(16, 185, 129, 0)", "0 0 20px rgba(16, 185, 129, 0.2)", "0 0 0px rgba(16, 185, 129, 0)"]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-full py-5 bg-primary text-white font-black rounded-xl hover:bg-primary-hover transition-all flex items-center justify-center gap-3 text-lg shadow-premium"
            >
              Send Message
              <span className="material-symbols-outlined">send</span>
            </motion.button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
