import "../styles/sections/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-container">
        <p className="contact-description">
          Feel free to send me an email directly using the text box below!
        </p>
        <form className="contact-form">
          <textarea
            placeholder="Type your message here..."
            className="contact-textarea-single"
          ></textarea>
          <button type="submit" className="contact-button">
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
