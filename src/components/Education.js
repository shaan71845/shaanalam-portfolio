const Education = () => {
  return (
    <section className="education">
      <h1>My Education</h1>

      <div className="container">
        {/* <!-- completed --> */}
        <div className="step completed">
          <div className="v-stepper">
            <div className="circle"></div>
            <div className="line"></div>
          </div>

          <div className="content">
            <div className="content__heading">
              <h2>
                Shivaji College, University Of Delhi - BSc. Physical Science
                with Computer Science
              </h2>
              <p>11/2020 - Present</p>
            </div>
          </div>
        </div>

        <div className="step completed">
          <div className="v-stepper">
            <div className="circle"></div>
          </div>

          <div className="content">
            <div className="content__heading">
              <h2>St.Basil’sSchool,Basti —Science(PCM)</h2>
              <p>2004-05 - 2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
