import { useEffect } from 'react'

// Opens when a project card is clicked: full image + full details.
export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    function onKey(e) { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="pm-bg" onClick={onClose}>
      <div className="clay pm" onClick={e => e.stopPropagation()}>
        <button className="pm-close" onClick={onClose} aria-label="Close">✕</button>

        {project.image && (
          <div className="pm-img">
            <img src={project.image} alt={project.title} />
          </div>
        )}

        <div className="pm-body">
          {project.subtitle && <p className="proj-sub">{project.subtitle}</p>}
          <h2 className="pm-title">{project.title}</h2>
          {project.description && <p className="pm-desc">{project.description}</p>}
          {project.tags?.length > 0 && (
            <div className="proj-tags">
              {project.tags.map(t => <span key={t} className="chip">{t}</span>)}
            </div>
          )}
          {project.link && (
            <a className="btn btn-primary pm-link" href={project.link} target="_blank" rel="noreferrer">
              Visit project →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}