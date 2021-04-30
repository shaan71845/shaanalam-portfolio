import styled from "styled-components";
import { devices } from "../utils/utils";

export const HomeSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;

  > div:nth-child(1) {
    padding: 10rem 6rem;

    @media ${devices.tablet} {
      padding: 10rem 2rem;
    }

    h3,
    h1 {
      color: #fff;
      font-family: "Josefin Sans", sans-serif;
      font-size: 150%;
      margin-bottom: 10px;

      @media ${devices.tablet} {
        text-align: center;
      }

      @media ${devices.mobileL} {
        font-size: 100%;
      }
    }

    h1 {
      font-size: 300%;

      @media ${devices.tablet} {
        text-align: center;
      }

      @media ${devices.mobileL} {
        font-size: 200%;
      }
    }

    p {
      line-height: 1.6;
      color: #fff;
      font-family: "Raleway", sans-serif;
      margin-top: 40px;
      width: 100%;

      @media ${devices.tablet} {
        text-align: center;
        width: 80%;
        margin: auto;
      }

      @media ${devices.mobileL} {
        font-size: small;
      }
    }
  }

  > div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    @media ${devices.tabletL} {
      display: none;
    }

    img {
      height: 90%;
      object-fit: contain;

      @media ${devices.laptopL} {
        width: 100%;
      }
    }
  }
`;

export const Col = styled.div`
  width: 100%;
  flex: 1;
`;

export const SocialIcons = styled.div`
  margin-top: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;

  @media ${devices.tablet} {
    width: 80%;
    margin: 40px auto;
  }
`;
