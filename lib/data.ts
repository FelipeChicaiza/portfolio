import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import NyxianVeilImg from "@/public/Nyxian_Veil.jpg";
import RestfulAPIImg from "@/public/RestfulAPI.png";
import tlqpsmImg from "@/public/TLQPSM.png";
import DecentralizedFileStorageImg from "@/public/DecentralizedFileStorageImg.png";
import GlobalNewsNetworkImg from "@/public/GlobalNewsNetworkImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "IT & Network System Intern | Florida Department of Transportation",
    location: "Miami, FL",
    description:
      "Managed over 250 workstations district-wide, handling configuration, imaging, and technical support; utilized Active Directory for account management and ServiceNow for ticketing and resolution. Developed and maintained district wide web applications, including GIS mapping tools, Microsoft Power Apps project management lists, and the Financial Services web platform, supporting operational needs across planning, HR, and finance departments.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2025 - Current",
  },
  {
    title: "Codepath Fellow",
    location: "Remote",
    description:
      "Mentored 150+ students through 1:1 and group sessions, delivering resume reviews and interview prep that improved candidate competitiveness in Python. Guided a cohort of students through Object Oriented Programming and data structures in Python, breaking down complex concepts into clear explanations that improved student confidence and technical readiness.",
    icon: React.createElement(FaReact),
    date: "December 2024 - Current",
  },
  {
    title: "Project Manager & Lead Engineer | INIT Build - Florida International University",
    location: "Miami, FL",
    description:
      "Architected and developed a C++ audio plugin using the JUCE framework, applying object-oriented design and real-time programming principles to ensure stable low-latency performance. Optimized CPU usage and memory allocation by leveraging RAII patterns, efficient buffer management, and multithreading techniques, ensuring glitch-free playback under stress tests.",
    icon: React.createElement(LuGraduationCap),
    date: "September - Nov 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Decentralized File Storage System",
    description:
      "Designed and implemented a peer-to-peer distributed file storage system in Go, supporting file upload, retrieval, and removal across multiple networked nodes.",
    tags: ["Go", "TCP", "P2P Networking", "Encryption"],
    imageUrl: DecentralizedFileStorageImg,
  },
  {
    title: "Global News Network",
    description:
      "Designed and implemented a 3D interactive news platform where users explore stories on a globe, view local feeds with credibility scores, and read Al-generated summaries.",
    tags: ["React", "Three.js", "Tailwind", "Express.js", "MongoDB"],
    imageUrl: GlobalNewsNetworkImg,
  },
  {
    title: "Nyxian Veil",
    description:
      "I led a team of 5 in the INIT Build Program, overseeing the creation of key visual elements for the sound and visual teams in the Nyxian Veil game project using Unity.",
    tags: ["C#", "ShaderLab", "HTML", "HLSL", "Unity"],
    imageUrl: NyxianVeilImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C++",
  "Go",
  "C",
  "TypeScript",
  "JavaScript",
  "SQL",
  "HTML",
  "CSS",
  "Node.js",
  "React",
  "Next.js",
  "Spring Boot",
  "MySQL",
  "MongoDB",
  "SQL",
  "Git",
  "Agile",
  "Postman",
  "JUCE",
  "Ocelot",
  "Cyberduck",
  
] as const;