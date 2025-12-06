"use client"

export default function StatsShowcase() {
  const stats = [
    {
      number: "500+",
      label: "Brands Transformed",
      description: "Global brands trust TheVadius for their brand management",
    },
    { number: "40%", label: "Average Growth", description: "Client revenue growth within the first year" },
    { number: "98%", label: "Client Retention", description: "Long-term partnerships built on trust and results" },
    { number: "24/7", label: "Support Available", description: "Dedicated support for all our valued clients" },
  ]

  return (
    <section className="py-24 px-6 md:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <p className="text-sm font-medium tracking-widest text-primary mb-4">PROVEN RESULTS</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground">
            Trusted by industry leaders
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
            Our innovative SaaS solutions have helped businesses scale their brand presence and drive meaningful growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group border-t border-border pt-8 md:pt-12 hover:border-primary transition-colors duration-500"
            >
              <p className="text-5xl md:text-6xl lg:text-7xl font-light text-primary mb-4 group-hover:text-accent transition-colors duration-500">
                {stat.number}
              </p>
              <h3 className="text-xl md:text-2xl font-medium text-foreground mb-3">{stat.label}</h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
