import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  // };

  return (
    <div ref={ref} className="contact-container">
      <div className="contact-content">
        <h1 className="contact-header">Contact</h1>
        <p className="contact-description">
          Send me a message or reach out via the links
        </p>

        <div className="contact-grid">
          {/* Left Column - Reach Out */}
          <div className="contact-links">
            <h2 className="contact-subheader">Reach Out</h2>
            <div className="contact-item">
              <a href="mailto:pendempavansundar895555@gmail.com" className="contact-link">
                {/* Mail Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                pendempavansundar895555@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <a href="https://github.com/pavansundar9/" className="contact-link" target="_blank" rel="noopener noreferrer">
                {/* Github Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                GitHub
              </a>
            </div>
            <div className="contact-item">
              <a href="https://www.linkedin.com/in/pavan-sundar/" className="contact-link" target="_blank" rel="noopener noreferrer">
                {/* LinkedIn Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form">
            <h2 className="contact-subheader">Or Send a Message</h2>
            <form action='https://formspree.io/f/xzzbvapv' method='POST' className="form">
              <div className="form-group">
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="form-input" required/>
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="form-input" required/>
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} rows="6" className="form-input form-textarea" required />
              </div>
              <button type="submit" className="form-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ContactMe;
