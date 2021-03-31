import { useContext } from "react";
import ProjectItem from "./ProjectItem";
import { Context } from "../Context/GlobalState";
import Fade from "react-reveal/Fade";

const Projects = () => {
  const { state } = useContext(Context);

  return (
    <section className="projects" id="projects">
      <Fade top>
        <h1>My Latest Projects</h1>
      </Fade>
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
