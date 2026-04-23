const courses = [
  { code: 'CS301', name: 'Data Structures & Algorithms', students: 45, credits: 4, semester: '5th', section: 'A' },
  { code: 'CS302', name: 'Database Management Systems', students: 38, credits: 4, semester: '5th', section: 'B' },
  { code: 'CS501', name: 'Machine Learning', students: 42, credits: 3, semester: '7th', section: 'A' },
  { code: 'CS502', name: 'Algorithm Design', students: 35, credits: 3, semester: '7th', section: 'A' },
]

export default function FacultyCoursesPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-3">
          Academic Year 2024-25
        </span>
        <h1 className="text-3xl font-bold text-white">My Courses</h1>
        <p className="text-slate-400 mt-1">4 active courses · 160 total students</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          { label: 'Active Courses', value: '4', color: 'text-blue-400' },
          { label: 'Total Students', value: '160', color: 'text-violet-400' },
        ].map((s) => (
          <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
            <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-slate-400 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {courses.map((c) => (
          <div key={c.code} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">{c.code}</span>
                  <span className="text-xs text-slate-400">Sem {c.semester} · Section {c.section}</span>
                </div>
                <h3 className="text-white font-semibold text-lg">{c.name}</h3>
                <p className="text-slate-400 text-sm">{c.credits} Credits · {c.students} Students enrolled</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-xl bg-blue-600/20 text-blue-300 text-sm border border-blue-500/30 hover:bg-blue-600/30 transition-all">
                View Students
              </button>
              <button className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 text-sm border border-white/10 hover:bg-white/10 transition-all">
                Upload Material
              </button>
              <button className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 text-sm border border-white/10 hover:bg-white/10 transition-all">
                Mark Attendance
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
