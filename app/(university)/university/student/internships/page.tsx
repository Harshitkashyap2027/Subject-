const applications = [
  { company: 'Infosys', role: 'Software Engineer Intern', applied: 'Nov 10, 2024', status: 'Interview Scheduled' },
  { company: 'TCS', role: 'Data Analyst Intern', applied: 'Oct 28, 2024', status: 'Application Reviewed' },
  { company: 'Wipro', role: 'Frontend Developer Intern', applied: 'Oct 15, 2024', status: 'Offer Received' },
  { company: 'Accenture', role: 'Business Analyst Intern', applied: 'Sep 30, 2024', status: 'Rejected' },
  { company: 'Google', role: 'SWE Intern', applied: 'Sep 15, 2024', status: 'Rejected' },
  { company: 'Microsoft', role: 'Product Intern', applied: 'Sep 5, 2024', status: 'Rejected' },
  { company: 'Amazon', role: 'Cloud Support Intern', applied: 'Aug 20, 2024', status: 'Rejected' },
  { company: 'IBM', role: 'AI/ML Intern', applied: 'Aug 10, 2024', status: 'Rejected' },
]

const statusStyle: Record<string, string> = {
  'Interview Scheduled': 'bg-blue-500/20 text-blue-400',
  'Application Reviewed': 'bg-amber-500/20 text-amber-400',
  'Offer Received': 'bg-emerald-500/20 text-emerald-400',
  'Rejected': 'bg-red-500/20 text-red-400',
}

export default function InternshipsPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-violet-600/20 to-blue-600/20 border border-violet-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-violet-500/20 text-violet-300 border border-violet-500/30 mb-3">
          Career
        </span>
        <h1 className="text-3xl font-bold text-white">Internship Tracker</h1>
        <p className="text-slate-400 mt-1">Track your internship applications and active placements.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-violet-400">8</p>
          <p className="text-slate-400 text-sm">Applied</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-blue-400">3</p>
          <p className="text-slate-400 text-sm">Interviews</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-emerald-400">1</p>
          <p className="text-slate-400 text-sm">Offer Received</p>
        </div>
      </div>

      {/* Active Internship */}
      <div className="bg-gradient-to-r from-emerald-600/10 to-teal-600/10 border border-emerald-500/20 rounded-2xl p-6">
        <div className="flex items-start justify-between">
          <div>
            <span className="inline-block px-2 py-0.5 rounded-full text-xs bg-emerald-500/20 text-emerald-400 mb-3">
              ✓ Active Internship
            </span>
            <h2 className="text-white text-xl font-bold">Frontend Developer Intern</h2>
            <p className="text-slate-400 mt-1">Wipro Limited · Bengaluru, Karnataka</p>
          </div>
          <span className="text-3xl">🏢</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-white/10">
          {[
            { label: 'Duration', value: '6 Months' },
            { label: 'Start Date', value: 'Jan 10, 2025' },
            { label: 'End Date', value: 'Jul 10, 2025' },
            { label: 'Mentor', value: 'Deepak Kumar' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-slate-500 text-xs">{item.label}</p>
              <p className="text-white text-sm font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Application History */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-semibold text-lg">Application History</h2>
          <button className="px-4 py-2 rounded-xl bg-violet-600/20 text-violet-300 text-sm border border-violet-500/30 hover:bg-violet-600/30 transition-all">
            + Apply for Internship
          </button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-500 text-xs border-b border-white/10">
              <th className="text-left pb-3">Company</th>
              <th className="text-left pb-3">Role</th>
              <th className="text-left pb-3">Applied</th>
              <th className="text-right pb-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {applications.map((a) => (
              <tr key={a.company + a.role} className="hover:bg-white/5">
                <td className="py-3 text-white font-medium">{a.company}</td>
                <td className="py-3 text-slate-300">{a.role}</td>
                <td className="py-3 text-slate-400">{a.applied}</td>
                <td className="py-3 text-right">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusStyle[a.status]}`}>
                    {a.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
