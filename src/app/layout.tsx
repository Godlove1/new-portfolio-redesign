import type { Metadata } from "next"
import "@/app/globals.css"
import { Space_Grotesk, Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  PERSON,
  SOCIAL,
  SEO,
  OG,
  FAQ,
  CREDENTIALS,
  EXPERTISE,
} from "@/lib/config"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// Metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SEO.keywords,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: OG.locale,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: OG.title,
    description: OG.description,
    images: [
      {
        url: OG.image,
        width: 1200,
        height: 630,
        alt: OG.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG.title,
    description: OG.description,
    site: SEO.twitterHandle,
    creator: SEO.twitterHandle,
    images: [OG.image],
  },
  category: "technology",
}

// JSON-LD Schemas for Search Engines and AI Indexing
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: PERSON.name,
  givenName: PERSON.firstName,
  familyName: PERSON.lastName,
  jobTitle: PERSON.headline,
  description: PERSON.bio,
  url: SITE_URL,
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/me-2.png`,
    caption: `${PERSON.name} - Full-Stack Engineer`,
  },
  email: `mailto:${PERSON.email}`,
  telephone: PERSON.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buea",
    addressCountry: "CM",
    addressRegion: "South West Region",
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Cameroon" },
    { "@type": "Country", name: "Nigeria" },
    "Worldwide Remote",
  ],
  knowsAbout: EXPERTISE,
  alumniOf: CREDENTIALS.map((c) => ({
    "@type": "EducationalOrganization",
    name: c.issuer,
    url: c.url,
  })),
  hasCredential: CREDENTIALS.map((c) => ({
    "@type": "EducationalOccupationalCredential",
    name: c.title,
    credentialCategory: "certificate",
    recognizedBy: { "@type": "Organization", name: c.issuer },
  })),
  sameAs: [SOCIAL.github, SOCIAL.linkedin, SOCIAL.twitter, SOCIAL.instagram, SITE_URL],
  worksFor: {
    "@type": "Organization",
    name: "Independent Consultant / Remote Engineer",
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#person` },
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: `${SITE_NAME} - Portfolio`,
  description: SITE_DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#person` },
  mainEntity: { "@id": `${SITE_URL}/#person` },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: `${SITE_NAME} - Software Engineering & Technical Consulting`,
  url: SITE_URL,
  description:
    "Full-stack software engineering, web application development, cloud backend architecture, and technical consulting for international clients.",
  provider: { "@id": `${SITE_URL}/#person` },
  areaServed: "Worldwide",
  serviceType: [
    "Web Application Engineering",
    "Backend & API Systems",
    "Mobile App Development",
    "UI/UX & Product Design",
    "Technical SEO & Web Speed",
    "Technical Consulting & Code Audits",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: PERSON.email,
    telephone: PERSON.phone,
    contactType: "technical consulting inquiries",
    availableLanguage: ["English", "French"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(spaceGrotesk.variable, inter.variable)}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="CM" />
        <meta name="geo.placename" content="Buea, Cameroon" />
        <meta name="geo.position" content="4.1527;9.2416" />
        <meta name="ICBM" content="4.1527, 9.2416" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      </head>
      <body className={cn("min-h-screen antialiased font-sans bg-[#080C10] text-white")}>
        {children}
      </body>
    </html>
  )
}
