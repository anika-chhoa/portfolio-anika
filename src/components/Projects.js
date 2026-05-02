import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: "01",
      category: "E-COMMERCE",
      title: "Sun Cart - Summer Essentials",
      description:
        "A modern summer essentials e-commerce platform built with Next.js, featuring product browsing, category-based filtering, and a smooth user experience. Designed with a clean, responsive UI to help users explore and purchase seasonal items such as clothing, accessories, skincare, and gadgets efficiently.",
      tags: ["Next JS", "Tailwind", "Better Auth"],
      image: "https://i.ibb.co/hxc4cSR4/Screenshot-2026-05-02-182030.png",
      reverse: true,
      live: "https://sun-cart-sooty.vercel.app/",
      code: "https://github.com/anika-chhoa/sun-cart.git",
    },
    {
      id: "02",
      category: "NEWS PLATFORM",
      title: "Dragon News",
      description:
        "A modern news platform built with Next.js, featuring dynamic API-driven content, secure authentication using Better Auth, and social login integration with Google and GitHub. Designed with a clean, responsive UI to deliver a seamless and user-friendly reading experience.",
      tags: ["Next.js", "Tailwind", "Better Auth"],
      image: "https://i.ibb.co/bgjR97tH/Screenshot-2026-05-02-181347.png",
      reverse: false,
      live: "https://dragon-news-gray.vercel.app/",
      code: "https://github.com/anika-chhoa/dragon-news.git",
    },
  ];

  return (
    <section className="mb-section-gap" id="projects">
      <div className="flex justify-between items-end mb-12">
        <h2 className="font-inter text-4xl font-bold text-on-surface">
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

      <div className="grid gap-element-gap">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-surface border border-outline rounded-2xl overflow-hidden grid lg:grid-cols-2 shadow-premium hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <div
              className={`h-64 lg:h-full relative group overflow-hidden ${project.reverse ? "order-1 lg:order-2" : ""
                }`}
            >
              <img
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/20 to-transparent"></div>
            </div>

            {/* Content */}
            <div
              className={`p-card-padding flex flex-col justify-center ${project.reverse ? "order-2 lg:order-1" : ""
                }`}
            >
              <span className="text-primary font-space text-xs font-bold mb-2">
                {project.id} / {project.category}
              </span>

              <h3 className="font-inter text-3xl font-bold text-on-surface mb-4">
                {project.title}
              </h3>

              <p className="text-on-surface-variant mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary-container border border-primary/10 rounded-full text-xs text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 text-primary font-bold hover:text-primary-hover transition-all"
                >
                  <span className="material-symbols-outlined">link</span>
                  Live Demo
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined">terminal</span>
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}