import React from 'react'
import { ArrowRight, Flame } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <img 
          src="https://images.pexels.com/photos/6032877/pexels-photo-6032877.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Flamenco Dancer"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <Flame className="badge-icon" />
            <span>Auténtico Arte Español</span>
          </div>
          
          <h1 className="hero-title">
            Arte <span className="flamenco-text">Flamenco</span>
          </h1>
          
          <p className="hero-description">
            Experience the passion, rhythm, and soul of authentic 
            Spanish flamenco dance and music
          </p>
          
          <div className="hero-buttons">
            <a href="#classes" className="btn btn-primary">
              Start Your Journey
              <ArrowRight className="btn-icon" />
            </a>
            <a href="#about" className="btn btn-secondary">
              Learn More
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">25+</span>
              <span className="stat-label">Years of Tradition</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">300+</span>
              <span className="stat-label">Passionate Dancers</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">12</span>
              <span className="stat-label">Master Instructors</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
