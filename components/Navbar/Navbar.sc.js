import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  padding: 20px 0;
  background: ${(props) => (props.theme === "dark" ? "#000" : "#fff")};
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  cursor: pointer;
  position: relative;
  z-index: 3;
`;

export const Bars = styled.a`
  cursor: pointer;
  width: 30px;
  height: 40px;
  position: relative;
  z-index: 3;

  span:nth-child(1) {
    transition: transform 0.4s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px 0;
    background: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
    height: 3px;
    width: 30px;
    transform: ${(props) => (props.active === true ? "rotate(45deg)" : "none")};
    transform-origin: left center;
  }

  span:nth-child(2) {
    transition: transform 0.4s ease-in-out;
    position: absolute;
    top: 10px;
    left: 0;
    margin: 10px 0;
    background: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
    height: 3px;
    width: 30px;
    transform: ${(props) => (props.active ? "scaleX(0)" : "scaleX(1)")};
    transform-origin: center;
  }

  span:nth-child(3) {
    transition: transform 0.4s ease-in-out;
    position: absolute;
    top: ${(props) => (props.active ? "20px" : "20px")};
    left: ${(props) => (props.active ? "0px" : "0px")};
    margin: 10px 0;
    background: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
    height: 3px;
    width: 30px;
    transform: ${(props) =>
      props.active === true ? "rotate(-45deg)" : "none"};
    transform-origin: left center;
  }
`;
