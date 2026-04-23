const listings = [
  { company: 'Google', role: 'SWE - Full Stack', ctc: '28 LPA', deadline: 'Dec 20, 2024', eligibility: 'CGPA ≥ 8.0', eligible: true },
  { company: 'Microsoft', role: 'Software Engineer', ctc: '32 LPA', deadline: 'Dec 22, 2024', eligibility: 'CGPA ≥ 7.5', eligible: true },
  { company: 'Infosys', role: 'Systems Engineer', ctc: '6.5 LPA', deadline: 'Dec 15, 2024', eligibility: 'CGPA ≥ 6.0', eligible: true },
  { company: 'Deloitte', role: 'Analyst', ctc: '7 LPA', deadline: 'Dec 18, 2024', eligibility: 'CGPA ≥ 6.5', eligible: true },
  { company: 'Amazon', role: 'SDE-1', ctc: '24 LPA', deadline: 'Dec 25, 2024', eligibility: 'CGPA ≥ 8.5', eligible: false },
  { company: 'Capgemini', role: 'Associate Consultant', ctc: '5.5 LPA', deadline: 'Jan 5, 2025', eligibility: 'CGPA ≥ 6.0', eligible: true },
]

const appTracker = [
  { company: 'Infosys', role: 'Systems Engineer', applied: 'Nov 20', round: 'Technical Interview', status: 'In Progress' },
  { company: 'Wipro', role: 'Project Engineer', applied: 'Nov 18', round: 'HR Round', status: 'In Progress' },
  { company: 'Cognizant', role: 'Programmer Analyst', applied: 'Nov 10', round: 'Offer', status: 'Selected' },
]

const statusStyle: Record<string, string> = {
  'In Progress': 'bg-amber-500/20 text-amber-400',
  'Selected': 'bg-emerald-500/20 text-emerald-400',
  'Rejected': 'bg-red-500/20 text-red-400',
}

export default function PlacementPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-violet-600/20 to-blue-600/20 border border-violet-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-violet-500/20 text-violet-300 border border-violet-500/30 mb-3">
          Campus Recruitment
        </span>
        <h1 className="text-3xl font-bold text-white">Placement Portal</h1>
        <p className="text-slate-400 mt-1">Campus placement drives, job listings, and your application status.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Companies Visited', value: '24', color: 'text-violet-400' },
          { label: 'Students Placed', value: '156', color: 'text-blue-400' },
          { label: 'Highest Package', value: '42 LPA', color: 'text-emerald-400' },
          { label: 'Avg Package', value: '8.5 LPA', color: 'text-amber-400' },
        ].map((s) => (
          <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-slate-400 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Job Listings */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-white font-semibold text-lg mb-4">Active Job Listings</h2>
        <div className="space-y-3">
          {listings.map((j) => (
            <div key={j.company + j.role} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/30 to-blue-600/30 flex items-center justify-center text-white font-bold text-sm shrink-0">
                {j.company[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium">{j.company} — <span className="text-slate-300">{j.role}</span></p>
                <p className="text-xs text-slate-400">{j.eligibility} · Deadline: {j.deadline}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-emerald-400 font-bold text-sm">{j.ctc}</p>
                {j.eligible ? (
                  <button className="mt-1 px-3 py-1 rounded-lg bg-violet-600/20 text-violet-300 text-xs border border-violet-500/30 hover:bg-violet-600/30 transition-all">
                    Apply
                  </button>
                ) : (
                  <span className="mt-1 inline-block px-3 py-1 rounded-lg bg-red-500/10 text-red-400 text-xs">Not Eligible</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Tracker */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-white font-semibold text-lg mb-4">My Applications</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-500 text-xs border-b border-white/10">
              <th className="text-left pb-3">Company</th>
              <th className="text-left pb-3">Role</th>
              <th className="text-left pb-3">Applied</th>
              <th className="text-left pb-3">Current Round</th>
              <th className="text-right pb-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {appTracker.map((a) => (
              <tr key={a.company + a.role} className="hover:bg-white/5">
                <td className="py-3 text-white font-medium">{a.company}</td>
                <td className="py-3 text-slate-300">{a.role}</td>
                <td className="py-3 text-slate-400">{a.applied}</td>
                <td className="py-3 text-slate-400">{a.round}</td>
                <td className="py-3 text-right">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${statusStyle[a.status]}`}>{a.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
