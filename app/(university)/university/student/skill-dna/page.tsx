const technicalSkills = [
  { skill: 'Python', level: 85 },
  { skill: 'JavaScript / TypeScript', level: 78 },
  { skill: 'React.js', level: 72 },
  { skill: 'Data Structures', level: 90 },
  { skill: 'Machine Learning', level: 65 },
  { skill: 'SQL & Databases', level: 80 },
  { skill: 'Cloud (AWS/GCP)', level: 50 },
  { skill: 'System Design', level: 55 },
]

const softSkills = [
  { skill: 'Communication', level: 80 },
  { skill: 'Team Collaboration', level: 88 },
  { skill: 'Problem Solving', level: 92 },
  { skill: 'Time Management', level: 70 },
  { skill: 'Leadership', level: 65 },
]

const certifications = [
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', date: 'Aug 2024', badge: 'bg-amber-500/20 text-amber-400' },
  { name: 'Python for Data Science', issuer: 'Coursera / IBM', date: 'Jun 2024', badge: 'bg-blue-500/20 text-blue-400' },
  { name: 'React Developer Certification', issuer: 'Meta', date: 'Mar 2024', badge: 'bg-cyan-500/20 text-cyan-400' },
]

const recommendedRoles = ['Full Stack Developer', 'Data Scientist', 'Cloud Engineer', 'ML Engineer']
const skillGaps = ['System Design', 'Kubernetes', 'GraphQL', 'Advanced Algorithms']

export default function SkillDNAPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-violet-600/20 to-blue-600/20 border border-violet-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-violet-500/20 text-violet-300 border border-violet-500/30 mb-3">
          AI-Powered
        </span>
        <h1 className="text-3xl font-bold text-white">Skill DNA</h1>
        <p className="text-slate-400 mt-1">Your personalised skill profile and AI-driven career insights.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Technical Skills */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-5">⚙️ Technical Skills</h2>
          <div className="space-y-4">
            {technicalSkills.map((s) => (
              <div key={s.skill}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">{s.skill}</span>
                  <span className="text-violet-400 font-medium">{s.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-600 to-blue-600"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills + Certs */}
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold text-lg mb-5">🤝 Soft Skills</h2>
            <div className="space-y-4">
              {softSkills.map((s) => (
                <div key={s.skill}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">{s.skill}</span>
                    <span className="text-cyan-400 font-medium">{s.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-600 to-teal-500" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold text-lg mb-4">🏆 Certifications</h2>
            <div className="space-y-3">
              {certifications.map((c) => (
                <div key={c.name} className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${c.badge.includes('amber') ? 'bg-amber-400' : c.badge.includes('blue') ? 'bg-blue-400' : 'bg-cyan-400'}`} />
                  <div>
                    <p className="text-white text-sm font-medium">{c.name}</p>
                    <p className="text-slate-400 text-xs">{c.issuer} · {c.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI Career Insights */}
      <div className="bg-gradient-to-r from-violet-900/30 to-blue-900/30 border border-violet-500/20 rounded-2xl p-6">
        <h2 className="text-white font-semibold text-lg mb-4">🤖 AI Career Insight</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-slate-400 text-sm mb-3">Recommended Roles</p>
            <div className="flex flex-wrap gap-2">
              {recommendedRoles.map((r) => (
                <span key={r} className="px-3 py-1 rounded-full text-xs bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  {r}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-3">Skill Gaps to Address</p>
            <div className="flex flex-wrap gap-2">
              {skillGaps.map((g) => (
                <span key={g} className="px-3 py-1 rounded-full text-xs bg-red-500/20 text-red-400 border border-red-500/30">
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 p-4 bg-white/5 rounded-xl">
          <p className="text-slate-300 text-sm">
            💡 Based on your profile, focus on <span className="text-violet-300 font-medium">System Design</span> and{' '}
            <span className="text-violet-300 font-medium">Cloud technologies</span> to increase your chance of landing a{' '}
            <span className="text-emerald-400 font-medium">₹20+ LPA role</span> in your upcoming placement season.
          </p>
        </div>
      </div>
    </div>
  )
}
