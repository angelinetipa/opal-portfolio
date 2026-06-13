import { useEffect, useRef } from 'react'

// Opal sheen drifts behind everything; a soft "play of color" glow follows the cursor.
export default function BgAmbient() {
  const cursor = useRef(null)

  useEffect(() => {
    const el = cursor.current
    if (!el) return
    let raf = 0
    function move(e) {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${e.clientX - 90}px, ${e.clientY - 90}px, 0)`
      })
    }
    window.addEventListener('pointermove', move)
    return () => { window.removeEventListener('pointermove', move); cancelAnimationFrame(raf) }
  }, [])

  return (
    <div className="bg-ambient" aria-hidden="true">
      <div className="bg-sheen" />
      <div ref={cursor} className="bg-cursor" />
    </div>
  )
}