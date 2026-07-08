import './BrowserFrame.css'

// Wraps a project screenshot in a small browser window (dots + url bar)
// so every image looks consistent even if the raw captures differ.
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