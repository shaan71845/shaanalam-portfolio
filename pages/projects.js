import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Project from "../components/Project";

const Projects = () => {
  return (
    <ProjectSection>
      <Container>
        <Sidebar />
        <h1>Projects</h1>
        <ProjectGrid>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </ProjectGrid>
      </Container>
    </ProjectSection>
  );
};

export default Projects;

const ProjectSection = styled.section`
  height: autoh;
  width: 100%;
  background: #030303;
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  overflow: hidden;
  padding: 6rem 0;

  > h1 {
    color: #fff;
    font-family: "Josefin Sans", sans-serif;
    font-size: 200%;
  }
`;

const ProjectGrid = styled.div`
  margin: 30px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 0.3rem;
`;
