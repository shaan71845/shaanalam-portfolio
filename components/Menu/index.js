import Link from "next/link";
import {
  Wrapper,
  Container,
  LinkContainer,
  LinkContainerInner,
} from "./Menu.sc";

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

const Menu = ({ setIsMenu }) => {
  // Close menu on the new page when navigated through navbar
  const closeMenu = () => setIsMenu(false);

  return (
    <Wrapper
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Container>
        <LinkContainer>
          <LinkContainerInner
            variants={menuLinkVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Link href="/" scroll={true}>
              Home
            </Link>
          </LinkContainerInner>
        </LinkContainer>
        <LinkContainer>
          <LinkContainerInner
            variants={menuLinkVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Link href="/about" scroll={true}>
              About
            </Link>
          </LinkContainerInner>
        </LinkContainer>
        <LinkContainer>
          <LinkContainerInner
            variants={menuLinkVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link href="/projects" scroll={true}>
              Projects
            </Link>
          </LinkContainerInner>
        </LinkContainer>
        <LinkContainer>
          <LinkContainerInner
            variants={menuLinkVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Link href="/blogs" scroll={true}>
              Blogs
            </Link>
          </LinkContainerInner>
        </LinkContainer>
      </Container>
    </Wrapper>
  );
};

export default Menu;
