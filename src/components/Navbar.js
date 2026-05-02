"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Initial theme check
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (savedTheme === "light") {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
      } else if (savedTheme === "dark" || prefersDark) {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      }
    }

    // Intersection Observer for active link
    const sections = ["projects", "about", "services", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { name: "About", href: "/#about", id: "about" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "Services", href: "/#services", id: "services" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline">
      <nav className="flex justify-between items-center h-16 px-6 md:px-12 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-bold text-primary font-inter tracking-tight italic">Anika</Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`font-inter tracking-tight transition-all duration-300 pb-1 border-b-2 ${activeSection === link.id && pathname === "/"
                ? "text-primary border-primary font-semibold"
                : "text-on-surface-variant border-transparent hover:text-primary font-medium"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-space text-primary">Open to Work</span>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-surface-variant transition-colors group"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-surface-variant transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-on-surface">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-surface border-b border-outline transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-64 py-4" : "max-h-0"
          }`}
      >
        <div className="flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`font-inter text-lg transition-colors ${activeSection === link.id && pathname === "/" ? "text-primary font-semibold" : "text-on-surface-variant"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="sm:hidden flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-space text-primary">Open to Work</span>
          </div>
        </div>
      </div>
    </header>
  );
}
