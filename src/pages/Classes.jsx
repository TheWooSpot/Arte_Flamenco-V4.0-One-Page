import React from 'react'
import { Clock, Users, Star, ArrowRight } from 'lucide-react'
import './Classes.css'

const Classes = () => {
  const classes = [
    {
      id: 1,
      title: "Beginner Flamenco",
      level: "Beginner",
      duration: "60 minutes",
      capacity: "12 students",
      price: "$25",
      description: "Perfect introduction to flamenco fundamentals including basic footwork, arm movements, and rhythm.",
      schedule: ["Monday 7:00 PM", "Wednesday 6:00 PM", "Saturday 10:00 AM"],
      image: "https://images.pexels.com/photos/6032881/pexels-photo-6032881.jpeg"
    },
    {
      id: 2,
      title: "Intermediate Flamenco",
      level: "Intermediate",
      duration: "75 minutes",
      capacity: "10 students",
      price: "$35",
      description: "Build upon your foundation with complex choreography, traditional palos, and expressive techniques.",
      schedule: ["Tuesday 7:30 PM", "Thursday 6:30 PM", "Saturday 11:30 AM"],
      image: "https://images.pexels.com/photos/6032882/pexels-photo-6032882.jpeg"
    },
    {
      id: 3,
      title: "Advanced Flamenco",
      level: "Advanced",
      duration: "90 minutes",
      capacity: "8 students",
      price: "$45",
      description: "Master advanced techniques, improvisation, and prepare for professional-level performances.",
      schedule: ["Monday 8:30 PM", "Friday 7:00 PM"],
      image: "https://images.pexels.com/photos/6032883/pexels-photo-6032883.jpeg"
    },
    {
      id: 4,
      title: "Flamenco for Kids",
      level: "All Levels",
      duration: "45 minutes",
      capacity: "15 students",
      price: "$20",
      description: "Fun and engaging flamenco classes designed specifically for children ages 6-12.",
      schedule: ["Saturday 9:00 AM", "Sunday 10:00 AM"],
      image: "https://images.pexels.com/photos/6032884/pexels-photo-6032884.jpeg"
    },
    {
      id: 5,
      title: "Flamenco Guitar Accompaniment",
      level: "Intermediate",
      duration: "60 minutes",
      capacity: "6 students",
      price: "$40",
      description: "Learn to play traditional flamenco guitar to accompany dancers and understand the music deeply.",
      schedule: ["Wednesday 8:00 PM", "Sunday 2:00 PM"],
      image: "https://images.pexels.com/photos/6032885/pexels-photo-6032885.jpeg"
    },
    {
      id: 6,
      title: "Private Lessons",
      level: "All Levels",
      duration: "60 minutes",
      capacity: "1 student",
      price: "$80",
      description: "Personalized one-on-one instruction tailored to your specific goals and skill level.",
      schedule: ["By Appointment"],
      image: "https://images.pexels.com/photos/6032886/pexels-photo-6032886.jpeg"
    }
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return '#4ade80'
      case 'Intermediate': return '#f59e0b'
      case 'Advanced': return '#dc267f'
      default: return '#8b5cf6'
    }
  }

  return (
    <div className="classes-page">
      {/* Hero Section */}
      <section className="classes-hero">
        <div className="container">
          <div className="classes-hero-content">
            <h1 className="page-title">Flamenco Classes</h1>
            <p className="page-subtitle">
              Discover the perfect class for your flamenco journey. From beginner fundamentals 
              to advanced artistry, we offer comprehensive instruction for all skill levels.
            </p>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="classes-section">
        <div className="container">
          <div className="classes-grid">
            {classes.map((classItem) => (
              <div key={classItem.id} className="class-card">
                <div className="class-image">
                  <img src={classItem.image} alt={classItem.title} />
                  <div className="class-level" style={{ backgroundColor: getLevelColor(classItem.level) }}>
                    {classItem.level}
                  </div>
                </div>
                
                <div className="class-content">
                  <h3 className="class-title">{classItem.title}</h3>
                  <p className="class-description">{classItem.description}</p>
                  
                  <div className="class-details">
                    <div className="class-detail">
                      <Clock className="detail-icon" />
                      <span>{classItem.duration}</span>
                    </div>
                    <div className="class-detail">
                      <Users className="detail-icon" />
                      <span>{classItem.capacity}</span>
                    </div>
                    <div className="class-detail">
                      <Star className="detail-icon" />
                      <span className="class-price">{classItem.price}</span>
                    </div>
                  </div>
                  
                  <div className="class-schedule">
                    <h4>Schedule:</h4>
                    <ul>
                      {classItem.schedule.map((time, index) => (
                        <li key={index}>{time}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="class-btn">
                    Enroll Now
                    <ArrowRight className="btn-icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="class-info">
        <div className="container">
          <div className="info-content">
            <div className="info-text">
              <h2>What to Expect</h2>
              <div className="info-points">
                <div className="info-point">
                  <h4>Authentic Instruction</h4>
                  <p>Learn from masters trained in the traditional flamenco schools of Andalusia.</p>
                </div>
                <div className="info-point">
                  <h4>Progressive Learning</h4>
                  <p>Our structured curriculum builds skills systematically from basic to advanced levels.</p>
                </div>
                <div className="info-point">
                  <h4>Performance Opportunities</h4>
                  <p>Regular showcases and events to demonstrate your progress and gain confidence.</p>
                </div>
                <div className="info-point">
                  <h4>Cultural Context</h4>
                  <p>Understanding the history and cultural significance behind each movement and rhythm.</p>
                </div>
              </div>
            </div>
            <div className="info-image">
              <img 
                src="https://images.pexels.com/photos/6032887/pexels-photo-6032887.jpeg" 
                alt="Flamenco class in session"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Classes
