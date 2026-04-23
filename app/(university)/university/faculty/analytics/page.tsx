const coursePerformance = [
  { course: 'Data Structures', avg: 78, highest: 98, lowest: 42, passRate: 91 },
  { course: 'Machine Learning', avg: 82, highest: 97, lowest: 55, passRate: 96 },
  { course: 'DBMS', avg: 74, highest: 95, lowest: 38, passRate: 88 },
  { course: 'Algorithm Design', avg: 70, highest: 96, lowest: 35, passRate: 84 },
]

const atRisk = [
  { name: 'Chirag Mehta', roll: 'CS21B003', course: 'DSA', attendance: 68, gpa: 5.8 },
  { name: 'Harsh Agarwal', roll: 'CS21B008', course: 'DBMS', attendance: 71, gpa: 6.1 },
  { name: 'Neha Sharma', roll: 'CS21B015', course: 'Algorithm', attendance: 65, gpa: 5.5 },
  { name: 'Rohan Jain', roll: 'CS21B021', course: 'ML', attendance: 73, gpa: 6.3 },
]

const attendanceTrend = [
  { week: 'Week 1', rate: 94 },
  { week: 'Week 2', rate: 91 },
  { week: 'Week 3', rate: 88 },
  { week: 'Week 4', rate: 85 },
  { week: 'Week 5', rate: 90 },
  { week: 'Week 6', rate: 87 },
]

export default function AnalyticsPage() {
  const maxRate = Math.max(...attendanceTrend.map((t) => t.rate))

  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-3">
          Insights
        </span>
        <h1 className="text-3xl font-bold text-white">Student Analytics</h1>
        <p className="text-slate-400 mt-1">Performance metrics, at-risk students, and attendance trends.</p>
      </div>

      {/* Course Performance */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-white font-semibold text-lg mb-5">Course-wise Performance</h2>
        <div className="space-y-5">
          {coursePerformance.map((c) => (
            <div key={c.course} className="p-4 bg-white/5 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium text-sm">{c.course}</span>
                <span className="text-slate-400 text-xs">Pass Rate: <span className="text-emerald-400 font-bold">{c.passRate}%</span></span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs text-slate-500 w-12">Avg</span>
                <div className="flex-1 h-3 bg-white/5 rounded-full">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" style={{ width: `${c.avg}%` }} />
                </div>
                <span className="text-blue-400 text-xs font-bold w-8">{c.avg}</span>
              </div>
              <div className="flex gap-4 text-xs text-slate-400 mt-1">
                <span>Highest: <span className="text-emerald-400">{c.highest}</span></span>
                <span>Lowest: <span className="text-red-400">{c.lowest}</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* At-Risk Students */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-4">⚠️ At-Risk Students</h2>
          <div className="space-y-3">
            {atRisk.map((s) => (
              <div key={s.roll} className="flex items-center justify-between p-3 bg-red-500/5 border border-red-500/10 rounded-xl">
                <div>
                  <p className="text-white text-sm font-medium">{s.name}</p>
                  <p className="text-slate-400 text-xs">{s.roll} · {s.course}</p>
                </div>
                <div className="text-right">
                  <p className="text-red-400 text-xs">Att: {s.attendance}%</p>
                  <p className="text-amber-400 text-xs">GPA: {s.gpa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Attendance Trend */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-6">Attendance Trend</h2>
          <div className="flex items-end gap-3 h-32">
            {attendanceTrend.map((t) => (
              <div key={t.week} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-blue-400 text-xs">{t.rate}%</span>
                <div className="w-full rounded-t-lg bg-gradient-to-t from-blue-600 to-cyan-500" style={{ height: `${(t.rate / maxRate) * 100}%` }} />
                <span className="text-slate-500 text-xs">{t.week.replace('Week ', 'W')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
