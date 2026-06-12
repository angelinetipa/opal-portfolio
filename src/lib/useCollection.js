import { useState, useEffect } from 'react'
import { supabase } from './supabase.js'

// Loads rows from a Supabase table, ordered. Falls back to `seed`
// (your CV data) if Supabase isn't connected or the table is empty.
export function useCollection(table, seed = []) {
  const [rows, setRows] = useState(seed)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    async function load() {
      if (!supabase) { setLoading(false); return }
      const { data, error } = await supabase
        .from(table)
        .select('*')
        .order('sort_order', { ascending: true })
        .order('created_at', { ascending: true })
      if (active) {
        if (!error && data && data.length) setRows(data)
        setLoading(false)
      }
    }
    load()
    return () => { active = false }
  }, [table])

  return { rows, loading }
}
