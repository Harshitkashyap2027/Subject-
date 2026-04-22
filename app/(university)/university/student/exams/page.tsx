const upcomingExams = [
  { subject: 'Data Structures & Algorithms', date: 'Dec 15, 2024', time: '10:00 AM', venue: 'Hall A - 101', duration: '3 hrs' },
  { subject: 'Database Management Systems', date: 'Dec 18, 2024', time: '2:00 PM', venue: 'Hall B - 203', duration: '3 hrs' },
  { subject: 'Operating Systems', date: 'Dec 20, 2024', time: '10:00 AM', venue: 'Hall A - 105', duration: '2.5 hrs' },
  { subject: 'Computer Networks', date: 'Dec 22, 2024', time: '2:00 PM', venue: 'Hall C - 301', duration: '3 hrs' },
]

const pastResults = [
  { subject: 'Machine Learning', type: 'Mid-Term', marks: '87/100', grade: 'A', status: 'Pass' },
  { subject: 'Web Technologies', type: 'Lab Exam', marks: '48/50', grade: 'A+', status: 'Pass' },
  { subject: 'Software Engineering', type: 'Mid-Term', marks: '74/100', grade: 'B+', status: 'Pass' },
  { subject: 'Computer Architecture', type: 'End-Term', marks: '85/100', grade: 'A', status: 'Pass' },
  { subject: 'Discrete Mathematics', type: 'End-Term', marks: '72/100', grade: 'B+', status: 'Pass' },
  { subject: 'Theory of Computation', type: 'End-Term', marks: '69/100', grade: 'B', status: 'Pass' },
]

const gradeDistribution = [
  { grade: 'A+', count: 3, color: 'bg-violet-500' },
  { grade: 'A', count: 8, color: 'bg-blue-500' },
  { grade: 'B+', count: 5, color: 'bg-cyan-500' },
  { grade: 'B', count: 3, color: 'bg-emerald-500' },
  { grade: 'C', count: 1, color: 'bg-amber-500' },
]

export default function ExamsPage() {
  const maxCount = Math.max(...gradeDistribution.map((g) => g.count))

  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-violet-600/20 to-blue-600/20 border border-violet-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-violet-500/20 text-violet-300 border border-violet-500/30 mb-3">
          Examinations
        </span>
        <h1 className="text-3xl font-bold text-white">Exams & Results</h1>
        <p className="text-slate-400 mt-1">Upcoming exams and past academic results.</p>
      </div>

      {/* Upcoming Exams */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-white font-semibold text-lg mb-4">📅 Upcoming Exams</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-slate-500 text-xs border-b border-white/10">
                <th className="text-left pb-3">Subject</th>
                <th className="text-left pb-3">Date</th>
                <th className="text-left pb-3">Time</th>
                <th className="text-left pb-3">Venue</th>
                <th className="text-left pb-3">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {upcomingExams.map((e) => (
                <tr key={e.subject} className="hover:bg-white/5">
                  <td className="py-3 text-white font-medium">{e.subject}</td>
                  <td className="py-3 text-slate-300">{e.date}</td>
                  <td className="py-3 text-slate-300">{e.time}</td>
                  <td className="py-3 text-slate-300">{e.venue}</td>
                  <td className="py-3">
                    <span className="px-2 py-0.5 rounded-full text-xs bg-amber-500/20 text-amber-400">{e.duration}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Past Results */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-4">📊 Past Results</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-slate-500 text-xs border-b border-white/10">
                <th className="text-left pb-3">Subject</th>
                <th className="text-left pb-3">Type</th>
                <th className="text-center pb-3">Marks</th>
                <th className="text-center pb-3">Grade</th>
                <th className="text-right pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {pastResults.map((r) => (
                <tr key={r.subject + r.type} className="hover:bg-white/5">
                  <td className="py-2.5 text-slate-300 text-xs">{r.subject}</td>
                  <td className="py-2.5 text-slate-400 text-xs">{r.type}</td>
                  <td className="py-2.5 text-center text-white text-xs">{r.marks}</td>
                  <td className="py-2.5 text-center text-violet-400 font-bold text-xs">{r.grade}</td>
                  <td className="py-2.5 text-right">
                    <span className="px-2 py-0.5 rounded-full text-xs bg-emerald-500/20 text-emerald-400">{r.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Grade Distribution */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-6">Grade Distribution</h2>
          <div className="space-y-4">
            {gradeDistribution.map((g) => (
              <div key={g.grade} className="flex items-center gap-4">
                <span className="text-slate-300 text-sm font-bold w-6">{g.grade}</span>
                <div className="flex-1 h-8 bg-white/5 rounded-lg overflow-hidden">
                  <div
                    className={`h-full ${g.color} rounded-lg flex items-center px-3`}
                    style={{ width: `${(g.count / maxCount) * 100}%` }}
                  >
                    <span className="text-white text-xs font-medium">{g.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
