import React from 'react'
import { Clock, Users, Star, ArrowRight } from 'lucide-react'
import './Classes.css'

const Classes = () => {
  const classes = [
    {
      id: 1,
      name: 'Basic Flamenco',
      level: 'Beginner',
      duration: '60 min',
      students: '8-12',
      price: '$45',
      image: 'https://images.pexels.com/photos/6032877/pexels-photo-6032877.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Learn the fundamentals of flamenco: posture, arm movements, and basic steps.',
      highlights: ['Basic technique', 'Clapping and rhythm', 'Initial footwork']
    },
    {
      id: 2,
      name: 'Traditional Sevillanas',
      level: 'Intermediate',
      duration: '75 min',
      students: '6-10',
      price: '$55',
      image: 'https://images.pexels.com/photos/6032876/pexels-photo-6032876.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Master the four verses of sevillanas with grace and elegance.',
      highlights: ['4 complete verses', 'Partner work', 'Andalusian style']
    },
    {
      id: 3,
      name: 'Advanced Alegrías',
      level: 'Advanced',
      duration: '90 min',
      students: '4-8',
      price: '$75',
      image: 'https://images.pexels.com/photos/6032875/pexels-photo-6032875.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Perfect your technique with this joyful and virtuosic flamenco style.',
      highlights: ['Advanced technique', 'Improvisation', 'Artistic expression']
    },
    {
      id: 4,
      name: 'Soleá por Bulerías',
      level: 'Intermediate',
      duration: '75 min',
      students: '6-10',
      price: '$60',
      image: 'https://images.pexels.com/photos/6032874/pexels-photo-6032874.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Explore the emotional depth of soleá with the rhythm of bulerías.',
      highlights: ['Complex rhythm', 'Deep feeling', 'Arm technique']
    },
    {
      id: 5,
      name: 'Flamenco Tangos',
      level: 'Intermediate',
      duration: '60 min',
      students: '8-12',
      price: '$50',
      image: 'https://images.pexels.com/photos/6032873/pexels-photo-6032873.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Energy and passion in this festive style full of strength and character.',
      highlights: ['Strong rhythm', 'Powerful footwork', 'Flamenco attitude']
    },
    {
      id: 6,
      name: 'Flamenco Fusion',
      level: 'All levels',
      duration: '60 min',
      students: '10-15',
      price: '$40',
      image: 'https://images.pexels.com/photos/6032872/pexels-photo-6032872.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Combine traditional flamenco with contemporary elements.',
      highlights: ['Modern style', 'Creativity', 'All levels welcome']
    }
  ]

  return (
    <section className="classes section" id="classes">
      <div className="container">
        <div className="classes-header">
          <h2 className="section-title">Our <span className="gradient-text">Classes</span></h2>
          <p className="section-subtitle">
            Discover the passion of flamenco through our specialized classes, 
            designed for every level and learning style.
          </p>
        </div>

        <div className="classes-grid">
          {classes.map((classItem, index) => (
            <div 
              key={classItem.id} 
              className="class-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="class-image">
                <img src={classItem.image} alt={classItem.name} />
                <div className="class-overlay">
                  <span className="class-level">{classItem.level}</span>
                </div>
              </div>
              
              <div className="class-content">
                <h3 className="class-name">{classItem.name}</h3>
                <p className="class-description">{classItem.description}</p>
                
                <div className="class-highlights">
                  {classItem.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <div className="class-details">
                  <div className="detail">
                    <Clock className="detail-icon" />
                    <span>{classItem.duration}</span>
                  </div>
                  <div className="detail">
                    <Users className="detail-icon" />
                    <span>{classItem.students}</span>
                  </div>
                  <div className="detail">
                    <Star className="detail-icon" />
                    <span className="price">{classItem.price}</span>
                  </div>
                </div>
                
                <button className="class-btn">
                  Book Class
                  <ArrowRight className="btn-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Classes
