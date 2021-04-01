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
          <li>
            <Link
              to="home"
              smooth={true}
              duration={1000}
              onClick={() => setNavOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about-me"
              smooth={true}
              duration={1000}
              onClick={() => setNavOpen(false)}
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              onClick={() => setNavOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contactme"
              smooth={true}
              duration={1000}
              onClick={() => setNavOpen(false)}
            >
              Contact me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
