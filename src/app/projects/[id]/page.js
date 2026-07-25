
// import Link from "next/link";
// import Image from "next/image";
// import { projects } from "@/data/projects";
// import { notFound } from "next/navigation";
// import {
//   FaGithub,
//   FaExternalLinkAlt,
//   FaArrowLeft,
//   FaCheckCircle,
//   FaLightbulb,
//   FaExclamationTriangle,
//   FaRocket,
//   FaCode,
//   FaLayerGroup,
// } from "react-icons/fa";

// export default async function ProjectDetails({ params }) {
//   const { id } = await params;
//   const project = projects.find((p) => p.id === id);

//   if (!project) {
//     notFound();
//   }

//   return (
//     <main className="min-h-screen bg-background text-on-background transition-colors duration-300 py-10 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-container-max mx-auto space-y-8">
        
//         {/* Top Navigation */}
//         <nav>
//           <Link
//             href="/#projects"
//             className="inline-flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200 group"
//           >
//             <FaArrowLeft className="text-xs transition-transform duration-200 group-hover:-translate-x-1" />
//             <span>Back to Projects</span>
//           </Link>
//         </nav>

//         {/* 1. TOP SECTION: Hero Preview Picture */}
//         {project.image && (
//           <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-outline shadow-premium">
//             <Image
//               src={project.image}
//               alt={`${project.title} Preview`}
//               fill
//               priority
//               className="object-cover object-top"
//               sizes="(max-width: 1200px) 100vw, 1100px"
//             />
//           </div>
//         )}

//         {/* 2. MAIN GRID LAYOUT: Left (2/3) vs Right (1/3) */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 pt-2 items-start">
          
//           {/* ================================================= */}
//           {/* LEFT COLUMN (2/3): Title, Description & Features */}
//           {/* ================================================= */}
//           <div className="lg:col-span-2 space-y-10">
            
//             {/* Header / Description Block */}
//             <section className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <span className="text-primary text-xs font-bold tracking-wider uppercase bg-primary-container px-3 py-1 rounded-full border border-primary/20">
//                   {project.category}
//                 </span>
//                 <span className="text-on-surface-variant text-sm font-space">
//                   #{project.number}
//                 </span>
//               </div>

//               <h1 className="text-3xl sm:text-5xl font-extrabold text-on-surface font-space tracking-tight leading-tight">
//                 {project.title}
//               </h1>

//               <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
//                 {project.description}
//               </p>
//             </section>

//             {/* Key Features Section */}
//             {project.features?.length > 0 && (
//               <section className="space-y-5">
//                 <div className="flex items-center gap-2.5 border-b border-outline/60 pb-3">
//                   <FaCheckCircle className="text-primary text-xl" />
//                   <h2 className="text-2xl font-bold text-on-surface font-space">
//                     Key Features
//                   </h2>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {project.features.map((feature, index) => (
//                     <div
//                       key={index}
//                       className="glass-card p-5 rounded-xl border border-outline flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40"
//                     >
//                       <div className="space-y-2">
//                         <div className="flex items-center justify-between">
//                           <span className="text-xs font-mono font-semibold text-primary">
//                             0{index + 1}
//                           </span>
//                           <FaCheckCircle className="text-primary/70 text-xs" />
//                         </div>
//                         <p className="text-on-surface-variant text-sm leading-relaxed font-inter">
//                           {feature}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {/* Engineering Challenges & Solutions */}
//             {project.challenges && (
//               <section className="space-y-4">
//                 <div className="flex items-center gap-2.5 border-b border-outline/60 pb-3">
//                   <FaExclamationTriangle className="text-primary text-xl" />
//                   <h2 className="text-2xl font-bold text-on-surface font-space">
//                     Technical Challenges & Solutions
//                   </h2>
//                 </div>

//                 <div className="relative overflow-hidden bg-primary-container/30 border border-primary/20 p-6 rounded-xl text-on-surface leading-relaxed">
//                   <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
//                   <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
//                     {project.challenges}
//                   </p>
//                 </div>
//               </section>
//             )}

//             {/* Future Roadmap Section */}
//             {project.futurePlans?.length > 0 && (
//               <section className="space-y-4">
//                 <div className="flex items-center gap-2.5 border-b border-outline/60 pb-3">
//                   <FaLightbulb className="text-primary text-xl" />
//                   <h2 className="text-2xl font-bold text-on-surface font-space">
//                     Future Roadmap
//                   </h2>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   {project.futurePlans.map((plan, index) => (
//                     <div
//                       key={index}
//                       className="flex items-start gap-3 bg-surface-container p-4 rounded-xl border border-outline/80 text-on-surface-variant text-sm"
//                     >
//                       <span className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" />
//                       <span className="leading-snug">{plan}</span>
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//           </div>

//           {/* ================================================= */}
//           {/* RIGHT COLUMN (1/3): Deployment & Tech Stack */}
//           {/* ================================================= */}
//           <aside className="lg:col-span-1 space-y-6 lg:sticky lg:top-8">
            
