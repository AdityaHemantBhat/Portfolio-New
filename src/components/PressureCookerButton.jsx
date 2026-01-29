import { forwardRef } from "react";

const PressureCookerButton = forwardRef(({ onClick }, ref) => {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-400 text-black px-4 md:px-6 py-2 md:py-2.5 rounded-full font-medium hover:bg-yellow-300 transition-all duration-300 text-xs md:text-base hover:scale-105 hover:shadow-lg relative overflow-visible"
      ref={ref}
    >
      <span className="relative z-10">Let's Cook!</span>
    </button>
  );
});

PressureCookerButton.displayName = "PressureCookerButton";

export default PressureCookerButton;
