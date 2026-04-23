import Link from 'next/link'

const roles = [
  {
    icon: '🎓',
    title: 'Student Portal',
    description: 'Access your courses, assignments, exams, credits, internships, placement drive, and skill DNA all in one place.',
    href: './university/student/dashboard',
    gradient: 'from-violet-600 to-blue-600',
    border: 'border-violet-500/30',
    glow: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]',
    features: ['Course Management', 'Assignments & Exams', 'Skill DNA & Career', 'Internship Tracker'],
  },
  {
    icon: '👨‍🏫',
    title: 'Faculty Portal',
    description: 'Manage your courses, track attendance, conduct exams, publish results, and manage research projects.',
    href: './university/faculty/dashboard',
    gradient: 'from-blue-600 to-cyan-600',
    border: 'border-blue-500/30',
    glow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]',
    features: ['Course & Attendance', 'Exam Management', 'Research Projects', 'Student Analytics'],
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Parent Portal',
    description: "Stay connected with your child's academic progress, fee payments, and important university notifications.",
    href: './university/parent/progress',
    gradient: 'from-emerald-600 to-teal-600',
    border: 'border-emerald-500/30',
    glow: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]',
    features: ['Academic Progress', 'Fee Payments', 'Attendance Alerts', 'Notifications'],
  },
  {
    icon: '🏫',
    title: 'Admin Portal',
    description: 'Full university management: students, faculty, departments, courses, research, placement, and analytics.',
    href: './university/admin/dashboard',
    gradient: 'from-rose-600 to-orange-600',
    border: 'border-rose-500/30',
    glow: 'hover:shadow-[0_0_40px_rgba(244,63,94,0.3)]',
    features: ['Student & Faculty Mgmt', 'Departments & Courses', 'Research & Thesis', 'Reports & Settings'],
  },
]

export default function UniversityPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] mesh-bg">
      <div className="section-padding container-lg">
        {/* Hero */}
        <div className="text-center pt-20 pb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30 mb-6">
            🏫 lvlBase University System
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Choose Your{' '}
            <span className="gradient-text">Portal</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A comprehensive university management platform. Select your role to access your personalised portal.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto pb-24">
          {roles.map((role) => (
            <Link key={role.title} href={role.href}>
              <div
                className={`relative group bg-white/5 border ${role.border} rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] ${role.glow}`}
              >
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${role.gradient}`} />

                <div className="flex items-start gap-5 mb-6">
                  <div className={`text-5xl p-3 rounded-2xl bg-gradient-to-br ${role.gradient} bg-opacity-10`}>
                    {role.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">{role.title}</h2>
                    <p className="text-slate-400 text-sm leading-relaxed">{role.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {role.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${role.gradient}`} />
                      {f}
                    </div>
                  ))}
                </div>

                <div className={`mt-6 flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent`}>
                  Enter Portal
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
