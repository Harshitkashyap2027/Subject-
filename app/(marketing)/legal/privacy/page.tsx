import SectionWrapper from '@/components/shared/SectionWrapper'
export default function Page() {
  const title = "privacy".replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase())
  return (
    <div>
      <section className="py-24 px-4 mesh-bg"><div className="max-w-3xl mx-auto"><h1 className="text-4xl font-extrabold font-poppins text-white mb-4">{title}</h1><p className="text-slate-400">Last updated: January 1, 2024</p></div></section>
      <SectionWrapper><div className="max-w-3xl mx-auto space-y-6 text-slate-400 leading-relaxed"><p>This document governs your use of the lvlBase platform. By using our services, you agree to these terms.</p><p>lvlBase is committed to transparency and user privacy. We collect only the data necessary to provide our services and never sell your data to third parties.</p><p>For questions about this {title}, please contact legal@lvlbase.com.</p></div></SectionWrapper>
    </div>
  )
}
