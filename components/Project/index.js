import { useEffect } from "react";
import { slideUpVariants } from "../../utils/variants";
import projectStyles from "../../styles/Projects.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ProjectWrapper,
  ProjectCover,
  ProjectDescription,
  ProjectHeading,
  ProjectText,
  ProjectLinks,
  ProjectLink,
} from "./Project.sc";

import styled from "styled-components";

const Project = () => {
  const [headingRef, headingInView] = useInView({
    rootMargin: "-100px",
  });
  const [textRef, textInView] = useInView();
  const [linkRef, linkInView] = useInView();
  const [imageRef, imageInView] = useInView();

  const headingControls = useAnimation();
  const textControls = useAnimation();
  const linkControls = useAnimation();
  const imageControls = useAnimation({});
  const imageCoverControls = useAnimation();

  useEffect(() => {
    if (headingInView) {
      console.log("heading in view");
      headingControls.start({
        y: "0%",
      });
    } else {
      console.log("heading not in view");
      headingControls.start({
        y: "100%",
      });
    }
  }, [headingInView, headingControls]);

  useEffect(() => {
    if (textInView) {
      textControls.start({
        y: "0",
      });
    } else {
      textControls.start({
        y: "100%",
      });
    }
  }, [textInView, textControls]);

  useEffect(() => {
    if (linkInView) {
      linkControls.start({
        y: "0",
      });
    } else {
      linkControls.start({
        y: "100%",
      });
    }
  }, [linkInView, linkControls]);

  useEffect(() => {
    if (imageInView) {
      imageControls.start({
        scale: 1,
      });

      imageCoverControls.start({
        scaleX: 0,
      });
    } else {
      imageControls.start({
        scale: 1.6,
      });

      imageCoverControls.start({
        scaleX: 1,
      });
    }
  }, [imageInView, imageControls, imageCoverControls]);

  return (
    <ProjectWrapper>
      <ProjectCover>
        <motion.div
          className="project-cover-inner"
          initial={{ scaleX: 1 }}
          animate={imageCoverControls}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
        <motion.img
          ref={imageRef}
          src="./images/covidtracker.jpg"
          alt="Covid Tracker"
          initial={{ scale: 1.6 }}
          animate={imageControls}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      </ProjectCover>
      <ProjectDescription>
        <ProjectHeading>
          <motion.div
            ref={headingRef}
            className="project-heading-inner"
            initial={{ y: "100%" }}
            animate={headingControls}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h1>Covid Tracker</h1>
          </motion.div>
        </ProjectHeading>
        <ProjectText>
          <motion.div
            ref={textRef}
            className="project-text-inner"
            initial={{ y: "100%" }}
            animate={textControls}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
              maxime natus culpa earum. Architecto maiores fuga minima explicabo
              deleniti dolorem magni corrupti, ut, fugiat facilis in esse soluta
              iusto molestiae. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Minima, velit.
            </p>
          </motion.div>
        </ProjectText>
        <ProjectLinks>
          <ProjectLink>
            <motion.div
              className="project-link-inner"
              ref={linkRef}
              initial={{ y: "100%" }}
              animate={linkControls}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.1,
              }}
            >
              <a href="#!">Live Demo</a>
            </motion.div>
          </ProjectLink>
          <ProjectLink>
            <motion.div
              ref={linkRef}
              className="project-link-inner"
              initial={{ y: "100%" }}
              animate={linkControls}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              <a href="#!">GitHub Repo</a>
            </motion.div>
          </ProjectLink>
        </ProjectLinks>
      </ProjectDescription>
    </ProjectWrapper>
  );
};

export default Project;
