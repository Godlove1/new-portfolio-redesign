"use client"

import { useEffect, useRef, useState } from "react"
import type { RefObject } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Code,
  Layout,
  PenTool,
  Server,
  Smartphone,
  Globe,
  Mail,
  MessageSquare,
  Phone,
  Calendar,
  Send,
  MapPin,
  Star,
  ChevronDown,
  Award,
  Users,
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  PERSON,
  SOCIAL,
  STATS,
  NAV_ITEMS,
  SERVICES,
  PROJECTS,
  TESTIMONIALS,
  type Service,
} from "@/lib/config"
import {
  AmazonwebservicesOriginalWordmark,
  AndroidstudioOriginal,
  AppwriteOriginal,
  Css3Original,
  DockerOriginal,
  ExpressOriginal,
  FigmaOriginal,
  FirebaseOriginal,
  FirebaseOriginalWordmark,
  GitOriginal,
  Html5Original,
  MysqlOriginal,
  NetlifyOriginal,
  NextjsOriginal,
  NodejsOriginal,
  PhpOriginal,
  PostgresqlOriginal,
  ReactnavigationOriginal,
  ReactOriginal,
  SassOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
  VercelOriginal,
  ViteOriginal,
} from "devicons-react"
import type { ReactNode } from "react"

// Types
interface SkillCategory {
  category: string
  technologies: { name: string; icon: ReactNode }[]
}

interface ContactMethod {
  icon: ReactNode
  title: string
  description: string
  value: string
  action: string
  link: string
}

interface SocialLink {
  icon: ReactNode
  href: string
  label: string
}

// Service icon map
const SERVICE_ICONS: Record<string, ReactNode> = {
  "web-apps": <Layout className="h-6 w-6" />,
  backend: <Server className="h-6 w-6" />,
  mobile: <Smartphone className="h-6 w-6" />,
  uiux: <PenTool className="h-6 w-6" />,
  seo: <Globe className="h-6 w-6" />,
  consulting: <Code className="h-6 w-6" />,
}

// Skills matrix
const skills: SkillCategory[] = [
  {
    category: "Frontend Architecture",
    technologies: [
      { name: "React", icon: <ReactOriginal /> },
      { name: "Next.js", icon: <NextjsOriginal /> },
      { name: "TypeScript", icon: <TypescriptOriginal /> },
      { name: "Tailwind CSS", icon: <TailwindcssOriginal /> },
      { name: "HTML5", icon: <Html5Original /> },
      { name: "CSS3", icon: <Css3Original /> },
      { name: "Sass", icon: <SassOriginal /> },
      { name: "Figma", icon: <FigmaOriginal /> },
      { name: "Vite", icon: <ViteOriginal /> },
    ],
  },
  {
    category: "Backend & Databases",
    technologies: [
      { name: "Node.js", icon: <NodejsOriginal /> },
      { name: "Express", icon: <ExpressOriginal /> },
      { name: "Firebase", icon: <FirebaseOriginalWordmark /> },
      { name: "Appwrite", icon: <AppwriteOriginal /> },
      { name: "PostgreSQL", icon: <PostgresqlOriginal /> },
      { name: "MySQL", icon: <MysqlOriginal /> },
      { name: "PHP", icon: <PhpOriginal /> },
    ],
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      { name: "AWS", icon: <AmazonwebservicesOriginalWordmark /> },
      { name: "Docker", icon: <DockerOriginal /> },
      { name: "Git", icon: <GitOriginal /> },
      { name: "Vercel", icon: <VercelOriginal /> },
      { name: "Netlify", icon: <NetlifyOriginal /> },
    ],
  },
  {
    category: "Mobile Platforms",
    technologies: [
      { name: "React Native", icon: <ReactnavigationOriginal /> },
      { name: "NativeWind", icon: <TailwindcssOriginal /> },
      { name: "Firebase", icon: <FirebaseOriginal /> },
      { name: "Expo", icon: <AndroidstudioOriginal /> },
    ],
  },
]

