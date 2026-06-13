import { useState, useEffect } from 'react'
import { supabase } from './supabase.js'

// Returns the live row count of a table (for automatic stats).
export function useCount(table, fallback = 0) {
  const [count, setCount] = useState(fallback)
  useEffect(() => {
    let active = true
    if (!supabase) return
    supabase.from(table).select('*', { count: 'exact', head: true })
      .then(({ count: c, error }) => { if (active && !error && c != null) setCount(c) })
    return () => { active = false }
  }, [table])
  return count
}