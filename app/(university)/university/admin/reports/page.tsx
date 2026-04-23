const reports = [
  { name: 'Enrollment Report 2024-25', type: 'Academic', size: '2.4 MB', date: 'Dec 1, 2024', format: 'PDF' },
  { name: 'Placement Statistics Q4 2024', type: 'Placement', size: '1.8 MB', date: 'Dec 3, 2024', format: 'XLSX' },
  { name: 'Research Output Report 2024', type: 'Research', size: '3.1 MB', date: 'Nov 28, 2024', format: 'PDF' },
  { name: 'Attendance Summary Sem 5', type: 'Academic', size: '890 KB', date: 'Nov 25, 2024', format: 'PDF' },
  { name: 'Fee Collection Report', type: 'Finance', size: '1.2 MB', date: 'Nov 20, 2024', format: 'XLSX' },
  { name: 'Faculty Performance Review', type: 'HR', size: '2.0 MB', date: 'Nov 15, 2024', format: 'PDF' },
]

const enrollmentTrend = [
  { year: '2020', students: 3800 },
  { year: '2021', students: 4100 },
  { year: '2022', students: 4400 },
  { year: '2023', students: 4650 },
  { year: '2024', students: 4820 },
]

const placementTrend = [
  { year: '2020', placed: 320, avg: 6.2 },
  { year: '2021', placed: 385, avg: 7.0 },
  { year: '2022', placed: 420, avg: 7.8 },
  { year: '2023', placed: 468, avg: 8.1 },
  { year: '2024', placed: 156, avg: 8.5 },
]

const typeColors: Record<string, string> = {
  Academic: 'bg-blue-500/20 text-blue-400',
  Placement: 'bg-emerald-500/20 text-emerald-400',
  Research: 'bg-violet-500/20 text-violet-400',
  Finance: 'bg-amber-500/20 text-amber-400',
  HR: 'bg-cyan-500/20 text-cyan-400',
}

export default function ReportsPage() {
  const maxStudents = Math.max(...enrollmentTrend.map((e) => e.students))
  const maxPlaced = Math.max(...placementTrend.map((p) => p.placed))

  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-rose-600/20 to-orange-600/20 border border-rose-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-3">
          Analytics & Reporting
        </span>
        <h1 className="text-3xl font-bold text-white">Reports & Analytics</h1>
        <p className="text-slate-400 mt-1">University insights, downloadable reports, and trend analysis.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Enrollment Trend */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-6">Enrollment Trend</h2>
          <div className="flex items-end gap-4 h-32">
            {enrollmentTrend.map((e) => (
              <div key={e.year} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-rose-400 text-xs">{(e.students / 1000).toFixed(1)}k</span>
                <div className="w-full rounded-t-lg bg-gradient-to-t from-rose-600 to-orange-500" style={{ height: `${(e.students / maxStudents) * 100}%` }} />
                <span className="text-slate-500 text-xs">{e.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Trend */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-6">Placement Trend</h2>
          <div className="flex items-end gap-4 h-32">
            {placementTrend.map((p) => (
              <div key={p.year} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-emerald-400 text-xs">{p.placed}</span>
                <div className="w-full rounded-t-lg bg-gradient-to-t from-emerald-600 to-teal-500" style={{ height: `${(p.placed / maxPlaced) * 100}%` }} />
                <span className="text-slate-500 text-xs">{p.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reports List */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-semibold text-lg">Available Reports</h2>
          <button className="px-4 py-2 rounded-xl bg-rose-600/20 text-rose-300 text-sm border border-rose-500/30 hover:bg-rose-600/30 transition-all">
            Generate Report
          </button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-500 text-xs border-b border-white/10">
              <th className="text-left pb-3">Report Name</th>
              <th className="text-left pb-3">Type</th>
              <th className="text-left pb-3">Date</th>
              <th className="text-left pb-3">Format</th>
              <th className="text-left pb-3">Size</th>
              <th className="text-right pb-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {reports.map((r) => (
              <tr key={r.name} className="hover:bg-white/5">
                <td className="py-3 text-white font-medium">{r.name}</td>
                <td className="py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${typeColors[r.type]}`}>{r.type}</span>
                </td>
                <td className="py-3 text-slate-400">{r.date}</td>
                <td className="py-3 text-slate-400">{r.format}</td>
                <td className="py-3 text-slate-400">{r.size}</td>
                <td className="py-3 text-right">
                  <button className="text-xs text-blue-400 hover:text-blue-300">⬇ Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
