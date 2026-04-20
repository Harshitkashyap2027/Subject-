export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'What is lvlBase and who is it for?',
    answer: 'lvlBase is an all-in-one organizational platform built for schools, hospitals, corporations, and government agencies. It unifies operations, communication, and analytics into a single intelligent platform powered by AI.',
    category: 'General',
  },
  {
    id: '2',
    question: 'How does the AI assistant work?',
    answer: 'Our AI assistant is trained on your organization\'s data (with full privacy controls) and can answer questions, generate reports, suggest optimizations, and automate repetitive tasks. It uses natural language, so no technical expertise is required.',
    category: 'Features',
  },
  {
    id: '3',
    question: 'Can I migrate data from my existing tools?',
    answer: 'Yes. We offer one-click migration from Google Workspace, Microsoft 365, Salesforce, and many other platforms. Our migration team also provides dedicated support for enterprise customers with complex data needs.',
    category: 'Migration',
  },
  {
    id: '4',
    question: 'Is my data secure on lvlBase?',
    answer: 'Absolutely. lvlBase uses AES-256 encryption at rest and TLS 1.3 in transit. We are SOC 2 Type II certified, GDPR compliant, and HIPAA-ready for healthcare customers. Your data is never sold or shared with third parties.',
    category: 'Security',
  },
  {
    id: '5',
    question: 'What is the Guild System?',
    answer: 'The Guild System allows you to create dynamic groups based on skills, projects, or interests. Members earn reputation, complete missions, and collaborate across organizational boundaries. It gamifies productivity and builds culture.',
    category: 'Features',
  },
  {
    id: '6',
    question: 'Can I customize lvlBase for my specific industry?',
    answer: 'Yes. lvlBase comes with industry-specific modules pre-configured for Education, Healthcare, Corporate, and Government. Each module can be further customized with our visual configuration tool, or via our API for advanced needs.',
    category: 'Customization',
  },
  {
    id: '7',
    question: 'What does the free plan include?',
    answer: 'The free plan supports up to 25 members, 3 core modules, basic analytics, and 5 GB of storage. It\'s designed for small teams or those who want to try lvlBase before committing to a paid plan.',
    category: 'Pricing',
  },
  {
    id: '8',
    question: 'How long does onboarding take?',
    answer: 'Most organizations are fully onboarded within 2-5 business days. We provide guided setup wizards, video tutorials, and live onboarding sessions. Enterprise customers receive a dedicated Customer Success Manager.',
    category: 'Onboarding',
  },
]
