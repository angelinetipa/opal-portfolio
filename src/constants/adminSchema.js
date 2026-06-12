// Defines what fields each section has in the admin editor.
// Field types: text, textarea, lines (one item per line → array),
// csv (comma separated → array), select, image (upload).

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
      { key: 'description', label: 'Description', type: 'textarea' },
      { key: 'tags', label: 'Tags (comma separated)', type: 'csv' },
      { key: 'accent', label: 'Accent color', type: 'select', options: ['blue', 'teal', 'violet'] },
      { key: 'image', label: 'Image', type: 'image' },
      { key: 'link', label: 'Link (optional)', type: 'text', placeholder: 'https://...' },
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
  artworks: {
    label: 'Art',
    fields: [
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'medium', label: 'Medium', type: 'text', placeholder: 'Graphite on paper' },
      { key: 'image', label: 'Image', type: 'image' },
    ],
  },
}

export const collectionOrder = ['experience', 'projects', 'certificates', 'artworks']
