import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  padding: 20px;
  background: #fff;
`;

export const Container = styled.div`
  width: 80%;
  margin: auto;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img``;

export const Bars = styled.a`
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: relative;

  ::before {
    content: "";
    transition: all transform 0.4s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px 0;
    background: #000;
    height: 3px;
    width: 30px;
    transform: ${(props) => (props.active === true ? "rotate(45deg)" : "none")};
    transform-origin: 0;
  }

  ::after {
    content: "";
    position: absolute;
    top: ${(props) => (props.active ? "15px" : "10px")};
    left: 0;
    margin: 10px 0;
    background: #000;
    height: 3px;
    width: 30px;
    transform: ${(props) =>
      props.active === true ? "rotate(-45deg)" : "none"};
    transform-origin: center;
  }
`;
