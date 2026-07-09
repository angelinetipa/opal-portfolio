import { useEffect, useState } from 'react'
import './Splash.css'

const QUERY = "SELECT * FROM portfolio WHERE owner = 'angeline';"

export default function Splash() {
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [gone, setGone] = useState(false)

  // type the query character by character
  useEffect(() => {
    let i = 0
    const typer = setInterval(() => {
      i += 1
      setTyped(QUERY.slice(0, i))
      if (i >= QUERY.length) {
        clearInterval(typer)
        setDone(true)
      }
    }, 28)
    return () => clearInterval(typer)
  }, [])

  // fade out after the result line shows
  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 2500)
    const t2 = setTimeout(() => setGone(true), 3100)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (gone) return null
  return (
    <div className={`splash ${hidden ? 'hide' : ''}`} aria-hidden="true">
      <div className="splash-term clay">
        <div className="st-bar">
          <span className="st-dots"><span /><span /><span /></span>
          <span className="st-title">opal.db — psql</span>
        </div>
        <div className="st-body">
          <p className="st-line">
            <span className="st-prompt">opal=#</span> {typed}
            <span className="st-caret" />
          </p>
          {done && (
            <>
              <p className="st-line st-result">
                <span className="st-gem opal-blob" /> angeline<span className="opal-text">.tipa</span> · BSCpE · Big Data
              </p>
              <p className="st-line st-meta">(1 row) · rendering portfolio…</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}