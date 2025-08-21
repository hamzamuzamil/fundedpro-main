"use client"

import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export function PlansSection() {
  const plans = [
    {
      name: "Starter",
      accountSize: "$10,000",
      fee: "$49",
      duration: "100 days",
      profitTarget: "10%",
      maxDrawdown: "10%",
      payoutSplit: "70/30",
      keyPerk: "Free 50% retry",
      popular: false,
      gradient: "from-[#1a237e]/80 to-[#2d1b69]/80",
      borderColor: "border-brand-cyan/30",
      hoverBorderColor: "hover:border-brand-cyan",
    },
    {
      name: "Professional",
      accountSize: "$25,000",
      fee: "$99",
      duration: "100 days",
      profitTarget: "10%",
      maxDrawdown: "10%",
      payoutSplit: "75/25",
      keyPerk: "25% faster scaling",
      popular: true,
      gradient: "from-brand-cyan/20 to-[#1a237e]/80",
      borderColor: "border-brand-cyan",
      hoverBorderColor: "hover:border-brand-gold",
    },
    {
      name: "Expert",
      accountSize: "$50,000",
      fee: "$149",
      duration: "100 days",
      profitTarget: "10%",
      maxDrawdown: "10%",
      payoutSplit: "80/20",
      keyPerk: "Brokerage discounts",
      popular: false,
      gradient: "from-brand-gold/20 to-[#1a237e]/80",
      borderColor: "border-brand-gold/30",
      hoverBorderColor: "hover:border-brand-gold",
    },
  ]

  const features = [
    "Extended 100-day evaluation period",
    "Flexible trading rules",
    "Weekly withdrawal schedules",
    "Professional trading tools",
    "24/7 customer support",
    "Risk management training",
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a237e] to-[#0f1419]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Choose Your <span className="text-brand-cyan">Trading Plan</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Start your funded trading journey with our challenge-based evaluation program. All plans include our
            signature 100-day evaluation period.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group bg-gradient-to-br ${plan.gradient} backdrop-blur-md rounded-2xl p-8 border-2 ${plan.borderColor} ${plan.hoverBorderColor} transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-cyan/20 ${
                plan.popular ? "ring-2 ring-brand-cyan/50 scale-105" : ""
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-brand-cyan to-brand-gold text-black px-6 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold font-display text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-brand-cyan mb-1">{plan.fee}</div>
                <div className="text-gray-300 text-sm">One-time challenge fee</div>
              </div>

              {/* Account Size */}
              <div className="text-center mb-8">
                <div className="text-3xl font-bold text-white mb-1">{plan.accountSize}</div>
                <div className="text-gray-300 text-sm">Challenge Account Size</div>
              </div>

              {/* Plan Details */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-300">Duration</span>
                  <span className="text-white font-semibold">{plan.duration}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-300">Profit Target</span>
                  <span className="text-white font-semibold">{plan.profitTarget}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-300">Max Drawdown</span>
                  <span className="text-white font-semibold">{plan.maxDrawdown}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-300">Payout Split</span>
                  <span className="text-brand-gold font-semibold">{plan.payoutSplit}</span>
                </div>
              </div>

              {/* Key Perk */}
              <div className="bg-white/5 rounded-lg p-4 mb-8">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-brand-cyan" />
                  <span className="text-white font-semibold">{plan.keyPerk}</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "bg-brand-cyan hover:bg-brand-cyan/90 text-black"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50"
                }`}
              >
                Choose Plan
              </Button>

              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold font-display text-white text-center mb-8">All Plans Include</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-brand-cyan flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">Need help choosing the right plan? Our team is here to help.</p>
          <Button
            variant="outline"
            className="border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 bg-transparent"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  )
}
