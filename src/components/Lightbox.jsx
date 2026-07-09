import { useEffect } from 'react'
import './Lightbox.css'

// Fullscreen image viewer. Pass src to open; onClose to dismiss.
export default function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    if (!src) return
    function onKey(e) { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [src, onClose])

  if (!src) return null
  return (
    <div className="lb-bg" onClick={onClose}>
      <button className="lb-close" onClick={onClose} aria-label="Close">✕</button>
      <img className="lb-img" src={src} alt={alt} onClick={e => e.stopPropagation()} />
    </div>
  )
}