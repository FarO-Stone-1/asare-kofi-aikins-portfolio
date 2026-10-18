export const profile = {
  name: "Asare Kofi Aikins",
  shortName: "Kofi Asare",
  title: "Full-Stack Developer & Educator",
  tagline: "From the classroom to the codebase. I build software for the problems I've lived.",
  location: "Accra, Greater Accra Region, Ghana",
  education: {
    school: "Kwame Nkrumah University of Science and Technology (KNUST)",
    city: "Kumasi, Ghana",
  },
  socials: {
    github: "https://github.com/FarO-Stone-1",
    linkedin: "https://www.linkedin.com/in/aikins-asare-6b5111371",
    x: "https://x.com/FaroStone",
  },
  contact: {
    callWhatsApp: {
      label: "Call / WhatsApp",
      value: "0557815752",
      href: "https://wa.me/233557815752",
    },
    businessWhatsApp: {
      label: "Business WhatsApp",
      value: "0204904397",
      href: "https://wa.me/233204904397",
    },
    callLine2: {
      label: "Call Line 2",
      value: "0204904397",
      href: "tel:+233204904397",
    },
    email: {
      label: "Email",
      value: "kofiasareaikins94@gmail.com",
      href: "mailto:kofiasareaikins94@gmail.com",
    },
  },
};

export const about = {
  paragraphs: [
    "I'm a full-stack developer and educator based in Accra, Ghana. For over six years, I've stood in front of classrooms teaching Mathematics, Science, and ICT across primary and secondary levels. Along the way, I taught myself to code, and today I build full-stack web applications and desktop software that solve real problems.",
    "My teaching background shapes everything I build. When I created SchoolHub, a multi-tenant school management SaaS, I wasn't guessing at what schools need. I drew from years of managing attendance, grades, fees, and communication in real classrooms. Virtual Classroom, my AI-assisted learning portal, came from the same instinct. I build tools that I have personally needed.",
    "I hold an HND in Civil Engineering from Takoradi Technical University and a Diploma in Information Technology from KNUST, and I completed my National Service as an Integrated Science Teacher at Kwabenya Senior High and Technical. That combination of engineering rigor, classroom experience, and modern software development is what I bring to every project I build.",
  ],
  facts: [
    { label: "Based in", value: "Accra, Ghana" },
    { label: "Focus", value: "Full-Stack Development" },
    { label: "Teaching", value: "Maths & Science · 6+ Years" },
    { label: "Education", value: "HND Civil Eng. · Dip. IT" },
  ],
};

export const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "SvelteKit 5",
    "Tailwind CSS",
  ],
  backend: ["Node.js", "Express", "Hono", "tRPC", "PHP 8.x", "RESTful APIs", "Zod"],
  database: ["MySQL", "PostgreSQL (Neon)", "MongoDB", "Drizzle ORM"],
  languages: ["JavaScript", "TypeScript", "PHP", "Python", "C++", "VB.NET"],
  security: [
    "Networking Fundamentals",
    "Network Security",
    "TCP/IP",
    "BCrypt Hashing",
    "RBAC",
  ],
  tools: ["Git", "GitHub", "VS Code", "Vercel", "Turborepo", "pnpm", "Figma"],
};

