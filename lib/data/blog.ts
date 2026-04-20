export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  authorRole: string
  publishedAt: string
  category: string
  tags: string[]
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'future-of-ai-in-education',
    title: 'The Future of AI in Education: How lvlBase is Changing the Game',
    excerpt: 'Discover how artificial intelligence is revolutionizing how teachers teach, students learn, and administrators manage modern schools.',
    content: `Artificial intelligence is no longer a futuristic concept — it's reshaping education today. At lvlBase, we've built AI directly into every workflow that educators and students encounter daily...`,
    author: 'Dr. Sarah Chen',
    authorRole: 'Head of Education Solutions',
    publishedAt: '2024-05-15',
    category: 'Education',
    tags: ['AI', 'Education', 'Technology'],
    readTime: 7,
  },
  {
    slug: 'guild-system-deep-dive',
    title: 'Guild System Deep Dive: Building Culture with Gamification',
    excerpt: 'A comprehensive look at how the lvlBase Guild System transforms organizational culture through meaningful gamification.',
    content: `Most organizations struggle with culture. It's intangible, hard to measure, and nearly impossible to scale. The lvlBase Guild System changes that equation...`,
    author: 'Marcus Rivera',
    authorRole: 'Product Lead',
    publishedAt: '2024-05-08',
    category: 'Product',
    tags: ['Guilds', 'Culture', 'Gamification'],
    readTime: 9,
  },
  {
    slug: 'healthcare-digital-transformation',
    title: '5 Ways lvlBase Accelerates Healthcare Digital Transformation',
    excerpt: 'From patient records to staff coordination, see how healthcare organizations are modernizing operations with lvlBase.',
    content: `Digital transformation in healthcare isn't optional anymore. Patients expect seamless experiences. Staff need efficient tools. Administrators demand real-time visibility...`,
    author: 'Dr. Amina Osei',
    authorRole: 'Healthcare Solutions Architect',
    publishedAt: '2024-04-29',
    category: 'Healthcare',
    tags: ['Healthcare', 'Digital Transformation', 'EHR'],
    readTime: 6,
  },
  {
    slug: 'skill-dna-workforce-planning',
    title: 'Skill DNA: The New Way to Plan Your Workforce',
    excerpt: 'How mapping skill profiles across your organization unlocks better hiring, promotion, and development decisions.',
    content: `What if you could see the complete skill landscape of your entire organization at a glance? That's exactly what Skill DNA provides...`,
    author: 'James Whitfield',
    authorRole: 'VP of People Products',
    publishedAt: '2024-04-20',
    category: 'Corporate',
    tags: ['Skills', 'HR', 'Workforce Planning'],
    readTime: 8,
  },
  {
    slug: 'enterprise-security-2024',
    title: 'Enterprise Security in 2024: How lvlBase Keeps Your Data Safe',
    excerpt: 'A technical deep-dive into lvlBase\'s security architecture, compliance certifications, and zero-trust infrastructure.',
    content: `Security is never an afterthought at lvlBase. Every architectural decision we make is filtered through a security-first lens...`,
    author: 'Alex Kim',
    authorRole: 'Chief Security Officer',
    publishedAt: '2024-04-10',
    category: 'Security',
    tags: ['Security', 'Compliance', 'Enterprise'],
    readTime: 10,
  },
]
