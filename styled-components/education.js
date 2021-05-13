import styled from "styled-components";
import { devices } from "../utils/utils";

export const EducationContainer = styled.div`
  margin-bottom: 100px;

  .education-grid {
    display: flex;
    justify-content: space-around;

    @media ${devices.tabletL} {
      display: block;
    }
  }

  @media ${devices.tablet} {
    margin-top: 100px;
  }

  h1 {
    color: #fff;
    font-family: "Josefin Sans", sans-serif;
    font-size: 200%;
    text-align: center;

    @media ${devices.mobileM} {
      font-size: 150%;
    }
  }

  .education {
    margin-right: 30px;
    background: #111;
    max-width: 500px;
    padding: 2rem 4rem;
    margin: 30px auto;
    text-align: center;
    color: #fff;

    h3 {
      font-family: "Josefin Sans", sans-serif;
      font-size: 1.5rem;

      @media ${devices.mobileM} {
        font-size: 1rem;
      }
    }

    p {
      margin-top: 10px;
      font-family: "Raleway", sans-serif;
    }
  }
`;
