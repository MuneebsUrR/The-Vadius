import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Let's Start a Conversation",
  description:
    "Have a project in mind? Contact TheVadius today. We'd love to hear about your goals and help transform your brand. Get in touch within 24 hours.",
  keywords: [
    "contact TheVadius",
    "get in touch",
    "brand consultation",
    "SaaS development inquiry",
    "project inquiry",
  ],
  openGraph: {
    title: "Contact TheVadius - Let's Start a Conversation",
    description:
      "Have a project in mind? Contact TheVadius today. We'd love to hear about your goals and help transform your brand.",
    url: "/contact",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

