import SectionWrapper from '@/components/shared/SectionWrapper'

const endpoints = [
  { method: 'GET', path: '/api/v1/members', desc: 'List all members in your organization' },
  { method: 'POST', path: '/api/v1/members', desc: 'Add a new member to your organization' },
  { method: 'GET', path: '/api/v1/tasks', desc: 'List tasks with filters' },
  { method: 'POST', path: '/api/v1/tasks', desc: 'Create a new task' },
  { method: 'GET', path: '/api/v1/analytics/overview', desc: 'Get organization analytics overview' },
  { method: 'POST', path: '/api/v1/automations/trigger', desc: 'Manually trigger an automation' },
]

const methodColors: Record<string, string> = {
  GET: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  POST: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
  PUT: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  DELETE: 'text-red-400 bg-red-400/10 border-red-400/30',
}

export default function DevelopersPage() {
  return (
    <div>
      <section className="py-24 px-4 mesh-bg">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-4">Developer Hub</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white mb-6">
            Build on{' '}
            <span className="gradient-text">lvlBase API</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            A powerful REST API that gives you full programmatic access to your organization data. Build integrations, automation, and custom workflows.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 font-poppins">API Endpoints</h2>
            <div className="space-y-3">
              {endpoints.map((ep) => (
                <div key={ep.path} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                  <span className={`px-2 py-0.5 text-xs font-bold border rounded font-mono flex-shrink-0 ${methodColors[ep.method] ?? ''}`}>
                    {ep.method}
                  </span>
                  <div>
                    <code className="text-cyan-300 text-sm font-mono">{ep.path}</code>
                    <p className="text-slate-400 text-xs mt-0.5">{ep.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 font-poppins">Quick Start</h2>
            <div className="bg-slate-900 border border-white/10 rounded-xl p-6 font-mono text-sm">
              <p className="text-slate-500 mb-2"># Install SDK</p>
              <p className="text-emerald-400 mb-4">npm install @lvlbase/sdk</p>
              <p className="text-slate-500 mb-2"># Initialize client</p>
              <p className="text-blue-300">import {'{'} LvlBase {'}'} from <span className="text-amber-300">&apos;@lvlbase/sdk&apos;</span></p>
              <p className="text-slate-300 mb-4">const client = new LvlBase(<span className="text-amber-300">&apos;YOUR_API_KEY&apos;</span>)</p>
              <p className="text-slate-500 mb-2"># List members</p>
              <p className="text-blue-300">const members = await client.members.list()</p>
            </div>

            <div className="mt-6 p-4 bg-violet-500/10 border border-violet-500/20 rounded-xl">
              <p className="text-violet-300 font-semibold mb-1">Webhook Support</p>
              <p className="text-slate-400 text-sm">Subscribe to real-time events from your organization. lvlBase sends webhook payloads for every significant event — member joins, task completions, AI insights, and more.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
