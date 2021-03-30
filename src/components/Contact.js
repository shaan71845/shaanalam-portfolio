import { useState, useEffect } from "react";
import emailjs, { init } from "emailjs-com";

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

        setSuccessMsg("✅️ Your email has been successfully sent!");

        // Clear the success msg after 3 seconds
        setTimeout(() => {
          setSuccessMsg(null);
        }, 3000);
      })
      .catch(() => {
        setSuccessMsg("❌️ Something went wrong!");

        // Clear the error msg after 3 seconds
        setTimeout(() => {
          setErrorMsg(null);
        }, 3000);
      });
  };

  return (
    <section className="contact" id="contactme">
      {successMsg && <div className="success__msg">{successMsg}</div>}
      {errorMsg && <div className="error__msg">{errorMsg}</div>}
      <div className="contact__container">
        <div className="contact__containerHeading">
          <h2>Wanna work togther??</h2>
          <p>Contact me...</p>
        </div>
        <form onSubmit={handleEmail}>
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
          <button className="btn__primary">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
