import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.scss";
import buttonStyles from "../styles/Button.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  LogoInstagram,
  LogoGithub,
  LogoLinkedin,
  LogoTwitter,
} from "react-ionicons";
import withTransition from "../HOC/withTransition";
import {
  smallHeaderVariant,
  smallHeaderCharVariant,
  headerVariant,
  headerCharVariant,
  linkContainerVariant,
  linkVariant,
} from "../utils/utils";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.home}>
        <img
          src="/images/home-bg.svg"
          alt="Home background"
          className={styles["home-bg"]}
        />
        <div className={styles["small-header"]}>
          <motion.h5
            variants={smallHeaderVariant}
            initial="hidden"
            animate="visible"
          >
            {"Hey".split("").map((char) => (
              <motion.span variants={smallHeaderCharVariant}>
                {char}
              </motion.span>
            ))}
          </motion.h5>
        </div>
        <div className={styles["header"]}>
          <motion.h1
            variants={headerVariant}
            initial="hidden"
            animate="visible"
          >
            {"I'm Shaan Alam".split("").map((char) => (
              <motion.span variants={headerCharVariant}>{char}</motion.span>
            ))}
          </motion.h1>
        </div>
        <motion.div
          className={styles["hero-text"]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
        >
          Front-End Developer, Programmer, Problem Solver
        </motion.div>
        <div className={styles["hero-actions"]}>
          <Link href="/projects">
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className={buttonStyles["btn-primary"]}
            >
              My Projects
            </motion.a>
          </Link>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
            className={buttonStyles["btn-primary"]}
          >
            Download CV
          </motion.a>
        </div>
        <motion.div
          className={styles["social-links"]}
          variants={linkContainerVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="https://www.instagram.com/shaancodes/"
            variants={linkVariant}
            target="_blank"
            rel="noreferrer"
          >
            <LogoInstagram />
          </motion.a>
          <motion.a
            href="https://github.com/shaan71845"
            variants={linkVariant}
            target="_blank"
            rel="noreferrer"
          >
            <LogoGithub />
          </motion.a>
          <motion.a
            href="https://twitter.com/shaancodes"
            variants={linkVariant}
            target="_blank"
            rel="noreferrer"
          >
            <LogoTwitter />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shaan-alam-01784018a/"
            variants={linkVariant}
            target="_blank"
            rel="noreferrer"
          >
            <LogoLinkedin />
          </motion.a>
        </motion.div>
      </div>
    </>
  );
};

export default withTransition(Home);
