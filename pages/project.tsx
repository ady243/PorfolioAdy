import { FunctionComponent, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("Tout");

  const handlerFilterCategory = (category: Category | "Tout") => {
    if (category === "Tout") {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "103vh" }}>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          // eslint-disable-next-line react/jsx-key
          <div className="col-span-12 p-2 sm:col lg:col-span-4">
            <ProjectCard project={project} key={project.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
