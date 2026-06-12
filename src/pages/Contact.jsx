import Reveal from '../components/Reveal.jsx'
import { profile } from '../constants/data.js'
import './Contact.css'

export default function Contact() {
  return (
    <main className="page container">
      <Reveal>
        <p className="eyebrow">INSERT INTO opportunities</p>
        <h2 className="section-title">Let's work together.</h2>
        <p className="section-sub">
          Open to internships and entry roles in data analytics, data engineering, and software development.
        </p>
      </Reveal>

      <div className="contact-grid">
        <Reveal delay={100}>
          <div className="clay contact-card">
            <p className="eyebrow">direct</p>
            <a className="c-row" href={`mailto:${profile.email}`}>
              <span className="c-label">Email</span><span>{profile.email}</span>
            </a>
            <div className="c-row">
              <span className="c-label">Phone</span><span>{profile.phone}</span>
            </div>
            <div className="c-row">
              <span className="c-label">Location</span><span>{profile.location}</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="clay contact-card">
            <p className="eyebrow">profiles</p>
            <a className="c-row" href={profile.github} target="_blank" rel="noreferrer">
              <span className="c-label">GitHub</span><span>github.com/angelinetipa</span>
            </a>
            <a className="c-row" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="c-label">LinkedIn</span><span>linkedin.com/in/maatipa</span>
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={300}>
        <div className="contact-cta">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>Send me an email →</a>
        </div>
      </Reveal>
    </main>
  )
}
