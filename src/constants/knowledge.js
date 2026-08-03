// ============================================================
// ANSWER BANK — powers the "Ask about me" console (Ctrl/⌘ + K).
//
// Plain keyword matching. No AI, no API, no network call.
// Every answer here is text YOU wrote, so nothing can be
// invented or overstated. Edit freely.
//
// How matching works:
//   - `keys`  → words a visitor might type. Lowercase.
//   - `q`     → the suggested question shown in the list.
//   - `a`     → the answer.
//   - `link`  → optional { label, to } (internal) or
//               { label, href } (external / file).
// ============================================================

export const answers = [
  // ---------- WHO / OVERVIEW ----------
  {
    id: 'who',
    q: 'Who is Angeline?',
    keys: ['who', 'about', 'yourself', 'intro', 'summary', 'background', 'bio'],
    a: `Graduating BS Computer Engineering student at PUP Manila, specializing in Big Data, and a DOST–JLSS scholar. Lead developer of BIO-FISH, a capstone machine that turns fish-scale waste into bioplastic. Detail-obsessed, honest with data, and design-conscious — a careful engineer who finishes things properly.`,
    link: { label: 'Read more', to: '/' },
  },
  {
    id: 'roles',
    q: 'What roles is she looking for?',
    keys: ['role', 'roles', 'job', 'position', 'looking', 'hire', 'hiring', 'target', 'apply'],
    a: `Software Developer, Data Engineer, Data Analyst, and QA Engineer. Open to entry-level and junior roles, onsite or hybrid in Metro Manila, or remote.`,
    link: { label: 'Get in touch', to: '/contact' },
  },
  {
    id: 'available',
    q: 'When is she available to start?',
    keys: ['available', 'availability', 'start', 'when', 'graduate', 'graduating', 'notice'],
    a: `Graduating in 2026 and currently open to work. Available for interviews now.`,
    link: { label: 'Contact', to: '/contact' },
  },

  // ---------- SKILLS ----------
  {
    id: 'skills',
    q: 'What are her technical skills?',
    keys: ['skill', 'skills', 'stack', 'tech', 'technology', 'tools', 'know', 'languages'],
    a: `Proficient: Python, JavaScript, React, React Native, Git. Working knowledge: SQL, Supabase/Postgres, TypeScript, pandas, Vite, Vercel, Expo, ESP32. Learning: Power BI, PySpark. She tiers these honestly rather than listing everything as expert.`,
    link: { label: 'See projects', to: '/projects' },
  },
  {
    id: 'sql',
    q: 'Does she know SQL?',
    keys: ['sql', 'database', 'postgres', 'query', 'duckdb', 'gaussdb', 'db'],
    a: `Working knowledge. Used SQL in Aralite (DuckDB-WASM over 27M+ enrollment records) and in Supabase Postgres with row-level security. Completed Intermediate SQL at DataCamp and HCCDA–GaussDB with Huawei ICT Academy.`,
    link: { label: 'View Aralite', href: 'https://aralite.vercel.app' },
  },
  {
    id: 'python',
    q: 'How strong is her Python?',
    keys: ['python', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'pyspark', 'script'],
    a: `Proficient. Used for data work with pandas, NumPy, Matplotlib and Seaborn, plus object-oriented coursework covering file handling, sorting and encryption. Completed the 7-course Python Data Fundamentals track at DataCamp.`,
  },
  {
    id: 'frontend',
    q: 'What frontend can she build?',
    keys: ['frontend', 'react', 'ui', 'web', 'vite', 'css', 'design', 'native', 'mobile', 'expo'],
    a: `React and React Native with Expo, built with Vite and deployed on Vercel. She designs her own interfaces — the black-opal system on this site is hers, not a template. Three deployed apps to date.`,
    link: { label: 'See projects', to: '/projects' },
  },
  {
    id: 'ai',
    q: 'How does she use AI in her work?',
    keys: ['ai', 'llm', 'chatgpt', 'claude', 'copilot', 'gpt', 'assisted'],
    a: `AI-assisted, judgment-led. She builds with AI help but owns the review layer — deciding what is worth building, catching wrong output, and structuring it cleanly. She flags what she does not know instead of pretending.`,
  },
  {
    id: 'qa',
    q: 'Does she have testing or QA experience?',
    keys: ['qa', 'test', 'testing', 'quality', 'vitest', 'jest', 'bug', 'debug'],
    a: `Yes. Vitest unit tests and GitHub Actions CI on Aralite; Jest, React Native Testing Library and Playwright on Fyropy, with a documented manual test plan covering loading, empty, error and normal states.`,
  },

  // ---------- PROJECTS ----------
  {
    id: 'projects',
    q: 'What has she built?',
    keys: ['project', 'projects', 'built', 'work', 'portfolio', 'app', 'apps'],
    a: `Three deployed builds: BIO-FISH (IoT capstone control app), Fyropy (AI second-brain app), and Aralite (in-browser SQL analytics dashboard). Plus coursework in AutoCAD, logic circuits, and robotics.`,
    link: { label: 'View all projects', to: '/projects' },
  },
  {
    id: 'biofish',
    q: 'What is BIO-FISH?',
    keys: ['biofish', 'bio-fish', 'fish', 'capstone', 'thesis', 'bioplastic', 'esp32', 'iot'],
    a: `Her capstone, as lead developer. A machine that turns fish-scale waste into bioplastic using heat-extracted gelatin, with a React Native control app talking to an ESP32 over Supabase. Named a Top 8 finalist at the APEAR 2026 prototyping exhibit.`,
    link: { label: 'See the build', to: '/projects' },
  },
  {
    id: 'fyropy',
    q: 'What is Fyropy?',
    keys: ['fyropy', 'second brain', 'notes', 'triage', 'capture'],
    a: `A second-brain app built with React Native, Expo and Supabase. Captured notes are auto-sorted by type and priority, with a weekly digest, markdown composer and insights dashboard. Shipped with CI/CD through GitHub Actions.`,
    link: { label: 'Open Fyropy', href: 'https://fyropy.vercel.app' },
  },
  {
    id: 'aralite',
    q: 'What is Aralite?',
    keys: ['aralite', 'dashboard', 'analytics', 'deped', 'enrollment', 'parquet', 'charts'],
    a: `An analytics dashboard that runs SQL entirely in the browser using DuckDB-WASM over Parquet files, on 27M+ DepEd learner records. Cascading five-level location filters, eight chart sections, and an upload-your-own-dataset flow.`,
    link: { label: 'Open Aralite', href: 'https://aralite.vercel.app' },
  },

  // ---------- EXPERIENCE / EDUCATION ----------
  {
    id: 'experience',
    q: 'What work experience does she have?',
    keys: ['experience', 'intern', 'internship', 'ojt', 'lodi', 'dost', 'lgu', 'job history'],
    a: `Two completed internships at 300 hours each: Project LODI with the DOST Central Office IT Division, and an MIS internship with the Local Government of Cavite.`,
    link: { label: 'See experience', to: '/experience' },
  },
  {
    id: 'education',
    q: 'Where did she study?',
    keys: ['education', 'school', 'university', 'degree', 'pup', 'college', 'gwa', 'grade'],
    a: `BS Computer Engineering with a Big Data specialization at the Polytechnic University of the Philippines, 2022–2026, GWA 1.50. Before that, STE and STEM at Cavite National High School with a GPA of 95.`,
  },
  {
    id: 'certs',
    q: 'What certifications does she hold?',
    keys: ['cert', 'certs', 'certificate', 'certification', 'ccna', 'datacamp', 'cisco', 'huawei', 'training'],
    a: `CCNA: Introduction to Networks from Cisco, HCCDA–GaussDB from Huawei ICT Academy, and DataCamp tracks in Python Data Fundamentals, GitHub Foundations, Intermediate SQL and Excel.`,
    link: { label: 'View certificates', to: '/certificates' },
  },
  {
    id: 'awards',
    q: 'Has she won anything?',
    keys: ['award', 'awards', 'honor', 'honors', 'scholar', 'scholarship', 'jlss', 'apear', 'win', 'recognition'],
    a: `DOST–JLSS scholar, qualified through a competitive exam. BIO-FISH placed Top 8 at the APEAR 2026 prototyping exhibit. Earlier: 1st place in Feature Writing at the Division Schools Press Conference and an Arnis medalist at regional level.`,
  },

  // ---------- WORKING STYLE ----------
  {
    id: 'strength',
    q: 'What are her strengths?',
    keys: ['strength', 'strengths', 'good at', 'best', 'why hire', 'stand out'],
    a: `Precision and follow-through. She catches inconsistencies fast, keeps clean file structure with no shortcuts, and is honest with data — flagging what is unconfirmed instead of filling gaps. She also builds with a visual identity, so her work does not look generic.`,
  },
  {
    id: 'weakness',
    q: 'What is she working on improving?',
    keys: ['weakness', 'weaknesses', 'improve', 'growth', 'struggle', 'weak'],
    a: `Communication and public speaking. She is naturally more comfortable building than presenting, so she is deliberately practicing writing things up clearly and speaking about her work — this answer bank is part of that.`,
  },
  {
    id: 'style',
    q: 'How does she work in a team?',
    keys: ['team', 'collaborate', 'teamwork', 'lead', 'manage', 'communication', 'personality'],
    a: `She has led a capstone team and served as project leader in coursework — tracking milestones, keeping a Gantt chart, and defining deliverables per member. Quiet and self-directed, works best with clear scope and written context.`,
  },

  // ---------- LOGISTICS ----------
  {
    id: 'location',
    q: 'Where is she based?',
    keys: ['location', 'where', 'based', 'city', 'cavite', 'remote', 'relocate', 'onsite', 'manila'],
    a: `Cavite City, Philippines. Open to remote, hybrid, or onsite roles in Metro Manila.`,
  },
  {
    id: 'contact',
    q: 'How do I reach her?',
    keys: ['contact', 'email', 'reach', 'message', 'phone', 'linkedin', 'connect', 'talk'],
    a: `Email is the fastest way, and LinkedIn works too. Full details are on the contact page.`,
    link: { label: 'Contact page', to: '/contact' },
  },
  {
    id: 'resume',
    q: 'Can I see her resume?',
    keys: ['resume', 'cv', 'pdf', 'download', 'document'],
    a: `Yes — a one-page resume and a full CV are both available as PDFs.`,
    link: { label: 'Open resume', href: '/resume.pdf' },
  },
  {
    id: 'github',
    q: 'Where is her code?',
    keys: ['github', 'code', 'repo', 'repository', 'source', 'commits'],
    a: `All project source is public on GitHub.`,
    link: { label: 'Open GitHub', href: 'https://github.com/angelinetipa' },
  },
]

