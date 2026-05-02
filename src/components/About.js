export default function About() {
  return (
    <section className="mb-section-gap" id="about">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <h2 className="font-inter text-4xl md:text-5xl font-bold text-on-surface">Who I am</h2>
          <div className="w-20 h-1 bg-primary"></div>
          <p className="font-inter text-on-surface-variant leading-relaxed">
            I am a Frontend Developer specializing in building responsive, high-performance, and user-friendly web applications using React, Next.js, and Tailwind CSS.
          </p>
          <p className="font-inter text-on-surface-variant leading-relaxed">
            With a strong analytical background from scientific research, I approach development with a problem-solving mindset and attention to detail. I focus on writing clean, scalable code and creating seamless user experiences.
          </p>
          <p className="font-inter text-on-surface-variant">
            I build applications that are not only visually appealing but also efficient, accessible, and reliable.
          </p>
        </div>
        <div className="grid gap-6">
          <div className="bg-surface border border-outline p-card-padding rounded-xl relative overflow-hidden group shadow-premium hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-primary">school</span>
            </div>
            <h3 className="font-inter text-2xl font-semibold text-primary mb-2">M.Sc. Aquaculture</h3>
            <p className="text-on-surface-variant text-sm font-space">Bangladesh Agricultural University, Mymensingh</p>
            <p className="text-on-surface-variant/60 mt-4 font-space text-sm">2022 — 2023</p>
          </div>
          <div className="bg-surface border border-outline p-card-padding rounded-xl relative overflow-hidden group shadow-premium hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-primary"></span>
            </div>
            <h3 className="font-inter text-2xl font-semibold text-primary mb-2">B.Sc. Fisheries</h3>
            <p className="text-on-surface-variant text-sm font-space">Bangladesh Agricultural University, Mymensingh</p>
            <p className="text-on-surface-variant/60 mt-4 font-space text-sm">2016 — 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}
