// Edits an array of objects (e.g. stats, education, toolkit groups).
// All fields are plain text inputs; parent handles any array conversion.
export default function ObjectListEditor({ items, fields, onChange, addLabel = '+ Add row' }) {
  function update(i, key, val) {
    const next = items.map((it, idx) => (idx === i ? { ...it, [key]: val } : it))
    onChange(next)
  }
  function add() {
    const blank = {}
    fields.forEach(f => { blank[f.key] = '' })
    onChange([...items, blank])
  }
  function remove(i) {
    onChange(items.filter((_, idx) => idx !== i))
  }

  return (
    <div className="ole">
      {items.map((it, i) => (
        <div key={i} className="clay-soft ole-row">
          <div className="ole-fields">
            {fields.map(f => (
              <label key={f.key} className="fi">
                <span>{f.label}</span>
                {f.type === 'textarea' ? (
                  <textarea rows={2} value={it[f.key] || ''} placeholder={f.placeholder}
                    onChange={e => update(i, f.key, e.target.value)} />
                ) : (
                  <input type="text" value={it[f.key] || ''} placeholder={f.placeholder}
                    onChange={e => update(i, f.key, e.target.value)} />
                )}
              </label>
            ))}
          </div>
          <button className="ce-del ole-remove" onClick={() => remove(i)}>Remove</button>
        </div>
      ))}
      <button className="btn btn-ghost" onClick={add}>{addLabel}</button>
    </div>
  )
}
