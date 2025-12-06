import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://thevadius.com"),
  title: {
    default: "TheVadius - Brand Management & SaaS Solutions | Transform Your Digital Presence",
    template: "%s | TheVadius",
  },
  description:
    "Transform your digital presence with TheVadius. Award-winning brand management and SaaS solutions that drive growth, engagement, and lasting success. 150+ brands transformed, 98% client satisfaction, 340% average ROI.",
  keywords: [
    "brand management",
    "SaaS solutions",
    "digital transformation",
    "brand strategy",
    "custom software development",
    "brand identity",
    "digital marketing",
    "web development",
    "brand consulting",
    "SaaS platform development",
    "brand design",
    "growth marketing",
    "digital agency",
    "brand positioning",
  ],
  authors: [{ name: "TheVadius" }],
  creator: "TheVadius",
  publisher: "TheVadius",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "TheVadius",
    title: "TheVadius - Brand Management & SaaS Solutions | Transform Your Digital Presence",
    description:
      "Transform your digital presence with award-winning brand management and SaaS solutions. 150+ brands transformed, 98% client satisfaction, 340% average ROI.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TheVadius - Brand Management & SaaS Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TheVadius - Brand Management & SaaS Solutions",
    description:
      "Transform your digital presence with award-winning brand management and SaaS solutions. 150+ brands transformed, 98% client satisfaction.",
    images: ["/og-image.jpg"],
    creator: "@thevadius",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "/",
  },
  category: "Business",
  classification: "Brand Management, SaaS Development, Digital Solutions",
  generator: "Next.js",
  applicationName: "TheVadius",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      {
        url: "/images/logo.jpeg",
        sizes: "32x32",
        type: "image/jpeg",
      },
      {
        url: "/images/logo.jpeg",
        sizes: "16x16",
        type: "image/jpeg",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/images/logo.jpeg",
        sizes: "180x180",
        type: "image/jpeg",
      },
    ],
    shortcut: "/images/logo.jpeg",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thevadius.com"

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TheVadius",
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    description:
      "Award-winning brand management and SaaS solutions company. Transform your digital presence with strategic brand management and innovative SaaS solutions.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "support@thevadius.com",
      availableLanguage: "English",
    },
    sameAs: [
      // Add your social media profiles here when available
      // "https://twitter.com/thevadius",
      // "https://linkedin.com/company/thevadius",
      // "https://facebook.com/thevadius",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TheVadius",
    url: siteUrl,
    description:
      "Transform your digital presence with award-winning brand management and SaaS solutions. 150+ brands transformed, 98% client satisfaction, 340% average ROI.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Brand Management & SaaS Solutions",
    provider: {
      "@type": "Organization",
      name: "TheVadius",
    },
    areaServed: "Worldwide",
    description:
      "Comprehensive brand management and SaaS development services including brand strategy, custom software development, growth marketing, and brand management.",
    offers: {
      "@type": "Offer",
      description: "Brand Management & SaaS Solutions",
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
