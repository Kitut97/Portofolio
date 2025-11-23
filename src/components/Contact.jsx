import React, { useState } from "react";
import { personalData, socialLinks } from "../assets/Data/personal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect ke email client
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>
              Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu
              untuk menghubungi saya melalui email atau media sosial.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href={`mailto:${personalData.email}`}>
                  {personalData.email}
                </a>
              </div>
              <div className="contact-item">
                <strong>Location:</strong>
                <span>{personalData.location}</span>
              </div>
            </div>
            <div className="contact-social">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                GitHub
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                Instagram
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nama</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Pesan</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
