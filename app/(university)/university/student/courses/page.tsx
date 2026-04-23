'use client'

import { useState } from 'react'

const courses = [
  { code: 'CS301', name: 'Data Structures & Algorithms', faculty: 'Dr. Priya Mehta', credits: 4, attendance: 88, progress: 72, type: 'Core' },
  { code: 'CS302', name: 'Database Management Systems', faculty: 'Prof. Rajan Verma', credits: 4, attendance: 92, progress: 65, type: 'Core' },
  { code: 'CS303', name: 'Operating Systems', faculty: 'Dr. Sneha Patel', credits: 4, attendance: 85, progress: 80, type: 'Core' },
  { code: 'CS304', name: 'Computer Networks', faculty: 'Prof. Anil Dubey', credits: 3, attendance: 78, progress: 55, type: 'Core' },
  { code: 'CS401', name: 'Machine Learning', faculty: 'Dr. Kavya Nair', credits: 3, attendance: 95, progress: 90, type: 'Elective' },
  { code: 'CS402', name: 'Web Technologies Lab', faculty: 'Prof. Rahul Singh', credits: 2, attendance: 100, progress: 60, type: 'Lab' },
]

const tabs = ['All', 'Core', 'Elective', 'Lab']

export default function CoursesPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? courses : courses.filter((c) => c.type === active)

  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-violet-600/20 to-blue-600/20 border border-violet-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-violet-500/20 text-violet-300 border border-violet-500/30 mb-3">
          Semester 5
        </span>
        <h1 className="text-3xl font-bold text-white">My Courses</h1>
        <p className="text-slate-400 mt-1">6 courses enrolled · 20 total credits</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-violet-400">6</p>
          <p className="text-slate-400 text-sm">Total Courses</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-blue-400">20</p>
          <p className="text-slate-400 text-sm">Total Credits</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-emerald-400">89.7%</p>
          <p className="text-slate-400 text-sm">Avg Attendance</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              active === t
                ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30'
                : 'text-slate-400 hover:text-white bg-white/5 border border-white/10'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((c) => (
          <div key={c.code} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-violet-500/30 transition-all">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded">{c.code}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    c.type === 'Core' ? 'bg-blue-500/20 text-blue-400' :
                    c.type === 'Elective' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-emerald-500/20 text-emerald-400'
                  }`}>{c.type}</span>
                </div>
                <h3 className="text-white font-semibold">{c.name}</h3>
                <p className="text-slate-400 text-xs mt-0.5">{c.faculty} · {c.credits} Credits</p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Attendance</span>
                  <span className={c.attendance < 80 ? 'text-red-400' : 'text-emerald-400'}>{c.attendance}%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full">
                  <div
                    className={`h-full rounded-full ${c.attendance < 80 ? 'bg-red-500' : 'bg-emerald-500'}`}
                    style={{ width: `${c.attendance}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Course Progress</span>
                  <span className="text-violet-400">{c.progress}%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full">
                  <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500" style={{ width: `${c.progress}%` }} />
                </div>
              </div>
            </div>

            <button className="w-full py-2 rounded-xl bg-violet-600/20 text-violet-300 text-sm font-medium border border-violet-500/30 hover:bg-violet-600/30 transition-all">
              View Material
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
