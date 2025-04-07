import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send an email or post data to an API)
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer id="contact-me">
      <div className="contact-content">
        <section className="contact-form">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </section>

        <section className="contact-info">
          <h2>About Me</h2>
          <p>
            I'm a web developer with a passion for creating dynamic and user-friendly web applications. Feel free to reach out if you have any questions or opportunities!
          </p>

          <div className="social-media">
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:your-email@example.com">Email</a>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default ContactMe;
