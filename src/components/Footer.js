import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h2>Connect with me on</h2>
        <a
          href="https://www.instagram.com/__shaanalam__/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/shaan-alam-01784018a/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://twitter.com/shaancodes"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://github.com/shaan71845"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
      </div>

      <div className="mark">
        <p>Made with ❤️ by Shaan Alam</p>
      </div>
    </footer>
  );
};

export default Footer;
