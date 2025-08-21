"use client"

import { useState, useEffect, useMemo, memo } from "react"
import { Button } from "@/components/ui/button"
import { TrendingUp, Clock, DollarSign, Target } from "lucide-react"

const BackgroundVisual = memo(function BackgroundVisual() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const particles = useMemo(() => {
    if (!mounted) return [] as Array<{ left: number; top: number; delay: number; duration: number }>
    return Array.from({ length: 8 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 8 + Math.random() * 4,
    }))
  }, [mounted])

  return (
    <div className="absolute inset-0 bg-brand-gradient">
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-brand-cyan/20 rounded-full animate-float"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Trading Chart Lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <path
            d="M0,400 Q300,200 600,300 T1200,250"
            stroke="#00e5ff"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,500 Q400,300 800,400 T1200,350"
            stroke="#ffd700"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </svg>
      </div>
    </div>
  )
})

export function HeroSection() {
  const [counters, setCounters] = useState({
    days: 0,
    profit: 0,
    fees: 0,
    account: 0,
  })

  useEffect(() => {
    const duration = 2000
    let rafId = 0
    let start = 0

    const tick = (now: number) => {
      if (!start) start = now
      const elapsed = now - start
      const progress = Math.min(1, elapsed / duration)

      const next = {
        days: Math.floor(100 * progress),
        profit: Math.floor(80 * progress),
        fees: Math.floor(50 * progress),
        account: Math.floor(100 * progress),
      }

      setCounters((prev) =>
        prev.days !== next.days || prev.profit !== next.profit || prev.fees !== next.fees || prev.account !== next.account
          ? next
          : prev
      )

      if (progress < 1) {
        rafId = requestAnimationFrame(tick)
      }
    }

    const startTimeout = setTimeout(() => {
      rafId = requestAnimationFrame(tick)
    }, 500)

    return () => {
      clearTimeout(startTimeout)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28 lg:pt-32 pb-20 md:pb-24">
      {/* Animated Background */}
      <BackgroundVisual />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-slide-up">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-white leading-tight px-4">
            Redefining Proprietary
            <br />
            <span className="text-brand-cyan animate-typing">Trade Across Borders</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Two flexible funding models with extended evaluation periods, industry-leading profit splits, and built-in
            brokerage support for seamless execution
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mt-8 sm:mt-12 px-4">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-scale">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-brand-cyan mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-white leading-tight">Unlimited</div>
              <div className="text-xs sm:text-sm text-gray-300">Day Evaluation</div>
            </div>

            <div
              className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-scale"
              style={{ animationDelay: "0.1s" }}
            >
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-brand-gold mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Up to <span className="inline-block min-w-[2ch] [font-variant-numeric:tabular-nums]">{counters.profit}</span>%
              </div>
              <div className="text-xs sm:text-sm text-gray-300">Profit Split</div>
            </div>

            <div
              className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-scale"
              style={{ animationDelay: "0.2s" }}
            >
              <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-brand-cyan mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                <span className="inline-block min-w-[2ch] [font-variant-numeric:tabular-nums]">{counters.fees}</span>%
              </div>
              <div className="text-xs sm:text-sm text-gray-300">Lower Fees</div>
            </div>

            <div
              className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-scale"
              style={{ animationDelay: "0.3s" }}
            >
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-brand-gold mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                $<span className="inline-block min-w-[2ch] [font-variant-numeric:tabular-nums]">{counters.account}</span>K+
              </div>
              <div className="text-xs sm:text-sm text-gray-300">Account Sizes</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-12 mb-10 sm:mb-16 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-brand-cyan hover:bg-brand-cyan/90 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg transition-all duration-300 hover:scale-105 animate-glow shadow-md hover:shadow-xl hover:shadow-brand-cyan/40 focus-visible:ring-2 focus-visible:ring-brand-cyan/50"
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black hover:border-white/90 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg transition-all duration-300 hover:scale-105 bg-transparent hover:shadow-lg hover:shadow-white/20 focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Explore Tracks
            </Button>
          </div>

          {/* Scroll Indicator removed intentionally */}
        </div>
      </div>
    </section>
  )
}
