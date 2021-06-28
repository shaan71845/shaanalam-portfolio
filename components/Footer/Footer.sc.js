import styled from "styled-components";

export const FooterWrapper = styled.footer`
  border-top: 1px solid #ddd;
  background: white;
  padding: 4em 0;
  width: 100%;
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1em;

  h3 {
    font-family: "Alegreya", sans-serif;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 1em;
  }
`;

export const Logo = styled.div`
  img {
    width: 20%;
  }
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 2em;
`;

export const Col = styled.div`
  ul {
    list-style: none;

    li {
      margin-top: 1em;

      a {
        text-decoration: none;
        color: #303030;
        font-family: "Alegreya", sans-serif;
      }
    }
  }

  .social-links {
    a {
      margin-right: 10px;

      svg {
        transition: all 0.4s;
        fill: rgba(0, 0, 0, 0.6);

        &:hover {
          fill: rgba(0, 0, 0, 0.8);
        }
      }
    }
  }
`;
