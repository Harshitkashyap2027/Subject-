import { BookOpen, Award, Clock, Layers } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { label: 'GPA', value: '8.4', sub: 'out of 10', icon: Award, color: 'text-violet-400', bg: 'bg-violet-500/10' },
  { label: 'Credits Earned', value: '72/120', sub: 'total required', icon: Layers, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { label: 'Attendance', value: '89%', sub: 'this semester', icon: Clock, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { label: 'Active Courses', value: '6', sub: 'this semester', icon: BookOpen, color: 'text-amber-400', bg: 'bg-amber-500/10' },
]

const upcomingEvents = [
  { type: 'Exam', title: 'Data Structures Mid-Term', date: 'Dec 15, 2024', time: '10:00 AM', badge: 'bg-red-500/20 text-red-400' },
  { type: 'Assignment', title: 'DBMS Project Submission', date: 'Dec 12, 2024', time: '11:59 PM', badge: 'bg-amber-500/20 text-amber-400' },
  { type: 'Interview', title: 'Infosys Internship Drive', date: 'Dec 18, 2024', time: '9:00 AM', badge: 'bg-blue-500/20 text-blue-400' },
]

const recentGrades = [
  { subject: 'Operating Systems', grade: 'A', credits: 4, status: 'Pass' },
  { subject: 'Computer Networks', grade: 'A+', credits: 4, status: 'Pass' },
  { subject: 'Software Engineering', grade: 'B+', credits: 3, status: 'Pass' },
  { subject: 'Machine Learning', grade: 'A', credits: 3, status: 'Pass' },
]

const quickActions = [
  { label: 'View Timetable', icon: '📅', href: '/university/student/courses' },
  { label: 'Submit Assignment', icon: '📝', href: '/university/student/assignments' },
  { label: 'Check Results', icon: '📊', href: '/university/student/exams' },
]

export default function StudentDashboard() {
  return (
    <div className="p-8 space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-violet-600/20 to-blue-600/20 border border-violet-500/20 rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-white mb-1">Welcome back, Rahul 👋</h1>
        <p className="text-slate-400">You have 2 upcoming deadlines this week. Stay on track!</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
              <s.icon size={20} className={s.color} />
            </div>
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-white text-sm font-medium">{s.label}</p>
            <p className="text-slate-500 text-xs">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Events */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold mb-4 text-lg">Upcoming Events</h2>
          <div className="space-y-3">
            {upcomingEvents.map((ev) => (
              <div key={ev.title} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${ev.badge} shrink-0 mt-0.5`}>
                  {ev.type}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{ev.title}</p>
                  <p className="text-slate-400 text-xs">{ev.date} · {ev.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Grades */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold mb-4 text-lg">Recent Grades</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-slate-500 text-xs border-b border-white/5">
                <th className="text-left pb-2">Subject</th>
                <th className="text-center pb-2">Grade</th>
                <th className="text-center pb-2">Credits</th>
                <th className="text-right pb-2">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentGrades.map((g) => (
                <tr key={g.subject}>
                  <td className="py-2.5 text-slate-300">{g.subject}</td>
                  <td className="py-2.5 text-center text-violet-400 font-bold">{g.grade}</td>
                  <td className="py-2.5 text-center text-slate-400">{g.credits}</td>
                  <td className="py-2.5 text-right">
                    <span className="px-2 py-0.5 rounded-full text-xs bg-emerald-500/20 text-emerald-400">
                      {g.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-white font-semibold mb-4 text-lg">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-4">
          {quickActions.map((a) => (
            <Link key={a.label} href={a.href}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 hover:border-violet-500/30 transition-all cursor-pointer group">
                <div className="text-3xl mb-2">{a.icon}</div>
                <p className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{a.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
