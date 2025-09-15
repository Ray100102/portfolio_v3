import "../styles/sections/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-left">
          <p>
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>
        <div className="contact-right">
          <form className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              className="contact-input"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="contact-input"
            />
            <textarea
              placeholder="Your Message"
              className="contact-textarea"
            ></textarea>
            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
