// ============================================================
// ANSWER BANK — powers the "Ask about me" console (Ctrl/Cmd + K).
//
// Plain keyword matching. No AI, no API, no network call.
// Every answer here is text YOU wrote, so nothing can be
// invented or overstated. Edit freely.
//
// Skill tiers below mirror the CV exactly:
//   Proficient          → Python, SQL, HTML/CSS
//   Working knowledge   → TypeScript/JavaScript, React, React Native,
//                         Supabase, Django, C/C++, Arduino
// Do not promote anything between tiers without updating the CV too.
//
// Fields:
//   keys  → words a visitor might type. Lowercase.
//   q     → the suggested question shown in the list.
//   a     → the answer.
//   link  → optional { label, to } (internal) or
//           { label, href } (external / file).
// ============================================================

export const answers = [
  // ---------- WHO / OVERVIEW ----------
  {
    id: 'who',
    q: 'Who is Angeline?',
    keys: ['who', 'about', 'yourself', 'intro', 'summary', 'background', 'bio'],
    a: `Graduating BS Computer Engineering student at PUP Manila with a Big Data specialization, GWA 1.50, and a DOST–JLSS scholar. Detail- and design-conscious, builds with AI tools but stays judgment-led. Experience across software testing, full-stack development, and data analysis.`,
    link: { label: 'Read more', to: '/' },
  },
  {
    id: 'roles',
    q: 'What roles is she looking for?',
    keys: ['role', 'roles', 'job', 'position', 'looking', 'hire', 'hiring', 'target', 'apply'],
    a: `Software Developer, Data Engineer, Data Analyst, and QA Engineer. Open to entry-level and junior roles — remote, hybrid, or onsite in Metro Manila.`,
    link: { label: 'Get in touch', to: '/contact' },
  },
  {
    id: 'available',
    q: 'When is she available to start?',
    keys: ['available', 'availability', 'start', 'when', 'graduate', 'graduating', 'notice'],
    a: `Graduating September 2026 and currently open to work. Available for interviews now.`,
    link: { label: 'Contact', to: '/contact' },
  },

  // ---------- SKILLS ----------
  {
    id: 'skills',
    q: 'What are her technical skills?',
    keys: ['skill', 'skills', 'stack', 'tech', 'technology', 'tools', 'know', 'languages'],
    a: `Proficient: Python, SQL, HTML/CSS. Working knowledge (AI-assisted, shipped projects): TypeScript/JavaScript, React, React Native with Expo, Supabase, Django, C/C++, Arduino. She tiers these honestly instead of listing everything as expert.`,
    link: { label: 'See projects', to: '/projects' },
  },
  {
    id: 'sql',
    q: 'How strong is her SQL?',
    keys: ['sql', 'database', 'databases', 'postgres', 'query', 'duckdb', 'mysql', 'gaussdb', 'db', 'replication'],
    a: `Proficient — one of her two strongest languages. Used in Aralite, which runs real SQL in the browser over 27M learner records, and in Supabase Postgres with row-level security. Also built Master–Master and Master–Slave MySQL replication for coursework. Certified: Intermediate SQL (DataCamp) and HCCDA–GaussDB (Huawei ICT Academy).`,
    link: { label: 'View Aralite', href: 'https://aralite.vercel.app' },
  },
  {
    id: 'python',
    q: 'How strong is her Python?',
    keys: ['python', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'pyspark', 'script', 'data'],
    a: `Proficient. Used for data work with pandas, NumPy, Matplotlib, Seaborn and PySpark, for cleaning raw Excel into Parquet, and for object-oriented coursework covering file handling, sorting and encryption. Completed the 7-course Python Data Fundamentals track at DataCamp.`,
  },
  {
    id: 'frontend',
    q: 'What frontend can she build?',
    keys: ['frontend', 'react', 'ui', 'web', 'vite', 'css', 'html', 'design', 'native', 'mobile', 'expo', 'typescript', 'javascript'],
    a: `Working knowledge of React, React Native with Expo SDK 54, TypeScript and Vite, deployed on Vercel — three shipped apps to date. HTML/CSS is at a proficient level. She designs her own interfaces; the black-opal system on this site is hers, not a template.`,
    link: { label: 'See projects', to: '/projects' },
  },
  {
    id: 'fullstack',
    q: 'Has she done full-stack or backend work?',
    keys: ['backend', 'fullstack', 'full-stack', 'django', 'crud', 'server', 'api', 'auth'],
    a: `Yes. Built a full-stack CRUD web app with Django, MySQL and Bootstrap including image upload during her LGU internship. On personal projects she uses Supabase for Postgres, auth and row-level security, so every user only sees their own data.`,
  },
  {
    id: 'ai',
    q: 'How does she use AI in her work?',
    keys: ['ai', 'llm', 'chatgpt', 'claude', 'copilot', 'gpt', 'assisted', 'groq', 'gemini'],
    a: `AI-assisted, judgment-led. She builds with AI help but owns the review layer — deciding what is worth building, catching wrong output, and structuring it cleanly. She marks what she does not know instead of pretending. Fyropy also integrates Groq and Gemini through a bring-your-own-key setup.`,
  },
  {
    id: 'networking',
    q: 'Does she have networking or hardware skills?',
    keys: ['network', 'networking', 'cisco', 'ccna', 'hardware', 'cable', 'ethernet', 'esp32', 'arduino', 'circuit', 'electronics'],
    a: `Yes. Built and tested Cat5e/Cat6 cables, configured IP settings, printer sharing and small-office networks at the LGU. Certified CCNA: Introduction to Networks, with Packet Tracer and subnetting practice. On the hardware side: breadboarding, circuit design, Arduino, and ESP32 integration for her capstone.`,
  },

  // ---------- QA ----------
  {
    id: 'qa',
    q: 'Does she have QA or testing experience?',
    keys: ['qa', 'test', 'testing', 'tester', 'quality', 'assurance', 'bug', 'bugs', 'vitest', 'debug', 'manual'],
    a: `Yes — three months as a Quality Assurance trainee at DOST–CO-PES (Project LODI). She wrote and revised test cases for two government web systems, DIMT and ISSP, from screen design specifications, executed functional tests across Admin and Agency Focal roles in a VPN-secured environment, and logged structured pass/fail reports. Bugs she found included Ñ/ñ special-character handling, input-validation gaps, UI misalignments and broken redirects.`,
    link: { label: 'See experience', to: '/experience' },
  },
  {
    id: 'automation',
    q: 'Can she do automated testing?',
    keys: ['automation', 'automated', 'ci', 'pipeline', 'unit', 'github actions', 'coverage'],
    a: `On her own projects, yes. Aralite has Vitest unit tests running through GitHub Actions CI on every push. Her professional QA experience so far is manual test-case design and execution, which she is honest about — automation is something she is building on her own.`,
  },

  // ---------- PROJECTS ----------
  {
    id: 'projects',
    q: 'What has she built?',
    keys: ['project', 'projects', 'built', 'work', 'portfolio', 'app', 'apps', 'shipped'],
    a: `Three deployed builds: BIO-FISH (IoT capstone control app), Aralite (in-browser SQL analytics), and Fyropy (AI capture app). Plus coursework in MySQL replication, AutoCAD drafting, logic circuits, and robotics.`,
    link: { label: 'View all projects', to: '/projects' },
  },
  {
    id: 'biofish',
    q: 'What is BIO-FISH?',
    keys: ['biofish', 'bio-fish', 'fish', 'capstone', 'thesis', 'bioplastic', 'esp32', 'iot', 'android'],
    a: `Her 2026 capstone, as lead developer. A cross-platform app controlling an ESP32 machine that turns fish-scale waste into bioplastic across four automated stages, using React Native with Expo and Supabase realtime for live status and remote commands. Shipped to web on Vercel and to Android via EAS Build. It also has a scripted Demo Mode that simulates a full production run without hardware. Named a Top 8 finalist at the APEAR 2026 prototyping exhibit.`,
    link: { label: 'Open BIO-FISH', href: 'https://biofish-control.vercel.app' },
  },
  {
    id: 'aralite',
    q: 'What is Aralite?',
    keys: ['aralite', 'dashboard', 'analytics', 'deped', 'enrollment', 'parquet', 'charts', 'recharts'],
    a: `A self-learning project that rebuilt a Big Data course activity into a deployed dashboard on a public DepEd dataset — 60,000+ schools and 27M learners. It runs real SQL in the browser with DuckDB-WASM so no server is needed, cleans raw Excel into Parquet with Python and pandas, filters from region down to barangay, and turns plain English questions into SQL. Built with React, TypeScript, Vite and Recharts, unit-tested with Vitest and checked by GitHub Actions CI.`,
    link: { label: 'Open Aralite', href: 'https://aralite.vercel.app' },
  },
  {
    id: 'fyropy',
    q: 'What is Fyropy?',
    keys: ['fyropy', 'second brain', 'notes', 'triage', 'capture', 'tasks'],
    a: `A capture-first notes and tasks app with AI auto-triage for type, tags, summary and topic, plus a weekly digest and an insights dashboard. Built with React Native, Expo and Supabase using bring-your-own-key Groq or Gemini. Includes undo-delete, keyboard shortcuts, live search, priority and due-date filters, and CSV/JSON export.`,
    link: { label: 'Open Fyropy', href: 'https://fyropy.vercel.app' },
  },

  // ---------- EXPERIENCE / EDUCATION ----------
  {
    id: 'experience',
    q: 'What work experience does she have?',
    keys: ['experience', 'intern', 'internship', 'ojt', 'lodi', 'dost', 'lgu', 'spes', 'history', 'worked'],
    a: `Three roles. Quality Assurance trainee at DOST–CO-PES ITD on Project LODI (2025), IT trainee at the Local Government of Cavite MIS Department (2024), and SPES student worker at the City Social Welfare & Development Office (2022). The two internships were 300 hours each.`,
    link: { label: 'See experience', to: '/experience' },
  },
  {
    id: 'education',
    q: 'Where did she study?',
    keys: ['education', 'school', 'university', 'degree', 'pup', 'college', 'gwa', 'grade', 'course'],
    a: `BS Computer Engineering with a Big Data specialization at the Polytechnic University of the Philippines Manila, 2022–2026, GWA 1.50, on a DOST–JLSS scholarship. Before that, STE and STEM at Cavite National High School with a GPA of 95.`,
  },
  {
    id: 'leadership',
    q: 'Has she led anything?',
    keys: ['lead', 'leader', 'leadership', 'ascend', 'organize', 'officer', 'media', 'head', 'event'],
    a: `Yes. Media Head for Software Engineering Day 2026 (ASCEND), a 3-day Computer Engineering symposium, where she led social media and live coverage. She was also lead developer on her capstone team and project leader in Computer Project Management, tracking milestones and defining deliverables per member. YES-O officer for three years in high school.`,
  },
  {
    id: 'certs',
    q: 'What certifications does she hold?',
    keys: ['cert', 'certs', 'certificate', 'certification', 'ccna', 'datacamp', 'cisco', 'huawei', 'training', 'course'],
    a: `CCNA: Introduction to Networks from Cisco Networking Academy, HCCDA–GaussDB from Huawei ICT Academy, and DataCamp tracks in Python Data Fundamentals, GitHub Foundations, Intermediate SQL and Introduction to Excel.`,
    link: { label: 'View certificates', to: '/certificates' },
  },
  {
    id: 'awards',
    q: 'Has she won anything?',
    keys: ['award', 'awards', 'honor', 'honors', 'scholar', 'scholarship', 'jlss', 'apear', 'win', 'recognition'],
    a: `DOST–JLSS scholar, qualified through a competitive exam. BIO-FISH was a Top 8 finalist at the 4th Annual Prototyping Exhibit, Awards & Recognition (APEAR 2026). Earlier: 1st place in Feature Writing at the Division Schools Press Conference and a regional delegate, plus Arnis medals at provincial and regional level.`,
  },

  // ---------- WORKING STYLE ----------
  {
    id: 'strength',
    q: 'What are her strengths?',
    keys: ['strength', 'strengths', 'good', 'best', 'why', 'stand out', 'different'],
    a: `Precision and follow-through. She catches inconsistencies fast, keeps clean file structure with no shortcuts, and is honest with data — flagging what is unconfirmed instead of filling gaps. Her QA background means she looks for what breaks before shipping. She also builds with a visual identity, so her work does not look generic.`,
  },
  {
    id: 'weakness',
    q: 'What is she working on improving?',
    keys: ['weakness', 'weaknesses', 'improve', 'growth', 'struggle', 'weak', 'learning'],
    a: `Communication and presenting. She is more comfortable building than speaking, so she is deliberately practicing writing things up clearly — this answer bank is part of that. On the technical side she is currently building depth in Power BI and test automation.`,
  },
  {
    id: 'style',
    q: 'How does she work in a team?',
    keys: ['team', 'collaborate', 'teamwork', 'manage', 'communication', 'personality', 'culture'],
    a: `She has led a capstone team, served as project leader in coursework, and worked with a senior technical specialist in QA review sessions where she applied feedback to widen test coverage. Quiet and self-directed; works best with clear scope and written context.`,
  },

  // ---------- LOGISTICS ----------
  {
    id: 'location',
    q: 'Where is she based?',
    keys: ['location', 'where', 'based', 'city', 'cavite', 'remote', 'relocate', 'onsite', 'manila', 'hybrid'],
    a: `Cavite City, Philippines. Open to remote, hybrid, or onsite roles in Metro Manila.`,
  },
  {
    id: 'contact',
    q: 'How do I reach her?',
    keys: ['contact', 'email', 'reach', 'message', 'phone', 'linkedin', 'connect', 'talk', 'interview'],
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
    keys: ['github', 'code', 'repo', 'repository', 'source', 'commits', 'git'],
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
export const starterIds = ['who', 'skills', 'qa', 'projects', 'roles']

/**
 * Score one entry against a lowercase query.
 * Exact key match scores highest, then prefix, then substring.
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