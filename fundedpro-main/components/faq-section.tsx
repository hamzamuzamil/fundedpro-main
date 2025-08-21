"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What is FundedPro?",
      answer:
        "FundedPro is a proprietary trading firm that provides funding to talented traders worldwide. We offer challenge-based evaluation accounts with extended periods and industry-leading profit splits to help traders access capital and grow their trading careers.",
    },
    {
      question: "How long is the evaluation period?",
      answer:
        "Our challenge accounts offer a 100-day evaluation period - that's 3x longer than most competitors who only provide 30-60 days.",
    },
    {
      question: "What profit splits do you offer?",
      answer:
        "We offer industry-leading profit splits of 70-80% for traders, which is 15% higher than most competitors who typically offer 50-70%.",
    },
    {
      question: "What are the account sizes available?",
      answer:
        "We offer three account tiers: $10,000 (Starter), $25,000 (Professional), and $50,000 (Expert) to suit different experience levels and trading styles.",
    },
    {
      question: "What happens if I fail the challenge?",
      answer:
        "Don't worry! Our $10K challenge comes with a free 50% retry option. Plus, with our extended 100-day period and 10% drawdown allowance, you have much better chances of success.",
    },
    {
      question: "How do withdrawals work?",
      answer:
        "Challenge account holders receive full fee refunds upon success, then move to funded status with regular withdrawal schedules.",
    },
    {
      question: "What trading platforms do you support?",
      answer:
        "We support MT4/MT5, TradingView, and cTrader through our API integrations, giving you the flexibility to trade on your preferred platform.",
    },
    {
      question: "What are the drawdown rules?",
      answer:
        "We use a standardized 10% maximum drawdown across all accounts, making our rules more predictable than competitors who vary their requirements.",
    },
    {
      question: "How does account scaling work?",
      answer:
        "Challenge accounts can scale based on performance with faster scaling available for higher tier accounts.",
    },
    {
      question: "What makes FundedPro different from other prop firms?",
      answer:
        "We offer 67% longer evaluation periods, up to 50% lower fees, higher profit splits, and focus on empowering traders globally with transparent, fair rules.",
    },
    {
      question: "Is there any real financial risk during the challenge?",
      answer:
        "No, challenge phases use simulated capital with full automation. There's no real financial risk until you're verified and move to a live funded account.",
    },
    {
      question: "What security measures do you have?",
      answer:
        "We use AI-powered monitoring, biometric ID verification for payouts, encrypted transactions, and anti-cheat detection to ensure a secure trading environment.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a237e] to-[#0f1419] scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Frequently Asked <span className="text-brand-cyan">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Get answers to the most common questions about FundedPro and our trading challenges.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 focus-within:ring-1 focus-within:ring-brand-cyan/40"
              >
                <AccordionTrigger className="px-4 sm:px-6 py-4 text-left text-white hover:text-brand-cyan transition-colors duration-300 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/40 rounded-lg">
                  <span className="font-semibold text-base sm:text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-4 text-gray-300 leading-relaxed text-sm sm:text-base">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">Still have questions? We're here to help!</p>
          <button className="bg-gradient-to-r from-brand-cyan to-blue-500 hover:from-brand-cyan/90 hover:to-blue-500/90 text-black font-semibold px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-brand-cyan/30 focus-visible:ring-2 focus-visible:ring-brand-cyan/40">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}
