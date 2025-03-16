"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import "../styles/Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I will get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-description">Feel free to reach out if you have any questions or want to work together</p>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>I'm open for freelance opportunities and interesting projects. Let's build something great together!</p>

            <div className="contact-details">
              <div className="contact-item">
                <Mail size={20} />
                <span>jannat0firdaus@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <span>+233 53 52 9784</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>Accra, Ghana</span>
              </div>
            </div>

            <div className="social-links">{/* Social media links would go here */}</div>
          </div>

          <div className="contact-form">
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

