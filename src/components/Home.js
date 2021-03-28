const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <img src="/images/me.png" alt="Shaan Alam" />
        <h1 className="home__myName">Shaan Alam</h1>
        <p>
          Hi there 👋️, I'm Shaan Alam. I am a Front-end Developer. I like to
          create amazing stuffs using JavaScript, ReactJS and Firebase. See some
          of my Projects below.
        </p>
        <div className="home__actions">
          <a href="#!" className="btn__primary">
            Projects
          </a>
          <a
            href="https://github.com/shaan71845/python_notes/files/6216889/CV.Shaan.Alam.pdf"
            className="btn__primary"
            downlaod={true}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
