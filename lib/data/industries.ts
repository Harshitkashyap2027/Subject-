export interface Industry {
  slug: string
  title: string
  description: string
  icon: string
  color: string
  features: string[]
  roles: string[]
  stats: { label: string; value: string }[]
}

export const industries: Industry[] = [
  {
    slug: 'education',
    title: 'Education',
    description: 'Transform learning with AI-powered tools for schools, universities, and online academies.',
    icon: '🎓',
    color: 'from-violet-600 to-purple-800',
    features: [
      'AI-powered lesson planning',
      'Automated grade tracking',
      'Student performance analytics',
      'Parent communication portal',
      'Attendance management',
      'Assignment submission system',
    ],
    roles: ['Students', 'Teachers', 'Administrators', 'Parents', 'Counselors'],
    stats: [
      { label: 'Schools', value: '200+' },
      { label: 'Students', value: '50K+' },
      { label: 'Avg Grade Improvement', value: '23%' },
    ],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    description: 'Streamline patient care, appointments, and medical records with intelligent automation.',
    icon: '🏥',
    color: 'from-cyan-600 to-blue-800',
    features: [
      'Patient record management',
      'Appointment scheduling',
      'Prescription tracking',
      'Staff shift management',
      'Medical inventory control',
      'Telemedicine integration',
    ],
    roles: ['Patients', 'Doctors', 'Nurses', 'Administrators', 'Pharmacists'],
    stats: [
      { label: 'Hospitals', value: '80+' },
      { label: 'Patients Served', value: '200K+' },
      { label: 'Wait Time Reduction', value: '40%' },
    ],
  },
  {
    slug: 'corporate',
    title: 'Corporate',
    description: 'Unify HR, project management, and internal operations for modern enterprises.',
    icon: '🏢',
    color: 'from-blue-600 to-indigo-800',
    features: [
      'Employee onboarding',
      'Project & task management',
      'Performance reviews',
      'Leave management',
      'Payroll integration',
      'Training & development',
    ],
    roles: ['Employees', 'Managers', 'HR Teams', 'Executives', 'IT Admins'],
    stats: [
      { label: 'Companies', value: '150+' },
      { label: 'Employees Managed', value: '100K+' },
      { label: 'Productivity Increase', value: '35%' },
    ],
  },
  {
    slug: 'government',
    title: 'Government',
    description: 'Modernize public sector operations with secure, scalable digital infrastructure.',
    icon: '🏛️',
    color: 'from-emerald-600 to-teal-800',
    features: [
      'Citizen service portal',
      'Document management',
      'Regulatory compliance',
      'Inter-department coordination',
      'Budget tracking',
      'Audit trails',
    ],
    roles: ['Citizens', 'Officers', 'Department Heads', 'Auditors', 'IT Staff'],
    stats: [
      { label: 'Agencies', value: '30+' },
      { label: 'Citizens Served', value: '500K+' },
      { label: 'Processing Speed', value: '60% faster' },
    ],
  },
]
