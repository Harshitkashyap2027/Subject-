'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import SectionWrapper from '@/components/shared/SectionWrapper'

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Invalid email'),
  orgType: z.string().min(1, 'Select an org type'),
  message: z.string().min(10, 'Message too short'),
})
type FormData = z.infer<typeof schema>

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<FormData>({ resolver: zodResolver(schema) })
  const onSubmit = (data: FormData) => console.log(data)
  return (
    <div>
      <section className="py-24 px-4 mesh-bg text-center">
        <h1 className="text-4xl font-extrabold font-poppins text-white mb-4">Get in <span className="gradient-text">Touch</span></h1>
        <p className="text-slate-400 text-xl max-w-xl mx-auto">Questions, demos, or partnerships — we&apos;d love to hear from you.</p>
      </section>
      <SectionWrapper>
        <div className="max-w-xl mx-auto">
          {isSubmitSuccessful ? (
            <div className="text-center p-8 bg-emerald-400/10 border border-emerald-400/20 rounded-2xl">
              <p className="text-2xl mb-2">✅</p>
              <h2 className="text-white font-bold text-xl mb-2">Message Sent!</h2>
              <p className="text-slate-400">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Jane Smith' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'jane@org.com' },
              ].map((f) => (
                <div key={f.id}>
                  <label className="block text-slate-300 text-sm font-medium mb-2">{f.label}</label>
                  <input {...register(f.id as keyof FormData)} type={f.type} placeholder={f.placeholder}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50" />
                  {errors[f.id as keyof FormData] && <p className="text-red-400 text-xs mt-1">{errors[f.id as keyof FormData]?.message}</p>}
                </div>
              ))}
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Organization Type</label>
                <select {...register('orgType')} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-violet-500/50">
                  <option value="">Select type...</option>
                  {['Education','Healthcare','Corporate','Government','Other'].map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                {errors.orgType && <p className="text-red-400 text-xs mt-1">{errors.orgType.message}</p>}
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Message</label>
                <textarea {...register('message')} rows={4} placeholder="Tell us about your organization and how we can help..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 resize-none" />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
              </div>
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl text-white font-bold hover:from-violet-500 hover:to-blue-500 transition-all">
                Send Message
              </button>
            </form>
          )}
        </div>
      </SectionWrapper>
    </div>
  )
}
