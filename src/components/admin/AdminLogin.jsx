import { useState } from 'react'
import { useAuth } from '../../lib/auth.jsx'

export default function AdminLogin() {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(e) {
    e.preventDefault()
    setErr(''); setBusy(true)
    const { error } = await signIn(email, password)
    setBusy(false)
    if (error) setErr('Wrong email or password.')
  }

  return (
    <div className="login-wrap">
      <form className="clay login-card" onSubmit={submit}>
        <span className="opal-blob login-gem" aria-hidden="true" />
        <h2>Admin access</h2>
        <p className="login-sub">Sign in to manage your portfolio content.</p>
        <label className="fi">
          <span>Email</span>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label className="fi">
          <span>Password</span>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        {err && <p className="ce-msg">{err}</p>}
        <button className="btn btn-primary" type="submit" disabled={busy} style={{ width: '100%', justifyContent: 'center' }}>
          {busy ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  )
}
