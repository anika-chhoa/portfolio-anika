"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") !== "light";
    }
    return true;
  });
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Sync theme class + cookie on mount
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.cookie = "theme=dark; path=/; max-age=31536000";
    } else {
      document.documentElement.classList.remove("dark");
      document.cookie = "theme=light; path=/; max-age=31536000";
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section ID Tracker (Added "skills" & "education")
      const sections = [
        "about",
        "skills",
        "experience",
        "education",
        "projects",
        "services",
        "contact",
      ];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.cookie = "theme=dark; path=/; max-age=31536000";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.cookie = "theme=light; path=/; max-age=31536000";
    }
  };

  // NavLinks with Education added after Experience
  const navLinks = [
    { name: "About", href: "/#about", id: "about" },
    { name: "Skills", href: "/#skills", id: "skills" },
    { name: "Experience", href: "/#experience", id: "experience" },
    { name: "Education", href: "/#education", id: "education" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "Services", href: "/#services", id: "services" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/70 backdrop-blur-lg border-b border-outline py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-bold text-primary font-inter tracking-tighter italic hover:scale-105 transition-transform"
        >
          Anika
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`relative font-inter tracking-tight transition-colors duration-300 ${
                activeSection === link.id && pathname === "/"
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:text-primary font-medium"
              }`}
            >
              {link.name}
              {activeSection === link.id && pathname === "/" && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-space text-primary">
              Open to Work
            </span>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-surface-variant transition-colors group relative"
            aria-label="Toggle theme"
          >
            <motion.span
              initial={false}
              animate={{ rotate: isDark ? 0 : 180 }}
              className="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors block"
            >
              {isDark ? "light_mode" : "dark_mode"}
            </motion.span>
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-surface border-b border-outline overflow-hidden shadow-xl"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-inter text-2xl transition-colors ${
                    activeSection === link.id && pathname === "/"
                      ? "text-primary font-bold"
                      : "text-on-surface-variant"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="sm:hidden flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-space text-primary uppercase font-bold tracking-widest">
                  Open to Work
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}