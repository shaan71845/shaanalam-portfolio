import { motion } from "framer-motion";
import styled from "styled-components";
import { devices } from "../utils/utils";

export const SocialIcons = styled(motion.div)`
  margin-top: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;

  @media ${devices.tablet} {
    width: 80%;
    margin: 40px auto;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 14px;
    transition: all 0.4s;
    border-radius: 100%;

    :hover {
      background: #111;
    }
  }
`;
