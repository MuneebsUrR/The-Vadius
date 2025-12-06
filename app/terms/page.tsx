import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "TheVadius Terms of Service. Read our terms and conditions for using our website and services. Agreement to terms, services, and contact information.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-medium text-foreground mb-8">Terms of Service</h1>
          <div className="prose prose-lg text-foreground/70 max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">Agreement to Terms</h2>
            <p className="mb-6">
              By accessing our website, you agree to be bound by these Terms of Service and all applicable laws and
              regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this
              site.
            </p>

            <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">Services</h2>
            <p className="mb-6">
              TheVadius provides brand management and SaaS development services. Specific terms for individual projects
              will be outlined in separate agreements.
            </p>

            <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">Contact Us</h2>
            <p className="mb-6">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:support@thevadius.com" className="text-primary hover:underline">
                support@thevadius.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
