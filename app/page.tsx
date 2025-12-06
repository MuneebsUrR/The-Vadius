import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import StatsShowcase from "@/components/stats-showcase"
import HowItWorks from "@/components/how-it-works"
import CaseStudies from "@/components/case-studies"
import Testimonials from "@/components/testimonials"
import InsightsPreview from "@/components/insights-preview"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Transform Your Digital Presence | Award-Winning Brand Management & SaaS Solutions",
  description:
    "TheVadius transforms businesses through strategic brand management and innovative SaaS solutions. We help companies stand out, scale up, and succeed in the digital age. 150+ brands transformed, 98% client satisfaction, 340% average ROI.",
  keywords: [
    "brand management",
    "SaaS solutions",
    "digital transformation",
    "brand strategy",
    "custom software development",
    "web development",
    "digital marketing",
    "brand consulting",
  ],
  openGraph: {
    title: "TheVadius - Transform Your Digital Presence",
    description:
      "Award-winning brand management and SaaS solutions. 150+ brands transformed, 98% client satisfaction, 340% average ROI.",
    url: "/",
    siteName: "TheVadius",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TheVadius - Brand Management & SaaS Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheVadius - Transform Your Digital Presence",
    description:
      "Award-winning brand management and SaaS solutions. 150+ brands transformed, 98% client satisfaction.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <StatsShowcase />
      <HowItWorks />
      <CaseStudies />
      <Testimonials />
      <InsightsPreview />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}