export const projects = [
  {
    slug: "schoolhub",
    title: "SchoolHub - Multi-Tenant School Management SaaS",
    shortTitle: "SchoolHub",
    category: "Full-Stack SaaS Platform",
    year: "2026",
    status: "In Active Development",
    tagline:
      "One codebase, one database. Serving hundreds of schools with complete data isolation.",
    description:
      "A multi-tenant SaaS platform for school management, designed for schools in Ghana and beyond. Role-based access for admins, teachers, students, and parents across academics, attendance, exams, fees, and communication. Built from firsthand classroom experience.",
    highlights: [
      "True multi-tenant architecture with row-level data isolation",
      "End-to-end type safety: SvelteKit 5, tRPC v10, Drizzle ORM, Postgres",
      "Role-based dashboards for Admin, Teacher, Student, and Parent",
      "23+ table relational schema covering academics, finance, and communication",
      "Secure auth via Better Auth with bcrypt hashing and HTTP-only sessions",
      "Runtime validation with Zod on every API boundary",
      "Glassmorphism design system built on Tailwind 4",
      "Turborepo monorepo on serverless Postgres (Neon)",
    ],
    tech: [
      "SvelteKit 5",
      "TypeScript",
      "Hono",
      "tRPC",
      "Drizzle ORM",
      "Neon Postgres",
      "Better Auth",
      "Tailwind 4",
    ],
    liveUrl: null,
    repoUrl: null,
    featured: true,
    flagship: true,
  },
  {
    slug: "virtual-classroom",
    title: "Virtual Classroom Platform",
    shortTitle: "Virtual Classroom",
    category: "Full-Stack Web Application",
    year: "2026",
    status: "Completed",
    tagline:
      "An interactive learning portal connecting students, teachers, and admins. Powered by Node.js and cloud MySQL.",
    description:
      "A full-stack Virtual Classroom Web Application built with Node.js, Express, and MySQL. Serves as an interactive learning portal with role-based access, coursework submissions, announcements, and a self-bootstrapping cloud database architecture.",
    highlights: [
      "Role-based authentication for students, teachers, and admins",
      "Coursework system where teachers post assignments and students submit work",
      "Announcements board for class-wide broadcasts",
      "Cloud-hosted Aiven MySQL database over SSL",
      "Automated database initialization that auto-creates tables on launch",
      "Environment-driven config via .env for secure credentials",
      "Modular RESTful routes for auth, assignments, announcements, and AI",
    ],
    tech: [
      "Node.js",
      "Express",
      "MySQL (Aiven Cloud)",
      "RESTful API",
      "SSL",
      "HTML/CSS/JS",
    ],
    liveUrl: null,
    repoUrl: null,
    featured: true,
  },
  {
    slug: "medicore-hms",
    title: "MediCore Hospital Management System",
    shortTitle: "MediCore HMS",
    category: "Full-Stack Web Application",
    year: "2025",
    status: "Completed",
    tagline:
      "A modern, secure hospital management platform for administrative healthcare workflows.",
    description:
      "A full-stack hospital management web application that streamlines administrative healthcare workflows, manages user credentials securely, and facilitates real-time operational monitoring across medical and administrative departments.",
    highlights: [
      "Modern Glassmorphic UI with translucent, frosted-glass design",
      "Role-Based Access Control for admins, doctors, nurses, receptionists, and patients",
      "Interactive authentication with dynamic mode switching",
      "RESTful PHP API backend handling async AJAX and Fetch requests",
      "Automated institutional email generation for staff credentials",
      "BCrypt password hashing plus parameterized MySQLi queries for security",
      "Real-time dashboard metrics for staff counts, patients, and unit distributions",
    ],
    tech: [
      "PHP 8.x",
      "MySQL",
      "MySQLi Prepared Statements",
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
    ],
    liveUrl: null,
    repoUrl: "https://github.com/FarO-Stone-1/HOSMANSYST",
    featured: true,
  },
  {
    slug: "vv-boards",
    title: "Very Very Boards - Order Processing Application",
    shortTitle: "VV Boards Order App",
    category: "Desktop Application · VB.NET",
    year: "2025 – 2026",
    status: "Completed · Academic",
    tagline:
      "A Windows Forms order-processing system for a custom shirt and board business.",
    description:
      "A Windows Forms Order Processing Application built in VB.NET for Very Very Boards. Provides an interactive interface for entering customer orders, calculating prices based on sizes and add-ons, tracking cumulative sales, and controlling display elements via a menu system. Built during my Diploma in IT at KNUST.",
    highlights: [
      "Menu-driven navigation with keyboard access keys",
      "Event delegation via .PerformClick() with menu items as source of truth",
      "Dynamic pricing engine with 5 size tiers and add-ons (Monogram, Pocket)",
      "Input validation with Integer.TryParse and enforced customer ID rules",
      "State management that locks fields during active orders until completion",
      "Session-wide metrics for orders, shirts sold, and revenue collected",
      "Tabbed UI, ToolTips, currency formatting, and toggleable branding",
    ],
    tech: ["VB.NET", ".NET Windows Forms", "Visual Studio"],
    liveUrl: null,
    repoUrl: null,
    featured: true,
  },
];

export const experience = [
  {
    role: "Full-Stack Developer",
    company: "Self-Directed Practice",
    period: "3 Years · Ongoing",
    description:
      "Building full-stack web and desktop applications across modern stacks. Currently developing SchoolHub, a multi-tenant SaaS platform for school management.",
  },
  {
    role: "Teacher - Science & Mathematics",
    company: "Palma Christian School",
    period: "2024 – 2025",
    description:
      "Taught Science and Mathematics to primary and junior high students. Brought classroom insight directly into every education software project I build.",
  },
  {
    role: "National Service Teacher - Integrated Science",
    company: "Kwabenya Senior High & Technical",
    period: "2022 – 2023",
    description:
      "Served my national service year as an Integrated Science teacher, delivering practical science education to senior high students.",
  },
  {
    role: "Teacher - Science & ICT",
    company: "High Grade Montessori School",
    period: "2015 – 2017",
    description:
      "Taught Science and ICT to primary students. My first classroom experience, and where I first saw the daily challenges that school management software could solve.",
  },
  {
    role: "HND Civil Engineering",
    company: "Takoradi Technical University",
    period: "2019 – 2022",
    description:
      "Studied Civil Engineering at HND level, building a foundation in structural thinking, mathematics, and engineering discipline that continues to shape my approach to software architecture.",
  },
  {
    role: "Diploma in Information Technology",
    company: "Kwame Nkrumah University of Science and Technology (KNUST)",
    period: "2024 – 2026",
    description:
      "Studying Information Technology with coursework in VB.NET, web development, C++, networking, and network security, applied through real course projects.",
  },
];