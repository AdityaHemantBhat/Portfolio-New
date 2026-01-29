import { usePortfolio } from "../context/PortfolioContext";

function Languages() {
  const { languages } = usePortfolio();

  return (
    <section id="languages" className="bg-stone-100 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-black mb-8 md:mb-16">
          Languages
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {languages.map((language, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg md:text-2xl font-medium text-black mb-2 md:mb-4">
                {language.name}
              </h3>
              <p className="text-gray-600 text-sm md:text-lg">
                {language.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Languages;
