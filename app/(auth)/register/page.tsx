'use client'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Zap } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  orgName: z.string().min(2),
  orgType: z.string().min(1, 'Select org type'),
})
type FormData = z.infer<typeof schema>

export default function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) })
  const onSubmit = (data: FormData) => console.log(data)
  const fields = [
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Jane Smith' },
    { id: 'email', label: 'Work Email', type: 'email', placeholder: 'jane@org.com' },
    { id: 'password', label: 'Password', type: 'password', placeholder: '••••••••' },
    { id: 'orgName', label: 'Organization Name', type: 'text', placeholder: 'Acme Corp' },
  ]
  return (
    <div className="min-h-screen mesh-bg flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center"><Zap className="w-5 h-5 text-white" /></div>
            <span className="text-2xl font-bold font-poppins gradient-text">lvlBase</span>
          </Link>
          <h1 className="text-2xl font-bold text-white">Create your organization</h1>
          <p className="text-slate-400 mt-1">Free forever · No credit card</p>
        </div>
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {fields.map(f => (
              <div key={f.id}>
                <label className="block text-slate-300 text-sm mb-2">{f.label}</label>
                <input {...register(f.id as keyof FormData)} type={f.type} placeholder={f.placeholder} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50" />
                {errors[f.id as keyof FormData] && <p className="text-red-400 text-xs mt-1">{errors[f.id as keyof FormData]?.message}</p>}
              </div>
            ))}
            <div>
              <label className="block text-slate-300 text-sm mb-2">Organization Type</label>
              <select {...register('orgType')} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-violet-500/50">
                <option value="">Select type...</option>
                {['Education','Healthcare','Corporate','Government','Other'].map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.orgType && <p className="text-red-400 text-xs mt-1">{errors.orgType.message}</p>}
            </div>
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl text-white font-bold hover:from-violet-500 hover:to-blue-500 transition-all">Create Account</button>
          </form>
          <p className="text-center text-slate-400 text-sm mt-6">Already have an account? <Link href="/login" className="text-violet-400 hover:text-violet-300">Sign in</Link></p>
        </div>
      </div>
    </div>
  )
}
