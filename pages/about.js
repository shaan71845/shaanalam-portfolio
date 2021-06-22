import { useEffect } from "react";
import withTransition from "../HOC/withTransition";
import sanityClient from "../client";
import styles from "../styles/About.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar";

const About = ({ about, experiences }) => {
  const [headerRef, headerInView] = useInView();

  const headerControls = useAnimation();

  useEffect(() => {
    if (headerInView) {
      headerControls.start({
        scaleX: 0,
      });
    }
  }, [headerInView, headerControls]);

  return (
    <section className={styles.about}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles["hero-content"]}>
          <header className={styles.header}>
            <h1>
              <motion.div
                className={styles["h1-inner"]}
                initial={{ scaleX: 1 }}
                animate={headerControls}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.8 }}
                ref={headerRef}
              ></motion.div>
              Shaan Alam
            </h1>
          </header>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", delay: 1.2 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium eligendi iure dolorem molestiae ipsum unde, cum, odio
            porro excepturi odit ut minima assumenda recusandae facere eaque
            magni totam pariatur. Iure.ima assumenda recusandae facere eaque
            magni totam pariatur. Iure.ima assumenda recusandae facere eaque
            magni totam pariatur. Iure.
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

  const experiences = await sanityClient.fetch(`
    *[_type == "experiences"] {
      title,
      role,
      starting_date,
      ending_date
    }
  `);

  return {
    props: {
      about,
      experiences,
    },
  };
}
