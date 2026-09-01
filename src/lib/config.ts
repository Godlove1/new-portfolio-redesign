/**
 * ============================================================
 * SITE CONFIGURATION — SINGLE SOURCE OF TRUTH
 * ============================================================
 * Centralized settings for metadata, schemas, sitemaps, and UI.
 * ============================================================
 */

// Domain and core information
export const SITE_URL = "https://akalegodlove.netlify.app"
export const SITE_NAME = "Akale Godlove"
export const SITE_TAGLINE = "Senior Full-Stack Engineer & Technical Consultant"
export const SITE_DESCRIPTION =
  "Akale Godlove is a Full-Stack Engineer and Technical Consultant engineering robust web applications, distributed backends, and digital products for clients across North America, Europe, Africa, and globally."

// Types
export interface Credential {
  title: string
  issuer: string
  year: string
  url: string
}

export interface Stat {
  value: string
  label: string
}

export interface NavItem {
  name: string
  href: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Testimonial {
  name: string
  role: string
  location: string
  avatar: string
  rating: number
  text: string
}

export interface Project {
  title: string
  slug: string
  category: string
  tagline: string
  description: string
  impact: string
  technologies: string[]
  image: string
  link: string
  featured: boolean
}

export interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  metric: string
  features: string[]
}

export interface Person {
  name: string
  firstName: string
  lastName: string
  headline: string
  location: string
  locationBroad: string
  timezone: string
  availability: string
  bio: string
  email: string
  phone: string
  whatsapp: string
  workingHours: string
}

export interface SeoConfig {
  keywords: string[]
  ogImage: string
  twitterHandle: string
}

export interface OgConfig {
  title: string
  description: string
  image: string
  imageAlt: string
  locale: string
  type: string
}

// Personal profile
export const PERSON: Person = {
  name: "Akale Godlove",
  firstName: "Akale",
  lastName: "Godlove",
  headline: "Full-Stack Engineer & Technical Consultant",
  location: "Buea, Cameroon",
  locationBroad: "Global Remote",
  timezone: "GMT+1",
  availability: "Available for engineering contracts, consulting, and full-time remote roles",
  bio: "Full-Stack Engineer building resilient, high-performance web systems and digital products. Partnering with businesses across the United States, Canada, the United Kingdom, Cameroon, and international markets. BSc Computer Science, AWS Certified Cloud Practitioner, Google UX Certified.",
  email: "akalegodlove@gmail.com",
  phone: "+237 676 579 370",
  whatsapp: "https://wa.me/237676579370",
  workingHours: "Monday to Saturday, GMT+1 (Flexible overlap with US, European, and Asian business hours)",
}

// Social links
export const SOCIAL: Record<string, string> = {
  github: "https://github.com/godlove1",
  linkedin: "https://linkedin.com/in/akalegodlove",
  twitter: "https://twitter.com/akalegodlove",
  instagram: "https://instagram.com/akalegodlove",
}

// Core technical capabilities
export const EXPERTISE: string[] = [
  "Full-Stack Web Development",
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Firebase",
  "PostgreSQL",
  "MySQL",
  "React Native",
  "UI/UX Architecture",
  "Figma",
  "AWS Cloud",
  "Docker",
  "RESTful APIs",
  "GraphQL",
  "Tailwind CSS",
  "Performance Optimization",
  "Search Engine Optimization",
  "Technical Architecture",
  "SaaS Engineering",
]

// Credentials
export const CREDENTIALS: Credential[] = [
  {
    title: "BSc in Computer Science",
    issuer: "University of Buea",
    year: "2023",
    url: "https://ubuea.cm",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    url: "https://aws.amazon.com/certification/",
  },
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Google",
    year: "2024",
    url: "https://grow.google/certificates/ux-design/",
  },
]

// SEO metadata
export const SEO: SeoConfig = {
  keywords: [
    "Akale Godlove",
    "Akale Godlove developer",
    "Full-Stack Engineer",
    "Next.js developer",
    "React developer",
    "TypeScript software engineer",
    "Tech Consultant",
    "Hire React developer US Canada UK",
    "Web application development",
    "Senior full stack engineer",
    "Node.js backend developer",
    "Remote software engineer",
    "Software consultant Cameroon",
  ],
  ogImage: `${SITE_URL}/og-image.jpg`,
  twitterHandle: "@akalegodlove",
}

// Open Graph
export const OG: OgConfig = {
  title: "Akale Godlove | Senior Full-Stack Engineer & Technical Consultant",
  description: SITE_DESCRIPTION,
  image: SEO.ogImage,
  imageAlt: "Akale Godlove - Full-Stack Engineer and Technical Consultant",
  locale: "en_US",
  type: "website",
}

