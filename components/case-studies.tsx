"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    client: "TechFlow",
    industry: "FinTech",
    title: "Complete Digital Transformation",
    description:
      "Helped a legacy financial services company reinvent their digital presence and capture the millennial market.",
    image: "/modern-fintech-dashboard-dark-theme.jpg",
    stats: { metric: "287%", label: "Revenue Growth" },
    tags: ["Brand Strategy", "SaaS Platform", "Growth Marketing"],
  },
  {
    client: "GreenScale",
    industry: "CleanTech",
    title: "Building a Category Leader",
    description:
      "Created a unified brand identity and custom platform that positioned GreenScale as the go-to solution in sustainable energy.",
    image: "/clean-energy-dashboard-green-theme-modern.jpg",
    stats: { metric: "410%", label: "Market Share" },
    tags: ["Brand Identity", "Platform Development", "Market Positioning"],
  },
  {
    client: "MedConnect",
    industry: "HealthTech",
    title: "Healthcare Reimagined",
    description:
      "Developed an innovative SaaS solution that transformed patient engagement and provider communication.",
    image: "/healthcare-app-interface-clean-modern.jpg",
    stats: { metric: "3.2M", label: "Users Onboarded" },
    tags: ["SaaS Development", "UX Design", "Brand Management"],
  },
]

export default function CaseStudies() {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs text-primary font-medium uppercase tracking-wider">Case Studies</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-medium leading-tight text-foreground mb-6">
              Results that speak
              <span className="text-primary"> for themselves</span>
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Real transformations for real businesses. See how we've helped companies across industries achieve
              extraordinary results.
            </p>
          </div>
        </div>

        {/* Case studies */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent lg:hidden" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-sm font-medium text-primary">{study.client}</span>
                    <span className="w-1 h-1 rounded-full bg-foreground/30" />
                    <span className="text-sm text-foreground/60">{study.industry}</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed mb-8">{study.description}</p>

                  {/* Stats */}
                  <div className="flex items-end gap-8 mb-8">
                    <div>
                      <div className="text-4xl lg:text-5xl font-semibold text-primary">{study.stats.metric}</div>
                      <div className="text-sm text-foreground/60 mt-1">{study.stats.label}</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full text-xs font-medium text-foreground/70 bg-foreground/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors group"
          >
            Start Your Success Story
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
