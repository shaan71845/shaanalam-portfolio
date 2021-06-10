import Navbar from "../components/Navbar";
import homeStyles from "../styles/Home.module.scss";
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
import { slideUpVariants } from "../utils/variants";

const linkContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const linkVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Home = () => {
  return (
    <main className={homeStyles.main}>
      <aside className={homeStyles["main-aside"]}>
        <motion.div
          className={homeStyles["social-icons"]}
          variants={linkContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="https://instagram.com/shaancodes"
            target="_blank"
            rel="noreferrer"
            vartiants={linkVariants}
          >
            <LogoInstagram color="#303030" />
          </motion.a>
          <motion.a
            href="https://github.com/shaan71845"
            target="_blank"
            rel="noreferrer"
            variants={linkVariants}
          >
            <LogoGithub color="#303030" />
          </motion.a>
          <motion.a
            href="https://twitter.com/shaancodes"
            target="_blank"
            rel="noreferrer"
            variants={linkVariants}
          >
            <LogoTwitter color="#303030" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shaan-alam-01784018a/"
            target="_blank"
            rel="noreferrer"
            variants={linkVariants}
          >
            <LogoLinkedin color="#303030" />
          </motion.a>
        </motion.div>
        <motion.span
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        ></motion.span>
      </aside>
      <div className={homeStyles["main-right"]}>
        <Navbar />
        <div className={homeStyles.container}>
          <div className={homeStyles["container-left"]}>
            <h1 className={homeStyles.heading}>
              <div className={homeStyles["heading-inner"]}>
                <motion.div
                  variants={slideUpVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ ease: "easeOut", duration: 1 }}
                >
                  Hey,
                </motion.div>
              </div>
              <div className={homeStyles["heading-inner"]}>
                <motion.div
                  variants={slideUpVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ ease: "easeOut", duration: 1, delay: 0.3 }}
                >
                  I am Shaan Alam
                </motion.div>
              </div>
            </h1>
            <div className={homeStyles.subtitle}>
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ ease: "easeOut", duration: 1, delay: 0.459 }}
              >
                I turn ideas into code...
              </motion.p>
            </div>
            <div className={homeStyles.actions}>
              <div className={homeStyles["actions-inner"]}>
                <Link href="/projects">
                  <motion.a
                    className={buttonStyles["btn-primary"]}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
                  >
                    My Projects
                  </motion.a>
                </Link>
              </div>
              <div className={homeStyles["actions-inner"]}>
                <motion.a
                  href="#!"
                  className={buttonStyles["btn-primary"]}
                  variants={slideUpVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
                >
                  Download CV
                </motion.a>
              </div>
            </div>
          </div>
          <img
            src="./images/coding.svg"
            alt="Logo"
            className={homeStyles["hero-image"]}
          />
        </div>
      </div>
    </main>
  );
};

export default withTransition(Home);
