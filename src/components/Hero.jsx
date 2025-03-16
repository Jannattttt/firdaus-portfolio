"use client"

import { ArrowDown } from "lucide-react"
import "../styles/Hero.css"

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          <span className="greeting">Hello, I'm</span>
          <span className="name">Firdaus Zakari</span>
        </h1>
        <h2 className="title">Frontend Developer</h2>
        <p className="description">I build exceptional and accessible digital experiences for the web.</p>
        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View My Work
          </a>
          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>
      </div>
      <button className="scroll-indicator" onClick={scrollToAbout} aria-label="Scroll to about section">
        <ArrowDown />
      </button>
    </section>
  )
}

export default Hero

