'use client'

import { useState } from 'react'
import SectionWrapper from '@/components/shared/SectionWrapper'

export default function AILabPage() {
  const [orgSize, setOrgSize] = useState(100)
  const [adoption, setAdoption] = useState(70)

  const timeSaved = Math.round(orgSize * adoption * 0.012)
  const costSaved = timeSaved * 45

  const insights = [
    { icon: '📈', text: `Your org of ${orgSize} members could save ${timeSaved} hours/month`, type: 'positive' },
    { icon: '💰', text: `Estimated annual savings: $${(costSaved * 12).toLocaleString()}`, type: 'positive' },
    { icon: '🎯', text: `With ${adoption}% adoption, AI effectiveness is ${adoption > 80 ? 'optimal' : 'moderate'}`, type: adoption > 80 ? 'positive' : 'info' },
    { icon: '🤖', text: 'AI confidence in these predictions: 94%', type: 'info' },
  ]

  return (
    <div>
      <section className="py-24 px-4 mesh-bg text-center">
        <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">AI Lab</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white mb-6">
          The Future of Organizational{' '}
          <span className="gradient-text-neon">Intelligence</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Explore lvlBase&apos;s AI capabilities. Predict outcomes, simulate scenarios, and see what intelligent automation could mean for your organization.
        </p>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Sliders */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 font-poppins">ROI Predictor</h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-slate-300 font-medium">Organization Size</label>
                  <span className="text-violet-400 font-bold">{orgSize} members</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={5000}
                  step={10}
                  value={orgSize}
                  onChange={(e) => setOrgSize(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-violet-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>10</span><span>5,000+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-slate-300 font-medium">Platform Adoption Rate</label>
                  <span className="text-violet-400 font-bold">{adoption}%</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={100}
                  step={5}
                  value={adoption}
                  onChange={(e) => setAdoption(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-violet-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>10%</span><span>100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Insights */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 font-poppins">AI Predictions</h2>
            <div className="space-y-3">
              {insights.map((insight, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-4 rounded-xl border text-sm ${
                    insight.type === 'positive'
                      ? 'bg-emerald-400/10 border-emerald-400/20 text-emerald-300'
                      : 'bg-blue-400/10 border-blue-400/20 text-blue-300'
                  }`}
                >
                  <span className="text-xl">{insight.icon}</span>
                  <span>{insight.text}</span>
                </div>
              ))}
            </div>

            {/* Chat preview */}
            <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-sm font-semibold text-white mb-3">AI Assistant Preview</p>
              <div className="space-y-2 mb-3 text-sm">
                <div className="flex justify-end">
                  <span className="bg-violet-600/30 border border-violet-500/20 px-3 py-2 rounded-xl text-slate-200 max-w-[80%]">
                    Show me this week&apos;s top performers
                  </span>
                </div>
                <div className="flex justify-start">
                  <span className="bg-white/5 border border-white/10 px-3 py-2 rounded-xl text-slate-300 max-w-[80%]">
                    🤖 Based on current data, your top 3 performers are Sarah (94% task completion), Marcus (89% KPI score), and Elena (top contributor to 4 active missions)...
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="text" placeholder="Ask anything about your org..." className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-400 focus:outline-none" readOnly />
                <button className="px-3 py-2 bg-violet-600 rounded-lg text-white text-xs font-medium">Send</button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
