import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

function About() {
  const { personalInfo } = usePortfolio();

  return (
    <section
      id="about"
      className="bg-stone-100 pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif text-black mb-6 sm:mb-8 leading-tight">
              Hello,
              <br />
              I'm Aditya!
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              {personalInfo.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 w-full sm:w-fit"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>

              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 w-full sm:w-fit"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0 md:-ml-32 lg:ml-0">
            <div className="relative mx-auto w-fit lg:mx-0 lg:-ml-8">
              <div className="bg-emerald-700 w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 rounded-2xl"></div>
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-6 md:left-12 lg:top-4 lg:left-8 w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 bg-gray-300 rounded-2xl overflow-hidden">
                <img
                  src="/Profile-image-1.jpg"
                  alt="Aditya Bhat - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute -top-2 sm:-top-4 right-4 sm:right-0 md:right-16 lg:-right-8">
              <div className="bg-yellow-400 text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                Born: {personalInfo.birthDate}
              </div>
            </div>

            <div className="absolute top-16 sm:top-20 md:top-24 lg:top-1/3 right-2 sm:right-4 md:right-20 lg:-right-12">
              <div className="bg-yellow-400 text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                {personalInfo.nationality}
              </div>
            </div>

            <div className="hidden md:block absolute bottom-0 -right-8 md:-right-5 lg:-right-12 xl:right-10 bg-black text-white p-6 rounded-2xl w-64">
              <h3 className="text-lg font-serif mb-4">Contact</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-yellow-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-yellow-400" />
                  <span className="break-all">{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-yellow-400" />
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden bg-black text-white p-4 sm:p-6 rounded-2xl w-full max-w-64 mx-auto">
            <h3 className="text-base sm:text-lg font-serif mb-3 sm:mb-4">
              Contact
            </h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-yellow-400 sm:hidden" />
                <MapPin size={16} className="text-yellow-400 hidden sm:block" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-yellow-400 sm:hidden" />
                <Mail size={16} className="text-yellow-400 hidden sm:block" />
                <span className="break-all">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-yellow-400 sm:hidden" />
                <Phone size={16} className="text-yellow-400 hidden sm:block" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
