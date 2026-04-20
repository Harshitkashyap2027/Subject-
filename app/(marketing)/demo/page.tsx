'use client'

import { useState } from 'react'
import SectionWrapper from '@/components/shared/SectionWrapper'

const roles = [
  { id: 'student', label: 'Student', icon: '🎓' },
  { id: 'teacher', label: 'Teacher', icon: '📚' },
  { id: 'admin', label: 'Admin', icon: '🏢' },
  { id: 'doctor', label: 'Doctor', icon: '🏥' },
  { id: 'hr', label: 'HR Manager', icon: '👔' },
]

const roleData: Record<string, { stats: { label: string; value: string }[]; tasks: string[] }> = {
  student: {
    stats: [{ label: 'Assignments Due', value: '4' }, { label: 'Classes Today', value: '3' }, { label: 'GPA', value: '3.8' }],
    tasks: ['Submit Math homework', 'Prepare for Biology quiz', 'Submit project proposal', 'Attend study group at 5pm'],
  },
  teacher: {
    stats: [{ label: 'Classes Today', value: '4' }, { label: 'Assignments to Grade', value: '28' }, { label: 'Students', value: '120' }],
    tasks: ['Grade History assignments', 'Prepare tomorrow\'s lesson', 'Update gradebook', 'Parent meeting at 4pm'],
  },
  admin: {
    stats: [{ label: 'Open Tickets', value: '12' }, { label: 'Staff Members', value: '87' }, { label: 'Budget Used', value: '68%' }],
    tasks: ['Review Q3 budget report', 'Approve 3 leave requests', 'Board meeting at 2pm', 'Review IT security report'],
  },
  doctor: {
    stats: [{ label: 'Patients Today', value: '18' }, { label: 'Pending Reviews', value: '5' }, { label: 'Appointments', value: '22' }],
    tasks: ['Review lab results for Room 4', 'Patient consultation at 11am', 'Sign off on discharge papers', 'Team rounds at 8am'],
  },
  hr: {
    stats: [{ label: 'Open Positions', value: '7' }, { label: 'Onboarding', value: '3' }, { label: 'Reviews Due', value: '14' }],
    tasks: ['Complete performance reviews', 'Schedule interviews for Dev role', 'Update benefits portal', 'Team culture survey'],
  },
}

export default function DemoPage() {
  const [selectedRole, setSelectedRole] = useState('student')
  const data = roleData[selectedRole]

  return (
    <div>
      <section className="py-24 px-4 mesh-bg text-center">
        <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">Interactive Demo</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white mb-6">
          See lvlBase in{' '}
          <span className="gradient-text">Action</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-4">
          Select a role to preview how different users experience lvlBase.
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-400/10 border border-amber-400/20 rounded-full text-amber-300 text-xs font-medium">
          ⚠️ Sample data — not a live environment
        </div>
      </section>

      <SectionWrapper>
        {/* Role selector */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedRole === role.id
                  ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-glow-primary'
                  : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
              }`}
            >
              <span>{role.icon}</span>
              {role.label}
            </button>
          ))}
        </div>

        {/* Dashboard mock */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-slate-400 text-sm">Viewing as</p>
              <h2 className="text-xl font-bold text-white">{roles.find(r => r.id === selectedRole)?.label} Dashboard</h2>
            </div>
            <span className="px-3 py-1 bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-xs font-medium rounded-full">Demo Mode</span>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {data.stats.map((stat) => (
              <div key={stat.label} className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="text-slate-400 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-slate-400 text-sm font-medium mb-3">Today&apos;s Tasks</p>
            <div className="space-y-2">
              {data.tasks.map((task, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg text-sm text-slate-300">
                  <div className="w-4 h-4 rounded border border-violet-500/50 flex-shrink-0" />
                  {task}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
