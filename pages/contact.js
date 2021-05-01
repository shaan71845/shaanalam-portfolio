import {
  LogoInstagram,
  LogoGithub,
  LogoTwitter,
  LogoLinkedin,
} from "react-ionicons";
import Sidebar from "../components/Sidebar";
import {
  ContactSection,
  Form,
  Input,
  TextArea,
  Button,
} from "../styled-components/contact";
import { motion } from "framer-motion";

const formVariants = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.5 } },
  transition: { duration: 1 },
};

const formElementVariants = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <ContactSection>
      <Sidebar />
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Wanna work together? Contact me!!
      </motion.h1>
      <Form
        variants={formVariants}
        initial="hidden"
        animate="show"
        transition="transition"
      >
        <Input placeholder="Your name" variants={formElementVariants} />
        <Input placeholder="Your Email" variants={formElementVariants} />
        <TextArea placeholder="Message" variants={formElementVariants} />
        <Button variants={formElementVariants}>Send Email</Button>
      </Form>
      <div className="social-contacts">
        <motion.h4
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Or Contact me through
        </motion.h4>
        <motion.div
          className="social-contacts-links"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
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
        </motion.div>
      </div>
    </ContactSection>
  );
};

export default Contact;
