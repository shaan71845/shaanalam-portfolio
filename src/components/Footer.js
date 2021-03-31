import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h2>Connect with me on</h2>
        <a href="https://www.instagram.com/__shaanalam__/">
          <InstagramIcon />
        </a>
        <a href="">
          <LinkedInIcon />
        </a>
        <a href="">
          <TwitterIcon />
        </a>
        <a href="https://github.com/shaan71845">
          <GitHubIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
