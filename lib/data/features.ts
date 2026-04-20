export interface Feature {
  slug: string
  title: string
  description: string
  icon: string
  category: string
  details: string[]
  badge?: string
}

export const features: Feature[] = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    description: 'Context-aware AI that helps every role in your organization work smarter and faster.',
    icon: '🤖',
    category: 'Intelligence',
    badge: 'NEW',
    details: [
      'Natural language queries across all data',
      'Automated report generation',
      'Predictive analytics and forecasting',
      'Smart task suggestions',
      'Meeting summaries and action items',
    ],
  },
  {
    slug: 'analytics',
    title: 'Advanced Analytics',
    description: 'Real-time dashboards and insights that surface what matters most to your organization.',
    icon: '📊',
    category: 'Data',
    details: [
      'Customizable dashboards',
      'Real-time data streaming',
      'Cross-department reporting',
      'Export to PDF, Excel, CSV',
      'Scheduled report delivery',
    ],
  },
  {
    slug: 'security',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, role-based access, and compliance tools built in from day one.',
    icon: '🔒',
    category: 'Security',
    details: [
      'End-to-end encryption',
      'Role-based access control',
      'Two-factor authentication',
      'Audit logs & compliance',
      'SOC 2 Type II certified',
    ],
  },
  {
    slug: 'automation',
    title: 'Workflow Automation',
    description: 'Build powerful automations without code to eliminate repetitive tasks across your org.',
    icon: '⚡',
    category: 'Productivity',
    details: [
      'Visual workflow builder',
      'Trigger-based automations',
      'Cross-platform integrations',
      'Approval workflows',
      'Automated notifications',
    ],
  },
  {
    slug: 'guild-system',
    title: 'Guild System',
    description: 'Organize people into dynamic groups that foster collaboration and knowledge sharing.',
    icon: '⚔️',
    category: 'Community',
    details: [
      'Skill-based team formation',
      'Guild leaderboards',
      'Cross-org collaboration',
      'Guild challenges and missions',
      'Reputation scoring',
    ],
  },
  {
    slug: 'skill-dna',
    title: 'Skill DNA',
    description: 'Map every member\'s competencies and track growth with a dynamic skill profile.',
    icon: '🧬',
    category: 'People',
    details: [
      'Skill assessment engine',
      'Growth tracking over time',
      'Personalized learning paths',
      'Skill gap analysis',
      'Endorsements and validation',
    ],
  },
]
