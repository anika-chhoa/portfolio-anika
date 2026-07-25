// "use client";
// import { motion } from "framer-motion";

// export default function Education() {
//   const educationData = [
//     {
//       degree: "Master of Science in Aquaculture",
//       institution: "Bangladesh Agricultural University, Mymensingh",
//       period: "2022 — 2023",
//       result: "CGPA 3.97 / 4.00",
//       level: "M.S.",
//       type: "university",
//     },
//     {
//       degree: "Bachelor of Science in Fisheries (Honours)",
//       institution: "Bangladesh Agricultural University, Mymensingh",
//       period: "2017 — 2022",
//       result: "CGPA 3.83 / 4.00",
//       level: "B.Sc.",
//       type: "university",
//     },
//     {
//       degree: "Higher Secondary Certificate — Science",
//       institution: "Cantonment Public School and College, Rangpur",
//       period: "2015 — 2016",
//       result: "GPA 5.00 / 5.00",
//       level: "HSC",
//       type: "school",
//     },
//     {
//       degree: "Secondary School Certificate — Science",
//       institution: "Cantonment Public School and College, Rangpur",
//       period: "2013 — 2014",
//       result: "GPA 5.00 / 5.00",
//       level: "SSC",
//       type: "school",
//     },
//   ];

//   // Container animation
//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.25,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   // Card animation (alternate left-right)
//   const cardVariants = {
//     hidden: (index) => ({
//       opacity: 0,
//       x: index % 2 === 0 ? -60 : 60,
//       y: 40,
//     }),
//     visible: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section
//       className="mb-section-gap scroll-mt-24 px-6 md:px-12 flex flex-col items-center"
//       id="education"
//     >
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="mb-16 text-center"
//       >
//         <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">
//           Academic Background
//         </p>
//         <h2 className="font-inter text-3xl md:text-5xl font-bold text-on-surface">
//           Education
//         </h2>
//       </motion.div>

//       {/* Timeline Wrapper */}
//       <div className="relative w-full max-w-6xl">
//         {/* Vertical Line */}
//         <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-outline/40"></div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-10"
//         >
//           {educationData.map((edu, index) => {
//             const isUniversity = edu.type === "university";
//             const isLeft = index % 2 === 0;

//             return (
//               <motion.div
//                 key={index}
//                 custom={index}
//                 variants={cardVariants}
//                 whileHover={{
//                   scale: 1.05,
//                   rotateX: 3,
//                   rotateY: -3,
//                 }}
//                 className={`relative bg-surface border border-outline rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 shadow-premium transition-all duration-300 group overflow-hidden
//                 ${isUniversity
//                     ? "border-l-4 border-l-primary"
//                     : "border-l-4 border-l-on-surface-variant/30"
//                   }
//                 ${isLeft ? "md:mr-auto" : "md:ml-auto"}
//                 `}
//               >
//                 {/* Timeline Dot */}
//                 <div className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg"></div>

//                 {/* Glow Hover Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

//                 {/* Content */}
//                 <div className="flex flex-col gap-3 relative z-10">
//                   <span className="self-start text-[10px] font-bold font-space px-3 py-1 rounded-full bg-primary-container text-primary uppercase tracking-wider">
//                     {edu.level}
//                   </span>

//                   <h3 className="font-inter text-lg md:text-xl font-bold text-on-surface leading-tight group-hover:text-primary transition-colors">
//                     {edu.degree}
//                   </h3>

//                   <p className="text-sm text-on-surface-variant flex items-center gap-2">
//                     <span className="material-symbols-outlined text-sm">
//                       location_on
//                     </span>
//                     {edu.institution}
//                   </p>

//                   <p className="text-xs text-on-surface-variant">
//                     {edu.period}
//                   </p>
//                 </div>

//                 {/* Result */}
//                 <span className="text-xs font-bold font-space text-primary relative z-10">
//                   {edu.result}
//                 </span>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import { motion } from "framer-motion";

