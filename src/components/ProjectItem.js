import { Link } from "react-router-dom";
import { Img } from "react-image";
import LinearProgress from "@material-ui/core/LinearProgress";
import Fade from "react-reveal/Fade";

const ProjectItem = ({ project }) => {
  return (
    <Link to={`/project/${project.slug.current}`}>
      <div className="project">
        <div className="project__details">
          <h3 className="project__title">{project.title}</h3>
        </div>
        <Img
          src={project.mainImage.asset.url}
          alt={project.title}
          loader={<LinearProgress />}
        />
      </div>
    </Link>
  );
};

export default ProjectItem;
