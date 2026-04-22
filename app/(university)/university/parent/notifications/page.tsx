const notifications = [
  { id: 1, category: 'Attendance', icon: '⚠️', title: 'Low Attendance Warning', message: 'Rahul\'s attendance in Computer Networks has dropped to 78%. Minimum required is 75%.', time: '2 hours ago', read: false, color: 'border-amber-500/20 bg-amber-500/5' },
  { id: 2, category: 'Academic', icon: '📊', title: 'Mid-Term Results Published', message: 'Semester 5 mid-term results are now available. Rahul scored 88% overall.', time: '1 day ago', read: false, color: 'border-blue-500/20 bg-blue-500/5' },
  { id: 3, category: 'Fee', icon: '💰', title: 'Fee Payment Reminder', message: 'Semester 6 fees of ₹68,000 are due on January 10, 2025.', time: '2 days ago', read: true, color: 'border-red-500/20 bg-red-500/5' },
  { id: 4, category: 'Events', icon: '🎉', title: 'Annual Tech Fest - Technova 2025', message: 'University annual technical festival will be held from Jan 20-22, 2025. Students can register teams.', time: '3 days ago', read: true, color: 'border-violet-500/20 bg-violet-500/5' },
  { id: 5, category: 'Academic', icon: '📅', title: 'Exam Schedule Released', message: 'End-semester examinations schedule for Semester 5 has been published. Exams start Dec 15, 2024.', time: '5 days ago', read: true, color: 'border-blue-500/20 bg-blue-500/5' },
  { id: 6, category: 'Fee', icon: '✅', title: 'Fee Payment Confirmed', message: 'Semester 5 tuition and hostel fee payment of ₹63,000 has been confirmed successfully.', time: '1 week ago', read: true, color: 'border-emerald-500/20 bg-emerald-500/5' },
]

const categoryColors: Record<string, string> = {
  Academic: 'bg-blue-500/20 text-blue-400',
  Fee: 'bg-amber-500/20 text-amber-400',
  Attendance: 'bg-red-500/20 text-red-400',
  Events: 'bg-violet-500/20 text-violet-400',
}

export default function NotificationsPage() {
  const unread = notifications.filter((n) => !n.read).length

  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border border-emerald-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-3">
          {unread} Unread
        </span>
        <h1 className="text-3xl font-bold text-white">Notifications</h1>
        <p className="text-slate-400 mt-1">Stay updated with all academic, fee, and attendance alerts.</p>
      </div>

      {/* Category Summary */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: 'Academic', count: 2, color: 'text-blue-400' },
          { label: 'Fee', count: 2, color: 'text-amber-400' },
          { label: 'Attendance', count: 1, color: 'text-red-400' },
          { label: 'Events', count: 1, color: 'text-violet-400' },
        ].map((c) => (
          <div key={c.label} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
            <p className={`text-xl font-bold ${c.color}`}>{c.count}</p>
            <p className="text-slate-400 text-xs">{c.label}</p>
          </div>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`border rounded-2xl p-5 transition-all hover:bg-white/10 ${n.color} ${!n.read ? 'ring-1 ring-white/5' : ''}`}
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl shrink-0">{n.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-semibold text-sm">{n.title}</h3>
                  {!n.read && (
                    <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                  )}
                  <span className={`px-2 py-0.5 rounded-full text-xs ml-auto ${categoryColors[n.category]}`}>
                    {n.category}
                  </span>
                </div>
                <p className="text-slate-400 text-sm">{n.message}</p>
                <p className="text-slate-500 text-xs mt-2">{n.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
