import SectionWrapper from '@/components/shared/SectionWrapper'
import FAQSection from '@/components/sections/FAQSection'
export default function FAQPage() {
  return (
    <div>
      <section className="py-24 px-4 mesh-bg text-center">
        <h1 className="text-4xl font-extrabold font-poppins text-white mb-4">Frequently Asked <span className="gradient-text">Questions</span></h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">Everything you need to know about lvlBase.</p>
      </section>
      <FAQSection />
    </div>
  )
}
