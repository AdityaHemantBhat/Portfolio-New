import { useEffect, useRef } from "react";
import { X, ExternalLink, Github } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

const Work = ({ isOpen, onClose }) => {
  const scrollContainerRef = useRef(null);
  const { projects } = usePortfolio();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollContainerRef.current && isOpen && window.innerWidth >= 768) {
        e.preventDefault();
        scrollContainerRef.current.scrollLeft += e.deltaY;
      }
    };

    if (isOpen) {
      window.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-700 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="h-full overflow-y-auto md:overflow-hidden bg-emerald-900 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <div className="text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[12rem] xl:text-[18rem] font-serif text-white leading-none tracking-wider transform -rotate-12 animate-pulse">
            <div className="mb-2 md:mb-4">PROJECTS</div>
            <div className="mb-2 md:mb-4">PORTFOLIO</div>
            <div className="mb-2 md:mb-4">WORK</div>
            <div>PROJECTS</div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="absolute top-1/4 left-1/6 text-yellow-400 text-2xl md:text-3xl lg:text-4xl animate-bounce">
            ✦
          </div>
          <div className="absolute bottom-1/4 right-1/6 text-orange-400 text-xl md:text-2xl lg:text-3xl animate-bounce delay-500">
            ✧
          </div>
          <div className="absolute top-1/2 left-1/12 text-yellow-400 text-lg md:text-xl lg:text-2xl animate-pulse delay-1000">
            ◆
          </div>
          <div className="absolute bottom-1/3 left-1/3 text-orange-400 text-base md:text-lg lg:text-xl animate-pulse delay-700">
            ●
          </div>
        </div>

        <div className="flex items-center justify-between p-4 md:p-5 border-b border-emerald-700/50 backdrop-blur-sm bg-emerald-900/80 relative z-20">
          <div className="animate-fade-in-up">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-yellow-400 mb-1 animate-slide-in-left">
              My Work
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base animate-slide-in-left delay-200">
              A showcase of creative solutions & digital experiences
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 md:p-3 text-white hover:text-yellow-400 transition-all duration-300 hover:bg-emerald-800 rounded-full hover:scale-110 animate-slide-in-right"
          >
            <X size={24} className="md:hidden" />
            <X size={28} className="hidden md:block" />
          </button>
        </div>

        <div className="h-full overflow-hidden pt-4 relative z-10">
          <div
            ref={scrollContainerRef}
            className="flex flex-col md:flex-row h-full overflow-y-auto md:overflow-x-auto md:overflow-y-hidden scrollbar-hide gap-4 md:gap-6 p-4 md:px-6 md:py-6 custom-scroll"
            style={{ scrollBehavior: "smooth" }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="flex-none w-full md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto md:h-[72vh] flex items-center justify-center animate-slide-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-stone-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 w-full h-full flex flex-col group">
                  <div className="h-48 sm:h-56 md:h-2/5 bg-linear-to-br from-gray-200 to-gray-400 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute top-3 left-3 md:top-4 md:left-4 animate-slide-in-left delay-300">
                      <span className="bg-yellow-400 text-black px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 md:top-4 md:right-4 animate-slide-in-right delay-300">
                      <div className="bg-emerald-900/80 backdrop-blur-sm text-yellow-400 text-lg md:text-2xl font-bold w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <div
                      className="hidden md:flex absolute inset-0 bg-emerald-900/90 opacity-0 group-hover:opacity-100 transition-all duration-300 items-center justify-center cursor-pointer"
                      onClick={() => window.open(project.liveLink, "_blank")}
                    >
                      <div className="text-center pointer-events-none">
                        <div className="text-yellow-400 text-lg font-medium mb-2">
                          View Project
                        </div>
                        <div className="w-12 h-0.5 bg-yellow-400 mx-auto animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 p-4 md:p-6 flex flex-col justify-between bg-linear-to-b from-stone-100 to-stone-50">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-black mb-2 md:mb-3 leading-tight group-hover:text-emerald-800 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3 md:mb-4 line-clamp-3 md:line-clamp-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                        {project.technologies
                          .slice(0, window.innerWidth < 768 ? 3 : 5)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-emerald-100 text-emerald-800 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs font-medium hover:bg-emerald-200 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.technologies.length >
                          (window.innerWidth < 768 ? 3 : 5) && (
                          <span className="bg-gray-200 text-gray-600 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs font-medium">
                            +
                            {project.technologies.length -
                              (window.innerWidth < 768 ? 3 : 5)}{" "}
                            more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mt-auto">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-emerald-700 text-white px-4 py-2.5 md:px-5 md:py-3 rounded-full text-sm font-medium hover:bg-emerald-800 transition-all duration-300 hover:scale-105 hover:shadow-lg flex-1 justify-center group/btn"
                      >
                        <ExternalLink
                          size={16}
                          className="group-hover/btn:rotate-12 transition-transform duration-300"
                        />
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2.5 md:px-5 md:py-3 rounded-full text-sm font-medium hover:bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg flex-1 justify-center group/btn"
                      >
                        <Github
                          size={16}
                          className="group-hover/btn:rotate-12 transition-transform duration-300"
                        />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex absolute bottom-6 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 text-white">
          <div className="flex items-center gap-3 bg-emerald-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-xs font-medium">
              Scroll horizontally with mouse wheel
            </span>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>

        <div className="md:hidden flex justify-center py-4 text-white">
          <div className="bg-emerald-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-xs font-medium">
              Scroll down to see all projects
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
