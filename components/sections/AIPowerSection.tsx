'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/shared/SectionWrapper'
import AnimatedSection from '@/components/shared/AnimatedSection'

const insights = [
  { label: 'Student at risk of dropping out', confidence: 94, type: 'warning', icon: '⚠️' },
  { label: 'Revenue forecast next quarter', value: '+18%', type: 'positive', icon: '📈' },
  { label: 'Staffing gap: 3 nurses needed Friday', type: 'info', icon: '🏥' },
  { label: 'Top performer: Emily Chen — +34% growth', type: 'positive', icon: '⭐' },
]

export default function AIPowerSection() {
  return (
    <SectionWrapper className="bg-white/[0.02]">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <AnimatedSection direction="left">
          <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3">AI-Powered Intelligence</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins mb-6">
            Your Organization&apos;s{' '}
            <span className="gradient-text-neon">AI Brain</span>
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            lvlBase&apos;s AI doesn&apos;t just collect data — it understands your organization. It surfaces insights, predicts problems before they happen, and takes action automatically based on your rules.
          </p>
          <div className="space-y-4">
            {[
              { icon: '🔮', title: 'Predictive Analytics', desc: 'Know what\'s coming before it happens' },
              { icon: '📝', title: 'Auto-Generated Reports', desc: 'Reports written in plain English, on schedule' },
              { icon: '🎯', title: 'Smart Recommendations', desc: 'Actionable next steps for every role' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h4 className="text-white font-semibold mb-0.5">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Right: Animated insights panel */}
        <AnimatedSection direction="right">
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-400 flex items-center justify-center">
                  <span className="text-sm">🤖</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">AI Insights Engine</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <p className="text-xs text-slate-400">Processing 1.2M data points</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {insights.map((insight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-sm ${
                      insight.type === 'warning'
                        ? 'bg-amber-400/10 border-amber-400/20 text-amber-300'
                        : insight.type === 'positive'
                        ? 'bg-emerald-400/10 border-emerald-400/20 text-emerald-300'
                        : 'bg-blue-400/10 border-blue-400/20 text-blue-300'
                    }`}
                  >
                    <span>{insight.icon}</span>
                    <span className="flex-1">{insight.label}</span>
                    {insight.confidence && (
                      <span className="text-xs font-bold opacity-70">{insight.confidence}%</span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Query input mock */}
              <div className="mt-6 flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-3">
                <span className="text-slate-400">💬</span>
                <span className="text-slate-500 text-sm">Ask your AI anything...</span>
                <span className="ml-auto text-xs text-violet-400 font-medium">⌘K</span>
              </div>
            </div>

            {/* Floating metric */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-gradient-to-br from-violet-600 to-blue-600 rounded-xl p-3 shadow-lg"
            >
              <p className="text-xs text-violet-200">Accuracy</p>
              <p className="text-xl font-bold text-white">97.3%</p>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  )
}
