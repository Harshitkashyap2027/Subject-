const projects = [
  { title: 'Deep Learning for Medical Imaging', pi: 'Dr. Priya Mehta', dept: 'CSE', funding: '₹12L', funder: 'DST', status: 'Active', team: 5, deadline: 'Mar 2026' },
  { title: 'Smart Grid Energy Optimization', pi: 'Prof. Meena Gupta', dept: 'EEE', funding: '₹18L', funder: 'MNRE', status: 'Active', team: 4, deadline: 'Jun 2025' },
  { title: 'NLP for Indic Languages', pi: 'Dr. Kavya Nair', dept: 'CSE', funding: '₹8L', funder: 'UGC', status: 'Active', team: 3, deadline: 'Dec 2025' },
  { title: 'Sustainable Concrete Composites', pi: 'Dr. Arjun Mishra', dept: 'Civil', funding: '₹15L', funder: 'SERB', status: 'Active', team: 6, deadline: 'Sep 2025' },
  { title: 'Blockchain for Supply Chain', pi: 'Prof. Rajan Verma', dept: 'CSE', funding: '₹6L', funder: 'Industry', status: 'Completed', team: 3, deadline: 'Jun 2024' },
]

export default function AdminResearchPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-rose-600/20 to-orange-600/20 border border-rose-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-3">
          R&D Cell
        </span>
        <h1 className="text-3xl font-bold text-white">Research Management</h1>
        <p className="text-slate-400 mt-1">Active research projects, funding details, and team assignments.</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Active Projects', value: '47', color: 'text-blue-400' },
          { label: 'Total Funding', value: '₹3.2 Cr', color: 'text-emerald-400' },
          { label: 'Researchers', value: '128', color: 'text-violet-400' },
          { label: 'Publications (2024)', value: '62', color: 'text-amber-400' },
        ].map((s) => (
          <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-slate-400 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-white font-semibold text-lg">Research Projects</h2>
          <button className="px-4 py-2 rounded-xl bg-rose-600/20 text-rose-300 text-sm border border-rose-500/30 hover:bg-rose-600/30 transition-all">
            + Add Project
          </button>
        </div>
        {projects.map((p) => (
          <div key={p.title} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-rose-500/30 transition-all">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${p.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-500/20 text-slate-400'}`}>
                    {p.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <span>👤 PI: {p.pi}</span>
                  <span>🏫 {p.dept}</span>
                  <span>👥 {p.team} members</span>
                  <span>📅 {p.deadline}</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-emerald-400 font-bold">{p.funding}</p>
                <p className="text-slate-500 text-xs">{p.funder}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
