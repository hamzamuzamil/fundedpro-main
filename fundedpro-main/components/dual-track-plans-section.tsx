"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Clock, Shield, RefreshCw, Info } from "lucide-react"

export function DualTrackPlansSection() {
  type ChallengeAccount = "10k" | "25k" | "50k"
  const [activeTrack, setActiveTrack] = useState("challenge")
  const [activeChallengeAccount, setActiveChallengeAccount] = useState<ChallengeAccount>("10k")
  const [activeMobilePlanIndex, setActiveMobilePlanIndex] = useState(0)

  const challengePlans: Record<ChallengeAccount, {
    title: string
    price: string
    subtitle: string
    details: {
      "Account Size": string
      Duration: string
      "Profit Target": string
      "Max Drawdown": string
      "Payout Split": string
      "Key Perks": string
    }
  }> = {
    "10k": {
      title: "Starter Challenge",
      price: "$49",
      subtitle: "One-time Challenge Fee",
      details: {
        "Account Size": "$10,000",
        Duration: "100 days",
        "Profit Target": "10%",
        "Max Drawdown": "10%",
        "Payout Split": "70/30",
        "Key Perks": "Free 50% retry",
      },
    },
    "25k": {
      title: "Professional Challenge",
      price: "$99",
      subtitle: "One-time Challenge Fee",
      details: {
        "Account Size": "$25,000",
        Duration: "100 days",
        "Profit Target": "10%",
        "Max Drawdown": "10%",
        "Payout Split": "75/25",
        "Key Perks": "25% faster scaling",
      },
    },
    "50k": {
      title: "Expert Challenge",
      price: "$149",
      subtitle: "One-time Challenge Fee",
      details: {
        "Account Size": "$50,000",
        Duration: "100 days",
        "Profit Target": "10%",
        "Max Drawdown": "10%",
        "Payout Split": "80/20",
        "Key Perks": "Brokerage discounts",
      },
    },
  }

  const challengeHighlights = [
    { icon: Clock, text: "3× longer evaluation period than most firms" },
    { icon: Shield, text: "Double the risk allowance" },
    { icon: RefreshCw, text: "Full fee refund upon challenge success" },
  ]

  const liveComparisonPlans = [
    { label: "$6,000", price: "$59" },
    { label: "$15,000", price: "$119" },
    { label: "$25,000", price: "$199" },
    { label: "$50,000", price: "$299" },
    { label: "$100,000", price: "$549" },
    { label: "$200,000", price: "$1099" },
  ] as const

  const liveComparisonRows: { label: string; values: string[] }[] = [
    { label: "15% Performance Reward", values: ["$117", "$292.50", "$487.50", "$975", "$1,950", "$3,900"] },
    { label: "Phase 1 Profit Target", values: ["8%", "8%", "8%", "8%", "8%", "8%"] },
    { label: "Phase 2 Profit Target", values: ["5%", "5%", "5%", "5%", "5%", "5%"] },
    { label: "Maximum Overall Loss", values: ["10% ($600)", "10% ($1,500)", "10% ($2,500)", "10% ($5,000)", "10% ($10,000)", "10% ($20,000)"] },
    { label: "Maximum Daily Loss", values: ["5% ($300)", "5% ($750)", "5% ($1,250)", "5% ($2,500)", "5% ($5,000)", "5% ($10,000)"] },
    { label: "News Trading", values: ["✔", "✔", "✔", "✔", "✔", "✔"] },
    { label: "Performance Reward Upto", values: ["95%", "95%", "95%", "95%", "95%", "95%"] },
    { label: "Minimum Trading Days", values: ["5 Days", "5 Days", "5 Days", "5 Days", "5 Days", "5 Days"] },
    { label: "First withdrawal", values: ["21 Days", "21 Days", "21 Days", "21 Days", "21 Days", "21 Days"] },
    { label: "Refundable Fee", values: ["$59", "$119", "$199", "$299", "$549", "$1099"] },
  ]

  const buildDetailsForPlan = (planIndex: number) =>
    liveComparisonRows.map((row) => ({ label: row.label, value: row.values[planIndex] }))

  return (
    <section id="plans" className="py-20 bg-brand-gradient relative overflow-hidden scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Choose Your <span className="text-brand-cyan">Trading Track</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Two flexible funding models designed for different trader profiles and experience levels
          </p>
        </div>

        {/* Track Selector */}
        <div className="track-selector">
          {/* <button
            className={`track-btn ${activeTrack === "challenge" ? "active" : ""}`}
            onClick={() => setActiveTrack("challenge")}
          >
            Challenge Track
          </button> */}
          <button
            className={`track-btn ${activeTrack === "live" ? "active" : ""}`}
            onClick={() => setActiveTrack("live")}
          >
            Stellar lite
          </button>
        </div>

        {/* Challenge Track */}
        {/* <div className={`track-section ${activeTrack === "challenge" ? "active" : ""}`}>
          <div className="track-header">
            <h2>Challenge-Based Evaluation Track</h2>
            <p>For Developing Traders</p>
           </div> */}

          {/* Account Size Selector */}
          {/* <div className="account-selector-tabs">
            <button
              className={`account-tab ${activeChallengeAccount === "10k" ? "active" : ""}`}
              onClick={() => setActiveChallengeAccount("10k")}
            >
              $10,000
            </button>
            <button
              className={`account-tab ${activeChallengeAccount === "25k" ? "active" : ""}`}
              onClick={() => setActiveChallengeAccount("25k")}
            >
              $25,000
            </button>
            <button
              className={`account-tab ${activeChallengeAccount === "50k" ? "active" : ""}`}
              onClick={() => setActiveChallengeAccount("50k")}
            >
              $50,000
            </button>
          </div> */}

          {/* Plan Table */}
          {/* <div className="plan-table-container">
            <div className="plan-table active">
              <div className="plan-header">
                <div className="plan-title">{challengePlans[activeChallengeAccount].title}</div>
                <div className="plan-price">{challengePlans[activeChallengeAccount].price}</div>
                <div className="plan-subtitle">{challengePlans[activeChallengeAccount].subtitle}</div>
              </div>

              <div className="plan-details-grid">
                {(Object.entries(challengePlans[activeChallengeAccount].details) as [string, string][]).map(([label, value]) => (
                  <div key={label} className="detail-item">
                    <span className="label">{label}</span>
                    <span className={`value ${label === "Payout Split" ? "highlight" : ""}`}>{value}</span>
                  </div>
                ))}
              </div>

              <div className="plan-highlights">
                {challengeHighlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <highlight.icon className="w-5 h-5 text-brand-cyan" />
                    <span>{highlight.text}</span>
                  </div>
                ))}
              </div>

              <Button className="choose-plan-btn">Choose Plan</Button>
            </div>
          </div>
        </div>  */}

        {/* Funded Account Track */}
        <div className="track-section active">
          <div className="track-header">
            <h2>Funded Account Track</h2>
            <p>For Verified Professionals</p>
          </div>

          {/* Mobile Cards (only on phones) */}
          <div className="block md:hidden">
            {/* Account size selector chips */}
            <div className="flex gap-3 overflow-x-auto pb-4">
              {liveComparisonPlans.map((plan, idx) => {
                const isActive = idx === activeMobilePlanIndex
                return (
                  <button
                    key={plan.label}
                    onClick={() => setActiveMobilePlanIndex(idx)}
                    className={`shrink-0 w-16 h-16 rounded-full border text-xs font-semibold flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-white text-black border-white"
                        : "text-white border-white/30 bg-transparent"
                    }`}
                    aria-label={`Select ${plan.label} plan`}
                  >
                    {plan.label.replace(",", "")}
                  </button>
                )
              })}
            </div>

            {/* Selected plan card */}
            {(() => {
              const selectedPlan = liveComparisonPlans[activeMobilePlanIndex]
              const selectedDetails = buildDetailsForPlan(activeMobilePlanIndex)
              return (
                <div className="mt-2 bg-[rgba(255,255,255,0.06)] backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
                  <div className="p-5">
                    <div className="text-center">
                      <div className="text-sm text-gray-300 mb-1">Account Size</div>
                      <div className="text-3xl font-bold text-white mb-4">{selectedPlan.label}</div>
                      <div className="flex flex-col items-center gap-2">
                        <Button 
                          onClick={() => window.open(`#${selectedPlan.label.replace(/[^0-9]/g, '')}-plan`, '_self')}
                          className="w-full bg-brand-cyan hover:bg-brand-cyan/90 text-black font-semibold py-5 rounded-2xl leading-tight flex flex-col items-center justify-center gap-0 shadow-md hover:shadow-brand-cyan/40 focus-visible:ring-2 focus-visible:ring-brand-cyan/40 min-h-[70px] text-center cursor-pointer">
                          <div className="text-center w-full">
                            <span className="text-base sm:text-lg font-bold block">Get Plan</span>
                            <span className="text-sm font-normal text-black/80 block">{selectedPlan.price}</span>
                          </div>
                        </Button>
                      </div>
                    </div>

                    <div className="mt-6 divide-y divide-white/10">
                      {selectedDetails.map((item) => (
                        <div key={item.label} className="flex items-center justify-between py-3">
                          <div className="flex items-center gap-2 text-gray-200 font-medium">
                            <Info className="w-4 h-4 text-brand-cyan" />
                            <span className="text-sm">{item.label}</span>
                          </div>
                          <div className="text-white font-semibold text-sm">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>

          {/* Modern Pricing Comparison Table (desktop/tablet) */}
          <div className="hidden md:block overflow-x-auto">
            <div className="min-w-[1000px] sm:min-w-[1100px] md:min-w-[1200px] rounded-2xl overflow-hidden border border-white/10 bg-[rgba(255,255,255,0.05)] backdrop-blur-md shadow-2xl">
              {/* Header Row */}
              <div className="grid grid-cols-7">
{/*                 <div className="p-4 text-xs sm:text-sm md:text-base font-semibold text-gray-300 sticky left-0 bg-white/5 backdrop-blur-md"> */}
                                  <div className="p-4 text-xs sm:text-sm md:text-base font-semibold text-gray-300 sticky left-0 bg-[rgba(30,41,59,0.85)] backdrop-blur-md">

                  Account Size</div>
                {liveComparisonPlans.map((plan) => (
                  <div key={plan.label} className="p-5 md:p-6 text-center text-white bg-gradient-to-br from-brand-cyan/20 to-[#1a237e]/60">
                    <div className="text-base sm:text-lg font-bold whitespace-nowrap">{plan.label}</div>
                    <div className="mt-3 md:mt-4 flex flex-col items-center gap-2">
                      <Button 
                        onClick={() => window.open(`#${plan.label.replace(/[^0-9]/g, '')}-plan`, '_self')}
                        className="bg-brand-cyan hover:bg-brand-cyan/90 text-black font-semibold px-7 md:px-8 lg:px-9 py-3.5 md:py-4 rounded-2xl shadow-md hover:shadow-brand-cyan/40 focus-visible:ring-2 focus-visible:ring-brand-cyan/40 transition-all leading-tight flex flex-col items-center justify-center gap-0 min-h-[60px] w-full cursor-pointer text-center">
                        <div className="text-center w-full">
                          <span className="text-sm sm:text-base md:text-lg font-bold block">Get Plan</span>
                          <span className="text-[11px] sm:text-xs md:text-sm font-normal text-black/80 block">{plan.price}</span>
                        </div>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Data Rows */}
              {liveComparisonRows.map((row, idx) => (
                <div key={row.label} className={`grid grid-cols-7 ${idx === 0 ? "" : "border-t border-white/10"}`}>
{/*                   <div className="p-4 text-xs sm:text-sm md:text-base font-medium text-gray-200 bg-[rgba(255,255,255,0.08)] backdrop-blur-md sticky left-0 z-10 text-left"> */}
                                    <div className="p-4 text-xs sm:text-sm md:text-base font-medium text-gray-200 bg-[rgba(30,41,59,0.85)] backdrop-blur-md sticky left-0 z-10 text-left">
  
                  {row.label}
                  </div>
                  {row.values.map((value, i) => (
                    <div key={i} className="p-3 md:p-4 text-center text-white text-xs sm:text-sm md:text-base whitespace-nowrap bg-transparent">
                      {value}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
