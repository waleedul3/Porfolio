import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/waleedul3",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/waleedul3",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com/waleedul3",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
] as const;

export const PROJECTS = [
  {
    title: "UniCrush - College Social Platform",
    description:
      "A real-time social networking platform designed specifically for university students. Built with Firebase backend, featuring user authentication, profiles, and real-time data updates using Firestore. Architected for future scalability with cloud deployment on AWS.",
    image: "/projects/unicrush.jpg",
    link: "https://github.com/waleedul3/unicrush",
  },
  {
    title: "MentoraX - EdTech Platform",
    description:
      "A comprehensive educational platform featuring course management and automated certification workflows. Integrated Razorpay payment gateway for secure transactions and premium subscriptions. Built with real-time authentication using Firebase and Supabase.",
    image: "/projects/mentorax.png",
    link: "https://github.com/waleedul3/mentorax",
  },
  {
    title: "StreamNode - Live Streaming Platform",
    description:
      "Self-hosted WebRTC-based live streaming platform supporting 20+ concurrent streams with sub-300ms latency. Features custom Node.js signaling server for real-time coordination and improved stream stability across variable network conditions.",
    image: "/projects/streamnode.png",
    link: "https://github.com/waleedul3/streamnode",
  },
  {
    title: "VidSwift - Media Downloader",
    description:
      "Advanced video and audio downloader supporting multiple platforms with all available quality formats. Features efficient media handling and streaming logic, designed with extensibility for future platform integrations.",
    image: "/projects/vidswift.png",
    link: "https://github.com/waleedul3/vidswift",
  },
  {
    title: "Employee Salary Prediction System",
    description:
      "Machine learning model predicting employee salaries based on experience and performance features. Achieved 85% prediction accuracy through advanced data cleaning and feature engineering. Built with Python, Scikit-learn, and Jupyter Notebook.",
    image: "/projects/salary-pridiction.png",
    link: "https://github.com/waleedul3/salary-prediction",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Professional",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/waleedul3",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/waleedul3",
      },
      {
        name: "Resume",
        icon: null,
        link: "/waleed_resume.pdf",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com/waleedul3",
      },
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com/waleedul_haque_",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Email Me",
        icon: null,
        link: "mailto:waleedulhaque3@email.com",
      },
      {
        name: "Phone",
        icon: null,
        link: "tel:+918252741528",
      },
      {
        name: "Hire Me",
        icon: null,
        link: "mailto:waleedulhaque3@email.com?subject=Job Opportunity",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/waleedul3",
};
