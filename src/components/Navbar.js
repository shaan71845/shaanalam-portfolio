const Navbar = () => {
  return (
    <nav id="nav">
      <div className="container">
        <ul>
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
