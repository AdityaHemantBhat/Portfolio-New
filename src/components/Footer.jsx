import { Github, Instagram, Linkedin, Mail, MapPin, Heart } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

const Footer = () => {
  const { personalInfo } = usePortfolio();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-900 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[15rem] font-serif text-white leading-none tracking-wider transform rotate-12">
          PORTFOLIO
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-orange-500 text-xl animate-pulse">✦</span>
              <span className="text-white font-medium text-lg">
                {personalInfo.name}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <MapPin size={16} className="text-yellow-400" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="#about"
                className="block text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                About Me
              </a>
              <a
                href="#resume"
                className="block text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                Resume
              </a>
              <button className="block text-gray-300 hover:text-yellow-400 transition-colors text-sm text-left">
                Work
              </button>
              <button className="block text-gray-300 hover:text-yellow-400 transition-colors text-sm text-left">
                Contact
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium text-lg mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                <Instagram size={16} />
                <span>Instagram</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-700/50 pt-6">
          <div className="flex justify-center items-center">
            <div className="flex items-center gap-1 text-gray-300 text-sm">
              <span>
                © {currentYear} {personalInfo.name}. Made with
              </span>
              <Heart size={14} className="text-red-400 animate-pulse" />
              <span>in India. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
