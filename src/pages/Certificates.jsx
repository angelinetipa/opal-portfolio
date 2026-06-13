import Reveal from '../components/Reveal.jsx'
import { certificates as seedCerts } from '../constants/data.js'
import { useCollection } from '../lib/useCollection.js'
import './Certificates.css'

export default function Certificates() {
  const { rows: certificates } = useCollection('certificates', seedCerts)
  return (
    <main className="page container">
      <Reveal>
        <p className="eyebrow">credentials.verify()</p>
        <h2 className="section-title">Certificates</h2>
        <p className="section-sub">Workshops, trainings, and credentials — this shelf keeps growing.</p>
      </Reveal>

      <div className="grid-3">
        {certificates.map((c, i) => (
          <Reveal key={i} delay={(i % 3) * 100}>
            <article className="clay clay-hover glow-teal cert-card">
              <div className="cert-img ph">
                {c.image ? <img src={c.image} alt={c.title} /> : 'certificate — coming soon'}
              </div>
              <div className="cert-body">
                <h3>{c.title}</h3>
                <p>{c.issuer} · {c.year}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </main>
  )
}