// Contact channels
const contactMethods: ContactMethod[] = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    description: "Direct email for business inquiries",
    value: PERSON.email,
    action: "Send an Email",
    link: `mailto:${PERSON.email}`,
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "WhatsApp",
    description: "Fast messaging and quick inquiries",
    value: "+237 676 579 370",
    action: "Chat on WhatsApp",
    link: PERSON.whatsapp,
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone Call",
    description: "Direct line for scheduled discussions",
    value: PERSON.phone,
    action: "Call Direct",
    link: `tel:${PERSON.phone.replace(/\s/g, "")}`,
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Discovery Session",
    description: "Book an intro discussion",
    value: "Flexible across time zones",
    action: "Schedule Discussion",
    link: PERSON.whatsapp,
  },
]

// Motion presets
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
}

const socialLinks: SocialLink[] = [
  { icon: <Github className="h-5 w-5" />, href: SOCIAL.github, label: "GitHub" },
  { icon: <Twitter className="h-5 w-5" />, href: SOCIAL.twitter, label: "Twitter" },
  { icon: <Instagram className="h-5 w-5" />, href: SOCIAL.instagram, label: "Instagram" },
  { icon: <Linkedin className="h-5 w-5" />, href: SOCIAL.linkedin, label: "LinkedIn" },
]

