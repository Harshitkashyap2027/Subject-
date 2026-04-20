import SectionWrapper from '@/components/shared/SectionWrapper'
import AnimatedSection from '@/components/shared/AnimatedSection'
import PricingCard from '@/components/cards/PricingCard'
import { pricingPlans } from '@/lib/data/pricing'

export default function PricingSection() {
  return (
    <SectionWrapper id="pricing">
      <AnimatedSection className="text-center mb-14">
        <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3">Simple Pricing</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins mb-4">
          Plans for Every{' '}
          <span className="gradient-text">Organization</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Start free and scale as you grow. No hidden fees, no surprises. Cancel anytime.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricingPlans.map((plan, i) => (
          <PricingCard key={plan.name} plan={plan} index={i} />
        ))}
      </div>

      <AnimatedSection className="mt-12 text-center">
        <p className="text-slate-400 text-sm">
          All plans include a 14-day free trial. No credit card required.{' '}
          <a href="/pricing" className="text-violet-400 hover:text-violet-300 font-medium">
            Compare all features →
          </a>
        </p>
      </AnimatedSection>
    </SectionWrapper>
  )
}
