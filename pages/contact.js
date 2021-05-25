import { useState, useRef, useEffect } from "react";
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
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "emailjs-com";
import Alert from "../components/Alert";

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
  useEffect(() => {
    setTimeout(() => {
      setAlert("");
    }, 3000);
  }, [alert]);

  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        formRef.current,
        process.env.USER_ID
      )
      .then(() => {
        setAlert("Your email has been sent successfully!!");
      })
      .catch(() => {
        setAlert("Oop...something went wrong!");
      });

    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  const [SlideIn, SlideOut] = useTransition();

  return (
    <>
      <ContactSection>
        <Sidebar />
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact me!!
        </motion.h1>
        <Form
          ref={formRef}
          onSubmit={sendEmail}
          variants={formVariants}
          initial="hidden"
          animate="show"
          transition="transition"
        >
          <Input
            placeholder="Your name"
            name="from_name"
            variants={formElementVariants}
            ref={nameRef}
            required
          />
          <Input
            placeholder="Your Email"
            email="email"
            name="email"
            variants={formElementVariants}
            ref={emailRef}
            required
          />
          <TextArea
            placeholder="Message"
            name="message"
            variants={formElementVariants}
            ref={messageRef}
            required
          />
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
        <AnimatePresence>{alert && <Alert text={alert} />}</AnimatePresence>
      </ContactSection>
    </>
  );
};

export default Contact;
