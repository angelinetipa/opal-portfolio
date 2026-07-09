// ============================================================
// ALL SITE CONTENT LIVES HERE.
// This is the seed / fallback: the site always renders from
// this instantly, then upgrades from Supabase if the admin has
// saved newer content. Keep this file current so the site is
// complete even if Supabase is ever asleep.
// ============================================================

export const profile = {
  name: 'Ma. Angeline Tipa',
  shortName: 'Angeline',
  role: 'Computer Engineering · Data & Software',
  status: 'Graduating Sept 2026 · open to work',
  tagline: 'A careful, design-conscious engineer who finishes things properly.',
  about: [
    `I'm a graduating Computer Engineering student at the Polytechnic University of the Philippines (Big Data), and lead developer of BIO-FISH — my capstone: a machine that turns fish-scale waste into bioplastic. But how I work matters more than any one project. I'm detail-obsessed, honest with data — I flag what's unconfirmed instead of faking numbers — and disciplined: small steps, clean structure, no shortcuts.`,
    `I work the way modern engineers do: AI-assisted, but judgment-led. The skill I trust isn't building from memory — it's knowing what's worth building, catching when an output is wrong, and structuring it cleanly. INFP heart, Scorpio precision: quietly competitive, creative with constraints, and self-aware enough to mark what I don't know instead of pretending I do.`,
  ],
  location: 'Cavite City, Philippines',
  email: 'angelinetipa@gmail.com',
  phone: '0928 372 6099',
  linkedin: 'https://www.linkedin.com/in/maatipa',
  github: 'https://github.com/angelinetipa',
  photo: '/profile.webp', // set to '/profile.webp' after adding public/profile.webp
  resume: '/resume.pdf', // drop your PDF at public/resume.pdf
  cv: '/cv.pdf',         // drop your CV PDF at public/cv.pdf
  targets: ['Software Developer', 'Data Engineer', 'Data Analyst', 'QA Engineer'],
};

export const stats = [
  { value: '3', label: 'Deployed live apps' },
  { value: '27M+', label: 'Learner records analyzed' },
  { value: '1.07', label: 'GWA — 4th year' },
  { value: '4', label: 'Industry certifications' },
];

// Grouped toolkit — no fake percentages, just what she actually works with.
export const toolkit = [
  {
    group: 'Data & Analytics',
    icon: '◆',
    items: ['Python', 'Pandas', 'NumPy', 'DuckDB', 'Parquet', 'PySpark', 'SQL', 'Matplotlib'],
  },
  {
    group: 'Software & Web',
    icon: '◇',
    items: ['React', 'React Native', 'Expo', 'TypeScript', 'Vite', 'Supabase', 'Django', 'Git & GitHub'],
  },
  {
    group: 'Testing & Hardware',
    icon: '▲',
    items: ['Manual QA', 'Test design', 'Vitest', 'GitHub Actions', 'C / C++', 'Arduino', 'Networking', 'AutoCAD'],
  },
];

export const experience = [
  {
    id: 'dost',
    role: 'Quality Assurance Trainee',
    org: 'DOST CO-PES – ITD (Project LODI)',
    place: 'Taguig City',
    period: 'Jul – Sep 2025',
    points: [
      'Wrote and revised detailed test cases for UI screens of two government web systems (DIMT & ISSP)',
      'Executed functional tests across multiple user roles (Admin, Agency Focal) in a VPN-secured environment',
      'Logged structured Excel reports with pass/fail status, tester details, and per-case remarks',
      'Improved coverage through senior review sessions',
    ],
    tags: ['QA', 'Test Cases', 'Documentation'],
  },
  {
    id: 'lgu',
    role: 'IT Trainee',
    org: 'Local Government of Cavite — MIS Dept.',
    place: 'Cavite City',
    period: 'Jul – Sep 2024',
    points: [
      'PC setup, formatting, and software installation on government computers',
      'Built and tested Cat5e/Cat6 cables; configured IPs, printer sharing, small-office networks',
      'Developed a full-stack CRUD web app (Django + MySQL + Bootstrap) with image upload',
      'Studied CompTIA Network+ / Cisco concepts: OSI, switching, subnetting, troubleshooting',
    ],
    tags: ['Networking', 'Django', 'Hardware'],
  },
  {
    id: 'spes',
    role: 'SPES Student Worker',
    org: 'City Social Welfare & Development Office',
    place: 'Cavite City',
    period: 'Oct – Dec 2022',
    points: [
      'Encoded and organized digital records for DSWD, scholarship, and housing programs',
      'Cross-referenced masterlists to catch errors and duplicate entries',
      'Compiled and verified IDs, eligibility documents, and GIS forms',
    ],
    tags: ['Data Entry', 'Records', 'Verification'],
  },
];

