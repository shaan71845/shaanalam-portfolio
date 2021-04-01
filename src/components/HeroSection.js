import Navbar from "./Navbar";
import Fade from "react-reveal/Fade";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <section className="hero__section" id="home">
        <div className="container">
          <main>
            <header>
              <Fade>
                <h4>Hi there 👋️, I'm</h4>
              </Fade>
              <Fade bottom>
                <h1>Shaan Alam</h1>
              </Fade>
              <Fade bottom>
                <p>
                  I am a Front-end Developer. I like to create amazing stuffs
                  using JavaScript. See some of my projects below!!
                </p>
              </Fade>
            </header>
            <Fade top>
              <div className="hero__actions">
                <a href="#projects" className="btn__primary">
                  My Projects
                </a>
                <a
                  href="https://github.com/shaan71845/python_notes/files/6216889/CV.Shaan.Alam.pdf"
                  className="btn__primary"
                >
                  Download CV
                </a>
              </div>
            </Fade>
          </main>
          <div className="social-icons">
            <Fade>
              <a
                href="https://www.instagram.com/__shaanalam__/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
            </Fade>
            <Fade>
              <a
                href="https://www.linkedin.com/in/shaan-alam-01784018a/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </Fade>
            <Fade>
              <a
                href="https://twitter.com/shaancodes"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon />
              </a>
            </Fade>
            <Fade>
              <a
                href="https://github.com/shaan71845"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
