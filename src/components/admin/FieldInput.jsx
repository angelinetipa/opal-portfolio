import { useState } from 'react'
import { uploadImage } from '../../lib/storage.js'

// Renders one form control based on field.type and reports changes up.
export default function FieldInput({ field, value, onChange }) {
  const [uploading, setUploading] = useState(false)
  const [err, setErr] = useState('')

  if (field.type === 'textarea') {
    return (
      <label className="fi">
        <span>{field.label}</span>
        <textarea
          rows={4}
          value={value || ''}
          placeholder={field.placeholder}
          onChange={e => onChange(e.target.value)}
        />
      </label>
    )
  }

  if (field.type === 'lines') {
    // array <-> newline-separated text
    return (
      <label className="fi">
        <span>{field.label}</span>
        <textarea
          rows={4}
          value={Array.isArray(value) ? value.join('\n') : ''}
          placeholder={field.placeholder}
          onChange={e => onChange(e.target.value.split('\n').filter(Boolean))}
        />
      </label>
    )
  }

  if (field.type === 'csv') {
    // array <-> comma-separated text
    return (
      <label className="fi">
        <span>{field.label}</span>
        <input
          type="text"
          value={Array.isArray(value) ? value.join(', ') : ''}
          placeholder={field.placeholder}
          onChange={e => onChange(e.target.value.split(',').map(t => t.trim()).filter(Boolean))}
        />
      </label>
    )
  }

  if (field.type === 'select') {
    return (
      <label className="fi">
        <span>{field.label}</span>
        <select value={value || field.options[0]} onChange={e => onChange(e.target.value)}>
          {field.options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </label>
    )
  }

  if (field.type === 'image') {
    return (
      <div className="fi">
        <span>{field.label}</span>
        {value && <img className="fi-preview" src={value} alt="" />}
        <input
          type="file"
          accept="image/*"
          onChange={async e => {
            const file = e.target.files?.[0]
            if (!file) return
            setErr(''); setUploading(true)
            try {
              const url = await uploadImage(file)
              onChange(url)
            } catch (e2) {
              setErr('Upload failed. Try again.')
            } finally {
              setUploading(false)
            }
          }}
        />
        {uploading && <small className="fi-note">Uploading…</small>}
        {err && <small className="fi-err">{err}</small>}
      </div>
    )
  }

  // default text
  return (
    <label className="fi">
      <span>{field.label}{field.required && ' *'}</span>
      <input
        type="text"
        value={value || ''}
        placeholder={field.placeholder}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  )
}
