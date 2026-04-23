const faculty = [
  { id: 'CS2014PM', name: 'Dr. Priya Mehta', dept: 'CSE', designation: 'Associate Professor', courses: 4, status: 'Active' },
  { id: 'CS2010RV', name: 'Prof. Rajan Verma', dept: 'CSE', designation: 'Professor', courses: 3, status: 'Active' },
  { id: 'EC2015SP', name: 'Dr. Sneha Patel', dept: 'ECE', designation: 'Assistant Professor', courses: 4, status: 'Active' },
  { id: 'ME2012AD', name: 'Prof. Anil Dubey', dept: 'ME', designation: 'Professor', courses: 3, status: 'Active' },
  { id: 'CS2018KN', name: 'Dr. Kavya Nair', dept: 'CSE', designation: 'Assistant Professor', courses: 3, status: 'Active' },
  { id: 'MBA2016RS', name: 'Prof. Rajesh Sharma', dept: 'MBA', designation: 'Associate Professor', courses: 4, status: 'Active' },
  { id: 'EC2020MG', name: 'Dr. Meena Gupta', dept: 'ECE', designation: 'Assistant Professor', courses: 3, status: 'On Leave' },
]

export default function FacultyManagementPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-rose-600/20 to-orange-600/20 border border-rose-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-3">
          User Management
        </span>
        <h1 className="text-3xl font-bold text-white">Faculty</h1>
        <p className="text-slate-400 mt-1">240 faculty members across 12 departments.</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-blue-400">240</p>
          <p className="text-slate-400 text-sm">Total Faculty</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-emerald-400">228</p>
          <p className="text-slate-400 text-sm">Active</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-amber-400">12</p>
          <p className="text-slate-400 text-sm">On Leave</p>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-semibold text-lg">Faculty Directory</h2>
          <button className="px-4 py-2 rounded-xl bg-rose-600/20 text-rose-300 text-sm border border-rose-500/30 hover:bg-rose-600/30 transition-all">
            + Add Faculty
          </button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-500 text-xs border-b border-white/10">
              <th className="text-left pb-3">ID</th>
              <th className="text-left pb-3">Name</th>
              <th className="text-left pb-3">Department</th>
              <th className="text-left pb-3">Designation</th>
              <th className="text-center pb-3">Courses</th>
              <th className="text-center pb-3">Status</th>
              <th className="text-right pb-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {faculty.map((f) => (
              <tr key={f.id} className="hover:bg-white/5">
                <td className="py-3 text-slate-400 font-mono text-xs">{f.id}</td>
                <td className="py-3 text-white font-medium">{f.name}</td>
                <td className="py-3 text-slate-300">{f.dept}</td>
                <td className="py-3 text-slate-400 text-xs">{f.designation}</td>
                <td className="py-3 text-center text-blue-400">{f.courses}</td>
                <td className="py-3 text-center">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${f.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                    {f.status}
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
