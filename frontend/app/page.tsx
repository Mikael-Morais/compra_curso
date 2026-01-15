import { HeroSection } from "@/components/hero-section"
import { PresentationSection } from "@/components/presentation-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ScoresSection } from "@/components/score-section"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ScoresSection />
      <PresentationSection />
      <BenefitsSection />
      <PricingSection />
      <CTASection />
    </main>
  )
}
