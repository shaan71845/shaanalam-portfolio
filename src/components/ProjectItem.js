import { Link } from "react-router-dom";
import { Img } from "react-image";
import LinearProgress from "@material-ui/core/LinearProgress";
import Fade from "react-reveal/Fade";
import LinkIcon from "@material-ui/icons/Link";
import VisibilityIcon from "@material-ui/icons/Visibility";

const ProjectItem = ({ project }) => {
  return (
    <Fade bottom>
      <div className="project">
        <Img
          src={project.mainImage.asset.url}
          alt={project.title}
          loader={<LinearProgress />}
        />
        <div className="project__details">
          <h4 className="project__title">{project.title}</h4>
        </div>
        <div className="project__links">
          <a href={project.live_url} target="_blank" rel="noreferrer">
            <LinkIcon /> Live Demo
          </a>
          <Link to={`/project/${project.slug.current}`}>
            <VisibilityIcon /> View
          </Link>
        </div>
      </div>
    </Fade>
  );
};

export default ProjectItem;
