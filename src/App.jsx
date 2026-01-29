import { useState } from "react";
import { PortfolioProvider } from "./context/PortfolioContext";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

const App = () => {
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openWork = () => {
    setIsWorkOpen(true);
  };

  const closeWork = () => {
    setIsWorkOpen(false);
  };

  const openContact = () => {
    setIsContactOpen(true);
  };

  const closeContact = () => {
    setIsContactOpen(false);
  };

  return (
    <PortfolioProvider>
      <div className="min-h-screen">
        <Hero onWorkClick={openWork} onContactClick={openContact} />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Languages />
        <Hobbies />
        <Footer onWorkClick={openWork} onContactClick={openContact} />
      </div>

      <Work isOpen={isWorkOpen} onClose={closeWork} />
      <Contact isOpen={isContactOpen} onClose={closeContact} />
      <BackToTop />
    </PortfolioProvider>
  );
};

export default App;
