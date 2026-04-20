'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import NeonBadge from '@/components/shared/NeonBadge'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-bg">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] animate-pulse animation-delay-800" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <NeonBadge color="cyan">🚀 Now with AI-powered insights</NeonBadge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-white leading-tight mb-6"
            >
              Run Your Entire{' '}
              <span className="gradient-text">Organization</span>{' '}
              on One Platform
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg"
            >
              lvlBase unifies operations, communication, analytics, and AI into one intelligent platform — built for schools, hospitals, corporations, and governments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold hover:from-violet-500 hover:to-blue-500 transition-all duration-200 hover:scale-105 hover:shadow-glow-primary"
              >
                Start Free Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <Play className="w-5 h-5 text-cyan-400" />
                Watch Demo
              </Link>
            </motion.div>

            {/* Social proof mini */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-6 text-sm text-slate-400"
            >
              <div className="flex -space-x-2">
                {['A', 'B', 'C', 'D'].map((l) => (
                  <div key={l} className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 border-2 border-[#0f172a] flex items-center justify-center text-xs font-bold text-white">
                    {l}
                  </div>
                ))}
              </div>
              <span><strong className="text-white">10,000+</strong> organizations already running on lvlBase</span>
            </motion.div>
          </div>

          {/* Right: Mock Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main dashboard card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Organization Dashboard</p>
                    <h3 className="text-white font-bold">Westside Academy</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs text-slate-400">Live</span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Students', value: '1,247', change: '+12%', color: 'text-emerald-400' },
                    { label: 'Active Today', value: '892', change: '+5%', color: 'text-cyan-400' },
                    { label: 'Avg Score', value: '87.4', change: '+3.2', color: 'text-violet-400' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-xl p-3">
                      <p className="text-xs text-slate-400 mb-1">{stat.label}</p>
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                      <p className={`text-xs font-medium ${stat.color}`}>{stat.change}</p>
                    </div>
                  ))}
                </div>

                {/* Mini chart */}
                <div className="bg-white/5 rounded-xl p-4 mb-4">
                  <div className="flex items-end gap-1 h-16">
                    {[40, 65, 45, 80, 60, 90, 75, 85, 70, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-violet-600 to-blue-400 opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 mt-2">Weekly engagement</p>
                </div>

                {/* AI insight */}
                <div className="flex items-start gap-3 bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-3">
                  <span className="text-lg">🤖</span>
                  <div>
                    <p className="text-xs font-semibold text-cyan-300 mb-0.5">AI Insight</p>
                    <p className="text-xs text-slate-300">Grade 10 Math showing 18% decline. Recommend intervention program.</p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-white/10 backdrop-blur border border-white/20 rounded-xl p-3 shadow-xl"
              >
                <p className="text-xs text-slate-400">New Member</p>
                <p className="text-sm font-bold text-white">Sarah J. joined</p>
                <p className="text-xs text-emerald-400">2m ago</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-6 bg-white/10 backdrop-blur border border-white/20 rounded-xl p-3 shadow-xl"
              >
                <p className="text-xs text-slate-400">System Status</p>
                <p className="text-sm font-bold text-emerald-400">99.9% Uptime</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
