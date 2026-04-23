const events = [
  { date: 'Dec 10', title: 'Last Day of Teaching — Sem 5', type: 'Academic', color: 'bg-blue-500/20 text-blue-400 border-blue-500/20' },
  { date: 'Dec 11–14', title: 'Study Break / Revision Week', type: 'Academic', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/20' },
  { date: 'Dec 15–28', title: 'Mid-Term Examinations', type: 'Exam', color: 'bg-red-500/20 text-red-400 border-red-500/20' },
  { date: 'Dec 25', title: 'Christmas Holiday', type: 'Holiday', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/20' },
  { date: 'Jan 1, 2025', title: "New Year's Holiday", type: 'Holiday', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/20' },
  { date: 'Jan 10, 2025', title: 'Semester 6 Registration Deadline', type: 'Admin', color: 'bg-amber-500/20 text-amber-400 border-amber-500/20' },
  { date: 'Jan 13, 2025', title: 'Semester 6 Classes Begin', type: 'Academic', color: 'bg-blue-500/20 text-blue-400 border-blue-500/20' },
  { date: 'Jan 20–22, 2025', title: 'Technova 2025 — Annual Tech Fest', type: 'Event', color: 'bg-violet-500/20 text-violet-400 border-violet-500/20' },
  { date: 'Feb 14, 2025', title: 'Mid-Semester Feedback', type: 'Admin', color: 'bg-amber-500/20 text-amber-400 border-amber-500/20' },
  { date: 'Mar 26–28, 2025', title: 'Cultural Fest — Utsav', type: 'Event', color: 'bg-pink-500/20 text-pink-400 border-pink-500/20' },
  { date: 'Apr 15–May 5, 2025', title: 'End-Semester Examinations', type: 'Exam', color: 'bg-red-500/20 text-red-400 border-red-500/20' },
  { date: 'May 15, 2025', title: 'Result Declaration', type: 'Academic', color: 'bg-blue-500/20 text-blue-400 border-blue-500/20' },
]

const months = ['December 2024', 'January 2025', 'February 2025', 'March 2025', 'April 2025', 'May 2025']

export default function CalendarPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-rose-600/20 to-orange-600/20 border border-rose-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-3">
          Academic Year 2024-25
        </span>
        <h1 className="text-3xl font-bold text-white">Academic Calendar</h1>
        <p className="text-slate-400 mt-1">Key dates, exams, holidays, events, and administrative deadlines.</p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3">
        {[
          { type: 'Academic', color: 'bg-blue-500/20 text-blue-400' },
          { type: 'Exam', color: 'bg-red-500/20 text-red-400' },
          { type: 'Holiday', color: 'bg-emerald-500/20 text-emerald-400' },
          { type: 'Event', color: 'bg-violet-500/20 text-violet-400' },
          { type: 'Admin', color: 'bg-amber-500/20 text-amber-400' },
        ].map((l) => (
          <span key={l.type} className={`px-3 py-1 rounded-full text-xs font-medium ${l.color}`}>
            {l.type}
          </span>
        ))}
      </div>

      {/* Month Views */}
      <div className="space-y-6">
        {months.map((month) => {
          const monthEvents = events.filter((e) => e.date.includes(month.split(' ')[0]) || (month === 'January 2025' && e.date.includes('Jan')) || (month === 'February 2025' && e.date.includes('Feb')) || (month === 'March 2025' && e.date.includes('Mar')) || (month === 'April 2025' && e.date.includes('Apr')) || (month === 'May 2025' && e.date.includes('May')))
          if (monthEvents.length === 0) return null
          return (
            <div key={month}>
              <h3 className="text-white font-bold text-lg mb-3">{month}</h3>
              <div className="space-y-2">
                {monthEvents.map((e) => (
                  <div key={e.date + e.title} className={`flex items-center gap-4 p-3 rounded-xl border ${e.color}`}>
                    <span className="text-xs font-mono w-24 shrink-0">{e.date}</span>
                    <span className="text-white text-sm flex-1">{e.title}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${e.color}`}>{e.type}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
