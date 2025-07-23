import React from 'react'
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react'
import './Events.css'

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Tablao Flamenco Night",
      date: "March 15, 2024",
      time: "8:00 PM",
      location: "Arte Flamenco Studio",
      price: "$25",
      description: "An intimate evening of authentic flamenco performances featuring our advanced students and guest artists.",
      image: "https://images.pexels.com/photos/6032888/pexels-photo-6032888.jpeg",
      type: "Performance"
    },
    {
      id: 2,
      title: "Flamenco Workshop with María González",
      date: "March 22, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Arte Flamenco Studio",
      price: "$60",
      description: "Master class with renowned flamenco artist María González, focusing on traditional Soleá techniques.",
      image: "https://images.pexels.com/photos/6032889/pexels-photo-6032889.jpeg",
      type: "Workshop"
    },
    {
      id: 3,
      title: "Spring Recital",
      date: "April 5, 2024",
      time: "7:00 PM",
      location: "Community Arts Center",
      price: "$15",
      description: "Our students showcase their progress in a beautiful evening of flamenco dance and music.",
      image: "https://images.pexels.com/photos/6032890/pexels-photo-6032890.jpeg",
      type: "Recital"
    },
    {
      id: 4,
      title: "Flamenco & Wine Tasting",
      date: "April 12, 2024",
      time: "6:30 PM",
      location: "Arte Flamenco Studio",
      price: "$45",
      description: "Experience the perfect pairing of Spanish wines and flamenco performances in an elegant setting.",
      image: "https://images.pexels.com/photos/6032891/pexels-photo-6032891.jpeg",
      type: "Cultural Event"
    },
    {
      id: 5,
      title: "Children's Flamenco Showcase",
      date: "April 20, 2024",
      time: "3:00 PM",
      location: "Arte Flamenco Studio",
      price: "Free",
      description: "Our young dancers present their skills in a family-friendly afternoon performance.",
      image: "https://images.pexels.com/photos/6032892/pexels-photo-6032892.jpeg",
      type: "Showcase"
    },
    {
      id: 6,
      title: "Flamenco Festival Weekend",
      date: "May 3-4, 2024",
      time: "All Day",
      location: "Various Venues",
      price: "$80 (Weekend Pass)",
      description: "Two-day festival featuring workshops, performances, and cultural activities celebrating flamenco.",
      image: "https://images.pexels.com/photos/6032893/pexels-photo-6032893.jpeg",
      type: "Festival"
    }
  ]

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'Performance': return '#dc267f'
      case 'Workshop': return '#f59e0b'
      case 'Recital': return '#8b5cf6'
      case 'Cultural Event': return '#06b6d4'
      case 'Showcase': return '#4ade80'
      case 'Festival': return '#f97316'
      default: return '#6b7280'
    }
  }

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="container">
          <div className="events-hero-content">
            <h1 className="page-title">Upcoming Events</h1>
            <p className="page-subtitle">
              Join us for exciting flamenco performances, workshops, and cultural celebrations. 
              Experience the vibrant world of flamenco through our diverse events.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="events-section">
        <div className="container">
          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <div 
                    className="event-type" 
                    style={{ backgroundColor: getEventTypeColor(event.type) }}
                  >
                    {event.type}
                  </div>
                </div>
                
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  
                  <div className="event-details">
                    <div className="event-detail">
                      <Calendar className="detail-icon" />
                      <span>{event.date}</span>
                    </div>
                    <div className="event-detail">
                      <Clock className="detail-icon" />
                      <span>{event.time}</span>
                    </div>
                    <div className="event-detail">
                      <MapPin className="detail-icon" />
                      <span>{event.location}</span>
                    </div>
                    <div className="event-detail">
                      <Ticket className="detail-icon" />
                      <span className="event-price">{event.price}</span>
                    </div>
                  </div>
                  
                  <button className="event-btn">
                    {event.price === "Free" ? "Register" : "Buy Tickets"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>
              Subscribe to our newsletter to receive updates about upcoming events, 
              special workshops, and exclusive flamenco experiences.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events
