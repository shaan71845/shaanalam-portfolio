import styled from "styled-components";

export const BlogSection = styled.section`
  width: 100%;
`;

export const Container = styled.div`
  padding: 8rem 0;
  width: 80%;
  margin: auto;

  > h1 {
    color: #fff;
    font-family: "Josefin Sans", sans-serif;
    font-size: 200%;
  }
`;

export const BlogGrid = styled.div`
  margin: 30px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 0.3rem;
`;
