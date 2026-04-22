const partners = [
  { company: 'Wipro Limited', type: 'Industry', active: 8, domain: 'IT / Software', since: '2020' },
  { company: 'ISRO', type: 'Government', active: 3, domain: 'Space & Aerospace', since: '2019' },
  { company: 'IIT Bombay', type: 'Academic', active: 5, domain: 'Research & Innovation', since: '2018' },
  { company: 'Tech Mahindra', type: 'Industry', active: 6, domain: 'IT / Consulting', since: '2021' },
  { company: 'DRDO', type: 'Government', active: 2, domain: 'Defence Research', since: '2022' },
  { company: 'NIT Trichy', type: 'Academic', active: 4, domain: 'Joint Research', since: '2020' },
]

const mous = [
  { partner: 'Wipro Limited', signed: 'Jan 2021', expiry: 'Jan 2026', scope: 'Internship, Placement, R&D' },
  { partner: 'IIT Bombay', signed: 'Mar 2018', expiry: 'Mar 2028', scope: 'Research Collaboration, Publications' },
  { partner: 'Tech Mahindra', signed: 'Aug 2021', expiry: 'Aug 2026', scope: 'Curriculum, Guest Lectures' },
  { partner: 'ISRO', signed: 'Nov 2019', expiry: 'Nov 2024', scope: 'Internship, Projects' },
]

export default function CollaborationPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-rose-600/20 to-orange-600/20 border border-rose-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-3">
          Partnerships
        </span>
        <h1 className="text-3xl font-bold text-white">Collaboration Portal</h1>
        <p className="text-slate-400 mt-1">Industry partnerships, academic collaborations, MOUs, and joint projects.</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-rose-400">28</p>
          <p className="text-slate-400 text-sm">Active Partners</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-blue-400">18</p>
          <p className="text-slate-400 text-sm">MOUs Signed</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-emerald-400">42</p>
          <p className="text-slate-400 text-sm">Joint Projects</p>
        </div>
      </div>

      {/* Partners */}
      <div>
        <h2 className="text-white font-semibold text-lg mb-4">Partner Organizations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {partners.map((p) => (
            <div key={p.company} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:border-rose-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-600/30 to-orange-600/30 flex items-center justify-center text-white font-bold text-sm shrink-0">
                {p.company.slice(0, 2).toUpperCase()}
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">{p.company}</p>
                <p className="text-slate-400 text-xs">{p.domain} · Since {p.since}</p>
              </div>
              <div className="text-right">
                <span className={`px-2 py-0.5 rounded-full text-xs ${p.type === 'Industry' ? 'bg-blue-500/20 text-blue-400' : p.type === 'Academic' ? 'bg-violet-500/20 text-violet-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                  {p.type}
                </span>
                <p className="text-slate-400 text-xs mt-1">{p.active} projects</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOUs */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-white font-semibold text-lg mb-4">Memoranda of Understanding</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-500 text-xs border-b border-white/10">
              <th className="text-left pb-3">Partner</th>
              <th className="text-left pb-3">Signed</th>
              <th className="text-left pb-3">Expiry</th>
              <th className="text-left pb-3">Scope</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {mous.map((m) => (
              <tr key={m.partner} className="hover:bg-white/5">
                <td className="py-3 text-white font-medium">{m.partner}</td>
                <td className="py-3 text-slate-400">{m.signed}</td>
                <td className="py-3 text-slate-400">{m.expiry}</td>
                <td className="py-3 text-slate-300 text-xs">{m.scope}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
