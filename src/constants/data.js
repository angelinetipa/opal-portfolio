// ============================================================
// ALL SITE CONTENT LIVES HERE.
// Edit this file to update the portfolio (until Supabase admin
// mode is wired in — then this becomes the fallback/seed data).
// ============================================================

export const profile = {
  name: 'Ma. Angeline T. Tipa',
  shortName: 'Angeline',
  role: 'Computer Engineer · Data & Software',
  tagline: 'I turn raw data and rough ideas into things that work — and look good doing it.',
  about: [
    `I'm a 4th-year Computer Engineering student at the Polytechnic University of the Philippines, specializing in Big Data. I work across the whole stack — from soldering and sensors up to dashboards, apps, and databases.`,
    `How I work matters as much as what I build: detail-obsessed, honest with data (I flag what's unconfirmed instead of faking numbers), and disciplined — small steps, clean structure, proper documentation. I build with identity, not just function; my projects carry a recognizable design fingerprint.`,
  ],
  location: 'Cavite City, Philippines',
  email: 'angelinetipa@gmail.com',
  phone: '0928 372 6099',
  linkedin: 'https://www.linkedin.com/in/maatipa',
  github: 'https://github.com/angelinetipa',
  targets: ['Data Analyst', 'Data Engineer', 'Software Developer'],
};

export const stats = [
  { value: '3', label: 'Internships / work experiences' },
  { value: '10+', label: 'Academic & personal projects' },
  { value: '2026', label: 'BSCpE — expected graduation' },
  { value: 'DOST', label: 'JLSS Scholar' },
];

// Grouped toolkit — no fake percentages, just what she actually works with.
export const toolkit = [
  {
    group: 'Data & Analytics',
    icon: '◆',
    items: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'PySpark', 'Dash', 'SQL', 'MySQL'],
  },
  {
    group: 'Software & Web',
    icon: '◇',
    items: ['React', 'React Native', 'Vite', 'Expo', 'Django', 'Supabase', 'Git & GitHub'],
  },
  {
    group: 'Hardware & Systems',
    icon: '▲',
    items: ['Arduino', 'C / C++', 'Circuit Design', 'Networking', 'CISCO basics', 'AutoCAD'],
  },
];

export const experience = [
  {
    id: 'dost',
    role: 'Quality Assurance Trainee',
    org: 'DOST COPES – ITD (Project LODI)',
    place: 'Taguig City',
    period: 'Jul – Sep 2025',
    points: [
      'Wrote and revised test cases for 15+ UI screens of two government web systems (DIMT & ISSP)',
      'Executed functional tests across multiple user roles in a VPN-secured environment',
      'Documented bugs: special character handling, validation gaps, UI misalignments, broken redirects',
      'Logged structured Excel test reports; improved coverage through senior review sessions',
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
      'Built and tested Cat5e/Cat6 cables; configured IPs, printer sharing, small office networks',
      'Developed a full-stack CRUD web app (Django + MySQL + Bootstrap) with image upload',
      'Studied CompTIA Network+ concepts: OSI, switching, subnetting, troubleshooting',
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

export const projects = [
  {
    id: 'biofish',
    title: 'BIO-FISH Monitoring App',
    subtitle: 'Thesis · In Progress',
    description:
      'Cross-platform app for a machine that turns fish scale waste into bioplastic. Real-time machine data viewable from any device — mobile (React Native + Expo) and web (React + Vite + Supabase, deployed on Vercel).',
    tags: ['React Native', 'Supabase', 'IoT', 'Vercel'],
    accent: 'teal',
    image: null, // replace with image path later
    link: null,
  },
  {
    id: 'deped-dashboard',
    title: 'DepEd Enrollment Dashboard',
    subtitle: 'Big Data · Data Analyst role',
    description:
      'Enrollment data dashboard built with Pandas, PySpark, and Dash. Handled data cleaning, preprocessing, and dashboard layout design for clear visual insights.',
    tags: ['Pandas', 'PySpark', 'Dash', 'Data Cleaning'],
    accent: 'blue',
    image: null,
    link: null,
  },
  {
    id: 'db-replication',
    title: 'MySQL Replication System',
    subtitle: 'Database Management',
    description:
      'Master-Master and Master-Slave replication where multiple servers sync data in real time — demonstrating fault tolerance, consistency, and availability across nodes.',
    tags: ['MySQL', 'Replication', 'SQL'],
    accent: 'violet',
    image: null,
    link: null,
  },
  {
    id: 'crud',
    title: 'Records CRUD Web App',
    subtitle: 'Internship project',
    description:
      'Full-stack records system with add / view / update / delete and image upload, built with Django, MySQL, and Bootstrap during my MIS internship.',
    tags: ['Django', 'MySQL', 'Bootstrap'],
    accent: 'blue',
    image: null,
    link: null,
  },
  {
    id: 'traffic',
    title: 'Two-Way Traffic Light System',
    subtitle: 'Logic Circuits & Design',
    description:
      'Digital traffic light using 74LS193 counters and 7-segment displays — state tables, Karnaugh maps, and schematic simulations.',
    tags: ['Logic Design', 'K-Maps', 'Electronics'],
    accent: 'teal',
    image: null,
    link: null,
  },
  {
    id: 'climber',
    title: 'Climbing Robot',
    subtitle: 'Electrical & Electronic Circuits',
    description:
      'A 3-step climbing robot using IR sensors, relays, and DC motors — wiring, testing, and troubleshooting from scratch.',
    tags: ['Arduino', 'Sensors', 'Robotics'],
    accent: 'violet',
    image: null,
    link: null,
  },
];

export const certificates = [
  // Add real certificates here. image: '/certs/filename.jpg'
  { id: 'c1', title: 'Certificate placeholder', issuer: 'Issuer name', year: '2025', image: null },
  { id: 'c2', title: 'Certificate placeholder', issuer: 'Issuer name', year: '2025', image: null },
  { id: 'c3', title: 'Certificate placeholder', issuer: 'Issuer name', year: '2024', image: null },
];

export const awards = [
  'DOST–JLSS Scholar (2024)',
  '1st Place — Feature Writing, DSPC (2015)',
  '1st Place — Science Investigatory Project (2015)',
  '1st Place — Kulay at Tubig Regada Painting Competition (2015)',
  'Arnis medalist — Solo Baston & Combative events',
];

export const artworks = [
  // Realistic portrait drawings (graphite, real-people references).
  // Replace image: null with '/art/filename.jpg'
  { id: 'a1', title: 'Portrait study I', medium: 'Graphite on paper', image: null },
  { id: 'a2', title: 'Portrait study II', medium: 'Graphite on paper', image: null },
  { id: 'a3', title: 'Portrait study III', medium: 'Graphite on paper', image: null },
  { id: 'a4', title: 'Portrait study IV', medium: 'Graphite on paper', image: null },
];

export const education = [
  {
    school: 'Polytechnic University of the Philippines',
    degree: 'BS Computer Engineering — Big Data specialization',
    period: '2022 – Present',
  },
  {
    school: 'Cavite National High School',
    degree: 'STE (Junior HS) · STEM (Senior HS) — GPA 95',
    period: '2016 – 2022',
  },
];
