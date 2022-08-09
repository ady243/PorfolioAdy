import { IconType } from "react-icons";

export interface Iservices {
  title: string;
  about: string;
  Icon: IconType;
}
export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}
export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}
export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_taches: string[];
}

export type Category =
  | "ReactJs"
  | "Express"
  | "KnexJs"
  | "Java"
  | "NextJS"
  | "Kotlin"
  | "FireBase"
  | "Spring Boot";
// | "MongoDB";
