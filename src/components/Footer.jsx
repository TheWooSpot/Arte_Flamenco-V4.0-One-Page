import React from 'react'
import { Music, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Music className="logo-icon" />
              <span className="logo-text">Rhythm Studio</span>
            </div>
            <p className="footer-description">
              Inspiring dancers of all ages and skill levels to express themselves 
              through the art of movement. Join our community and discover your passion for dance.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook />
              </a>
              <a href="#" className="social-link">
                <Twitter />
              </a>
              <a href="#" className="social-link">
                <Instagram />
              </a>
              <a href="#" className="social-link">
                <Youtube />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#classes">Classes</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#instructors">Instructors</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Dance Styles</h3>
            <ul className="footer-links">
              <li><a href="#">Ballet</a></li>
              <li><a href="#">Hip Hop</a></li>
              <li><a href="#">Contemporary</a></li>
              <li><a href="#">Latin Dance</a></li>
              <li><a href="#">Jazz</a></li>
              <li><a href="#">Kids Classes</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Studio Info</h3>
            <ul className="footer-links">
              <li><a href="#">Class Schedule</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Registration</a></li>
              <li><a href="#">Policies</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Student Portal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Rhythm Studio. All rights reserved.</p>
          <p>Empowering dancers to reach their full potential ✨</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