// FAQ (preserved for Schema.org and AI engine indexing)
export const FAQ: FaqItem[] = [
  {
    question: "Who is Akale Godlove?",
    answer:
      "Akale Godlove is a Full-Stack Engineer and Technical Consultant with over 5 years of professional experience engineering resilient web applications, mobile software, and scalable backends for clients in the United States, Canada, the United Kingdom, Cameroon, and worldwide.",
  },
  {
    question: "What technical stack does Akale Godlove specialize in?",
    answer:
      "Akale specializes in modern web and mobile architecture including TypeScript, React, Next.js, Node.js, Express, PostgreSQL, MySQL, Firebase, AWS Cloud infrastructure, Docker, and React Native.",
  },
  {
    question: "How can clients hire or contact Akale Godlove?",
    answer:
      "You can contact Akale directly via email at akalegodlove@gmail.com, through WhatsApp at +237 676 579 370, or through his portfolio contact form. He is available for long-term contracts, technical consulting, and remote full-time positions.",
  },
  {
    question: "Does Akale Godlove work with international remote teams?",
    answer:
      "Yes. Akale works seamlessly with distributed teams worldwide across North America, Europe, Africa, and Asia, maintaining clear communication, disciplined delivery schedules, and overlapping working hours.",
  },
  {
    question: "What scale of applications has Akale Godlove delivered?",
    answer:
      "Akale has built platforms serving tens of thousands of active users, including e-commerce marketplaces (iConz), international booking platforms (Izhub UK), healthcare community platforms (CAMYPNET), and real estate management portals (Crown Home Holdings).",
  },
]

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amara Diallo",
    role: "Founder, MindBridge Consulting",
    location: "London, United Kingdom",
    avatar: "AD",
    rating: 5,
    text: "Akale delivered a high-availability client platform that our entire UK team uses every single day. His speed, technical depth, and architectural insight stood out from day one. He approaches development from a business outcome perspective.",
  },
  {
    name: "Chidinma Okonkwo",
    role: "Head of Product, Nile Digital",
    location: "Toronto, Canada",
    avatar: "CO",
    rating: 5,
    text: "We brought Akale in to restructure and deliver a critical e-commerce platform. Within three weeks he stabilized the code, enhanced response times significantly, and delivered a refined user experience on schedule.",
  },
  {
    name: "Kwame Asante",
    role: "CTO, Kora Fintech",
    location: "Austin, Texas, United States",
    avatar: "KA",
    rating: 5,
    text: "Akale engineered the core onboarding and web architecture for our fintech application. His early architectural decisions saved our engineering team months of rework. A dependable engineer who executes at a world-class standard.",
  },
]

// Featured Projects
export const PROJECTS: Project[] = [
   {
    title: "Pata",
    slug: "ask-pata",
    category: "AI & WhatsApp Discovery Platform",
    tagline: "Conversational, WhatsApp-first local business and service discovery engine",
    description:
      "A conversational WhatsApp-first discovery platform connecting consumers with real local businesses, skilled trades, repairs, and products across African cities without requiring app downloads.",
    impact: "Empowering friction-free business discovery via WhatsApp chat and web directories",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp Cloud API", "REST APIs"],
    image: "/projects/pata.png",
    link: "https://askpata.vercel.app/",
    featured: true,
  },
  {
    title: "EnvShare",
    slug: "env-share",
    category: "DevOps & Security Platform",
    tagline: "Encrypted secrets and environment variable management for engineering teams",
    description:
      "An open-source secrets management system offering role-based access control, comprehensive audit logs, and a dedicated CLI to keep production credentials and .env values secure and out of chat or git.",
    impact: "Zero-knowledge credential sharing with seamless CLI process injection and automated audit trails",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase DB", "Node.js CLI", "Cryptography"],
    image: "/projects/envshare.png",
    link: "https://env-sharer.vercel.app/",
    featured: true,
  },
  {
    title: "Izhub UK",
    slug: "izhub-uk",
    category: "SaaS Booking Platform",
    tagline: "High performance beauty appointment and schedule management engine",
    description:
      "A complete online booking and schedule management platform built for UK service businesses, processing automated reservations, real-time calendars, and instant notifications.",
    impact: "Streamlining 100+ weekly bookings with sub-second response times",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "Google Cloud", "REST APIs"],
    image: "/projects/izhub.png",
    link: "https://izhub.uk/",
    featured: true,
  },
  {
    title: "iConz",
    slug: "iconz",
    category: "E-Commerce Marketplace",
    tagline: "Scalable peer-to-peer commerce platform",
    description:
      "A peer-to-peer commerce application engineered to handle dynamic product listings, secure transaction workflows, and real-time merchant communications.",
    impact: "Serving over 10,000 active users with 99.9% uptime",
    technologies: ["React", "Node.js", "Firebase", "Tailwind CSS", "Cloud Functions"],
    image: "/projects/icon.png",
    link: "https://iconzapp.com/",
    featured: true,
  },
  {
    title: "Samba Otavise",
    slug: "samba-otavise",
    category: "Executive Digital Platform",
    tagline: "Digital presence and media hub for healthcare leadership",
    description:
      "A custom portfolio and leadership platform for Dr. Samba Otavise, highlighting medical publications, technology initiatives, and international keynotes.",
    impact: "Optimized Core Web Vitals score of 98 on desktop and mobile",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    image: "/projects/samba.png",
    link: "https://sambaotavise.com/",
    featured: true,
  },
  {
    title: "CAMYPNET",
    slug: "camypnet",
    category: "Healthcare Network",
    tagline: "Medical networking and knowledge distribution hub",
    description:
      "A community and resource portal connecting physicians, providing event management, directory lookups, and continuous medical education materials.",
    impact: "Active collaborative network supporting hundreds of medical practitioners",
    technologies: ["Next.js", "Firebase", "Vercel", "Tailwind CSS"],
    image: "/projects/camypnet.png",
    link: "https://camypnet.org/",
    featured: true,
  },
  {
    title: "Crown Home Holdings",
    slug: "crown-home-holdings",
    category: "Real Estate & Asset Portal",
    tagline: "Digital asset verification and property portfolio management",
    description:
      "An asset management portal enabling property owners to verify documentation, monitor payment schedules, and manage international transactions securely.",
    impact: "Integrated secure multi-currency payment workflows via Flutterwave",
    technologies: ["Next.js", "Node.js", "Firebase", "Flutterwave", "Tailwind CSS"],
    image: "/projects/chp.png",
    link: "#",
    featured: true,
  },
  {
    title: "SolaviseTech",
    slug: "solavisetech",
    category: "Technical Training Academy",
    tagline: "Education platform for cloud, software engineering, and DevOps",
    description:
      "An educational portal offering structured curricula, student enrollment, and technical course delivery across cloud computing and software architecture.",
    impact: "Delivering engineering training tracks to aspiring technologists",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    image: "/projects/solavisetech.png",
    link: "https://solavisetech.com/",
    featured: true,
  },
]

