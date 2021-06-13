import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectWrapper = styled.div`
  margin: 5em 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 3fr));
  grid-gap: 1em;
`;

export const ProjectCover = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
  }

  .project-cover-inner {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #000;
    transform-origin: left;
    z-index: 2;
  }
`;

export const ProjectDescription = styled.div`
  padding: 0 2rem;
`;

export const ProjectHeading = styled.div`
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;

  .project-heading-inner h1 {
    font-family: "Abril Fatface", serif;
    font-size: 200%;
    color: #fff;
  }
`;

export const ProjectText = styled.div`
  position: relative;
  overflow: hidden;

  .project-text-inner p {
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.6);
    font-size: 1rem;
    font-family: "Alegreya", sans-serif;
  }
`;

export const ProjectLinks = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
`;

export const ProjectLink = styled.div`
  margin-right: 20px;
  position: relative;
  overflow: hidden;

  .project-link-inner a {
    color: #fff;
  }
`;
