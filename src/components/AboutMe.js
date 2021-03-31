import { useContext } from "react";
import { Context } from "../Context/GlobalState";
import BlockContent from "@sanity/block-content-to-react";
import Fade from "react-reveal/Fade";

const AboutMe = () => {
  const { state } = useContext(Context);

  return (
    <section className="aboutme" id="about-me">
      <div className="container">
        <div className="aboutme__leftContainer">
          <div className="aboutme__text">
            <Fade left>
              <h1>About me</h1>
            </Fade>
            <Fade left>
              <>
                {state && state.author !== undefined && (
                  <BlockContent
                    blocks={state?.author.about}
                    projectId="izpqy9cv"
                    dataset="production"
                  />
                )}
              </>
            </Fade>
          </div>
          <Fade bottom>
            <div className="aboutme__skills">
              <h4>Skills</h4>
              <img src="/images/html.svg" alt="HTML5" />
              <img src="/images/css.svg" alt="CSS3" />
              <img src="/images/sass.svg" alt="Scss" />
              <img src="/images/javascript.svg" alt="JavaScript" />
              <img src="/images/react.svg" alt="ReactJS" />
              <img src="/images/firebase.svg" alt="Firebase" />
            </div>
          </Fade>
        </div>
        <Fade right>
          <div className="aboutme__rightContainer">
            <img src="images/me.png" alt="Shaan Alam" />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default AboutMe;
