import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'

const tabs = ['Student', 'Teacher', 'Admin', 'Doctor', 'HR Manager']

const modules = [
  { icon: '📊', title: 'Analytics Dashboard', desc: 'Full-org visibility in real-time' },
  { icon: '👥', title: 'Member Management', desc: 'Roles, profiles, and skill tracking' },
  { icon: '📋', title: 'Task & Project Manager', desc: 'Assign, track, complete' },
  { icon: '🤖', title: 'AI Assistant', desc: 'Intelligent automation and insights' },
  { icon: '📅', title: 'Calendar & Scheduling', desc: 'Events, meetings, deadlines' },
  { icon: '💬', title: 'Communications Hub', desc: 'Messages, announcements, threads' },
  { icon: '📁', title: 'Document Management', desc: 'Storage, versioning, sharing' },
  { icon: '⚡', title: 'Workflow Automation', desc: 'No-code automation builder' },
]

export default function ProductPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden mesh-bg">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-4">What is lvlBase</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-poppins text-white mb-6">
            One Platform to{' '}
            <span className="gradient-text">Run Everything</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-3xl mx-auto">
            lvlBase is the world&apos;s first truly unified organizational platform. Unlike point solutions that patch together dozens of tools, lvlBase is architected from the ground up to connect every function of your organization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/register" className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-bold hover:scale-105 transition-all inline-flex items-center gap-2">
              Start Building <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/demo" className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all">
              Live Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Modules grid */}
      <SectionWrapper>
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold font-poppins text-white mb-4">Core Modules</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Every module is deeply integrated, so data flows freely across your entire organization.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((mod) => (
            <div key={mod.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 hover:bg-white/10 transition-all">
              <span className="text-3xl block mb-3">{mod.icon}</span>
              <h3 className="text-white font-bold mb-1">{mod.title}</h3>
              <p className="text-slate-400 text-sm">{mod.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Role tabs */}
      <SectionWrapper className="bg-white/[0.02]">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold font-poppins text-white mb-4">Role-Based Dashboards</h2>
          <p className="text-slate-400 mb-8">Every role sees exactly what they need — nothing more, nothing less.</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {tabs.map((tab) => (
              <span key={tab} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm font-medium cursor-pointer hover:bg-white/10 hover:text-white transition-all">
                {tab}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {['Assigned Tasks', 'Upcoming Events', 'Team Messages'].map((label) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-slate-400 text-xs mb-1">{label}</p>
                <p className="text-2xl font-bold text-white">{Math.floor(Math.random() * 20) + 5}</p>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {['Complete Q3 report', 'Review new applications', 'Team sync at 3pm', 'Update skill profile'].map((task) => (
              <div key={task} className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                {task}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
