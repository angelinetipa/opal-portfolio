import { useState } from 'react'
import Reveal from './Reveal.jsx'
import {
  recognitionSeed,
  groupRecognition,
  earlierCount,
} from '../constants/recognition.js'
import { useCollection } from '../lib/useCollection.js'
import './Recognition.css'

function Item({ item }) {
  return (
    <li className="rc-item">
      <div className="rc-item-main">
        <span className="rc-title">{item.title}</span>
        {item.detail && <span className="rc-detail">{item.detail}</span>}
      </div>
      {item.year && <span className="rc-year">{item.year}</span>}
    </li>
  )
}

export default function Recognition() {
  const { rows } = useCollection('recognition', recognitionSeed)
  const [showEarlier, setShowEarlier] = useState(false)

  const all = rows || []
  const groups = groupRecognition(all, showEarlier)
  const hidden = earlierCount(all)

  if (groups.length === 0) return null

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
        {groups.map((g, i) => (
          <Reveal key={g.id} delay={i * 90}>
            <div className="clay rc-card">
              <div className="rc-head">
                <span className="rc-icon" aria-hidden="true">{g.icon}</span>
                <h3>{g.label}</h3>
              </div>
              {g.note && <p className="rc-note">{g.note}</p>}
              <ul className="rc-list">
                {g.items.map(item => (
                  <Item key={item.id || item.title} item={item} />
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {hidden > 0 && (
        <Reveal>
          <div className="rc-toggle-row">
            <button
              className="rc-toggle"
              onClick={() => setShowEarlier(v => !v)}
              aria-expanded={showEarlier}
            >
              {showEarlier
                ? '− Hide earlier honors'
                : `+ Show ${hidden} earlier honors`}
            </button>
          </div>
        </Reveal>
      )}
    </section>
  )
}