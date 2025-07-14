import React from 'react'
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        <p className="section-subtitle">
          Ready to start your flamenco journey? Contact us today to learn more about our classes and programs
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <MapPin />
              </div>
              <div className="info-content">
                <h3 className="info-title">Visit Our Studio</h3>
                <p className="info-text">123 Flamenco Street<br />Arts District, Seville 41001</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <Phone />
              </div>
              <div className="info-content">
                <h3 className="info-title">Call Us</h3>
                <p className="info-text">(555) 123-DANCE<br />(555) 123-3262</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <Mail />
              </div>
              <div className="info-content">
                <h3 className="info-title">Email Us</h3>
                <p className="info-text">info@arteflamenco.com<br />classes@arteflamenco.com</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <Clock />
              </div>
              <div className="info-content">
                <h3 className="info-title">Studio Hours</h3>
                <p className="info-text">Mon-Fri: 9AM - 10PM<br />Sat-Sun: 8AM - 8PM</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form className="form">
              <div className="form-group">
                <div className="input-group">
                  <User className="input-icon" />
                  <input type="text" placeholder="Your Name" className="form-input" />
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-group">
                  <Mail className="input-icon" />
                  <input type="email" placeholder="Your Email" className="form-input" />
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-group">
                  <Phone className="input-icon" />
                  <input type="tel" placeholder="Your Phone" className="form-input" />
                </div>
              </div>
              
              <div className="form-group">
                <select className="form-select">
                  <option value="">Select Class Interest</option>
                  <option value="basic">Basic Flamenco</option>
                  <option value="sevillanas">Traditional Sevillanas</option>
                  <option value="alegrias">Advanced Alegrías</option>
                  <option value="solea">Soleá por Bulerías</option>
                  <option value="tangos">Flamenco Tangos</option>
                  <option value="fusion">Flamenco Fusion</option>
                </select>
              </div>
              
              <div className="form-group">
                <div className="input-group">
                  <MessageSquare className="input-icon message-icon" />
                  <textarea placeholder="Your Message" className="form-textarea"></textarea>
                </div>
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
  )
}

export default Contact
