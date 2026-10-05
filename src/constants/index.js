export const personalInfo = {
  name: "Ibrahim Fatih Taner",
  email: "ibrahimfatihtaner@gmail.com",
  github: "https://github.com/fatihhtaner",
  linkedin: "https://www.linkedin.com/in/fatih-taner/",
  gitlab: "https://gitlab.com/users/ibrahimfatihtaner/projects",
  // Shown on the globe in the About section
  location: { lat: 37.1759, lng: 33.2287 },
};

// Labels live in public/locales/<lng>/common.json under "nav.<key>"
export const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "projects", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "contact", href: "#contact" },
];

// Texts live in public/locales/<lng>/clients.json under "items.<id>"
export const clientReviews = [
  { id: 1, img: "/assets/review1.png" },
  { id: 2, img: "/assets/review2.png" },
  { id: 3, img: "/assets/review3.png" },
  { id: 4, img: "/assets/review4.png" },
];

// Texts live in public/locales/<lng>/projects.json under "items.<key>"
export const myProjects = [
  {
    key: "physico",
    href: "https://onurkaygn.github.io/physicohealth/",
    texture: "/textures/project/physico.mp4",
    logo: "/assets/physico2.png",
    logoStyle: {
      backgroundColor: "#c1ff72",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
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
        name: "BootStrap",
        path: "/assets/bootstrap.png",
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
    key: "rocket",
    href: "https://crypto-exchange-roan-nu.vercel.app/",
    texture: "/textures/project/crypto.mp4",
    logo: "/assets/bitcoin.png",
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
        path: "/assets/bootstrap.png",
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
    key: "tictactoe",
    href: "https://gitlab.com/celadonfrontend/frontend-task-1/-/tree/main?ref_type=heads",
    texture: "/textures/project/tictactoe.mp4",
    logo: "/assets/cube3.png",
    logoStyle: {
      backgroundColor: "#836580",
      background:
        "linear-gradient(90deg, #355C7D, #C06C84), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/css2.png",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/assets/javascript.png",
      },
      {
        id: 4,
        name: "Firebase",
        path: "/assets/firebase.svg",
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

// Texts live in public/locales/<lng>/experience.json under "items.<key>"
export const workExperiences = [
  {
    key: "celadonsoft-dev",
    name: "Celadonsoft",
    icon: "/assets/celadon.png",
    animation: "salute",
  },
  {
    key: "erciyes",
    name: "Erciyes Anadolu Holding",
    icon: "/assets/erciyes.jpg",
    animation: "clapping",
  },
  {
    key: "celadonsoft-intern",
    name: "Celadonsoft",
    icon: "/assets/celadon.png",
    animation: "salute",
  },
  {
    key: "market-calculus",
    name: "Market Calculus",
    icon: "/assets/marketcalculus_logo.jpg",
    animation: "victory",
  },
];