// Professional Services
export const SERVICES: Service[] = [
  {
    id: "web-apps",
    title: "Web Application Engineering",
    subtitle: "Custom web software, SaaS, and internal tools",
    description:
      "Full-cycle development of fast, resilient web applications tailored to strict performance and conversion requirements.",
    metric: "Targeting sub-second page loads and 95+ Core Web Vitals",
    features: [
      "Modern React and Next.js Architecture",
      "Scalable State Management and Client Performance",
      "SaaS and Subscription Platforms",
      "Rigorous Accessibility and Cross-Browser Testing",
    ],
  },
  {
    id: "backend",
    title: "Backend & API Systems",
    subtitle: "Robust data architectures and cloud backends",
    description:
      "Designing clean API contracts, database schemas, and server environments capable of scaling under high concurrent demand.",
    metric: "Engineered backends supporting 10,000+ daily requests",
    features: [
      "RESTful and GraphQL API Design",
      "Relational and Document Database Modeling",
      "Authentication, RBAC, and Security Hardening",
      "Microservices and Serverless Integrations",
    ],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    subtitle: "Cross-platform mobile applications",
    description:
      "Native-grade iOS and Android applications developed with clean architectures, smooth gestures, and offline capabilities.",
    metric: "Unified codebases delivering 100% feature parity across iOS and Android",
    features: [
      "React Native and Expo Development",
      "Hardware and Native API Integrations",
      "Offline Storage and Background Sync",
      "Secure In-App Payments and Push Notifications",
    ],
  },
  {
    id: "uiux",
    title: "UI/UX & Product Design",
    subtitle: "Interface design systems and interaction models",
    description:
      "Creating modern, accessible interface design systems that turn complex user flows into effortless experiences.",
    metric: "Data-driven UI iterations that measurably increase user task completion",
    features: [
      "Design Systems and Component Libraries in Figma",
      "Interactive Prototyping and Usability Mapping",
      "Responsive Layout Hierarchy",
      "Seamless Developer Handoff",
    ],
  },
  {
    id: "seo",
    title: "Technical SEO & Web Speed",
    subtitle: "Organic search visibility and Core Web Vitals",
    description:
      "Structuring codebases and content pipelines for maximum crawlability, fast indexation, and search engine discoverability.",
    metric: "Structured schema integration for search engines and AI generative models",
    features: [
      "Comprehensive Technical Audits and Indexing Fixes",
      "Core Web Vitals and TTFB Optimization",
      "JSON-LD Structured Data Schema Markup",
      "Semantic HTML and Content Hierarchy",
    ],
  },
  {
    id: "consulting",
    title: "Technical Consulting & Code Audits",
    subtitle: "Architecture advisory and performance reviews",
    description:
      "Strategic technical audits, code reviews, and architectural guidance for founders and engineering teams.",
    metric: "Actionable roadmaps preventing costly rewrites and infrastructure bottlenecks",
    features: [
      "Codebase Health and Security Reviews",
      "Cloud Infrastructure Architecture (AWS/GCP)",
      "Continuous Integration and Deployment Setup",
      "Technical Hiring and Mentorship Advisory",
    ],
  },
]

// Stats
export const STATS: Stat[] = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "10K+", label: "Active Users" },
  { value: "5", label: "Countries Served" },
]

// Navigation
export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
]
