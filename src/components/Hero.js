import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-10 pt-32 mb-section-gap">

      {/* Text Section */}
      <div className="flex-1 space-y-6">
        <span className="font-space text-primary text-sm uppercase tracking-widest">
      // frontend developer
        </span>

        <h1 className="font-inter text-5xl md:text-7xl font-extrabold text-on-surface leading-tight">
          Anika Mizan
        </h1>

        <p className="font-inter text-base md:text-lg text-on-surface-variant max-w-2xl">
          Crafting immersive, high-performance web experiences with technical precision.
          I specialize in building scalable frontend architectures that bridge the gap between
          complex data and intuitive user interfaces.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-all flex items-center gap-2 shadow-premium"
          >
            View Projects
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-[280px] md:w-[380px] h-[350px] md:h-[480px] rounded-3xl overflow-hidden shadow-lg">
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
