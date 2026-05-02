import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section className="mb-section-gap px-6 md:px-0" id="about">
      <h2 className="font-inter text-3xl md:text-5xl font-bold text-on-surface">
        About Me
      </h2>
      <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* LEFT SIDE - ABOUT TEXT */}
        <div className="space-y-6">


          <div className="w-20 h-1 bg-primary"></div>

          <p className="font-inter text-sm md:text-base text-on-surface-variant leading-relaxed">
            I started my programming journey out of curiosity — trying to understand how websites work behind the scenes.
            Over time, it became a passion for building modern, interactive, and meaningful web applications.
          </p>

          <p className="font-inter text-sm md:text-base text-on-surface-variant leading-relaxed">
            I enjoy working with React and Next.js, especially creating clean UI systems, reusable components,
            and smooth user experiences that feel intuitive and fast.
          </p>

          <p className="font-inter text-sm md:text-base text-on-surface-variant leading-relaxed">
            Outside programming, I enjoy exploring design ideas, listening to music, and observing real-world problems
            that can be solved through technology.
          </p>
        </div>

        {/* RIGHT SIDE - PERSONALITY + INTERESTS */}

        {/* Personality / Skills mindset */}
        <div className="bg-surface border border-outline p-6 rounded-xl shadow-premium">
          <h3 className="font-inter text-2xl font-semibold text-primary mb-4">
            Personality & Mindset
          </h3>

          <div className="space-y-6 text-on-surface-variant text-sm md:text-base">
            <p>🧠 Problem Solving</p>
            <p>📚 Learning New Tech</p>
            <p>🎨 Creative Thinking</p>
            <p>🌱 Self Growth</p>
          </div>
        </div>
      </div>
    </section>
  );
}