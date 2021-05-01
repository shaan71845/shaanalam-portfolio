import styled from "styled-components";
import { devices } from "../utils/utils";

export const EducationContainer = styled.div`
  margin-bottom: 100px;

  @media ${devices.tablet} {
    margin-top: 100px;
  }

  h1 {
    color: #fff;
    font-family: "Josefin Sans", sans-serif;
    font-size: 200%;
    text-align: center;
  }

  .education {
    text-align: center;
    margin: 30px 0;
    color: #fff;

    h3 {
      font-family: "Josefin Sans", sans-serif;
      font-size: 1.5rem;
    }

    p {
      margin-top: 10px;
      font-family: "Raleway", sans-serif;
    }
  }
`;
