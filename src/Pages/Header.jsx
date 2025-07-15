import { useEffect, useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

export default function Header({ darkMode, setDarkMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [styleAdjust, setStyleAdjust] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  //darkmode functionality
  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      if (currentScrollY < 552) {
        setStyleAdjust(true);
      } else {
        setStyleAdjust(false);
      }
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
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-6 px-4 backdrop-blur-lg transition-transform duration-300 border-b bg-transparent border-gray-700 ${navbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="text-2xl md:text-3xl font-bold tracking-wider">
        <a href="/" className={`flex items-center uppercase ${styleAdjust ? 'md:text-white dark:text-white' : 'text-slate-950 dark:text-white'}`}>
          <span className="text-green-600 font-thin">
            <FaLessThan />
          </span>
          Nayem
          <span className="text-green-500 font-thin flex items-center">
            /<FaGreaterThan />
          </span>
        </a>
      </div>
      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3">
        <button onClick={toggleDarkMode} className="text-xl md:hidden">
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden text-3xl focus:outline-none mb-[6px] ${styleAdjust ? 'md:text-white dark:text-white' : 'text-slate-950 dark:text-white'}`}
        >
          {isMobileMenuOpen ? (
            <span className="text-base">❌</span>
          ) : (
            <span>☰</span>
          )}
        </button>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 items-center text-sm md:text-base">
        <button
          onClick={toggleDarkMode}
          className="text-xl md:text-2xl focus:outline-none"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        {["project", "skills", "about", "contact"].map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className={`${styleAdjust ? 'text-white' : 'text-slate-950 dark:text-white'} font-medium relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-green-500 hover:after:w-full after:transition-all`}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 mx-4 left-4 w-[90%] bg-black text-white rounded-lg p-4 shadow-lg flex flex-col items-start gap-4 md:hidden z-50">
          {["project", "skills", "about", "contact"].map((link) => (
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