import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import { industries } from '@/lib/data/industries'

interface Props {
  params: { industry: string }
}

export function generateStaticParams() {
  return industries.map((ind) => ({ industry: ind.slug }))
}

export default function IndustryPage({ params }: Props) {
  const industry = industries.find((i) => i.slug === params.industry)
  if (!industry) notFound()

  return (
    <div>
      <section className={`relative py-24 px-4 bg-gradient-to-br ${industry.color} overflow-hidden`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-6xl mb-6">{industry.icon}</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white mb-4">
            lvlBase for {industry.title}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">{industry.description}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/register" className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-white/90 transition-all inline-flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/demo" className="px-8 py-4 bg-black/20 text-white rounded-xl font-semibold border border-white/20 hover:bg-black/30 transition-all">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 font-poppins">Key Features</h2>
            <div className="space-y-3">
              {industry.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 font-poppins">Supported Roles</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {industry.roles.map((role) => (
                <span key={role} className="px-4 py-2 bg-white/10 border border-white/10 rounded-xl text-slate-300 text-sm">
                  {role}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 font-poppins">Results</h2>
            <div className="grid grid-cols-3 gap-4">
              {industry.stats.map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <p className="text-2xl font-extrabold gradient-text">{stat.value}</p>
                  <p className="text-slate-400 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
