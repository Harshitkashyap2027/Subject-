'use client'

import { useState } from 'react'

const courseTabs = ['CS301 - DSA', 'CS302 - DBMS', 'CS501 - ML', 'CS502 - Algo']

const students = [
  { roll: 'CS21B001', name: 'Aarav Patel', attendance: 92, status: 'Present' },
  { roll: 'CS21B002', name: 'Bhavna Singh', attendance: 88, status: 'Present' },
  { roll: 'CS21B003', name: 'Chirag Mehta', attendance: 74, status: 'Absent' },
  { roll: 'CS21B004', name: 'Divya Rao', attendance: 95, status: 'Present' },
  { roll: 'CS21B005', name: 'Eshan Kumar', attendance: 68, status: 'Late' },
  { roll: 'CS21B006', name: 'Farida Shaikh', attendance: 90, status: 'Present' },
  { roll: 'CS21B007', name: 'Gaurav Verma', attendance: 82, status: 'Present' },
  { roll: 'CS21B008', name: 'Harsh Agarwal', attendance: 71, status: 'Absent' },
]

const recentRecords = [
  { date: 'Dec 9, 2024', present: 42, absent: 3, rate: '93%' },
  { date: 'Dec 7, 2024', present: 40, absent: 5, rate: '89%' },
  { date: 'Dec 5, 2024', present: 43, absent: 2, rate: '96%' },
]

export default function AttendancePage() {
  const [activeTab, setActiveTab] = useState(courseTabs[0])

  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-3">
          Today: Dec 10, 2024
        </span>
        <h1 className="text-3xl font-bold text-white">Mark Attendance</h1>
        <p className="text-slate-400 mt-1">Record student attendance for your classes.</p>
      </div>

      {/* Course Selector */}
      <div className="flex gap-2 flex-wrap">
        {courseTabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === t
                ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                : 'text-slate-400 hover:text-white bg-white/5 border border-white/10'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-emerald-400">38</p>
          <p className="text-slate-400 text-sm">Present</p>
        </div>
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-red-400">5</p>
          <p className="text-slate-400 text-sm">Absent</p>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-amber-400">2</p>
          <p className="text-slate-400 text-sm">Late</p>
        </div>
      </div>

      {/* Student List */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-semibold text-lg">Student List</h2>
          <button className="px-4 py-2 rounded-xl bg-blue-600/20 text-blue-300 text-sm border border-blue-500/30 hover:bg-blue-600/30 transition-all">
            Save Attendance
          </button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-500 text-xs border-b border-white/10">
              <th className="text-left pb-3">Roll No</th>
              <th className="text-left pb-3">Name</th>
              <th className="text-center pb-3">Overall %</th>
              <th className="text-center pb-3">Today</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {students.map((s) => (
              <tr key={s.roll} className="hover:bg-white/5">
                <td className="py-3 text-slate-400 font-mono text-xs">{s.roll}</td>
                <td className="py-3 text-white">{s.name}</td>
                <td className="py-3 text-center">
                  <span className={`text-xs font-medium ${s.attendance < 75 ? 'text-red-400' : 'text-emerald-400'}`}>
                    {s.attendance}%
                  </span>
                </td>
                <td className="py-3 text-center">
                  <div className="flex justify-center gap-1">
                    {(['Present', 'Absent', 'Late'] as const).map((opt) => (
                      <button
                        key={opt}
                        className={`px-2 py-0.5 rounded text-xs transition-all ${
                          s.status === opt
                            ? opt === 'Present' ? 'bg-emerald-500/30 text-emerald-300'
                            : opt === 'Absent' ? 'bg-red-500/30 text-red-300'
                            : 'bg-amber-500/30 text-amber-300'
                            : 'bg-white/5 text-slate-400 hover:bg-white/10'
                        }`}
                      >
                        {opt[0]}
                      </button>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Records */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-white font-semibold text-lg mb-4">Recent Records</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-500 text-xs border-b border-white/10">
              <th className="text-left pb-3">Date</th>
              <th className="text-center pb-3">Present</th>
              <th className="text-center pb-3">Absent</th>
              <th className="text-right pb-3">Rate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {recentRecords.map((r) => (
              <tr key={r.date} className="hover:bg-white/5">
                <td className="py-3 text-white">{r.date}</td>
                <td className="py-3 text-center text-emerald-400">{r.present}</td>
                <td className="py-3 text-center text-red-400">{r.absent}</td>
                <td className="py-3 text-right text-blue-400 font-medium">{r.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
