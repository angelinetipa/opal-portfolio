import { useAuth } from '../lib/auth.jsx'
import { supabase } from '../lib/supabase.js'
import AdminLogin from '../components/admin/AdminLogin.jsx'
import AdminDashboard from '../components/admin/AdminDashboard.jsx'
import './Admin.css'

export default function Admin() {
  const { ready, user } = useAuth()

  if (!supabase) {
    return (
      <main className="page container">
        <div className="clay login-card" style={{ margin: '0 auto' }}>
          <h2>Not connected</h2>
          <p className="login-sub">Supabase keys are missing. Add them in your .env file.</p>
        </div>
      </main>
    )
  }

  if (!ready) return <main className="page container"><p className="ce-empty">Loading…</p></main>

  return (
    <main className="page container">
      {user ? <AdminDashboard /> : <AdminLogin />}
    </main>
  )
}
