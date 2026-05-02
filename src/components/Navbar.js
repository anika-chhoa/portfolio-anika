"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

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
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline">
      <nav className="flex justify-between items-center h-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-xl font-bold text-primary font-inter tracking-tight italic">Anika</div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`font-inter tracking-tight transition-all duration-300 pb-1 border-b-2 ${activeSection === link.id
                ? "text-primary border-primary font-semibold"
                : "text-on-surface-variant border-transparent hover:text-primary font-medium"
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
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
        </div>
      </nav>
    </header>
  );
}
