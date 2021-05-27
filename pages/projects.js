import { useEffect } from "react";
import projectStyles from "../styles/Projects.module.scss";
import Navbar from "../components/Navbar";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
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
    <>
      <section className={projectStyles["projects-intro-section"]}>
        <Navbar />
        <div className={projectStyles.container}>
          <h1>
            <div className={projectStyles["h1-inner"]}>
              <div>Some amazing Projects</div>
            </div>
            <div className={projectStyles["h1-inner"]}>
              <div>I've created!!</div>
            </div>
          </h1>
          <p>
            <div>I am someone who loves to solve problems through coding.</div>
            <div>
              This is what I enjoy doing, so I create projects to learn and grow
              more as a developer.
            </div>
          </p>
        </div>
      </section>
      <section className={projectStyles["projects-section"]}>
        <div className={projectStyles.projects}>
          <div className={projectStyles.project}>
            <div className={projectStyles["project-cover"]}>
              <motion.div
                className={projectStyles["project-cover-inner"]}
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
                transition={{ ease: "easeInOut", duration: 0.7 }}
              />
            </div>
            <div className={projectStyles["project-desc"]}>
              <div className={projectStyles["project-desc-heading"]}>
                <motion.div
                  ref={headingRef}
                  className={projectStyles["project-desc-heading-inner"]}
                  initial={{ y: "100%" }}
                  animate={headingControls}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <h1>Covid Tracker</h1>
                </motion.div>
              </div>
              <div className={projectStyles["project-desc-text"]}>
                <motion.div
                  ref={textRef}
                  className={projectStyles["project-desc-text-inner"]}
                  initial={{ y: "100%" }}
                  animate={textControls}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    At, maxime natus culpa earum. Architecto maiores fuga minima
                    explicabo deleniti dolorem magni corrupti, ut, fugiat
                    facilis in esse soluta iusto molestiae. Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Minima, velit.
                  </p>
                </motion.div>
              </div>
              <div className={projectStyles["project-desc-links"]}>
                <div className={projectStyles["project-desc-link"]}>
                  <motion.div
                    className={projectStyles["project-desc-link-inner"]}
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
                </div>
                <div className={projectStyles["project-desc-link"]}>
                  <motion.div
                    ref={linkRef}
                    className={projectStyles["project-desc-link-inner"]}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

// export async function getStaticProps() {
//   const projects = await sanityClient.fetch(`*[_type == "project"] {
//     title,
//     slug {
//       current
//     },
//     author,
//     live_link,
//     github_link,
//     mainImage {
//       asset -> {
//         url
//       }
//     }
//   }`);
//
//   return {
//     props: {
//       projects,
//     },
//   };
// }
