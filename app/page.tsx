import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import StatsShowcase from "@/components/stats-showcase"
import HowItWorks from "@/components/how-it-works"
import CaseStudies from "@/components/case-studies"
import Testimonials from "@/components/testimonials"
import InsightsPreview from "@/components/insights-preview"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <StatsShowcase />
      <HowItWorks />
      <CaseStudies />
      <Testimonials />
      <InsightsPreview />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}
