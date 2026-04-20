import SectionWrapper from '@/components/shared/SectionWrapper'

const team = [
  { name: 'Alex Chen', role: 'CEO & Co-Founder', avatar: 'AC', bio: 'Former Google PM. Built and sold two B2B SaaS companies. Passionate about organizational efficiency.' },
  { name: 'Priya Sharma', role: 'CTO & Co-Founder', avatar: 'PS', bio: 'Ex-Meta engineer. Led infrastructure teams of 50+. Architect of lvlBase\'s core platform.' },
  { name: 'James Wilson', role: 'Chief Product Officer', avatar: 'JW', bio: 'Former Salesforce VP Product. 15 years building enterprise software used by Fortune 500s.' },
  { name: 'Maria Santos', role: 'VP of Engineering', avatar: 'MS', bio: 'MIT CS graduate. Previously at Stripe and Notion. Leads our 40-person engineering org.' },
  { name: 'David Kim', role: 'Chief Security Officer', avatar: 'DK', bio: 'Former NSA cryptographer. Ensures lvlBase maintains the highest security standards.' },
  { name: 'Aisha Okafor', role: 'VP of Customer Success', avatar: 'AO', bio: '10 years in enterprise SaaS. Helped 500+ organizations achieve successful digital transformation.' },
]

const values = [
  { icon: '🎯', title: 'Customer Obsession', desc: 'Every decision starts with the question: "Does this make our customers\' lives better?"' },
  { icon: '🔒', title: 'Trust & Transparency', desc: 'We\'re honest about our limitations, open about our roadmap, and always protect your data.' },
  { icon: '🚀', title: 'Move Fast, Build Right', desc: 'We ship quickly but never at the expense of reliability. Speed with purpose.' },
  { icon: '🌍', title: 'Inclusive by Design', desc: 'lvlBase is built for organizations everywhere — in every industry, country, and language.' },
]

export default function AboutPage() {
  return (
    <div>
      <section className="py-24 px-4 mesh-bg">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-4">Our Story</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white mb-6">
            We Believe Every Organization
            <br />
            <span className="gradient-text">Deserves Great Software</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            lvlBase was born out of frustration. Our founders spent years watching incredible organizations — schools, hospitals, companies — struggle with fragmented, expensive, and outdated software. In 2022, we decided to fix that.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-2xl font-bold text-white mb-6 font-poppins">Our Mission</h2>
          <p className="text-slate-400 leading-relaxed text-lg">
            To build the operating system for organizations — a platform so intuitive and powerful that every school, hospital, company, and agency in the world can operate at peak efficiency, regardless of their size or budget.
          </p>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 font-poppins">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all">
                <span className="text-3xl block mb-3">{value.icon}</span>
                <h3 className="text-white font-bold mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 font-poppins">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-violet-500/30 transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-white font-bold">{member.name}</h3>
                <p className="text-violet-400 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
