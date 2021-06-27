import Link from "next/link";
import {
  LogoInstagram,
  LogoGithub,
  LogoLinkedin,
  LogoTwitter,
} from "react-ionicons";

import {
  FooterWrapper,
  Container,
  Logo,
  FooterContent,
  Col,
} from "./Footer.sc";

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
