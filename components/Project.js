import {
  ProjectContainer,
  ProjectImage,
  ProjectDescription,
  Link,
} from "../styled-components/project";
import { Play, LogoGithub } from "react-ionicons";

const Project = ({ project, variants }) => {
  return (
    <ProjectContainer variants={variants}>
      <ProjectImage>
        <img src={project.mainImage.asset.url} alt={project.title} />
      </ProjectImage>
      <ProjectDescription>
        <h1>{project.title}</h1>
        <Link href={project.live_link} target="_blank" rel="noreferrer">
          <Play /> Live Demo
        </Link>
        <Link href={project.github_link} target="_blank" rel="noreferrer">
          <LogoGithub /> GitHub Repo
        </Link>
      </ProjectDescription>
    </ProjectContainer>
  );
};

export default Project;
