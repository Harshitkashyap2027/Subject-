import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import { industries } from '@/lib/data/industries'

export default function SolutionsPage() {
  return (
    <div>
      <section className="relative py-24 px-4 mesh-bg">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-4">Solutions</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white mb-6">
            Built for Your{' '}
            <span className="gradient-text">Industry</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            lvlBase comes pre-configured for your industry — with the right modules, workflows, and defaults from day one.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {industries.map((industry) => (
            <div key={industry.slug} className={`relative bg-gradient-to-br ${industry.color} opacity-90 rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:scale-[1.01] transition-all duration-300`}>
              <div className="text-5xl mb-4">{industry.icon}</div>
              <h2 className="text-2xl font-bold text-white mb-3 font-poppins">{industry.title}</h2>
              <p className="text-white/80 mb-6">{industry.description}</p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {industry.stats.map((stat) => (
                  <div key={stat.label} className="bg-black/20 rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href={`/solutions/${industry.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 rounded-xl font-semibold text-sm hover:bg-white/90 transition-all"
              >
                Explore {industry.title} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
