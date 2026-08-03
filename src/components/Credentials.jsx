import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import {
  certificates as seedCerts,
  awards as seedAwards,
} from '../constants/data.js'
import { useCollection } from '../lib/useCollection.js'
import { useContent } from '../lib/useContent.js'
import './Credentials.css'

/**
 * Compact credentials block for the Home page.
 * Certifications on the left, awards on the right.
 * Both capped at `limit` — the full list lives on its own page.
 */
export default function Credentials({ limit = 5 }) {
  const { rows: certs } = useCollection('certificates', seedCerts)
  const { value: awards } = useContent('awards', seedAwards)

  const allCerts = certs || []
  const allAwards = Array.isArray(awards) ? awards : []

  const shownCerts = allCerts.slice(0, limit)
  const shownAwards = allAwards.slice(0, limit)
  const moreAwards = allAwards.length - shownAwards.length

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

        {/* ---------- AWARDS ---------- */}
        {shownAwards.length > 0 && (
          <Reveal delay={180}>
            <div className="clay cred-card cred-awards">
              <div className="cred-head">
                <h3>Awards &amp; honors</h3>
                <span className="cred-count">{allAwards.length}</span>
              </div>

              <ul className="award-list">
                {shownAwards.map((a, i) => (
                  <li key={i} className="award-row">
                    <span className="award-mark" aria-hidden="true" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              {moreAwards > 0 && (
                <p className="cred-note">+{moreAwards} more in my CV</p>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}