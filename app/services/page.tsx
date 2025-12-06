import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Palette, Code, TrendingUp, Users, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Palette,
    title: "Brand Strategy & Identity",
    description:
      "We build brands that resonate. From positioning to visual identity, we create comprehensive brand systems that differentiate you in the market and connect with your audience on a deeper level.",
    features: [
      "Brand Discovery & Research",
      "Brand Positioning Strategy",
      "Visual Identity Design",
      "Brand Guidelines & Systems",
      "Messaging & Voice Development",
      "Brand Architecture",
    ],
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: Code,
    title: "Custom SaaS Development",
    description:
      "Enterprise-grade software solutions built for scale. We develop innovative SaaS platforms that solve complex business problems and create new opportunities for growth.",
    features: [
      "Platform Architecture & Design",
      "Full-Stack Development",
      "API Design & Integration",
      "Cloud Infrastructure Setup",
      "Database Design & Optimization",
      "Security & Compliance",
    ],
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: TrendingUp,
    title: "Growth & Marketing",
    description:
      "Data-driven strategies that accelerate growth. We help you reach the right audience, convert more customers, and build lasting relationships that drive sustainable revenue.",
    features: [
      "Digital Marketing Strategy",
      "Content Marketing",
      "SEO & SEM Optimization",
      "Analytics & Performance Tracking",
      "Conversion Rate Optimization",
      "Marketing Automation",
    ],
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Brand Management",
    description:
      "Keep your brand consistent and strong across all touchpoints. We provide ongoing management and optimization to ensure your brand continues to perform at its best.",
    features: [
      "Brand Monitoring & Analytics",
      "Reputation Management",
      "Campaign Planning & Execution",
      "Asset Management Systems",
      "Team Training & Enablement",
      "Performance Reporting",
    ],
    color: "from-teal-400 to-cyan-500",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs text-primary font-medium uppercase tracking-wider">Our Services</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-medium leading-tight text-foreground mb-6">
              End-to-end solutions for
              <span className="text-primary"> ambitious brands</span>
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed">
              From strategy to execution, we provide comprehensive services that help businesses build powerful brands
              and innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0
            return (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12 border-b border-border last:border-0"
              >
                <div className={isEven ? "" : "lg:order-2"}>
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-8`}
                  >
                    <Icon className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-6">{service.title}</h2>
                  <p className="text-lg text-foreground/60 leading-relaxed mb-8">{service.description}</p>
                  <Link href="/contact">
                    <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-6 h-12 font-medium group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className={`bg-muted/50 rounded-3xl p-8 lg:p-10 ${isEven ? "" : "lg:order-1"}`}>
                  <h3 className="text-lg font-medium text-foreground mb-6">What's included</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground/70">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-6">Not sure where to start?</h2>
          <p className="text-lg text-foreground/60 mb-8">
            Let's have a conversation about your goals. We'll help you identify the right services to achieve them.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-base font-medium"
            >
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
