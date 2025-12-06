"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In production, you would send this to your backend
    // For now, we'll open the user's email client
    const subject = encodeURIComponent(`New inquiry from ${formData.name} at ${formData.company}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`,
    )
    window.location.href = `mailto:support@thevadius.com?subject=${subject}&body=${body}`

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs text-primary font-medium uppercase tracking-wider">Contact Us</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-medium leading-tight text-foreground mb-6">
              Let's start a<span className="text-primary"> conversation</span>
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed">
              Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back to you
              within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {isSubmitted ? (
                <div className="bg-primary/10 border border-primary/20 rounded-3xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-medium text-foreground mb-4">Message Sent!</h3>
                  <p className="text-foreground/60 mb-8">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ name: "", email: "", company: "", message: "" })
                    }}
                    variant="outline"
                    className="rounded-full"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="h-12 rounded-xl border-border bg-muted/50 focus:bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="h-12 rounded-xl border-border bg-muted/50 focus:bg-background"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="h-12 rounded-xl border-border bg-muted/50 focus:bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="rounded-xl border-border bg-muted/50 focus:bg-background resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-base font-medium w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-muted/50 rounded-3xl p-8">
                <h3 className="text-lg font-medium text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-foreground/60 mb-1">Email</div>
                      <a
                        href="mailto:support@thevadius.com"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        support@thevadius.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-foreground/60 mb-1">Response Time</div>
                      <div className="text-foreground">Within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-foreground/60 mb-1">Location</div>
                      <div className="text-foreground">Working Globally</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-foreground text-background rounded-3xl p-8">
                <h3 className="text-lg font-medium text-background mb-4">Ready to get started?</h3>
                <p className="text-background/60 mb-6">
                  Schedule a free consultation to discuss your project and discover how we can help.
                </p>
                <a href="mailto:support@thevadius.com?subject=Consultation Request">
                  <Button
                    variant="outline"
                    className="w-full border-background/20 bg-background/10 text-background hover:bg-background/20 rounded-full h-12"
                  >
                    Schedule a Call
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
