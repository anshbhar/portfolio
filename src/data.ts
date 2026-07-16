export type MediaType = 'image' | 'video';

export interface MediaReveal {
  type: MediaType;
  src: string;
  poster?: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  media: MediaReveal;
  accent: string;
  github?: string;
  demo?: string;
  longDescription?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  media: MediaReveal;
  accent: string;
<<<<<<< HEAD
=======
  pdfUrl: string;
>>>>>>> 7e2d0c5 (Update portfolio website files)
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  media: MediaReveal;
  accent: string;
<<<<<<< HEAD
=======
  certificate?: MediaReveal;
>>>>>>> 7e2d0c5 (Update portfolio website files)
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  media: MediaReveal;
  accent: string;
<<<<<<< HEAD
=======
  result?: MediaReveal;
>>>>>>> 7e2d0c5 (Update portfolio website files)
}

// ─── How to use your own media ────────────────────────────────────────────
// For IMAGES: set media.type = 'image' and media.src to your image URL
//   (e.g. 'https://images.pexels.com/photos/123/...jpeg' or your own hosted URL)
// For VIDEOS: set media.type = 'video', media.src to your video URL
//   (.mp4 recommended), and media.poster to a thumbnail image URL.
// For project links: set github and demo to your repository / live-site URLs.
// Replace profile.photo with your own portrait image URL.
// ──────────────────────────────────────────────────────────────────────────

export const profile = {
<<<<<<< HEAD
  name: 'Aria Vance',
  title: 'Creative Developer & 3D Engineer',
  tagline: 'I craft immersive web experiences where code meets dimension.',
  bio: 'Frontend engineer specializing in interactive 3D, WebGL, and motion design. I turn ambitious ideas into pixel-perfect, performant interfaces that feel alive.',
  photo: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=800',
  email: 'aria.vance@studio.dev',
  location: 'Berlin, DE',
  socials: [
    { label: 'GitHub', handle: '@ariavance', url: '#' },
    { label: 'Dribbble', handle: '@ariavance', url: '#' },
    { label: 'LinkedIn', handle: 'in/ariavance', url: '#' },
  ],
  stats: [
    { label: 'Years Experience', value: 7 },
    { label: 'Projects Shipped', value: 48 },
    { label: 'Awards Won', value: 6 },
  ],
};

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Nebula Commerce',
    category: 'WebGL Shopping',
    year: '2024',
    description:
      'A real-time 3D product configurator with instant checkout. Users rotate, customize, and preview products in a shared WebGL scene before buying.',
    tags: ['React', 'Three.js', 'Stripe', 'GLSL'],
    media: {
      type: 'image',
      src: 'https://images.pexels.com/photos/3801168/pexels-photo-3801168.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Configurator live preview — 60fps on mid-tier mobile',
    },
    accent: '#38bdf8',
    github: 'https://github.com/yourname/nebula-commerce',
    demo: 'https://nebula.example.com',
    longDescription:
      'Nebula Commerce is a production-grade 3D product configurator. Customers spin, recolor, and inspect products in a shared WebGL scene, then check out instantly via Stripe. The render pipeline streams geometry so it holds 60fps even on mid-tier mobile hardware.',
  },
  {
    id: 'p2',
    title: 'Pulse Analytics',
    category: 'Data Visualization',
    year: '2024',
    description:
      'Immersive dashboard with 3D data landscapes. Complex datasets rendered as navigable terrain with interactive hotspots and live filtering.',
    tags: ['React', 'D3', 'WebGL', 'TypeScript'],
    media: {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/3129957/3129957-uhd_3840_2160_30fps.mp4',
      poster: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Live tour through the analytics terrain',
    },
    accent: '#2dd4bf',
    github: 'https://github.com/yourname/pulse-analytics',
    demo: 'https://pulse.example.com',
    longDescription:
      'Pulse Analytics renders complex datasets as navigable 3D terrain. Interactive hotspots reveal drill-downs, and a live filter bar reshapes the landscape in real time. Built for analysts who think spatially.',
  },
  {
    id: 'p3',
    title: 'Aurora Music Player',
    category: 'Interactive Audio',
    year: '2023',
    description:
      'A generative-audio visualizer that paints reactive 3D aurora fields driven by frequency analysis. Built for live performance visuals.',
    tags: ['Web Audio', 'Shaders', 'React', 'Canvas'],
    media: {
      type: 'image',
      src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Aurora field reacting to a live drum loop',
    },
    accent: '#f59e0b',
    github: 'https://github.com/yourname/aurora-music',
    demo: 'https://aurora.example.com',
    longDescription:
      'Aurora is a generative visualizer that paints reactive 3D aurora fields from live audio frequency analysis. Designed for live performance visuals — drop in an audio source and the scene breathes with the music.',
  },
  {
    id: 'p4',
    title: 'Vortex Portfolio Engine',
    category: 'Developer Tooling',
    year: '2023',
    description:
      'An open-source portfolio framework with built-in 3D transitions, page choreography, and a visual scene editor. Powers this very site.',
    tags: ['React', 'Framer Motion', 'Vite', 'TypeScript'],
    media: {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/2022395/2022395-uhd_3840_2160_30fps.mp4',
      poster: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Scene editor with live transition preview',
    },
    accent: '#fb7185',
    github: 'https://github.com/yourname/vortex-engine',
    demo: 'https://vortex.example.com',
    longDescription:
      'Vortex is an open-source portfolio framework with first-class 3D page transitions, scene choreography, and a visual editor. It powers this very portfolio — the flip cards and clip-path reveals are all Vortex primitives.',
  },
  {
    id: 'p5',
    title: 'Terraform Maps',
    category: 'Geospatial 3D',
    year: '2022',
    description:
      'Browser-based 3D globe with procedural terrain, route animation, and real-time weather overlays. Used by logistics teams for route planning.',
    tags: ['Mapbox GL', 'Three.js', 'React', 'Node'],
    media: {
      type: 'image',
      src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Procedural terrain with live route overlay',
    },
    accent: '#38bdf8',
    github: 'https://github.com/yourname/terraform-maps',
    demo: 'https://terraform.example.com',
    longDescription:
      'Terraform Maps is a browser-based 3D globe with procedurally generated terrain, animated route arcs, and real-time weather overlays. Logistics teams use it to plan and visualize multi-stop routes in a single interactive scene.',
  },
  {
    id: 'p6',
    title: 'Kinetic Type Lab',
    category: 'Motion Design',
    year: '2022',
    description:
      'A playground for kinetic typography in the browser. Type flows, shatters, and reassembles in 3D space, exportable as video or Lottie.',
    tags: ['GSAP', 'Three.js', 'Canvas', 'Lottie'],
    media: {
      type: 'image',
      src: 'https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Kinetic type in mid-reassembly',
    },
    accent: '#2dd4bf',
    github: 'https://github.com/yourname/kinetic-type-lab',
    demo: 'https://kinetic.example.com',
    longDescription:
      'Kinetic Type Lab is a playground for browser-based kinetic typography. Type flows, shatters, and reassembles in 3D space, with one-click export to video or Lottie. Built for motion designers who prototype in code.',
  },
];

