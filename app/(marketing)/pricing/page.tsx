import Link from 'next/link'
import { Check } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import { pricingPlans } from '@/lib/data/pricing'
import PricingCard from '@/components/cards/PricingCard'

const comparisonFeatures = [
  { name: 'Members', free: '25', pro: '500', enterprise: 'Unlimited' },
  { name: 'Modules', free: '3', pro: 'All', enterprise: 'Custom' },
  { name: 'AI Assistant', free: '❌', pro: '✅', enterprise: '✅' },
  { name: 'Guild System', free: '❌', pro: '✅', enterprise: '✅' },
  { name: 'Skill DNA', free: '❌', pro: '✅', enterprise: '✅' },
  { name: 'Analytics', free: 'Basic', pro: 'Advanced', enterprise: 'Enterprise' },
  { name: 'Storage', free: '5 GB', pro: '100 GB', enterprise: 'Unlimited' },
  { name: 'Integrations', free: '3', pro: '50+', enterprise: 'Custom' },
  { name: 'Support', free: 'Email', pro: 'Priority', enterprise: 'Dedicated' },
  { name: 'SSO', free: '❌', pro: '❌', enterprise: '✅' },
  { name: 'White Label', free: '❌', pro: '❌', enterprise: '✅' },
  { name: 'SLA', free: '❌', pro: '99.9%', enterprise: 'Custom' },
]

export default function PricingPage() {
  return (
    <div>
      <section className="py-24 px-4 mesh-bg text-center">
        <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-4">Pricing</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white mb-6">
          Transparent,{' '}
          <span className="gradient-text">Simple Pricing</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Start free and scale as you grow. All plans include a 14-day trial. No surprises.
        </p>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Comparison table */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 font-poppins text-center">Full Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 pr-8 text-slate-400 font-medium">Feature</th>
                  {pricingPlans.map((plan) => (
                    <th key={plan.name} className="py-4 px-4 text-center font-bold text-white">{plan.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feat, i) => (
                  <tr key={feat.name} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                    <td className="py-3 pr-8 text-slate-400">{feat.name}</td>
                    <td className="py-3 px-4 text-center text-slate-300">{feat.free}</td>
                    <td className="py-3 px-4 text-center text-slate-300">{feat.pro}</td>
                    <td className="py-3 px-4 text-center text-slate-300">{feat.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
