import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import NyxianVeilImg from "@/public/Nyxian_Veil.jpg";
import RestfulAPIImg from "@/public/RestfulAPI.png";
import tlqpsmImg from "@/public/tlqpsm.png";

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
    title: "Graduated Miami Dade College | AA in Computer Science",
    location: "Miami, FL",
    description:
      "I graduated after 2 years of studying, developing foundational skills in programming and computer science.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Currently studying a Bachelors in Arts in Computer Science | FIU",
    location: "Miami, FL",
    description:
      "Currently pursuing a Bachelor of Arts in Computer Science with a minor in Engineering Mathematics at Florida International University",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2025",
  },
  {
    title: "INIT BUILD Leader - Sound Systems Project",
    location: "Miami, FL",
    description:
      "Leading the INIT BUILD team in the Sound Systems project at Florida International University, focusing on the design and implementation of sound and audio technologies. Overseeing project development and coordinating team efforts to create innovative solutions.",
    icon: React.createElement(FaReact),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Restful API Bookstore",
    description:
      "I collaborated with a team to develop a RESTful API for an Online Bookstore, using MySQL for efficient data management and Java for backend development. ",
    tags: ["Java", "Postman", "MYSQL", "Springboot"],
    imageUrl: RestfulAPIImg,
  },
  {
    title: "Nyxian Veil",
    description:
      "I led a team of 5 in the INIT Build Program, overseeing the creation of key visual elements for the sound and visual teams in the Nyxian Veil game project using Unity.",
    tags: ["C#", "ShaderLab", "HTML", "HLSL", "Unity"],
    imageUrl: NyxianVeilImg,
  },
  {
    title: "Multiband Compressor",
    description:
      "I developed a Multiband Compressor using JUCE in C++, focusing on audio consistency for platforms like Ableton Live and FL Studio",
    tags: ["JUCE", "C++", ".NET", "Visual Studio"],
    imageUrl: tlqpsmImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "C++",
  "C",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "JUCE",
  "Agile",
  "PostgreSQL",
  "Python",
  "Springboot",
  "Postman",
  "Framer Motion",
  
] as const;