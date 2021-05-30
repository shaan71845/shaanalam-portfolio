import { motion } from "framer-motion";
import styled from "styled-components";

export const PostWrapper = styled.div`
  margin: 5em 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 3fr));
  grid-gap: 1em;
`;

export const PostCover = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
  }

  .post-cover-inner {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #fff;
    transform-origin: left;
    z-index: 2;
  }
`;

export const PostDescription = styled.div`
  padding: 0 2rem;
`;

export const PostHeading = styled.div`
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;

  .post-heading-inner h1 {
    font-family: "Abril Fatface", serif;
    font-size: 200%;
    color: #303030;
  }
`;

export const PostText = styled.div`
  position: relative;
  overflow: hidden;

  .post-text-inner p {
    line-height: 1.6;
    color: rgba(0, 0, 0, 0.6);
    font-size: 1rem;
    font-family: "Alegreya", sans-serif;
  }
`;

export const PostLinks = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
`;

export const PostLink = styled.div`
  margin-right: 20px;
  position: relative;
  overflow: hidden;

  .post-link-inner a {
    color: #303030;
  }
`;
