import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">
        Have a project in mind or just want to say hello? Fill out the form below 👇
      </p>

      <div className="contact-container">
        
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>📧 Email: <a href="mailto:vivekkondial2002@gmail.com">vivekkondial2002@gmail.com</a></p>
          <p>📱 Phone: +91 8448342744</p>
          <div className="social-links">
            <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://instagram.com/vivek_K_0424" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
