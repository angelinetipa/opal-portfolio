import { useMemo } from 'react'

// Opal sparkles — small drifting, twinkling flecks (like color flashes in opal).
// Generated once; only opacity + transform animate, so it stays smooth.
const COLORS = [
  'var(--opal-blue)', 'var(--opal-teal)', 'var(--opal-green)',
  'var(--opal-violet)', 'var(--opal-fire)',
]

export default function BgAmbient() {
  const sparkles = useMemo(() => {
    return Array.from({ length: 34 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 4,
      color: COLORS[i % COLORS.length],
      delay: (Math.random() * 8).toFixed(2),
      dur: (5 + Math.random() * 6).toFixed(2),
      drift: (Math.random() * 40 - 20).toFixed(0),
    }))
  }, [])

  return (
    <div className="bg-ambient" aria-hidden="true">
      <div className="bg-glow" />
      {sparkles.map(s => (
        <span
          key={s.id}
          className="sparkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: s.color,
            boxShadow: `0 0 8px ${s.color}`,
            '--delay': `${s.delay}s`,
            '--dur': `${s.dur}s`,
            '--drift': `${s.drift}px`,
          }}
        />
      ))}
    </div>
  )
}
