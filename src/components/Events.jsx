import React from 'react'
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react'
import './Events.css'

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Spring Flamenco Showcase",
      description: "Join us for our annual spring performance featuring all flamenco styles and student levels.",
      image: "https://images.pexels.com/photos/3662849/pexels-photo-3662849.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 15, 2024",
      time: "7:00 PM",
      location: "Main Theater",
      price: "Free",
      type: "Performance"
    },
    {
      id: 2,
      title: "Flamenco Guitar Workshop",
      description: "Learn the rhythms and techniques of flamenco guitar from master guitarist Pablo Moreno.",
      image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 22, 2024",
      time: "2:00 PM",
      location: "Studio A",
      price: "$35",
      type: "Workshop"
    },
    {
      id: 3,
      title: "Flamenco Masterclass",
      description: "Advanced flamenco technique workshop with guest instructor from Seville's Teatro Flamenco.",
      image: "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "April 5, 2024",
      time: "10:00 AM",
      location: "Studio B",
      price: "$45",
      type: "Masterclass"
    },
    {
      id: 4,
      title: "Tablao Night",
      description: "Experience authentic flamenco in an intimate tablao setting with live music and dance.",
      image: "https://images.pexels.com/photos/3662630/pexels-photo-3662630.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "April 12, 2024",
      time: "8:00 PM",
      location: "Main Studio",
      price: "$25",
      type: "Performance"
    },
    {
      id: 5,
      title: "Flamenco Intensive Weekend",
      description: "Three-day intensive workshop focusing on traditional flamenco technique and choreography.",
      image: "https://images.pexels.com/photos/3662849/pexels-photo-3662849.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "April 19-21, 2024",
      time: "9:00 AM",
      location: "Studio A & B",
      price: "$120",
      type: "Intensive"
    },
    {
      id: 6,
      title: "Kids Flamenco Camp",
      description: "Week-long summer camp for children ages 6-14 exploring the joy of flamenco dance.",
      image: "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "June 10-14, 2024",
      time: "9:00 AM",
      location: "All Studios",
      price: "$200",
      type: "Camp"
    }
  ]

  return (
    <section className="events section" id="events">
      <div className="container">
        <h2 className="section-title">Upcoming <span className="gradient-text">Events</span></h2>
        <p className="section-subtitle">
          Join our special events, workshops, and performances throughout the year
        </p>
        
        <div className="events-grid">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <div className="event-overlay">
                  <span className="event-type">{event.type}</span>
                </div>
              </div>
              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <div className="event-details">
                  <div className="detail-item">
                    <Calendar className="detail-icon" />
                    <span>{event.date}</span>
                  </div>
                  <div className="detail-item">
                    <Clock className="detail-icon" />
                    <span>{event.time}</span>
                  </div>
                  <div className="detail-item">
                    <MapPin className="detail-icon" />
                    <span>{event.location}</span>
                  </div>
                  <div className="detail-item">
                    <Ticket className="detail-icon" />
                    <span>{event.price}</span>
                  </div>
                </div>
                <button className="event-btn">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
