import { useState, useEffect, useRef } from 'react'
import heroPortrait from './assets/Hero.jpg'
import aboutImage from './assets/About.jpeg'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Scroll reveal animation using Intersection Observer
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    revealElements.forEach(el => observer.observe(el))

    return () => {
      revealElements.forEach(el => observer.unobserve(el))
    }
  }, [])

  // Graphic elements for hero section
  const graphicElements = [
    { type: 'circle', size: 300, top: '10%', left: '5%', delay: 0 },
    { type: 'circle', size: 150, top: '60%', left: '15%', delay: 1 },
    { type: 'ring', size: 200, top: '20%', right: '40%', delay: 0.5 },
    { type: 'dots', top: '70%', right: '30%', delay: 1.5 },
    { type: 'line', top: '30%', left: '25%', delay: 0.8 },
    { type: 'triangle', size: 100, top: '75%', left: '8%', delay: 1.2 },
  ]

  return (
    <div className="app-container">
      {/* Brand Header */}
      <header className="brand-header">
        <span>Mohammed Abrar</span>
      </header>

      {/* Hamburger Menu Button - Always Visible */}
      <button
        className={`hamburger-btn ${menuOpen ? 'hidden' : ''}`}
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Main Hero Section */}
      <main className="hero-section">
        {/* Background Graphics */}
        <div className="hero-graphics">
          {graphicElements.map((el, index) => (
            <div
              key={index}
              className={`graphic-element ${el.type}`}
              style={{
                width: el.size,
                height: el.size,
                top: el.top,
                left: el.left,
                right: el.right,
                animationDelay: `${el.delay}s`,
              }}
            />
          ))}

          {/* Animated particles */}
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          {/* Gradient orbs */}
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div className="hero-content">
          {/* Portrait Image */}
          <div className="portrait-container">
            <div className="portrait-frame">
              <img src={heroPortrait} alt="Mohammed Abrar" className="portrait-image" />
            </div>
            {/* Decorative elements around portrait */}
            <div className="portrait-accent accent-1"></div>
            <div className="portrait-accent accent-2"></div>
          </div>

          {/* Title Section */}
          <div className="title-section">
            <h2 className="first-name">Mohammed</h2>
            <h1 className="last-name">Abrar</h1>
            <p className="tagline">FULL-STACK WEB DEVELOPER</p>

            {/* Decorative line */}
            <div className="title-decoration">
              <span className="deco-line"></span>
              <span className="deco-dot"></span>
              <span className="deco-line"></span>
            </div>
          </div>
        </div>
      </main>

      {/* About Me Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          {/* Left - Image with red accent */}
          <div className="about-image-wrapper reveal-left">
            <div className="about-image-accent"></div>
            <div className="about-image-container">
              <img src={aboutImage} alt="Mohammed Abrar" className="about-image" />
              <div className="code-badge">&lt;/&gt;</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="about-content reveal-right">
            <span className="about-label">▶ About me</span>
            <h2 className="about-title">Who Am I</h2>

            <p className="about-description">
              I am a Full-Stack Web Developer with a strong focus on building scalable, responsive, and user-centric web applications. I work across the entire development lifecycle, from designing intuitive user interfaces to implementing secure and efficient backend systems.
            </p>

            {/* Download CV Button */}
            <a href="/Mohammed_Abrar_Full_Stack.pdf" download className="download-cv-btn reveal stagger-2">Download CV</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        {/* Background Graphics */}
        <div className="skills-graphics">
          <div className="skills-orb orb-left"></div>
          <div className="skills-orb orb-right"></div>
          <div className="skills-shape shape-1"></div>
          <div className="skills-shape shape-2"></div>
          <div className="skills-dots"></div>
        </div>
        <div className="skills-container">
          <div className="section-header reveal">
            <span className="section-label">▶ My Expertise</span>
            <h2 className="section-title">Skills & Background</h2>
          </div>

          <div className="skills-grid">
            {/* Left Column - Software Skills */}
            <div className="skills-column reveal-left">
              {/* Software Skills */}
              <div className="skill-category">
                <h3 className="skill-category-title">SOFTWARE SKILLS</h3>

                <div className="skill-group">
                  <h4 className="skill-group-title">Frontend</h4>
                  <div className="skill-tags">
                    <span>React</span>
                    <span>Tailwind CSS</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                  </div>
                </div>

                <div className="skill-group">
                  <h4 className="skill-group-title">Backend</h4>
                  <div className="skill-tags">
                    <span>FastAPI</span>
                    <span>Node.js</span>
                    <span>REST APIs</span>
                  </div>
                </div>

                <div className="skill-group">
                  <h4 className="skill-group-title">Database</h4>
                  <div className="skill-tags">
                    <span>PostgreSQL</span>
                  </div>
                </div>

                <div className="skill-group">
                  <h4 className="skill-group-title">Tools</h4>
                  <div className="skill-tags">
                    <span>Git</span>
                    <span>GitHub</span>
                    <span>Railway</span>
                    <span>Vercel</span>
                  </div>
                </div>

                <div className="skill-group">
                  <h4 className="skill-group-title">Auth & APIs</h4>
                  <div className="skill-tags">
                    <span>JWT</span>
                    <span>OAuth</span>
                    <span>Google Login</span>
                    <span>Gemini API</span>
                    <span>OpenAI</span>
                  </div>
                </div>
              </div>

              {/* Hobbies & Interests */}
              <div className="skill-category">
                <h3 className="skill-category-title">HOBBIES & INTERESTS</h3>
                <div className="hobbies-grid">
                  <div className="hobby-item">
                    <div className="hobby-icon">📚</div>
                    <span>Reading</span>
                  </div>
                  <div className="hobby-item">
                    <div className="hobby-icon">🎮</div>
                    <span>Gaming</span>
                  </div>
                  <div className="hobby-item">
                    <div className="hobby-icon">🎬</div>
                    <span>Movies</span>
                  </div>
                  <div className="hobby-item">
                    <div className="hobby-icon">🎵</div>
                    <span>Music</span>
                  </div>
                  <div className="hobby-item">
                    <div className="hobby-icon">✈️</div>
                    <span>Travel</span>
                  </div>
                  <div className="hobby-item">
                    <div className="hobby-icon">📷</div>
                    <span>Photography</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Education, Languages & Personal Skills */}
            <div className="skills-column reveal-right">
              {/* Education */}
              <div className="skill-category">
                <h3 className="skill-category-title">EDUCATION</h3>
                <div className="education-timeline">
                  <div className="education-item">
                    <div className="education-dot"></div>
                    <div className="education-content">
                      <h4 className="education-degree">Bachelor's in Computer Science</h4>
                      <p className="education-school">Muffakham jah college of Engi and Tech</p>
                      <span className="education-year">2021 - 2025</span>
                    </div>
                  </div>
                  <div className="education-item">
                    <div className="education-dot"></div>
                    <div className="education-content">
                      <h4 className="education-degree">Higher Secondary (12th)</h4>
                      <p className="education-school">Narayana junior college</p>
                      <span className="education-year">2019 - 2021</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="skill-category">
                <h3 className="skill-category-title">LANGUAGES</h3>
                <div className="language-bars">
                  <div className="language-item">
                    <span className="language-name">English</span>
                    <div className="language-bar">
                      <div className="language-progress" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="language-item">
                    <span className="language-name">Hindi</span>
                    <div className="language-bar">
                      <div className="language-progress" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="language-item">
                    <span className="language-name">Urdu</span>
                    <div className="language-bar">
                      <div className="language-progress" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Skills */}
              <div className="skill-category">
                <h3 className="skill-category-title">PERSONAL SKILLS</h3>
                <div className="personal-skills-list">
                  <span>Problem Solving</span>
                  <span>Team Work</span>
                  <span>Communication</span>
                  <span>Time Management</span>
                  <span>Adaptability</span>
                  <span>Quick Learner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <div className="section-header reveal">
            <span className="section-label">▶ My Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">A selection of projects I've built to solve real-world problems</p>
          </div>

          <div className="projects-grid">
            {/* Project 1 - Interview Generator */}
            <div className="project-card reveal stagger-1">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://github.com/Abrar-khan04/interview-generator-frontend" target="_blank" rel="noopener noreferrer" className="project-link">Frontend</a>
                    <a href="https://github.com/Abrar-khan04/interview-generator-backend" target="_blank" rel="noopener noreferrer" className="project-link">Backend</a>
                  </div>
                </div>
                <div className="project-icon">🎯</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Interview Generator</h3>
                <p className="project-description">AI-powered interview question generator that helps users prepare for job interviews with customized questions based on role and experience level.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Vite</span>
                  <span>Node.js</span>
                  <span>AI/ML</span>
                </div>
              </div>
            </div>

            {/* Project 2 - Auth App */}
            <div className="project-card reveal stagger-2">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://github.com/Abrar-khan04/Auth-App" target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
                  </div>
                </div>
                <div className="project-icon">🔐</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Auth-App</h3>
                <p className="project-description">A secure authentication system with user signup, login, and logout functionality. Features JWT-based authentication and bcrypt password encryption.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>PostgreSQL</span>
                  <span>JWT</span>
                </div>
              </div>
            </div>

            {/* Project 3 - Simon Game */}
            <div className="project-card reveal stagger-3">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://github.com/Abrar-khan04/Simon-Game" target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
                  </div>
                </div>
                <div className="project-icon">🎮</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Simon Game</h3>
                <p className="project-description">A classic memory game where players must repeat an increasingly complex sequence of colors and sounds. Tests and improves memory skills.</p>
                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>jQuery</span>
                </div>
              </div>
            </div>

            {/* Project 4 - Drum Kit */}
            <div className="project-card reveal stagger-4">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://github.com/Abrar-khan04/Drum-kit" target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
                  </div>
                </div>
                <div className="project-icon">🥁</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Drum Kit</h3>
                <p className="project-description">An interactive virtual drum kit that allows users to play drum sounds using keyboard keys or mouse clicks. Features realistic audio samples.</p>
                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>Audio API</span>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-cta reveal">
            <a href="https://github.com/Abrar-khan04" target="_blank" rel="noopener noreferrer" className="view-all-btn">
              View All Projects on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="case-study-section">
        <div className="case-study-container">
          <div className="section-header reveal">
            <span className="section-label">▶ Deep Dive</span>
            <h2 className="section-title">Case Study</h2>
            <p className="section-subtitle">Interview Questions Generator - A Full-Stack AI Application</p>
          </div>

          <div className="case-study-content">
            {/* Problem & Solution */}
            <div className="case-study-grid reveal">
              <div className="case-study-card problem-card">
                <div className="case-card-icon">🎯</div>
                <h3 className="case-card-title">The Problem</h3>
                <p className="case-card-text">
                  Preparing for technical interviews requires searching across multiple platforms. Most resources are static, poorly structured, or not tailored to an individual's skill level or job role.
                </p>
              </div>
              <div className="case-study-card solution-card">
                <div className="case-card-icon">💡</div>
                <h3 className="case-card-title">The Solution</h3>
                <p className="case-card-text">
                  A Full-Stack application that dynamically generates customized interview questions using AI, based on user-selected domain and difficulty level.
                </p>
              </div>
            </div>

            {/* System Architecture */}
            <div className="architecture-section reveal">
              <h3 className="subsection-title">System Architecture</h3>
              <div className="architecture-grid">
                <div className="arch-item">
                  <span className="arch-label">Frontend</span>
                  <div className="arch-tech">React + Tailwind CSS</div>
                  <p className="arch-desc">Responsive UI, state management, API communication</p>
                  <span className="arch-hosting">Hosted on Vercel</span>
                </div>
                <div className="arch-item">
                  <span className="arch-label">Backend</span>
                  <div className="arch-tech">FastAPI</div>
                  <p className="arch-desc">RESTful APIs, authentication, validation</p>
                  <span className="arch-hosting">Hosted on Railway</span>
                </div>
                <div className="arch-item">
                  <span className="arch-label">Database</span>
                  <div className="arch-tech">PostgreSQL</div>
                  <p className="arch-desc">User data & authentication storage</p>
                  <span className="arch-hosting">Hosted on Railway</span>
                </div>
                <div className="arch-item">
                  <span className="arch-label">AI Integration</span>
                  <div className="arch-tech">Google Gemini API</div>
                  <p className="arch-desc">Dynamic question generation with prompt engineering</p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="features-section reveal">
              <h3 className="subsection-title">Key Features</h3>
              <div className="features-list">
                <div className="feature-item">
                  <span className="feature-icon">🔐</span>
                  <div className="feature-content">
                    <h4>JWT & OAuth Authentication</h4>
                    <p>Secure login with Google OAuth integration</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🤖</span>
                  <div className="feature-content">
                    <h4>AI-Powered Generation</h4>
                    <p>Context-aware questions based on role & difficulty</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <div className="feature-content">
                    <h4>RESTful API Design</h4>
                    <p>Clean endpoints with proper validation</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📱</span>
                  <div className="feature-content">
                    <h4>Responsive Design</h4>
                    <p>Seamless experience on desktop & mobile</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="challenges-section reveal">
              <h3 className="subsection-title">Challenges & Solutions</h3>
              <div className="challenges-grid">
                <div className="challenge-item">
                  <div className="challenge-header">
                    <span className="challenge-num">01</span>
                    <h4>AI Response Consistency</h4>
                  </div>
                  <p className="challenge-problem">AI-generated responses varied in structure</p>
                  <p className="challenge-solution">→ Designed controlled prompts & backend parsing logic</p>
                </div>
                <div className="challenge-item">
                  <div className="challenge-header">
                    <span className="challenge-num">02</span>
                    <h4>Secure Authentication</h4>
                  </div>
                  <p className="challenge-problem">Managing secure login & protected routes</p>
                  <p className="challenge-solution">→ Implemented JWT with proper token validation</p>
                </div>
                <div className="challenge-item">
                  <div className="challenge-header">
                    <span className="challenge-num">03</span>
                    <h4>Frontend-Backend Integration</h4>
                  </div>
                  <p className="challenge-problem">Handling async requests & loading states</p>
                  <p className="challenge-solution">→ Structured API responses with clean UX states</p>
                </div>
              </div>
            </div>

            {/* Key Learnings */}
            <div className="learnings-section reveal">
              <h3 className="subsection-title">Key Learnings</h3>
              <div className="learnings-tags">
                <span>Scalable APIs with FastAPI</span>
                <span>JWT & OAuth Authentication</span>
                <span>AI Service Integration</span>
                <span>Responsive UI Design</span>
                <span>Error Handling & Edge Cases</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="case-study-cta reveal">
              <a href="https://interview-generator-frontend-oh2kv5x0x.vercel.app/" target="_blank" rel="noopener noreferrer" className="case-btn primary">
                🚀 Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="section-header reveal">
            <span className="section-label">▶ Get In Touch</span>
            <h2 className="section-title">Contact Me</h2>
            <p className="section-subtitle">Let's discuss your project or just say hello!</p>
          </div>

          <div className="contact-content">
            <div className="contact-info reveal-left">
              <h3 className="contact-heading">Let's Connect</h3>
              <p className="contact-text">
                I'm currently open to new opportunities and would love to hear from you. Whether you have a question, a project idea, or just want to connect, feel free to reach out!
              </p>

              <div className="contact-cards">
                <div className="contact-card">
                  <div className="contact-card-icon">📧</div>
                  <div className="contact-card-content">
                    <span className="contact-card-label">Email</span>
                    <a href="mailto:mohammedabrar7416@gmail.com" className="contact-card-value">mohammedabrar7416@gmail.com</a>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-card-icon">📍</div>
                  <div className="contact-card-content">
                    <span className="contact-card-label">Location</span>
                    <span className="contact-card-value">Hyderabad, India</span>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-card-icon">💼</div>
                  <div className="contact-card-content">
                    <span className="contact-card-label">Status</span>
                    <span className="contact-card-value available">Open to Opportunities</span>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h4>Follow Me</h4>
                <div className="social-links">
                  <a href="https://github.com/Abrar-khan04" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                    <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/abrar-khan-a21010394" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                    <span>LinkedIn</span>
                  </a>
                  <a href="mailto:mohammedabrar7416@gmail.com" className="social-link" aria-label="Email">
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper reveal-right">
              <form className="contact-form" action="https://formspree.io/f/xbddpozz" method="POST">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Project Inquiry" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Sidebar Navigation */}
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span className="sidebar-title">MENU</span>
          <button
            className="close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="close-icon"></span>
          </button>
        </div>

        <nav className="nav-menu">
          <ul>
            <li className="active"><a href="#home" onClick={() => setMenuOpen(false)}>HOME</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>ABOUT ME</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>SKILLS</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>PROJECTS</a></li>
            <li><a href="#case-studies" onClick={() => setMenuOpen(false)}>CASE STUDIES</a></li>
            <li><a href="#certifications" onClick={() => setMenuOpen(false)}>CERTIFICATIONS</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a></li>
          </ul>
        </nav>

        {/* Sidebar footer */}
        <div className="sidebar-footer">
          <div className="social-links">
            <a href="https://github.com/Abrar-khan04" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>
            <a href="https://www.linkedin.com/in/abrar-khan-a21010394" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
            <a href="mailto:mohammedabrar7416@gmail.com" aria-label="Email">@</a>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default App
