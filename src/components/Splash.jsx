import { useEffect, useState } from 'react'
import './Splash.css'

// ------------------------------------------------------------
// INTRO — a dark stone gets polished while a short query runs.
//
// Query: one clause per line, columns named (no "*"), so it reads
// like plain English: "select these things from the portfolio
// where the owner is angeline."
// The result table below it uses the same three columns.
// ------------------------------------------------------------
const QUERY = [
  ['SELECT', ' name, role, status'],
  ['FROM', '   portfolio'],
  ['WHERE', "  owner = 'angeline';"],
]
const FULL = QUERY.map(([k, r]) => k + r)
const TOTAL = FULL.reduce((sum, l) => sum + l.length, 0)
const STARTS = FULL.map((_, i) => FULL.slice(0, i).reduce((s, l) => s + l.length, 0))

// result columns match the SELECT above
const COLS = [
  ['name', 'Angeline Tipa'],
  ['role', 'Data & Software'],
  ['status', 'open to work'],
]
const widths = COLS.map(([h, v]) => Math.max(h.length, v.length))
const cell = (text, w) => ` ${text.padEnd(w)} `
const HEADER = COLS.map(([h], i) => cell(h, widths[i])).join('|')
const DIVIDER = widths.map(w => '-'.repeat(w + 2)).join('+')
const ROW = COLS.map(([, v], i) => cell(v, widths[i])).join('|')

// timing in ms (about 3 seconds in total)
const TYPE_MS = 24      // typing speed, higher = slower
const POLISH_AT = 900   // when the stone starts polishing
const SWEEP_AT = 2600   // when the light passes over it
const HIDE_AT = 3600    // when the screen fades out
const REMOVE_AFTER = 600 // unmount after the fade

export default function Splash() {
  const [calm] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  const [n, setN] = useState(calm ? TOTAL : 0)        // characters typed
  const [polish, setPolish] = useState(calm)
  const [sweep, setSweep] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [gone, setGone] = useState(false)

  // type the query
  useEffect(() => {
    if (calm) return
    const typer = setInterval(() => {
      setN(v => {
        if (v + 1 >= TOTAL) clearInterval(typer)
        return Math.min(TOTAL, v + 1)
      })
    }, TYPE_MS)
    return () => clearInterval(typer)
  }, [calm])

  // timeline: polish, one sweep, fade out
  useEffect(() => {
    const t = []
    if (!calm) {
      t.push(setTimeout(() => setPolish(true), POLISH_AT))
      t.push(setTimeout(() => setSweep(true), SWEEP_AT))
    }
    t.push(setTimeout(() => setHidden(true), calm ? 900 : HIDE_AT))
    return () => t.forEach(clearTimeout)
  }, [calm])

  // remove from the page after the fade (also runs when skipped)
  useEffect(() => {
    if (!hidden) return
    const t = setTimeout(() => setGone(true), REMOVE_AFTER)
    return () => clearTimeout(t)
  }, [hidden])

  // skip with click, Enter, Space or Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') setHidden(true)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (gone) return null

  const done = n >= TOTAL
  const activeIdx = done
    ? FULL.length - 1
    : FULL.findIndex((l, i) => n - STARTS[i] < l.length)

  return (
    <div
      className={`splash ${hidden ? 'hide' : ''}`}
      aria-hidden="true"
      onClick={() => setHidden(true)}
    >
      {/* the stone: rough and dark, then polished into opal */}
      <div className={`stone ${polish ? 'polish' : ''} ${sweep ? 'sweep' : ''}`}>
        <span className="stone-glow" />
        <span className="stone-cab">
          <span className="stone-color" />
          <span className="stone-grain" />
          <span className="stone-shine" />
          <span className="stone-sweep" />
        </span>
      </div>

      <div className="splash-term clay">
        <div className="st-bar">
          <span className="st-dots"><span /><span /><span /></span>
          <span className="st-title">opal.db — psql</span>
        </div>

        <div className="st-body">
          {FULL.map((line, i) => {
            const typed = Math.max(0, Math.min(line.length, n - STARTS[i]))
            const kw = QUERY[i][0]
            const visible = typed > 0 || i === activeIdx
            return (
              <p key={i} className={`st-line st-q ${visible ? '' : 'off'}`}>
                <span className="st-prompt">{i === 0 ? 'opal=#' : 'opal-#'}</span>{' '}
                <span className="st-kw">{line.slice(0, Math.min(typed, kw.length))}</span>
                {line.slice(kw.length, typed)}
                {i === activeIdx && <span className="st-caret" />}
              </p>
            )
          })}

          {/* always in the layout, so nothing jumps when it appears */}
          <div className={`st-result ${done ? 'show' : ''}`}>
            <pre className="st-table">
              <span className="st-hd">{HEADER}</span>{'\n'}
              <span className="st-div">{DIVIDER}</span>{'\n'}
              <span className="st-row">{ROW}</span>
            </pre>
            <p className="st-line st-meta">(1 row) · rendering portfolio…</p>
          </div>
        </div>
      </div>

      <p className="st-skip">click to skip</p>
    </div>
  )
}