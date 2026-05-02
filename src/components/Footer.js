export default function Footer() {
  return (
    <footer className="bg-surface w-full py-12 px-6 border-t border-outline">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="space-y-2 text-center md:text-left">
          <p className="font-bold text-primary font-inter text-lg">Anika.Mizan</p>
          <p className="text-sm font-inter text-on-surface-variant">crafted by Anika Mizan • 2026</p>
        </div>
        <div className="flex gap-6">
          <a className="text-sm font-inter text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/anika-chhoa">GitHub</a>
          <a className="text-sm font-inter text-on-surface-variant hover:text-primary transition-colors" href="https://www.linkedin.com/in/anika-mizan-chhoa">LinkedIn</a>
          <a className="text-sm font-inter text-on-surface-variant hover:text-primary transition-colors" href="#">Resume</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-sm">location_on</span>
          <span className="text-sm font-inter text-on-surface-variant">Dhaka, Bangladesh</span>
        </div>
      </div>
    </footer>
  );
}
