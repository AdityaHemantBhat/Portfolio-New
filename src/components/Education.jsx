import { usePortfolio } from "../context/PortfolioContext";

const Education = () => {
  const { education } = usePortfolio();

  return (
    <section id="resume" className="bg-emerald-900 py-12 md:py-20 relative">
      <div className="absolute right-0 top-2/3 transform -translate-y-1/2 opacity-10 hidden lg:block animate-pulse">
        <div className="text-[6rem] lg:text-[12rem] font-serif text-white leading-none rotate-90 origin-center">
          RESUME
          <br />
          RESUME
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-yellow-400 mb-8 md:mb-16 animate-fade-in-up">
          Education
        </h2>

        <div className="space-y-8 md:space-y-12">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="flex flex-col md:flex-row md:items-start gap-3 md:gap-8 animate-slide-in-left hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-yellow-400 font-bold text-lg md:text-xl min-w-[120px]">
                {edu.period}
              </div>
              <div className="flex-1">
                <h3 className="text-white text-lg md:text-xl font-medium mb-2">
                  {edu.degree}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {edu.institution}
                  <br />
                  {edu.gpa && `GPA ${edu.gpa}`}
                  {edu.percentage && `Percentage - ${edu.percentage}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
