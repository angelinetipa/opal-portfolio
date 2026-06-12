import Reveal from '../components/Reveal.jsx'
import { artworks } from '../constants/data.js'
import './Gallery.css'

export default function Gallery() {
  return (
    <main className="page container">
      <Reveal>
        <p className="eyebrow">render(creativity)</p>
        <h2 className="section-title">Beyond the code</h2>
        <p className="section-sub">
          I draw realistic portraits in graphite, referenced from real people — the same
          patience and precision I bring to engineering, on paper.
        </p>
      </Reveal>

      <div className="grid-2 gallery-grid">
        {artworks.map((a, i) => (
          <Reveal key={a.id} delay={(i % 2) * 120}>
            <figure className="clay clay-hover glow-blue art-card">
              <div className="art-img ph">
                {a.image ? <img src={a.image} alt={a.title} /> : 'artwork — coming soon'}
              </div>
              <figcaption>
                <strong>{a.title}</strong>
                <span>{a.medium}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </main>
  )
}
