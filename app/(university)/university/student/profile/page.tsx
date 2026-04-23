const docs = [
  { name: 'Aadhar Card', status: 'Verified', date: 'Aug 2022' },
  { name: '10th Marksheet', status: 'Verified', date: 'Aug 2022' },
  { name: '12th Marksheet', status: 'Verified', date: 'Aug 2022' },
  { name: 'Transfer Certificate', status: 'Verified', date: 'Aug 2022' },
  { name: 'Character Certificate', status: 'Pending', date: 'Sep 2024' },
  { name: 'Medical Certificate', status: 'Verified', date: 'Aug 2022' },
]

export default function StudentProfilePage() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600/20 to-blue-600/20 border border-violet-500/20 rounded-2xl p-8">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shrink-0">
            RS
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Rahul Sharma</h1>
            <p className="text-slate-400 mt-1">Roll No: CS21B042 · Computer Science & Engineering</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="px-2 py-0.5 rounded-full text-xs bg-violet-500/20 text-violet-300">3rd Year</span>
              <span className="px-2 py-0.5 rounded-full text-xs bg-emerald-500/20 text-emerald-400">Active</span>
              <span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/20 text-blue-300">Semester 5</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Info */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-4">Personal Information</h2>
          <div className="space-y-3">
            {[
              { label: 'Date of Birth', value: 'March 15, 2003' },
              { label: 'Email', value: 'rahul.sharma@university.edu' },
              { label: 'Phone', value: '+91 98765 43210' },
              { label: 'Address', value: '42, Sector 18, Noida, UP - 201301' },
              { label: 'Blood Group', value: 'O+' },
              { label: 'Category', value: 'General' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-slate-400 text-sm">{item.label}</span>
                <span className="text-white text-sm font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Info */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-4">Academic Information</h2>
          <div className="space-y-3">
            {[
              { label: 'CGPA', value: '8.4 / 10.0' },
              { label: 'Credits Earned', value: '72 / 120' },
              { label: 'Current Semester', value: '5th Semester' },
              { label: 'Department', value: 'Computer Science & Engineering' },
              { label: 'Programme', value: 'B.Tech (4 Years)' },
              { label: 'Batch', value: '2021 – 2025' },
              { label: 'Enrollment Date', value: 'August 2021' },
              { label: 'Advisor', value: 'Dr. Priya Mehta' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-slate-400 text-sm">{item.label}</span>
                <span className="text-white text-sm font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Documents */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-white font-semibold text-lg mb-4">Documents</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {docs.map((d) => (
            <div key={d.name} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="text-2xl">📄</span>
              <div>
                <p className="text-white text-sm font-medium">{d.name}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className={`text-xs ${d.status === 'Verified' ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {d.status === 'Verified' ? '✓' : '⏳'} {d.status}
                  </span>
                  <span className="text-slate-500 text-xs">{d.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
