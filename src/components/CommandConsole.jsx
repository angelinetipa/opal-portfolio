import { useEffect, useRef, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  answers,
  starterIds,
  searchAnswers,
  searchNav,
} from '../constants/knowledge.js'
import { profile } from '../constants/data.js'
import './CommandConsole.css'

const OPEN_EVENT = 'cc:open'

/** Call from anywhere (e.g. the navbar) to open the console. */
export function openConsole() {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT))
}

const STARTERS = starterIds
  .map(id => answers.find(a => a.id === id))
  .filter(Boolean)

export default function CommandConsole() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const [picked, setPicked] = useState(null)

  const inputRef = useRef(null)
  const navigate = useNavigate()

  const results = query.trim() ? searchAnswers(query) : STARTERS
  const pages = query.trim() ? searchNav(query) : []
  const total = results.length + pages.length

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setPicked(null)
    setActive(0)
  }, [])

  // ---- open via navbar button ----
  useEffect(() => {
    const onOpen = () => setOpen(true)
    window.addEventListener(OPEN_EVENT, onOpen)
    return () => window.removeEventListener(OPEN_EVENT, onOpen)
  }, [])

  // ---- global shortcut: Ctrl/Cmd + K ----
  useEffect(() => {
    function onKey(e) {
      const isK = e.key === 'k' || e.key === 'K'
      if (isK && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(o => !o)
      }
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close])

  // ---- focus input + lock scroll while open ----
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = ''
      return
    }
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => inputRef.current?.focus(), 40)
    return () => clearTimeout(t)
  }, [open])

  // reset highlight whenever the query changes
  useEffect(() => {
    setActive(0)
    setPicked(null)
  }, [query])

  if (!open) return null

  function choose(index) {
    if (index < results.length) {
      setPicked(results[index])
      return
    }
    const page = pages[index - results.length]
    if (page) {
      navigate(page.to)
      close()
    }
  }

  function onInputKey(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive(a => (total ? (a + 1) % total : 0))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive(a => (total ? (a - 1 + total) % total : 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (total) choose(active)
    }
  }

  function followLink(link) {
    if (!link) return
    if (link.to) {
      navigate(link.to)
      close()
    } else if (link.href) {
      window.open(link.href, '_blank', 'noreferrer')
    }
  }

  return (
    <div className="cc-overlay" onMouseDown={close} role="presentation">
      <div
        className="cc-panel clay"
        onMouseDown={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Ask about Angeline"
      >
        <div className="cc-inputrow">
          <span className="cc-prompt" aria-hidden="true">
            &gt;
          </span>
          <input
            ref={inputRef}
            className="cc-input"
            value={query}
            placeholder="Ask anything — skills, projects, availability…"
            onChange={e => setQuery(e.target.value)}
            onKeyDown={onInputKey}
            autoComplete="off"
            spellCheck="false"
          />
          <button className="cc-esc" onClick={close} aria-label="Close">
            esc
          </button>
        </div>

        <div className="cc-body">
          {/* ----- an answer is open ----- */}
          {picked ? (
            <div className="cc-answer">
              <p className="cc-answer-q">{picked.q}</p>
              <p className="cc-answer-a">{picked.a}</p>
              <div className="cc-answer-actions">
                {picked.link && (
                  <button
                    className="cc-link"
                    onClick={() => followLink(picked.link)}
                  >
                    {picked.link.label} →
                  </button>
                )}
                <button className="cc-back" onClick={() => setPicked(null)}>
                  ← back
                </button>
              </div>
            </div>
          ) : total > 0 ? (
            <>
              {results.length > 0 && (
                <>
                  <p className="cc-label">
                    {query.trim() ? 'Answers' : 'Try asking'}
                  </p>
                  <ul className="cc-list">
                    {results.map((r, i) => (
                      <li key={r.id}>
                        <button
                          className={`cc-item ${active === i ? 'on' : ''}`}
                          onMouseEnter={() => setActive(i)}
                          onClick={() => choose(i)}
                        >
                          <span className="cc-item-q">{r.q}</span>
                          <span className="cc-item-arrow">↵</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {pages.length > 0 && (
                <>
                  <p className="cc-label">Go to</p>
                  <ul className="cc-list">
                    {pages.map((p, i) => {
                      const idx = results.length + i
                      return (
                        <li key={p.to}>
                          <button
                            className={`cc-item ${active === idx ? 'on' : ''}`}
                            onMouseEnter={() => setActive(idx)}
                            onClick={() => choose(idx)}
                          >
                            <span className="cc-item-q">{p.label}</span>
                            <span className="cc-item-hint">{p.hint}</span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </>
              )}
            </>
          ) : (
            /* ----- nothing matched ----- */
            <div className="cc-empty">
              <p>I don&apos;t have an answer saved for that.</p>
              <a
                className="cc-link"
                href={`mailto:${profile.email}`}
                onClick={close}
              >
                Ask me directly →
              </a>
            </div>
          )}
        </div>

        <div className="cc-foot">
          <span>↑↓ move · ↵ open · esc close</span>
          <span className="cc-foot-note">Saved answers — no AI, no tracking</span>
        </div>
      </div>
    </div>
  )
}