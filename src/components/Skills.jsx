import { Code, PenTool, Globe, Database, LineChart, Cpu } from "lucide-react"
import "../styles/Skills.css"

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code size={32} />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Material UI"],
    },
    /* {
      title: "UI/UX Design",
      icon: <PenTool size={32} />,
      skills: ["Figma", "Adobe XD", "Responsive Design", "User Research", "Wireframing"],
    }, */
    {
      title: "Backend Development",
      icon: <Database size={32} />,
      skills: ["C#", "REST APIs", "Node.js"],
    },
    /* {
      title: "Web Performance",
      icon: <LineChart size={32} />,
      skills: ["Optimization", "Lazy Loading", "Code Splitting", "Performance Metrics"],
    }, */
    {
      title: "Tools & Others",
      icon: <Cpu size={32} />,
      skills: ["Git", "Vite", "GitHub Actions"],
    },
    /* {
      title: "Languages",
      icon: <Globe size={32} />,
      skills: ["JavaScript", "HTML", "CSS", "Python", "SQL"],
    }, */
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-description">Here are the technologies and tools I work with</p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <div className="skill-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

