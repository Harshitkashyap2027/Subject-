const exams = [
  { id: 'EX001', subject: 'Data Structures', dept: 'CSE', date: 'Dec 15, 2024', type: 'Mid-Term', students: 180, status: 'Scheduled' },
  { id: 'EX002', subject: 'Digital Signal Processing', dept: 'ECE', date: 'Dec 16, 2024', type: 'Mid-Term', students: 145, status: 'Scheduled' },
  { id: 'EX003', subject: 'Machine Learning', dept: 'CSE', date: 'Dec 17, 2024', type: 'Mid-Term', students: 120, status: 'Scheduled' },
  { id: 'EX004', subject: 'Thermodynamics II', dept: 'ME', date: 'Dec 18, 2024', type: 'Mid-Term', students: 130, status: 'Scheduled' },
  { id: 'EX005', subject: 'DBMS', dept: 'CSE', date: 'Nov 25, 2024', type: 'Mid-Term', students: 175, status: 'Results Published' },
  { id: 'EX006', subject: 'Business Analytics', dept: 'MBA', date: 'Nov 22, 2024', type: 'Quiz', students: 90, status: 'Results Published' },
]

const statusStyle: Record<string, string> = {
  'Scheduled': 'bg-blue-500/20 text-blue-400',
  'Ongoing': 'bg-amber-500/20 text-amber-400',
  'Results Published': 'bg-emerald-500/20 text-emerald-400',
  'Results Pending': 'bg-red-500/20 text-red-400',
}

export default function AdminExamsPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-rose-600/20 to-orange-600/20 border border-rose-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-3">
          Examination Cell
        </span>
        <h1 className="text-3xl font-bold text-white">Exams & Results</h1>
        <p className="text-slate-400 mt-1">Schedule examinations and manage result publication.</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Scheduled', value: '4', color: 'text-blue-400' },
          { label: 'Results Pending', value: '3', color: 'text-amber-400' },
          { label: 'Results Published', value: '28', color: 'text-emerald-400' },
          { label: 'Total this Sem', value: '35', color: 'text-rose-400' },
        ].map((s) => (
          <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-slate-400 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-semibold text-lg">Exam Schedule</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 text-sm border border-white/10 hover:bg-white/10 transition-all">
              Publish Results
            </button>
            <button className="px-4 py-2 rounded-xl bg-rose-600/20 text-rose-300 text-sm border border-rose-500/30 hover:bg-rose-600/30 transition-all">
              + Schedule Exam
            </button>
          </div>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-500 text-xs border-b border-white/10">
              <th className="text-left pb-3">Exam ID</th>
              <th className="text-left pb-3">Subject</th>
              <th className="text-left pb-3">Dept</th>
              <th className="text-left pb-3">Date</th>
              <th className="text-left pb-3">Type</th>
              <th className="text-center pb-3">Students</th>
              <th className="text-right pb-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {exams.map((e) => (
              <tr key={e.id} className="hover:bg-white/5">
                <td className="py-3 text-slate-400 font-mono text-xs">{e.id}</td>
                <td className="py-3 text-white font-medium">{e.subject}</td>
                <td className="py-3 text-slate-300">{e.dept}</td>
                <td className="py-3 text-slate-300">{e.date}</td>
                <td className="py-3 text-slate-400">{e.type}</td>
                <td className="py-3 text-center text-slate-300">{e.students}</td>
                <td className="py-3 text-right">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${statusStyle[e.status]}`}>{e.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
