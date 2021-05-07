import styled from "styled-components";
import { motion } from "framer-motion";
import { devices } from "../utils/utils";

export const AlertContainer = styled(motion.div)`
  position: absolute;
  right: 0%;
  top: 60px;
  background: #111;
  padding: 1rem 0.5rem;
  width: 350px;
  transition: all 0.4s;

  @media ${devices.mobileL} {
    width: 200px;
  }

  p {
    color: #fff;
    line-height: 1.6;
    text-transform: uppercase;
    font-family: "Raleway", sans-serif;
    letter-spacing: 2px;
    font-size: 10px;
  }
`;
