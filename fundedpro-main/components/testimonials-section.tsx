"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Professional Trader",
      content:
        "The 100-day evaluation period gave me the confidence to develop my strategy properly. The profit splits are incredible!",
      rating: 5,
    },
    {
      name: "Marcus K.",
      role: "Day Trader",
      content:
        "Finally, a prop firm that doesn't rush you through impossible deadlines. FundedPro actually wants traders to succeed.",
      rating: 5,
    },
    {
      name: "Jennifer L.",
      role: "Swing Trader",
      content: "Lower fees, higher payouts, and amazing support. I scaled from $10K to $50K in just 4 months!",
      rating: 5,
    },
    {
      name: "David R.",
      role: "Forex Trader",
      content: "The challenge was tough but fair. Weekly withdrawals are a game-changer once you're funded!",
      rating: 5,
    },
    {
      name: "Amanda T.",
      role: "Crypto Trader",
      content:
        "Best prop firm I've worked with. The technology integration is seamless and the rules are crystal clear.",
      rating: 5,
    },
    {
      name: "Michael S.",
      role: "Scalper",
      content: "FundedPro gave me the opportunity I needed. From $25K challenge to $100K funded account in 6 months!",
      rating: 5,
    },
  ]

  // Auto-advance carousel with pause on hover/focus
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length, isPaused])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f1419] to-[#2d1b69] scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            What Our <span className="text-brand-cyan">Traders Say</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what successful traders are saying about FundedPro.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {/* Main Testimonial Card */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-12 border border-white/20 shadow-2xl">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <Quote className="w-12 h-12 text-brand-cyan" />
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              <p className="text-lg md:text-xl text-white leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Rating Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Author Info */}
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-white">{testimonials[currentIndex].name}</h4>
                <p className="text-brand-cyan font-medium">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            className="hidden sm:block absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-2.5 sm:p-3 md:p-4 border border-white/20 transition-all duration-300 hover:scale-110 focus-visible:ring-2 focus-visible:ring-white/40 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="hidden sm:block absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-2.5 sm:p-3 md:p-4 border border-white/20 transition-all duration-300 hover:scale-110 focus-visible:ring-2 focus-visible:ring-white/40 z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-brand-cyan scale-125" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Preview */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">"{testimonial.content}"</p>
              <div className="text-sm">
                <div className="text-white font-semibold">{testimonial.name}</div>
                <div className="text-brand-cyan">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Ready to join thousands of successful traders?</p>
          <button className="bg-gradient-to-r from-brand-cyan to-blue-500 hover:from-brand-cyan/90 hover:to-blue-500/90 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-brand-cyan/30">
            Start Your Challenge Today
          </button>
        </div>
      </div>
    </section>
  )
}
