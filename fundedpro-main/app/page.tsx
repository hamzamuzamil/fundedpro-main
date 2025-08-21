import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { KeyHighlightsSection } from "@/components/key-highlights-section"
import { DualTrackPlansSection } from "@/components/dual-track-plans-section"
import { ScrollAnimations } from "@/components/scroll-animations"

const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((m) => ({ default: m.TestimonialsSection })),
  { ssr: true }
)
const AboutSection = dynamic(
  () => import("@/components/about-section").then((m) => ({ default: m.AboutSection })),
  { ssr: true }
)
const FAQSection = dynamic(
  () => import("@/components/faq-section").then((m) => ({ default: m.FAQSection })),
  { ssr: true }
)
const Footer = dynamic(
  () => import("@/components/footer").then((m) => ({ default: m.Footer })),
  { ssr: true }
)

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navigation />

      <section id="home">
        <HeroSection />
      </section>

      <section id="highlights">
        <KeyHighlightsSection />
      </section>

      <section id="plans">
        <DualTrackPlansSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="faq">
        <FAQSection />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </main>
  )
}
