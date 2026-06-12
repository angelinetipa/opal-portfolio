import { useEffect, useState } from 'react'
import './Splash.css'

export default function Splash() {
  const [hidden, setHidden] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 1900)   // start fade
    const t2 = setTimeout(() => setGone(true), 2600)      // remove from DOM
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (gone) return null
  return (
    <div className={`splash ${hidden ? 'hide' : ''}`} aria-hidden="true">
      <div className="splash-gem opal-blob" />
      <div className="splash-name">
        angeline<span className="opal-text">.tipa</span>
      </div>
      <div className="splash-mono">loading portfolio…</div>
    </div>
  )
}
