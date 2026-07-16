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
  pdfUrl: string;
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
  certificate?: MediaReveal;
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
  result?: MediaReveal;
}

export const profile = {
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
    { label: 'Major Projects', value: 6 },
    { label: 'Focus Areas', value: 3 },
  ],
};

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
    accent: '#2563eb',
    github: 'https://github.com/anshbhar/genus',
    demo: 'https://splendorous-cannoli-4331b7.netlify.app/',
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
    accent: '#db2777',
    github: 'https://github.com/anshbhar/oncolearnz',
    demo: 'https://web-production-0a1af.up.railway.app/',
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
    accent: '#0d9488',
    github: 'https://github.com/anshbhar/flashcard_app',
    demo: 'https://flashycard-nine.vercel.app/',
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
    accent: '#d97706',
    github: 'https://github.com/anshbhar/stock_Portfolio_tracker',
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
    accent: '#7c3aed',
    github: 'https://github.com/anshbhar/hangman_game',
    demo: '',
    longDescription:
      'Web Hangman Pro reimagines the classic word-guessing game with a clean, modern interface and refined interaction details, built entirely for the browser.',
  },
  {
    id: 'p6',
    title: 'Rule-Based Chatbots',
    category: 'AI / NLP',
    year: '2026',
    description:
      'A collection of rule-based chatbot implementations demonstrating conversational logic, intent handling, and structured response generation.',
    tags: ['Python', 'NLP', 'Chatbots', 'Rule-Based Systems'],
    media: {
      type: 'video',
      src: '/videos/rule-based-chatbots.mp4',
      poster: '/videos/posters/rule-based-chatbots.jpg',
      caption: 'Rule-based chatbot interaction demo',
    },
    accent: '#0891b2',
    github: 'https://github.com/anshbhar/RB_Chatbot',
    demo: '',
    longDescription:
      'A set of rule-based chatbot implementations that showcase conversational logic, intent detection, and structured response generation without relying on machine learning — a foundation for understanding conversational system design.',
  },
];

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
    accent: '#2563eb',
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
    accent: '#0d9488',
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
    accent: '#0d9488',
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
    accent: '#d97706',
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
    accent: '#db2777',
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
    accent: '#2563eb',
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
    accent: '#0d9488',
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
    accent: '#db2777',
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
    accent: '#0d9488',
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
    accent: '#2563eb',
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
    accent: '#d97706',
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
    accent: '#7c3aed',
    pdfUrl: '/certs/intro-to-iot-digital-transformation-2025-10.pdf',
  },
];

export const experience: ExperienceItem[] = [
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
    },
    accent: '#2563eb',
  },
  {
    id: 'e2',
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
    ],
    media: {
      type: 'image',
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Operations and materials management',
    },
    accent: '#0d9488',
  },
  {
    id: 'e3',
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
    ],
    media: {
      type: 'image',
      src: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Web development project collaboration',
    },
    accent: '#d97706',
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
    accent: '#7c3aed',
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
    ],
    media: {
      type: 'image',
      src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Frontend development work',
    },
    accent: '#db2777',
  },
];

export const skills: Skill[] = [
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
];

export const education: EducationItem[] = [
  {
    id: 'ed1',
    degree: 'Diploma, Computer Science & Engineering',
    institution: 'New Government Polytechnic, Patna-13',
    period: '2023 — 2026',
    description: 'CGPA: 9.00/10',
    media: {
      type: 'image',
      src: '/education/ngp-patna-college.jpg',
      caption: 'New Government Polytechnic, Patna-13',
    },
    accent: '#2563eb',
  },
  {
    id: 'ed2',
    degree: 'Secondary (X), CBSE',
    institution: 'Sri Chaitanya Techno School, Visakhapatnam',
    period: 'Completed 2023',
    description: 'Percentage: 95.20%',
    media: {
      type: 'image',
      src: '/education/sri-chaitanya-school.jpg',
      caption: 'Sri Chaitanya Techno School, Visakhapatnam',
    },
    accent: '#0d9488',
    result: {
      type: 'image',
      src: '/certs/results/10th-marksheet-cbse.jpg',
      caption: 'CBSE Secondary School Examination Marksheet, 2023',
    },
  },
];
