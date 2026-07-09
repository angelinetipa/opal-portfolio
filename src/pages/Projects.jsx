import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import BrowserFrame from '../components/BrowserFrame.jsx'
import { projects as seedProjects } from '../constants/data.js'
import { useCollection } from '../lib/useCollection.js'
import './Projects.css'

const glow = { teal: 'glow-teal', blue: 'glow-blue', violet: 'glow-violet' }

// stop the card's modal from opening when a link is clicked
function stop(e) { e.stopPropagation() }

export default function Projects() {
  const { rows: projects } = useCollection('projects', seedProjects)
  const [active, setActive] = useState(null)

  const featured = projects.filter(p => (p.category || 'featured') !== 'coursework')
  const coursework = projects.filter(p => p.category === 'coursework')

  return (
    <main className="page container">
      <Reveal>
        <p className="eyebrow">projects.orderBy('impact')</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">
          Deployed, real-world builds — dashboards, apps, and IoT. Tap a card for the full story, or open it live.
        </p>
      </Reveal>

      <div className="grid-2">
        {featured.map((p, i) => (
          <Reveal key={p.id || i} delay={(i % 2) * 120}>
            <article
              className={`clay clay-hover ${glow[p.accent] || 'glow-teal'} proj-card`}
              onClick={() => setActive(p)}
              role="button"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter') setActive(p) }}
            >
              <BrowserFrame src={p.image} alt={p.title} url={p.live} fit={p.fit} />

              <div className="proj-body">
                <p className="proj-sub">{p.subtitle}</p>
                <h3>{p.title}</h3>
                <p className="proj-desc">{p.description}</p>
                <div className="proj-tags">
                  {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
                </div>

                <div className="proj-actions">
                  {p.live && (
                    <a className="btn btn-primary btn-sm" href={p.live} target="_blank" rel="noreferrer" onClick={stop}>
                      Live ↗
                    </a>
                  )}
                  {p.repo && (
                    <a className="btn btn-ghost btn-sm" href={p.repo} target="_blank" rel="noreferrer" onClick={stop}>
                      Code ↗
                    </a>
                  )}
                  <span className="proj-view">Details →</span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {coursework.length > 0 && (
        <Reveal>
          <details className="coursework">
            <summary>
              <span className="cw-label">Coursework &amp; fundamentals</span>
              <span className="cw-count">{coursework.length} projects</span>
            </summary>
            <div className="cw-grid">
              {coursework.map((p, i) => (
                <article
                  key={p.id || i}
                  className="clay-soft cw-card"
                  onClick={() => setActive(p)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => { if (e.key === 'Enter') setActive(p) }}
                >
                  <p className="proj-sub">{p.subtitle}</p>
                  <h4>{p.title}</h4>
                  <div className="proj-tags">
                    {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </details>
        </Reveal>
      )}

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </main>
  )
}