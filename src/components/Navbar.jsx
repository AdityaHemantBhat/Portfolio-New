import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

const Navbar = ({ onWorkClick, onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personalInfo } = usePortfolio();

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
            <button
              onClick={() => scrollToSection("resume")}
              className="text-white hover:text-orange-300 transition-all duration-300 text-xs md:text-base hover:scale-105"
            >
              Resume
            </button>
            <button
              onClick={onWorkClick}
              className="text-white hover:text-orange-300 transition-all duration-300 text-xs md:text-base hover:scale-105"
            >
              Work
            </button>
            <button
              onClick={onContactClick}
              className="bg-yellow-400 text-black px-3 md:px-6 py-1.5 md:py-2 rounded-full font-medium hover:bg-yellow-300 transition-all duration-300 text-xs md:text-base hover:scale-105 hover:shadow-lg relative overflow-visible group"
            >
              <span className="relative z-10">Let's Cook!</span>
              <div className="absolute -top-3 left-1/4 w-2 h-2 bg-gray-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
              <div
                className="absolute -top-4 left-1/2 w-1.5 h-1.5 bg-gray-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="absolute -top-3 right-1/4 w-1 h-1 bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"
                style={{ animationDelay: "0.4s" }}
              ></div>
              <div
                className="absolute -top-5 left-2/3 w-1 h-1 bg-gray-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce"
                style={{ animationDelay: "0.6s" }}
              ></div>
            </button>
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
                <button
                  onClick={() => scrollToSection("resume")}
                  className="block w-full text-left text-white hover:text-orange-300 transition-colors py-3 text-lg border-b border-emerald-700/50"
                >
                  Resume
                </button>
                <button
                  onClick={handleWorkClick}
                  className="block w-full text-left text-white hover:text-orange-300 transition-colors py-3 text-lg border-b border-emerald-700/50"
                >
                  Work
                </button>
                <button
                  onClick={handleContactClick}
                  className="block w-full bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition-colors text-lg mt-6 relative overflow-visible group"
                >
                  <span className="relative z-10">Let's Cook!</span>
                  <div className="absolute -top-3 left-1/4 w-2 h-2 bg-gray-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  <div
                    className="absolute -top-4 left-1/2 w-1.5 h-1.5 bg-gray-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="absolute -top-3 right-1/4 w-1 h-1 bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                  <div
                    className="absolute -top-5 left-2/3 w-1 h-1 bg-gray-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce"
                    style={{ animationDelay: "0.6s" }}
                  ></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
