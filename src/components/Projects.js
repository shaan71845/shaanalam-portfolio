import { useContext } from "react";
import ProjectItem from "./ProjectItem";
import { Context } from "../Context/GlobalState";

const Projects = () => {
  const { state } = useContext(Context);
  console.log(state);

  return (
    <section className="projects" id="projects">
      <h1>My Latest Projects</h1>
      <div className="container">
        <div className="projects__grid">
          {state &&
            state.projects?.map((project) => (
              <ProjectItem key={project.slug.current} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
