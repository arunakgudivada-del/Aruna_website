import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, ExternalLink, ChevronDown, Code, Database, BarChart } from 'lucide-react';
import { personalInfo, skills, projects, experience, education } from './data';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <div className="background-glow" />

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo">AG.</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link">
              <Linkedin size={20} />
            </a>
            <a href="#contact" className="btn btn-primary btn-sm">Contact Me</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero section">
        <div className="container hero-content animate-fade-in">
          <span className="subtitle text-gradient">Hello, I'm</span>
          <h1 className="title">{personalInfo.name}</h1>
          <h2 className="role">{personalInfo.role}</h2>
          <p className="description">{personalInfo.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="/resume.pdf" className="btn btn-outline" download>
              <FileText size={18} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="scroll-indicator animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-dim">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="glass-panel about-card">
            <p>{personalInfo.summary}</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="grid-cols-2">
            {skills.map((skillGroup, index) => (
              <div key={index} className="glass-panel skill-card">
                <h3 className="skill-category">{skillGroup.category}</h3>
                <div className="skill-tags">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Selected Projects</h2>
          <div className="grid-cols-2">
            {projects.map((project) => (
              <div key={project.id} className="glass-panel project-card">
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="tech-stack">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="icon-link" title="View Code">
                      <Github size={20} />
                    </a>
                    <a href={project.link} className="icon-link" title="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            {experience.map((exp) => (
              <div key={exp.id} className="glass-panel timeline-item">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="company text-gradient">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="grid-cols-2">
            {education.map((edu, index) => (
              <div key={index} className="glass-panel education-card">
                <h3>{edu.degree}</h3>
                <p className="company">{edu.school}</p>
                <p className="period">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container footer-content">
          <div className="social-links">
            <a href={personalInfo.github}><Github /></a>
            <a href={personalInfo.linkedin}><Linkedin /></a>
            <a href={`mailto:${personalInfo.email}`}><Mail /></a>
          </div>
          <p className="copyright">© 2026 {personalInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