//             {/* Deployment CTAs */}
//             <div className="glass-card p-6 rounded-2xl space-y-5 border border-outline shadow-premium">
//               <div className="flex items-center gap-2 text-on-surface font-space font-bold text-lg">
//                 <FaRocket className="text-primary" />
//                 <h3>Deployment & Links</h3>
//               </div>

//               <div className="flex flex-col gap-3">
//                 {project.live && (
//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-surface-container font-semibold px-4 py-3 rounded-xl shadow-sm transition-all duration-200 active:scale-[0.98]"
//                   >
//                     <FaExternalLinkAlt className="text-xs" /> Live Preview
//                   </a>
//                 )}

//                 {project.client && (
//                   <a
//                     href={project.client}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-full inline-flex items-center justify-center gap-2 bg-surface-variant hover:bg-surface-container text-on-surface font-medium px-4 py-2.5 rounded-xl border border-outline transition-colors duration-200 text-sm"
//                   >
//                     <FaGithub /> Client Repo
//                   </a>
//                 )}

//                 {project.server && (
//                   <a
//                     href={project.server}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-full inline-flex items-center justify-center gap-2 bg-surface-variant hover:bg-surface-container text-on-surface font-medium px-4 py-2.5 rounded-xl border border-outline transition-colors duration-200 text-sm"
//                   >
//                     <FaGithub /> Server Repo
//                   </a>
//                 )}
//               </div>
//             </div>

//             {/* Tech Stack Pills */}
//             <div className="glass-card p-6 rounded-2xl space-y-4 border border-outline shadow-premium">
//               <div className="flex items-center gap-2 text-on-surface font-space font-bold text-lg">
//                 <FaCode className="text-primary" />
//                 <h3>Technologies Used</h3>
//               </div>

//               <div className="flex flex-wrap gap-2">
//                 {project.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="bg-surface-container text-primary font-mono text-xs font-semibold px-3 py-1.5 rounded-lg border border-outline hover:border-primary/40 transition-colors"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Architecture Card */}
//             <div className="p-4 rounded-xl bg-surface-variant/50 border border-outline/50 flex items-center gap-3 text-xs text-on-surface-variant">
//               <FaLayerGroup className="text-primary text-base shrink-0" />
//               <span>Full-stack architecture optimized for responsiveness and accessibility.</span>
//             </div>

//           </aside>

//         </div>
//       </div>
//     </main>
//   );
// }

