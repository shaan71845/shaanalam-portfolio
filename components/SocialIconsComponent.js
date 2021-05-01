import { SocialIcons } from "../styled-components/social-icons";
import {
  LogoInstagram,
  LogoGithub,
  LogoLinkedin,
  LogoTwitter,
} from "react-ionicons";

const SocialIconsComponent = () => {
  return (
    <SocialIcons
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <a href="#!">
        <LogoInstagram color="#FFF" />
      </a>
      <a href="#!">
        <LogoGithub color="#FFF" />
      </a>
      <a href="#!">
        <LogoLinkedin color="#FFF" />
      </a>
      <a href="#!">
        <LogoTwitter color="#FFF" />
      </a>
    </SocialIcons>
  );
};

export default SocialIconsComponent;
