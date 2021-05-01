import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Menu, Close } from "react-ionicons";
import { devices } from "../utils/utils";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <MenuIcon color="#FFF" onClick={() => setSidebar(true)} />
      <SidebarWrapper className={`${sidebar ? "active" : ""}`}>
        <SidebarClose color="#FFF" onClick={() => setSidebar(false)} />
        <SidebarMenu>
          <Link href="/">
            <SidebarMenuItem>Home</SidebarMenuItem>
          </Link>
          <Link href="/projects">
            <SidebarMenuItem>Projects</SidebarMenuItem>
          </Link>
          <Link href="/blogs">
            <SidebarMenuItem>Blog Posts</SidebarMenuItem>
          </Link>
          <Link href="/about">
            <SidebarMenuItem>About</SidebarMenuItem>
          </Link>
          <Link href="/contact">
            <SidebarMenuItem>Contact</SidebarMenuItem>
          </Link>
        </SidebarMenu>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div`
  background: #030303;
  position: fixed;
  opacity: 0;
  backdrop-filter: blur(15px);
  top: 0;
  left: -100%;
  height: 100vh;
  width: 20%;
  text-align: center;
  padding: 3rem 0;
  z-index: 100;
  transition: all 0.5s ease-in-out;

  &.active {
    left: 0%;
    opacity: 0.98;
  }

  @media ${devices.tabletL} {
    width: 30%;
  }

  @media ${devices.tablet} {
    width: 50%;
  }

  @media ${devices.mobileL} {
    width: 100%;
  }
`;

const SidebarClose = styled(Close)`
  cursor: pointer;
`;

const SidebarMenu = styled.ul`
  margin-top: 30px;
  list-style: none;
  display: flex;
  flex-direction: column;

  > li {
    color: #fff;
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
  }
`;

const SidebarMenuItem = styled.li`
  padding: 1rem;
  text-align: center;
  transition: all 0.4s;
  border: 1px solid transparent;

  :hover {
    background: #111;
    border-color: gray;
  }
`;

const MenuIcon = styled(Menu)`
  position: fixed;
  top: 5%;
  cursor: pointer;
`;
