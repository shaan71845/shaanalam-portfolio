import { HomeSection, Col, SocialIcons } from "../styled-components/index";
import {
  LogoLinkedin,
  LogoInstagram,
  LogoGithub,
  LogoTwitter,
} from "react-ionicons";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <HomeSection>
      <Col>
        <Sidebar />
        <h3>Hi there, I'm</h3>
        <h1>Shaan Alam</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
          distinctio, recusandae earum consequatur explicabo vitae ea facere!
          Repudiandae, sapiente ab doloribus, saepe nostrum mollitia, sit omnis
          harum molestias illum voluptate asperiores? Accusantium vel
          reprehenderit totam iure, accusamus mollitia ipsum beatae. Maiores
          doloribus vel eum asperiores dolor ipsum deleniti reiciendis eveniet!
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
  );
};

export default Home;
