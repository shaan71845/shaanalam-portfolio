import { useEffect } from "react";
import withTransition from "../HOC/withTransition";
import sanityClient from "../client";
import styles from "../styles/About.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar";
import BlockContent from "@sanity/block-content-to-react";

const About = ({ about }) => {
  // Ref for Skill Header ('My Skills')
  const [skillsHeaderRef, skillsHeaderInView] = useInView();

  // Animation for Skill Header ('My Skills')
  const skillsheaderControls = useAnimation();

  useEffect(() => {
    if (skillsHeaderInView) {
      skillsheaderControls.start({
        y: 0,
      });
    }
  }, [skillsHeaderInView, skillsheaderControls]);

  return (
    <>
      <Navbar />
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles["hero-content"]}>
            <header className={styles.header}>
              <h1>
                <div className={styles["h1-inner"]}>
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                  >
                    Shaan Alam
                  </motion.div>
                </div>
              </h1>
            </header>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", delay: 1.2 }}
            >
              <BlockContent blocks={about.bio} />
            </motion.p>
          </div>
          <motion.div
            className={styles.hero}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          >
            <img src="/images/myelf.png" alt="Shaan Alam" />
          </motion.div>
        </div>
      </section>
      <section className={styles.skills}>
        <div className={styles.container}>
          <h1>
            <div className={styles["h1-inner"]}>
              <motion.div
                initial={{ y: "100%" }}
                animate={skillsheaderControls}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.7 }}
                ref={skillsHeaderRef}
                className={styles["h1-inner"]}
              >
                My Skills
              </motion.div>
            </div>
          </h1>
          <div className={styles["skills-grid"]}>
            <div className={styles["skills-container"]}>
              <div className={styles.skill}>
                <h4>Markup Languages</h4>
                <img src="/images/icons/html.svg" alt="HTML 5" />
                <img src="/images/icons/css.svg" alt="CSS 3" />
                <img src="/images/icons/sass.svg" alt="Sass" />
              </div>
            </div>
            <div className={styles["skills-container"]}>
              <div className={styles.skill}>
                <h4>Programming Languages Languages</h4>
                <img src="/images/icons/js.svg" alt="JavaScript" />
                <img src="/images/icons/python.svg" alt="Python" />
              </div>
            </div>
            <div className={styles["skills-container"]}>
              <div className={styles.skill}>
                <h4>Front-End Tech</h4>
                <img src="/images/icons/react.svg" alt="ReactJS" />
              </div>
            </div>
            <div className={styles["skills-container"]}>
              <div className={styles.skill}>
                <h4>Backend Tech</h4>
                <img src="/images/icons/nodejs.svg" alt="NodeJs" />
                <img src="/images/icons/firebase.svg" alt="Firebase" />
                <img src="/images/icons/express.svg" alt="ExpressJS" />
              </div>
            </div>
            <div className={styles["skills-container"]}>
              <div className={styles.skill}>
                <h4>State Management</h4>
                <img src="/images/icons/redux.svg" alt="Redux" />
              </div>
            </div>
            <div className={styles["skills-container"]}>
              <div className={styles.skill}>
                <h4>Design</h4>
                <img src="/images/icons/figma.svg" alt="Redux" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withTransition(About);

export async function getStaticProps() {
  const about = await sanityClient.fetch(`*[_type == "author"] {
    name,
    bio,
    image {
      asset -> {
        url
      }
    }
  }[0]`);

  return {
    props: {
      about,
    },
  };
}
