import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" className="footer-logo">
              <Heart className="logo-icon" />
              <span className="logo-text">Arte Flamenco</span>
            </Link>
            <p className="footer-description">
              Authentic flamenco dance instruction rooted in Spanish tradition. 
              Experience the passion, artistry, and cultural heritage of flamenco 
              through our comprehensive classes and performances.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <Youtube />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Navigation</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/classes">Classes</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/instructors">Instructors</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Flamenco Styles</h3>
            <ul className="footer-links">
              <li><a href="#">Alegrías</a></li>
              <li><a href="#">Bulerías</a></li>
              <li><a href="#">Soleá</a></li>
              <li><a href="#">Tangos</a></li>
              <li><a href="#">Seguiriya</a></li>
              <li><a href="#">Fandango</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Studio Info</h3>
            <ul className="footer-links">
              <li><a href="#">Class Schedule</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Registration</a></li>
              <li><a href="#">Studio Policies</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Student Resources</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Arte Flamenco. All rights reserved.</p>
          <p>Preserving the authentic art of flamenco dance ❤️</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
