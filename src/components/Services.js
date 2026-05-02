export default function Services() {
  return (
    <section className="mb-section-gap" id="services">
      <h2 className="font-inter text-4xl font-bold text-on-surface mb-12">Expertise</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-surface border border-outline p-card-padding rounded-xl border-t-4 border-t-primary hover:-translate-y-2 transition-all duration-300 shadow-premium">
          <span className="material-symbols-outlined text-primary text-4xl mb-4">devices</span>
          <h3 className="font-inter text-xl font-semibold mb-3 text-on-surface">Responsive Web Design</h3>
          <p className="text-sm text-on-surface-variant">Ensuring your web presence looks stunning on any screen, from ultra-wide monitors to smartphones.</p>
        </div>
        <div className="bg-surface border border-outline p-card-padding rounded-xl border-t-4 border-t-primary hover:-translate-y-2 transition-all duration-300 shadow-premium">
          <span className="material-symbols-outlined text-primary text-4xl mb-4">rocket_launch</span>
          <h3 className="font-inter text-xl font-semibold mb-3 text-on-surface">React & Next.js Applications</h3>
          <p className="text-sm text-on-surface-variant">Building modern, SEO-friendly, and lightning-fast single-page and multi-page applications.</p>
        </div>
        <div className="bg-surface border border-outline p-card-padding rounded-xl border-t-4 border-t-tertiary hover:-translate-y-2 transition-all duration-300 shadow-premium">
          <span className="material-symbols-outlined text-tertiary text-4xl mb-4">layers</span>
          <h3 className="font-inter text-xl font-semibold mb-3 text-on-surface">Full-Stack Development</h3>
          <p className="text-sm text-on-surface-variant">Connecting beautiful frontends with robust backends and efficient database schemas.</p>
        </div>
        <div className="bg-surface border border-outline p-card-padding rounded-xl border-t-4 border-t-primary hover:-translate-y-2 transition-all duration-300 shadow-premium">
          <span className="material-symbols-outlined text-primary text-4xl mb-4">category</span>
          <h3 className="font-inter text-xl font-semibold mb-3 text-on-surface">Authentication & User Systems</h3>
          <p className="text-sm text-on-surface-variant">Implementing secure authentication using Better Auth, including login, registration, and session management.</p>
        </div>
      </div>
    </section>
  );
}
