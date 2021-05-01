import { useEffect, useRef } from "react";
import {
  HomeSection,
  Col,
  SocialIcons,
  Typing,
} from "../styled-components/index";
import {
  LogoLinkedin,
  LogoInstagram,
  LogoGithub,
  LogoTwitter,
} from "react-ionicons";
import Sidebar from "../components/Sidebar";
import sanityClient from "../client";
import { init } from "ityped";
import { motion } from "framer-motion";

const Home = ({ about }) => {
  const typingRef = useRef();

  useEffect(() => {
    init(typingRef.current, {
      strings: [
        "Frontend Developer",
        "Web Designer",
        "Problem Solver",
        "Geek",
        "React Lover ❤️",
      ],
    });
  }, []);

  return (
    <HomeSection>
      <Col>
        <Sidebar />
        <motion.h5
          initial={{ opacity: 0, y: -30 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 1, type: "tween" }}
        >
          Hi there, I'm
        </motion.h5>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Shaan Alam
        </motion.h1>
        <Typing
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <h2>I am a</h2>
          <h2>
            <span ref={typingRef}></span>
          </h2>
        </Typing>
        <SocialIcons
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <a href="#!">
            <LogoInstagram color="#FFF" />
          </a>
          <a href="#!">
            <LogoGithub color="#FFF" />
          </a>
          <a href="#!">
            <LogoLinkedin color="#FFF" />
          </a>
          <a href="#!">
            <LogoTwitter color="#FFF" />
          </a>
        </SocialIcons>
      </Col>
      <Col>
        <motion.img
           initial={{ y: -30, opacity: 0 }}
           animate={{ y: 0, opacity: 1, scale: [1.3, 1] }}
           transition={{ duration: 1.8 }}
          src={about.image.asset.url}
          alt={about.name}
        />
      </Col>
    </HomeSection>
  );
};

export default Home;

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
