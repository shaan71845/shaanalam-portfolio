import styled from "styled-components";
import { motion } from "framer-motion";

/** @Desc: The Slide div in animation when the component is unmounted
 */
export const SlideIn = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  transform-origin: left;
  z-index: 4;
`;

/** @Desc: The Slide out div animation when a new component is mounted
 */
export const SlideOut = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  transform-origin: right;
  z-index: 4;
`;