export const certificates: Certificate[] = [
  {
    id: 'c1',
    title: 'Advanced WebGL & Shaders',
    issuer: 'Khronos Group',
    date: 'Mar 2024',
    credentialId: 'GLSL-2024-0481',
    media: {
      type: 'image',
      src: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Capstone: real-time volumetric lighting shader',
    },
    accent: '#38bdf8',
  },
  {
    id: 'c2',
    title: 'React Performance Engineering',
    issuer: 'Meta Certified',
    date: 'Jan 2024',
    credentialId: 'META-RPE-7732',
    media: {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/5483076/5483076-hd_1080_1920_30fps.mp4',
      poster: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Recorded walkthrough of the optimization case study',
    },
    accent: '#2dd4bf',
  },
  {
    id: 'c3',
    title: 'Cloud Architecture (AWS)',
    issuer: 'Amazon Web Services',
    date: 'Sep 2023',
    credentialId: 'AWS-SAP-C019',
    media: {
      type: 'image',
      src: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Solutions Architect — Professional tier',
    },
    accent: '#f59e0b',
  },
  {
    id: 'c4',
    title: 'UX Motion Design',
    issuer: 'Interaction Design Foundation',
    date: 'Jun 2023',
    credentialId: 'IDF-MOTION-2290',
    media: {
      type: 'image',
      src: 'https://images.pexels.com/photos/1964451/pexels-photo-1964451.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Motion principles for interactive interfaces',
    },
    accent: '#fb7185',
  },
  {
    id: 'c5',
    title: 'TypeScript Deep Dive',
    issuer: 'Total TypeScript',
    date: 'Feb 2023',
    credentialId: 'TT-DD-5512',
    media: {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/3129957/3129957-uhd_3840_2160_30fps.mp4',
      poster: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Type-level programming demo reel',
    },
    accent: '#38bdf8',
  },
  {
    id: 'c6',
    title: 'Accessibility (WCAG 2.2)',
    issuer: 'Deque University',
    date: 'Nov 2022',
    credentialId: 'DEQUE-A11Y-8841',
    media: {
      type: 'image',
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Inclusive design certification',
    },
    accent: '#2dd4bf',
  },
];

