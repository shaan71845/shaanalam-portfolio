import { EducationContainer } from "../styled-components/Education";

const Education = () => {
  return (
    <EducationContainer>
      <h1>My Education</h1>
      <div className="education">
        <h3>BSc Physical Science with Computer Science</h3>
        <p>Shivaji College, University Of Delhi</p>
        <p>2020 - PRESENT</p>
      </div>
      <div className="education">
        <h3>St. Basil's School</h3>
        <p>2004 - 2020</p>
      </div>
    </EducationContainer>
  );
};

export default Education;
