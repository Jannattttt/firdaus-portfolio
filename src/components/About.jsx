import "../styles/About.css"
import image from "../assets/profile.jpeg"
import resume from "../assets/resume.pdf"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={image} alt="Profile" />
          </div>
          <div className="about-text">
            <h3>Who am I?</h3>
            <p>
              I'm a passionate Frontend Developer with a strong foundation in building modern web applications. With
              expertise in React, JavaScript, and CSS, I create responsive and user-friendly interfaces that deliver
              exceptional user experiences.
            </p>
            <p>
              My journey in web development started 5 years ago, and since then, I've worked on various projects ranging
              from e-commerce platforms to complex dashboards and interactive web applications.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies or enjoying outdoor activities.
            </p>
            <div className="about-details">
              <div className="detail">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Firdaus Zakari</span>
              </div>
              <div className="detail">
                <span className="detail-label">Email:</span>
                <span className="detail-value">jannat0firdaus@gmail.com</span>
              </div>
              <div className="detail">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Accra, Ghana</span>
              </div>
              <div className="detail">
                <span className="detail-label">Availability:</span>
                <span className="detail-value">Open to opportunities</span>
              </div>
            </div>
            <a href={resume} className="resume-button" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

