import { useState, useEffect } from "react";
import emailjs, { init } from "emailjs-com";

const Contact = () => {
  useEffect(() => {
    init("user_TWa3mMAGPdTOaTe1n3ht9");
  }, []);

  const handleEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2fidhhp",
        "template_ucbkd48",
        e.target,
        "user_TWa3mMAGPdTOaTe1n3ht9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="contact">
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
