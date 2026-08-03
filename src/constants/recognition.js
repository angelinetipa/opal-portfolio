// ============================================================
// RECOGNITION — grouped by what each award demonstrates,
// not by what kind of award it is.
//
// featured: true  → shown in the short list on Home (keep to 4)
// earlier:  true  → tucked behind "Earlier honors" on Experience
//
// Group labels stay plain on purpose. "Discipline" reads as
// evidence; "Relentless Drive" reads as spin.
// ============================================================

export const recognition = [
  {
    id: 'rigor',
    group: 'Precision & rigor',
    icon: '◆',
    note: 'Selected on merit, judged against other work.',
    items: [
      {
        title: 'DOST–JLSS Scholar',
        detail: 'Qualified via competitive scholarship examination',
        year: '2024',
        featured: true,
      },
      {
        title: 'BIO-FISH — Top 8 Finalist',
        detail: '4th Annual Prototyping Exhibit, Awards & Recognition (APEAR)',
        year: '2026',
        featured: true,
      },
      {
        title: '1st Place — Science Investigatory Project',
        detail: 'School level',
        year: '2015',
        earlier: true,
      },
    ],
  },
  {
    id: 'communication',
    group: 'Writing & communication',
    icon: '◇',
    note: 'Where I learned to explain work, not just do it.',
    items: [
      {
        title: '1st Place — Feature Writing',
        detail: 'Division Schools Press Conference · Regional (RSPC) delegate',
        year: '2015',
        featured: true,
      },
      {
        title: 'Media Head — Software Engineering Day (ASCEND)',
        detail: '3-day CpE symposium; led social media and live coverage',
        year: '2026',
        featured: true,
      },
      {
        title: 'Campus Journalism Workshop',
        detail: 'Multiple top placements, school level',
        year: '2015',
        earlier: true,
      },
    ],
  },
  {
    id: 'discipline',
    group: 'Discipline & endurance',
    icon: '▲',
    note: 'Years of training for events decided by small margins.',
    items: [
      {
        title: 'Bronze Medalist — Arnis Combative',
        detail: 'STCAA Regional',
        year: '2017',
        earlier: true,
      },
      {
        title: 'Silver Medalist — Arnis Solo Baston',
        detail: 'Provincial inter-school competition',
        year: '2015',
        earlier: true,
      },
      {
        title: 'Arnis & Table Tennis competitor',
        detail: 'City to STCAA regional level · Arnis Yellow Belt',
        year: '2015–2017',
        earlier: true,
      },
    ],
  },
  {
    id: 'creative',
    group: 'Creative work',
    icon: '●',
    note: 'The same eye I bring to interface design.',
    items: [
      {
        title: '1st Place — Kulay at Tubig Regada Painting',
        detail: 'Division level',
        year: '2015',
        earlier: true,
      },
      {
        title: '1st Place — Poster Making',
        detail: 'Bulilit & Teen Health Workers, division level',
        year: '2015',
        earlier: true,
      },
      {
        title: 'YES-O Officer',
        detail: 'Youth for Environment in Schools Organization, 3 years',
        year: 'since 2018',
        earlier: true,
      },
    ],
  },
]

/** Flat list of the items marked featured — used on Home. */
export const featuredRecognition = recognition
  .flatMap(g => g.items.map(item => ({ ...item, group: g.group })))
  .filter(item => item.featured)