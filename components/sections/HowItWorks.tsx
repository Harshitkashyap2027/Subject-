'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/shared/SectionWrapper'
import AnimatedSection from '@/components/shared/AnimatedSection'

const steps = [
  {
    number: '01',
    title: 'Sign Up & Choose Industry',
    description: 'Create your organization account and select your industry. lvlBase automatically configures the right modules for you.',
    icon: '🏗️',
  },
  {
    number: '02',
    title: 'Invite Your Team',
    description: 'Add members with role-based permissions. Import from Google Workspace, Microsoft 365, or upload a CSV.',
    icon: '👥',
  },
  {
    number: '03',
    title: 'Configure Your Modules',
    description: 'Turn on the features you need. Each module comes pre-configured with smart defaults tailored to your industry.',
    icon: '⚙️',
  },
  {
    number: '04',
    title: 'Connect Your Tools',
    description: 'Integrate with your existing software stack in one click. 50+ native integrations and Zapier for everything else.',
    icon: '🔗',
  },
  {
    number: '05',
    title: 'Go Live in Minutes',
    description: 'Start operating immediately. The AI assistant learns your organization and surfaces insights from day one.',
    icon: '🚀',
  },
]

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" className="bg-white/[0.02]">
      <AnimatedSection className="text-center mb-16">
        <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3">Simple Setup</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins mb-4">
          Up and Running in{' '}
          <span className="gradient-text">5 Easy Steps</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          No consultants. No months-long implementation. Most organizations are fully operational within a single day.
        </p>
      </AnimatedSection>

      <div className="relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-violet-600/60 via-blue-600/60 to-transparent -translate-x-1/2" />

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex items-center gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{step.icon}</span>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-violet-400 bg-violet-400/10 border border-violet-400/20 px-2 py-0.5 rounded">
                        STEP {step.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 font-poppins">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>

              {/* Center dot for desktop */}
              <div className="hidden lg:flex w-12 h-12 flex-shrink-0 items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 ring-4 ring-violet-600/30" />
              </div>

              <div className="flex-1 hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
