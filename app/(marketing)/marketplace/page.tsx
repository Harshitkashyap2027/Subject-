import SectionWrapper from '@/components/shared/SectionWrapper'

const marketplacePlugins = [
  { name: 'Advanced Survey Builder', category: 'Productivity', icon: '📋', rating: 4.8, installs: '2.3K', price: 'Free' },
  { name: 'Payroll Connect', category: 'HR', icon: '💰', rating: 4.9, installs: '1.8K', price: '$9/mo' },
  { name: 'AI Meeting Summarizer', category: 'AI', icon: '🤖', rating: 5.0, installs: '4.1K', price: '$5/mo' },
  { name: 'Multi-Location Manager', category: 'Operations', icon: '🌍', rating: 4.7, installs: '890', price: '$15/mo' },
  { name: 'Student Progress Reports', category: 'Education', icon: '📊', rating: 4.8, installs: '3.2K', price: 'Free' },
  { name: 'Telemedicine Module', category: 'Healthcare', icon: '🏥', rating: 4.9, installs: '1.1K', price: '$25/mo' },
  { name: 'Biometric Attendance', category: 'HR', icon: '👆', rating: 4.6, installs: '760', price: '$12/mo' },
  { name: 'Custom Report Builder', category: 'Analytics', icon: '📈', rating: 4.7, installs: '2.9K', price: 'Free' },
]

export default function MarketplacePage() {
  return (
    <div>
      <section className="py-24 px-4 mesh-bg text-center">
        <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-4">Marketplace</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white mb-6">
          Extend lvlBase with{' '}
          <span className="gradient-text">Plugins</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          Browse community-built and official extensions to supercharge your organization.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search plugins..."
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl text-white font-semibold hover:from-violet-500 hover:to-blue-500 transition-all">
              Search
            </button>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {marketplacePlugins.map((plugin) => (
            <div key={plugin.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 hover:bg-white/10 transition-all cursor-pointer group">
              <div className="text-4xl mb-4">{plugin.icon}</div>
              <span className="px-2 py-0.5 text-xs bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded-full">{plugin.category}</span>
              <h3 className="text-white font-bold mt-3 mb-2">{plugin.name}</h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">⭐ {plugin.rating} · {plugin.installs}</span>
                <span className={`font-semibold ${plugin.price === 'Free' ? 'text-emerald-400' : 'text-violet-400'}`}>{plugin.price}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
