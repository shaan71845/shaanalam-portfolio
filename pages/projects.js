import { useEffect } from "react";
import projectStyles from "../styles/Projects.module.scss";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideUpVariants } from "../utils/variants";
import Project from "../components/Project/";
import withTransition from "../HOC/withTransition";
import sanityClient from "../client";

const Projects = ({ projects }) => {
  return (
    <>
      <section className={projectStyles["projects-intro-section"]}>
        <Navbar />
        <div className={projectStyles.container}>
          <h1>
            <div className={projectStyles["h1-inner"]}>
              <motion.div
                variants={slideUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                Some amazing Projects
              </motion.div>
            </div>
            <div className={projectStyles["h1-inner"]}>
              <motion.div
                variants={slideUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
              >
                I've created!!
              </motion.div>
            </div>
          </h1>
          <p>
            <div className={projectStyles["p-inner"]}>
              <motion.div
                variants={slideUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              >
                I am someone who loves to solve problems through coding.
              </motion.div>
            </div>
            <div className={projectStyles["p-inner"]}>
              <motion.div
                variants={slideUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
              >
                This is what I enjoy doing, so I create projects to learn and
                grow more as a developer.
              </motion.div>
            </div>
          </p>
        </div>
      </section>
      <section className={projectStyles["projects-section"]}>
        <div className={projectStyles.projects}>
          {projects?.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default withTransition(Projects);

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
