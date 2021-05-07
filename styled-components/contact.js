import styled from "styled-components";
import { devices } from "../utils/utils";
import { motion } from "framer-motion";

export const ContactSection = styled.section`
  padding: 8rem 6rem;
  position: relative;

  @media ${devices.mobileL} {
    padding: 10rem 2rem;
  }

  @media ${devices.tablet} {
    padding: 10rem 2rem;
  }

  h1 {
    font-size: 200%;
    color: #fff;
    font-family: "Josefin Sans", sans-serif;
    text-align: center;

    @media ${devices.tablet} {
      font-size: 150%;
    }

    @media ${devices.mobileL} {
      font-size: 120%;
    }
  }

  .container {
    padding-top: 4rem;
    margin: 40px auto;

    @media ${devices.mobileL} {
      width: 90%;
    }
  }

  .social-contacts {
    text-align: center;
    margin: auto;

    h4 {
      color: #fff;
      font-family: "Raleway", sans-serif;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: normal;
    }
  }

  .social-contacts-links {
    margin: 40px auto;
    width: 30%;
    display: flex;
    justify-content: space-between;

    @media ${devices.mobileL} {
      width: 100%;
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
  }
`;

export const Form = styled(motion.form)`
  width: 50%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;

  @media ${devices.tabletL} {
    width: 80%;
  }

  @media ${devices.mobileL} {
    width: 100%;
  }
`;

export const Input = styled(motion.input)`
  margin: 20px 0;
  padding: 1rem;
  width: 100%;
  background: transparent;
  border: 1px solid gray;
  outline: none;
  color: #fff;
  font-family: "Raleway", sans-serif;
  background: transparent;

  :focus {
    outline: none;
  }
`;

export const TextArea = styled(motion.textarea)`
  margin: 20px 0;
  padding: 1rem;
  background: transparent;
  border: 1px solid gray;
  outline: none;
  color: #fff;
  font-family: "Raleway", sans-serif;

  :focus {
    background: transparent;
    outline: none;
  }
`;

export const Button = styled(motion.button)`
  cursor: pointer;
  padding: 1rem;
  background: #111;
  color: #fff;
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: none;
  outline: none;
  transition: all 0.4s;

  :focus {
    outline: none;
  }

  :hover {
    background: #333;
    color: #fff;
  }
`;
