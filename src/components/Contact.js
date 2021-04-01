import { useState, useEffect } from "react";
import emailjs, { init } from "emailjs-com";
import Fade from "react-reveal/Fade";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import EmailIcon from "@material-ui/icons/Email";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    init("REACT_APP_USER_ID");
  }, []);

  const handleEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then((result) => {
        console.log(result.text);
        setEmail("");
        setSubject("");
        setMessage("");

        setSuccessMsg("Your email has been successfully sent!");

        // Clear the success msg after 3 seconds
        setTimeout(() => {
          setSuccessMsg(null);
        }, 3000);
      })
      .catch(() => {
        setErrorMsg("Something went wrong!");

        // Clear the error msg after 3 seconds
        setTimeout(() => {
          setErrorMsg(null);
        }, 3000);
      });
  };

  return (
    <section className="contact" id="contactme">
      {successMsg && (
        <div className="success__msg">
          <CheckCircleIcon /> {successMsg}
        </div>
      )}
      {errorMsg && (
        <div className="error__msg">
          <CancelIcon />
          {errorMsg}
        </div>
      )}
      <div className="contact__container">
        <div className="contact__containerHeading">
          <Fade>
            <h2>Want to work togther??</h2>
          </Fade>
          <Fade>
            <p>Contact me...</p>
          </Fade>
        </div>
        <form onSubmit={handleEmail}>
          <Fade>
            <div className="form__field">
              <input
                type="email"
                id="Email"
                name="from_name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="Email">Your Email</label>
            </div>
          </Fade>
          <Fade>
            <div className="form__field">
              <input
                type="text"
                id="Subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <label htmlFor="Subject">Subject</label>
            </div>
          </Fade>
          <Fade>
            <div className="form__field">
              <textarea
                type="email"
                id="Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Your Message"
              />
            </div>
          </Fade>
          <Fade>
            <button className="btn__primary">
              <EmailIcon /> Send
            </button>
          </Fade>
        </form>
      </div>
    </section>
  );
};

export default Contact;
