import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { profile as seedProfile, stats as seedStats, toolkit as seedToolkit, education as seedEducation } from '../constants/data.js'
import { useContent } from '../lib/useContent.js'
import { useCount } from '../lib/useCount.js'
import { experience as seedExp, projects as seedProj } from '../constants/data.js'
import './Home.css'

export default function Home() {
  const { value: profile } = useContent('profile', seedProfile)
  const { value: stats } = useContent('stats', seedStats)
  const { value: toolkit } = useContent('toolkit', seedToolkit)
  const { value: education } = useContent('education', seedEducation)
  const expCount = useCount('experience', seedExp.length)
  const projCount = useCount('projects', seedProj.length)
  const displayStats = [
    { value: String(expCount), label: 'Internships / work experiences' },
    { value: String(projCount), label: 'Academic & personal projects' },
    ...stats,
  ]
  return (
    <main className="page">
      {/* ============ HERO ============ */}
      <section className="container hero">
        <div className="hero-text">
          <Reveal>
            <p className="eyebrow">SELECT * FROM portfolio WHERE owner = 'angeline';</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="hero-title">
              Hi, I'm<br />
              <span className="opal-text">{profile.name}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="hero-tagline">
              {profile.tagline}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="hero-chips">
              {profile.targets.map(t => <span key={t} className="chip">{t}</span>)}
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="hero-cta">
              <Link to="/projects" className="btn btn-primary">View projects →</Link>
              <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="hero-visual-wrap">
          <div className="hero-visual">
            <div className="opal-blob hero-gem" aria-hidden="true" />
            <div className="hero-photo clay ph">profile photo — coming soon</div>
            <div className="float-card clay-soft fc-1">
              <span className="fc-num opal-text">BSCpE</span>
              <span className="fc-label">Big Data · PUP</span>
            </div>
            <div className="float-card clay-soft fc-2">
              <span className="fc-num opal-text">DOST</span>
              <span className="fc-label">JLSS Scholar</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ STATS ============ */}
      <section className="container stats">
        {displayStats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <div className="stat clay clay-hover glow-teal">
              <span className="stat-value opal-text">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ============ ABOUT ============ */}
      <section className="container about">
        <Reveal>
          <p className="eyebrow">about_me.describe()</p>
          <h2 className="section-title">Careful work, with a fingerprint.</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal delay={100}>
            <div className="about-copy">
              {profile.about.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="clay edu-card">
              <p className="eyebrow" style={{ marginBottom: 18 }}>education</p>
              {education.map(e => (
                <div key={e.school} className="edu-row">
                  <div>
                    <strong>{e.school}</strong>
                    <p className="edu-degree">{e.degree}</p>
                  </div>
                  <span className="chip">{e.period}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ TOOLKIT ============ */}
      <section className="container skills">
        <Reveal>
          <p className="eyebrow">// tools I build with</p>
          <h2 className="section-title">My toolkit</h2>
          <p className="section-sub">The stack I reach for — across data, software, and hardware.</p>
        </Reveal>
        <div className="grid-3 toolkit-grid">
          {toolkit.map((t, i) => (
            <Reveal key={t.group} delay={i * 110}>
              <div className="clay clay-hover glow-teal tk-card">
                <div className="tk-head">
                  <span className="tk-icon opal-text">{t.icon}</span>
                  <h3>{t.group}</h3>
                </div>
                <div className="tk-items">
                  {t.items.map(item => <span key={item} className="chip">{item}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
