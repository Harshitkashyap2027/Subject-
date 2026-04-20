import SectionWrapper from '@/components/shared/SectionWrapper'
export default function Page() {
  return (
    <div>
      <section className="py-24 px-4 mesh-bg text-center">
        <h1 className="text-4xl font-extrabold font-poppins text-white capitalize mb-4"><span className="gradient-text">support</span></h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">This section is coming soon. Check back for updates.</p>
      </section>
      <SectionWrapper><div className="text-slate-400 text-center py-12">Content for support page.</div></SectionWrapper>
    </div>
  )
}
