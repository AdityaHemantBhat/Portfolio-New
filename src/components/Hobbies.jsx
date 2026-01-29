import { GitBranch, BookOpen, Code, Bug, Zap } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

function Hobbies() {
  const { hobbies } = usePortfolio();

  const getIcon = (iconName) => {
    switch (iconName) {
      case "GitBranch":
        return GitBranch;
      case "BookOpen":
        return BookOpen;
      case "Code":
        return Code;
      case "Bug":
        return Bug;
      case "Zap":
        return Zap;
      default:
        return Code;
    }
  };

  return (
    <section id="hobbies" className="bg-stone-100 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-black mb-8 md:mb-16">
          Coding Interests
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center">
          {hobbies.map((hobby, index) => {
            const IconComponent = getIcon(hobby.icon);
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
                  <IconComponent
                    size={24}
                    className="text-black md:w-8 md:h-8"
                  />
                </div>
                <h3 className="text-base md:text-lg font-medium text-black mb-1 md:mb-2">
                  {hobby.name.split(" ")[0]}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {hobby.name.split(" ").slice(1).join(" ") ||
                    hobby.name.split(" ")[0]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hobbies;
