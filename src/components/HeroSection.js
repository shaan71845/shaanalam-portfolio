import { motion } from "framer-motion";

const variants = {
  initial: {
    y: -10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: { ease: "easeIn", duration: 1 },
};

const HeroSection = () => (
  <section className="home">
    <div className="container">
      <motion.img
        src="/images/me.png"
        alt="Shaan Alam"
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ ease: "easeIn", duration: 1 }}
      />
      <motion.h1
        className="home__myName"
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ ease: "easeIn", duration: 1 }}
      >
        Shaan Alam
      </motion.h1>
      <motion.p
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ ease: "easeIn", duration: 1 }}
      >
        Hi there 👋️, I'm Shaan Alam. I am a Front-end Developer. I like to
        create amazing stuffs using JavaScript, ReactJS and Firebase. See some
        of my Projects below.
      </motion.p>
      <motion.div
        className="home__actions"
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ ease: "easeIn", duration: 1.5 }}
      >
        <a href="#!" className="btn__primary">
          Projects
        </a>
        <a
          href="https://github.com/shaan71845/python_notes/files/6216889/CV.Shaan.Alam.pdf"
          className="btn__primary"
          downlaod={true}
        >
          Download CV
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
