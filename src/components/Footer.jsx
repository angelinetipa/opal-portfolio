import { Link } from 'react-router-dom'
import { profile as seedProfile } from '../constants/data.js'
import { useContent } from '../lib/useContent.js'
import './Footer.css'

export default function Footer() {
  const { value: profile } = useContent('profile', seedProfile)
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-mono">© {new Date().getFullYear()} {profile.name}</span>
        <span className="footer-note">Designed & built with care — and a little help from Claude AI</span>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <Link to="/admin" className="footer-admin" title="Admin">•</Link>
        </div>
      </div>
    </footer>
  )
}