// app/projects/[id]/page.jsx
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaExclamationTriangle,
  FaRocket,
  FaCode,
  FaLayerGroup,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default async function ProjectDetails({ params }) {
  const { id } = await params;
  const currentIndex = projects.findIndex((p) => p.id === id);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];

  // Calculate Previous and Next projects dynamically
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-background text-on-background transition-colors duration-300 py-10 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-container-max mx-auto space-y-8 pb-16">
        
        {/* Top Navigation */}
        <nav>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-200 group"
          >
            <FaArrowLeft className="text-xs transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Projects</span>
          </Link>
        </nav>

        {/* 1. TOP SECTION: Hero Preview Picture */}
        {project.image && (
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-outline shadow-premium">
            <Image
              src={project.image}
              alt={`${project.title} Preview`}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
          </div>
        )}

        {/* 2. MAIN GRID LAYOUT: Left (2/3) vs Right (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 pt-2 items-start">
          
          {/* ================================================= */}
          {/* LEFT COLUMN (2/3): Title, Description & Features */}
          {/* ================================================= */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Header / Description Block */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-primary text-xs font-bold tracking-wider uppercase bg-primary-container px-3 py-1 rounded-full border border-primary/20">
                  {project.category}
                </span>
                <span className="text-on-surface-variant text-sm font-space">
                  #{project.number}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-on-surface font-space tracking-tight leading-tight">
                {project.title}
              </h1>

              <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {project.description}
              </p>
            </section>

            {/* Key Features Section */}
            {project.features?.length > 0 && (
              <section className="space-y-5">
                <div className="flex items-center gap-2.5 border-b border-outline/60 pb-3">
                  <FaCheckCircle className="text-primary text-xl" />
                  <h2 className="text-2xl font-bold text-on-surface font-space">
                    Key Features
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="glass-card p-5 rounded-xl border border-outline flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-semibold text-primary">
                            0{index + 1}
                          </span>
                          <FaCheckCircle className="text-primary/70 text-xs" />
                        </div>
                        <p className="text-on-surface-variant text-sm leading-relaxed font-inter">
                          {feature}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Engineering Challenges & Solutions */}
            {project.challenges && (
              <section className="space-y-4">
                <div className="flex items-center gap-2.5 border-b border-outline/60 pb-3">
                  <FaExclamationTriangle className="text-primary text-xl" />
                  <h2 className="text-2xl font-bold text-on-surface font-space">
                    Technical Challenges & Solutions
                  </h2>
                </div>

                <div className="relative overflow-hidden bg-primary-container/30 border border-primary/20 p-6 rounded-xl text-on-surface leading-relaxed">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              </section>
            )}

            {/* Future Roadmap Section */}
            {project.futurePlans?.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2.5 border-b border-outline/60 pb-3">
                  <FaLightbulb className="text-primary text-xl" />
                  <h2 className="text-2xl font-bold text-on-surface font-space">
                    Future Roadmap
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.futurePlans.map((plan, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-surface-container p-4 rounded-xl border border-outline/80 text-on-surface-variant text-sm"
                    >
                      <span className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span className="leading-snug">{plan}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom In-Page Project Switcher Cards */}
            <section className="pt-8 border-t border-outline/60">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prevProject ? (
                  <Link
                    href={`/projects/${prevProject.id}`}
                    className="glass-card p-4 rounded-xl border border-outline hover:border-primary/50 transition-all duration-200 group flex flex-col justify-between"
                  >
                    <span className="text-xs text-on-surface-variant font-mono flex items-center gap-1 group-hover:text-primary transition-colors">
                      <FaArrowLeft className="text-[10px] transition-transform group-hover:-translate-x-1" /> Previous Project
                    </span>
                    <p className="font-space font-bold text-on-surface mt-2 group-hover:text-primary transition-colors truncate">
                      {prevProject.title}
                    </p>
                  </Link>
                ) : <div />}

                {nextProject ? (
                  <Link
                    href={`/projects/${nextProject.id}`}
                    className="glass-card p-4 rounded-xl border border-outline hover:border-primary/50 transition-all duration-200 group flex flex-col justify-between text-right sm:col-start-2"
                  >
                    <span className="text-xs text-on-surface-variant font-mono flex items-center justify-end gap-1 group-hover:text-primary transition-colors">
                      Next Project <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
                    </span>
                    <p className="font-space font-bold text-on-surface mt-2 group-hover:text-primary transition-colors truncate">
                      {nextProject.title}
                    </p>
                  </Link>
                ) : null}
              </div>
            </section>

          </div>

          {/* ================================================= */}
          {/* RIGHT COLUMN (1/3): Deployment & Tech Stack */}
          {/* ================================================= */}
          <aside className="lg:col-span-1 space-y-6 lg:sticky lg:top-8">
            
            {/* Deployment CTAs */}
            <div className="glass-card p-6 rounded-2xl space-y-5 border border-outline shadow-premium">
              <div className="flex items-center gap-2 text-on-surface font-space font-bold text-lg">
                <FaRocket className="text-primary" />
                <h3>Deployment & Links</h3>
              </div>

              <div className="flex flex-col gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-surface-container font-semibold px-4 py-3 rounded-xl shadow-sm transition-all duration-200 active:scale-[0.98]"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Preview
                  </a>
                )}

                {project.client && (
                  <a
                    href={project.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-surface-variant hover:bg-surface-container text-on-surface font-medium px-4 py-2.5 rounded-xl border border-outline transition-colors duration-200 text-sm"
                  >
                    <FaGithub /> Client Repo
                  </a>
                )}

                {/* {project.server && (
                  <a
                    href={project.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-surface-variant hover:bg-surface-container text-on-surface font-medium px-4 py-2.5 rounded-xl border border-outline transition-colors duration-200 text-sm"
                  >
                    <FaGithub /> Server Repo
                  </a>
                )} */}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="glass-card p-6 rounded-2xl space-y-4 border border-outline shadow-premium">
              <div className="flex items-center gap-2 text-on-surface font-space font-bold text-lg">
                <FaCode className="text-primary" />
                <h3>Technologies Used</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-surface-container text-primary font-mono text-xs font-semibold px-3 py-1.5 rounded-lg border border-outline hover:border-primary/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Card */}
            <div className="p-4 rounded-xl bg-surface-variant/50 border border-outline/50 flex items-center gap-3 text-xs text-on-surface-variant">
              <FaLayerGroup className="text-primary text-base shrink-0" />
              <span>Full-stack architecture optimized for responsiveness and accessibility.</span>
            </div>

          </aside>

        </div>
      </div>

      {/* ===================================================== */}
      {/* FLOATING STICKY QUICK-NAV WIDGET (BOTTOM-RIGHT)       */}
      {/* ===================================================== */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-surface/80 backdrop-blur-md p-2 rounded-full border border-outline shadow-2xl">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.id}`}
            title={`Previous: ${prevProject.title}`}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-variant hover:bg-primary hover:text-surface-container text-on-surface transition-all duration-200 group"
          >
            <FaChevronLeft className="text-xs transition-transform group-hover:-translate-x-0.5" />
          </Link>
        ) : (
          <button
            disabled
            className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-variant/40 text-on-surface-variant/30 cursor-not-allowed"
          >
            <FaChevronLeft className="text-xs" />
          </button>
        )}

        <span className="text-xs font-mono px-2 text-on-surface-variant select-none">
          {currentIndex + 1} / {projects.length}
        </span>

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.id}`}
            title={`Next: ${nextProject.title}`}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-variant hover:bg-primary hover:text-surface-container text-on-surface transition-all duration-200 group"
          >
            <FaChevronRight className="text-xs transition-transform group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <button
            disabled
            className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-variant/40 text-on-surface-variant/30 cursor-not-allowed"
          >
            <FaChevronRight className="text-xs" />
          </button>
        )}
      </div>
    </main>
  );
}