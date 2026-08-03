// ============================================================
// MAIL — one place that decides how email links open.
//
// Plain `mailto:` only works when the visitor has a desktop mail
// client set as their default. Most people don't, so the link
// silently does nothing. Gmail's compose URL opens a real tab
// for anyone signed into Gmail, and falls back gracefully.
// ============================================================

/** Build a compose link for an address, with optional subject/body. */
export function composeUrl(email, { subject = '', body = '' } = {}) {
  if (!email) return '#'

  const params = new URLSearchParams({ view: 'cm', fs: '1', to: email })
  if (subject) params.set('su', subject)
  if (body) params.set('body', body)

  return `https://mail.google.com/mail/?${params.toString()}`
}

/** Plain mailto, kept for right-click "copy email address". */
export function mailtoUrl(email) {
  return email ? `mailto:${email}` : '#'
}

/** Copy an address to the clipboard. Returns true on success. */
export async function copyEmail(email) {
  if (!email) return false
  try {
    await navigator.clipboard.writeText(email)
    return true
  } catch {
    return false
  }
}