// Pages the console can jump to.
export const navTargets = [
  { label: 'Home', to: '/', hint: 'overview' },
  { label: 'Experience', to: '/experience', hint: 'internships' },
  { label: 'Projects', to: '/projects', hint: 'deployed builds' },
  { label: 'Certificates', to: '/certificates', hint: 'credentials' },
  { label: 'Art', to: '/gallery', hint: 'graphite portraits' },
  { label: 'Contact', to: '/contact', hint: 'email and links' },
]

// Shown when the box is empty, so visitors know what to ask.
export const starterIds = ['who', 'skills', 'projects', 'roles', 'resume']

/**
 * Score one entry against a lowercase query.
 * Exact key match scores highest, then partial, then question text.
 */
function scoreEntry(entry, query) {
  const words = query.split(/\s+/).filter(Boolean)
  if (words.length === 0) return 0

  let score = 0

  for (const word of words) {
    for (const key of entry.keys) {
      if (key === word) score += 10
      else if (key.startsWith(word) && word.length >= 3) score += 6
      else if (key.includes(word) && word.length >= 4) score += 3
    }
    if (entry.q.toLowerCase().includes(word) && word.length >= 3) score += 2
  }

  return score
}

/** Return the best-matching answers for a query, highest score first. */
export function searchAnswers(query, max = 4) {
  const q = (query || '').toLowerCase().trim()
  if (!q) return []

  return answers
    .map(entry => ({ entry, score: scoreEntry(entry, q) }))
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
    .map(r => r.entry)
}

/** Return pages matching a query. */
export function searchNav(query, max = 3) {
  const q = (query || '').toLowerCase().trim()
  if (!q) return []

  return navTargets
    .filter(t => t.label.toLowerCase().includes(q) || t.hint.includes(q))
    .slice(0, max)
}