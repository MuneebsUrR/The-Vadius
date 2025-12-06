"use client"

import { Palette, Code, TrendingUp, Users, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Palette,
    title: "Brand Strategy & Identity",
    description:
      "We craft compelling brand stories and visual identities that resonate with your audience and differentiate you in the market.",
    features: ["Brand Positioning", "Visual Identity Systems", "Brand Guidelines", "Messaging Framework"],
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: Code,
    title: "Custom SaaS Development",
    description:
      "Enterprise-grade software solutions built to scale. We develop innovative SaaS platforms that solve real business problems.",
    features: ["Platform Architecture", "API Development", "Cloud Infrastructure", "Scalable Systems"],
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: TrendingUp,
    title: "Growth & Marketing",
    description:
      "Data-driven strategies that accelerate customer acquisition and maximize your brand's market presence.",
    features: ["Digital Marketing", "Analytics & Insights", "Conversion Optimization", "Content Strategy"],
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Brand Management",
    description:
      "Comprehensive brand management services that ensure consistency and excellence across all touchpoints.",
    features: ["Brand Monitoring", "Reputation Management", "Campaign Management", "Performance Tracking"],
    color: "from-teal-400 to-cyan-500",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs text-primary font-medium uppercase tracking-wider">What We Do</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-medium leading-tight text-foreground mb-6">
              Services that drive
              <span className="text-primary"> real results</span>
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              From brand strategy to SaaS development, we provide end-to-end solutions that help businesses grow and
              thrive in the digital landscape.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            View All Services
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-3xl p-8 lg:p-10 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 overflow-hidden"
              >
                {/* Gradient accent */}
                <div
                  className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.color} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}
                  >
                    <Icon className="text-white" size={26} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed mb-8">{service.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full text-xs font-medium text-foreground/70 bg-foreground/5 group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
