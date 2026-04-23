const paymentHistory = [
  { id: 'TXN001', description: 'Semester 5 Tuition Fee', date: 'Jul 15, 2024', amount: '₹45,000', status: 'Paid' },
  { id: 'TXN002', description: 'Hostel Fee - Sem 5', date: 'Jul 15, 2024', amount: '₹18,000', status: 'Paid' },
  { id: 'TXN003', description: 'Exam Fee - Sem 4', date: 'Mar 10, 2024', amount: '₹2,500', status: 'Paid' },
  { id: 'TXN004', description: 'Semester 4 Tuition Fee', date: 'Jan 12, 2024', amount: '₹45,000', status: 'Paid' },
  { id: 'TXN005', description: 'Lab Fee - Sem 4', date: 'Jan 12, 2024', amount: '₹5,000', status: 'Paid' },
]

export default function FeesPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border border-emerald-500/20 rounded-2xl p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-3">
          Finance
        </span>
        <h1 className="text-3xl font-bold text-white">Fee Payments</h1>
        <p className="text-slate-400 mt-1">Manage tuition, hostel, and other university fee payments.</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
          <p className="text-2xl font-bold text-white">₹2,30,000</p>
          <p className="text-slate-400 text-sm mt-1">Total Fees</p>
        </div>
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 text-center">
          <p className="text-2xl font-bold text-emerald-400">₹1,15,500</p>
          <p className="text-slate-400 text-sm mt-1">Paid</p>
        </div>
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-center">
          <p className="text-2xl font-bold text-red-400">₹1,14,500</p>
          <p className="text-slate-400 text-sm mt-1">Due</p>
        </div>
      </div>

      {/* Upcoming Payment */}
      <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-500/20 rounded-2xl p-6">
        <div className="flex items-start justify-between">
          <div>
            <span className="inline-block px-2 py-0.5 rounded-full text-xs bg-amber-500/20 text-amber-400 mb-3">
              ⚡ Due in 15 days
            </span>
            <h2 className="text-white text-xl font-bold">Semester 6 Tuition Fee</h2>
            <p className="text-slate-400 mt-1">Due Date: January 10, 2025</p>
            <div className="mt-3 space-y-1 text-sm text-slate-300">
              <p>Tuition: ₹45,000</p>
              <p>Hostel: ₹18,000</p>
              <p>Lab Fee: ₹5,000</p>
              <p className="text-white font-bold pt-1 border-t border-white/10 mt-2">Total: ₹68,000</p>
            </div>
          </div>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium hover:opacity-90 transition-all shrink-0">
            Pay Now
          </button>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-white font-semibold text-lg mb-4">Payment History</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-500 text-xs border-b border-white/10">
              <th className="text-left pb-3">Transaction ID</th>
              <th className="text-left pb-3">Description</th>
              <th className="text-left pb-3">Date</th>
              <th className="text-right pb-3">Amount</th>
              <th className="text-right pb-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {paymentHistory.map((p) => (
              <tr key={p.id} className="hover:bg-white/5">
                <td className="py-3 text-slate-400 font-mono text-xs">{p.id}</td>
                <td className="py-3 text-white">{p.description}</td>
                <td className="py-3 text-slate-400">{p.date}</td>
                <td className="py-3 text-right text-white font-medium">{p.amount}</td>
                <td className="py-3 text-right">
                  <span className="px-2 py-0.5 rounded-full text-xs bg-emerald-500/20 text-emerald-400">{p.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
