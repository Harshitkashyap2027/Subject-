const deptAttendance = [
  { dept: 'Computer Science', overall: 88, students: 920, belowThreshold: 42 },
  { dept: 'Electronics & Comm', overall: 85, students: 780, belowThreshold: 38 },
  { dept: 'Mechanical Engg', overall: 82, students: 640, belowThreshold: 55 },
  { dept: 'Civil Engineering', overall: 79, students: 520, belowThreshold: 61 },
  { dept: 'Electrical Engg', overall: 86, students: 480, belowThreshold: 28 },
  { dept: 'MBA', overall: 91, students: 360, belowThreshold: 12 },
]

const lowAttendanceStudents = [
  { name: 'Chirag Mehta', dept: 'CSE', attendance: 68, course: 'Data Structures' },
  { name: 'Harsh Agarwal', dept: 'CSE', attendance: 71, course: 'DBMS' },
  { name: 'Neha Sharma', dept: 'ME', attendance: 65, course: 'Thermodynamics' },
  { name: 'Rohan Jain', dept: 'ECE', attendance: 73, course: 'DSP' },
  { name: 'Ankit Patel', dept: 'Civil', attendance: 62, course: 'Structural Analysis' },
]

export default function AdminAttendancePage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-rose-600/20 to-orange-600/20 border border-rose-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-3">
          Attendance Monitoring
        </span>
        <h1 className="text-3xl font-bold text-white">Attendance Overview</h1>
        <p className="text-slate-400 mt-1">University-wide attendance tracking and low attendance alerts.</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-emerald-400">85.2%</p>
          <p className="text-slate-400 text-sm">University Average</p>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-amber-400">236</p>
          <p className="text-slate-400 text-sm">Below 75% Threshold</p>
        </div>
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-red-400">48</p>
          <p className="text-slate-400 text-sm">Critical (&lt;65%)</p>
        </div>
      </div>

      {/* Department-wise */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-white font-semibold text-lg mb-5">Department-wise Attendance</h2>
        <div className="space-y-4">
          {deptAttendance.map((d) => (
            <div key={d.dept} className="flex items-center gap-4">
              <span className="text-slate-300 text-sm w-44 shrink-0">{d.dept}</span>
              <div className="flex-1 h-4 bg-white/5 rounded-full">
                <div
                  className={`h-full rounded-full ${d.overall >= 85 ? 'bg-emerald-500' : d.overall >= 75 ? 'bg-amber-500' : 'bg-red-500'}`}
                  style={{ width: `${d.overall}%` }}
                />
              </div>
              <span className={`text-sm font-bold w-12 text-right ${d.overall >= 85 ? 'text-emerald-400' : d.overall >= 75 ? 'text-amber-400' : 'text-red-400'}`}>
                {d.overall}%
              </span>
              <span className="text-xs text-red-400 w-20 text-right">{d.belowThreshold} alerts</span>
            </div>
          ))}
        </div>
      </div>

      {/* Low Attendance Students */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-white font-semibold text-lg mb-4">⚠️ Low Attendance Students</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-500 text-xs border-b border-white/10">
              <th className="text-left pb-3">Student</th>
              <th className="text-left pb-3">Department</th>
              <th className="text-left pb-3">Course</th>
              <th className="text-right pb-3">Attendance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {lowAttendanceStudents.map((s) => (
              <tr key={s.name + s.course} className="hover:bg-white/5">
                <td className="py-3 text-white font-medium">{s.name}</td>
                <td className="py-3 text-slate-300">{s.dept}</td>
                <td className="py-3 text-slate-400">{s.course}</td>
                <td className="py-3 text-right">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${s.attendance < 70 ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}`}>
                    {s.attendance}%
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
