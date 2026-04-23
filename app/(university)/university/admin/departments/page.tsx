const departments = [
  { name: 'Computer Science & Engineering', code: 'CSE', hod: 'Prof. Anil Kumar', students: 920, faculty: 42, color: 'from-violet-600 to-blue-600', border: 'border-violet-500/30' },
  { name: 'Electronics & Communication', code: 'ECE', hod: 'Dr. Sneha Patel', students: 780, faculty: 35, color: 'from-blue-600 to-cyan-600', border: 'border-blue-500/30' },
  { name: 'Mechanical Engineering', code: 'ME', hod: 'Prof. Rajan Verma', students: 640, faculty: 30, color: 'from-cyan-600 to-teal-600', border: 'border-cyan-500/30' },
  { name: 'Civil Engineering', code: 'Civil', hod: 'Dr. Arjun Mishra', students: 520, faculty: 25, color: 'from-emerald-600 to-green-600', border: 'border-emerald-500/30' },
  { name: 'Electrical Engineering', code: 'EEE', hod: 'Prof. Meena Gupta', students: 480, faculty: 22, color: 'from-amber-600 to-yellow-600', border: 'border-amber-500/30' },
  { name: 'Master of Business Admin', code: 'MBA', hod: 'Prof. Rajesh Sharma', students: 360, faculty: 28, color: 'from-rose-600 to-pink-600', border: 'border-rose-500/30' },
  { name: 'Information Technology', code: 'IT', hod: 'Dr. Kavya Nair', students: 420, faculty: 20, color: 'from-indigo-600 to-purple-600', border: 'border-indigo-500/30' },
  { name: 'Chemical Engineering', code: 'CHE', hod: 'Prof. Sandeep Rao', students: 300, faculty: 18, color: 'from-orange-600 to-red-600', border: 'border-orange-500/30' },
]

export default function DepartmentsPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-rose-600/20 to-orange-600/20 border border-rose-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-3">
          Academic Structure
        </span>
        <h1 className="text-3xl font-bold text-white">Departments</h1>
        <p className="text-slate-400 mt-1">12 departments · 4,820 students · 240 faculty</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Departments', value: '12', color: 'text-rose-400' },
          { label: 'UG Programs', value: '8', color: 'text-blue-400' },
          { label: 'PG Programs', value: '4', color: 'text-violet-400' },
          { label: 'PhD Programs', value: '6', color: 'text-emerald-400' },
        ].map((s) => (
          <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-slate-400 text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {departments.map((d) => (
          <div key={d.code} className={`bg-white/5 border ${d.border} rounded-2xl p-5 hover:bg-white/10 transition-all`}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${d.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                {d.code}
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold">{d.name}</h3>
                <p className="text-slate-400 text-xs mt-0.5">HOD: {d.hod}</p>
                <div className="flex gap-4 mt-3 text-xs">
                  <span className="text-slate-300">👥 <span className="text-white font-medium">{d.students}</span> Students</span>
                  <span className="text-slate-300">👨‍🏫 <span className="text-white font-medium">{d.faculty}</span> Faculty</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
