import styled from "styled-components";
import Link from "next/link";
import {
  LogoInstagram,
  LogoGithub,
  LogoLinkedin,
  LogoTwitter,
} from "react-ionicons";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Logo>
          <h3>Thanks for visiting my portfolio.. Hope you like it!</h3>
          <img src="/images/logo.svg" alt="Logo" />
        </Logo>
        <FooterContent>
          <Col>
            <h3>Links</h3>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <a>Blogs</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col>
            <h3>Connect with Me</h3>
            <div className="social-links">
              <a
                href="https://www.instagram.com/shaancodes/"
                target="_blank"
                rel="noreferrer"
              >
                <LogoInstagram />
              </a>
              <a
                href="https://github.com/shaan71845"
                target="_blank"
                rel="noreferrer"
              >
                <LogoGithub />
              </a>
              <a
                href="https://twitter.com/shaancodes"
                target="_blank"
                rel="noreferrer"
              >
                <LogoTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/shaan-alam-01784018a/"
                target="_blank"
                rel="noreferrer"
              >
                <LogoLinkedin />
              </a>
            </div>
            <div style={{ marginTop: "1em" }}>
              <h3>Made with ❤️ by Shaan Alam</h3>
            </div>
          </Col>
        </FooterContent>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

export const FooterWrapper = styled.footer`
  border-top: 1px solid #ddd;
  background: white;
  padding: 2em;
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
  grid-gap: 1em;
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
