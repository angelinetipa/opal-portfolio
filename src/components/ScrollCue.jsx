export default function ScrollCue({ target = '.selected' }) {
  function scroll() {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <button className="scroll-cue" onClick={scroll} aria-label="Scroll to selected work">
      <span className="sc-label">scroll</span>
      <span className="sc-arrow" aria-hidden="true">↓</span>
    </button>
  )
}