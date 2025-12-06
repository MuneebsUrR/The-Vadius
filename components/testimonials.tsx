"use client"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "TheVadius transformed how we manage our brand across all channels. The SaaS platform is intuitive and powerful.",
      author: "Sarah Chen",
      role: "CEO, Digital Ventures",
      company: "Digital Ventures",
    },
    {
      quote:
        "The support team is exceptional. They understood our needs and delivered solutions that exceeded our expectations.",
      author: "Michael Rodriguez",
      role: "Marketing Director, GrowthCo",
      company: "GrowthCo",
    },
    {
      quote:
        "Within six months, we saw a 40% increase in brand consistency and customer engagement. Highly recommended.",
      author: "Emma Thompson",
      role: "Founder, Creative Studios",
      company: "Creative Studios",
    },
  ]

  return (
    <section className="py-24 px-6 md:px-8 lg:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <p className="text-sm font-medium tracking-widest text-primary mb-4">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-light leading-tight text-foreground max-w-3xl">
            What our clients say about us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg p-8 md:p-10 hover:shadow-lg transition-shadow duration-500 group"
            >
              {/* Quote mark */}
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-primary opacity-40 group-hover:opacity-100 transition-opacity"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-3-6.86-3C.734 2 0 5.467 0 9.72c0 5.85 2.443 7.28 7 7.28 1.5 0 4-1 6-1v2.5c0 1-2 4-6.5 4-.5 0-1 0-1 0Z" />
                </svg>
              </div>

              <p className="text-base md:text-lg text-foreground leading-relaxed mb-8 font-light">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-border pt-6">
                <p className="font-medium text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
