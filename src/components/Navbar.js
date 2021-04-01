import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav id="nav">
      <div className="container">
        <div
          className={`nav__menuToggler ${navOpen ? "cross" : ""}`}
          onClick={() => setNavOpen(!navOpen)}
        >
          <div></div>
          <div></div>
        </div>
        <ul className={`${navOpen ? "visible" : ""}`}>
          <li onClick={() => setNavOpen(false)}>
            <Link to="home" smooth={true} duration={1000}>
              Home
            </Link>
          </li>
          <li onClick={() => setNavOpen(false)}>
            <Link to="about-me" smooth={true} duration={1000}>
              About me
            </Link>
          </li>
          <li onClick={() => setNavOpen(false)}>
            <Link to="projects" smooth={true} duration={1000}>
              Projects
            </Link>
          </li>
          <li onClick={() => setNavOpen(false)}>
            <Link to="contactme" smooth={true} duration={1000}>
              Contact me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
