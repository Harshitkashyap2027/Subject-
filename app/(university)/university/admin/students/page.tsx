'use client'

import { useState } from 'react'

const students = [
  { roll: 'CS21B042', name: 'Rahul Sharma', dept: 'CSE', year: '3rd', cgpa: 8.4, status: 'Active' },
  { roll: 'CS21B001', name: 'Aarav Patel', dept: 'CSE', year: '3rd', cgpa: 9.1, status: 'Active' },
  { roll: 'EC21B012', name: 'Sneha Rao', dept: 'ECE', year: '3rd', cgpa: 8.7, status: 'Active' },
  { roll: 'ME21B005', name: 'Karan Gupta', dept: 'ME', year: '3rd', cgpa: 7.5, status: 'Active' },
  { roll: 'CS22B015', name: 'Divya Singh', dept: 'CSE', year: '2nd', cgpa: 8.9, status: 'Active' },
  { roll: 'EC22B008', name: 'Arjun Mehta', dept: 'ECE', year: '2nd', cgpa: 7.8, status: 'Active' },
  { roll: 'CS21B033', name: 'Priya Verma', dept: 'CSE', year: '3rd', cgpa: 6.2, status: 'Probation' },
  { roll: 'ME23B022', name: 'Rohit Kumar', dept: 'ME', year: '1st', cgpa: 7.1, status: 'Active' },
]

export default function StudentsPage() {
  const [search, setSearch] = useState('')
  const [dept, setDept] = useState('All')

  const filtered = students.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.roll.toLowerCase().includes(search.toLowerCase())
    const matchDept = dept === 'All' || s.dept === dept
    return matchSearch && matchDept
  })

  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-rose-600/20 to-orange-600/20 border border-rose-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-3">
          User Management
        </span>
        <h1 className="text-3xl font-bold text-white">Students</h1>
        <p className="text-slate-400 mt-1">4,820 total students across 12 departments.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-violet-400">4,820</p>
          <p className="text-slate-400 text-sm">Total Students</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-emerald-400">4,752</p>
          <p className="text-slate-400 text-sm">Active</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-amber-400">68</p>
          <p className="text-slate-400 text-sm">On Probation</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-3 flex-wrap">
        <input
          type="text"
          placeholder="Search by name or roll no..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-48 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-rose-500/50"
        />
        {['All', 'CSE', 'ECE', 'ME', 'Civil', 'MBA'].map((d) => (
          <button
            key={d}
            onClick={() => setDept(d)}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${dept === d ? 'bg-rose-600/20 text-rose-300 border border-rose-500/30' : 'text-slate-400 hover:text-white bg-white/5 border border-white/10'}`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-slate-400 text-sm">Showing {filtered.length} students</p>
          <button className="px-4 py-2 rounded-xl bg-rose-600/20 text-rose-300 text-sm border border-rose-500/30 hover:bg-rose-600/30 transition-all">
            + Add Student
          </button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-500 text-xs border-b border-white/10">
              <th className="text-left pb-3">Roll No</th>
              <th className="text-left pb-3">Name</th>
              <th className="text-left pb-3">Dept</th>
              <th className="text-center pb-3">Year</th>
              <th className="text-center pb-3">CGPA</th>
              <th className="text-center pb-3">Status</th>
              <th className="text-right pb-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filtered.map((s) => (
              <tr key={s.roll} className="hover:bg-white/5">
                <td className="py-3 text-slate-400 font-mono text-xs">{s.roll}</td>
                <td className="py-3 text-white font-medium">{s.name}</td>
                <td className="py-3 text-slate-300">{s.dept}</td>
                <td className="py-3 text-center text-slate-400">{s.year}</td>
                <td className="py-3 text-center text-violet-400 font-bold">{s.cgpa}</td>
                <td className="py-3 text-center">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${s.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                    {s.status}
                  </span>
                </td>
                <td className="py-3 text-right">
                  <button className="text-xs text-blue-400 hover:text-blue-300 mr-3">View</button>
                  <button className="text-xs text-slate-400 hover:text-white">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
