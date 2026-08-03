import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import BrowserFrame from '../components/BrowserFrame.jsx'
import {
  profile as seedProfile,
  toolkit as seedToolkit,
  education as seedEducation,
  projects as seedProj,
} from '../constants/data.js'
import { useContent } from '../lib/useContent.js'
import { useCollection } from '../lib/useCollection.js'
import './Home.css'
import ScrollCue from '../components/ScrollCue.jsx'
import '../components/ScrollCue.css'
import SocialLinks from '../components/SocialLinks.jsx'
import Credentials from '../components/Credentials.jsx'

const glow = { teal: 'glow-teal', blue: 'glow-blue', violet: 'glow-violet' }

export default function Home() {
  const { value: profile } = useContent('profile', seedProfile)
  const { value: toolkit } = useContent('toolkit', seedToolkit)
  const { value: education } = useContent('education', seedEducation)
  const { rows: projects } = useCollection('projects', seedProj)

  const featured = projects.filter(p => (p.category || 'featured') !== 'coursework').slice(0, 3)

  return (
    <main className="page">
      {/* ============ HERO ============ */}
      <section className="container hero">
        <div className="hero-text">
          <Reveal>
            {profile.status && (
              <div className="hero-status-row">
                <span className="hero-status"><span className="hs-dot" />{profile.status}</span>
              </div>
            )}
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
            <p className="hero-chips-label">Targeting roles in:</p>
            <div className="hero-chips">
              {profile.targets.map(t => <span key={t} className="chip">{t}</span>)}
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="hero-cta">
              <Link to="/projects" className="btn btn-primary">View projects →</Link>
              {profile.resume && (
                <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-ghost">Resume (PDF)</a>
              )}
              <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <SocialLinks profile={profile} />
          </Reveal>
        </div>

        <Reveal delay={200} className="hero-visual-wrap">
          <div className="hero-visual">
            <div className="opal-blob hero-gem" aria-hidden="true" />
            <div className="hero-photo clay ph">
              {profile.photo ? <img src={profile.photo} alt={profile.name} /> : 'profile photo — coming soon'}
            </div>
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
        <ScrollCue />
      </section>

      {/* ============ SELECTED WORK ============ */}
      {featured.length > 0 && (
        <section className="container selected">
          <Reveal>
            <p className="eyebrow">selected_work.top(3)</p>
            <h2 className="section-title">Selected work</h2>
            <p className="section-sub">Deployed, real-world builds — across data, software, and IoT.</p>
          </Reveal>
          <div className="grid-3 sel-grid">
            {featured.map((p, i) => (
              <Reveal key={p.id || i} delay={i * 110}>
                <article className={`clay clay-hover ${glow[p.accent] || 'glow-teal'} sel-card`}>
                  <BrowserFrame src={p.image} alt={p.title} url={p.live} />
                  <div className="sel-body">
                    <p className="sel-sub">{p.subtitle}</p>
                    <h3>{p.title}</h3>
                    <div className="sel-actions">
                      {p.live && (
                        <a className="btn btn-primary btn-sm" href={p.live} target="_blank" rel="noreferrer">Live ↗</a>
                      )}
                      {p.repo && (
                        <a className="btn btn-ghost btn-sm" href={p.repo} target="_blank" rel="noreferrer">Code ↗</a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="sel-more">
              <Link to="/projects" className="btn btn-ghost">View all projects →</Link>
            </div>
          </Reveal>
        </section>
      )}

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
      <Credentials />

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