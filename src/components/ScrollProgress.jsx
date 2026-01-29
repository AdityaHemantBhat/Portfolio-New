import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState("Hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);

      const sections = [
        { id: "portfolio", name: "Portfolio", start: 0 },
        { id: "about", name: "About", start: 0.14 },
        { id: "resume", name: "Education", start: 0.3 },
        { id: "work", name: "Experience", start: 0.46 },
        { id: "skills", name: "Skills", start: 0.6 },
        { id: "languages", name: "Languages", start: 0.72 },
        { id: "interests", name: "Interests", start: 0.84 },
      ];

      let currentSectionName = "Hero";

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrolled >= sections[i].start * 100) {
          currentSectionName = sections[i].name;
          break;
        }
      }

      setCurrentSection(currentSectionName);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-0 top-0 w-1 md:w-1 h-screen z-9999 bg-emerald-900/10 pointer-events-none">
      <div
        className="w-full bg-linear-to-b from-yellow-400 via-orange-400 to-yellow-400 transition-all duration-200 ease-out"
        style={{
          height: `${scrollProgress}%`,
          boxShadow:
            "0 0 20px rgba(250, 204, 21, 0.8), inset 0 0 15px rgba(250, 204, 21, 0.4)",
        }}
      />

      <div
        className="absolute right-0 w-2 md:w-1.5 h-2 md:h-1.5 bg-yellow-400 rounded-full transition-all duration-200"
        style={{
          top: `${scrollProgress}%`,
          transform: "translateY(-50%) translateX(50%)",
          boxShadow:
            "0 0 25px rgba(250, 204, 21, 0.9), 0 0 50px rgba(250, 204, 21, 0.5)",
        }}
      />

      <div
        className="absolute right-8 text-[10px] md:text-xs font-medium text-yellow-400 whitespace-nowrap transition-all duration-300 pointer-events-none"
        style={{
          top: `${scrollProgress}%`,
          transform: "translateY(-50%)",
          opacity: 0,
          zIndex: -9999,
        }}
      >
        {currentSection}
      </div>
    </div>
  );
};

export default ScrollProgress;
