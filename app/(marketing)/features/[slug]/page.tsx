import { notFound } from 'next/navigation'
import { CheckCircle } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import { features } from '@/lib/data/features'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }))
}

export default async function FeaturePage({ params }: Props) {
  const { slug } = await params
  const feature = features.find((f) => f.slug === slug)
  if (!feature) notFound()

  return (
    <div>
      <section className="relative py-24 px-4 mesh-bg">
        <div className="max-w-4xl mx-auto">
          <div className="text-6xl mb-6">{feature.icon}</div>
          <span className="inline-block mb-4 px-3 py-1 bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded-full text-sm font-semibold">
            {feature.category}
          </span>
          {feature.badge && (
            <span className="inline-block ml-2 mb-4 px-2 py-0.5 bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 rounded text-xs font-bold">
              {feature.badge}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white mb-4">{feature.title}</h1>
          <p className="text-xl text-slate-400 max-w-2xl">{feature.description}</p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white mb-6 font-poppins">What&apos;s Included</h2>
          <div className="space-y-4">
            {feature.details.map((detail) => (
              <div key={detail} className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
