import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900/40 via-blue-900/40 to-violet-900/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/10 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-violet-600/20 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">Get Started Today</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-poppins mb-6 leading-tight">
          Start Your Organization
          <br />
          <span className="gradient-text">Today — It&apos;s Free</span>
        </h2>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          Join thousands of organizations that have unified their operations on lvlBase. No credit card required. Setup takes minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-bold text-lg hover:from-violet-500 hover:to-blue-500 transition-all duration-200 hover:scale-105 hover:shadow-glow-primary"
          >
            Start for Free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            Talk to Sales
          </Link>
        </div>

        <div className="mt-10 flex items-center justify-center gap-8 text-sm text-slate-400 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-emerald-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            </div>
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-emerald-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            </div>
            14-day free trial on paid plans
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-emerald-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            </div>
            Cancel anytime
          </div>
        </div>
      </div>
    </section>
  )
}
