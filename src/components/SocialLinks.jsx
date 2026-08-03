import './SocialLinks.css'

/* Inline SVGs — no icon library, no extra dependency, no layout shift. */

const ICONS = {
  github: (
    <path d="M12 .5C5.73.5.99 5.24.99 11.52c0 4.87 3.16 9 7.54 10.46.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.07.67-3.72-1.3-3.72-1.3-.5-1.28-1.23-1.62-1.23-1.62-1-.69.08-.67.08-.67 1.11.08 1.7 1.14 1.7 1.14.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.48-2.45-.28-5.03-1.23-5.03-5.46 0-1.21.43-2.2 1.13-2.97-.11-.28-.49-1.4.11-2.92 0 0 .93-.3 3.04 1.13a10.5 10.5 0 0 1 5.54 0c2.11-1.43 3.03-1.13 3.03-1.13.61 1.52.23 2.64.11 2.92.71.77 1.13 1.76 1.13 2.97 0 4.24-2.58 5.18-5.04 5.45.4.35.75 1.02.75 2.06 0 1.49-.01 2.69-.01 3.06 0 .29.2.64.76.53a11.04 11.04 0 0 0 7.53-10.46C23.01 5.24 18.27.5 12 .5Z" />
  ),
  linkedin: (
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
  ),
  mail: (
    <path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm10 9.13L2.4 6.4A1 1 0 0 0 2 6.8V7l10 7 10-7v-.2a1 1 0 0 0-.4-.4L12 13.13Z" />
  ),
}

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      {ICONS[name]}
    </svg>
  )
}

/**
 * Small icon row for the hero (and reusable anywhere).
 * Renders only the links that actually exist on the profile.
 */
export default function SocialLinks({ profile = {}, className = '' }) {
  const links = [
    profile.github && { key: 'github', label: 'GitHub', href: profile.github },
    profile.linkedin && { key: 'linkedin', label: 'LinkedIn', href: profile.linkedin },
    profile.email && {
      key: 'mail',
      label: 'Email',
      href: `mailto:${profile.email}`,
    },
  ].filter(Boolean)

  if (links.length === 0) return null

  return (
    <nav className={`sociallinks ${className}`} aria-label="Social profiles">
      {links.map(l => (
        <a
          key={l.key}
          className="sl-btn"
          href={l.href}
          target={l.key === 'mail' ? undefined : '_blank'}
          rel="noreferrer"
          aria-label={l.label}
          title={l.label}
        >
          <Icon name={l.key} />
          <span className="sl-tip">{l.label}</span>
        </a>
      ))}
    </nav>
  )
}