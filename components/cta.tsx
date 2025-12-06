"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-primary via-emerald-500 to-teal-500 p-12 lg:p-20 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl" />

          <div className="relative text-center">
            <h2 className="text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight">
              Ready to transform
              <br />
              your brand?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how TheVadius can help you build a brand that stands out, scales up, and drives real
              business results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-foreground hover:bg-white/90 h-14 px-8 rounded-full text-base font-medium group"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="mailto:support@thevadius.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 h-14 px-8 rounded-full text-base font-medium"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Button>
              </a>
            </div>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-sm">
              <a
                href="mailto:support@thevadius.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={16} />
                support@thevadius.com
              </a>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
              <span className="flex items-center gap-2">Response within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
