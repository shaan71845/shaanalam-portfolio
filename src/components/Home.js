import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Projects from "./Projects";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Education />
      <Projects />
    </>
  );
};

export default Home;
