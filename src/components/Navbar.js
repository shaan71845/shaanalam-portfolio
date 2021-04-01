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
          <li onClick={() => setNavOpen(false)}>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li onClick={() => setNavOpen(false)}>
            <a href="#about-me">About me</a>
          </li>
          <li onClick={() => setNavOpen(false)}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={() => setNavOpen(false)}>
            <a href="#contactme">Contact me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
