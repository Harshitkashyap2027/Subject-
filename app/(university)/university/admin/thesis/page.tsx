const theses = [
  { roll: 'CS20B001', name: 'Aryan Kapoor', title: 'Transformer Models for Low-Resource NLP', guide: 'Dr. Priya Mehta', status: 'In Progress', submission: 'Apr 2025', progress: 70 },
  { roll: 'CS20B015', name: 'Sneha Joshi', title: 'Federated Learning for Privacy-Preserving Healthcare', guide: 'Dr. Priya Mehta', status: 'Review', submission: 'Mar 2025', progress: 88 },
  { roll: 'EC20B008', name: 'Vikram Rao', title: 'VLSI Design for 5G Beamforming Algorithms', guide: 'Dr. Sneha Patel', status: 'In Progress', submission: 'May 2025', progress: 55 },
  { roll: 'ME20B022', name: 'Pooja Sharma', title: 'Additive Manufacturing of Titanium Alloys', guide: 'Prof. Anil Dubey', status: 'Submitted', submission: 'Nov 2024', progress: 100 },
  { roll: 'CS20B033', name: 'Rahul Nair', title: 'Graph Neural Networks for Social Network Analysis', guide: 'Dr. Kavya Nair', status: 'In Progress', submission: 'Apr 2025', progress: 45 },
  { roll: 'MBA20B005', name: 'Divya Singh', title: 'ESG Metrics and Financial Performance in Indian Firms', guide: 'Prof. Rajesh Sharma', status: 'Review', submission: 'Feb 2025', progress: 82 },
]

const statusStyle: Record<string, string> = {
  'In Progress': 'bg-blue-500/20 text-blue-400',
  'Review': 'bg-amber-500/20 text-amber-400',
  'Submitted': 'bg-emerald-500/20 text-emerald-400',
  'Approved': 'bg-violet-500/20 text-violet-400',
}

export default function ThesisPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-rose-600/20 to-orange-600/20 border border-rose-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-3">
          Final Year Projects
        </span>
        <h1 className="text-3xl font-bold text-white">Thesis Tracker</h1>
        <p className="text-slate-400 mt-1">Track all final year student thesis submissions and reviews.</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Total Students', value: '342', color: 'text-rose-400' },
          { label: 'In Progress', value: '248', color: 'text-blue-400' },
          { label: 'Under Review', value: '62', color: 'text-amber-400' },
          { label: 'Submitted', value: '32', color: 'text-emerald-400' },
        ].map((s) => (
          <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-slate-400 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-white font-semibold text-lg">Thesis List</h2>
        {theses.map((t) => (
          <div key={t.roll} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-slate-500 font-mono">{t.roll}</span>
                  <span className="text-white font-semibold">{t.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${statusStyle[t.status]}`}>{t.status}</span>
                </div>
                <p className="text-slate-300 text-sm italic">&ldquo;{t.title}&rdquo;</p>
                <div className="flex gap-4 mt-1 text-xs text-slate-400">
                  <span>Guide: {t.guide}</span>
                  <span>Submission: {t.submission}</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Progress</span>
                <span className="text-white font-medium">{t.progress}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full">
                <div
                  className={`h-full rounded-full ${t.progress >= 80 ? 'bg-emerald-500' : t.progress >= 50 ? 'bg-blue-500' : 'bg-amber-500'}`}
                  style={{ width: `${t.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
