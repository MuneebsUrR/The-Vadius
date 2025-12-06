import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-medium text-foreground mb-8">Privacy Policy</h1>
          <div className="prose prose-lg text-foreground/70 max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">Information We Collect</h2>
            <p className="mb-6">
              We collect information you provide directly to us, such as when you fill out a contact form, request a
              consultation, or communicate with us via email.
            </p>

            <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">How We Use Your Information</h2>
            <p className="mb-6">
              We use the information we collect to respond to your inquiries, provide our services, and communicate with
              you about relevant updates and opportunities.
            </p>

            <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy, please contact us at{" "}
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
