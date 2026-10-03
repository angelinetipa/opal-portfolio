import { useEffect, useRef } from 'react'

// Opal sheen drifts behind everything; a soft "play of color" glow follows the cursor.
// It also publishes page scroll progress (0 to 1) as the CSS variable --scroll,
// which opal-motion.css uses to slide light across the cards.
export default function BgAmbient() {
  const cursor = useRef(null)

  // cursor glow
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

  // scroll progress
  useEffect(() => {
    const root = document.documentElement
    let raf = 0
    function update() {
      raf = 0
      const max = root.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      root.style.setProperty('--scroll', p.toFixed(4))
    }
    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="bg-ambient" aria-hidden="true">
      <div className="bg-sheen" />
      <div ref={cursor} className="bg-cursor" />
    </div>
  )
}