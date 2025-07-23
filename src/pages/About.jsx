import React from 'react'
import { Heart, Award, Users, Globe } from 'lucide-react'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="page-title">Our Story</h1>
            <p className="page-subtitle">
              Preserving the authentic art of flamenco dance through passionate instruction 
              and cultural celebration
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>The Heart of Flamenco</h2>
              <p>
                Founded in 2010, Arte Flamenco emerged from a deep passion for preserving 
                and sharing the authentic traditions of Spanish flamenco dance. Our journey 
                began when our founder, after years of training in Seville and Granada, 
                recognized the need for genuine flamenco instruction that honors the art form's 
                rich cultural heritage.
              </p>
              <p>
                What started as intimate classes in a small studio has blossomed into a 
                vibrant community of dancers, musicians, and flamenco enthusiasts. We believe 
                that flamenco is more than just dance—it's a profound expression of human 
                emotion, a celebration of Spanish culture, and a bridge connecting people 
                across all backgrounds.
              </p>
              <p>
                Today, Arte Flamenco stands as the premier destination for authentic flamenco 
                education, welcoming students from beginners taking their first steps to 
                advanced dancers perfecting their artistry. Our commitment remains unchanged: 
                to honor tradition while inspiring the next generation of flamenco artists.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="https://images.pexels.com/photos/6032880/pexels-photo-6032880.jpeg" 
                alt="Traditional flamenco studio"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Heart />
              </div>
              <h3>Passion & Authenticity</h3>
              <p>
                We honor the true spirit of flamenco, teaching with the same passion 
                and authenticity that has defined this art form for centuries.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Award />
              </div>
              <h3>Excellence in Teaching</h3>
              <p>
                Our instructors are master artists who bring decades of experience 
                and international recognition to every class.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Users />
              </div>
              <h3>Inclusive Community</h3>
              <p>
                We welcome dancers of all ages, backgrounds, and skill levels, 
                fostering a supportive environment where everyone can flourish.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Globe />
              </div>
              <h3>Cultural Heritage</h3>
              <p>
                We serve as guardians of flamenco tradition, ensuring this beautiful 
                art form continues to thrive for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                To provide the highest quality flamenco dance education while preserving 
                the authentic traditions of this magnificent art form. We strive to create 
                an environment where students can explore their artistic expression, 
                connect with Spanish culture, and experience the transformative power of flamenco.
              </p>
              <p>
                Through our classes, performances, and cultural events, we aim to build 
                bridges between communities, celebrate diversity, and ensure that the 
                passionate spirit of flamenco continues to inspire and move people around the world.
              </p>
            </div>
            <div className="mission-stats">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Students Taught</div>
              </div>
              <div className="stat">
                <div className="stat-number">14</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Performances</div>
              </div>
              <div className="stat">
                <div className="stat-number">8</div>
                <div className="stat-label">Master Instructors</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