// export default function Education() {
//   const educationData = [
//     {
//       degree: "Master of Science in Aquaculture",
//       institution: "Bangladesh Agricultural University, Mymensingh",
//       period: "2022 — 2023",
//       result: "CGPA 3.97 / 4.00",
//       level: "M.S.",
//       type: "university",
//     },
//     {
//       degree: "Bachelor of Science in Fisheries (Honours)",
//       institution: "Bangladesh Agricultural University, Mymensingh",
//       period: "2017 — 2022",
//       result: "CGPA 3.83 / 4.00",
//       level: "B.Sc.",
//       type: "university",
//     },
//     {
//       degree: "Higher Secondary Certificate — Science",
//       institution: "Cantonment Public School and College, Rangpur",
//       period: "2015 — 2016",
//       result: "GPA 5.00 / 5.00",
//       level: "HSC",
//       type: "school",
//     },
//     {
//       degree: "Secondary School Certificate — Science",
//       institution: "Cantonment Public School and College, Rangpur",
//       period: "2013 — 2014",
//       result: "GPA 5.00 / 5.00",
//       level: "SSC",
//       type: "school",
//     },
//   ];

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.12,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const rowVariants = {
//     hidden: { opacity: 0, y: 24 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       className="mb-section-gap scroll-mt-24 px-6 md:px-12 flex flex-col items-center"
//       id="education"
//     >
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="mb-14 w-full max-w-4xl flex items-end justify-between gap-4 border-b border-outline pb-6"
//       >
//         <div>
//           <p className="text-xs font-bold font-mono tracking-[0.3em] uppercase text-primary mb-3">
//             Academic Record
//           </p>
//           <h2 className="font-inter text-3xl md:text-5xl font-bold text-on-surface">
//             Education
//           </h2>
//         </div>
//         <span className="hidden sm:block font-mono text-xs text-on-surface-variant tracking-widest">
//           {String(educationData.length).padStart(2, "0")} ENTRIES
//         </span>
//       </motion.div>

//       {/* Ledger */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-80px" }}
//         className="w-full max-w-4xl border-t border-outline"
//       >
//         {educationData.map((edu, index) => {
//           const isUniversity = edu.type === "university";
//           return (
//             <motion.div
//               key={edu.degree}
//               variants={rowVariants}
//               className={`group relative flex flex-col gap-3 md:grid md:grid-cols-[64px_1fr_auto] md:items-center md:gap-6 py-6 pl-4 border-b border-outline border-l-4 transition-colors hover:bg-primary-container/10 ${
//                 isUniversity ? "border-l-primary" : "border-l-outline"
//               }`}
//             >
//               {/* Record index */}
//               <span className="font-mono text-xs text-on-surface-variant tracking-widest transition-all group-hover:text-primary group-hover:translate-x-0.5">
//                 {String(index + 1).padStart(2, "0")}
//               </span>

//               {/* Content */}
//               <div className="flex flex-col gap-1.5">
//                 <div className="flex items-center gap-2 flex-wrap">
//                   <span className="text-[10px] font-bold font-space px-2.5 py-0.5 rounded-full bg-primary-container text-primary uppercase tracking-wider">
//                     {edu.level}
//                   </span>
//                   <span className="font-mono text-[11px] text-on-surface-variant tracking-wide">
//                     {edu.period}
//                   </span>
//                 </div>
//                 <h3 className="font-inter text-lg md:text-xl font-bold text-on-surface leading-tight transition-colors group-hover:text-primary">
//                   {edu.degree}
//                 </h3>
//                 <p className="text-sm text-on-surface-variant">{edu.institution}</p>
//               </div>

//               {/* Result, stamped */}
//               <span className="font-mono text-sm font-bold text-primary md:text-right">
//                 {edu.result}
//               </span>
//             </motion.div>
//           );
//         })}
//       </motion.div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { FiAward, FiCalendar, FiMapPin, FiBookOpen, FiStar, FiCheckCircle } from "react-icons/fi";

export default function Education() {
  const universityData = [
    {
      degree: "Master of Science in Aquaculture",
      institution: "Bangladesh Agricultural University, Mymensingh",
      period: "2022 — 2023",
      result: "CGPA 3.97 / 4.00",
      level: "M.S.",
      accent: "from-amber-500/20 via-primary/10 to-transparent",
      badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
    },
    {
      degree: "Bachelor of Science in Fisheries (Honours)",
      institution: "Bangladesh Agricultural University, Mymensingh",
      period: "2017 — 2022",
      result: "CGPA 3.83 / 4.00",
      level: "B.Sc.",
      accent: "from-blue-500/20 via-primary/10 to-transparent",
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
    },
  ];

  const schoolData = [
    {
      degree: "Higher Secondary Certificate (HSC)",
      field: "Science Stream",
      institution: "Cantonment Public School and College, Rangpur",
      period: "2015 — 2016",
      result: "GPA 5.00 / 5.00",
      level: "HSC"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      field: "Science Stream",
      institution: "Cantonment Public School and College, Rangpur",
      period: "2013 — 2014",
      result: "GPA 5.00 / 5.00",
      level: "SSC"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section
      className="max-w-7xl mx-auto px-6 md:px-12 py-20 scroll-mt-24"
      id="education"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline/30 pb-6"
      >
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-widest mb-2">
            <FiBookOpen className="text-sm" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-inter text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight">
            Education & Excellence
          </h2>
        </div>
        <p className="text-on-surface-variant text-sm max-w-md font-inter">
          A strong foundation in analytical research, problem-solving, and academic distinction.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="space-y-8"
      >
        {/* TOP BENTO GRID: UNIVERSITY HIGHLIGHT CARDS (2 COLUMNS) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {universityData.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="relative bg-surface/70 backdrop-blur-xl border border-outline/50 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Background Accent Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${edu.accent} opacity-30 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none`}></div>

              <div>
                {/* TOP HEADER */}
                <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
                    {edu.level} Degree
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-on-surface-variant">
                    <FiCalendar className="text-primary" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* DEGREE TITLE */}
                <h3 className="font-inter text-xl md:text-2xl font-bold text-on-surface group-hover:text-primary transition-colors leading-tight mb-3 relative z-10">
                  {edu.degree}
                </h3>

                {/* INSTITUTION */}
                <p className="text-sm text-on-surface-variant flex items-start gap-2 mb-6 relative z-10">
                  <FiMapPin className="text-primary mt-0.5 shrink-0" />
                  <span>{edu.institution}</span>
                </p>

                {/* HIGHLIGHT BULLETS */}
                {/* <div className="space-y-2 mb-8 relative z-10 border-t border-outline/20 pt-4">
                  {edu.highlights.map((point, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-on-surface-variant font-medium">
                      <FiCheckCircle className="text-primary text-sm shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div> */}
              </div>

              {/* CGPA BADGE FOOTER */}
              <div className="pt-4 border-t border-outline/30 flex items-center justify-between relative z-10">
                <span className="text-xs font-mono text-on-surface-variant uppercase tracking-wider">Academic Result</span>
                <div className={`flex items-center gap-1.5 font-bold text-sm px-4 py-1.5 rounded-xl border shadow-xs ${edu.badgeColor}`}>
                  <FiStar className="text-sm fill-current" />
                  <span>{edu.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM SECTION: SCHOOLING (COMPACT GLASS CARDS) */}
        <div>
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-on-surface-variant mb-4 px-1">
            Schooling Credentials
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schoolData.map((school, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -3 }}
                className="bg-surface/50 backdrop-blur-md border border-outline/40 p-6 rounded-2xl flex items-center justify-between gap-4 hover:border-primary/30 hover:bg-surface/80 transition-all group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-surface-variant text-on-surface-variant uppercase">
                      {school.level}
                    </span>
                    <span className="text-xs text-on-surface-variant/80 font-mono">
                      {school.period}
                    </span>
                  </div>
                  
                  <h4 className="font-inter text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                    {school.degree}
                  </h4>
                  
                  <p className="text-xs text-on-surface-variant flex items-center gap-1">
                    <FiMapPin className="text-primary text-xs shrink-0" />
                    <span className="line-clamp-1">{school.institution}</span>
                  </p>
                </div>

                {/* PERFECT GPA BADGE */}
                <div className="shrink-0 text-right">
                  <div className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs px-3 py-1.5 rounded-xl border border-emerald-500/20">
                    <FiAward className="text-sm" />
                    <span>{school.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
}