import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { openConsole } from './CommandConsole.jsx'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/gallery', label: 'Art' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav-wrap">
      <nav className="nav clay-soft">
        <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <span className="nav-gem opal-blob" aria-hidden="true" />
          <span>angeline<span className="opal-text">.tipa</span></span>
        </NavLink>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {/* Resume lives in the hero, the contact page, and the console,
              so the nav keeps a single quiet utility instead of two pills. */}
          <button
            className="cc-navbtn"
            onClick={() => { setOpen(false); openConsole() }}
            aria-label="Ask about Angeline"
            title="Ask about me (Ctrl/Cmd + K)"
          >
            <span className="cc-navbtn-icon" aria-hidden="true">⌕</span>
            <span className="cc-navbtn-text">Ask about me</span>
            <kbd className="cc-kbd">⌘K</kbd>
          </button>

          <button
            className="theme-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title="Toggle theme"
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>

          <button className="burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </header>
  )
}