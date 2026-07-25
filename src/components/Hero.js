// "use client";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import Image from "next/image";
// import { useEffect, useRef } from "react";
// import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
// import { TypeAnimation } from "react-type-animation";

// export default function Hero() {
//   const nameRef = useRef(null);

//   useEffect(() => {
//     if (nameRef.current) {
//       const chars = nameRef.current.innerText.split("");
//       nameRef.current.innerHTML = chars
//         .map(
//           (char) =>
//             `<span class="char inline-block">${char === " " ? "&nbsp;" : char}</span>`,
//         )
//         .join("");

//       gsap.fromTo(
//         ".char",
//         { y: 100, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           stagger: 0.05,
//           duration: 1,
//           ease: "power4.out",
//           delay: 0.5,
//         },
//       );
//     }
//   }, []);

//   const socialLinks = [
//     {
//       icon: <FaGithub />,
//       href: "https://github.com/anika-chhoa",
//       label: "GitHub",
//     },
//     {
//       icon: <FaLinkedin />,
//       href: "https://linkedin.com/in/anika-mizan-chhoa",
//       label: "LinkedIn",
//     },
//     {
//       icon: <FaFacebook />,
//       href: "https://m.facebook.com/jonaki.chhoa.9/",
//       label: "Facebook",
//     },
//   ];

//   return (
//     <div
//       className="min-h-[90vh] flex flex-col lg:flex-row items-center gap-10 pt-32 mb-section-gap px-6 md:px-12 relative overflow-hidden"
//       id="hero"
//     >
//       {/* Social Links - Side Slide In */}
//       <div className="flex flex-row lg:flex-col justify-center gap-8 order-2 lg:order-1 relative z-10">
//         {socialLinks.map((link, index) => (
//           <motion.a
//             key={index}
//             href={link.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{
//               delay: 0.8 + index * 0.1,
//               duration: 0.8,
//               ease: "easeOut",
//             }}
//             whileHover={{ y: -5, scale: 1.2, color: "var(--primary)" }}
//             className="text-3xl text-on-surface-variant transition-colors duration-300"
//             aria-label={link.label}
//           >
//             {link.icon}
//           </motion.a>
//         ))}
//       </div>

//       {/* Text Section */}
//       <div className="flex-1 space-y-8 text-center lg:text-left order-3 lg:order-2 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1
//             ref={nameRef}
//             className="font-inter text-5xl lg:text-8xl font-extrabold text-on-surface leading-tight overflow-hidden pb-2"
//           >
//             Anika Mizan
//           </h1>

//           <h2 className="text-xl lg:text-2xl font-semibold text-primary font-space uppercase tracking-[0.2em] mt-4">
//             I am a{" "}
//             <TypeAnimation
//               sequence={[
//                 "Frontend Developer",
//                 2000,
//                 "React Developer",
//                 2000,
//                 "Next.js Developer",
//                 2000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//               className="ml-2 border-b-2 border-primary/30"
//             />
//           </h2>
//         </motion.div>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2, duration: 1 }}
//           className="font-inter text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto md:mx-0 leading-relaxed opacity-80"
//         >
//           Crafting immersive, high-performance web experiences with technical
//           precision. I specialize in building scalable frontend architectures
//           that bridge the gap between complex data and intuitive user
//           interfaces.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 1.5, duration: 0.5 }}
//           className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4"
//         >
//           <motion.a
//             href="https://drive.google.com/file/d/1nyueVkYeNvpwetHgFqRrqJA6gDOXtIEd/view?usp=sharing"
            
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)",
//               backgroundColor: "var(--primary-hover)",
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="px-10 py-5 bg-primary text-white font-bold rounded-2xl transition-all flex items-center gap-3 shadow-premium text-lg"
//           >
//             Resume
//           </motion.a>
//         </motion.div>
//       </div>

