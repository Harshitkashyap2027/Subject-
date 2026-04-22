const subjects = [
  { name: 'Data Structures & Algorithms', grade: 'A', marks: '88/100', attendance: 88 },
  { name: 'Database Management Systems', grade: 'A+', marks: '92/100', attendance: 92 },
  { name: 'Operating Systems', grade: 'B+', marks: '78/100', attendance: 85 },
  { name: 'Computer Networks', grade: 'B+', marks: '76/100', attendance: 78 },
  { name: 'Machine Learning', grade: 'A', marks: '85/100', attendance: 95 },
]

const upcomingExams = [
  { subject: 'Data Structures', date: 'Dec 15', time: '10:00 AM' },
  { subject: 'DBMS', date: 'Dec 18', time: '2:00 PM' },
  { subject: 'Operating Systems', date: 'Dec 20', time: '10:00 AM' },
]

export default function ParentProgressPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border border-emerald-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-3">
          Academic Progress
        </span>
        <h1 className="text-3xl font-bold text-white">Student Progress</h1>
        <p className="text-slate-400 mt-1">Track your child&apos;s academic performance and attendance.</p>
      </div>

      {/* Student Card */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white text-xl font-bold shrink-0">
            RS
          </div>
          <div className="flex-1">
            <h2 className="text-white text-xl font-bold">Rahul Sharma</h2>
            <p className="text-slate-400 text-sm">CS21B042 · Computer Science & Engineering · 3rd Year</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-violet-400">8.4</p>
            <p className="text-slate-400 text-xs">CGPA</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/10">
          <div className="text-center">
            <p className="text-2xl font-bold text-emerald-400">89%</p>
            <p className="text-slate-400 text-xs">Avg Attendance</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-400">72/120</p>
            <p className="text-slate-400 text-xs">Credits</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-amber-400">Sem 5</p>
            <p className="text-slate-400 text-xs">Current Semester</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Subject Performance */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-4">Subject Performance</h2>
          <div className="space-y-3">
            {subjects.map((s) => (
              <div key={s.name} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                <div className="flex-1 min-w-0 mr-3">
                  <p className="text-white text-sm font-medium truncate">{s.name}</p>
                  <p className="text-slate-400 text-xs">{s.marks}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs px-2 py-0.5 rounded bg-violet-500/20 text-violet-400 font-bold">{s.grade}</span>
                  <span className={`text-xs ${s.attendance < 80 ? 'text-red-400' : 'text-emerald-400'}`}>{s.attendance}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Exams */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-4">Upcoming Exams</h2>
          <div className="space-y-3">
            {upcomingExams.map((e) => (
              <div key={e.subject} className="flex items-center gap-4 p-3 bg-red-500/5 border border-red-500/10 rounded-xl">
                <span className="text-2xl">📝</span>
                <div>
                  <p className="text-white text-sm font-medium">{e.subject}</p>
                  <p className="text-slate-400 text-xs">{e.date} · {e.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl">
            <p className="text-amber-400 text-sm font-medium">⚠️ Low Attendance Alert</p>
            <p className="text-slate-400 text-xs mt-1">Computer Networks: 78% attendance — approaching threshold.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
