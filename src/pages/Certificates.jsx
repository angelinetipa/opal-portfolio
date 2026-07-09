import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { certificates as seedCerts } from '../constants/data.js'
import { useCollection } from '../lib/useCollection.js'
import './Certificates.css'

export default function Certificates() {
  const { rows: certificates } = useCollection('certificates', seedCerts)
  const [zoom, setZoom] = useState(null)

  return (
    <main className="page container">
      <Reveal>
        <p className="eyebrow">credentials.verify()</p>
        <h2 className="section-title">Certificates</h2>
        <p className="section-sub">Workshops, trainings, and credentials — this shelf keeps growing.</p>
      </Reveal>

      <div className="grid-3">
        {certificates.map((c, i) => (
          <Reveal key={c.id || i} delay={(i % 3) * 100}>
            <article className="clay clay-hover glow-teal cert-card">
              <div
                className={`cert-img ${c.image ? 'cert-clickable' : 'ph'}`}
                onClick={() => c.image && setZoom(c)}
                role={c.image ? 'button' : undefined}
                tabIndex={c.image ? 0 : undefined}
                onKeyDown={e => { if (c.image && e.key === 'Enter') setZoom(c) }}
              >
                {c.image ? (
                  <>
                    <img src={c.image} alt={c.title} />
                    <span className="cert-zoom">⤢ View</span>
                  </>
                ) : 'certificate — coming soon'}
              </div>
              <div className="cert-body">
                <h3>{c.title}</h3>
                <p>{c.issuer} · {c.year}</p>
                {c.link && (
                  <a className="cert-verify" href={c.link} target="_blank" rel="noreferrer">
                    Verify ↗
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Lightbox src={zoom?.image} alt={zoom?.title} onClose={() => setZoom(null)} />
    </main>
  )
}