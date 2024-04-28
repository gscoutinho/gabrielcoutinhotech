import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


export const links = [
  {
    name: "Home",
    hash: "app/#Home"
  },
  {
    name: "About",
    hash: "app/#About"
  },
  {
    name: "Portfolio",
    hash: "app/#Portfolio"
  },
  {
    name: "Experience",
    hash: "app/#Experience"
  },
  {
    name: "Projects",
    hash: "app/#Projects"
  },
  {
    name: "Contact",
    hash: "app/#Contact"
  }
] as const

export const experiencesData = [
  {
    title: "Graduated in Control & Automation Engineering",
    location: "Itajubá, MG - Brazil",
    description:
      "Graduation focused in Industrial automation and SCADA systems. My thesis was based in adaptative control theory.",
    date: "2014 - 2018",
    entryType: "study"
  },
  {
    title: "SCADA Lead Developer",
    location: "Campinas, SP - Brazil",
    description:
      "Development of High Performance SCADA systems based in Elipse Software. Applications for Utilities, mining and automotive.",
    date: "2018 - 2019",
    entryType: "work"
  },
  {
    title: "Engineer Consultant",
    location: "São Paulo, SP - Brazil",
    description:
      "Design, develop and deploy automation and control solutions for utilities: hydro, wind, solar and hybrid plants.",
    date: "2019 - 2023",
    entryType: "work"
  },
  {
    title: "SCADA Project Engineer",
    location: "São Paulo, SP - Brazil",
    description:
      "Design, specify and manage SCADA and control solution for wind power plants.",
    date: "2023 - now",
    entryType: "work"
  }
] as const;

export const projectsItems = [
{
  title:"The Secret Password",
  description: "The Secret Password is a single player game where you need to find out what is the Secret Password. Check out and try to discover this puzzle.",
  skills: ["HTML", "CSS", "Javascript", "Tailwind", "Nextjs"],
  image: "/public/the_secret_password.png",
  href:"/secretpassword"
},
// {
//   title:"The Secret Password",
//   description: "The Secret Password is a single player game where you need to find out what is the Secret Password.",
//   skills: ["HTML", "CSS", "Javascript", "Tailwind", "Nextjs"],
//   image: "",
//   href:"/secretpassword"
// },
// {
//   title:"The Secret Password",
//   description: "The Secret Password is a single player game where you need to find out what is the Secret Password. Check out and try to discover this puzzle.",
//   skills: ["HTML", "CSS", "Javascript", "Tailwind", "Nextjs"],
//   image: "",
//   href:"/secretpassword"
// },
] as const;