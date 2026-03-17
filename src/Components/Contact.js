import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-title">
          <h3>GET IN TOUCH</h3>
          <h1>Contact <span>Me</span></h1>
          <p>I'm currently looking for opportunities as a Software Engineer. Whether you have a question or just want to say hi, my inbox is open!</p>
        </div>

        <div className="contact-body">
          <div className="contact-links">
            <a href="mailto:gundapanenilokesh@gmail.com">gundapanenilokesh@gmail.com</a>
            <a href="tel:9346154313"> 9346154313</a>
            <a href="https://www.linkedin.com/in/lokeshgundapaneni/" target="_blank" rel="noreferrer"> LinkedIn</a>
            <a href="https://github.com/lokeshgundapaneni" target="_blank" rel="noreferrer"> GitHub</a>
            <a href="https://leetcode.com/u/i__lokesh__/" target="_blank" rel="noreferrer"> LeetCode</a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send Message</button>

            {submitted && (
              <p className="success-msg"> Message sent successfully!</p>
            )}

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;