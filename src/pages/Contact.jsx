import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-subtitle">
              Ready to begin your flamenco journey? Get in touch with us for class information, 
              private lessons, or any questions about our programs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                We'd love to hear from you! Whether you're interested in classes, 
                have questions about flamenco, or want to book a private lesson, 
                we're here to help.
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <div className="detail-icon">
                    <MapPin />
                  </div>
                  <div className="detail-content">
                    <h4>Studio Location</h4>
                    <p>
                      123 Flamenco Street<br />
                      Arts District<br />
                      Los Angeles, CA 90012
                    </p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="detail-icon">
                    <Phone />
                  </div>
                  <div className="detail-content">
                    <h4>Phone</h4>
                    <p>(555) 123-ARTE</p>
                    <p>(555) 123-2783</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="detail-icon">
                    <Mail />
                  </div>
                  <div className="detail-content">
                    <h4>Email</h4>
                    <p>info@arteflamenco.com</p>
                    <p>classes@arteflamenco.com</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="detail-icon">
                    <Clock />
                  </div>
                  <div className="detail-content">
                    <h4>Studio Hours</h4>
                    <p>
                      Monday - Friday: 10:00 AM - 10:00 PM<br />
                      Saturday: 9:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
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
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="class-inquiry">Class Inquiry</option>
                      <option value="private-lessons">Private Lessons</option>
                      <option value="events">Events & Performances</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your interest in flamenco, experience level, or any specific questions..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <Send className="btn-icon" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Find Our Studio</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <MapPin className="map-icon" />
              <p>Interactive Map Coming Soon</p>
              <p className="map-address">
                123 Flamenco Street, Arts District<br />
                Los Angeles, CA 90012
              </p>
            </div>
          </div>
          <div className="location-info">
            <div className="location-detail">
              <h4>Parking</h4>
              <p>Free street parking available. Paid parking garage located one block east on Main Street.</p>
            </div>
            <div className="location-detail">
              <h4>Public Transportation</h4>
              <p>Metro Gold Line: Little Tokyo/Arts District Station (5-minute walk)</p>
            </div>
            <div className="location-detail">
              <h4>Accessibility</h4>
              <p>Our studio is wheelchair accessible with elevator access to all floors.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
