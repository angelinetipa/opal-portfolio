import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import { projects as seedProjects } from '../constants/data.js'
import { useCollection } from '../lib/useCollection.js'
import './Projects.css'

const glow = { teal: 'glow-teal', blue: 'glow-blue', violet: 'glow-blue' }

export default function Projects() {
  const { rows: projects } = useCollection('projects', seedProjects)
  const [active, setActive] = useState(null)

  return (
    <main className="page container">
      <Reveal>
        <p className="eyebrow">projects.orderBy('impact')</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">From data dashboards and databases to apps, circuits, and robots. Tap a card for the full story.</p>
      </Reveal>

      <div className="grid-2">
        {projects.map((p, i) => (
          <Reveal key={i} delay={(i % 2) * 120}>
            <article
              className={`clay clay-hover ${glow[p.accent]} proj-card`}
              onClick={() => setActive(p)}
              role="button"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter') setActive(p) }}
            >
              <div className="proj-img ph">
                {p.image ? <img src={p.image} alt={p.title} /> : 'project image — coming soon'}
              </div>
              <div className="proj-body">
                <p className="proj-sub">{p.subtitle}</p>
                <h3>{p.title}</h3>
                <p className="proj-desc">{p.description}</p>
                <div className="proj-tags">
                  {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
                </div>
                <span className="proj-view">View details →</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </main>
  )
}