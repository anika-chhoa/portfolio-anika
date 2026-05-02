import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

export default async function ProjectDetails({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Top nav bar */}
      <div className="sticky top-0 z-10 border-b border-outline/30 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-space text-sm font-bold"
          >
            <FaArrowLeft className="shrink-0" />
            Back to Projects
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">

        {/* ── HERO SECTION ──────────────────────────────── */}
        <section className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-8 xl:gap-14 items-start">

          {/* Left: text */}
          <div className="space-y-6 order-2 lg:order-1">
            {/* Category badge */}
            <span className="inline-block text-primary font-space text-xs font-bold uppercase tracking-widest px-3 py-1 bg-primary-container rounded-full border border-primary/20">
              {project.category}
            </span>

            {/* Title */}
            <h1 className="font-inter text-3xl sm:text-4xl xl:text-5xl font-extrabold text-on-surface leading-[1.15]">
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-prose">
              {project.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-hover active:scale-[0.97] transition-all shadow-premium"
              >
                <FaExternalLinkAlt className="text-xs" />
                Live Demo
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-outline text-on-surface text-sm font-bold rounded-xl hover:bg-primary/5 hover:border-primary/40 active:scale-[0.97] transition-all"
              >
                <FaGithub />
                View on GitHub
              </a>
            </div>
          </div>

          {/* Right: project image */}
          <div className="order-1 lg:order-2 rounded-2xl overflow-hidden border border-outline/20 shadow-2xl bg-surface group aspect-video lg:aspect-auto">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </section>

        {/* ── DIVIDER ───────────────────────────────────── */}
        <hr className="border-outline/20" />

        {/* ── TECH STACK ────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="flex items-center gap-3 font-inter text-lg font-bold text-on-surface">
            <span className="w-5 h-px bg-primary" />
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-surface border border-outline rounded-xl text-xs font-bold text-on-surface-variant shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* ── DETAILS GRID ──────────────────────────────── */}
        <section className="grid sm:grid-cols-2 gap-6">
          {/* Challenges */}
          <div className="bg-surface border border-outline rounded-2xl p-6 sm:p-8 shadow-premium space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-2xl">extension</span>
              <h3 className="font-inter text-lg font-bold text-on-surface">
                Challenges Faced
              </h3>
            </div>
            <p className="text-on-surface-variant leading-relaxed italic text-sm sm:text-base border-l-2 border-primary/30 pl-4">
              "{project.challenges}"
            </p>
          </div>

          {/* Future Plans */}
          <div className="bg-surface border border-outline rounded-2xl p-6 sm:p-8 shadow-premium space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-2xl">rocket_launch</span>
              <h3 className="font-inter text-lg font-bold text-on-surface">
                Future Improvements
              </h3>
            </div>
            <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
              {project.futurePlans}
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
