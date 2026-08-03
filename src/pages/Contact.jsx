import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import { profile as seedProfile } from '../constants/data.js'
import { useContent } from '../lib/useContent.js'
import { composeUrl, copyEmail } from '../lib/mail.js'
import './Contact.css'

export default function Contact() {
  const { value: profile } = useContent('profile', seedProfile)
  const [copied, setCopied] = useState(false)

  // mail.js owns *how* to copy; this component owns how it looks.
  async function handleCopy() {
    const ok = await copyEmail(profile.email)
    if (!ok) return
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  const linkedinLabel = (profile.linkedin || '').replace(/^https?:\/\/(www\.)?/, '')
  const githubLabel = (profile.github || '').replace(/^https?:\/\/(www\.)?/, '')

  return (
    <main className="page container">
      <Reveal>
        <p className="eyebrow">INSERT INTO opportunities</p>
        <h2 className="section-title">Let's work together.</h2>
        <p className="section-sub">
          Open to entry-level roles in software development, data engineering,
          data analytics, and QA.
        </p>
        {profile.status && (
          <span className="contact-status"><span className="cs-dot" />{profile.status}</span>
        )}
      </Reveal>

      <div className="contact-grid">
        <Reveal delay={100}>
          <div className="clay contact-card">
            <p className="eyebrow">direct</p>
            <div className="c-row c-email">
              <span className="c-label">Email</span>
              <span className="c-email-val">
                {profile.email}
                <button className="c-copy" onClick={handleCopy} title="Copy email">
                  {copied ? '✓ copied' : 'copy'}
                </button>
              </span>
            </div>
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
              <span className="c-label">GitHub</span><span>{githubLabel}</span>
            </a>
            <a className="c-row" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="c-label">LinkedIn</span><span>{linkedinLabel}</span>
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={300}>
        <div className="contact-cta">
          <a
            className="btn btn-primary"
            href={composeUrl(profile.email)}
            target="_blank"
            rel="noreferrer"
          >
            Send me an email →
          </a>
          {profile.resume && (
            <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noreferrer">
              Resume (PDF)
            </a>
          )}
          {profile.cv && (
            <a className="btn btn-ghost" href={profile.cv} target="_blank" rel="noreferrer">
              Full CV ↓
            </a>
          )}
        </div>
      </Reveal>
    </main>
  )
}