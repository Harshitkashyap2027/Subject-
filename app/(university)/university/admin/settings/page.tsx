export default function SettingsPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-rose-600/20 to-orange-600/20 border border-rose-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-3">
          Administration
        </span>
        <h1 className="text-3xl font-bold text-white">System Settings</h1>
        <p className="text-slate-400 mt-1">Configure university information, academic year, and system preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* University Info */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-5">University Information</h2>
          <div className="space-y-4">
            {[
              { label: 'University Name', value: 'National Institute of Technology' },
              { label: 'Established', value: '1989' },
              { label: 'Location', value: 'New Delhi, India' },
              { label: 'Website', value: 'www.nit.ac.in' },
              { label: 'Affiliation', value: 'UGC / AICTE Approved' },
            ].map((f) => (
              <div key={f.label}>
                <label className="text-slate-400 text-xs mb-1 block">{f.label}</label>
                <input
                  type="text"
                  defaultValue={f.value}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-rose-500/50"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Academic Year Config */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-lg mb-5">Academic Year Configuration</h2>
          <div className="space-y-4">
            {[
              { label: 'Current Academic Year', value: '2024-25' },
              { label: 'Current Semester', value: 'Semester 5 (Odd)' },
              { label: 'Semester Start Date', value: 'Aug 1, 2024' },
              { label: 'Semester End Date', value: 'Dec 31, 2024' },
              { label: 'Next Semester Start', value: 'Jan 13, 2025' },
            ].map((f) => (
              <div key={f.label}>
                <label className="text-slate-400 text-xs mb-1 block">{f.label}</label>
                <input
                  type="text"
                  defaultValue={f.value}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-rose-500/50"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-white font-semibold text-lg mb-5">Notification Settings</h2>
        <div className="space-y-3">
          {[
            { label: 'Send attendance alerts to parents when below 75%', enabled: true },
            { label: 'Notify students of result publication via email', enabled: true },
            { label: 'Send fee reminder 15 days before due date', enabled: true },
            { label: 'Alert admin on research project status changes', enabled: false },
            { label: 'Weekly placement statistics summary to admin', enabled: true },
          ].map((n) => (
            <div key={n.label} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <span className="text-slate-300 text-sm">{n.label}</span>
              <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-all ${n.enabled ? 'bg-emerald-500' : 'bg-slate-600'}`}>
                <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${n.enabled ? 'left-5' : 'left-0.5'}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-orange-600 text-white font-semibold hover:opacity-90 transition-all">
          Save Settings
        </button>
      </div>
    </div>
  )
}
