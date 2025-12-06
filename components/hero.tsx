"use client"

import { ArrowRight, Sparkles, TrendingUp, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-6 flex flex-col justify-center z-10">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-emerald-500/10 border border-primary/20 mb-6 w-fit backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Award-Winning Digital Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-foreground">
              Transform Your
              <br />
              <span className="relative inline-block mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-500 to-teal-500">
                  Digital Presence
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-emerald-500/50 to-teal-500/50 rounded-full" />
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-foreground/70 leading-relaxed mb-10 max-w-xl">
              We craft exceptional brands and SaaS solutions that drive growth, engagement, and lasting success in the digital landscape.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-white h-14 px-8 rounded-xl text-base font-semibold group w-full sm:w-auto shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-foreground/20 hover:bg-foreground/5 hover:border-primary/40 h-14 px-8 rounded-xl text-base font-semibold group bg-background/50 backdrop-blur-sm w-full sm:w-auto transition-all"
                >
                  View Our Work
                  <Zap className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                <span>98% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">★★★★★</span>
                <span>5.0 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Column - Premium Visual Design */}
          <div className="lg:col-span-6 relative h-full min-h-[600px]">
            {/* Main visual container */}
            <div className="relative w-full h-full">
              {/* Bento-style grid layout */}
              <div className="grid grid-cols-6 grid-rows-6 gap-4 h-[600px] perspective-1000">
                {/* Large feature card */}
                <div 
                  className="col-span-4 row-span-4 rounded-3xl bg-gradient-to-br from-primary/20 via-emerald-500/10 to-background border border-primary/20 shadow-xl backdrop-blur-sm overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
                  style={{ animation: "fadeInUp 0.8s ease-out" }}
                >
                  <div className="relative w-full h-full p-8 flex flex-col justify-between">
                    {/* Top content */}
                    <div>
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-emerald-500 shadow-lg mb-6">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">Lightning Fast</h3>
                      <p className="text-foreground/60 text-sm">Optimized performance for maximum impact</p>
                    </div>
                    
                    {/* Bottom stats */}
                    <div className="flex items-end justify-between">
                      <div className="flex gap-2">
                        <div className="w-2 h-24 rounded-full bg-primary/30 group-hover:h-32 transition-all duration-500" />
                        <div className="w-2 h-32 rounded-full bg-primary/50 group-hover:h-36 transition-all duration-500" />
                        <div className="w-2 h-20 rounded-full bg-primary/20 group-hover:h-28 transition-all duration-500" />
                        <div className="w-2 h-28 rounded-full bg-primary/40 group-hover:h-32 transition-all duration-500" />
                      </div>
                      <div className="text-3xl font-bold text-primary">340%</div>
                    </div>
                    
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Top right card */}
                <div 
                  className="col-span-2 row-span-2 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/20 shadow-lg backdrop-blur-sm p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
                  style={{ animation: "fadeInUp 0.8s ease-out 0.1s backwards" }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <TrendingUp className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-1">150+</div>
                    <div className="text-xs text-foreground/60">Projects Delivered</div>
                  </div>
                </div>

                {/* Middle right card */}
                <div 
                  className="col-span-2 row-span-2 rounded-2xl bg-gradient-to-br from-teal-500/20 to-primary/10 border border-teal-500/20 shadow-lg backdrop-blur-sm p-6 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  style={{ animation: "fadeInUp 0.8s ease-out 0.2s backwards" }}
                >
                  <div className="text-center">
                    <div className="mb-3 flex justify-center">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-xl font-bold text-foreground mb-1">ISO Certified</div>
                    <div className="text-xs text-foreground/60">Quality Assured</div>
                  </div>
                </div>

                {/* Bottom left card */}
                <div 
                  className="col-span-2 row-span-2 rounded-2xl bg-gradient-to-br from-primary/15 to-emerald-500/5 border border-primary/20 shadow-lg backdrop-blur-sm p-6 flex items-center justify-center group hover:scale-105 transition-transform duration-300"
                  style={{ animation: "fadeInUp 0.8s ease-out 0.3s backwards" }}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">⚡</div>
                    <div className="text-sm font-semibold text-foreground">Real-time Updates</div>
                  </div>
                </div>

                {/* Bottom middle card */}
                <div 
                  className="col-span-2 row-span-2 rounded-2xl bg-gradient-to-br from-emerald-500/15 to-primary/5 border border-emerald-500/20 shadow-lg backdrop-blur-sm overflow-hidden hover:scale-105 transition-transform duration-300"
                  style={{ animation: "fadeInUp 0.8s ease-out 0.4s backwards" }}
                >
                  <div className="relative w-full h-full p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="text-lg font-bold text-foreground">98%</div>
                      <Sparkles className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-xs text-foreground/60 mb-3">Client Satisfaction</div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-5 h-1 rounded-full bg-emerald-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating particles overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-[10%] right-[15%] w-2 h-2 rounded-full bg-primary/40 animate-float-slow" />
                  <div className="absolute top-[60%] left-[20%] w-3 h-3 rounded-full bg-emerald-500/30 animate-float-medium" />
                  <div className="absolute bottom-[20%] right-[25%] w-2 h-2 rounded-full bg-teal-500/40 animate-float-fast" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 pt-12 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent mb-2">
                150+
              </div>
              <div className="text-sm text-foreground/60">Brands Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-sm text-foreground/60">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-teal-500 to-primary bg-clip-text text-transparent mb-2">
                340%
              </div>
              <div className="text-sm text-foreground/60">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-sm text-foreground/60">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-foreground/40 uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(10px, -20px);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-15px, -15px);
          }
        }
        @keyframes float-fast {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -10px);
          }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  )
}
