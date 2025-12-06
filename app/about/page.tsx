import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Target, Heart, Lightbulb, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us - Building Brands That Matter",
  description:
    "Learn about TheVadius - a brand management and SaaS development company dedicated to helping businesses stand out, scale up, and succeed. 150+ brands transformed, 12+ years of experience.",
  keywords: [
    "about TheVadius",
    "brand management company",
    "SaaS development team",
    "digital agency",
    "brand strategy experts",
  ],
  openGraph: {
    title: "About TheVadius - Building Brands That Matter",
    description:
      "TheVadius is a brand management and SaaS development company dedicated to helping businesses stand out, scale up, and succeed in the digital age.",
    url: "/about",
    type: "website",
  },
  alternates: {
    canonical: "/about",
  },
}

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every decision we make is guided by measurable outcomes. We're not satisfied until you see real results.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new ideas and technologies to give our clients a competitive advantage in their markets.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description: "We become an extension of your team, invested in your success as if it were our own.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "The best work happens when we work together. We value open communication and shared vision.",
  },
]

const stats = [
  { value: "150+", label: "Brands Transformed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Years Experience" },
  { value: "25+", label: "Team Members" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">About Us</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-medium leading-tight text-foreground mb-6">
                We build brands that
                <span className="text-primary"> matter</span>
              </h1>
              <p className="text-xl text-foreground/60 leading-relaxed">
                TheVadius is a brand management and SaaS development company dedicated to helping businesses stand out,
                scale up, and succeed in the digital age.
              </p>
            </div>
            <div className="relative">
              <img src="/modern-office-team-collaboration-professional.jpg" alt="TheVadius Team" className="rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-semibold text-primary mb-2">{stat.value}</div>
                <div className="text-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg text-foreground/70 max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Founded with a vision to bridge the gap between strategic brand thinking and technical innovation,
              TheVadius has grown into a trusted partner for businesses seeking transformation.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We believe that great brands are built on more than just aesthetics—they require a deep understanding of
              market dynamics, customer psychology, and the technical capabilities to bring ideas to life at scale.
            </p>
            <p className="text-lg leading-relaxed">
              Our unique combination of brand strategy expertise and SaaS development capabilities allows us to offer
              comprehensive solutions that drive real business results. From startups to enterprises, we help
              organizations at every stage of growth build brands and products that truly matter.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 lg:px-8 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-background mb-4">Our Values</h2>
            <p className="text-background/60 text-lg">The principles that guide everything we do</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-medium text-background mb-3">{value.title}</h3>
                  <p className="text-background/60">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-6">Ready to work together?</h2>
          <p className="text-lg text-foreground/60 mb-8">
            Let's discuss how we can help transform your brand and accelerate your growth.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-base font-medium"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
