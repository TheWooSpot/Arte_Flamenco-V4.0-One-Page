import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Music, Users, Calendar } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Experience the <span className="highlight">Passion</span> of Flamenco
          </h1>
          <p className="hero-description">
            Discover the art of authentic Spanish flamenco dance in our intimate studio. 
            From beginner workshops to advanced masterclasses, immerse yourself in the 
            dramatic beauty and emotional depth of this timeless art form.
          </p>
          <div className="hero-buttons">
            <Link to="/classes" className="btn btn-primary">
              View Classes <ArrowRight className="btn-icon" />
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <Music className="stat-icon" />
            <div className="stat-content">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Teaching</span>
            </div>
          </div>
          <div className="stat">
            <Users className="stat-icon" />
            <div className="stat-content">
              <span className="stat-number">500+</span>
              <span className="stat-label">Students Trained</span>
            </div>
          </div>
          <div className="stat">
            <Calendar className="stat-icon" />
            <div className="stat-content">
              <span className="stat-number">50+</span>
              <span className="stat-label">Performances</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-image">
        <img 
          src="https://images.pexels.com/photos/6032877/pexels-photo-6032877.jpeg?auto=compress&cs=tinysrgb&w=800" 
          alt="Flamenco dancer in traditional red dress"
          className="hero-img"
        />
        <div className="hero-overlay"></div>
      </div>
    </section>
  )
}

export default Hero
