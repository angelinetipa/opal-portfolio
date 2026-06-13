import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase.js'
import FieldInput from './FieldInput.jsx'

// Generic editor for one Supabase table, driven by a field schema.
export default function CollectionEditor({ table, schema }) {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(null) // null | {} (new) | row (edit)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')

  async function load() {
    setLoading(true)
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: true })
    if (!error) setRows(data || [])
    setLoading(false)
  }

  useEffect(() => { load() }, [table])

  function startNew() {
    const blank = {}
    schema.fields.forEach(f => { blank[f.key] = '' })
    setEditing(blank)
  }

  function startEdit(row) {
    // arrays (lines/csv) → editable strings
    const form = { ...row }
    schema.fields.forEach(f => {
      if (f.type === 'lines' && Array.isArray(row[f.key])) form[f.key] = row[f.key].join('\n')
      if (f.type === 'csv' && Array.isArray(row[f.key])) form[f.key] = row[f.key].join(', ')
    })
    setEditing(form)
  }

  async function save() {
    // basic required check
    const missing = schema.fields.find(f => f.required && !editing[f.key])
    if (missing) { setMsg(`"${missing.label}" is required.`); return }

    setSaving(true); setMsg('')
    const payload = {}
    schema.fields.forEach(f => {
      let v = editing[f.key]
      if (f.type === 'lines') v = String(v || '').split('\n').map(s => s.trim()).filter(Boolean)
      if (f.type === 'csv') v = String(v || '').split(',').map(s => s.trim()).filter(Boolean)
      payload[f.key] = v
    })

    let error
    if (editing.id) {
      ({ error } = await supabase.from(table).update(payload).eq('id', editing.id))
    } else {
      ({ error } = await supabase.from(table).insert(payload))
    }
    setSaving(false)
    if (error) { setMsg('Could not save: ' + error.message); return }
    setEditing(null)
    load()
  }

  async function remove(id) {
    if (!confirm('Delete this entry? This cannot be undone.')) return
    const { error } = await supabase.from(table).delete().eq('id', id)
    if (!error) load()
  }

  const titleKey = schema.fields[0].key

  return (
    <div className="ce">
      <div className="ce-head">
        <h3>{schema.label} <span className="ce-count">{rows.length}</span></h3>
        <button className="btn btn-primary ce-add" onClick={startNew}>+ Add new</button>
      </div>

      {loading ? (
        <p className="ce-empty">Loading…</p>
      ) : rows.length === 0 ? (
        <p className="ce-empty">Nothing here yet. Click “Add new” to create your first entry.</p>
      ) : (
        <ul className="ce-list">
          {rows.map(r => (
            <li key={r.id} className="clay-soft ce-row">
              {r.image && <img className="ce-thumb" src={r.image} alt="" />}
              <span className="ce-title">{r[titleKey] || '(untitled)'}</span>
              <div className="ce-actions">
                <button onClick={() => startEdit(r)}>Edit</button>
                <button className="ce-del" onClick={() => remove(r.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {editing && (
        <div className="ce-modal-bg" onClick={() => !saving && setEditing(null)}>
          <div className="clay ce-modal" onClick={e => e.stopPropagation()}>
            <div className="ce-modal-head">
              <h4>{editing.id ? 'Edit' : 'New'} {schema.label.replace(/s$/, '')}</h4>
              <button className="ce-close" onClick={() => setEditing(null)}>✕</button>
            </div>
            <div className="ce-form">
              {schema.fields.map(f => (
                <FieldInput
                  key={f.key}
                  field={f}
                  value={editing[f.key]}
                  onChange={val => setEditing(prev => ({ ...prev, [f.key]: val }))}
                />
              ))}
            </div>
            {msg && <p className="ce-msg">{msg}</p>}
            <div className="ce-modal-foot">
              <button className="btn btn-ghost" onClick={() => setEditing(null)} disabled={saving}>Cancel</button>
              <button className="btn btn-primary" onClick={save} disabled={saving}>
                {saving ? 'Saving…' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
