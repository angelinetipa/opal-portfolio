import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { artworks as seedArt } from '../constants/data.js'
import { useCollection } from '../lib/useCollection.js'
import './Gallery.css'

export default function Gallery() {
  const { rows: artworks } = useCollection('artworks', seedArt)
  const [zoom, setZoom] = useState(null)

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

      <div className="grid-3 gallery-grid">
        {artworks.map((a, i) => (
          <Reveal key={a.id || i} delay={(i % 2) * 120}>
            <figure className="clay clay-hover glow-blue art-card">
              <div
                className={`art-img ${a.image ? 'art-clickable' : 'ph'}`}
                onClick={() => a.image && setZoom(a)}
                role={a.image ? 'button' : undefined}
                tabIndex={a.image ? 0 : undefined}
                onKeyDown={e => { if (a.image && e.key === 'Enter') setZoom(a) }}
              >
                {a.image ? (
                  <>
                    <img src={a.image} alt={a.title} />
                    <span className="art-zoom">⤢ View</span>
                  </>
                ) : 'artwork — coming soon'}
              </div>
              <figcaption>
                <strong>{a.title}</strong>
                <span>{a.medium}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Lightbox src={zoom?.image} alt={zoom?.title} onClose={() => setZoom(null)} />
    </main>
  )
}