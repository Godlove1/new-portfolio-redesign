import "@/app/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Akale Godlove | Web Developer",
  description: "Full-stack web developer specializing in creating modern, responsive websites and applications.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen antialiased", inter.className)}>
        <ServiceWorkerRegistration />
        {children}</body>
    </html>
  )
}

