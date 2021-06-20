import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  z-index: 4;
`;

export const LinkContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  margin: 1.7em 0;
`;

export const LinkContainerInner = styled(motion.div)`
  > a {
    display: block;
    text-align: center;
    font-size: 300%;
    text-decoration: none;
    color: #303030;
    font-family: "Abril Fatface", serif;
    font-weight: bold;

    @media screen and (max-width: 520px) {
      font-size: 200%;
    }
  }
`;

export const Container = styled.div``;
