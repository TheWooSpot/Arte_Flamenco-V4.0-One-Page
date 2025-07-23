import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Music, Users, Calendar, Award } from 'lucide-react'
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="https://images.pexels.com/photos/6032877/pexels-photo-6032877.jpeg" 
            alt="Flamenco dancer in dramatic pose"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Experience the Soul of
              <span className="highlight"> Flamenco</span>
            </h1>
            <p className="hero-subtitle">
              Immerse yourself in the passionate world of authentic Spanish flamenco dance. 
              From traditional techniques to contemporary expression, discover the art that 
              captures the essence of Spanish culture.
            </p>
            <div className="hero-actions">
              <Link to="/classes" className="btn btn-primary">
                Explore Classes
                <ArrowRight className="btn-icon" />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Music />
              </div>
              <h3>Authentic Tradition</h3>
              <p>Learn from masters trained in the heart of Andalusia, preserving centuries-old flamenco traditions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users />
              </div>
              <h3>All Skill Levels</h3>
              <p>From complete beginners to advanced dancers, our classes are designed to challenge and inspire everyone.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Calendar />
              </div>
              <h3>Regular Performances</h3>
              <p>Showcase your skills in our monthly tablao performances and special cultural events.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Award />
              </div>
              <h3>Expert Instruction</h3>
              <p>Learn from internationally recognized flamenco artists and certified instructors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links">
        <div className="container">
          <h2 className="section-title">Begin Your Flamenco Journey</h2>
          <div className="quick-links-grid">
            <Link to="/classes" className="quick-link-card">
              <img 
                src="https://images.pexels.com/photos/6032876/pexels-photo-6032876.jpeg" 
                alt="Flamenco class in session"
                className="quick-link-image"
              />
              <div className="quick-link-content">
                <h3>View Classes</h3>
                <p>Discover our range of flamenco classes for all levels</p>
              </div>
            </Link>
            <Link to="/events" className="quick-link-card">
              <img 
                src="https://images.pexels.com/photos/6032878/pexels-photo-6032878.jpeg" 
                alt="Flamenco performance event"
                className="quick-link-image"
              />
              <div className="quick-link-content">
                <h3>Upcoming Events</h3>
                <p>Join our performances and cultural celebrations</p>
              </div>
            </Link>
            <Link to="/instructors" className="quick-link-card">
              <img 
                src="https://images.pexels.com/photos/6032879/pexels-photo-6032879.jpeg" 
                alt="Flamenco instructor teaching"
                className="quick-link-image"
              />
              <div className="quick-link-content">
                <h3>Meet Our Masters</h3>
                <p>Learn from world-class flamenco artists</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
