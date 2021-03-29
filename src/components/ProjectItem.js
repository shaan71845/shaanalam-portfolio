import { Link } from "react-router-dom";

const ProjectItem = ({ project }) => {
  return (
    <Link to={`/project/${project.slug.current}`}>
      <div className="project">
        <div className="project__details">
          <h3 className="project__title">{project.title}</h3>
        </div>
        <img src={project.mainImage.asset.url} alt={project.title} />
      </div>
    </Link>
  );
};

export default ProjectItem;
