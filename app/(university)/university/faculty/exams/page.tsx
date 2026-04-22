const scheduledExams = [
  { subject: 'Data Structures & Algorithms', date: 'Dec 15, 2024', type: 'Mid-Term', duration: '3 hrs', venue: 'Hall A', status: 'Upcoming' },
  { subject: 'Machine Learning', date: 'Dec 17, 2024', type: 'Quiz', duration: '1 hr', venue: 'Smart Class 3', status: 'Upcoming' },
  { subject: 'Algorithm Design', date: 'Dec 20, 2024', type: 'End-Term', duration: '3 hrs', venue: 'Hall B', status: 'Upcoming' },
  { subject: 'DBMS', date: 'Nov 25, 2024', type: 'Mid-Term', duration: '3 hrs', venue: 'Hall C', status: 'Results Pending' },
]

export default function FacultyExamsPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-3">
          Examinations
        </span>
        <h1 className="text-3xl font-bold text-white">Exams Management</h1>
        <p className="text-slate-400 mt-1">Schedule exams, enter results, and manage evaluations.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-blue-400">3</p>
          <p className="text-slate-400 text-sm">Upcoming Exams</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-amber-400">12</p>
          <p className="text-slate-400 text-sm">Pending Evaluations</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-emerald-400">8</p>
          <p className="text-slate-400 text-sm">Results Published</p>
        </div>
      </div>

      {/* Exam List */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-semibold text-lg">Scheduled Exams</h2>
          <button className="px-4 py-2 rounded-xl bg-blue-600/20 text-blue-300 text-sm border border-blue-500/30 hover:bg-blue-600/30 transition-all">
            + Create Exam
          </button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-500 text-xs border-b border-white/10">
              <th className="text-left pb-3">Subject</th>
              <th className="text-left pb-3">Date</th>
              <th className="text-left pb-3">Type</th>
              <th className="text-left pb-3">Duration</th>
              <th className="text-left pb-3">Venue</th>
              <th className="text-right pb-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {scheduledExams.map((e) => (
              <tr key={e.subject + e.date} className="hover:bg-white/5">
                <td className="py-3 text-white font-medium">{e.subject}</td>
                <td className="py-3 text-slate-300">{e.date}</td>
                <td className="py-3 text-slate-300">{e.type}</td>
                <td className="py-3 text-slate-400">{e.duration}</td>
                <td className="py-3 text-slate-400">{e.venue}</td>
                <td className="py-3 text-right">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${e.status === 'Upcoming' ? 'bg-blue-500/20 text-blue-400' : 'bg-amber-500/20 text-amber-400'}`}>
                    {e.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create Exam Form */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-white font-semibold text-lg mb-5">Create New Exam</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Subject', placeholder: 'Select subject...' },
            { label: 'Exam Type', placeholder: 'Mid-Term / End-Term / Quiz' },
            { label: 'Date', placeholder: 'YYYY-MM-DD' },
            { label: 'Time', placeholder: 'e.g. 10:00 AM' },
            { label: 'Duration', placeholder: 'e.g. 3 hrs' },
            { label: 'Venue', placeholder: 'Hall / Room' },
          ].map((f) => (
            <div key={f.label}>
              <label className="text-slate-400 text-xs mb-1 block">{f.label}</label>
              <input
                type="text"
                placeholder={f.placeholder}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50"
              />
            </div>
          ))}
        </div>
        <button className="mt-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium hover:opacity-90 transition-all">
          Schedule Exam
        </button>
      </div>
    </div>
  )
}