// ------------------------------------------------------------
// PROJECTS
// category: 'featured'  → main grid + Home "Selected work"
// category: 'coursework'→ collapsed "Coursework & fundamentals"
// live / repo: shown as buttons on the card and in the modal
// ------------------------------------------------------------
export const projects = [
  {
    id: 'biofish',
    title: 'BIO-FISH v2 — IoT Control App',
    subtitle: 'Capstone thesis · Lead Developer',
    category: 'featured',
    description:
      'Cross-platform app controlling an ESP32 machine that turns fish-scale waste into bioplastic across four automated stages. Built with React Native + Expo (SDK 54) and Supabase realtime (RLS, subscriptions) for live machine status and remote command control. Modular, production-style codebase with a custom design system and scripted Demo Mode; shipped to web (Vercel) and Android (EAS Build).',
    tags: ['React Native', 'Expo', 'Supabase', 'ESP32', 'IoT'],
    accent: 'teal',
    image: 'projects/biofish.webp',
    live: 'https://biofish-control.vercel.app',
    repo: 'https://github.com/angelinetipa/biofish-control',
  },
  {
    id: 'aralite',
    title: 'Aralite — In-Browser SQL Analytics',
    subtitle: 'Self-learning project · Data Engineering',
    category: 'featured',
    description:
      'Rebuilt a Big Data course activity from scratch into a deployed dashboard analyzing a public DepEd dataset — 60,000+ schools, 27M+ learners. Runs DuckDB-WASM (real SQL) fully in-browser with no server; a Python/pandas pipeline cleans raw Excel into Parquet. Cascading Region → Barangay filters, auto-generated findings, and optional plain-English-to-SQL (BYOK AI).',
    tags: ['DuckDB-WASM', 'React', 'TypeScript', 'Python', 'Pandas'],
    accent: 'blue',
    image: 'projects/aralite.webp',
    live: 'https://aralite.vercel.app',
    repo: 'https://github.com/angelinetipa/aralite',
  },
  {
    id: 'fyropy',
    title: 'Fyropy — AI "Second Brain" Capture App',
    subtitle: 'Self-learning project · Software',
    category: 'featured',
    description:
      'Capture-first notes/tasks app with AI auto-triage (type, tags, summary, topic), a weekly AI digest, and an insights dashboard. Built with React Native + Expo and Supabase (Postgres, Auth, RLS), BYOK Groq/Gemini. CI runs lint → typecheck → test via GitHub Actions.',
    tags: ['React Native', 'Expo', 'Supabase', 'AI (Groq/Gemini)', 'CI'],
    accent: 'violet',
    image: 'projects/fyropy.webp',
    live: 'https://fyropy.vercel.app',
    repo: 'https://github.com/angelinetipa/fyropy',
  },

  // ---- Coursework & fundamentals (collapsed) ----
  {
    id: 'db-replication',
    title: 'MySQL Replication System',
    subtitle: 'Database Management',
    category: 'coursework',
    description:
      'Master-Master and Master-Slave replication where multiple servers sync data in real time — demonstrating fault tolerance, consistency, and availability across nodes.',
    tags: ['MySQL', 'Replication', 'SQL'],
    accent: 'violet',
    image: null,
    live: null,
    repo: null,
  },
  {
    id: 'crud',
    title: 'Records CRUD Web App',
    subtitle: 'Internship project',
    category: 'coursework',
    description:
      'Full-stack records system with add / view / update / delete and image upload, built with Django, MySQL, and Bootstrap during my MIS internship.',
    tags: ['Django', 'MySQL', 'Bootstrap'],
    accent: 'blue',
    image: null,
    live: null,
    repo: null,
  },
  {
    id: 'traffic',
    title: 'Two-Way Traffic Light System',
    subtitle: 'Logic Circuits & Design',
    category: 'coursework',
    description:
      'Digital traffic light using 74LS193 counters and 7-segment displays — state tables, Karnaugh maps, and schematic simulations.',
    tags: ['Logic Design', 'K-Maps', 'Electronics'],
    accent: 'teal',
    image: null,
    live: null,
    repo: null,
  },
  {
    id: 'climber',
    title: 'Climbing Robot',
    subtitle: 'Electrical & Electronic Circuits',
    category: 'coursework',
    description:
      'A 3-step climbing robot using IR sensors, relays, and DC motors — wiring, testing, and troubleshooting from scratch.',
    tags: ['Arduino', 'Sensors', 'Robotics'],
    accent: 'violet',
    image: null,
    live: null,
    repo: null,
  },
];

