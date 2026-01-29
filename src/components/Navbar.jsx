import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";
import SmokeEffect from "./SmokeEffect";
import PressureCookerButton from "./PressureCookerButton";

const Navbar = ({ onWorkClick, onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personalInfo } = usePortfolio();
  const desktopButtonRef = useRef(null);
  const mobileButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const handleWorkClick = () => {
    onWorkClick();
    setMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    onContactClick();
    setMobileMenuOpen(false);
  };

  return (
    <>
      <SmokeEffect triggerRef={desktopButtonRef} />
      <SmokeEffect triggerRef={mobileButtonRef} />
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6 transition-all duration-500 animate-fade-in ${
          scrolled
            ? "bg-emerald-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2 animate-slide-in-left">
            <span className="text-orange-500 text-lg md:text-xl animate-pulse">
              ✦
            </span>
            <span className="text-white font-medium text-base md:text-lg">
              {personalInfo.name}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3 md:gap-8 animate-slide-in-right">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-orange-300 transition-all duration-300 text-xs md:text-base hover:scale-105"
            >
              About me
            </button>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-300 transition-all duration-300 text-xs md:text-base hover:scale-105"
            >
              Resume
            </a>
            <button
              onClick={onWorkClick}
              className="text-white hover:text-orange-300 transition-all duration-300 text-xs md:text-base hover:scale-105"
            >
              Work
            </button>
            <PressureCookerButton
              onClick={onContactClick}
              ref={desktopButtonRef}
            />
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-orange-300 transition-colors animate-slide-in-right"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="absolute top-0 right-0 w-64 h-full bg-emerald-900 shadow-xl transform transition-transform duration-300">
            <div className="pt-20 px-6">
              <div className="space-y-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left text-white hover:text-orange-300 transition-colors py-3 text-lg border-b border-emerald-700/50"
                >
                  About me
                </button>
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left text-white hover:text-orange-300 transition-colors py-3 text-lg border-b border-emerald-700/50"
                >
                  Resume
                </a>
                <button
                  onClick={handleWorkClick}
                  className="block w-full text-left text-white hover:text-orange-300 transition-colors py-3 text-lg border-b border-emerald-700/50"
                >
                  Work
                </button>
                <PressureCookerButton
                  onClick={handleContactClick}
                  ref={mobileButtonRef}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
