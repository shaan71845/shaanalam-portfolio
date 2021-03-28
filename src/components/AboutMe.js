import { useContext } from "react";
import DevIcon from "devicon-react-svg";
import { Context } from "../Context/GlobalState";
import BlockContent from "@sanity/block-content-to-react";

const AboutMe = () => {
  const { state } = useContext(Context);

  return (
    <section className="aboutme" id="about-me">
      <div className="aboutme__leftContainer">
        <div className="aboutme__text">
          <h1>About me</h1>
          <BlockContent
            blocks={state?.author.about}
            projectId="izpqy9cv"
            dataset="production"
          />
        </div>
        <div className="aboutme__skills">
          <h2>Skills I have</h2>
          <DevIcon icon="html5" />
          <DevIcon icon="css3" />
          <DevIcon icon="sass" />
          <DevIcon icon="javascript" />
          <DevIcon icon="react" />
          <DevIcon icon="firebase" />
        </div>
      </div>
      <div className="aboutme__rightContainer">
        <img src={state?.author.image.asset.url} alt="Shaan Alam" />
      </div>
    </section>
  );
};

export default AboutMe;
