import { useEffect, useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

export default function Header({ darkMode, setDarkMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [styleAdjust, setStyleAdjust] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // On initial load, check dark mode
  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setNavbarVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setStyleAdjust(currentScrollY < 552);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  const navLinks = ["project", "skills", "about", "contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-6 px-4 backdrop-blur-lg transition-transform duration-300 border-b bg-transparent border-gray-700 ${
        navbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="text-2xl md:text-3xl font-bold tracking-wider">
        <a
          href="/"
          className={`flex items-center uppercase ${
            styleAdjust ? "md:text-white dark:text-white" : "text-slate-950 dark:text-white"
          }`}
        >
          <span className="text-green-600 font-thin">
            <FaLessThan />
          </span>
          Nayem
          <span className="text-green-500 font-thin flex items-center">
            /<FaGreaterThan />
          </span>
        </a>
      </div>

      {/* Mobile Button Group */}
      <div className="flex items-center gap-3 md:hidden">
        <button
          onClick={toggleDarkMode}
          className="text-xl"
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`text-3xl focus:outline-none mb-[6px] ${
            styleAdjust ? "text-white" : "text-slate-950 dark:text-white"
          }`}
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
        >
          {isMobileMenuOpen ? <span className="text-base">❌</span> : <span>☰</span>}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 items-center text-sm md:text-base">
        <button
          onClick={toggleDarkMode}
          className="text-xl md:text-2xl focus:outline-none"
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className={`font-medium relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-green-500 hover:after:w-full after:transition-all ${
              styleAdjust ? "text-white" : "text-slate-950 dark:text-white"
            }`}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 mx-4 left-4 w-[90%] bg-black text-white rounded-lg p-4 shadow-lg flex flex-col items-start gap-4 md:hidden z-50">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-medium"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
