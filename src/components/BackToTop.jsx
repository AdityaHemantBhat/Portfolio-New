import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 p-4 bg-yellow-400 text-black rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group hover:bg-yellow-300 hover:scale-110 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-95 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <ChevronUp
        size={24}
        className="transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
    </button>
  );
};

export default BackToTop;
