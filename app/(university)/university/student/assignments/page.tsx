'use client'

import { useState } from 'react'

const assignments = [
  { id: 1, title: 'Binary Search Tree Implementation', subject: 'Data Structures', due: 'Dec 12, 2024', status: 'Pending', description: 'Implement a BST with insert, delete, and traversal operations in C++.' },
  { id: 2, title: 'ER Diagram for Library System', subject: 'DBMS', due: 'Dec 14, 2024', status: 'Pending', description: 'Design a complete ER diagram for a library management system.' },
  { id: 3, title: 'Process Scheduling Simulation', subject: 'Operating Systems', due: 'Dec 10, 2024', status: 'Submitted', description: 'Simulate FCFS, SJF, and Round Robin scheduling algorithms.' },
  { id: 4, title: 'TCP/IP Socket Programming', subject: 'Computer Networks', due: 'Dec 8, 2024', status: 'Graded', description: 'Implement a client-server application using TCP sockets.', marks: '45/50' },
  { id: 5, title: 'Linear Regression Analysis', subject: 'Machine Learning', due: 'Dec 5, 2024', status: 'Graded', description: 'Apply linear regression on the provided housing dataset.', marks: '48/50' },
  { id: 6, title: 'React Portfolio Website', subject: 'Web Technologies Lab', due: 'Dec 20, 2024', status: 'Pending', description: 'Build a personal portfolio using React.js and Tailwind CSS.' },
  { id: 7, title: 'Normalization Exercise', subject: 'DBMS', due: 'Nov 28, 2024', status: 'Graded', description: 'Normalize the given relations to 3NF.', marks: '40/50' },
  { id: 8, title: 'Memory Management Report', subject: 'Operating Systems', due: 'Nov 22, 2024', status: 'Submitted', description: 'Write a report on virtual memory and paging techniques.' },
]

const tabs = ['All', 'Pending', 'Submitted', 'Graded']

const statusStyle: Record<string, string> = {
  Pending: 'bg-amber-500/20 text-amber-400',
  Submitted: 'bg-blue-500/20 text-blue-400',
  Graded: 'bg-emerald-500/20 text-emerald-400',
}

export default function AssignmentsPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? assignments : assignments.filter((a) => a.status === active)

  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-violet-600/20 to-blue-600/20 border border-violet-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-violet-500/20 text-violet-300 border border-violet-500/30 mb-3">
          Tasks
        </span>
        <h1 className="text-3xl font-bold text-white">Assignments</h1>
        <p className="text-slate-400 mt-1">Track all your pending, submitted, and graded tasks.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-amber-400">{assignments.filter((a) => a.status === 'Pending').length}</p>
          <p className="text-slate-400 text-sm">Pending</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-blue-400">{assignments.filter((a) => a.status === 'Submitted').length}</p>
          <p className="text-slate-400 text-sm">Submitted</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-emerald-400">{assignments.filter((a) => a.status === 'Graded').length}</p>
          <p className="text-slate-400 text-sm">Graded</p>
        </div>
      </div>

      {/* Tabs */}
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

      {/* Assignment Cards */}
      <div className="space-y-3">
        {filtered.map((a) => (
          <div key={a.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-semibold">{a.title}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusStyle[a.status]}`}>
                    {a.status}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-2">{a.description}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span>📚 {a.subject}</span>
                  <span>📅 Due: {a.due}</span>
                  {a.marks && <span className="text-emerald-400 font-medium">✓ {a.marks}</span>}
                </div>
              </div>
              {a.status === 'Pending' && (
                <button className="shrink-0 px-4 py-2 rounded-xl bg-violet-600/20 text-violet-300 text-sm border border-violet-500/30 hover:bg-violet-600/30 transition-all">
                  Submit
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
