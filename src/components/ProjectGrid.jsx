import React from 'react'
import { Clock, User, ArrowRight } from 'lucide-react'
import './ProjectGrid.css'

const ProjectGrid = () => {
  const projects = [
    {
      id: 1,
      title: "Rustic Wooden Coffee Table",
      description: "Build a beautiful coffee table using reclaimed wood and simple tools.",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600",
      time: "4 hours",
      difficulty: "Beginner",
      category: "Furniture"
    },
    {
      id: 2,
      title: "Floating Wall Shelves",
      description: "Create modern floating shelves that appear to defy gravity.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
      time: "2 hours",
      difficulty: "Easy",
      category: "Storage"
    },
    {
      id: 3,
      title: "Garden Planter Box",
      description: "Design and build a custom planter box for your garden or patio.",
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=600",
      time: "3 hours",
      difficulty: "Intermediate",
      category: "Garden"
    },
    {
      id: 4,
      title: "Industrial Pipe Lamp",
      description: "Create a unique industrial-style lamp using copper pipes.",
      image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600",
      time: "2.5 hours",
      difficulty: "Intermediate",
      category: "Lighting"
    },
    {
      id: 5,
      title: "Pallet Wall Art",
      description: "Transform old pallets into stunning wall art for your home.",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600",
      time: "3 hours",
      difficulty: "Beginner",
      category: "Decor"
    },
    {
      id: 6,
      title: "Storage Ottoman",
      description: "Build a functional ottoman with hidden storage compartment.",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600",
      time: "5 hours",
      difficulty: "Advanced",
      category: "Furniture"
    }
  ]

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Discover our most popular DIY projects with step-by-step instructions
        </p>
        
        <div className="project-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-meta">
                  <div className="meta-item">
                    <Clock className="meta-icon" />
                    <span>{project.time}</span>
                  </div>
                  <div className="meta-item">
                    <User className="meta-icon" />
                    <span>{project.difficulty}</span>
                  </div>
                </div>
                <button className="project-btn">
                  View Project
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

export default ProjectGrid
