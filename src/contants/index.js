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
    href: "#projects",
    type: "link",
  },
  {
    id: 4,
    name: t("navLinks.exp", { ns: "constants" }),
    href: "#experiences",
    type: "link",
  },
  {
    id: 5,
    name: t("navLinks.contact", { ns: "constants" }),
    href: "#contact",
    type: "link",
  },
  { id: 6, type: "component", component: LanguageSwitcher },
];

export const clientReviews = [
  {
    id: 1,
    name: "name",
    position: "position",
    img: "assets/review1.png",
    review: "review",
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
    title: t("projects.tictactoe.title", { ns: "constants" }),
    desc: t("projects.tictactoe.desc", { ns: "constants" }),
    subdesc: t("projects.tictactoe.subdesc", { ns: "constants" }),
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
        path: "assets/css2.png",
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

export const workExperiences = (t) => [
  {
    id: 1,
    name: "Celadonsoft",
    pos: t("experience.celadon1.position", { ns: "experience" }),
    duration: t("experience.celadon1.duration", { ns: "experience" }),
    title: t("experience.celadon1.title", { ns: "experience" }),
    icon: "/assets/celadon.png",
    animation: "salute",
  },
  {
    id: 2,
    name: "Erciyes Anadolu Holding",
    pos: t("experience.erciyes.position", { ns: "experience" }),
    duration: t("experience.erciyes.duration", { ns: "experience" }),
    title: t("experience.erciyes.title", { ns: "experience" }),
    icon: "/assets/erciyes.jpg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Celadonsoft",
    pos: t("experience.celadon2.position", { ns: "experience" }),
    duration: t("experience.celadon2.duration", { ns: "experience" }),
    title: t("experience.celadon2.title", { ns: "experience" }),
    icon: "/assets/celadon.png",
    animation: "salute",
  },
  {
    id: 4,
    name: "Market Calculus",
    pos: t("experience.marketcalculus.position", { ns: "experience" }),
    duration: t("experience.marketcalculus.duration", { ns: "experience" }),
    title: t("experience.marketcalculus.title", { ns: "experience" }),
    icon: "/assets/marketcalculus_logo.jpg",
    animation: "victory",
  },
];
