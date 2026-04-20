'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/shared/SectionWrapper'
import AnimatedSection from '@/components/shared/AnimatedSection'

const modules = [
  { title: 'Dashboard', icon: '📊', desc: 'Real-time org overview' },
  { title: 'Members', icon: '👥', desc: 'Profiles, roles & skills' },
  { title: 'Tasks', icon: '✅', desc: 'Projects & assignments' },
  { title: 'AI Reports', icon: '🤖', desc: 'Auto-generated insights' },
  { title: 'Calendar', icon: '📅', desc: 'Scheduling & events' },
  { title: 'Messages', icon: '💬', desc: 'Internal communications' },
]

export default function ProductShowcase() {
  return (
    <SectionWrapper className="bg-white/[0.02]">
      <AnimatedSection className="text-center mb-14">
        <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3">Product Tour</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins mb-4">
          One Platform,{' '}
          <span className="gradient-text">Infinite Possibilities</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          See how every module connects to give you complete visibility and control over your organization.
        </p>
      </AnimatedSection>

      {/* Mock product UI */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
      >
        {/* Browser chrome */}
        <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
          </div>
          <div className="flex-1 max-w-xs mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-xs text-slate-400 text-center">
              app.lvlbase.com/dashboard
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden sm:flex w-48 border-r border-white/10 flex-col p-4 gap-1">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-all ${
                  i === 0 ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{mod.icon}</span>
                <span className="font-medium">{mod.title}</span>
              </motion.div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { label: 'Total Members', value: '1,247', icon: '👥', change: '+12' },
                { label: 'Active Tasks', value: '348', icon: '✅', change: '+5' },
                { label: 'Meetings Today', value: '12', icon: '📅', change: '0' },
                { label: 'AI Actions', value: '89', icon: '🤖', change: '+22' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg">{stat.icon}</span>
                    <span className="text-xs text-emerald-400 font-medium">{stat.change !== '0' ? `+${stat.change}` : '—'}</span>
                  </div>
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Chart mockup */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-sm font-semibold text-white mb-4">Organization Activity</p>
              <div className="flex items-end gap-2 h-24">
                {[30, 55, 40, 80, 65, 90, 75, 85, 60, 95, 70, 88].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-600 to-blue-400 opacity-70"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
