import styled from "styled-components";
import { devices } from "../utils/utils";
import { motion } from "framer-motion";

export const HomeSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;

  @media ${devices.tabletL} {
    flex-direction: column-reverse;
  }

  > div:nth-child(1) {
    padding: 10rem 6rem;

    @media ${devices.tabletL} {
      padding: 2rem 6rem;
    }

    @media ${devices.tablet} {
      padding: 1rem;
    }

    h5,
    h1 {
      color: #fff;
      font-family: "Josefin Sans", sans-serif;
      font-size: 200%;
      margin-bottom: 10px;

      @media ${devices.tablet} {
        text-align: center;
        font-size: 150%;
      }

      @media ${devices.mobileL} {
        font-size: 180%;
      }
    }

    h1 {
      font-size: 400%;

      @media ${devices.tablet} {
        text-align: center;
      }

      @media ${devices.mobileL} {
        font-size: 250%;
      }
    }

    p {
      line-height: 1.6;
      color: #fff;
      font-family: "Raleway", sans-serif;
      margin-top: 40px;
      width: 100%;

      @media ${devices.tablet} {
        text-align: center;
        width: 80%;
        margin: auto;
      }

      @media ${devices.mobileL} {
        font-size: small;
      }
    }
  }

  > div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    @media ${devices.tabletL} {
      padding: 0 6rem;
      justify-content: flex-start;
      align-items: flex-end;
    }

    @media ${devices.tablet} {
      display: block;
      text-align: center;
    }

    img {
      height: 90%;
      object-fit: contain;

      @media ${devices.tabletL} {
        width: 200px;
        height: 200px;
        border-radius: 100%;
        object-fit: cover;
        margin: 5rem 0;
      }

      @media ${devices.mobileL} {
        width: 100px;
        height: 100px;
      }
    }
  }
`;

export const Col = styled.div`
  width: 100%;
  flex: 1;
`;


export const Typing = styled(motion.div)`
  h2 {
    font-weight: bold;
    margin-top: 20px;
    font-family: "Raleway", sans-serif;
    letter-spacing: 2px;
    font-weight: normal;
    color: #aaa;
    font-size: 250%;

    @media ${devices.mobileL} {
      font-size: 100%;
    }

    @media ${devices.tablet} {
      text-align: center;
    }
  }
`;