export const experience: ExperienceItem[] = [
  {
    id: 'e1',
    role: 'Principal Creative Engineer',
    company: 'Studio Vortex',
    period: '2023 — Present',
    location: 'Berlin, DE',
    description:
      'Leading the interactive 3D practice for flagship client work. Architecting render pipelines, mentoring a team of six, and owning motion language.',
    highlights: [
      'Shipped 12 award-considered interactive sites',
      'Cut average load time 40% with streaming geometry',
      'Built the internal scene-transition framework',
    ],
    media: {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/2022395/2022395-uhd_3840_2160_30fps.mp4',
      poster: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Studio reel — selected interactive work',
=======
  name: 'Ansh Bhardwaj',
  title: 'Software Development Engineer — Full-Stack & Applied AI/ML',
  tagline: 'I build production-grade software and full-stack applications, with hands-on experience applying AI/ML to real-world problems.',
  bio: 'Aspiring Software Development Engineer with a full-stack engineering background — from production web applications (React, Node.js, Django) to applied machine learning projects spanning genomics, oncology prediction, and data-driven tooling. Cisco Networking Academy certified in cybersecurity, networking, and Python, and currently coordinating technical operations and IT infrastructure at New Hope AAS Consultants.',
  photo: '/profile-photo.jpg',
  email: 'anshb120207@gmail.com',
  location: 'Bihar, India',
  socials: [
    { label: 'GitHub', handle: '@anshbhar', url: 'https://github.com/anshbhar' },
    { label: 'LinkedIn', handle: 'in/ansh-bhardwaj-871bba417', url: 'https://www.linkedin.com/in/ansh-bhardwaj-871bba417' },
  ],
  stats: [
    { label: 'Cisco Certifications', value: 12 },
    { label: 'Major Projects', value: 5 },
    { label: 'Focus Areas', value: 3 },
  ],
};

// NOTE: `photo` is a placeholder — drop in your real portrait URL when you have one.

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'GENUS',
    category: 'Bioinformatics / AI',
    year: '2026',
    description:
      'Genomic Exploration of Natural Understanding & Species — a tool for exploring species genomics data through an interactive, AI-assisted interface.',
    tags: ['Python', 'Genomics', 'AI/ML', 'Data Visualization'],
    media: {
      type: 'video',
      src: '/videos/genus.mp4',
      poster: '/videos/posters/genus.jpg',
      caption: 'Walkthrough of the GENUS exploration interface',
    },
    accent: '#38bdf8',
    github: '',
    demo: '',
    longDescription:
      'GENUS (Genomic Exploration of Natural Understanding & Species) lets users explore genomic data across species through an interactive interface, pairing structured biological data with an accessible, AI-assisted way to navigate it.',
  },
  {
    id: 'p2',
    title: 'OncoLearn',
    category: 'Health-Tech / AI',
    year: '2026',
    description:
      'A breast cancer education and AI-prediction tool — combining clear educational content with a machine-learning model that estimates risk from input data.',
    tags: ['Python', 'Machine Learning', 'Healthcare', 'React'],
    media: {
      type: 'video',
      src: '/videos/oncolearn.mp4',
      poster: '/videos/posters/oncolearn.jpg',
      caption: 'Demo of the education flow and AI prediction module',
    },
    accent: '#fb7185',
    github: '',
    demo: '',
    longDescription:
      'OncoLearn pairs breast cancer education content with an AI prediction module, aiming to make risk-factor understanding more accessible while keeping the underlying model transparent about its limitations.',
  },
  {
    id: 'p3',
    title: 'FlashMind',
    category: 'EdTech',
    year: '2026',
    description:
      'Active recall flashcards app built to make spaced repetition and self-testing fast and frictionless in the browser.',
    tags: ['JavaScript', 'Spaced Repetition', 'Chrome'],
    media: {
      type: 'video',
      src: '/videos/flashmind.mp4',
      poster: '/videos/posters/flashmind.jpg',
      caption: 'FlashMind active recall session walkthrough',
    },
    accent: '#2dd4bf',
    github: '',
    demo: '',
    longDescription:
      'FlashMind is an active-recall flashcard tool built around spaced repetition principles, designed to make creating and reviewing cards quick enough to fit into daily study habits.',
  },
  {
    id: 'p4',
    title: 'Stock Tracker Pro',
    category: 'Finance / Data',
    year: '2026',
    description:
      'A stock tracking dashboard for monitoring prices, trends, and portfolio performance in one place.',
    tags: ['JavaScript', 'APIs', 'Data Visualization'],
    media: {
      type: 'video',
      src: '/videos/stock-tracker-pro.mp4',
      poster: '/videos/posters/stock-tracker-pro.jpg',
      caption: 'Stock Tracker Pro dashboard demo',
    },
    accent: '#f59e0b',
    github: '',
    demo: '',
    longDescription:
      'Stock Tracker Pro is a dashboard for tracking stock prices and trends, built to give a clean, at-a-glance view of portfolio performance and market movement.',
  },
  {
    id: 'p5',
    title: 'Web Hangman Pro',
    category: 'Web Game',
    year: '2026',
    description:
      'A polished, browser-based take on classic Hangman with a modern UI and smooth interaction design.',
    tags: ['JavaScript', 'HTML/CSS', 'Game Dev'],
    media: {
      type: 'video',
      src: '/videos/web-hangman-pro.mp4',
      poster: '/videos/posters/web-hangman-pro.jpg',
      caption: 'Gameplay walkthrough of Web Hangman Pro',
    },
    accent: '#a78bfa',
    github: '',
    demo: '',
    longDescription:
      'Web Hangman Pro reimagines the classic word-guessing game with a clean, modern interface and refined interaction details, built entirely for the browser.',
  },
];

