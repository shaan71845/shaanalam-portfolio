import { PWContainer } from "../styled-components/previous-works";

const PreviousWorks = ({ experiences }) => {
  return (
    <PWContainer>
      <h1>My Previous Experiences</h1>
      {experiences.map((experience) => (
        <div className="experience" key={experience.title}>
          <h3>{experience.title}</h3>
          <p>Role - {experience.role}</p>
          <p>
            {experiences.starting_date} - {experience.ending_date}
          </p>
        </div>
      ))}
    </PWContainer>
  );
};

export default PreviousWorks;
