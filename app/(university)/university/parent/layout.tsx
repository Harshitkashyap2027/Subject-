'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { TrendingUp, CreditCard, Bell, ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/university/parent/progress', label: 'Progress', icon: TrendingUp },
  { href: '/university/parent/fees', label: 'Fees', icon: CreditCard },
  { href: '/university/parent/notifications', label: 'Notifications', icon: Bell },
]

export default function ParentLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen bg-[#0f172a]">
      <aside className="w-64 shrink-0 bg-slate-900 border-r border-white/10 flex flex-col">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-2xl">👨‍👩‍👧</span>
            <div>
              <p className="text-white font-bold text-sm">Parent Portal</p>
              <p className="text-slate-400 text-xs">lvlBase University</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1">
          {navLinks.map(({ href, label, icon: Icon }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                  active
                    ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                )}
              >
                <Icon size={16} />
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-3">
          <div className="flex items-center gap-3 px-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white text-sm font-bold">
              RS
            </div>
            <div>
              <p className="text-white text-sm font-medium">Ramesh Sharma</p>
              <p className="text-slate-400 text-xs">Parent of Rahul Sharma</p>
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
