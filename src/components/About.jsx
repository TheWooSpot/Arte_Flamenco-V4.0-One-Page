import React from 'react'
import { Heart, Award, Users, Music } from 'lucide-react'
import './About.css'

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Authentic Passion',
      description: 'Over 25 years preserving flamenco tradition with authenticity and respect for its Andalusian roots.'
    },
    {
      icon: Award,
      title: 'Artistic Excellence',
      description: 'Our masters are recognized artists who have performed in the finest tablaos of Spain.'
    },
    {
      icon: Users,
      title: 'Flamenco Community',
      description: 'A family of over 300 dancers who share the passion for this ancient art form.'
    },
    {
      icon: Music,
      title: 'Living Tradition',
      description: 'We keep the essence of flamenco alive through teaching and constant practice.'
    }
  ]

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">
              Our <span className="gradient-text">Story</span>
            </h2>
            <p className="section-subtitle">
              Arte Flamenco was born from a deep love for this unique artistic expression, 
              where every step tells a story and every beat pulses with the heart of Andalusia.
            </p>
            
            <div className="about-story">
              <p>
                Founded in 1998 by master teacher Carmen Heredia, our studio has been 
                a sanctuary for those seeking to connect with the purest essence of 
                flamenco. Here we don't just teach technique, but transmit the duende, 
                that mysterious force that transforms movement into art.
              </p>
              
              <p>
                Every class is a journey to the heart of Andalusia, where tradition 
                meets innovation, and where each student discovers their own flamenco 
                voice. Our commitment is to keep this cultural heritage alive 
                while inspiring new generations.
              </p>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Years of Tradition</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">300+</span>
                <span className="stat-label">Dancers Trained</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12</span>
                <span className="stat-label">Expert Masters</span>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img 
              src="https://images.pexels.com/photos/6032877/pexels-photo-6032877.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Flamenco Dancer"
              className="main-image"
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <Heart className="overlay-icon" />
                <span>Flamenco Duende</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="feature-icon">
                <feature.icon />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
