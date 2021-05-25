import {
  ProjectSection,
  Container,
  ProjectGrid,
} from "../styled-components/projects";
import Sidebar from "../components/Sidebar";
import Project from "../components/Project";
import sanityClient from "../client";
import { motion } from "framer-motion";

const gridVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { scale: 0.76, y: 30, opacity: 0 },
  show: { scale: 1, y: 0, opacity: 1 },
};

const Projects = ({ projects }) => {
  return (
    <>
      <ProjectSection>
        <Container>
          <Sidebar />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Projects
          </motion.h1>
          <ProjectGrid variants={gridVariant} initial="hidden" animate="show">
            {projects?.map((project) => (
              <Project
                key={project.slug.current}
                project={project}
                variants={projectVariant}
              />
            ))}
          </ProjectGrid>
        </Container>
      </ProjectSection>
    </>
  );
};

export default Projects;

export async function getStaticProps() {
  const projects = await sanityClient.fetch(`*[_type == "project"] {
    title,
    slug {
      current
    },
    author,
    live_link,
    github_link,
    mainImage {
      asset -> {
        url
      }
    }
  }`);

  return {
    props: {
      projects,
    },
  };
}
