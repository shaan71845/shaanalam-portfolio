import { EducationContainer } from "../styled-components/education";

const Education = ({ education }) => {
  console.log(education);
  return (
    <EducationContainer>
      <h1>My Education</h1>
      <div className="education-grid">
        {education.map((education) => (
          <div className="education" key={education.starting_year}>
            <h3>{education.course}</h3>
            <p>{education.institution}</p>
            <p>
              {education.starting_year} - {education.ending_year}
            </p>
          </div>
        ))}
      </div>
    </EducationContainer>
  );
};

export default Education;
