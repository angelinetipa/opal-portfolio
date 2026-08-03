import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { recognition } from '../constants/recognition.js'
import './Recognition.css'

function Item({ item }) {
  return (
    <li className="rc-item">
      <div className="rc-item-main">
        <span className="rc-title">{item.title}</span>
        {item.detail && <span className="rc-detail">{item.detail}</span>}
      </div>
      <span className="rc-year">{item.year}</span>
    </li>
  )
}

export default function Recognition() {
  const [showEarlier, setShowEarlier] = useState(false)

  // Groups that still have something to show once earlier items are hidden
  const visible = recognition
    .map(g => ({
      ...g,
      items: showEarlier ? g.items : g.items.filter(i => !i.earlier),
    }))
    .filter(g => g.items.length > 0)

  const earlierCount = recognition
    .flatMap(g => g.items)
    .filter(i => i.earlier).length

  return (
    <section className="recognition">
      <Reveal>
        <p className="eyebrow">recognition.groupBy('trait')</p>
        <h2 className="section-title">What the record shows</h2>
        <p className="section-sub">
          Grouped by what each one demonstrates, rather than what kind of award it was.
        </p>
      </Reveal>

      <div className="rc-grid">
        {visible.map((g, i) => (
          <Reveal key={g.id} delay={i * 90}>
            <div className="clay rc-card">
              <div className="rc-head">
                <span className="rc-icon" aria-hidden="true">{g.icon}</span>
                <h3>{g.group}</h3>
              </div>
              {g.note && <p className="rc-note">{g.note}</p>}
              <ul className="rc-list">
                {g.items.map(item => (
                  <Item key={item.title} item={item} />
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {earlierCount > 0 && (
        <Reveal>
          <div className="rc-toggle-row">
            <button
              className="rc-toggle"
              onClick={() => setShowEarlier(v => !v)}
              aria-expanded={showEarlier}
            >
              {showEarlier
                ? '− Hide earlier honors'
                : `+ Show ${earlierCount} earlier honors (2015–2018)`}
            </button>
          </div>
        </Reveal>
      )}
    </section>
  )
}