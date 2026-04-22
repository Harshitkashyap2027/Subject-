const projects = [
  { title: 'Deep Learning for Medical Image Analysis', status: 'Active', funding: '₹12 Lakhs', funder: 'DST', team: ['Dr. Mehta', 'Dr. Gupta', '2 PhDs'], deadline: 'Mar 2026' },
  { title: 'Blockchain-based Academic Credential System', status: 'Active', funding: '₹8 Lakhs', funder: 'UGC', team: ['Dr. Mehta', '3 PGs'], deadline: 'Dec 2025' },
  { title: 'NLP for Sentiment Analysis in Hindi', status: 'Completed', funding: '₹5 Lakhs', funder: 'CSIR', team: ['Dr. Mehta', 'Dr. Rao'], deadline: 'Jun 2024' },
]

const publications = [
  { title: 'Attention-based CNNs for Retinal Disease Detection', journal: 'IEEE Transactions on Medical Imaging', year: 2024, citations: 18 },
  { title: 'Federated Learning in Healthcare: A Survey', journal: 'ACM Computing Surveys', year: 2023, citations: 42 },
  { title: 'Efficient Blockchain Sharding for IoT Networks', journal: 'Future Generation Computer Systems', year: 2023, citations: 27 },
]

const conferences = [
  { name: 'NeurIPS 2024', location: 'Vancouver, Canada', date: 'Dec 2024', type: 'Paper Presentation' },
  { name: 'CVPR 2024', location: 'Seattle, USA', date: 'Jun 2024', type: 'Poster' },
  { name: 'ICML Workshop 2023', location: 'Honolulu, USA', date: 'Jul 2023', type: 'Workshop Talk' },
]

export default function ResearchPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-3">
          Research & Innovation
        </span>
        <h1 className="text-3xl font-bold text-white">Research Projects</h1>
        <p className="text-slate-400 mt-1">Manage your research, publications, and conference participations.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-blue-400">2</p>
          <p className="text-slate-400 text-sm">Active Projects</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-violet-400">3</p>
          <p className="text-slate-400 text-sm">Publications</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-emerald-400">87</p>
          <p className="text-slate-400 text-sm">Total Citations</p>
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-4">
        <h2 className="text-white font-semibold text-lg">Active Projects</h2>
        {projects.map((p) => (
          <div key={p.title} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-blue-500/30 transition-all">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${p.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-500/20 text-slate-400'}`}>
                    {p.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <span>💰 {p.funding} ({p.funder})</span>
                  <span>📅 {p.deadline}</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {p.team.map((m) => (
                    <span key={m} className="px-2 py-0.5 rounded-full text-xs bg-white/5 text-slate-300 border border-white/10">{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Publications */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-white font-semibold text-lg mb-4">Publications</h2>
        <div className="space-y-3">
          {publications.map((pub) => (
            <div key={pub.title} className="p-4 bg-white/5 rounded-xl">
              <p className="text-white text-sm font-medium">{pub.title}</p>
              <div className="flex items-center gap-3 mt-1 text-xs text-slate-400">
                <span>{pub.journal}</span>
                <span>·</span>
                <span>{pub.year}</span>
                <span className="text-blue-400">📊 {pub.citations} citations</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conferences */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-white font-semibold text-lg mb-4">Conferences & Workshops</h2>
        <div className="space-y-3">
          {conferences.map((c) => (
            <div key={c.name} className="flex items-center gap-4 p-3 bg-white/5 rounded-xl">
              <span className="text-xl">🎤</span>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{c.name}</p>
                <p className="text-slate-400 text-xs">{c.location} · {c.date}</p>
              </div>
              <span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/20 text-blue-400">{c.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
