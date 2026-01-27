import { createContext, useContext } from "react";

const PortfolioContext = createContext();

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};

export const PortfolioProvider = ({ children }) => {
  const projects = [
    {
      id: 1,
      title: "Figma-Inspired Design Tool",
      description:
        "Interactive design tool inspired by Figma, built with JavaScript featuring canvas manipulation, text and rectangle creation, color customization, and layer management. Includes drag and drop functionality, real time editing, and intuitive UI for basic graphic design workflows.",
      image: "/Figma_Style.png",
      technologies: [
        "HTML5",
        "JavaScript",
        "CSS3",
        "DOM Manipulation",
        "Event Handling",
      ],
      liveLink: "https://adityahemantbhat.github.io/Project-Figma-Style-/",
      githubLink: "https://github.com/AdityaHemantBhat/Project-Figma-Style-",
      category: "Interactive Application",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce platform built with React.js featuring complete shopping cart functionality, product browsing, add to cart, remove from cart, quantity management, and local storage persistence. Responsive design with clean UI and smooth user experience for online shopping.",
      image: "/Eco_Bazzar.png",
      technologies: ["React.js", "Tailwind", "Local Storage", "React Hooks"],
      liveLink: "https://eco-bazzar-rho.vercel.app/",
      githubLink: "https://github.com/AdityaHemantBhat/EcoBazzar",
      category: "React Development",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Responsive portfolio website with smooth animations and modern design principles. Built with React and Tailwind CSS featuring locomotive scroll, interactive elements, and optimized performance.",
      image: "/Portfolio.png",
      technologies: ["React", "Tailwind CSS", "Locomotive Scroll", "Vite"],
      liveLink: "https://portfolio-new-one-pi.vercel.app/",
      githubLink: "https://github.com/AdityaHemantBhat/Portfolio-New",
      category: "Frontend Development",
    },
    {
      id: 4,
      title: "Kanban Task Board",
      description:
        "Interactive Kanban board application built with vanilla HTML, CSS, and JavaScript featuring drag and drop functionality, task management, and local storage persistence. Clean UI with smooth animations and responsive design for efficient project workflow management.",
      image: "/Kanban_Board.png",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Local Storage",
        "Drag & Drop API",
      ],
      liveLink: "https://adityahemantbhat.github.io/Kanban-Board/",
      githubLink: "https://github.com/AdityaHemantBhat/Kanban-Board",
      category: "Vanilla JavaScript",
    },
    {
      id: 5,
      title: "Restaurant Website",
      description:
        "Modern restaurant website built with pure HTML and CSS featuring elegant design, responsive layout, and smooth animations. Includes menu showcase, gallery section, contact information, and mobile first approach with clean typography and visual hierarchy.",
      image: "/Res_home.png",
      technologies: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Media Queries"],
      liveLink:
        "https://adityahemantbhat.github.io/cohort-2.0/Project%20-%20B/",
      githubLink:
        "https://github.com/AdityaHemantBhat/cohort-2.0/tree/main/Project%20-%20B",
      category: "Frontend Design",
    },
  ];

  const personalInfo = {
    name: "Aditya Bhat",
    title: "Frontend Developer & Web Designer",
    location: "Goa, India",
    email: "aditya.bhat.dev@gmail.com",
    phone: "+91 9529644737",
    birthDate: "29-11-2001",
    nationality: "Indian",
    bio: "I am a self taught Frontend Developer and Web Designer based in India, with strong experience in WordPress, Drupal, and modern JavaScript. I focus on building scalable, accessible, and performance driven web applications while maintaining clean UI and strong usability.",
    socialLinks: {
      github: "https://github.com/AdityaHemantBhat",
      instagram: "https://www.instagram.com/adi__since2001/",
      linkedin: "https://www.linkedin.com/in/aditya-bhat-3661a8200/",
    },
  };

  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Engineering",
      institution: "Padre Conceicao College of Engineering, Verna",
      period: "2019-2023",
      gpa: "3.01/4",
    },
    {
      id: 2,
      degree: "HSSC - 12th",
      institution: "S.S.Angle Higher Secondary School - Dapot",
      period: "2017-2019",
      percentage: "57.33%",
    },
    {
      id: 3,
      degree: "SSC - 10th",
      institution: "Shri Nirakar High School - Mashem",
      period: "2011-2017",
      percentage: "75.50%",
    },
  ];

  const experience = [
    {
      id: 1,
      title: "Software Developer",
      period: "2025 – Present",
      description:
        "Working on WordPress and Drupal projects, custom UI logic, accessibility compliance (GIGW), and performance optimization.",
    },
    {
      id: 2,
      title: "Junior Web Developer",
      period: "2024 – 2025",
      description:
        "Handled website redesigns, JavaScript based features, and plugin customization for client projects.",
    },
    {
      id: 3,
      title: "Freelance Web Designer & Developer",
      period: "2021 – 2022",
      description:
        "Delivered websites, landing pages, and UI components based on client requirements and research.",
    },
  ];

  const skills = {
    software: [
      { name: "WordPress", image: "/wordpress.png" },
      { name: "Drupal", image: "/drupal.png" },
      { name: "Figma", image: "/figma.png" },
      { name: "Photoshop", image: "/photoshop.png" },
      { name: "CodeIgniter", image: "/code-igniter.png" },
    ],
    coding: [
      { name: "HTML", level: "92%" },
      { name: "CSS", level: "88%" },
      { name: "JavaScript", level: "82%" },
      { name: "React.js", level: "78%" },
      { name: "PHP", level: "76%" },
      { name: "SQL", level: "71%" },
      { name: "CodeIgniter 4", level: "74%" },
    ],
    expertise: [
      "UI/UX Design",
      "Accessibility (GIGW)",
      "Custom WordPress Development",
      "JavaScript Logic",
      "Performance Optimization",
    ],
  };

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Marathi", level: "Fluent" },
    { name: "Konkani", level: "Native" },
  ];

  const hobbies = [
    { name: "Open Source Contributing", icon: "GitBranch" },
    { name: "Learning New Frameworks", icon: "BookOpen" },
    { name: "Building Side Projects", icon: "Code" },
    { name: "Bug Hunting and Debugging", icon: "Bug" },
    { name: "Code Optimization", icon: "Zap" },
  ];

  const value = {
    projects,
    personalInfo,
    education,
    experience,
    skills,
    languages,
    hobbies,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
