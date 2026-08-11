import { useState, useEffect } from 'react'
import { supabase } from './supabase.js'

// Same guard as useCollection: a paused Supabase project can hang rather
// than fail, so cap the wait and keep the seed if it runs long.
const TIMEOUT_MS = 3000

function withTimeout(promise) {
  return Promise.race([
    promise,
    new Promise(resolve =>
      setTimeout(() => resolve({ data: null, error: { message: 'timeout' } }), TIMEOUT_MS)
    ),
  ])
}

// Loads a single content document by key, falls back to seed if missing.
export function useContent(key, seed) {
  const [value, setValue] = useState(seed)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    async function load() {
      if (!supabase) { setLoading(false); return }

      const { data, error } = await withTimeout(
        supabase.from('site_content').select('value').eq('key', key).maybeSingle()
      )

      if (!active) return
      if (!error && data && data.value != null) setValue(data.value)
      setLoading(false)
    }

    load()
    return () => { active = false }
  }, [key])

  return { value, loading }
}

// Upsert a content document.
export async function saveContent(key, value) {
  if (!supabase) return { error: { message: 'Not connected' } }
  return supabase.from('site_content')
    .upsert({ key, value, updated_at: new Date().toISOString() })
}