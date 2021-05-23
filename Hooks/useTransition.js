import styled from "styled-components";
import { motion } from "framer-motion";

export default function useTransition() {
  const SlideIn = () => (
    <SlideInDiv
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 0 }}
      exit={{ scaleX: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    />
  );
  const SlideOut = () => (
    <SlideOutDiv
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    />
  );

  return [SlideIn, SlideOut];
}

const SlideInDiv = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: #fff;
  transform: scaleX(1);
  transform-origin: left;
  z-index: 100;
`;

const SlideOutDiv = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: #fff;
  transform: scaleX(1);
  transform-origin: right;
  z-index: 100;
`;
