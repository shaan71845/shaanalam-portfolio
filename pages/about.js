import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import {
  LogoHtml5,
  LogoCss3,
  LogoJavascript,
  LogoPython,
  LogoReact,
  LogoFirebase,
  LogoSass,
  LogoFigma,
  LogoGithub,
} from "react-ionicons";
import { devices } from "../utils/utils";

const about = () => {
  return (
    <Section>
      <Container>
        <Sidebar />
        <Grid>
          <Col>
            <h1>About me</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit ea
              cupiditate modi illo cumque officia ex quos dolorum, vel in rerum
              quia iusto maxime neque ab voluptatem repellat a. Dolores
              architecto eius fuga esse reprehenderit adipisci corporis qui!
              Tenetur quam nihil libero ut provident in voluptatibus! Tempora,
              aliquam at. Voluptatem.
            </p>
          </Col>
          <Col>
            <img
              src="https://shaanalam.vercel.app/images/me.png"
              alt="Shaan Alam"
            />
          </Col>
        </Grid>
        <EducationContainer>
          <h1>My Education</h1>
          <ul>
            <li>
              <div>
                <h4>BSc. Physical Science with Computer Science</h4>
                <h4>Shivaji College, University Of Delhi</h4>
                <p>2020 - PRESENT</p>
              </div>
            </li>
            <li>
              <div>
                <h4>St. Basil's School, Basti</h4>
                <p>2004 - 2020</p>
              </div>
            </li>
          </ul>
        </EducationContainer>
        <SkillsContainer>
          <h1>My Skills and tools</h1>
          <Skills>
            <Skill>
              <h4>Markup / Styling Languages</h4>
              <div>
                <LogoHtml5 color="#fff" />
                <LogoCss3 color="#fff" />
                <LogoSass color="#fff" />
              </div>
            </Skill>
            <Skill>
              <h4>Programming Languages</h4>
              <div>
                <LogoJavascript color="#fff" />
                <LogoPython color="#fff" />
              </div>
            </Skill>
            <Skill>
              <h4>Web Libraries / Framework</h4>
              <div>
                <LogoReact color="#fff" />
                <LogoFirebase color="#fff" />
              </div>
            </Skill>
            <Skill>
              <h4>Design</h4>
              <div>
                <LogoFigma color="#fff" />
              </div>
            </Skill>
            <Skill>
              <h4>Version Control System</h4>
              <div>
                <LogoGithub color="#fff" />
              </div>
            </Skill>
          </Skills>
        </SkillsContainer>
      </Container>
    </Section>
  );
};

export default about;

const Section = styled.section``;

const Container = styled.div`
  width: 80%;
  margin: auto;
  padding: 6rem 0;
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${devices.tablet} {
    flex-direction: column-reverse;
  }
`;

const Col = styled.div`
  flex: 1;

  &:nth-child(1) {
    padding-top: 3rem;

    h1 {
      margin-bottom: 10px;
      color: #fff;
      font-family: "Josefin Sans", sans-serif;
      font-size: 200%;

      @media ${devices.tablet} {
        text-align: center;
      }
    }

    p {
      margin-top: 30px;
      color: #fff;
      line-height: 1.6;
      font-family: "Raleway", sans-serif;

      @media ${devices.tablet} {
        text-align: center;
      }

      @media ${devices.mobileM} {
        font-size: small;
      }
    }
  }

  &:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    line-height: 1.6;

    @media ${devices.tablet} {
      justify-content: center;
    }

    img {
      height: 75%;

      @media ${devices.tablet} {
        height: 200px;
        width: 200px;
        border-radius: 100%;
        object-fit: cover;
      }
    }
  }
`;

const SkillsContainer = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 50px;
    color: #fff;
    font-family: "Josefin Sans", sans-serif;
    font-size: 200%;

    @media ${devices.mobileM} {
      font-size: 150%;
    }
  }
`;

const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 3rem;
`;

const Skill = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;

  h4 {
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: "Raleway", sans-serif;
    color: #fff;
    margin-bottom: 20px;

    @media ${devices.mobileM} {
      font-size: small;
    }
  }

  > div > span {
    margin-right: 20px;
  }
`;

const EducationContainer = styled.div`
  margin: 0 0 100px 0;

  @media ${devices.tablet} {
    margin-top: 100px;
  }

  h1 {
    margin: 30px 0;
    text-align: center;
    color: #fff;
    font-family: "Josefin Sans", sans-serif;
    font-size: 200%;
  }

  ul {
    width: 50%;
    margin: auto;
    text-align: center;

    @media ${devices.tablet} {
      width: 100%;
    }

    li {
      margin: 30px 0;
      color: #fff;

      @media ${devices.mobileM} {
        font-size: small;
      }

      h4,
      p {
        margin: 10px 0;
        font-family: "Raleway", sans-serif;
        color: #fff;
        text-transform: uppercase;
        font-weight: normal;
        letter-spacing: 2px;
      }
    }
  }
`;
