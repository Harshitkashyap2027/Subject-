const drives = [
  { company: 'Google', date: 'Dec 22, 2024', slots: 15, applied: 48, status: 'Upcoming', ctc: '28 LPA', eligible: 'CGPA ≥ 8.0' },
  { company: 'Microsoft', date: 'Dec 24, 2024', slots: 10, applied: 52, status: 'Upcoming', ctc: '32 LPA', eligible: 'CGPA ≥ 7.5' },
  { company: 'Infosys', date: 'Dec 28, 2024', slots: 80, applied: 120, status: 'Upcoming', ctc: '6.5 LPA', eligible: 'CGPA ≥ 6.0' },
  { company: 'Wipro', date: 'Nov 20, 2024', slots: 60, applied: 95, status: 'Completed', ctc: '6 LPA', eligible: 'CGPA ≥ 6.0' },
  { company: 'Cognizant', date: 'Nov 15, 2024', slots: 50, applied: 80, status: 'Completed', ctc: '7 LPA', eligible: 'CGPA ≥ 6.5' },
]

export default function AdminPlacementPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-rose-600/20 to-orange-600/20 border border-rose-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-3">
          Training & Placement Cell
        </span>
        <h1 className="text-3xl font-bold text-white">Placement Cell</h1>
        <p className="text-slate-400 mt-1">Campus recruitment drives, company listings, and placement statistics.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Companies Visited', value: '24', color: 'text-rose-400' },
          { label: 'Students Placed', value: '156', color: 'text-emerald-400' },
          { label: 'Highest Package', value: '42 LPA', color: 'text-violet-400' },
          { label: 'Avg Package', value: '8.5 LPA', color: 'text-blue-400' },
        ].map((s) => (
          <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-slate-400 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-semibold text-lg">Placement Drives</h2>
          <button className="px-4 py-2 rounded-xl bg-rose-600/20 text-rose-300 text-sm border border-rose-500/30 hover:bg-rose-600/30 transition-all">
            + Schedule Drive
          </button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-500 text-xs border-b border-white/10">
              <th className="text-left pb-3">Company</th>
              <th className="text-left pb-3">Date</th>
              <th className="text-center pb-3">Slots</th>
              <th className="text-center pb-3">Applied</th>
              <th className="text-left pb-3">CTC</th>
              <th className="text-left pb-3">Eligibility</th>
              <th className="text-right pb-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {drives.map((d) => (
              <tr key={d.company + d.date} className="hover:bg-white/5">
                <td className="py-3 text-white font-medium">{d.company}</td>
                <td className="py-3 text-slate-300">{d.date}</td>
                <td className="py-3 text-center text-slate-300">{d.slots}</td>
                <td className="py-3 text-center text-blue-400">{d.applied}</td>
                <td className="py-3 text-emerald-400 font-medium">{d.ctc}</td>
                <td className="py-3 text-slate-400 text-xs">{d.eligible}</td>
                <td className="py-3 text-right">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${d.status === 'Upcoming' ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-500/20 text-slate-400'}`}>
                    {d.status}
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
