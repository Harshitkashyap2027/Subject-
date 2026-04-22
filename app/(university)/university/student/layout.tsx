'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, BookOpen, ClipboardList, FileText, Award, Briefcase, TrendingUp, Dna, User, ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/university/student/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/university/student/courses', label: 'Courses', icon: BookOpen },
  { href: '/university/student/assignments', label: 'Assignments', icon: ClipboardList },
  { href: '/university/student/exams', label: 'Exams', icon: FileText },
  { href: '/university/student/credits', label: 'Credits', icon: Award },
  { href: '/university/student/internships', label: 'Internships', icon: Briefcase },
  { href: '/university/student/placement', label: 'Placement', icon: TrendingUp },
  { href: '/university/student/skill-dna', label: 'Skill DNA', icon: Dna },
  { href: '/university/student/profile', label: 'Profile', icon: User },
]

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen bg-[#0f172a]">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-slate-900 border-r border-white/10 flex flex-col">
        {/* Brand */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            <div>
              <p className="text-white font-bold text-sm">Student Portal</p>
              <p className="text-slate-400 text-xs">lvlBase University</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {navLinks.map(({ href, label, icon: Icon }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                  active
                    ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                )}
              >
                <Icon size={16} />
                {label}
              </Link>
            )
          })}
        </nav>

        {/* User + Back */}
        <div className="p-4 border-t border-white/10 space-y-3">
          <div className="flex items-center gap-3 px-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
              RS
            </div>
            <div>
              <p className="text-white text-sm font-medium">Rahul Sharma</p>
              <p className="text-slate-400 text-xs">CS - 3rd Year</p>
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

      {/* Main */}
      <main className="flex-1 bg-[#0f172a] min-h-screen overflow-auto">
        {children}
      </main>
    </div>
  )
}
