import { usePortfolio } from "../context/PortfolioContext";

const Experience = () => {
  const { experience } = usePortfolio();

  return (
    <section id="work" className="bg-emerald-900 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-yellow-400 rounded-2xl md:rounded-3xl p-6 md:p-12 animate-fade-in-up hover:shadow-xl z-999 transition-all duration-500">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-black mb-8 md:mb-12">
            Experience
          </h2>

          <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className="flex flex-col sm:flex-row sm:items-start gap-3 md:gap-6 animate-slide-in-left hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-black font-bold text-base md:text-lg min-w-[100px] md:min-w-[120px]">
                  {exp.period}
                </div>
                <div>
                  <h3 className="text-black text-lg md:text-xl font-medium">
                    {exp.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3">
            <span className="bg-black text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium hover:scale-110 transition-all duration-300">
              #Problem solving
            </span>
            <span className="bg-black text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium hover:scale-110 transition-all duration-300">
              #Research driven
            </span>
            <span className="bg-black text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium hover:scale-110 transition-all duration-300">
              #Detail oriented
            </span>
            <span className="bg-black text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium hover:scale-110 transition-all duration-300">
              #Adaptability
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
