export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
  badge?: string
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for small teams getting started with digital organization.',
    features: [
      'Up to 25 members',
      '3 modules included',
      'Basic analytics',
      'Email support',
      '5 GB storage',
      'Community access',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: 'per month',
    description: 'Ideal for growing organizations that need more power and flexibility.',
    features: [
      'Up to 500 members',
      'All modules included',
      'Advanced analytics & AI',
      'Priority support',
      '100 GB storage',
      'Custom integrations',
      'Guild system',
      'Skill DNA profiles',
      'Workflow automation',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large enterprises that need custom solutions, SLAs, and dedicated support.',
    features: [
      'Unlimited members',
      'Custom modules',
      'White-label option',
      'Dedicated account manager',
      'Unlimited storage',
      'SSO & advanced security',
      'Custom contracts & SLA',
      'On-premises option',
      'API rate limit increase',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]
