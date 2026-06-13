import Reveal from '../components/Reveal.jsx'
import { experience as seedExp, awards as seedAwards } from '../constants/data.js'
import { useCollection } from '../lib/useCollection.js'
import { useContent } from '../lib/useContent.js'
import './Experience.css'

export default function Experience() {
  const { rows: experience } = useCollection('experience', seedExp)
  const { value: awards } = useContent('awards', seedAwards)
  return (
    <main className="page container">
      <Reveal>
        <p className="eyebrow">ORDER BY date DESC</p>
        <h2 className="section-title">Experience</h2>
        <p className="section-sub">Internships and work — QA, IT support, full-stack builds, and data records.</p>
      </Reveal>

      <div className="timeline">
        {experience.map((e, i) => (
          <Reveal key={i} delay={i * 120}>
            <article className="t-item">
              <div className="t-dot opal-blob" aria-hidden="true" />
              <div className="clay clay-hover glow-blue t-card">
                <div className="t-head">
                  <div>
                    <h3>{e.role}</h3>
                    <p className="t-org">{e.org} · {e.place}</p>
                  </div>
                  <span className="chip">{e.period}</span>
                </div>
                <ul className="t-points">
                  {e.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
                <div className="t-tags">
                  {e.tags.map(t => <span key={t} className="chip">{t}</span>)}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="clay awards">
          <p className="eyebrow">awards & highlights</p>
          <ul className="awards-list">
            {awards.map(a => <li key={a}>{a}</li>)}
          </ul>
        </div>
      </Reveal>
    </main>
  )
}
