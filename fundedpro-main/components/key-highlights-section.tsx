"use client"

import { Clock, TrendingUp, Tag } from "lucide-react"

export function KeyHighlightsSection() {
  const highlights = [
    {
      icon: Clock,
      title: "Extended Evaluation",
      mainText: "Unlimited Day Challenge Period",
      subText: "3x longer than competitors",
      gradient: "from-brand-cyan/20 to-blue-500/20",
      iconColor: "text-brand-cyan",
    },
    {
      icon: TrendingUp,
      title: "Higher Profits",
      mainText: "70-80% Profit Splits",
      subText: "Keep more of what you earn",
      gradient: "from-brand-gold/20 to-yellow-500/20",
      iconColor: "text-brand-gold",
    },
    {
      icon: Tag,
      title: "Lower Costs",
      mainText: "Up to 50% Lower Fees",
      subText: "More affordable than industry average",
      gradient: "from-brand-cyan/20 to-green-500/20",
      iconColor: "text-brand-cyan",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f1419] to-[#1a237e] scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Why Choose <span className="text-brand-cyan">FundedPro</span>?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We're revolutionizing prop trading with trader-friendly policies and industry-leading benefits
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${highlight.gradient} backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-cyan/20 min-h-[260px]`}
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <IconComponent className={`w-8 h-8 ${highlight.iconColor}`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold font-display text-white mb-4">{highlight.title}</h3>

                  {/* Main Text */}
                  <div className="text-2xl font-bold text-white mb-2">{highlight.mainText}</div>

                  {/* Sub Text */}
                  <p className="text-gray-300 text-sm leading-relaxed">{highlight.subText}</p>

                  {/* Decorative Element */}
                  <div className="mt-6 w-12 h-1 bg-gradient-to-r from-brand-cyan to-brand-gold mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/30 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: `${3 + i}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Ready to experience the FundedPro advantage?</p>
          <button className="bg-gradient-to-r from-brand-cyan to-blue-500 hover:from-brand-cyan/90 hover:to-blue-500/90 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-brand-cyan/30">
            Explore Our Plans
          </button>
        </div>
      </div>
    </section>
  )
}
