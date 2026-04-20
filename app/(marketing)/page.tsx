import HeroSection from '@/components/sections/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import IndustryCards from '@/components/sections/IndustryCards'
import FeaturesGrid from '@/components/sections/FeaturesGrid'
import HowItWorks from '@/components/sections/HowItWorks'
import AIPowerSection from '@/components/sections/AIPowerSection'
import UniqueFeaturesSection from '@/components/sections/UniqueFeaturesSection'
import ProductShowcase from '@/components/sections/ProductShowcase'
import PricingSection from '@/components/sections/PricingSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
import FinalCTA from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <IndustryCards />
      <FeaturesGrid />
      <HowItWorks />
      <AIPowerSection />
      <UniqueFeaturesSection />
      <ProductShowcase />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </>
  )
}
