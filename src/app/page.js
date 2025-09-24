"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useMotionValue, useTransform, animate } from "framer-motion"
import {
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Download,
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
  Code2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AmazonwebservicesOriginalWordmark } from "devicons-react";
import { AndroidstudioOriginal } from "devicons-react";
import { AppwriteOriginal } from "devicons-react";
import { Css3Original } from "devicons-react";
import { DockerOriginal } from "devicons-react";
import { ExpressOriginal } from "devicons-react";
import { FigmaOriginal } from "devicons-react";
import { FirebaseOriginal } from "devicons-react";
import { FirebaseOriginalWordmark } from "devicons-react";
import { GitOriginal } from "devicons-react";
import { Html5Original } from "devicons-react";
import { MysqlOriginal } from "devicons-react";
import { NetlifyOriginal } from "devicons-react";
import { NextjsOriginal } from "devicons-react";
import { NodejsOriginal } from "devicons-react";
import { PhpOriginal } from "devicons-react";
import { PostgresqlOriginal } from "devicons-react";
import { ReactnavigationOriginal } from "devicons-react";
import { ReactOriginal } from "devicons-react";
import { SassOriginal } from "devicons-react";
import { TailwindcssOriginal } from "devicons-react";
import { TypescriptOriginal } from "devicons-react";
import { VercelOriginal } from "devicons-react";
import { ViteOriginal } from "devicons-react";
import { WordpressOriginal } from "devicons-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const [activeSection, setActiveSection] = useState("home")
  const heroInView = useInView(heroRef, { once: false })

  const titles = ["Full-Stack Developer", "UI/UX Designer", "Tech Consultant","Co-founder", "Graphic Designer", "Video Editor", "Photo Editing"];
  const [currentIndex, setCurrentIndex] = useState(0);  
  
  useEffect(() => {
    // Set up an interval to change the title every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    
    // Clean up the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const offset = 150

          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(section)
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

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/godlove1", label: "GitHub" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/akalegodlove", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/akalegodlove", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/akalegodlove", label: "LinkedIn" },
  ]

  const services = [
    {
      icon: <Layout className="h-10 w-10" />,
      title: "Web App Development",
      description:
        "End-to-end custom web application development with the latest stack including Next.js, React, and Node.js.",
      features: [
        "Responsive SPA/MPA Development",
        "Progressive Web Apps (PWA)",
        "E-commerce & SaaS Solutions",
        "Performance Optimization",
      ],
    },
    {
      icon: <Server className="h-10 w-10" />,
      title: "Backend Development",
      description: "Robust, scalable backend solutions with optimal architecture and database design.",
      features: [
        "REST & GraphQL API Development",
        "Database Design & Optimization",
        "Microservice Architecture",
        "Authentication & Authorization",
      ],
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications using React Native for both iOS and Android.",
      features: [
        "Cross-platform Development",
        "Native Feature Integration",
        "Offline Capabilities",
        "Performance Optimization",
      ],
    },
    {
      icon: <PenTool className="h-10 w-10" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functional user experiences.",
      features: ["User Research & Personas", "Wireframing & Prototyping", "Interactive Designs", "Design Systems"],
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "SEO & Marketing",
      description: "Technical SEO implementation and digital marketing strategies for better online presence.",
      features: [
        "Technical SEO Audit & Fixes",
        "Performance Optimization",
        "Content Strategy",
        "Conversion Rate Optimization",
      ],
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Code Consultancy",
      description: "Expert code review, architecture consultation, and development workflow optimization.",
      features: [
        "Code Review & Refactoring",
        "Architecture Consultation",
        "DevOps Implementation",
        "Team Training & Workshops",
      ],
    },
  ]

  const skills = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: <ReactOriginal /> },
        { name: "Next.js", icon: <NextjsOriginal /> },
        { name: "TypeScript", icon: <TypescriptOriginal /> },
        { name: "Tailwind CSS", icon: <TailwindcssOriginal /> },
        { name: "HTML", icon: <Html5Original /> },
        { name: "CSS", icon: <Css3Original /> },
        { name: "SaaS", icon: <SassOriginal /> },
        { name: "Figma", icon: <FigmaOriginal /> },
        { name: "Shadcn", icon: <Code2 /> },
        { name: "Vite", icon: <ViteOriginal /> },

      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: <NodejsOriginal /> },
        { name: "Express", icon: <ExpressOriginal /> },
        { name: "Appwrite", icon: <AppwriteOriginal /> },
        { name: "PostgreSQL", icon: <PostgresqlOriginal /> },
        { name: "MySQL", icon: <MysqlOriginal /> },
        { name: "Firebase", icon: <FirebaseOriginalWordmark /> },
        { name: "PHP", icon: <PhpOriginal /> },

      ],
    },
    {
      category: "DevOps & Tools",
      technologies: [
        { name: "Git", icon: <GitOriginal /> },
        { name: "Docker", icon: <DockerOriginal /> },
        { name: "CI/CD", icon: <Code2 /> },
        { name: "AWS", icon: <AmazonwebservicesOriginalWordmark /> },
        { name: "Vercel", icon: <VercelOriginal /> },
        { name: "Netlify", icon: <NetlifyOriginal /> },
      ],
    },
    {
      category: "App Development",
      technologies: [
        { name: "React Native", icon: <ReactnavigationOriginal /> },
        { name: "Native wind", icon: <TailwindcssOriginal /> },
        { name: "Expo", icon: <AndroidstudioOriginal /> },
        { name: "Firebase", icon: <FirebaseOriginal /> },
        { name: "PWA (progressive web apps)", icon: <Code2 /> },
      ],
    },
    {
      category: "Low/No-Code Tools",
      technologies: [
        { name: "Wordpress", icon: <WordpressOriginal /> },
        { name: "Wix", icon: <Code2 /> },
      ],
    },
  ]

  const projects = [
    {
      title: "Izhub UK",
      category: "Online Booking",
      description:
        "A smart online beauty appointment booking platform for a UK based client .",
      technologies: ["Nextjs", "Plunk", "Firebase", "Tailwind CSS", "Google Cloud", "Maps Api"],
      image: "/projects/izhub.png?height=600&width=800",
      link: "https://izhub.uk/",
      featured: true,
    },
    {
      title: "iConz",
      category: "E-commerce",
      description:
        "A comprehensive peer-to-peer e-commerce platform serving 10,000+ users across Cameroon .",
      technologies: ["React", "Node.js", "Firebase", "Tailwind CSS", "Google Cloud"],
      image: "/projects/icon.png?height=600&width=800",
      link: "https://iconzapp.com/",
      featured: true,
    },
    // {
    //   title: "Restou",
    //   category: "Food Delivery",
    //   description:
    //     "A food delivery platform connecting restaurants with customers, supporting 100+ restaurants in Cameroon.",
    //   technologies: ["Next.js", "Firebase", "Google Cloud", "Vercel", "Tailwind CSS", "Shadcn UI"],
    //   image: "/projects/restou.png?height=600&width=800",
    //   link: "https://m.restou.net/",
    //   featured: true,
    // },
    {
      title: "Samba Otavise",
      category: "Portfolio",
      description:
        "A portfolio website for Dr. Samba Otavise, a multifaceted professional who seamlessly integrates Medicine, Technology, and Leadership in his diverse career showcasing his skills and projects.",
      technologies: ["Firebase", "Next.js", "Tailwind CSS", "Shadcn UI"],
      image: "/projects/samba.png?height=600&width=800",
      link: "https://sambaotavise.com/",
      featured: true,
    },
    {
      title: "Cameroon young Physician Network(CAMYPNET)",
      category: "Healthcare",
      description:
        "A platform connecting young physicians in Cameroon, providing resources, networking opportunities, and support.",
      technologies: ["Next.js", "Firebase", "PostgreSQL", "Vercel", "GCP", "Tailwind CSS", "Shadcn UI"],
      image: "/projects/camypnet.png?height=600&width=800",
      link: "https://camypnet.org/",
      featured: true,
    },
    {
      title: "Crown Home Holdings",
      category: "Real Estate",
      description:
        "A platform for property owners to easily verify their properties and stay in the loop .",
      technologies: ["Next.js", "Node.js", "Firebase", "Flutterwave", "Github", "Tailwind CSS", "Shadcn UI"],
      image: "/projects/chp.png?height=600&width=800",
      link: "#",
      featured: true,
    },
    {
      title: "SolaviseTech",
      category: "Tech",
      description:
        "A technology training institute, offering cloud computing, Web development, DevOps, AI, ML, and Cybersecurity courses. This website showcases  comprehensive technology training programs and solutions designed to help individuals and organizations advance in the digital era."
      technologies: ["Firebase", "Nextjs", "Tailwind CSS", "Shadcn UI"],
      image: "/projects/solavisetech.png?height=600&width=800",
      link: "https://solavisetech.com/",
      featured: true,
    },
  ]

  const contactMethods = [
    {
      icon: <Mail className="h-10 w-10" />,
      title: "Email",
      description: "Drop me a message anytime",
      value: "akalegodlove@gmail.com",
      action: "Copy Email",
      link: "mailto:akalegodlove@gmail.com",
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: "Live Chat",
      description: "Available 9am-6pm GMT+1",
      value: "Start a conversation",
      action: "Chat Now",
      link: "https://wa.me/237676579370",
    },
    {
      icon: <Phone className="h-10 w-10" />,
      title: "Phone",
      description: "For urgent inquiries",
      value: "+237 676 579 370",
      action: "Call Now",
      link: "tel:+237676579370",
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      title: "Schedule a Call",
      description: "Book a time that works for you",
      value: "Check availability",
      action: "Book Call",
      link: "https://wa.me/237676579370",
    },
  ]


  return (
    <div ref={containerRef} className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white min-h-screen">
      {/* Mobile menu button */}
      {isMobile && (
        <button
          className="fixed top-6 right-6 z-50 p-2 bg-black/50 backdrop-blur-sm rounded-full"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      )}

      {/* Sidebar navigation */}
      <AnimatePresence>
        {(menuOpen || !isMobile) && (
          <motion.nav
            className={cn(
              "fixed top-0 left-0 h-full bg-zinc-900/90 backdrop-blur-md z-40 flex flex-col",
              isMobile ? "w-64" : "w-72 border-r border-zinc-800",
            )}
            initial={isMobile ? { x: -300 } : { x: 0 }}
            animate={{ x: 0 }}
            exit={isMobile ? { x: -300 } : undefined}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.div
              className="p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/" className="block">
                <motion.h1 className="text-4xl font-bold text-white relative inline-block" whileHover={{ scale: 1.05 }}>
                  <span className="relative z-10">AKale</span>
                  <motion.span
                    className="absolute -left-1 -bottom-1 w-full h-3 bg-teal-500 z-0"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  />
                </motion.h1>
                <p className="text-sm text-zinc-400 mt-1">Full-Stack Developer</p>
              </Link>
            </motion.div>

            <div className="flex-1 flex flex-col justify-center px-8">
              <ul className="space-y-6">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "text-lg font-medium hover:text-white transition-colors relative group block",
                        activeSection === item.href.substring(1) ? "text-teal-400" : "text-zinc-400",
                      )}
                      onClick={() => isMobile && setMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        {activeSection === item.href.substring(1) && (
                          <motion.div layoutId="activeNavIndicator" className="w-1 h-5 bg-teal-400 rounded-full mr-3" />
                        )}
                        <span>{item.name}</span>
                      </div>
                      <motion.span
                        className="absolute left-0 bottom-0 w-0 h-[1px] bg-teal-400 group-hover:w-full transition-all duration-300"
                        whileHover={{ width: "100%" }}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              className="p-8 flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className={cn("min-h-screen relative z-10", isMobile ? "ml-0" : "ml-72")}>
        {/* Hero section */}
        <section id="home" ref={heroRef} className="min-h-screen flex flex-col justify-center px-8 md:px-16 relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center bg-zinc-900/60 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full animate-ping bg-teal-400 mr-2"></div>
                <span className="text-sm text-zinc-300">Available for new projects</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <motion.h2
                className="text-7xl md:text-8xl font-bold tracking-tighter mb-4 relative inline-block text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => {
                  animate(
                    "textShadow",
                    [
                      "0 0 0px rgba(45, 212, 191, 0)",
                      "0 0 20px rgba(45, 212, 191, 0.5)",
                      "0 0 0px rgba(45, 212, 191, 0)",
                    ],
                    { duration: 1.5, repeat: 0 },
                  )
                }}
              >
                HELLO
                <motion.span
                  className="absolute -right-4 top-0 bottom-0 w-2 bg-amber-400"
                  animate={{
                    opacity: [1, 0, 1],
                    height: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              </motion.h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                I&apos;m <span className="text-teal-400">AKALE GODLOVE</span>,
              </h3>
              <div className="text-xl text-zinc-300 h-8">
              <AnimatePresence mode="wait">
            <motion.div
              key={titles[currentIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute"
            >
              {titles[currentIndex]}
            </motion.div>
      </AnimatePresence>
              </div>
            </motion.div>

            <motion.p
              className="text-zinc-400 text-lg max-w-2xl mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              Turning complex problems into elegant, efficient, and user-friendly solutions with cutting-edge
              technologies. Specializing in building scalable web applications that drive business growth.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <Button
                asChild
                className="bg-teal-500 hover:bg-teal-600 text-black font-medium px-8 py-6 rounded-md group relative overflow-hidden"
              >
                <Link href="#contact">
                  <motion.span
                    className="absolute inset-0 bg-black/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.span
                    className="flex items-center gap-2 relative z-10"
                    whileHover={{ gap: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    HIRE ME
                    <motion.span whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </motion.span>
                </Link>
              </Button>

              <Button
                asChild
                className="bg-white hover:bg-teal-600 text-black font-medium px-8 py-6 rounded-md group relative overflow-hidden"
                >
                <Link href="#portfolio">
                  <motion.span
                    className="absolute inset-0 bg-black/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.span
                    className="flex items-center gap-2 relative z-10"
                    whileHover={{ gap: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    VIEW MY WORK
                    <motion.span whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <ChevronRight className="h-4 w-4" />
                    </motion.span>
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </div>

        </section>

        {/* About section */}
        <section id="about" className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-2b">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <div className="inline-flex items-center bg-zinc-900/60 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
              <span className="text-sm text-teal-400">ABOUT ME</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative group">
              <span className="relative z-10">My Journey</span>
              <motion.span
                className="absolute left-0 bottom-0 h-3 bg-teal-500/20 z-0"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <motion.span
                className="absolute left-0 bottom-0 h-1 bg-teal-500 z-0"
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </h2>
            <div className="w-20 h-1 bg-teal-500"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent"></div>
                <Image src="/me-2.png?height=800&width=600" alt="Akale Godlove" fill className="object-cover" />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-zinc-900 p-4 rounded-lg shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* <div className="flex gap-2 items-center">
                  <Download className="text-teal-400 h-5 w-5" />
                  <a href="#" className="text-sm font-medium hover:text-teal-400 transition-colors">
                    Download CV
                  </a>
                </div> */}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-bold mb-6">Full-Stack Developer & Tech Consultant</h3>

              <motion.p
                className="text-zinc-300 mb-6"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1, color: "#2dd4bf" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                With over 4 years of experience in web development, I&apos;ve helped businesses across various industries
                transform their digital presence. Based in Cameroon but working globally, I specialize in building
                robust, scalable applications that solve real-world problems.
              </motion.p>

              <p className="text-zinc-300 mb-6">
                My approach combines technical expertise with strategic thinking, ensuring that every project not only
                meets technical requirements but also achieves business objectives. I&apos;m passionate about creating
                exceptional digital experiences that drive results.
              </p>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">Education & Certifications</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium block">BSc in Computer Science</span>
                      <span className="text-sm text-zinc-400">University of Buea, 2023</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium block">AWS Cloud Practitioner</span>
                      <span className="text-sm text-zinc-400">Amazon Web Services, 2024</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium block">Google UX Design Professional Certificate</span>
                      <span className="text-sm text-zinc-400">Google, 2024</span>
                    </div>
                  </li>
                </ul>
              </div>

              {skills.map((skillCategory, i) => (
                    <div key={i} className="mb-4">
                      <h3 className="text-xl font-semibold mb-3">{skillCategory.category}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {skillCategory.technologies.map((tech, j) => (
                          <motion.div
                            key={j}
                            className="flex items-center gap-2 p-2 rounded-md bg-zinc-900/60"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                              backgroundColor:
                                tech.level === "Expert"
                                  ? "rgba(45, 212, 191, 0.2)"
                                  : tech.level === "Advanced"
                                    ? "rgba(245, 158, 11, 0.2)"
                                    : "rgba(161, 161, 170, 0.2)",
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {tech.icon}
                            <div>
                              <div className="text-sm font-medium">{tech.name}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}

            </motion.div>
          </div>
        </section>

        {/* Services section */}
        <section id="services" className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <div className="inline-flex items-center bg-zinc-900/60 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
              <span className="text-sm text-teal-400">MY SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative group">
              <span className="relative z-10">What I Offer</span>
              <motion.span
                className="absolute left-0 bottom-0 h-3 bg-teal-500/20 z-0"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <motion.span
                className="absolute left-0 bottom-0 h-1 bg-teal-500 z-0"
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </h2>
            <div className="w-20 h-1 bg-teal-500"></div>
            <p className="max-w-2xl mt-6 text-zinc-300">
              Specialized services tailored to help businesses achieve their digital objectives through innovative
              solutions and industry best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-lg border border-zinc-800 group hover:border-teal-400 transition-colors"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 rounded-lg bg-teal-400/10 flex items-center justify-center mb-6 text-teal-400 group-hover:bg-teal-400 group-hover:text-black transition-colors">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-400 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-8 text-teal-400 font-medium flex items-center gap-2 group-hover:text-white transition-colors">
                  Learn More <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Button
              asChild

              className="border-zinc-700 hover:border-teal-400 font-medium px-8 py-6 rounded-md group relative overflow-hidden"
            >
              <Link href="#contact">
                <motion.span
                  className="absolute inset-0 bg-black/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <motion.span
                  className="flex items-center gap-2 relative z-10"
                  whileHover={{ gap: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  GET A CUSTOM QUOTE
                  <motion.span whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* Portfolio section */}
        <section id="portfolio" className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <div className="inline-flex items-center bg-zinc-900/60 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
              <span className="text-sm text-teal-400">MY WORK</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative group">
              <span className="relative z-10">Recent Projects</span>
              <motion.span
                className="absolute left-0 bottom-0 h-3 bg-teal-500/20 z-0"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <motion.span
                className="absolute left-0 bottom-0 h-1 bg-teal-500 z-0"
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </h2>
            <div className="w-20 h-1 bg-teal-500"></div>
            <p className="max-w-2xl mt-6 text-zinc-300">
              A selection of my recent work across various industries, showcasing my technical capabilities and
              problem-solving approach.
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Featured projects */}
            <div className="space-y-12">
              <h3 className="text-2xl font-bold">Featured Projects</h3>
              {projects
                .filter((p) => p.featured)
                .map((project, i) => (
                  <motion.div
                    key={project.title}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className={`${i % 2 === 1 ? "lg:order-last" : ""}`}>
                      <div className="relative overflow-hidden rounded-xl ">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={800}
                          height={700}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                          <div className="p-6 w-full">
                            <div className="flex justify-between items-center">
                              <span className="text-teal-400 text-sm">{project.category}</span>
                              <Link href={project.link} className="text-white bg-teal-500 hover:text-teal-400 transition-colors">
                                <ExternalLink className="h-5 w-5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="text-teal-400 text-sm uppercase tracking-wider">{project.category}</span>
                      <h3 className="text-2xl font-bold mt-2 mb-4">{project.title}</h3>
                      <p className="text-zinc-300 mb-6">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, j) => (
                          <span key={j} className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link href={project.link} className="border-zinc-700 bg-teal-500 text-white hover:border-teal-400 hover:bg-teal-400 relative overflow-hidden">
                            <motion.span
                              className="absolute inset-0 bg-black/10"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.5 }}
                            />
                            <motion.span
                              className="flex items-center gap-2 relative z-10"
                              whileHover={{ gap: 4 }}
                              whileTap={{ scale: 0.98 }}
                            >
                             Live Link
                              <motion.span whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                <ArrowRight className="h-4 w-4" />
                              </motion.span>
                            </motion.span>
                          </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <div className="inline-flex items-center bg-zinc-900/60 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
              <span className="text-sm text-teal-400">GET IN TOUCH</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative group">
              <span className="relative z-10">Let&apos;s Work Together</span>
              <motion.span
                className="absolute left-0 bottom-0 h-3 bg-teal-500/20 z-0"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <motion.span
                className="absolute left-0 bottom-0 h-1 bg-teal-500 z-0"
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </h2>
            <div className="w-20 h-1 bg-teal-500"></div>
            <p className="max-w-2xl mt-6 text-zinc-300">
              Have a project in mind or want to discuss a potential collaboration? Reach out through any of these
              channels and I&apos;ll get back to you promptly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, i) => (
              <motion.div
                key={method.title}
                className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg border border-zinc-800 group hover:border-teal-400 transition-colors"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(45, 212, 191, 0.1)" }}
              >
                <motion.div
                  className="w-16 h-16 rounded-lg bg-teal-400/10 flex items-center justify-center mb-6 text-teal-400 group-hover:bg-teal-400 group-hover:text-black transition-colors"
                  whileHover={{ rotate: [0, -10, 10, -5, 5, 0], transition: { duration: 0.5 } }}
                >
                  {method.icon}
                </motion.div>

                <h3 className="text-xl font-bold mb-1">{method.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{method.description}</p>
                <p className="text-white font-medium mb-4">{method.value}</p>

                <Button asChild className="w-full bg-zinc-800 hover:bg-teal-500 hover:text-black transition-colors">
                  <Link href={method.link}>
                    <motion.span
                      className="flex items-center justify-center gap-2"
                      whileHover={{ gap: 6 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {method.action}
                      <motion.span whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-lg border border-zinc-800"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h3
                className="text-2xl cursor-pointer font-bold mb-6"
                initial={{ opacity: 0.9 }}
                whileHover={{
                  opacity: 1,
                  textShadow: "0 0 8px rgba(45, 212, 191, 0.5)",
                }}
              >
                Send Me a Message
              </motion.h3>
              <form className="space-y-4" action="https://formsubmit.co/58a7b0adbcc36258ae72c41ffbc8e22f" method="POST" encType="multipart/form-data">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name_of_sender"
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-zinc-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    name="message"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-black font-medium py-6 relative overflow-hidden">
                  <motion.span
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.span
                    className="flex items-center cursor-pointer justify-center gap-2 relative z-10"
                    whileHover={{ gap: 6 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                    <motion.span
                      animate={{
                        x: [0, 5, 0],
                        transition: {
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                        },
                      }}
                    >
                      <Send className="h-4 w-4" />
                    </motion.span>
                  </motion.span>
                </Button>
              </form>
            </motion.div>

            <motion.div
              className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-lg border border-zinc-800"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-bold mb-6">My Location</h3>
              <div className="w-full h-48 py-12 bg-zinc-800 rounded-lg mb-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-teal-400 mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Citizen of the World</h4>
                    <p className="text-zinc-400">Available for remote work worldwide</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Working Hours</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-zinc-300 font-medium">Monday - Friday</p>
                    <p className="text-zinc-400">24/7 (GMT+1)</p>
                  </div>
                  <div>
                    <p className="text-zinc-300 font-medium">Saturday</p>
                    <p className="text-zinc-400">24/7 (GMT+1)</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-zinc-800">
                  <p className="text-zinc-300">Prefer to connect on social media?</p>
                  <div className="flex space-x-4 mt-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-teal-400 hover:text-black transition-colors"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

