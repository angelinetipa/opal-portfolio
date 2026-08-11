// ============================================================
// ALL SITE CONTENT LIVES HERE.
// This is the seed / fallback: the site always renders from
// this instantly, then upgrades from Supabase if the admin has
// saved newer content. Keep this file current so the site is
// complete even if Supabase is ever asleep.
//
// RULE: after editing anything through /admin, mirror the change
// back into this file. Otherwise a paused database serves stale
// content with no warning.
//
// ORDER: certificates and projects are listed newest first.
// On the live site the order comes from `sort_order` in Supabase,
// so reorder there too after adding anything.
// ============================================================

export const profile = {
  name: 'Ma. Angeline Tipa',
  shortName: 'Angeline',
  role: 'Computer Engineering · Data & Software',
  status: 'Graduating Sept 2026 · open to work',
  tagline: "I test what I build — and I say what it can't do.",
  about: [
    `I'm a graduating Computer Engineering student at PUP Manila, majoring in Big Data. I led the control app for BIO-FISH, our capstone machine that turns fish-scale waste into bioplastic, and I've shipped three more projects on my own since. My QA internship at DOST taught me the habit I bring to everything: check the empty state, check the error state, check the thing nobody thought to try.`,
    `I build with AI tools, but I own the decisions — what's worth building, whether the output is actually right, and how it's structured. I'd rather write down what a project can't do than let someone find out later. INFP heart, Scorpio precision: quiet, competitive, and careful with the details.`,
  ],
  location: 'Cavite City, Philippines',
  email: 'angelinetipa@gmail.com',
  phone: '0928 372 6099',
  linkedin: 'https://www.linkedin.com/in/angelinetipa',
  github: 'https://github.com/angelinetipa',
  photo: '/profile.webp',
  resume: '/resume.pdf',
  cv: '/cv.pdf',
  targets: ['Software Developer', 'Data Engineer', 'Data Analyst', 'QA Engineer'],
};

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
    items: ['Manual QA', 'Test design', 'Jest', 'Vitest', 'Playwright', 'GitHub Actions', 'C / C++', 'Arduino'],
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
//
// Every claim here must survive an interview. State what the
// project is, one decision behind it, and what shipped.
//
// Subtitles name the real scope. "Capstone thesis" was wrong —
// the machine was the thesis; the app was a separate course
// requirement that I led.
// ------------------------------------------------------------
export const projects = [
  {
    id: 'biofish',
    title: 'BIO-FISH — IoT Control App',
    subtitle: 'Capstone team of 4 · Lead Developer (app)',
    category: 'featured',
    description:
      'React Native (Expo) app controlling our capstone ESP32 machine, which turns fish-scale waste into bioplastic across four automated stages. Machine commands are modelled as a Supabase Postgres queue rather than a status flag, so a dropped WiFi connection can never leave the machine acting on an old command. Shipped to web (Vercel) and Android (EAS Build), with a no-login demo mode that runs a full simulated cycle — no hardware needed. The machine itself was a team effort and a Top 8 finalist at APEAR 2026; I led development of the app.',
    tags: ['React Native', 'Expo', 'Supabase', 'ESP32', 'IoT'],
    accent: 'teal',
    image: 'projects/biofish.webp',
    live: 'https://biofish-control.vercel.app',
    repo: 'https://github.com/angelinetipa/biofish-control',
  },
  {
    id: 'aralite',
    title: 'Aralite — In-Browser SQL Analytics',
    subtitle: 'Personal project · Data',
    category: 'featured',
    description:
      'Rebuilt a Big Data course activity from scratch into a deployed dashboard on a public DepEd dataset — 60,171 schools, 27M learners. A Python and pandas pipeline turns raw Excel into Parquet, reshaping 58 enrollment columns into 3.5M rows with zero dropped, and writes a quality report proving it. The browser then runs real SQL over that data with DuckDB-WASM, so there is no server and no database bill. Cascading Region-to-Barangay filters, auto-generated findings, and optional plain-English-to-SQL with your own AI key. Unit-tested with Vitest, checked by GitHub Actions on every push.',
    tags: ['DuckDB-WASM', 'React', 'TypeScript', 'Python', 'Pandas'],
    accent: 'blue',
    image: 'projects/aralite.webp',
    live: 'https://aralite.vercel.app',
    repo: 'https://github.com/angelinetipa/aralite',
  },
  {
    id: 'fyropy',
    title: 'Fyropy — AI Notes & Tasks App',
    subtitle: 'Personal project · Software',
    category: 'featured',
    description:
      'A notes and tasks app where AI sorts each capture into a type, tags, a summary, and a topic group, using the user\'s own Groq or Gemini key. Built with React Native, Expo, TypeScript strict, and Supabase (Postgres, Auth, Row Level Security). Writes are optimistic — the screen updates first and rolls back if the save fails — which is exactly what the hook tests exist to prove. Tested at three levels with Jest, React Native Testing Library, and Playwright; GitHub Actions runs lint, typecheck, and tests on every pull request.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Testing'],
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

// Newest first. On the live site this order comes from `sort_order`
// in Supabase — reorder there too, or the site keeps the old order.
export const certificates = [
  { id: 'c1', title: 'Python Data Fundamentals (7-course track)', issuer: 'DataCamp', year: '2026', image: '/certs/python-data.jpeg' },
  { id: 'c2', title: 'Intermediate SQL', issuer: 'DataCamp', year: '2026', image: '/certs/intermediate-sql.jpeg' },
  { id: 'c3', title: 'Introduction to Excel', issuer: 'DataCamp', year: '2026', image: '/certs/excel.jpeg' },
  { id: 'c4', title: 'GitHub Foundations (4-course track)', issuer: 'DataCamp', year: '2025', image: '/certs/github-foundations.jpeg' },
  { id: 'c5', title: 'CCNA: Introduction to Networks', issuer: 'Cisco Networking Academy', year: '2025', image: '/certs/ccna.webp' },
  { id: 'c6', title: 'HCCDA – GaussDB', issuer: 'Huawei ICT Academy', year: '2025', image: '/certs/gaussdb.webp' },
  { id: 'c7', title: 'Project LODI — OJT Completion (300 hrs)', issuer: 'DOST Central Office – ITD', year: '2025', image: '/certs/lodi.webp' },
  { id: 'c8', title: 'MIS Internship Completion (300 hrs)', issuer: 'Local Government of Cavite', year: '2024', image: '/certs/lgu.webp' },
];

// Images live in public/art/ so they still load when Supabase is asleep.
// Admin uploads go to Supabase Storage; mirror new pieces here afterwards.
export const artworks = [
  { id: 'a1', title: 'Yeji (ITZY)', medium: 'Graphite on paper', image: '/art/yeji.jpg' },
  { id: 'a2', title: 'Cat Portrait', medium: 'Graphite on paper', image: '/art/cat-portrait.jpg' },
  { id: 'a3', title: 'Byeon Woo-seok', medium: 'Graphite on paper', image: '/art/byeon-woo-seok.jpg' },
];

export const education = [
  {
    school: 'Polytechnic University of the Philippines',
    degree: 'BS Computer Engineering — Big Data · GWA 1.50 · DOST–JLSS Scholar',
    period: '2022 – 2026',
    note: 'Media Head — Software Engineering Day 2026 (ASCEND), 3-day CpE symposium',
  },
  {
    school: 'Cavite National High School',
    degree: 'STE (Junior HS) · STEM (Senior HS) — GPA 95',
    period: '2016 – 2022',
    note: 'YES-O Officer (3 years) · academic, journalism, and science contests to regional level',
  },
];