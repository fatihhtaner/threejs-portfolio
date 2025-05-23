import LanguageSwitcher from "../components/LanguageSwitcher";

export const navLinks = (t) => [
  {
    id: 1,
    name: t("navLinks.home", { ns: "constants" }),
    href: "#home",
    type: "link",
  },
  {
    id: 2,
    name: t("navLinks.about", { ns: "constants" }),
    href: "#about",
    type: "link",
  },
  {
    id: 3,
    name: t("navLinks.work", { ns: "constants" }),
    href: "#work",
    type: "link",
  },
  {
    id: 4,
    name: t("navLinks.contact", { ns: "constants" }),
    href: "#contact",
    type: "link",
  },
  { id: 5, type: "component", component: LanguageSwitcher },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = (t) => [
  {
    title: t("projects.pyshico.title", { ns: "constants" }),
    desc: t("projects.pyshico.desc", { ns: "constants" }),
    subdesc: t("projects.pyshico.subdesc", { ns: "constants" }),
    href: "https://onurkaygn.github.io/physicohealth/",
    texture: "/textures/project/physico.mp4",
    logo: "/assets/physico2.png",
    logoStyle: {
      backgroundColor: "#c1ff72",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "BootStrap",
        path: "assets/bootstrap.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "React Native",
        path: "/assets/react-native.svg",
      },
      {
        id: 5,
        name: "Node.js",
        path: "/assets/nodejs.png",
      },
      {
        id: 6,
        name: "MongoDB",
        path: "/assets/mongodb.png",
      },
    ],
  },
  {
    title: t("projects.rocket.title", { ns: "constants" }),
    desc: t("projects.rocket.desc", { ns: "constants" }),
    subdesc: t("projects.rocket.subdesc", { ns: "constants" }),
    href: "https://crypto-exchange-roan-nu.vercel.app/",
    texture: "/textures/project/crypto.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/nextjs.png",
      },
      {
        id: 2,
        name: "BootStrap",
        path: "assets/bootstrap.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Firebase",
        path: "/assets/firebase.svg",
      },
    ],
  },
  {
    title: t("projects.carepulse.title"),
    desc: t("projects.carepulse.desc"),
    subdesc: t("projects.carepulse.subdesc"),
    href: "https://www.youtube.com/watch?v=lEflo_sc82g",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Celadonsoft",
    pos: "Software Developer",
    duration: "October 2024 - April 2025",
    title:
      "I developed applications based on customer needs using technologies such as React, React Native, TypeScript, and Redux. In this role, we also refactored the SellItBack application to improve performance, maintainability, and scalability. Additionally, I developed the admin panel of the 12Reps project using React.",
    icon: "/assets/celadon.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "Erciyes Anadolu Holding",
    pos: "Youth Talent",
    duration: "July 2024 - September 2024",
    title:
      "As part of the Young Talent program, I migrated the patch distribution service of the holding and its group companies from Desktop Central to Microsoft Intune. I also gained knowledge in virtualization and",
    icon: "/assets/erciyes.jpg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Celadonsoft",
    pos: "Software Developer Intern",
    duration: "October 2023 - April 2024",
    title:
      "During my internship, I developed a MERN-based Library (BookStore) project using Node.js, React, and MongoDB. I also created a clone of the PragueCoolPass website with React, and built an online TicTacToe game playable on a 3D cube.",
    icon: "/assets/celadon.png",
    animation: "salute",
  },
  {
    id: 3,
    name: "Market Calculus",
    pos: "Frontend Developer Intern",
    duration: "August 2023 - September 2023",
    title:
      "During my internship, I learned version control systems, TypeScript, and Jira technologies. Later, I joined an ongoing React project and integrated the drag-and-drop features assigned to me into the company’s production environment.",
    icon: "/assets/marketcalculus_logo.jpg",
    animation: "salute",
  },
];
