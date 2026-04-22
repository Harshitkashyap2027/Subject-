const internships = [
  { student: 'Rahul Sharma', roll: 'CS21B042', company: 'Wipro', role: 'Frontend Intern', start: 'Jan 2025', end: 'Jul 2025', status: 'Approved' },
  { student: 'Aarav Patel', roll: 'CS21B001', company: 'Google', role: 'SWE Intern', start: 'May 2025', end: 'Aug 2025', status: 'Pending' },
  { student: 'Sneha Rao', roll: 'EC21B012', company: 'ISRO', role: 'Research Intern', start: 'Dec 2024', end: 'Jun 2025', status: 'Active' },
  { student: 'Karan Gupta', roll: 'ME21B005', company: 'TATA Motors', role: 'Design Intern', start: 'Jan 2025', end: 'Jun 2025', status: 'Approved' },
]

const companies = [
  { name: 'Wipro Limited', slots: 20, filled: 12, domain: 'Software', stipend: '₹15,000/mo' },
  { name: 'ISRO', slots: 8, filled: 6, domain: 'Research', stipend: '₹12,000/mo' },
  { name: 'Tech Mahindra', slots: 15, filled: 10, domain: 'IT/Consulting', stipend: '₹18,000/mo' },
  { name: 'DRDO', slots: 5, filled: 3, domain: 'Defence R&D', stipend: '₹10,000/mo' },
  { name: 'TATA Motors', slots: 10, filled: 7, domain: 'Manufacturing', stipend: '₹14,000/mo' },
]

const statusStyle: Record<string, string> = {
  'Active': 'bg-emerald-500/20 text-emerald-400',
  'Approved': 'bg-blue-500/20 text-blue-400',
  'Pending': 'bg-amber-500/20 text-amber-400',
}

export default function AdminInternshipsPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-rose-600/20 to-orange-600/20 border border-rose-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-3">
          Career Development
        </span>
        <h1 className="text-3xl font-bold text-white">Internship System</h1>
        <p className="text-slate-400 mt-1">Manage partner companies, active internships, and student assignments.</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Partner Companies', value: '35', color: 'text-rose-400' },
          { label: 'Active Internships', value: '142', color: 'text-emerald-400' },
          { label: 'Pending Approvals', value: '28', color: 'text-amber-400' },
          { label: 'Total Slots', value: '380', color: 'text-blue-400' },
        ].map((s) => (
          <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-slate-400 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Partner Companies */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-white font-semibold text-lg mb-4">Partner Companies</h2>
        <div className="space-y-3">
          {companies.map((c) => (
            <div key={c.name} className="flex items-center gap-4 p-3 bg-white/5 rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-white font-bold text-sm shrink-0">
                {c.name[0]}
              </div>
              <div className="flex-1">
                <p className="text-white font-medium text-sm">{c.name}</p>
                <p className="text-slate-400 text-xs">{c.domain} · {c.stipend}</p>
              </div>
              <div className="text-right">
                <p className="text-white text-sm font-medium">{c.filled}/{c.slots} slots</p>
                <div className="w-20 h-1.5 bg-white/10 rounded-full mt-1">
                  <div className="h-full rounded-full bg-emerald-500" style={{ width: `${(c.filled / c.slots) * 100}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Internships */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-white font-semibold text-lg mb-4">Student Internship Assignments</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-500 text-xs border-b border-white/10">
              <th className="text-left pb-3">Student</th>
              <th className="text-left pb-3">Roll No</th>
              <th className="text-left pb-3">Company</th>
              <th className="text-left pb-3">Role</th>
              <th className="text-left pb-3">Duration</th>
              <th className="text-right pb-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {internships.map((i) => (
              <tr key={i.roll + i.company} className="hover:bg-white/5">
                <td className="py-3 text-white font-medium">{i.student}</td>
                <td className="py-3 text-slate-400 font-mono text-xs">{i.roll}</td>
                <td className="py-3 text-slate-300">{i.company}</td>
                <td className="py-3 text-slate-400">{i.role}</td>
                <td className="py-3 text-slate-400 text-xs">{i.start} – {i.end}</td>
                <td className="py-3 text-right">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${statusStyle[i.status]}`}>{i.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