export const certificates = [
  // Add the image later: image: '/certs/filename.jpg'
  { id: 'c1', title: 'CCNA: Introduction to Networks', issuer: 'Cisco Networking Academy', year: '2026', image: '/certs/ccna.webp' },
  { id: 'c2', title: 'Associate Data Analyst', issuer: 'DataCamp', year: '2026', image: '/certs/ada.webp' },
  { id: 'c3', title: 'Power BI Fundamentals', issuer: 'DataCamp', year: '2026', image: '/certs/pbi.webp' },
  { id: 'c4', title: 'HCCDA – GaussDB', issuer: 'Huawei ICT Academy', year: '2025', image: '/certs/gaussdb.webp' },
  { id: 'c5', title: 'Project LODI — OJT Completion (300 hrs)', issuer: 'DOST Central Office – ITD', year: '2025', image: '/certs/lodi.webp' }, 
  { id: 'c6', title: 'MIS Internship Completion (300 hrs)', issuer: 'Local Government of Cavite', year: '2024', image: '/certs/lgu.webp' },
];

export const awards = [
  'DOST–JLSS Scholar — competitive scholarship exam (2024)',
  'BIO-FISH — Top 8 Finalist, APEAR Prototyping Exhibit (2026)',
  '1st Place, Feature Writing (DSPC) · RSPC delegate (2015)',
  'Arnis medalist — Solo Baston & Combative events (2017)',
];

export const artworks = [
  {
    id: 'a1',
    title: 'Yeji (ITZY)',
    medium: 'Graphite on paper',
    image: 'https://hcorszokbotwdbpjglvl.supabase.co/storage/v1/object/public/media/1781426161087-dinup0.jpg',
  },
  {
    id: 'a2',
    title: 'Cat Portrait',
    medium: 'Graphite on paper',
    image: 'https://hcorszokbotwdbpjglvl.supabase.co/storage/v1/object/public/media/1781426227544-1a0qqu.jpg',
  },
  {
    id: 'a3',
    title: 'Byeon Woo-seok',
    medium: 'Graphite on paper',
    image: 'https://hcorszokbotwdbpjglvl.supabase.co/storage/v1/object/public/media/1781426400383-z6ukfi.jpg',
  },
];

export const education = [
  {
    school: 'Polytechnic University of the Philippines',
    degree: 'BS Computer Engineering — Big Data · GWA 1.07',
    period: '2022 – 2026',
  },
  {
    school: 'Cavite National High School',
    degree: 'STE (Junior HS) · STEM (Senior HS) — GPA 95',
    period: '2016 – 2022',
  },
];