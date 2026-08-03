import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { certificates as seedCerts } from '../constants/data.js'
import { recognitionSeed, featuredRecognition } from '../constants/recognition.js'
import { useCollection } from '../lib/useCollection.js'
import './Credentials.css'

/**
 * Compact credentials block for the Home page.
 * Certifications on the left, headline recognition on the right.
 * The full grouped list lives on the Experience page.
 */
export default function Credentials({ limit = 5 }) {
  const { rows: certs } = useCollection('certificates', seedCerts)
  const { rows: recognition } = useCollection('recognition', recognitionSeed)

  const allCerts = certs || []
  const shownCerts = allCerts.slice(0, limit)
  const shownAwards = featuredRecognition(recognition || []).slice(0, 4)

  if (shownCerts.length === 0 && shownAwards.length === 0) return null

  return (
    <section className="container credentials">
      <Reveal>
        <p className="eyebrow">credentials.verify()</p>
        <h2 className="section-title">Certifications &amp; recognition</h2>
        <p className="section-sub">
          Coursework I finished on my own time, and the work that got noticed.
        </p>
      </Reveal>

      <div className="cred-grid">
        {/* ---------- CERTIFICATIONS ---------- */}
        {shownCerts.length > 0 && (
          <Reveal delay={100}>
            <div className="clay cred-card">
              <div className="cred-head">
                <h3>Certifications</h3>
                <span className="cred-count">{allCerts.length}</span>
              </div>

              <ul className="cred-list">
                {shownCerts.map(c => (
                  <li key={c.id || c.title} className="cred-row">
                    <div className="cred-row-main">
                      <span className="cred-title">{c.title}</span>
                      <span className="cred-issuer">{c.issuer}</span>
                    </div>
                    {c.year && <span className="cred-year">{c.year}</span>}
                  </li>
                ))}
              </ul>

              <Link to="/certificates" className="cred-more">
                {allCerts.length > shownCerts.length
                  ? `View all ${allCerts.length} certificates →`
                  : 'View certificates →'}
              </Link>
            </div>
          </Reveal>
        )}

        {/* ---------- RECOGNITION ---------- */}
        {shownAwards.length > 0 && (
          <Reveal delay={180}>
            <div className="clay cred-card">
              <div className="cred-head">
                <h3>Recognition</h3>
              </div>

              <ul className="cred-list">
                {shownAwards.map(a => (
                  <li key={a.id || a.title} className="cred-row">
                    <div className="cred-row-main">
                      <span className="cred-title">{a.title}</span>
                      {a.detail && <span className="cred-issuer">{a.detail}</span>}
                    </div>
                    {a.year && <span className="cred-year">{a.year}</span>}
                  </li>
                ))}
              </ul>

              <Link to="/experience" className="cred-more">
                See the full record →
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}