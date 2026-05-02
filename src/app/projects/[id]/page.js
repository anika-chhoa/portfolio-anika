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
    <div className="min-h-screen bg-background pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8 font-space text-sm font-bold"
        >
          <FaArrowLeft />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <span className="text-primary font-space text-xs font-bold uppercase tracking-widest px-3 py-1 bg-primary-container rounded-full border border-primary/10">
              {project.category}
            </span>
            <h1 className="font-inter text-4xl md:text-5xl font-extrabold text-on-surface leading-tight">
              {project.title}
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="pt-4">
              <h3 className="text-on-surface font-bold mb-4 flex items-center gap-2">
                <span className="w-6 h-px bg-primary"></span>
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-surface border border-outline rounded-xl text-xs font-bold text-on-surface-variant shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[160px] py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition-all flex items-center justify-center gap-2 shadow-premium"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[160px] py-4 border border-outline text-on-surface font-bold rounded-xl hover:bg-primary/5 hover:border-primary/30 transition-all flex items-center justify-center gap-2"
              >
                <FaGithub />
                GitHub Repository
              </a>
            </div>
          </div>

          {/* Project Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-outline/20 group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Challenges */}
          <div className="bg-surface border border-outline p-8 rounded-3xl shadow-premium">
            <h3 className="font-inter text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined">extension</span>
              Challenges Faced
            </h3>
            <p className="text-on-surface-variant leading-relaxed italic">
              "{project.challenges}"
            </p>
          </div>

          {/* Future Plans */}
          <div className="bg-surface border border-outline p-8 rounded-3xl shadow-premium">
            <h3 className="font-inter text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined">rocket_launch</span>
              Future Improvements
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              {project.futurePlans}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
