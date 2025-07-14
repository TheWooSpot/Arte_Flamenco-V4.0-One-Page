import React, { useState } from 'react'
import { Menu, X, Heart } from 'lucide-react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Heart className="logo-icon" />
            <span className="logo-text">Arte Flamenco</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#classes" className="nav-link">Classes</a>
            <a href="#events" className="nav-link">Events</a>
            <a href="#instructors" className="nav-link">Instructors</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
