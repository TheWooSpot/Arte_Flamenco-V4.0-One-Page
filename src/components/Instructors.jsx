import React from 'react'
import { Star, Award, Calendar, Heart } from 'lucide-react'
import './Instructors.css'

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Sarah Martinez",
      specialty: "Ballet & Contemporary",
      experience: "12 years",
      image: "https://images.pexels.com/photos/3662849/pexels-photo-3662849.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Former principal dancer with the National Ballet Company, Sarah brings classical excellence to every class.",
      achievements: ["Royal Academy Certified", "Competition Judge", "Choreographer"]
    },
    {
      id: 2,
      name: "Marcus Johnson",
      specialty: "Hip Hop & Street Dance",
      experience: "8 years",
      image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Street dance champion and choreographer for music videos, Marcus brings authentic urban style.",
      achievements: ["Battle Champion", "Music Video Choreographer", "Youth Mentor"]
    },
    {
      id: 3,
      name: "Isabella Rodriguez",
      specialty: "Latin & Ballroom",
      experience: "15 years",
      image: "https://images.pexels.com/photos/3662630/pexels-photo-3662630.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "International ballroom competitor and Latin dance specialist with passion for cultural expression.",
      achievements: ["World Championship Finalist", "Cultural Ambassador", "Master Teacher"]
    },
    {
      id: 4,
      name: "David Chen",
      specialty: "Jazz & Musical Theater",
      experience: "10 years",
      image: "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Broadway performer and jazz specialist who brings theatrical flair to every performance.",
      achievements: ["Broadway Performer", "Tony Award Nominee", "Acting Coach"]
    },
    {
      id: 5,
      name: "Emma Thompson",
      specialty: "Kids & Teen Programs",
      experience: "6 years",
      image: "https://images.pexels.com/photos/3662849/pexels-photo-3662849.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Specialized in youth development through dance, creating fun and educational experiences.",
      achievements: ["Child Development Certified", "Youth Program Director", "Creative Arts Educator"]
    },
    {
      id: 6,
      name: "Alex Rivera",
      specialty: "Fitness & Dance Fusion",
      experience: "7 years",
      image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Fitness expert combining dance with wellness, creating energizing and healthy movement classes.",
      achievements: ["Certified Fitness Trainer", "Wellness Coach", "Dance Fitness Innovator"]
    }
  ]

  return (
    <section className="instructors section" id="instructors">
      <div className="container">
        <h2 className="section-title">Meet Our Instructors</h2>
        <p className="section-subtitle">
          Learn from passionate professionals who are dedicated to your dance journey
        </p>
        
        <div className="instructors-grid">
          {instructors.map(instructor => (
            <div key={instructor.id} className="instructor-card">
              <div className="instructor-image">
                <img src={instructor.image} alt={instructor.name} />
                <div className="instructor-overlay">
                  <span className="instructor-experience">{instructor.experience}</span>
                </div>
              </div>
              <div className="instructor-content">
                <h3 className="instructor-name">{instructor.name}</h3>
                <p className="instructor-specialty">{instructor.specialty}</p>
                <p className="instructor-bio">{instructor.bio}</p>
                <div className="instructor-achievements">
                  {instructor.achievements.map((achievement, index) => (
                    <span key={index} className="achievement-badge">
                      <Award className="achievement-icon" />
                      {achievement}
                    </span>
                  ))}
                </div>
                <button className="instructor-btn">
                  <Calendar className="btn-icon" />
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Instructors
