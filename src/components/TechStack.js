export default function TechStack() {
  return (
    <section className="mb-section-gap">
      <h2 className="font-inter text-4xl font-bold text-on-surface mb-12 text-center">Tech Stack</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Frontend Core */}
        <div className="bg-surface border border-outline p-card-padding rounded-xl border-t-2 border-t-primary shadow-premium">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary">html</span>
            <h4 className="font-inter text-xl font-semibold text-on-surface">Frontend Core</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary-container text-primary rounded text-xs font-bold font-space">HTML5</span>
            <span className="px-3 py-1 bg-primary-container text-primary rounded text-xs font-bold font-space">CSS3</span>
            <span className="px-3 py-1 bg-primary-container text-primary rounded text-xs font-bold font-space">JavaScript (ES6+)</span>

          </div>
        </div>

        {/* Frameworks */}
        <div className="bg-surface border border-outline p-card-padding rounded-xl border-t-2 border-t-primary shadow-premium">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary">grid_view</span>
            <h4 className="font-inter text-xl font-semibold text-on-surface">Frameworks</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary-container text-primary rounded text-xs font-bold font-space">React.js</span>
            <span className="px-3 py-1 bg-primary-container text-primary rounded text-xs font-bold font-space">Next.js</span>
            <span className="px-3 py-1 bg-primary-container text-primary rounded text-xs font-bold font-space">Vite</span>
          </div>
        </div>

        {/* UI Libraries */}
        <div className="bg-surface border border-outline p-card-padding rounded-xl border-t-2 border-t-tertiary shadow-premium">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-tertiary">palette</span>
            <h4 className="font-inter text-xl font-semibold text-on-surface">UI Libraries</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary-container text-primary rounded text-xs font-bold font-space">Tailwind CSS</span>
            <span className="px-3 py-1 bg-primary-container text-primary rounded text-xs font-bold font-space">Daisy UI</span>
            <span className="px-3 py-1 bg-primary-container text-primary rounded text-xs font-bold font-space">Framer Motion</span>
            <span className="px-3 py-1 bg-primary-container text-primary rounded text-xs font-bold font-space">Hero UI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
