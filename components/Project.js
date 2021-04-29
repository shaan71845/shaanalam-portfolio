import styled from "styled-components";
import { Play, LogoGithub } from "react-ionicons";
import { devices } from "../utils/utils";

const Project = () => {
  return (
    <ProjectContainer>
      <ProjectImage>
        <img
          src="https://cdn.sanity.io/images/izpqy9cv/production/51577cf63044f4b699fd1eb680d9c21e540f8d6f-1280x896.jpg"
          alt="Project"
        />
      </ProjectImage>
      <ProjectDescription>
        <h1>Instagram Clone</h1>
        <h4>ReactJS, Firebase, Material UI</h4>
        <Link href="#!">
          <Play /> Live Demo
        </Link>
        <Link href="#!">
          <LogoGithub /> GitHub Repo
        </Link>
      </ProjectDescription>
    </ProjectContainer>
  );
};

export default Project;

const ProjectContainer = styled.div`
  background: linear-gradient(to bottom right, #222, #111);
  transition: all 0.8s;
  border: 1px solid transparent;

  :hover {
    border: 1px solid gray;
  }
`;

const ProjectImage = styled.div`
  position: relative;

  img {
    width: 100%;
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    box-shadow: none;
    transition: all 0.8s;
  }

  :hover::before {
    box-shadow: inset 0px 0px 120px rgb(0, 0, 0);
  }
`;

const ProjectDescription = styled.div`
  padding: 0.8rem;

  h1 {
    margin-top: 20px;
    font-family: "Raleway", sans-serif;
    color: #fff;

    @media ${devices.mobileL} {
      font-size: 100%;
    }
  }

  h4 {
    margin: 10px 0;
    font-weight: normal;
    font-family: "Josefin Sans", sans-serif;
    color: #fff;

    @media ${devices.mobileL} {
      font-size: 80%;
    }
  }
`;

const Link = styled.a`
  color: #aaa;
  text-decoration: none;
  font-family: "Josefin Sans", sans-serif;
  margin-right: 10px;
  transition: all 0.4s;

  @media ${devices.mobileL} {
    font-size: 80%;
  }

  :hover {
    color: #fff;

    span svg {
      fill: #fff;
    }
  }

  > span svg {
    vertical-align: middle;
    fill: #aaa;
  }
`;
