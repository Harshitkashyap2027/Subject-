const semesterCredits = [
  { sem: 'Semester 1', core: 16, elective: 0, lab: 4, total: 20 },
  { sem: 'Semester 2', core: 14, elective: 2, lab: 4, total: 20 },
  { sem: 'Semester 3', core: 12, elective: 4, lab: 4, total: 20 },
  { sem: 'Semester 4', core: 6, elective: 10, lab: 0, total: 16 },
]

const categories = [
  { label: 'Core Subjects', earned: 48, required: 72, color: 'from-violet-600 to-violet-400', bg: 'bg-violet-500/10', text: 'text-violet-400' },
  { label: 'Elective Subjects', earned: 16, required: 36, color: 'from-blue-600 to-blue-400', bg: 'bg-blue-500/10', text: 'text-blue-400' },
  { label: 'Lab / Practical', earned: 8, required: 12, color: 'from-cyan-600 to-cyan-400', bg: 'bg-cyan-500/10', text: 'text-cyan-400' },
]

export default function CreditsPage() {
  const earned = 72
  const total = 120
  const pct = Math.round((earned / total) * 100)

  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-violet-600/20 to-blue-600/20 border border-violet-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-violet-500/20 text-violet-300 border border-violet-500/30 mb-3">
          Academic Progress
        </span>
        <h1 className="text-3xl font-bold text-white">Credits Tracker</h1>
        <p className="text-slate-400 mt-1">Monitor your academic credit progress toward graduation.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Big Progress */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center">
          <div className="relative w-40 h-40 mb-4">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
              <circle
                cx="50" cy="50" r="42" fill="none"
                stroke="url(#grad)" strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 42}`}
                strokeDashoffset={`${2 * Math.PI * 42 * (1 - pct / 100)}`}
              />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white">{earned}</span>
              <span className="text-slate-400 text-xs">of {total}</span>
            </div>
          </div>
          <p className="text-white font-semibold text-lg">Credits Earned</p>
          <p className="text-slate-400 text-sm">{pct}% complete · {total - earned} remaining</p>
        </div>

        {/* Category Breakdown */}
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
          <h2 className="text-white font-semibold text-lg">Credits by Category</h2>
          {categories.map((cat) => {
            const catPct = Math.round((cat.earned / cat.required) * 100)
            return (
              <div key={cat.label} className={`p-4 rounded-xl ${cat.bg} border border-white/5`}>
                <div className="flex justify-between mb-2">
                  <span className="text-white text-sm font-medium">{cat.label}</span>
                  <span className={`text-sm font-bold ${cat.text}`}>{cat.earned}/{cat.required}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full">
                  <div className={`h-full rounded-full bg-gradient-to-r ${cat.color}`} style={{ width: `${catPct}%` }} />
                </div>
                <p className="text-slate-400 text-xs mt-1">{cat.required - cat.earned} credits still needed</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Semester-wise Table */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-white font-semibold text-lg mb-4">Semester-wise Breakdown</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-500 text-xs border-b border-white/10">
              <th className="text-left pb-3">Semester</th>
              <th className="text-center pb-3">Core</th>
              <th className="text-center pb-3">Elective</th>
              <th className="text-center pb-3">Lab</th>
              <th className="text-center pb-3">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {semesterCredits.map((s) => (
              <tr key={s.sem} className="hover:bg-white/5">
                <td className="py-3 text-white font-medium">{s.sem}</td>
                <td className="py-3 text-center text-violet-400">{s.core}</td>
                <td className="py-3 text-center text-blue-400">{s.elective}</td>
                <td className="py-3 text-center text-cyan-400">{s.lab}</td>
                <td className="py-3 text-center text-white font-bold">{s.total}</td>
              </tr>
            ))}
            <tr className="border-t border-violet-500/20 bg-violet-500/5">
              <td className="py-3 text-violet-300 font-bold">Total Earned</td>
              <td className="py-3 text-center text-violet-400 font-bold">48</td>
              <td className="py-3 text-center text-blue-400 font-bold">16</td>
              <td className="py-3 text-center text-cyan-400 font-bold">8</td>
              <td className="py-3 text-center text-white font-bold">72</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
