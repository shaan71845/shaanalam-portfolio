import styled from "styled-components";
import { Nav, Container, Logo, Bars } from "./Navbar.sc";

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Logo src="/logo.svg" />
        <Bars active={false} />
      </Container>
    </Nav>
  );
};

export default Navbar;
