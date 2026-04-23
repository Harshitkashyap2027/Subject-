const qualifications = [
  { degree: 'Ph.D. in Computer Science', institute: 'IIT Delhi', year: '2014' },
  { degree: 'M.Tech in CSE', institute: 'NIT Trichy', year: '2010' },
  { degree: 'B.E. in Computer Science', institute: 'Pune University', year: '2008' },
]

export default function FacultyProfilePage() {
  return (
    <div className="p-8 space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/20 rounded-2xl p-8">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-2xl font-bold shrink-0">
            PM
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Dr. Priya Mehta</h1>
            <p className="text-slate-400 mt-1">Associate Professor · Computer Science & Engineering</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/20 text-blue-300">Faculty ID: CS2014PM</span>
              <span className="px-2 py-0.5 rounded-full text-xs bg-emerald-500/20 text-emerald-400">Active</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact & Personal */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-4">Contact Information</h2>
          <div className="space-y-3">
            {[
              { label: 'Email', value: 'priya.mehta@university.edu' },
              { label: 'Phone', value: '+91 99887 76655' },
              { label: 'Office', value: 'CS Block, Room 302' },
              { label: 'Office Hours', value: 'Mon & Thu 2:00–4:00 PM' },
              { label: 'Joining Date', value: 'August 2014' },
            ].map((item) => (
              <div key={item.label} className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-400 text-sm">{item.label}</span>
                <span className="text-white text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Qualifications */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-4">Academic Qualifications</h2>
          <div className="space-y-3">
            {qualifications.map((q) => (
              <div key={q.degree} className="p-3 bg-white/5 rounded-xl">
                <p className="text-white text-sm font-medium">{q.degree}</p>
                <p className="text-slate-400 text-xs mt-0.5">{q.institute} · {q.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Courses Teaching */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-4">Courses Teaching</h2>
          <div className="space-y-2">
            {[
              'CS301 - Data Structures & Algorithms',
              'CS302 - Database Management Systems',
              'CS501 - Machine Learning',
              'CS502 - Algorithm Design',
            ].map((c) => (
              <div key={c} className="flex items-center gap-2 p-2 rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span className="text-slate-300 text-sm">{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Research Interests */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-4">Research Interests</h2>
          <div className="flex flex-wrap gap-2">
            {['Machine Learning', 'Deep Learning', 'Medical Imaging', 'NLP', 'Blockchain', 'Federated Learning', 'Computer Vision', 'IoT Security'].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300 border border-blue-500/20">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
