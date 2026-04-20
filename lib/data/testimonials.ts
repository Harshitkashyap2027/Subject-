export interface Testimonial {
  id: string
  name: string
  role: string
  organization: string
  avatar: string
  quote: string
  industry: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    role: 'Principal',
    organization: 'Westside Academy',
    avatar: 'SC',
    quote: 'lvlBase transformed how we manage 1,200 students. The AI assistant saves our teachers 5 hours per week on administrative tasks alone.',
    industry: 'Education',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    role: 'CTO',
    organization: 'TechFlow Corp',
    avatar: 'MJ',
    quote: 'We replaced 6 different SaaS tools with lvlBase. The integration and automation features are unmatched. Our team adoption was 98% in the first month.',
    industry: 'Corporate',
    rating: 5,
  },
  {
    id: '3',
    name: 'Dr. Amina Osei',
    role: 'Hospital Administrator',
    organization: 'City Medical Center',
    avatar: 'AO',
    quote: 'Patient wait times dropped 40% after deploying lvlBase. The appointment management and staff coordination modules are exceptional.',
    industry: 'Healthcare',
    rating: 5,
  },
  {
    id: '4',
    name: 'James Whitfield',
    role: 'HR Director',
    organization: 'Meridian Group',
    avatar: 'JW',
    quote: 'The Skill DNA system gave us visibility into our team\'s competencies we never had before. We now make better hiring and promotion decisions.',
    industry: 'Corporate',
    rating: 5,
  },
  {
    id: '5',
    name: 'Prof. Elena Vasquez',
    role: 'Dean of Digital Learning',
    organization: 'Northern University',
    avatar: 'EV',
    quote: 'The Guild System created a collaborative culture across our 8 departments. Students are more engaged and faculty collaboration is at an all-time high.',
    industry: 'Education',
    rating: 5,
  },
]
