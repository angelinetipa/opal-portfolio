import { supabase } from './supabase.js'

// Uploads an image to the 'media' bucket and returns its public URL.
export async function uploadImage(file) {
  if (!supabase || !file) return null
  const ext = file.name.split('.').pop()
  const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`
  const { error } = await supabase.storage.from('media').upload(path, file, { upsert: false })
  if (error) throw error
  const { data } = supabase.storage.from('media').getPublicUrl(path)
  return data.publicUrl
}
