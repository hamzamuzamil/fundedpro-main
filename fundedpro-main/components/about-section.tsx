"use client"

import { Users, TrendingUp, DollarSign, Clock } from "lucide-react"

export function AboutSection() {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Challenge Participants",
      color: "text-brand-cyan",
    },
    {
      icon: TrendingUp,
      value: "750+",
      label: "Funded Traders",
      color: "text-brand-gold",
    },
    {
      icon: DollarSign,
      value: "$770K+",
      label: "Annual Projected Profits",
      color: "text-brand-cyan",
    },
    {
      icon: Clock,
      value: "67%",
      label: "Longer Evaluation Period",
      color: "text-brand-gold",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#2d1b69] to-[#1a237e] scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-8">
            About <span className="text-brand-cyan">FundedPro</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* About Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                Founded by <span className="text-brand-cyan font-semibold">Destiny Isibor</span>, FundedPro is dedicated
                to redefining proprietary trading by providing flexible, trader-friendly funding models.
              </p>
              <br />
              <p className="text-lg text-gray-300 leading-relaxed">
                Our mission is to empower talented traders worldwide with the capital and tools they need to succeed.
                With extended evaluation periods, industry-leading profit splits, and cutting-edge technology, we're
                building the future of funded trading.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-brand-cyan/20 to-brand-gold/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-brand-cyan/30 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To democratize access to trading capital and create opportunities for skilled traders to build
                sustainable, profitable careers in financial markets.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 text-center group shadow-lg min-h-[160px]"
                >
                  <div className="mb-4">
                    <IconComponent
                      className={`w-7 h-7 sm:w-8 sm:h-8 ${stat.color} mx-auto group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white text-center mb-10 sm:mb-12">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-brand-cyan" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Trader-First</h4>
              <p className="text-gray-300 text-sm sm:text-base">
                Every decision we make prioritizes the success and satisfaction of our trading community.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-brand-gold" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Innovation</h4>
              <p className="text-gray-300 text-sm sm:text-base">
                We continuously evolve our platform and policies to stay ahead of industry standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-brand-cyan" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Transparency</h4>
              <p className="text-gray-300 text-sm sm:text-base">
                Clear rules, honest communication, and fair evaluation processes define our approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
