import { useState } from 'react'
import { uploadImage } from '../../lib/storage.js'

// One upload control for both images and files (e.g. PDFs).
function UploadField({ field, value, onChange }) {
  const [uploading, setUploading] = useState(false)
  const [err, setErr] = useState('')
  const isImage = field.type === 'image'

  async function pick(e) {
    const input = e.target
    const file = input.files?.[0]
    if (!file) return
    setErr('')
    setUploading(true)
    try {
      onChange(await uploadImage(file))
    } catch {
      setErr('Upload failed. Try again.')
    } finally {
      setUploading(false)
      input.value = '' // lets the same file be picked again
    }
  }

  return (
    <div className="fi">
      <span>{field.label}</span>
      {isImage && value && <img className="fi-preview" src={value} alt="" />}
      {!isImage && value && (
        <a className="fi-note" href={value} target="_blank" rel="noreferrer">Current file ↗</a>
      )}
      <input type="file" accept={isImage ? 'image/*' : field.accept || '*'} onChange={pick} />
      {uploading && <small className="fi-note">Uploading…</small>}
      {err && <small className="fi-err">{err}</small>}
      {isImage && (
        <small className="fi-hint">
          Tip: compress large photos or scans first (e.g.{' '}
          <a href="https://tinypng.com" target="_blank" rel="noreferrer">tinypng.com</a>) so your site loads fast.
        </small>
      )}
    </div>
  )
}

// Renders one form control based on field.type and reports changes up.
export default function FieldInput({ field, value, onChange }) {
  if (field.type === 'image' || field.type === 'file') {
    return <UploadField field={field} value={value} onChange={onChange} />
  }

  const label = <span>{field.label}{field.required && ' *'}</span>

  // 'lines' and 'csv' are plain text while editing;
  // CollectionEditor turns them into arrays on save.
  if (field.type === 'textarea' || field.type === 'lines') {
    return (
      <label className="fi">
        {label}
        <textarea
          rows={4}
          value={value || ''}
          placeholder={field.placeholder}
          onChange={e => onChange(e.target.value)}
        />
      </label>
    )
  }

  if (field.type === 'select') {
    return (
      <label className="fi">
        {label}
        <select value={value || field.options[0]} onChange={e => onChange(e.target.value)}>
          {field.options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </label>
    )
  }

  // text and csv
  return (
    <label className="fi">
      {label}
      <input
        type="text"
        value={value || ''}
        placeholder={field.placeholder}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  )
}