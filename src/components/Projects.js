import { useContext } from "react";
import Project from "./Project";
import { Context } from "../Context/GlobalState";

const Projects = () => {
  const { state } = useContext(Context);
  console.log(state);

  return (
    <section className="projects" id="projects">
      <h1>My Latest Projects</h1>
      <div className="container">
        <div className="projects__grid">
          {state && state.projects?.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
