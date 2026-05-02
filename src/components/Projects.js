import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="mb-section-gap px-6 md:px-12" id="projects">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
        <h2 className="font-inter text-3xl md:text-4xl font-bold text-on-surface">
          Featured Projects
        </h2>

        <a
          className="text-primary hover:underline font-space text-sm flex items-center gap-2"
          href="https://github.com/anika-chhoa"
          target="_blank"
        >
          View all GitHub
          <span className="material-symbols-outlined text-sm">
            open_in_new
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-surface border border-outline rounded-2xl overflow-hidden flex flex-col shadow-premium hover:shadow-xl transition-all duration-300 group"
          >
            {/* Image */}
            <div className="h-48 relative overflow-hidden">
              <img
                className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <span className="text-primary font-space text-[10px] font-bold mb-2 uppercase tracking-wider">
                {project.number} / {project.category}
              </span>

              <h3 className="font-inter text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-on-surface-variant text-sm line-clamp-3 mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-primary-container border border-primary/10 rounded text-[9px] text-primary font-medium uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.id}`}
                className="w-full py-3 bg-surface border border-primary/20 text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all text-center text-sm shadow-sm"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}