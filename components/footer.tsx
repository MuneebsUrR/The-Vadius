"use client"

import Link from "next/link"
import { Mail, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-20 grid md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/images/logo.jpeg" alt="TheVadius" className="h-10 w-auto rounded-lg" />
              <span className="font-semibold text-xl text-background">TheVadius</span>
            </Link>
            <p className="text-background/60 leading-relaxed mb-8 max-w-md">
              We help businesses build powerful brands and innovative SaaS solutions that drive growth and create
              lasting impact.
            </p>
            <a
              href="mailto:support@thevadius.com"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <Mail size={18} />
              support@thevadius.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-background mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-background/60 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/60 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-background/60 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/60 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium text-background mb-6">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">© {new Date().getFullYear()} TheVadius. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-background/40 hover:text-background/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-background/40 hover:text-background/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
