"use client"

import { Award, Zap, Lock, Globe, Sparkles, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Innovation First",
    description: "We stay ahead of trends and leverage cutting-edge technology to give your brand a competitive edge.",
  },
  {
    icon: Award,
    title: "Proven Excellence",
    description: "Award-winning work and a track record of success across diverse industries and markets.",
  },
  {
    icon: Zap,
    title: "Rapid Execution",
    description:
      "Agile methodologies and streamlined processes that deliver results faster without compromising quality.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-level security protocols and compliance standards to protect your brand and data.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "International experience and infrastructure designed for brands operating on a global scale.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership Approach",
    description: "We become an extension of your team, invested in your success as if it were our own.",
  },
]

export default function Features() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-foreground text-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/10 border border-background/20 mb-6">
            <span className="text-xs text-background/80 font-medium uppercase tracking-wider">Why TheVadius</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-medium leading-tight text-background mb-6">
            Built on principles that
            <span className="text-primary"> deliver</span>
          </h2>
          <p className="text-lg text-background/60 leading-relaxed">
            We combine strategic thinking, technical expertise, and creative excellence to help brands achieve their
            full potential.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-background/5 border border-background/10 hover:bg-background/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-medium text-background mb-3">{feature.title}</h3>
                <p className="text-background/60 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
