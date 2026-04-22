const courses = [
  { code: 'CS301', name: 'Data Structures & Algorithms', dept: 'CSE', credits: 4, faculty: 'Dr. Priya Mehta', students: 180, type: 'Core' },
  { code: 'CS302', name: 'Database Management Systems', dept: 'CSE', credits: 4, faculty: 'Prof. Rajan Verma', students: 175, type: 'Core' },
  { code: 'CS501', name: 'Machine Learning', dept: 'CSE', credits: 3, faculty: 'Dr. Kavya Nair', students: 120, type: 'Elective' },
  { code: 'EC301', name: 'Digital Signal Processing', dept: 'ECE', credits: 4, faculty: 'Dr. Sneha Patel', students: 145, type: 'Core' },
  { code: 'ME301', name: 'Thermodynamics II', dept: 'ME', credits: 4, faculty: 'Prof. Anil Dubey', students: 130, type: 'Core' },
  { code: 'MBA201', name: 'Business Analytics', dept: 'MBA', credits: 3, faculty: 'Prof. Rajesh Sharma', students: 90, type: 'Core' },
  { code: 'CS401', name: 'Computer Networks', dept: 'CSE', credits: 3, faculty: 'Dr. Priya Mehta', students: 160, type: 'Core' },
  { code: 'CS502', name: 'Cloud Computing', dept: 'CSE', credits: 3, faculty: 'Dr. Kavya Nair', students: 110, type: 'Elective' },
]

export default function AdminCoursesPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-rose-600/20 to-orange-600/20 border border-rose-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-3">
          Academics
        </span>
        <h1 className="text-3xl font-bold text-white">Courses & Credits</h1>
        <p className="text-slate-400 mt-1">Manage all courses, credits, and faculty assignments.</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-rose-400">248</p>
          <p className="text-slate-400 text-sm">Total Courses</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-blue-400">186</p>
          <p className="text-slate-400 text-sm">Core Courses</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-violet-400">62</p>
          <p className="text-slate-400 text-sm">Electives</p>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-semibold text-lg">Course List</h2>
          <button className="px-4 py-2 rounded-xl bg-rose-600/20 text-rose-300 text-sm border border-rose-500/30 hover:bg-rose-600/30 transition-all">
            + Add Course
          </button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-500 text-xs border-b border-white/10">
              <th className="text-left pb-3">Code</th>
              <th className="text-left pb-3">Name</th>
              <th className="text-left pb-3">Department</th>
              <th className="text-center pb-3">Credits</th>
              <th className="text-left pb-3">Faculty</th>
              <th className="text-center pb-3">Students</th>
              <th className="text-right pb-3">Type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {courses.map((c) => (
              <tr key={c.code} className="hover:bg-white/5">
                <td className="py-3 text-violet-400 font-mono text-xs">{c.code}</td>
                <td className="py-3 text-white font-medium">{c.name}</td>
                <td className="py-3 text-slate-300">{c.dept}</td>
                <td className="py-3 text-center text-blue-400 font-bold">{c.credits}</td>
                <td className="py-3 text-slate-400 text-xs">{c.faculty}</td>
                <td className="py-3 text-center text-slate-300">{c.students}</td>
                <td className="py-3 text-right">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${c.type === 'Core' ? 'bg-blue-500/20 text-blue-400' : 'bg-amber-500/20 text-amber-400'}`}>
                    {c.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
