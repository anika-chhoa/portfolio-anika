"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row items-center gap-10 pt-32 mb-section-gap px-6 md:px-12">

      {/* Social Links */}
      <div className="flex flex-row md:flex-col justify-center gap-8 order-2 md:order-1">
        <a
          href="https://github.com/anika-chhoa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-on-surface-variant hover:text-primary transition-colors duration-300"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/anika-mizan-chhoa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-on-surface-variant hover:text-primary transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://m.facebook.com/jonaki.chhoa.9/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-on-surface-variant hover:text-primary transition-colors duration-300"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      </div>

      {/* Text */}
      <div className="flex-1 space-y-6 text-center md:text-left order-3 md:order-2">
        <h1 className="font-inter text-4xl md:text-7xl font-extrabold text-on-surface leading-tight">
          Anika Mizan
        </h1>

        <h2 className="text-xl font-semibold text-primary font-space uppercase tracking-widest">
          I am a{" "}
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "React Developer",
              2000,
              "Next.js Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="ml-2"
          />
        </h2>

        <p className="font-inter text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto md:mx-0">
          Crafting immersive, high-performance web experiences with technical
          precision. I specialize in building scalable frontend architectures
          that bridge the gap between complex data and intuitive user interfaces.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
          <a
            href="#"
            className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-all flex items-center gap-2 shadow-premium"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center order-1 md:order-3">
        <div className="relative w-[240px] sm:w-[280px] md:w-[380px] h-[300px] sm:h-[350px] md:h-[480px] rounded-3xl overflow-hidden shadow-lg border border-outline/20">
          <Image
            src="https://i.ibb.co/4nWJpWSF/FORMAL.jpg"
            alt="Anika"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

    </div>
  );
}