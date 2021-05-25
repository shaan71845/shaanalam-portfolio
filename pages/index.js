import Navbar from "../components/Navbar";
import homeStyles from "../styles/Home.module.scss";
import buttonStyles from "../styles/Button.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

const Home = () => {
  return (
    <section className={homeStyles.home}>
      <Navbar />
      <main className={homeStyles.main}>
        <h1 className={homeStyles.heading}>
          <div className={homeStyles["heading-inner"]}>
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              Hey,
            </motion.div>
          </div>
          <div className={homeStyles["heading-inner"]}>
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
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
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
            >
              Download CV
            </motion.a>
          </div>
        </div>
        <img src="/images/code.svg" alt="Code" className={homeStyles.code} />
      </main>
    </section>
  );
};

export default Home;
