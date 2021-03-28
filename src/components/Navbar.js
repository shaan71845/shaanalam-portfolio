const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <a href="#!" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#!">About me</a>
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
