import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Classes from './components/Classes'
import About from './components/About'
import Events from './components/Events'
import Instructors from './components/Instructors'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Classes />
      <About />
      <Events />
      <Instructors />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
