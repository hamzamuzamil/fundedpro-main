"use client"

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Plans", href: "#plans" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
    { name: "Terms", href: "#terms" },
    { name: "Privacy", href: "#privacy" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-[#0f1419] to-[#000000] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3 sm:mb-4">
                Funded<span className="text-brand-cyan">Pro</span>
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-xl">
                Empowering promising traders worldwide with extended evaluation periods, industry-leading profit splits,
                and cutting-edge technology. Building the future of funded trading.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-brand-cyan" />
                <span>support@thefundedpro.com</span>
              </div>
              {/* Phone and address removed as requested */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-5 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-brand-cyan transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/40 rounded"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-5 sm:mb-6">Connect With Us</h4>
            <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-brand-cyan/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group focus-visible:ring-2 focus-visible:ring-brand-cyan/40"
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-brand-cyan" />
                  </a>
                )
              })}
            </div>

            {/* Newsletter Signup */}
            <div>
              <h5 className="text-base sm:text-lg font-semibold text-white mb-3">Stay Updated</h5>
              <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/30 transition-colors duration-300"
                />
                <button className="bg-brand-cyan hover:bg-brand-cyan/90 text-black font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-brand-cyan/40 w-full">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm">© 2025 FundedPro. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#terms" className="text-gray-400 hover:text-brand-cyan transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-cyan/40 rounded">
                Terms of Service
              </a>
              <a href="#privacy" className="text-gray-400 hover:text-brand-cyan transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-cyan/40 rounded">
                Privacy Policy
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-brand-cyan transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-cyan/40 rounded">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-gold to-brand-cyan"></div>
    </footer>
  )
}
