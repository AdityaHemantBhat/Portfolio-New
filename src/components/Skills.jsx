import { Code, Database, Eye, Accessibility, Zap, Globe } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

function Skills() {
  const { skills } = usePortfolio();

  return (
    <section className="bg-emerald-900 py-12 md:py-20 relative">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-10 hidden lg:block">
        <div className="text-[6rem] lg:text-[8rem] font-serif text-white leading-none">
          TECHNICAL
          <br />
          SKILLS
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-yellow-400 mb-8 md:mb-16">
          Technical skills
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-medium mb-6 md:mb-8">
              Software Skills
            </h3>
            <div className="flex gap-3 md:gap-4 mb-6 md:mb-8 flex-wrap">
              {skills.software.map((software, index) => (
                <div
                  key={index}
                  className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center relative group p-2"
                >
                  <img
                    src={software.image}
                    alt={software.name}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    {software.name}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {skills.expertise.map((skill, index) => (
                <button
                  key={index}
                  className="bg-black text-white px-3 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-1 md:gap-2"
                >
                  <Eye size={12} />
                  {skill}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl md:text-2xl font-medium mb-6 md:mb-8">
              Coding skills
            </h3>
            <div className="space-y-3 md:space-y-4 text-white text-base md:text-lg">
              {skills.coding.map((skill, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {skill.name === "HTML" || skill.name === "CSS" ? (
                      <Globe size={16} />
                    ) : skill.name === "SQL" ? (
                      <Database size={16} />
                    ) : (
                      <Code size={16} />
                    )}
                    <span>{skill.name}</span>
                  </div>
                  <span className="text-yellow-400">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
