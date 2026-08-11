import { useState, useEffect } from 'react'
import { supabase } from './supabase.js'

// How long to wait for Supabase before giving up and keeping the seed.
// A paused project doesn't always fail fast — sometimes the request just
// hangs. Without this, `loading` never resolves and anything gated on it
// stalls forever. Three seconds is well past a normal response.
const TIMEOUT_MS = 3000

function withTimeout(promise) {
  return Promise.race([
    promise,
    new Promise(resolve =>
      setTimeout(() => resolve({ data: null, error: { message: 'timeout' } }), TIMEOUT_MS)
    ),
  ])
}

// Loads rows from a Supabase table, ordered. Falls back to `seed`
// (the file in src/constants/) if Supabase isn't connected, is asleep,
// is slow, or the table is empty. The seed renders immediately either
// way — Supabase only ever upgrades what's already on screen.
export function useCollection(table, seed = []) {
  const [rows, setRows] = useState(seed)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    async function load() {
      if (!supabase) { setLoading(false); return }

      const { data, error } = await withTimeout(
        supabase
          .from(table)
          .select('*')
          .order('sort_order', { ascending: true })
          .order('created_at', { ascending: true })
      )

      if (!active) return
      if (!error && data && data.length) setRows(data)
      setLoading(false)
    }

    load()
    return () => { active = false }
  }, [table])

  return { rows, loading }
}