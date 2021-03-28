import { useState } from "react";

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
            <a href="#nav" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about-me">About me</a>
          </li>
          <li>
            <a href="#!">Projects</a>
          </li>
          <li>
            <a href="#!">Contact me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
