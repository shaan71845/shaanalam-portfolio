import { useState } from "react";
import styled from "styled-components";
import {
  LogoLinkedin,
  LogoInstagram,
  LogoGithub,
  LogoTwitter,
} from "react-ionicons";
import { devices } from "../utils/utils";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <Sidebar />
      <HomeSection>
        <Col>
          <h3>Hi there, I'm</h3>
          <h1>Shaan Alam</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            distinctio, recusandae earum consequatur explicabo vitae ea facere!
            Repudiandae, sapiente ab doloribus, saepe nostrum mollitia, sit
            omnis harum molestias illum voluptate asperiores? Accusantium vel
            reprehenderit totam iure, accusamus mollitia ipsum beatae. Maiores
            doloribus vel eum asperiores dolor ipsum deleniti reiciendis
            eveniet!
          </p>
          <SocialIcons>
            <a href="#!">
              <LogoInstagram color="#FFF" />
            </a>
            <a href="#!">
              <LogoGithub color="#FFF" />
            </a>
            <a href="#!">
              <LogoLinkedin color="#FFF" />
            </a>
            <a href="#!">
              <LogoTwitter color="#FFF" />
            </a>
          </SocialIcons>
        </Col>
        <Col>
          <img
            src="https://shaanalam.vercel.app/images/me.png"
            alt="Shaan Alam"
          />
        </Col>
      </HomeSection>
    </>
  );
};

export default Home;

const HomeSection = styled.section`
  min-height: 100vh;
  width: 100%;
  background: #030303;
  display: flex;

  > div:nth-child(1) {
    padding: 10rem 6rem;

    @media ${devices.tablet} {
      padding: 10rem 0;
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
    }
  }
`;

const Col = styled.div`
  width: 100%;
  flex: 1;
`;

const SocialIcons = styled.div`
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
