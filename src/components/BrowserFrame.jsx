import './BrowserFrame.css'

// Wraps a project screenshot in a small browser window (dots + url bar)
// so every image looks consistent even if the raw captures differ.
// fit="cover"   → fills the 16:10 frame (default, for desktop/web shots)
// fit="contain" → shows the WHOLE image on a soft gradient (for phone/portrait shots)
export default function BrowserFrame({ src, alt, url, fit = 'cover' }) {
  const label = url ? url.replace(/^https?:\/\//, '') : ''
  return (
    <div className="bframe">
      <div className="bframe-bar">
        <span className="bf-dots" aria-hidden="true">
          <span /><span /><span />
        </span>
        {label && <span className="bf-url">{label}</span>}
      </div>
      <div className={`bframe-view ${fit === 'contain' ? 'bf-contain' : ''}`}>
        {src ? (
          <img src={src} alt={alt} loading="lazy" />
        ) : (
          <span className="bf-empty">preview coming soon</span>
        )}
      </div>
    </div>
  )
}