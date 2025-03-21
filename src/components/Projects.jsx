import { Github, ExternalLink } from "lucide-react"
import "../styles/Projects.css"
import image1 from "../assets/portfolio1.jpg"

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product listings, cart functionality, and checkout process.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/Jannattttt",
      liveUrl: "https://example.com",
    },
    {
      title: "Task Management App",
      description: "A productivity app that helps users organize tasks, set deadlines, and track progress.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "Firebase", "Material UI", "Redux"],
      githubUrl: "https://github.com/Jannattttt",
      liveUrl: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current conditions and forecasts based on user location.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["JavaScript", "Weather API", "CSS", "HTML"],
      githubUrl: "https://github.com/Jannattttt",
      liveUrl: "https://example.com",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills (this website).",
      image: image1,
      technologies: ["React", "Vite", "CSS"],
      githubUrl: "https://github.com/Jannattttt",
      liveUrl: "https://jannattttt.github.io/firdaus-portfolio/",
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-description">Check out some of my recent work</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View GitHub repository"
                  >
                    <Github size={24} />
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="View live project">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

