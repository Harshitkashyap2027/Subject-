import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import { features } from '@/lib/data/features'

export default function FeaturesPage() {
  return (
    <div>
      <section className="relative py-24 px-4 mesh-bg">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-4">Features</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white mb-6">
            Every Feature You&apos;ll{' '}
            <span className="gradient-text">Ever Need</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A complete feature set built to handle the complexity of modern organizations, with the simplicity of a consumer app.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link
              key={feature.slug}
              href={`/features/${feature.slug}`}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-white font-bold font-poppins">{feature.title}</h3>
                {feature.badge && (
                  <span className="px-1.5 py-0.5 text-xs font-bold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 rounded">
                    {feature.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-violet-400 font-semibold uppercase tracking-wider mb-2">{feature.category}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{feature.description}</p>
              <div className="flex items-center gap-1 text-violet-400 text-sm font-semibold group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
