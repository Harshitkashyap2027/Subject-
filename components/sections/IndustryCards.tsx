import SectionWrapper from '@/components/shared/SectionWrapper'
import IndustryCard from '@/components/cards/IndustryCard'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { industries } from '@/lib/data/industries'

export default function IndustryCards() {
  return (
    <SectionWrapper id="solutions">
      <AnimatedSection className="text-center mb-14">
        <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3">Industries We Serve</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins mb-4">
          Built for Every{' '}
          <span className="gradient-text">Organization</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          From classrooms to boardrooms, lvlBase adapts to how your organization works — with industry-specific modules and AI built in.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((industry, i) => (
          <IndustryCard key={industry.slug} industry={industry} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