// NOTE: descriptions above are inferred from the project names/recordings —
// swap in your own copy, and fill in `github` / `demo` links where you have them.

export const certificates: Certificate[] = [
  {
    id: 'c1',
    title: 'IT Essentials: PC Hardware and Software',
    issuer: 'Cisco Networking Academy',
    date: '03 Jan 2024',
    credentialId: 'Cisco NetAcad',
    media: {
      type: 'image',
      src: '/certs/thumbs/it-essentials-2024-01.jpg',
      caption: 'IT Essentials: PC Hardware and Software',
    },
    accent: '#38bdf8',
    pdfUrl: '/certs/it-essentials-2024-01.pdf',
  },
  {
    id: 'c2',
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    date: '12 Aug 2024',
    credentialId: 'Cisco NetAcad',
    media: {
      type: 'image',
      src: '/certs/thumbs/cybersecurity-essentials-cisco-2024-08.jpg',
      caption: 'Cybersecurity Essentials',
    },
    accent: '#2dd4bf',
    pdfUrl: '/certs/cybersecurity-essentials-cisco-2024-08.pdf',
  },
  {
    id: 'c3',
    title: 'Cybersecurity Essentials',
    issuer: 'New Government Polytechnic, Patna-13',
    date: '27 Oct 2024',
    credentialId: 'Cisco NetAcad',
    media: {
      type: 'image',
      src: '/certs/thumbs/cybersecurity-essentials-ngp-2024-10.jpg',
      caption: 'Cybersecurity Essentials',
    },
    accent: '#2dd4bf',
    pdfUrl: '/certs/cybersecurity-essentials-ngp-2024-10.pdf',
  },
  {
    id: 'c4',
    title: 'Introduction to Modern AI',
    issuer: 'New Government Polytechnic, Patna-13',
    date: '02 Apr 2025',
    credentialId: 'Cisco NetAcad',
    media: {
      type: 'image',
      src: '/certs/thumbs/intro-to-modern-ai-2025-04.jpg',
      caption: 'Introduction to Modern AI',
    },
    accent: '#f59e0b',
    pdfUrl: '/certs/intro-to-modern-ai-2025-04.pdf',
  },
  {
    id: 'c5',
    title: 'Introduction to Cybersecurity',
    issuer: 'Networking Academy',
    date: '09 Apr 2025',
    credentialId: 'Cisco NetAcad',
    media: {
      type: 'image',
      src: '/certs/thumbs/intro-to-cybersecurity-netacad-2025-04.jpg',
      caption: 'Introduction to Cybersecurity',
    },
    accent: '#fb7185',
    pdfUrl: '/certs/intro-to-cybersecurity-netacad-2025-04.pdf',
  },
  {
    id: 'c6',
    title: 'CCNA: Introduction to Networks',
    issuer: 'New Government Polytechnic, Patna-13',
    date: '16 Apr 2025',
    credentialId: 'Cisco NetAcad',
    media: {
      type: 'image',
      src: '/certs/thumbs/ccna-intro-to-networks-2025-04.jpg',
      caption: 'CCNA: Introduction to Networks',
    },
    accent: '#38bdf8',
    pdfUrl: '/certs/ccna-intro-to-networks-2025-04.pdf',
  },
  {
    id: 'c7',
    title: 'Python Essentials 1',
    issuer: 'New Government Polytechnic, Patna-13',
    date: '16 Apr 2025',
    credentialId: 'Cisco NetAcad',
    media: {
      type: 'image',
      src: '/certs/thumbs/python-essentials-1-2025-04.jpg',
      caption: 'Python Essentials 1',
    },
    accent: '#2dd4bf',
    pdfUrl: '/certs/python-essentials-1-2025-04.pdf',
  },
  {
    id: 'c8',
    title: 'Introduction to Cybersecurity',
    issuer: 'New Government Polytechnic, Patna-13',
    date: '22 Apr 2025',
    credentialId: 'Cisco NetAcad',
    media: {
      type: 'image',
      src: '/certs/thumbs/intro-to-cybersecurity-ngp-2025-04.jpg',
      caption: 'Introduction to Cybersecurity',
    },
    accent: '#fb7185',
    pdfUrl: '/certs/intro-to-cybersecurity-ngp-2025-04.pdf',
  },
  {
    id: 'c9',
    title: 'Python Essentials 2',
    issuer: 'New Government Polytechnic, Patna-13',
    date: '02 May 2025',
    credentialId: 'Cisco NetAcad',
    media: {
      type: 'image',
      src: '/certs/thumbs/python-essentials-2-2025-05.jpg',
      caption: 'Python Essentials 2',
    },
    accent: '#2dd4bf',
    pdfUrl: '/certs/python-essentials-2-2025-05.pdf',
  },
  {
    id: 'c10',
    title: 'CCNA: Enterprise Networking, Security, and Automation',
    issuer: 'New Government Polytechnic, Patna-13',
    date: '02 Jun 2025',
    credentialId: 'Cisco NetAcad',
    media: {
      type: 'image',
      src: '/certs/thumbs/ccna-enterprise-networking-security-automation-2025-06.jpg',
      caption: 'CCNA: Enterprise Networking, Security, and Automation',
    },
    accent: '#38bdf8',
    pdfUrl: '/certs/ccna-enterprise-networking-security-automation-2025-06.pdf',
  },
  {
    id: 'c11',
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'New Government Polytechnic, Patna-13',
    date: '02 Jun 2025',
    credentialId: 'Cisco NetAcad',
    media: {
      type: 'image',
      src: '/certs/thumbs/ccna-switching-routing-wireless-2025-06.jpg',
      caption: 'CCNA: Switching, Routing, and Wireless Essentials',
    },
    accent: '#f59e0b',
    pdfUrl: '/certs/ccna-switching-routing-wireless-2025-06.pdf',
  },
  {
    id: 'c12',
    title: 'Introduction to IoT and Digital Transformation',
    issuer: 'New Government Polytechnic, Patna-13',
    date: '03 Oct 2025',
    credentialId: 'Cisco NetAcad',
    media: {
      type: 'image',
      src: '/certs/thumbs/intro-to-iot-digital-transformation-2025-10.jpg',
      caption: 'Introduction to IoT and Digital Transformation',
    },
    accent: '#a78bfa',
    pdfUrl: '/certs/intro-to-iot-digital-transformation-2025-10.pdf',
  },
];export const experience: ExperienceItem[] = [
  {
    id: 'e1',
    role: 'Operations Coordinator (Technical & Materials)',
    company: 'New Hope AAS Consultants',
    period: 'Jul 2026 — Present',
    location: 'Patna, India',
    description:
      'Administering internal IT infrastructure and overseeing procurement and inventory control for critical project materials.',
    highlights: [
      'Administered internal IT infrastructure, including database monitoring and user support, ensuring high system uptime for 10 employees',
      'Oversaw procurement and inventory control for critical project materials (e.g., construction aggregates), optimizing supply chains to prevent downtime',
    ],
    media: {
      type: 'image',
      src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'IT infrastructure and materials operations',
>>>>>>> 7e2d0c5 (Update portfolio website files)
    },
    accent: '#38bdf8',
  },
  {
    id: 'e2',
<<<<<<< HEAD
    role: 'Senior Frontend Engineer',
    company: 'Lumen Labs',
    period: '2021 — 2023',
    location: 'Remote',
    description:
      'Owned the design-system and visualization layer for a data-platform product. Drove adoption of WebGL for large dataset rendering.',
    highlights: [
      'Migrated charting layer to WebGL — 10x throughput',
      'Authored 40+ reusable motion components',
      'Established the performance budget process',
=======
    role: 'Junior Operations Manager',
    company: 'New Hope AAS Consultants',
    period: 'Mar 2026 — Jun 2026',
    location: 'Patna, India',
    description:
      'Engineered material management and reporting systems, and acted as the primary technical liaison between operations and clients.',
    highlights: [
      'Engineered a robust material management system that ensured 100% availability of project-critical supplies, reducing operational waste',
      'Automated manual reporting and data-tracking workflows using integrated technical tools, cutting processing time and improving data accuracy',
      'Acted as the primary technical liaison between back-end operations and client requirements, maintaining a high customer satisfaction rate',
      'Developed and implemented standardized operational procedures (SOPs) that increased team productivity and project consistency',
>>>>>>> 7e2d0c5 (Update portfolio website files)
    ],
    media: {
      type: 'image',
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
<<<<<<< HEAD
      caption: 'The data-platform dashboard, live',
=======
      caption: 'Operations and materials management',
>>>>>>> 7e2d0c5 (Update portfolio website files)
    },
    accent: '#2dd4bf',
  },
  {
    id: 'e3',
<<<<<<< HEAD
    role: 'Frontend Engineer',
    company: 'Pixel Forge',
    period: '2019 — 2021',
    location: 'Amsterdam, NL',
    description:
      'Built marketing experiences and interactive product tours for SaaS clients. First introduction to production Three.js work.',
    highlights: [
      'Delivered 20+ interactive marketing pages',
      'Introduced the team to shader-based effects',
      'Won a CSS Design Award for a launch site',
=======
    role: 'Software Development Engineering (Web) Intern',
    company: 'UnboundByte Solutions',
    period: 'Nov 2024',
    location: 'Virtual',
    description:
      'Collaborated with a development team to design, build, and complete assigned web development projects.',
    highlights: [
      'Collaborated actively with a development team to design, build, and successfully complete assigned web development projects',
      'Demonstrated strong technical proficiency with core web development languages and tools to deliver clean code',
      'Applied analytical thinking to troubleshoot issues, optimize web performance, and resolve development bottlenecks',
      'Worked effectively in a fast-paced team environment, showcasing adaptability and strong communication skills',
>>>>>>> 7e2d0c5 (Update portfolio website files)
    ],
    media: {
      type: 'image',
      src: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200',
<<<<<<< HEAD
      caption: 'The award-winning launch experience',
    },
    accent: '#f59e0b',
  },
  {
    id: 'e4',
    role: 'Junior Web Developer',
    company: 'Brightwave Agency',
    period: '2017 — 2019',
    location: 'London, UK',
    description:
      'Started my career building responsive sites and learning the craft of motion in interfaces. Fell in love with the browser as a canvas.',
    highlights: [
      'Built 30+ client websites end-to-end',
      'Self-taught GLSL and Canvas animation',
      'Promoted to mid-level in 14 months',
=======
      caption: 'Web development project collaboration',
    },
    accent: '#f59e0b',
    certificate: {
      type: 'image',
      src: '/certs/internships/web-dev-unboundbyte.jpg',
      caption: 'Internship Certificate — Web Development Program, UnboundByte Solutions (04–29 Nov 2024)',
    },
  },
  {
    id: 'e3b',
    role: 'Python Internship Program',
    company: 'JMC Computers',
    period: 'Jun 2025',
    location: 'Patna, India',
    description:
      'Completed a Python internship program, strengthening core Python proficiency through applied project work.',
    highlights: [
      'Completed a one-month Python Internship Program, building hands-on proficiency in Python',
      'Contributed to and completed assigned projects during the internship',
    ],
    media: {
      type: 'image',
      src: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Python internship project work',
    },
    accent: '#a78bfa',
    certificate: {
      type: 'image',
      src: '/certs/internships/python-jmc-computers.jpg',
      caption: 'Internship Certificate — Python Internship Program, JMC Computers (03–30 Jun 2025)',
    },
  },
  {
    id: 'e4',
    role: 'Intern Frontend Developer',
    company: 'UnboundByte Solutions',
    period: 'Jun 2024 — Aug 2024',
    location: 'Virtual',
    description:
      'Built responsive web interfaces from design mockups and integrated frontend modules with backend APIs.',
    highlights: [
      'Built responsive and user-friendly web interfaces by translating design mockups into clean, functional code using HTML, CSS, and modern JavaScript frameworks',
      'Conceptualized and implemented reusable UI components, improving development efficiency and design consistency',
      'Drove performance optimizations by debugging complex frontend issues and reducing page load times',
      'Led the integration of frontend modules with backend APIs to ensure seamless data flow and high-quality feature delivery',
>>>>>>> 7e2d0c5 (Update portfolio website files)
    ],
    media: {
      type: 'image',
      src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
<<<<<<< HEAD
      caption: 'Early agency work — the first canvas experiments',
=======
      caption: 'Frontend development work',
>>>>>>> 7e2d0c5 (Update portfolio website files)
    },
    accent: '#fb7185',
  },
];

export const skills: Skill[] = [
<<<<<<< HEAD
  { name: 'React', level: 95, category: 'Framework', icon: 'Code' },
  { name: 'TypeScript', level: 92, category: 'Language', icon: 'FileCode' },
  { name: 'Three.js', level: 90, category: '3D / WebGL', icon: 'Box' },
  { name: 'GLSL Shaders', level: 85, category: '3D / WebGL', icon: 'Sparkles' },
  { name: 'Framer Motion', level: 93, category: 'Motion', icon: 'Waves' },
  { name: 'GSAP', level: 88, category: 'Motion', icon: 'Zap' },
  { name: 'Web Audio', level: 78, category: 'Interactive', icon: 'AudioLines' },
  { name: 'Node.js', level: 82, category: 'Backend', icon: 'Server' },
  { name: 'Tailwind CSS', level: 96, category: 'Styling', icon: 'Palette' },
  { name: 'Vite', level: 90, category: 'Tooling', icon: 'Bolt' },
  { name: 'Figma', level: 84, category: 'Design', icon: 'PenTool' },
  { name: 'Blender', level: 72, category: '3D / WebGL', icon: 'Cuboid' },
=======
  { name: 'Python', level: 90, category: 'Language', icon: 'FileCode' },
  { name: 'TypeScript', level: 85, category: 'Language', icon: 'FileCode' },
  { name: 'JavaScript', level: 88, category: 'Language', icon: 'FileCode' },
  { name: 'React', level: 88, category: 'Frontend', icon: 'Code' },
  { name: 'HTML5', level: 92, category: 'Frontend', icon: 'Code' },
  { name: 'CSS3', level: 90, category: 'Frontend', icon: 'Palette' },
  { name: 'Frontend Development', level: 88, category: 'Frontend', icon: 'Code' },
  { name: 'Node.js', level: 82, category: 'Backend', icon: 'Server' },
  { name: 'Express.js', level: 80, category: 'Backend', icon: 'Server' },
  { name: 'Django', level: 78, category: 'Backend', icon: 'Server' },
  { name: 'Backend Development', level: 82, category: 'Backend', icon: 'Server' },
  { name: 'MongoDB', level: 78, category: 'Database', icon: 'Database' },
  { name: 'MySQL', level: 80, category: 'Database', icon: 'Database' },
  { name: 'PostgreSQL', level: 78, category: 'Database', icon: 'Database' },
  { name: 'Generative AI Development', level: 85, category: 'AI/ML', icon: 'Sparkles' },
  { name: 'GitHub Copilot (GenAI)', level: 85, category: 'AI/ML', icon: 'Sparkles' },
  { name: 'Animation', level: 75, category: 'Design', icon: 'Waves' },
  { name: 'GitHub', level: 90, category: 'Tooling', icon: 'Github' },
  { name: 'Git SVN', level: 80, category: 'Tooling', icon: 'GitBranch' },
  { name: 'MS-Office', level: 85, category: 'Tooling', icon: 'FileText' },
  { name: 'Operations', level: 88, category: 'Operations', icon: 'Settings' },
  { name: 'Resource Management', level: 88, category: 'Operations', icon: 'Boxes' },
  { name: 'Technical Writing', level: 82, category: 'Operations', icon: 'PenTool' },
  { name: 'Data Analytics', level: 80, category: 'AI/ML', icon: 'BarChart' },
  { name: 'UX Research', level: 75, category: 'Design', icon: 'Search' },
  { name: 'Prototyping', level: 78, category: 'Design', icon: 'PenTool' },
  { name: 'Team Management', level: 85, category: 'Operations', icon: 'Users' },
  { name: 'Collaboration', level: 90, category: 'Soft Skills', icon: 'Users' },
  { name: 'Problem Solving', level: 90, category: 'Soft Skills', icon: 'Puzzle' },
  { name: 'Effective Communication', level: 90, category: 'Soft Skills', icon: 'MessageSquare' },
  { name: 'Time Management', level: 85, category: 'Soft Skills', icon: 'Clock' },
  { name: 'English Proficiency (Spoken)', level: 90, category: 'Language Proficiency', icon: 'Languages' },
  { name: 'Hindi Proficiency (Spoken)', level: 95, category: 'Language Proficiency', icon: 'Languages' },
  { name: 'Hindi Proficiency (Written)', level: 90, category: 'Language Proficiency', icon: 'Languages' },
>>>>>>> 7e2d0c5 (Update portfolio website files)
];

export const education: EducationItem[] = [
  {
    id: 'ed1',
<<<<<<< HEAD
    degree: 'M.Sc. Computer Graphics',
    institution: 'TU Munich',
    period: '2015 — 2017',
    description:
      'Specialized in real-time rendering and human-computer interaction. Thesis: "Streaming Level-of-Detail for Browser-Based 3D".',
    media: {
      type: 'image',
      src: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'The rendering lab where the thesis was born',
=======
    degree: 'Diploma, Computer Science & Engineering',
    institution: 'New Government Polytechnic, Patna-13',
    period: '2023 — 2026',
    description: 'CGPA: 9.00/10',
    media: {
      type: 'image',
      src: '/education/ngp-patna-college.jpg',
      caption: 'New Government Polytechnic, Patna-13',
>>>>>>> 7e2d0c5 (Update portfolio website files)
    },
    accent: '#38bdf8',
  },
  {
    id: 'ed2',
<<<<<<< HEAD
    degree: 'B.Sc. Software Engineering',
    institution: 'University of Amsterdam',
    period: '2012 — 2015',
    description:
      'Foundations in algorithms, systems, and web engineering. Graduated with honors. Led the student web-club for two years.',
    media: {
      type: 'image',
      src: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Campus — where the web-club met weekly',
    },
    accent: '#2dd4bf',
  },
  {
    id: 'ed3',
    degree: 'Exchange Semester',
    institution: 'ETH Zürich',
    period: 'Spring 2016',
    description:
      'Exchange term focused on physically-based rendering and procedural generation. Collaborated with the visual computing group.',
    media: {
      type: 'image',
      src: 'https://images.pexels.com/photos/210487/pexels-photo-210487.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'The visual computing lab at ETH',
    },
    accent: '#f59e0b',
  },
];
=======
    degree: 'Secondary (X), CBSE',
    institution: 'Sri Chaitanya Techno School, Visakhapatnam',
    period: 'Completed 2023',
    description: 'Percentage: 95.20%',
    media: {
      type: 'image',
      src: '/education/sri-chaitanya-school.jpg',
      caption: 'Sri Chaitanya Techno School, Visakhapatnam',
    },
    accent: '#2dd4bf',
    result: {
      type: 'image',
      src: '/certs/results/10th-marksheet-cbse.jpg',
      caption: 'CBSE Secondary School Examination Marksheet, 2023',
    },
  },
];
>>>>>>> 7e2d0c5 (Update portfolio website files)