//       {/* Image Section - Floating & Parallax */}
//       {/* <motion.div
//         initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
//         animate={{ opacity: 1, scale: 1, rotate: 0 }}
//         transition={{ duration: 1.2, ease: "easeOut" }}
//         className="flex justify-center order-1 lg:order-3 relative"
//       >
//         <motion.div
//           animate={{
//             y: [0, -20, 0],
//             rotate: [0, 2, 0],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="relative w-[280px] sm:w-[320px] md:w-[420px] h-[340px] sm:h-[380px] md:h-[520px] rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-primary/20 p-2 bg-surface-variant"
//         >
//           <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
//             <Image
//               src="https://i.ibb.co/4nWJpWSF/FORMAL.jpg"
//               alt="Anika Mizan"
//               fill
//               className="object-cover hover:scale-110 transition-transform duration-700"
//               priority
//             />
//           </div>
//           <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
//           <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
//         </motion.div>
//       </motion.div> */}
//       <motion.div
//   initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
//   animate={{ opacity: 1, scale: 1, rotate: 0 }}
//   transition={{ duration: 1.2, ease: "easeOut" }}
//   className="flex justify-center order-1 lg:order-3 relative"
// >
//   <motion.div
//     animate={{
//       y: [0, -15, 0],
//       rotate: [0, 2, 0],
//     }}
//     transition={{
//       duration: 6,
//       repeat: Infinity,
//       ease: "easeInOut",
//     }}

//     className="relative w-[260px] sm:w-[300px] lg:w-[340px] h-[320px] sm:h-[360px] lg:h-[420px] rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-primary/20 p-2 bg-surface-variant"
//   >
//     <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
//       <Image
//         src="https://i.ibb.co/4nWJpWSF/FORMAL.jpg"
//         alt="Anika Mizan"
//         fill
//         className="object-cover hover:scale-110 transition-transform duration-700"
//         priority
//       />
//     </div>
//     {/* Decorative element */}
//     <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
//     <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
//   </motion.div>
// </motion.div>
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const nameRef = useRef(null);

  useEffect(() => {
    if (nameRef.current) {
      const chars = nameRef.current.innerText.split("");
      nameRef.current.innerHTML = chars
        .map(
          (char) =>
            `<span class="char inline-block">${char === " " ? "&nbsp;" : char}</span>`,
        )
        .join("");

      gsap.fromTo(
        ".char",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          ease: "power4.out",
          delay: 0.5,
        },
      );
    }
  }, []);

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/anika-chhoa",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/anika-mizan-chhoa",
      label: "LinkedIn",
    },
    {
      icon: <FaFacebook />,
      href: "https://m.facebook.com/jonaki.chhoa.9/",
      label: "Facebook",
    },
  ];

  return (
    <div
      className="min-h-[90vh] flex flex-col lg:flex-row items-center gap-10 pt-32 mb-section-gap px-6 md:px-12 relative overflow-hidden"
      id="hero"
    >
      {/* Social Links - Side Slide In */}
      <div className="flex flex-row lg:flex-col justify-center gap-8 order-2 lg:order-1 relative z-10">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.8 + index * 0.1,
              duration: 0.8,
              ease: "easeOut",
            }}
            whileHover={{ y: -5, scale: 1.2, color: "var(--primary)" }}
            className="text-3xl text-on-surface-variant transition-colors duration-300"
            aria-label={link.label}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      {/* Text Section */}
      <div className="flex-1 space-y-8 text-center lg:text-left order-3 lg:order-2 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            ref={nameRef}
            className="font-inter text-5xl lg:text-8xl font-extrabold text-on-surface leading-tight overflow-hidden pb-2"
          >
            Anika Mizan
          </h1>

          <h2 className="text-xl lg:text-2xl font-semibold text-primary font-space uppercase tracking-[0.2em] mt-4">
            I am a{" "}
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Full Stack Developer",
                2000,
                "Frontend Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="ml-2 border-b-2 border-primary/30"
            />
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="font-inter text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto md:mx-0 leading-relaxed opacity-80"
        >
          Crafting immersive, high-performance web experiences with technical
          precision. I specialize in building scalable frontend architectures
          that bridge the gap between complex data and intuitive user
          interfaces.
        </motion.p>

        {/* Resume Download CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4"
        >
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1nyueVkYeNvpwetHgFqRrqJA6gDOXtIEd"
            download="Anika_Mizan_Resume.pdf"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)",
              backgroundColor: "var(--primary-hover)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-primary text-white font-bold rounded-2xl transition-all flex items-center gap-3 shadow-premium text-lg cursor-pointer"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex justify-center order-1 lg:order-3 relative"
      >
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-[260px] sm:w-[300px] lg:w-[340px] h-[320px] sm:h-[360px] lg:h-[420px] rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-primary/20 p-2 bg-surface-variant"
        >
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
            <Image
              src="https://i.ibb.co/4nWJpWSF/FORMAL.jpg"
              alt="Anika Mizan"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}