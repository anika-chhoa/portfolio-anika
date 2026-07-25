"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "MERN Stack Developer",
      company: "CodeOnix",
      type: "Internship",
      period: "Jun 2026 - Present",
      location: "Remote",
      project: "LIFEOS AI",
      points: [
        "Built complete custom Auth System from scratch (JWT, HTTP-only cookies, 2FA, OTP reset).",
        "Implemented Role-Based Access Control (RBAC) and strict API Rate Limiting for high security.",
        "Integrated Google Gemini 2.5 Flash API for AI learning and career features with cache optimization.",
        "Developed automated Todo alerts via node-cron & Nodemailer and 25+ RESTful APIs.",
      ],
      skills: ["Node.js", "Express.js", "MongoDB", "React", "JWT", "Gemini AI", "REST API"],
    },
  ];

  return (
    <section className="mb-section-gap scroll-mt-24 px-6 md:px-12 relative" id="experience">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12 sm:mb-16"
      >
        <div>
          <p className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-primary mb-2">
            CAREER PATH
          </p>
          <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight">
            Work Experience
          </h2>
        </div>
      </motion.div>

      {/* Compact Experience Card */}
      <div className="max-w-7xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-card-padding hover:border-primary transition-all duration-300"
          >
            {/* Header: Role & Metadata */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-outline">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-space text-xl font-bold text-on-surface">
                    {exp.role}
                  </h3>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-primary-container text-primary border border-primary/20">
                    {exp.type}
                  </span>
                </div>
                <p className="text-sm text-primary font-space font-semibold mt-1">
                  {exp.company} <span className="text-on-surface-variant font-normal">• {exp.project}</span>
                </p>
              </div>

              {/* Enhanced Font Size & Styling for Period / Date */}
              <div className="flex items-center gap-2 text-sm font-space font-semibold text-on-surface">
                <span className="flex items-center gap-2 bg-surface-variant px-3 py-1.5 rounded-md border border-outline text-primary">
                  <FaCalendarAlt className="text-xs" />
                  <span>{exp.period}</span>
                </span>
                <span className="flex items-center gap-1.5 bg-surface-variant px-3 py-1.5 rounded-md border border-outline text-on-surface-variant font-mono text-xs">
                  <FaMapMarkerAlt className="text-primary text-xs" />
                  <span>{exp.location}</span>
                </span>
              </div>
            </div>

            {/* Concise Bullet Points */}
            <ul className="mt-4 space-y-2 text-sm text-on-surface-variant list-disc list-inside">
              {exp.points.map((point, pIdx) => (
                <li key={pIdx} className="leading-relaxed">
                  <span className="text-on-surface">{point}</span>
                </li>
              ))}
            </ul>

            {/* Compact Tech Tags */}
            <div className="mt-6 pt-4 border-t border-outline flex flex-wrap gap-2">
              {exp.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="font-mono text-xs px-2.5 py-1 rounded bg-surface border border-outline text-on-surface"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}