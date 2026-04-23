const schedule = [
  { time: '9:00 AM', course: 'Data Structures', room: 'CS Lab 1', students: 45 },
  { time: '11:00 AM', course: 'Algorithm Design', room: 'Room 204', students: 38 },
  { time: '2:00 PM', course: 'Machine Learning', room: 'Smart Class 3', students: 42 },
  { time: '4:00 PM', course: 'Research Mentoring', room: 'Faculty Office', students: 5 },
]

const recentActivity = [
  { type: 'Submission', text: '12 students submitted OS Assignment 3', time: '2h ago', icon: '📝' },
  { type: 'Alert', text: 'Ravi Kumar has attendance below 75% in Networks', time: '4h ago', icon: '⚠️' },
  { type: 'Submission', text: '38 students submitted DBMS Lab Report', time: '1d ago', icon: '📝' },
  { type: 'Query', text: 'Priya Nair raised a query on Chapter 5 notes', time: '1d ago', icon: '💬' },
]

export default function FacultyDashboard() {
  return (
    <div className="p-8 space-y-8">
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/20 rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-white">Good morning, Dr. Mehta 👋</h1>
        <p className="text-slate-400 mt-1">You have 4 classes scheduled today. 12 evaluations pending.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Active Courses', value: '4', color: 'text-blue-400', bg: 'bg-blue-500/10' },
          { label: 'Total Students', value: '180', color: 'text-violet-400', bg: 'bg-violet-500/10' },
          { label: 'Pending Evaluations', value: '12', color: 'text-amber-400', bg: 'bg-amber-500/10' },
          { label: 'Research Papers', value: '3', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
        ].map((s) => (
          <div key={s.label} className={`${s.bg} border border-white/10 rounded-2xl p-5`}>
            <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-white text-sm font-medium mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-4">Today&apos;s Schedule</h2>
          <div className="space-y-3">
            {schedule.map((cls) => (
              <div key={cls.time} className="flex items-center gap-4 p-3 bg-white/5 rounded-xl">
                <div className="text-center w-16 shrink-0">
                  <p className="text-blue-400 font-bold text-xs">{cls.time}</p>
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">{cls.course}</p>
                  <p className="text-slate-400 text-xs">{cls.room} · {cls.students} students</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                <span className="text-xl shrink-0">{a.icon}</span>
                <div className="flex-1">
                  <p className="text-slate-300 text-sm">{a.text}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{a.time}</p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${a.type === 'Alert' ? 'bg-red-500/20 text-red-400' : a.type === 'Submission' ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-500/20 text-slate-400'}`}>
                  {a.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
