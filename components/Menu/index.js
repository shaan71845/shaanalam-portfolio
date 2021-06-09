import styled from "styled-components";
import Link from "next/link";
import {
  Wrapper,
  Container,
  LinkContainer,
  LinkContainerInner,
} from "./Menu.sc";
import { AnimatePresence, motion } from "framer-motion";

const menuLinkVariants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: 0,
  },
};

const menuVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    scale: 0,
    transition: {
      delay: 0.5,
    },
  },
};

const Menu = ({ theme }) => {
  return (
    <Wrapper
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      theme={theme}
    >
      <Container>
        <LinkContainer>
          <LinkContainerInner
            variants={menuLinkVariants}
            initial="hidden"
            animate="visible"
            theme={theme}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Link href="/">Home</Link>
          </LinkContainerInner>
        </LinkContainer>
        <LinkContainer>
          <LinkContainerInner
            variants={menuLinkVariants}
            initial="hidden"
            animate="visible"
            theme={theme}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link href="/projects">Projects</Link>
          </LinkContainerInner>
        </LinkContainer>
        <LinkContainer>
          <LinkContainerInner
            variants={menuLinkVariants}
            initial="hidden"
            animate="visible"
            theme={theme}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Link href="/blogs">Blogs</Link>
          </LinkContainerInner>
        </LinkContainer>
        <LinkContainer>
          <LinkContainerInner
            variants={menuLinkVariants}
            initial="hidden"
            animate="visible"
            theme={theme}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link href="/contact">Contact</Link>
          </LinkContainerInner>
        </LinkContainer>
      </Container>
    </Wrapper>
  );
};

export default Menu;
