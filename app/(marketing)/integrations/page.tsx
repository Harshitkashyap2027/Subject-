import SectionWrapper from '@/components/shared/SectionWrapper'
import { integrations } from '@/lib/data/integrations'

const categories = ['All', 'Productivity', 'Communication', 'CRM', 'Payments', 'Development', 'Documentation', 'Automation', 'Developer']

export default function IntegrationsPage() {
  return (
    <div>
      <section className="py-24 px-4 mesh-bg text-center">
        <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-4">Integrations</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white mb-6">
          Connect Your Entire{' '}
          <span className="gradient-text">Tech Stack</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          One-click integrations with the tools your team already loves. Plus Zapier and webhooks for everything else.
        </p>
      </section>

      <SectionWrapper>
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <span key={cat} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm cursor-pointer hover:bg-white/10 hover:text-white transition-all">
              {cat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {integrations.map((integration) => (
            <div key={integration.name} className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 hover:bg-white/10 transition-all">
              <div className="flex items-center gap-4 mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center text-2xl`}>
                  {integration.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-bold">{integration.name}</h3>
                    {integration.popular && (
                      <span className="px-1.5 py-0.5 text-xs bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded font-medium">Popular</span>
                    )}
                  </div>
                  <p className="text-violet-400 text-xs font-medium">{integration.category}</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">{integration.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
