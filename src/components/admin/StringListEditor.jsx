// Edits a simple array of strings (e.g. awards) — one input per line.
export default function StringListEditor({ items, onChange, placeholder, addLabel = '+ Add' }) {
  function update(i, val) {
    onChange(items.map((it, idx) => (idx === i ? val : it)))
  }
  function add() { onChange([...items, '']) }
  function remove(i) { onChange(items.filter((_, idx) => idx !== i)) }

  return (
    <div className="sle">
      {items.map((it, i) => (
        <div key={i} className="sle-row">
          <input type="text" value={it} placeholder={placeholder}
            onChange={e => update(i, e.target.value)} />
          <button className="ce-del sle-remove" onClick={() => remove(i)}>✕</button>
        </div>
      ))}
      <button className="btn btn-ghost" onClick={add}>{addLabel}</button>
    </div>
  )
}
