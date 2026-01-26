import Navbar from "./Navbar";
import { Github, Instagram, Linkedin } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

const Hero = ({ onWorkClick, onContactClick }) => {
  const { personalInfo } = usePortfolio();
  return (
    <section className="min-h-screen bg-linear-to-b from-emerald-900 via-emerald-900 to-stone-100 relative overflow-hidden">
      <Navbar onWorkClick={onWorkClick} onContactClick={onContactClick} />

      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none animate-float">
        <div className="text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[10rem] xl:text-[15rem] font-serif text-white leading-none tracking-wider transform rotate-12">
          <div className="animate-fade-in-up delay-100">PORTFOLIO</div>
          <div className="animate-fade-in-up delay-200">PORTFOLIO</div>
          <div className="animate-fade-in-up delay-300">PORTFOLIO</div>
        </div>
      </div>

      <div className="relative z-10 pt-16 sm:pt-20 md:pt-32 px-4 md:px-8 pb-8 sm:pb-12 md:pb-16 lg:pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 items-center min-h-[60vh] sm:min-h-[70vh]">
            <div className="text-center lg:text-left order-2 lg:order-1 animate-slide-in-left">
              <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[5rem] xl:text-[8rem] font-serif text-white leading-none mb-4 mt-7 sm:mb-6 lg:mb-12 tracking-wide animate-fade-in-up">
                PORTFOLIO
              </h1>

              <div className="bg-orange-600 p-4 md:p-6 lg:p-8 rounded-2xl max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-300 hover:shadow-xl transition-all duration-500 hover:scale-105">
                <p className="text-white text-sm md:text-base leading-relaxed">
                  I design and develop clean, functional, and accessible digital
                  experiences. My approach is rooted in research, logic, and
                  simplicity, ensuring every solution is both practical and
                  user-focused.
                </p>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 animate-slide-in-right">
              <div className="bg-orange-600 w-48 h-60 sm:w-56 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 rounded-2xl relative z-10 animate-float lg:-ml-32 xl:ml-0"></div>

              <div className="absolute top-3 left-15 sm:top-4 sm:left-4 md:top-4 md:left-45 lg:top-6 lg:-left-9 xl:left-15 w-48 h-60 sm:w-56 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 bg-gray-300 rounded-2xl overflow-hidden z-20 hover:scale-105 transition-all duration-500">
                <img
                  src="/profile-image.png"
                  alt="Aditya Bhat - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-1/2 -right-8 sm:-right-12 md:-right-16 lg:right-10 xl:right-5 2xl:right-22 transform -translate-y-1/2 space-y-3 sm:space-y-4 z-30 hidden lg:block animate-fade-in delay-500">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white text-sm font-medium hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white text-sm font-medium hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={16} />
                  <span>Instagram</span>
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white text-sm font-medium hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="absolute -bottom-80 md:top-20 left-1/2 transform -translate-x-1/2 flex gap-8 md:gap-12 z-30 lg:hidden animate-fade-in delay-500">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white text-sm font-medium hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white text-sm font-medium hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={16} />
                  <span>Instagram</span>
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white text-sm font-medium hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-1/4 text-yellow-400 text-base sm:text-xl md:text-2xl lg:text-3xl animate-pulse">
        ✦
      </div>
      <div className="absolute bottom-1/3 right-1/4 text-yellow-400 text-sm sm:text-lg md:text-xl lg:text-2xl animate-pulse delay-300">
        ✦
      </div>
      <div className="absolute top-1/2 right-1/3 text-orange-400 text-xs sm:text-base md:text-lg lg:text-xl animate-pulse delay-700">
        ✦
      </div>
    </section>
  );
};

export default Hero;
