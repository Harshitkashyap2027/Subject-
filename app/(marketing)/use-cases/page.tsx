import SectionWrapper from '@/components/shared/SectionWrapper'

const useCases = [
  {
    industry: 'Education',
    icon: '🎓',
    org: 'Westside Academy',
    size: '1,200 students',
    problem: 'Managing 1,200 students with 5 different disconnected tools was creating data silos and wasting 30+ hours of admin time per week.',
    solution: 'Replaced all 5 tools with lvlBase. Unified student records, attendance, grades, communication, and staff management into one platform.',
    results: [
      'Admin time reduced by 28 hours/week',
      '23% improvement in average student scores',
      '98% teacher adoption in first month',
      '$47,000/year in software cost savings',
    ],
    gradient: 'from-violet-600/20 to-purple-900/20',
    border: 'border-violet-500/20',
  },
  {
    industry: 'Healthcare',
    icon: '🏥',
    org: 'City Medical Center',
    size: '450 staff, 2,000 patients/month',
    problem: 'Patient wait times averaging 4.5 hours. Staff scheduling conflicts were occurring 3-4 times per week. No unified patient record system.',
    solution: 'Deployed lvlBase Healthcare module with appointment management, patient records, and staff coordination. AI predicts staffing needs 48 hours in advance.',
    results: [
      'Patient wait time reduced from 4.5h to 2.7h',
      'Zero scheduling conflicts in last 6 months',
      '40% increase in patient satisfaction scores',
      'HIPAA compliant from day one',
    ],
    gradient: 'from-cyan-600/20 to-blue-900/20',
    border: 'border-cyan-500/20',
  },
  {
    industry: 'Corporate',
    icon: '🏢',
    org: 'Meridian Group',
    size: '1,800 employees, 12 offices',
    problem: 'Rapid growth meant HR processes couldn\'t keep up. Onboarding took 3 weeks. No visibility into team skills. 6 different HR tools.',
    solution: 'Unified HR, project management, and performance tracking on lvlBase. Skill DNA mapped 1,800 employee profiles in first week.',
    results: [
      'Onboarding time reduced from 3 weeks to 3 days',
      'Identified $2.1M in skill gaps that led to targeted hiring',
      '35% increase in cross-team project success rate',
      '100% performance review completion (was 67%)',
    ],
    gradient: 'from-blue-600/20 to-indigo-900/20',
    border: 'border-blue-500/20',
  },
]

export default function UseCasesPage() {
  return (
    <div>
      <section className="py-24 px-4 mesh-bg text-center">
        <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-4">Case Studies</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white mb-6">
          Real Results from{' '}
          <span className="gradient-text">Real Organizations</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          See how organizations like yours have transformed their operations with lvlBase.
        </p>
      </section>

      <SectionWrapper>
        <div className="space-y-12">
          {useCases.map((uc, i) => (
            <div key={uc.org} className={`bg-gradient-to-br ${uc.gradient} border ${uc.border} rounded-2xl p-8`}>
              <div className="flex items-start gap-6 mb-8">
                <span className="text-5xl">{uc.icon}</span>
                <div>
                  <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-semibold border border-white/10">{uc.industry}</span>
                  <h2 className="text-2xl font-bold text-white mt-2 font-poppins">{uc.org}</h2>
                  <p className="text-slate-400">{uc.size}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-red-400 font-bold mb-3 text-sm uppercase tracking-wider">❌ The Problem</h3>
                  <p className="text-slate-300 leading-relaxed">{uc.problem}</p>
                </div>
                <div>
                  <h3 className="text-blue-400 font-bold mb-3 text-sm uppercase tracking-wider">💡 The Solution</h3>
                  <p className="text-slate-300 leading-relaxed">{uc.solution}</p>
                </div>
                <div>
                  <h3 className="text-emerald-400 font-bold mb-3 text-sm uppercase tracking-wider">✅ The Results</h3>
                  <ul className="space-y-2">
                    {uc.results.map((r) => (
                      <li key={r} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">→</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
