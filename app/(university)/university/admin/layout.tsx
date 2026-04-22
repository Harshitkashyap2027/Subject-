'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, Users, GraduationCap, Building2, BookOpen, FileText, UserCheck, Calendar, FlaskConical, ScrollText, TrendingUp, Briefcase, Handshake, BarChart2, Settings, ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

const sections = [
  {
    label: '👥 Users',
    links: [
      { href: '/university/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { href: '/university/admin/students', label: 'Students', icon: Users },
      { href: '/university/admin/faculty', label: 'Faculty', icon: GraduationCap },
    ],
  },
  {
    label: '🎓 Academic',
    links: [
      { href: '/university/admin/departments', label: 'Departments', icon: Building2 },
      { href: '/university/admin/courses', label: 'Courses', icon: BookOpen },
      { href: '/university/admin/exams', label: 'Exams', icon: FileText },
      { href: '/university/admin/attendance', label: 'Attendance', icon: UserCheck },
      { href: '/university/admin/calendar', label: 'Calendar', icon: Calendar },
    ],
  },
  {
    label: '🔬 Research',
    links: [
      { href: '/university/admin/research', label: 'Research', icon: FlaskConical },
      { href: '/university/admin/thesis', label: 'Thesis', icon: ScrollText },
    ],
  },
  {
    label: '💼 Career',
    links: [
      { href: '/university/admin/placement', label: 'Placement', icon: TrendingUp },
      { href: '/university/admin/internships', label: 'Internships', icon: Briefcase },
      { href: '/university/admin/collaboration', label: 'Collaboration', icon: Handshake },
    ],
  },
  {
    label: '📊 System',
    links: [
      { href: '/university/admin/reports', label: 'Reports', icon: BarChart2 },
      { href: '/university/admin/settings', label: 'Settings', icon: Settings },
    ],
  },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen bg-[#0f172a]">
      <aside className="w-64 shrink-0 bg-slate-900 border-r border-white/10 flex flex-col overflow-y-auto">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏫</span>
            <div>
              <p className="text-white font-bold text-sm">University Admin</p>
              <p className="text-slate-400 text-xs">lvlBase University</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-5">
          {sections.map((section) => (
            <div key={section.label}>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider px-3 mb-2">
                {section.label}
              </p>
              <div className="space-y-1">
                {section.links.map(({ href, label, icon: Icon }) => {
                  const active = pathname === href
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={cn(
                        'flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                        active
                          ? 'bg-rose-600/20 text-rose-300 border border-rose-500/30'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      )}
                    >
                      <Icon size={15} />
                      {label}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-3">
          <div className="flex items-center gap-3 px-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-600 to-orange-600 flex items-center justify-center text-white text-sm font-bold">
              AK
            </div>
            <div>
              <p className="text-white text-sm font-medium">Prof. Anil Kumar</p>
              <p className="text-slate-400 text-xs">Vice Chancellor</p>
            </div>
          </div>
          <Link
            href="/university"
            className="flex items-center gap-2 text-slate-400 hover:text-white text-xs px-2 transition-colors"
          >
            <ArrowLeft size={12} />
            Back to Portal
          </Link>
        </div>
      </aside>

      <main className="flex-1 bg-[#0f172a] min-h-screen overflow-auto">
        {children}
      </main>
    </div>
  )
}