const ROTATING_TITLES: string[] = [
  "Full Stack Engineer",
  "Technical Architect",
  "UI and UX Designer",
  "Mobile Software Developer",
  "Cloud Solutions Builder",
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string>("home")
  const [titleIndex, setTitleIndex] = useState<number>(0)
  const heroRef = useRef<HTMLElement>(null)
  const heroInView = useInView(heroRef as RefObject<Element>, { once: false })

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleResize = (): void => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)

    const handleScroll = (): void => {
      const sections = ["home", "about", "services", "portfolio", "contact"]
      for (const id of sections) {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="mesh-bg text-white min-h-screen">
      {/* Mobile navigation button */}
      {isMobile && (
        <button
          className="fixed top-5 right-5 z-50 w-11 h-11 glass rounded-full flex items-center justify-center border border-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      )}

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {(menuOpen || !isMobile) && (
          <motion.nav
            className={cn(
              "fixed top-0 left-0 h-full z-40 flex flex-col glass",
              isMobile ? "w-64" : "w-72 border-r border-white/5",
            )}
            initial={isMobile ? { x: -300 } : { x: 0 }}
            animate={{ x: 0 }}
            exit={isMobile ? { x: -300 } : undefined}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            aria-label="Main navigation"
          >
            <div className="p-8 pb-6">
              <Link href="/" className="block group" aria-label="Akale Godlove Home">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-teal-400 relative pulse-ring" />
                  <span className="text-xs text-zinc-400 font-medium tracking-wider uppercase">
                    Available Globally
                  </span>
                </div>
                <h1
                  className="text-3xl font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  <span className="text-white">Akale</span>
                  <span className="text-teal-400">.</span>
                </h1>
                <p className="text-xs text-zinc-500 mt-1">Full Stack Engineer</p>
              </Link>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6">
              <ul className="space-y-1.5" role="list">
                {NAV_ITEMS.map((item, index) => {
                  const sectionId = item.href.substring(1)
                  const isActive = activeSection === sectionId
                  return (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 * index + 0.15 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => isMobile && setMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                          isActive
                            ? "bg-teal-400/10 text-teal-400 border border-teal-400/20"
                            : "text-zinc-400 hover:text-white hover:bg-white/5",
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="navDot"
                            className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0"
                          />
                        )}
                        {!isActive && <div className="w-1.5 h-1.5 flex-shrink-0" />}
                        {item.name}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </div>

            <div className="p-8 pt-6 space-y-4">
              <div className="flex gap-2.5">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg glass flex items-center justify-center text-zinc-400 hover:text-teal-400 hover:border-teal-400/30 transition-colors"
                    aria-label={`Akale Godlove on ${link.label}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <p className="text-xs text-zinc-600">Global Remote Coverage</p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Main Content Viewport */}
      <main className={cn("min-h-screen relative z-10", isMobile ? "ml-0" : "ml-72")} role="main">
        {/* HERO SECTION */}
        <section
          id="home"
          ref={heroRef}
          className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-20 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl relative z-10">
  
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-zinc-400 text-lg mb-2 font-medium">Hello, the name is </p>
              <h1
                id="hero-heading"
                className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-4"
                style={{ fontFamily: "var(--font-space-grotesk)", lineHeight: 1.05 }}
              >
                <span className="text-white">Akale </span>
                <span className="gradient-text">Godlove</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="h-10 mb-5 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={titleIndex}
                  className="text-2xl md:text-3xl font-semibold text-teal-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  {ROTATING_TITLES[titleIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.p
              className="text-zinc-300 text-lg max-w-2xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              Engineering high performance web platforms, secure distributed backends, and digital products.
              Partnering with forward thinking businesses in the United States, Canada, Europe, Africa, and Other international markets.
            </motion.p>

            {/* Performance Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-teal rounded-xl p-4 text-center"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.55 + index * 0.08 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div
                    className="text-2xl font-bold text-white teal-glow-text"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Link href="#contact">
                <motion.button
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-teal-400 hover:bg-teal-300 text-black font-semibold rounded-xl transition-colors w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start a Project
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>

              <Link href="#portfolio">
                <motion.button
                  className="flex items-center justify-center gap-3 px-8 py-4 glass border border-white/10 hover:border-teal-400/40 font-semibold rounded-xl transition-colors w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Case Studies
                  <ChevronRight className="h-5 w-5 text-teal-400" />
                </motion.button>
              </Link>
            </motion.div>
          </div>

         <div className=" w-full mt-12 flex justify-center   ">
           <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <span className="text-xs text-zinc-600 tracking-widest uppercase">Explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-4 w-4 text-teal-400" />
            </motion.div>
          </motion.div>
         </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-24" aria-labelledby="about-heading">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            

            <motion.h2
              id="about-heading"
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Architecting scalable software
              <br />
              <span className="gradient-text">for global products and teams.</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-12">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] w-full max-w-sm mx-auto float">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-amber-500/10 z-10" />
                <Image
                  src="/akale-godlove.png"
                  alt="Akale Godlove - Full Stack Engineer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

    
              <motion.div
                className="absolute -bottom-4 -left-4 glass-teal rounded-xl p-3 flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45 }}
                viewport={{ once: true }}
              >
                <Users className="h-5 w-5 text-teal-400" />
                <div>
                  <p className="text-xs font-semibold text-white">Production Scale</p>
                  <p className="text-[10px] text-zinc-400">10,000+ Active Users</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-5 text-zinc-300 leading-relaxed mb-10">
                <p>
                  I am a Full Stack Software Engineer focused on building interactive, scalable web applications, API platforms, and user centered digital products.
                </p>
                <p>
                  Over the past five years, I have architected systems for clients spanning the United States, Canada, the United Kingdom, Cameroon, and international enterprises. My engineering approach balances fast delivery with maintainable architecture, sub second load speeds, and strict code quality.
                </p>
                <p>
                  Whether working as a lead frontend architect, a full stack builder, or a technical consultant, I focus on solving business challenges through clean engineering.
                </p>
              </div>

              {/* Education and Credentials */}
              <div className="mb-10">
                <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                  Education and Certifications
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white block">BSc in Computer Science</span>
                      <span className="text-sm text-zinc-400">University of Buea, 2023</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white block">AWS Cloud Practitioner Certification</span>
                      <span className="text-sm text-zinc-400">Amazon Web Services, 2024</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white block">Google UX Design Professional Certificate</span>
                      <span className="text-sm text-zinc-400">Google, 2024</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Skills Grid */}
              <div>
                <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-5">
                  Core Technologies
                </h3>
                <div className="space-y-4">
                  {skills.map((cat, index) => (
                    <div key={index}>
                      <p className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">{cat.category}</p>
                      <div className="flex flex-wrap gap-2">
                        {cat.technologies.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-lg text-sm text-zinc-300 hover:text-teal-400 hover:border-teal-400/30 transition-colors cursor-default"
                            title={tech.name}
                          >
                            <span className="w-4 h-4 flex items-center justify-center text-xs">{tech.icon}</span>
                            <span className="text-xs font-medium">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="px-8 md:px-16 py-24" aria-labelledby="services-heading">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2
              id="services-heading"
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Technical capabilities
              <br />
              <span className="gradient-text">built for scale and stability.</span>
            </h2>
            <p className="max-w-xl text-zinc-400 text-lg">
              Delivering modular, scalable software architecture with measurable performance benchmarks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service: Service, index: number) => (
              <motion.article
                key={service.id}
                className="border-gradient-card p-7 group hover:teal-glow transition-all duration-300 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                aria-label={`Service: ${service.title}`}
              >
                <div className="w-12 h-12 rounded-xl bg-teal-400/10 flex items-center justify-center mb-5 text-teal-400 group-hover:bg-teal-400 group-hover:text-black transition-all duration-300">
                  {SERVICE_ICONS[service.id]}
                </div>

                <p className="text-[10px] text-amber-400 font-semibold uppercase tracking-widest mb-1">
                  {service.subtitle}
                </p>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{service.description}</p>

                <div className="glass-teal rounded-lg px-3 py-2 mb-5">
                  <p className="text-xs text-teal-400 font-medium">{service.metric}</p>
                </div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {service.features.map((feature: string, fIndex: number) => (
                    <li key={fIndex} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm text-teal-400 hover:text-white font-medium transition-colors group/link mt-auto"
                >
                  Inquire regarding this service
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section id="portfolio" className="px-8 md:px-16 py-24" aria-labelledby="portfolio-heading">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2
              id="portfolio-heading"
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Selected systems
              <br />
              <span className="gradient-text">and production case studies.</span>
            </h2>
            <p className="max-w-xl text-zinc-400 text-lg">
              Applications actively handling users, processing transactions, and delivering business value.
            </p>
          </motion.div>

          <div className="space-y-16">
            {PROJECTS.map((project, index) => (
              <motion.article
                key={project.slug}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.5 }}
                viewport={{ once: true, margin: "-60px" }}
                aria-label={`Project: ${project.title}`}
              >
                <div className={cn("order-1", index % 2 === 1 ? "lg:order-2" : "")}>
                  <div className="relative overflow-hidden rounded-2xl group border border-white/5 hover:border-teal-400/20 transition-colors">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`Case study for ${project.title}`}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 w-full flex items-center justify-between">
                        <div>
                          <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider">
                            {project.category}
                          </span>
                          <p className="text-white font-bold">{project.title}</p>
                        </div>
                        {project.link !== "#" && (
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-teal-400 flex items-center justify-center text-black hover:bg-white transition-colors"
                            aria-label={`Open ${project.title} live system`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cn("order-2", index % 2 === 1 ? "lg:order-1" : "")}>
                  <span className="text-teal-400 text-xs font-semibold uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3
                    className="text-2xl font-bold mt-2 mb-2 text-white"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-amber-400/90 text-sm font-medium italic mb-4">
                    {project.tagline}
                  </p>
                  <p className="text-zinc-300 mb-5 leading-relaxed">{project.description}</p>

                  <div className="glass-teal rounded-xl p-3 flex items-center gap-3 mb-6">
                    <span className="w-2 h-2 rounded-full bg-teal-400 flex-shrink-0" />
                    <p className="text-sm text-teal-300 font-medium">{project.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 glass rounded-full text-xs text-zinc-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link !== "#" ? (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-teal-400 hover:bg-teal-300 text-black font-semibold rounded-xl text-sm transition-colors"
                      aria-label={`Visit ${project.title} live system`}
                    >
                      Visit Live System
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/10 text-zinc-400 font-semibold rounded-xl text-sm cursor-not-allowed">
                      Private Enterprise Project
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        {/* <section className="px-8 md:px-16 py-24 relative overflow-hidden" aria-labelledby="testimonials-heading">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-400/2 to-transparent pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="section-label">Client Recommendations</span>
            <h2
              id="testimonials-heading"
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Collaborator feedback
              <br />
              <span className="gradient-text">from engineering engagements.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.figure
                key={testimonial.name}
                className="border-gradient-card p-7 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                aria-label={`Testimonial from ${testimonial.name}`}
              >
                <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, rIndex) => (
                    <Star key={rIndex} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <blockquote className="text-zinc-300 text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                <figcaption className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-zinc-400">{testimonial.role}</p>
                    <p className="text-xs text-teal-400">{testimonial.location}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section> */}

        {/* CONTACT SECTION */}
        <section id="contact" className="px-8 md:px-16 py-24" aria-labelledby="contact-heading">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="section-label">Start a Conversation</span>
            <h2
              id="contact-heading"
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Have a technical project?
              <br />
              <span className="gradient-text">Let us build something exceptional.</span>
            </h2>
            <p className="max-w-xl text-zinc-400 text-lg">
              Available for technical consulting, custom development contracts, and long term engineering roles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="border-gradient-card p-6 group hover:teal-glow transition-all duration-300"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-teal-400/10 flex items-center justify-center mb-5 text-teal-400 group-hover:bg-teal-400 group-hover:text-black transition-all duration-300">
                  {method.icon}
                </div>
                <h3 className="font-bold text-white mb-1">{method.title}</h3>
                <p className="text-xs text-zinc-500 mb-3">{method.description}</p>
                <p className="text-sm text-zinc-300 mb-5 font-medium">{method.value}</p>

                <Link
                  href={method.link}
                  className="inline-flex items-center gap-2 text-sm text-teal-400 hover:text-white font-medium transition-colors group/link"
                  aria-label={`Contact Akale via ${method.title}`}
                >
                  {method.action}
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="border-gradient-card p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-2xl font-bold mb-6 text-white"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Send a Direct Message
              </h3>
              <form
                className="space-y-4"
                action="https://formsubmit.co/58a7b0adbcc36258ae72c41ffbc8e22f"
                method="POST"
                aria-label="Contact form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="text-xs font-semibold text-zinc-400 uppercase tracking-wider"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name_of_sender"
                      required
                      className="w-full px-4 py-3 glass border border-white/5 rounded-xl focus:outline-none focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/30 text-white placeholder-zinc-600 transition-colors text-sm"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-semibold text-zinc-400 uppercase tracking-wider"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      className="w-full px-4 py-3 glass border border-white/5 rounded-xl focus:outline-none focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/30 text-white placeholder-zinc-600 transition-colors text-sm"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-subject"
                    className="text-xs font-semibold text-zinc-400 uppercase tracking-wider"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    className="w-full px-4 py-3 glass border border-white/5 rounded-xl focus:outline-none focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/30 text-white placeholder-zinc-600 transition-colors text-sm"
                    placeholder="New Platform Architecture Project"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-semibold text-zinc-400 uppercase tracking-wider"
                  >
                    Project Scope and Requirements
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    name="message"
                    required
                    className="w-full px-4 py-3 glass border border-white/5 rounded-xl focus:outline-none focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/30 text-white placeholder-zinc-600 transition-colors text-sm resize-none"
                    placeholder="Provide an overview of your technical requirements, estimated timeline, and team context."
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-teal-400 hover:bg-teal-300 text-black font-semibold rounded-xl transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Inquiry
                  <Send className="h-5 w-5" />
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              className="border-gradient-card p-8 flex flex-col gap-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h3
                  className="text-2xl font-bold mb-6 text-white"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Location and Availability
                </h3>
                <div className="glass rounded-xl p-6 flex items-start gap-4 mb-5">
                  <MapPin className="h-6 w-6 text-teal-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white text-lg">Buea, Cameroon</p>
                    <p className="text-zinc-400 text-sm mt-1">Timezone: GMT+1</p>
                    <p className="text-zinc-400 text-sm">
                      Collaborating with teams across North America, Europe, Africa, and Asia.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="glass rounded-xl p-4">
                    <p className="text-zinc-400 text-xs mb-1">Working Schedule</p>
                    <p className="font-semibold text-white">Monday to Saturday</p>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <p className="text-zinc-400 text-xs mb-1">Response Window</p>
                    <p className="font-semibold text-white">Within 24 Hours</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                  Professional Profiles
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-teal-400 hover:border-teal-400/30 transition-colors"
                      aria-label={`Akale Godlove on ${link.label}`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-teal rounded-xl p-5">
                <p className="text-sm text-zinc-300 leading-relaxed">
                  <span className="text-teal-400 font-semibold">Fastest contact:</span> For urgent technical consulting or time-sensitive projects, reach out via WhatsApp at +237 676 579 370.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="px-8 md:px-16 py-16 border-t border-white/5" role="contentinfo">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <Link href="/" aria-label="Akale Godlove back to top">
                <h2
                  className="text-4xl font-bold tracking-tight mb-1"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  <span className="text-white">Akale Godlove</span>
                  <span className="text-teal-400">.</span>
                </h2>
              </Link>
              <p className="text-zinc-400 text-sm">Senior Full-Stack Software Engineer</p>
              <p className="text-zinc-600 text-xs mt-1">
                Available for global remote engineering and advisory
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-4">
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg glass flex items-center justify-center text-zinc-400 hover:text-teal-400 transition-colors"
                    aria-label={`Akale Godlove on ${link.label}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <p className="text-xs text-zinc-600">
                &copy; {new Date().getFullYear()} Akale Godlove. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
