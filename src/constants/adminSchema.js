// Defines what fields each section has in the admin editor.
// Field types: text, textarea, lines (one item per line → array),
// csv (comma separated → array), select, image (upload).

import { groupOptions } from './recognition.js'

export const collections = {
  experience: {
    label: 'Experience',
    fields: [
      { key: 'role', label: 'Role', type: 'text', required: true },
      { key: 'org', label: 'Organization', type: 'text' },
      { key: 'place', label: 'Place', type: 'text' },
      { key: 'period', label: 'Period', type: 'text', placeholder: 'Jul – Sep 2025' },
      { key: 'points', label: 'Bullet points (one per line)', type: 'lines' },
      { key: 'tags', label: 'Tags (comma separated)', type: 'csv' },
    ],
  },
  projects: {
    label: 'Projects',
    fields: [
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
      { key: 'category', label: 'Category', type: 'select', options: ['featured', 'coursework'] },
      { key: 'description', label: 'Description', type: 'textarea' },
      { key: 'tags', label: 'Tags (comma separated)', type: 'csv' },
      { key: 'accent', label: 'Accent color', type: 'select', options: ['blue', 'teal', 'violet'] },
      { key: 'image', label: 'Image', type: 'image' },
      { key: 'live', label: 'Live URL (optional)', type: 'text', placeholder: 'https://...' },
      { key: 'repo', label: 'Repo URL (optional)', type: 'text', placeholder: 'https://github.com/...' },
    ],
  },
  certificates: {
    label: 'Certificates',
    fields: [
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'issuer', label: 'Issuer', type: 'text' },
      { key: 'year', label: 'Year', type: 'text', placeholder: '2025' },
      { key: 'image', label: 'Image', type: 'image' },
    ],
  },
  recognition: {
    label: 'Recognition',
    fields: [
      { key: 'title', label: 'Award / role', type: 'text', required: true },
      { key: 'detail', label: 'Detail', type: 'text', placeholder: 'Level, organizer, or context' },
      { key: 'year', label: 'Year', type: 'text', placeholder: '2026' },
      // `group` is reserved in SQL — the column is group_name.
      { key: 'group_name', label: 'Group (which card it appears under)', type: 'select', options: groupOptions },
      { key: 'featured', label: 'Show on Home? (max 4)', type: 'select', options: ['no', 'yes'] },
      { key: 'earlier', label: 'Hide behind "earlier honors"?', type: 'select', options: ['no', 'yes'] },
    ],
  },
  artworks: {
    label: 'Art',
    fields: [
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'medium', label: 'Medium', type: 'text', placeholder: 'Graphite on paper' },
      { key: 'image', label: 'Image', type: 'image' },
    ],
  },
}

export const collectionOrder = [
  'experience',
  'projects',
  'certificates',
  'recognition',
  'artworks',
]