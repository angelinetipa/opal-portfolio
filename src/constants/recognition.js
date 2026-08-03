// ============================================================
// RECOGNITION — one row per award so it can be edited in admin.
//
// Rows are flat (title, detail, year, group_name, featured, earlier).
// Grouping happens at render time via groupRecognition().
//
// NOTE: the column is `group_name`, not `group` — `group` is a
// reserved word in SQL and breaks the Supabase table.
//
// featured → 'yes' shows it in the short list on Home (keep to 4)
// earlier  → 'yes' tucks it behind "Earlier honors" on Experience
//
// Group labels stay plain on purpose. "Discipline" reads as
// evidence; "Relentless Drive" reads as spin.
// ============================================================

/** Card metadata. Lives in code — it's design, not content. */
export const GROUPS = [
  {
    id: 'rigor',
    label: 'Precision & rigor',
    icon: '◆',
    note: 'Selected on merit, judged against other work.',
  },
  {
    id: 'communication',
    label: 'Writing & communication',
    icon: '◇',
    note: 'Where I learned to explain work, not just do it.',
  },
  {
    id: 'discipline',
    label: 'Discipline & endurance',
    icon: '▲',
    note: 'Years of training for events decided by small margins.',
  },
  {
    id: 'creative',
    label: 'Creative work',
    icon: '●',
    note: 'The same eye I bring to interface design.',
  },
]

/** Options for the admin dropdown. */
export const groupOptions = GROUPS.map(g => g.id)

/** Admin saves strings; booleans are also accepted. */
export function isYes(value) {
  return value === true || value === 'yes'
}

export const recognitionSeed = [
  // ---------- precision & rigor ----------
  {
    id: 'r-jlss',
    title: 'DOST–JLSS Scholar',
    detail: 'Qualified via competitive scholarship examination',
    year: '2024',
    group_name: 'rigor',
    featured: 'yes',
    earlier: 'no',
  },
  {
    id: 'r-apear',
    title: 'BIO-FISH — Top 8 Finalist',
    detail: '4th Annual Prototyping Exhibit, Awards & Recognition (APEAR)',
    year: '2026',
    group_name: 'rigor',
    featured: 'yes',
    earlier: 'no',
  },
  {
    id: 'r-sip',
    title: '1st Place — Science Investigatory Project',
    detail: 'School level',
    year: '2015',
    group_name: 'rigor',
    featured: 'no',
    earlier: 'yes',
  },

  // ---------- writing & communication ----------
  {
    id: 'r-dspc',
    title: '1st Place — Feature Writing',
    detail: 'Division Schools Press Conference · Regional (RSPC) delegate',
    year: '2015',
    group_name: 'communication',
    featured: 'yes',
    earlier: 'no',
  },
  {
    id: 'r-ascend',
    title: 'Media Head — Software Engineering Day (ASCEND)',
    detail: '3-day CpE symposium; led social media and live coverage',
    year: '2026',
    group_name: 'communication',
    featured: 'yes',
    earlier: 'no',
  },
  {
    id: 'r-journalism',
    title: 'Campus Journalism Workshop',
    detail: 'Multiple top placements, school level',
    year: '2015',
    group_name: 'communication',
    featured: 'no',
    earlier: 'yes',
  },

  // ---------- discipline & endurance ----------
  {
    id: 'r-arnis-combative',
    title: 'Bronze Medalist — Arnis Combative',
    detail: 'STCAA Regional',
    year: '2017',
    group_name: 'discipline',
    featured: 'no',
    earlier: 'yes',
  },
  {
    id: 'r-arnis-baston',
    title: 'Silver Medalist — Arnis Solo Baston',
    detail: 'Provincial inter-school competition',
    year: '2015',
    group_name: 'discipline',
    featured: 'no',
    earlier: 'yes',
  },
  {
    id: 'r-athletics',
    title: 'Arnis & Table Tennis competitor',
    detail: 'City to STCAA regional level · Arnis Yellow Belt',
    year: '2015–2017',
    group_name: 'discipline',
    featured: 'no',
    earlier: 'yes',
  },

  // ---------- creative work ----------
  {
    id: 'r-painting',
    title: '1st Place — Kulay at Tubig Regada Painting',
    detail: 'Division level',
    year: '2015',
    group_name: 'creative',
    featured: 'no',
    earlier: 'yes',
  },
  {
    id: 'r-poster',
    title: '1st Place — Poster Making',
    detail: 'Bulilit & Teen Health Workers, division level',
    year: '2015',
    group_name: 'creative',
    featured: 'no',
    earlier: 'yes',
  },
  {
    id: 'r-yeso',
    title: 'YES-O Officer',
    detail: 'Youth for Environment in Schools Organization, 3 years',
    year: 'since 2018',
    group_name: 'creative',
    featured: 'no',
    earlier: 'yes',
  },
]

/**
 * Turn flat rows into display groups.
 * @param rows           the collection (from admin or the seed)
 * @param includeEarlier whether to keep items marked earlier
 * Empty groups are dropped so no blank cards render.
 */
export function groupRecognition(rows = [], includeEarlier = false) {
  return GROUPS.map(g => ({
    ...g,
    items: rows.filter(
      r => r.group_name === g.id && (includeEarlier || !isYes(r.earlier))
    ),
  })).filter(g => g.items.length > 0)
}

/** Items marked featured — used in the short list on Home. */
export function featuredRecognition(rows = []) {
  return rows.filter(r => isYes(r.featured))
}

/** How many items are hidden behind the toggle. */
export function earlierCount(rows = []) {
  return rows.filter(r => isYes(r.earlier)).length
}