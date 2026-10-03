import { useEffect } from 'react'

// Cards with the .clay-hover class lean slightly toward the cursor,
// like turning a stone in your hand.
// One listener for the whole site: no per-card code, no per-card cost.
// Off on touch screens and when the visitor asks for reduced motion.
// opal-motion.css reads --rx / --ry to do the actual tilt.

const MAX_DEG = 3

export default function TiltEffect() {
  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || calm) return

    let current = null
    let raf = 0

    function reset(el) {
      if (!el) return
      el.style.removeProperty('--rx')
      el.style.removeProperty('--ry')
    }

    function onMove(e) {
      const el = e.target.closest ? e.target.closest('.clay-hover') : null

      if (el !== current) {
        reset(current)
        current = el
      }
      if (!el) return

      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5   // -0.5 to 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        el.style.setProperty('--rx', `${(-py * MAX_DEG * 2).toFixed(2)}deg`)
        el.style.setProperty('--ry', `${(px * MAX_DEG * 2).toFixed(2)}deg`)
      })
    }

    function onLeaveWindow() {
      cancelAnimationFrame(raf)
      reset(current)
      current = null
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeaveWindow)
    window.addEventListener('blur', onLeaveWindow)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeaveWindow)
      window.removeEventListener('blur', onLeaveWindow)
      cancelAnimationFrame(raf)
      reset(current)
    }
  }, [])

  return null
}