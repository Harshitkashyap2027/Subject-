'use client'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Zap } from 'lucide-react'

const schema = z.object({ email: z.string().email(), password: z.string().min(8, 'Min 8 characters') })
type FormData = z.infer<typeof schema>

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) })
  const onSubmit = (data: FormData) => console.log(data)
  return (
    <div className="min-h-screen mesh-bg flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center"><Zap className="w-5 h-5 text-white" /></div>
            <span className="text-2xl font-bold font-poppins gradient-text">lvlBase</span>
          </Link>
          <h1 className="text-2xl font-bold text-white">Welcome back</h1>
          <p className="text-slate-400 mt-1">Sign in to your organization</p>
        </div>
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
          <div className="grid grid-cols-2 gap-3 mb-6">
            {['Google','GitHub'].map(p => (
              <button key={p} className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-300 text-sm font-medium hover:bg-white/10 transition-all">
                {p === 'Google' ? '🔵' : '⬛'} {p}
              </button>
            ))}
          </div>
          <div className="relative mb-6"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10" /></div><div className="relative flex justify-center"><span className="bg-[#0f172a] px-4 text-slate-500 text-xs">or continue with email</span></div></div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-slate-300 text-sm mb-2">Email</label>
              <input {...register('email')} type="email" placeholder="you@org.com" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50" />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-slate-300 text-sm mb-2">Password</label>
              <input {...register('password')} type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50" />
              {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
            </div>
            <div className="flex justify-end"><Link href="/forgot-password" className="text-violet-400 text-xs hover:text-violet-300">Forgot password?</Link></div>
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl text-white font-bold hover:from-violet-500 hover:to-blue-500 transition-all">Sign In</button>
          </form>
          <p className="text-center text-slate-400 text-sm mt-6">No account? <Link href="/register" className="text-violet-400 hover:text-violet-300">Create one</Link></p>
        </div>
      </div>
    </div>
  )
}
