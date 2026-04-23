const alerts = [
  { type: 'Attendance', text: '42 students across 3 departments have attendance below 75%', time: '1h ago', icon: '⚠️', color: 'bg-amber-500/5 border-amber-500/20' },
  { type: 'Research', text: 'New grant application submitted by Dr. Priya Mehta for DST funding', time: '3h ago', icon: '🔬', color: 'bg-blue-500/5 border-blue-500/20' },
  { type: 'Placement', text: 'Infosys confirmed placement drive for Dec 22, 2024 — 80 slots available', time: '5h ago', icon: '💼', color: 'bg-emerald-500/5 border-emerald-500/20' },
  { type: 'Fee', text: '312 students have pending semester fee payments', time: '1d ago', icon: '💰', color: 'bg-red-500/5 border-red-500/20' },
]

const activity = [
  { text: 'Exam schedule for Semester 5 published', time: '2h ago' },
  { text: '15 new students enrolled in MBA program', time: '4h ago' },
  { text: 'Dr. Rajan Verma submitted research report', time: '6h ago' },
  { text: 'Academic calendar updated for 2025', time: '1d ago' },
  { text: 'Collaboration MOU signed with Tech Mahindra', time: '2d ago' },
]

export default function AdminDashboard() {
  return (
    <div className="p-8 space-y-8">
      <div className="bg-gradient-to-r from-rose-600/20 to-orange-600/20 border border-rose-500/20 rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-white">University Overview 🏫</h1>
        <p className="text-slate-400 mt-1">Academic Year 2024-25 · Semester 5 · Dec 10, 2024</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Students', value: '4,820', color: 'text-violet-400', bg: 'bg-violet-500/10', sub: '+180 this sem' },
          { label: 'Faculty Members', value: '240', color: 'text-blue-400', bg: 'bg-blue-500/10', sub: '18 departments' },
          { label: 'Departments', value: '12', color: 'text-emerald-400', bg: 'bg-emerald-500/10', sub: '8 UG + 4 PG' },
          { label: 'Ongoing Research', value: '47', color: 'text-amber-400', bg: 'bg-amber-500/10', sub: '₹3.2 Cr funding' },
        ].map((s) => (
          <div key={s.label} className={`${s.bg} border border-white/10 rounded-2xl p-5`}>
            <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-white text-sm font-medium mt-1">{s.label}</p>
            <p className="text-slate-500 text-xs">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alerts */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-4">System Alerts</h2>
          <div className="space-y-3">
            {alerts.map((a, i) => (
              <div key={i} className={`flex items-start gap-3 p-3 border rounded-xl ${a.color}`}>
                <span className="text-xl shrink-0">{a.icon}</span>
                <div className="flex-1">
                  <p className="text-slate-300 text-sm">{a.text}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {activity.map((a, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-white/5">
                <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0" />
                <div className="flex-1">
                  <p className="text-slate-300 text-sm">{a.text}</p>
                  <p className="text-slate-500 text-xs">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
