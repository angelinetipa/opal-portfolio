import { useState } from 'react'
import { useAuth } from '../../lib/auth.jsx'
import { collections, collectionOrder } from '../../constants/adminSchema.js'
import CollectionEditor from './CollectionEditor.jsx'

export default function AdminDashboard() {
  const { user, signOut } = useAuth()
  const [tab, setTab] = useState(collectionOrder[0])

  return (
    <div className="dash">
      <div className="dash-head">
        <div>
          <p className="eyebrow">// admin mode</p>
          <h2 className="section-title">Manage content</h2>
          <p className="dash-user">Signed in as {user?.email}</p>
        </div>
        <button className="btn btn-ghost" onClick={signOut}>Sign out</button>
      </div>

      <div className="dash-tabs">
        {collectionOrder.map(key => (
          <button
            key={key}
            className={`dash-tab ${tab === key ? 'active' : ''}`}
            onClick={() => setTab(key)}
          >
            {collections[key].label}
          </button>
        ))}
      </div>

      <CollectionEditor table={tab} schema={collections[tab]} />
    </div>
  )
}
