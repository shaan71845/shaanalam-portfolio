const Project = ({ project }) => {
  return (
    <div className="project">
      <div className="project__details">
        <h3 className="project__title">{project.title}</h3>
      </div>
      <img src={project.mainImage.asset.url} alt={project.title} />
    </div>
  );
};

export default Project;
