"use client"

import Link from "next/link"

export default function InsightsPreview() {
  const insights = [
    {
      title: "The Future of Brand Management in 2025",
      excerpt: "Discover how AI and automation are revolutionizing the way brands operate and scale globally.",
      category: "Strategy",
      date: "Dec 2024",
    },
    {
      title: "Building Cohesive Brand Identity Across Markets",
      excerpt: "Learn best practices for maintaining brand consistency while adapting to local market dynamics.",
      category: "Branding",
      date: "Dec 2024",
    },
    {
      title: "SaaS Solutions That Scale with Your Business",
      excerpt: "Explore how cloud-based brand management tools can streamline your operations and reduce costs.",
      category: "Technology",
      date: "Nov 2024",
    },
  ]

  return (
    <section className="py-24 px-6 md:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-8">
          <div>
            <p className="text-sm font-medium tracking-widest text-primary mb-4">INSIGHTS & RESOURCES</p>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-light leading-tight text-foreground">
              Latest from our blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 text-primary hover:gap-4 transition-all duration-300 font-medium text-base"
          >
            View all articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Link key={index} href="#" className="group flex flex-col h-full">
              <div className="flex-grow border-t border-border pt-6 pb-8 hover:border-primary transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium tracking-widest text-primary uppercase">{insight.category}</span>
                  <span className="text-xs text-muted-foreground">{insight.date}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {insight.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">{insight.excerpt}</p>
              </div>
              <div className="flex items-center gap-2 text-primary font-medium mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Read more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
