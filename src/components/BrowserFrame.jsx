import './BrowserFrame.css'

// Wraps a project screenshot in a small browser window (dots + url bar).
// The frame is ALWAYS 16:10 — same size on every card — and the image
// fits fully inside it (contained, never cropped) on a soft opal gradient.
export default function BrowserFrame({ src, alt, url }) {
  const label = url ? url.replace(/^https?:\/\//, '') : ''
  return (
    <div className="bframe">
      <div className="bframe-bar">
        <span className="bf-dots" aria-hidden="true">
          <span /><span /><span />
        </span>
        {label && <span className="bf-url">{label}</span>}
      </div>
      <div className="bframe-view">
        {src ? (
          <img src={src} alt={alt} loading="lazy" />
        ) : (
          <span className="bf-empty">preview coming soon</span>
        )}
      </div>
    </div>
  )
}