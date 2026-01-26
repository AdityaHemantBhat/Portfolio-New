import { useState, useEffect } from "react";
import {
  X,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Send,
  Github,
  Linkedin,
  Copy,
  Check,
} from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";

const Contact = ({ isOpen, onClose }) => {
  const { personalInfo } = usePortfolio();
  const [copiedItem, setCopiedItem] = useState(null);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      // Restore body scroll when modal is closed
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }

    return () => {
      // Cleanup: restore body scroll
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isOpen]);

  const copyToClipboard = async (text, item) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-700 ease-in-out overflow-hidden ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full overflow-y-auto overflow-x-hidden bg-linear-to-br from-emerald-900 via-teal-800 to-emerald-900 relative scrollbar-hide">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <div className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[15rem] xl:text-[20rem] font-serif text-white leading-none tracking-wider transform -rotate-12">
            <div className="animate-pulse">LET'S TALK</div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="fixed top-4 right-4 md:top-6 md:right-6 z-50 p-3 text-white hover:text-yellow-400 transition-all duration-300 hover:bg-emerald-800/50 rounded-full hover:scale-110 backdrop-blur-sm"
        >
          <X size={28} />
        </button>

        <div className="relative z-10 min-h-screen py-16 md:py-20 px-4 md:px-8 overflow-x-hidden max-w-full">
          <div className="max-w-7xl mx-auto w-full overflow-x-hidden">
            <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-serif text-white mb-4 animate-slide-in-left">
                Let's Cook
              </h1>
              <div className="w-16 md:w-24 h-0.5 md:h-1 bg-yellow-400 mx-auto mb-4 md:mb-6 animate-slide-in-right delay-300"></div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-500">
                Ready to collaborate? Let's create something amazing together.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-full overflow-x-hidden">
              <div className="lg:col-span-2 space-y-6 w-full max-w-full overflow-x-hidden">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 group animate-slide-in-left w-full max-w-full overflow-x-hidden">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full max-w-full">
                    <div className="bg-linear-to-br from-blue-500 to-blue-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Mail size={32} className="text-white" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        Email Me
                      </h3>
                      <p className="text-gray-300 mb-4">
                        Drop me a line anytime
                      </p>
                      <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mb-4 w-full max-w-full overflow-x-hidden">
                        <span className="text-yellow-400 font-medium text-lg break-all max-w-full overflow-hidden text-center sm:text-left">
                          {personalInfo.email}
                        </span>
                        <button
                          onClick={() =>
                            copyToClipboard(personalInfo.email, "email")
                          }
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors shrink-0"
                        >
                          {copiedItem === "email" ? (
                            <Check size={18} className="text-green-400" />
                          ) : (
                            <Copy size={18} className="text-gray-400" />
                          )}
                        </button>
                      </div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                      >
                        <Send size={18} />
                        Send Email
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 group animate-slide-in-left delay-200">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="bg-linear-to-br from-green-500 to-green-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Phone size={32} className="text-white" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        Call Me
                      </h3>
                      <p className="text-gray-300 mb-4">
                        Let's have a conversation
                      </p>
                      <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mb-4 w-full max-w-full overflow-x-hidden">
                        <span className="text-yellow-400 font-medium text-lg max-w-full overflow-hidden text-center sm:text-left">
                          {personalInfo.phone}
                        </span>
                        <button
                          onClick={() =>
                            copyToClipboard(personalInfo.phone, "phone")
                          }
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors shrink-0"
                        >
                          {copiedItem === "phone" ? (
                            <Check size={18} className="text-green-400" />
                          ) : (
                            <Copy size={18} className="text-gray-400" />
                          )}
                        </button>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <a
                          href={`tel:${personalInfo.phone}`}
                          className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                        >
                          <Phone size={18} />
                          Call Now
                        </a>
                        <a
                          href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                        >
                          <MessageCircle size={18} />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 flex">
                <div className="bg-linear-to-br from-orange-500 to-orange-600 rounded-3xl p-6 md:p-8 text-center animate-slide-in-right w-full flex flex-col justify-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden border-4 border-white/30 hover:scale-105 transition-transform duration-300">
                    <img
                      src="/profile-image.png"
                      alt="Aditya Bhat"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 md:mb-3">
                    {personalInfo.name}
                  </h3>
                  <p className="text-orange-100 mb-4 md:mb-6 text-lg">
                    {personalInfo.title}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-white/90 mb-6 md:mb-8">
                    <MapPin size={20} />
                    <span className="text-lg">{personalInfo.location}</span>
                  </div>

                  <div className="flex justify-center gap-4">
                    <a
                      href={personalInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 md:p-4 bg-white/20 hover:bg-white/30 rounded-full transition-colors hover:scale-110"
                    >
                      <Github size={24} className="text-white" />
                    </a>
                    <a
                      href={personalInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 md:p-4 bg-white/20 hover:bg-white/30 rounded-full transition-colors hover:scale-110"
                    >
                      <Linkedin size={24} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-20 lg:h-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
