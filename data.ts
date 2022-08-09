import { AiOutlineAntDesign, AiOutlineApi, AiFillSignal } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { MdDeveloperMode } from "react-icons/md";
import { FaServer } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";

import { IProject, Iservices, ISkill } from "./type";

export const services: Iservices[] = [
  {
    Icon: RiComputerLine,
    title: "Front-end Deveveloppement",
    about: "Html, css, Javascript, NextJs, ReactJs",
  },
  {
    Icon: FaServer,
    title: "Backend Developpement",
    about: "Node : (Express, KnexJs), Spring Boot, MongoDB",
  },
  {
    Icon: AiOutlineApi,
    title: "Gestion Api",
    about: "GraphQl",
  },
  {
    Icon: MdDeveloperMode,
    title: "Application Developpement",
    about: "Java, Kotlin, ReactNative",
  },

  {
    Icon: AiFillSignal,
    title: "Réseaux",
    about: "Élémentaire",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "Autre ",
    about: "Scrum Master, Droit Informatique, methode Agile",
  },
];

export const languages: ISkill[] = [
  {
    name: "HTML",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "CSS",
    level: "70%",
    Icon: BsCircleFill,
  },

  {
    name: "JS",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "NextJS",
    level: "75%",
    Icon: BsCircleFill,
  },
  {
    name: "ReactJS",
    level: "75%",
    Icon: BsCircleFill,
  },
  {
    name: "KnexJS",
    level: "81%",
    Icon: BsCircleFill,
  },
  {
    name: "Express",
    level: "75%",
    Icon: BsCircleFill,
  },
  {
    name: "Java",
    level: "65%",
    Icon: BsCircleFill,
  },
  {
    name: "Kotlin",
    level: "55%",
    Icon: BsCircleFill,
  },
];
export const database: ISkill[] = [
  {
    name: "Spring_Boot",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "MongoDB",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "MySQL",
    level: "60%",
    Icon: BsCircleFill,
  },
];
export const tools: ISkill[] = [
  {
    name: "Photoshop",
    level: "30%",
    Icon: BsCircleFill,
  },
  {
    name: "UX",
    level: "30%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    name: "Expenses React",
    description: "Application web de calcul de dépenses",
    image_path: "images/tracker.png",
    deployed_url: "",
    github_url: "https://github.com/ady243/expenses",
    category: ["ReactJs"],
    key_taches: ["React", "StyledCSS", "TailwindCSS"],
  },
  {
    name: "Annuaire Next",
    description: "Application web de calcul de dépenses",
    image_path: "images/ANNUAIRE.png",
    deployed_url: "",
    github_url: "git@github.com:ady243/Annuaire.git",
    category: ["NextJS"],
    key_taches: ["Next", "StyledCSS", "TailwindCSS", "Bootstrap"],
  },
  {
    name: "Blog Post",
    description: "Application web de post commentaire et de création de compte",
    image_path: "images/frontblog.jpg",
    deployed_url: "",
    github_url: "git@github.com:ady243/front-blogNextJS.git",
    category: ["NextJS", "KnexJs", "Express"],
    key_taches: ["next", "StyledCSS", "TailwindCSS"],
  },
  {
    name: "MobiliShop",
    description:
      "Application d'E-commerce de vente en ligne des produits mobiliers",
    image_path: "images/mobilishop.png",
    deployed_url: "",
    github_url: "git@github.com:ady243/Mobilishop-Java.git",
    category: ["Java", "FireBase"],
    key_taches: ["Java"],
  },
  {
    name: "Knex and Express",
    description: "Back-End Knex & Express (Node)",
    image_path: "images/back.png",
    deployed_url: "",
    github_url: "git@github.com:ady243/Knext-Express.git",
    category: ["KnexJs", "Express"],
    key_taches: ["Java", "FireBase"],
  },
  // {
  //   name: "Flutter (En cours..)",
  //   description: "Register App (En cours) ",
  //   image_path: "images/flutt.jpeg",
  //   deployed_url: "",
  //   github_url: "git@github.com:ady243/Knext-Express.ady",
  //   category: [ "FireBase"],
  //   key_taches: ["Flutter"],
  // },
  {
    name: "Data Base",
    description: "demo Base de données en Spring Boot & MongoDB ",
    image_path: "images/sping.png",
    deployed_url: "",
    github_url:
      "https://gitlab.com/ady243/back-demo/-/commit/6b51f42e90f815c4d0ef79ec0852fb42cf2e4319",
    category: ["Spring Boot"],
    key_taches: ["Java"],
  },
  // {
  //   name: "Flutter (En cours..)",
  //   description: "Register App (En cours) ",
  //   image_path: "images/flutt.jpeg",
  //   deployed_url: "",
  //   github_url: "git@github.com:ady243/Knext-Express.ady",
  //   category: ["Flutter", "FireBase"],
  //   key_taches: ["Flutter"],
  // },
];
