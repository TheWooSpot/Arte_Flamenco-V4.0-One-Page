import React from 'react'
import { Award, Globe, Music, Star } from 'lucide-react'
import './Instructors.css'

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Carmen Delgado",
      title: "Artistic Director & Master Instructor",
      specialties: ["Soleá", "Alegrías", "Bulerías"],
      experience: "25+ years",
      background: "Trained at the prestigious Cristina Heeren Foundation in Seville, Carmen brings authentic Andalusian flamenco tradition to every class.",
      achievements: [
        "Performed at Teatro Real Madrid",
        "Winner of Concurso Nacional de Arte Flamenco",
        "Featured artist at Festival de Jerez"
      ],
      image: "https://images.pexels.com/photos/6032894/pexels-photo-6032894.jpeg"
    },
    {
      id: 2,
      name: "Miguel Rodríguez",
      title: "Senior Flamenco Instructor",
      specialties: ["Tangos", "Seguiriya", "Fandango"],
      experience: "18+ years",
      background: "Born in Cádiz, Miguel learned flamenco from his grandmother and later studied under renowned masters in Granada and Córdoba.",
      achievements: [
        "Choreographer for Compañía Flamenca Nacional",
        "Guest instructor at Flamenco Festival USA",
        "Published author on flamenco history"
      ],
      image: "https://images.pexels.com/photos/6032895/pexels-photo-6032895.jpeg"
    },
    {
      id: 3,
      name: "Isabella Torres",
      title: "Contemporary Flamenco Specialist",
      specialties: ["Modern Fusion", "Flamenco Jazz", "Creative Expression"],
      experience: "12+ years",
      background: "Isabella bridges traditional flamenco with contemporary dance, having trained in both classical Spanish dance and modern movement.",
      achievements: [
        "Founder of Flamenco Fusion Collective",
        "Performed with Symphony Orchestra collaborations",
        "International workshop tour instructor"
      ],
      image: "https://images.pexels.com/photos/6032896/pexels-photo-6032896.jpeg"
    },
    {
      id: 4,
      name: "Antonio Morales",
      title: "Flamenco Guitar Master",
      specialties: ["Traditional Accompaniment", "Solo Performance", "Composition"],
      experience: "22+ years",
      background: "Antonio studied under legendary guitarist Paco de Lucía's disciples and specializes in the intricate art of flamenco guitar accompaniment.",
      achievements: [
        "Recording artist with 5 albums",
        "Accompanist for international flamenco tours",
        "Master class instructor at Berklee College"
      ],
      image: "https://images.pexels.com/photos/6032897/pexels-photo-6032897.jpeg"
    },
    {
      id: 5,
      name: "Lucía Fernández",
      title: "Children's Flamenco Instructor",
      specialties: ["Youth Education", "Basic Techniques", "Cultural Appreciation"],
      experience: "10+ years",
      background: "Specialized in teaching flamenco to children, Lucía creates engaging and age-appropriate programs that instill love for the art form.",
      achievements: [
        "Developed Arte Flamenco Kids Curriculum",
        "Featured in Children's Cultural Education Magazine",
        "Youth Competition Judge"
      ],
      image: "https://images.pexels.com/photos/6032898/pexels-photo-6032898.jpeg"
    },
    {
      id: 6,
      name: "Rafael Jiménez",
      title: "Advanced Technique Instructor",
      specialties: ["Footwork Mastery", "Rhythm Precision", "Performance Preparation"],
      experience: "16+ years",
      background: "Rafael focuses on the technical excellence of flamenco, helping advanced students perfect their craft and prepare for professional performance.",
      achievements: [
        "Former principal dancer with Ballet Flamenco de Andalucía",
        "Technical advisor for flamenco competitions",
        "Master of traditional zapateado techniques"
      ],
      image: "https://images.pexels.com/photos/6032899/pexels-photo-6032899.jpeg"
    }
  ]

  return (
    <div className="instructors-page">
      {/* Hero Section */}
      <section className="instructors-hero">
        <div className="container">
          <div className="instructors-hero-content">
            <h1 className="page-title">Our Master Instructors</h1>
            <p className="page-subtitle">
              Learn from world-class flamenco artists who bring decades of experience, 
              authentic Spanish training, and passionate dedication to every lesson.
            </p>
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="instructors-section">
        <div className="container">
          <div className="instructors-grid">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="instructor-card">
                <div className="instructor-image">
                  <img src={instructor.image} alt={instructor.name} />
                  <div className="instructor-overlay">
                    <div className="instructor-experience">
                      <Award className="experience-icon" />
                      <span>{instructor.experience}</span>
                    </div>
                  </div>
                </div>
                
                <div className="instructor-content">
                  <h3 className="instructor-name">{instructor.name}</h3>
                  <p className="instructor-title">{instructor.title}</p>
                  
                  <div className="instructor-specialties">
                    <h4>Specialties:</h4>
                    <div className="specialties-list">
                      {instructor.specialties.map((specialty, index) => (
                        <span key={index} className="specialty-tag">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="instructor-background">{instructor.background}</p>
                  
                  <div className="instructor-achievements">
                    <h4>Notable Achievements:</h4>
                    <ul>
                      {instructor.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy Section */}
      <section className="philosophy-section">
        <div className="container">
          <div className="philosophy-content">
            <h2 className="section-title">Our Teaching Philosophy</h2>
            <div className="philosophy-grid">
              <div className="philosophy-card">
                <div className="philosophy-icon">
                  <Globe />
                </div>
                <h3>Authentic Tradition</h3>
                <p>
                  We preserve and teach the authentic techniques passed down through 
                  generations of Spanish flamenco masters, ensuring cultural integrity 
                  in every movement and rhythm.
                </p>
              </div>
              <div className="philosophy-card">
                <div className="philosophy-icon">
                  <Music />
                </div>
                <h3>Individual Expression</h3>
                <p>
                  While honoring tradition, we encourage each student to find their 
                  unique voice within flamenco, fostering personal artistic growth 
                  and creative expression.
                </p>
              </div>
              <div className="philosophy-card">
                <div className="philosophy-icon">
                  <Star />
                </div>
                <h3>Excellence & Passion</h3>
                <p>
                  Our instructors combine technical excellence with passionate teaching, 
                  creating an environment where students can achieve their highest 
                  potential while falling in love with flamenco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="join-section">
        <div className="container">
          <div className="join-content">
            <h2>Learn from the Masters</h2>
            <p>
              Ready to begin your flamenco journey with world-class instruction? 
              Our master teachers are here to guide you through every step of your 
              artistic development.
            </p>
            <button className="join-btn">
              View Class Schedule
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Instructors
