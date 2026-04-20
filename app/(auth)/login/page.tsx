'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Zap,
  Eye,
  EyeOff,
  Building2,
  Mail,
  Lock,
  ArrowRight,
  Shield,
  Users,
  BarChart3,
  CheckCircle2,
} from 'lucide-react'

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(8, 'Min 8 characters'),
  orgId: z.string().min(2, 'Organization ID required'),
  rememberMe: z.boolean().optional(),
})
type FormData = z.infer<typeof schema>

// Role → redirect map (extend when auth backend is ready)
const ROLE_REDIRECTS: Record<string, string> = {
  student: '/dashboard/student',
  teacher: '/dashboard/teacher',
  admin: '/dashboard/admin',
  superadmin: '/dashboard/superadmin',
}

const FEATURES = [
  { icon: Shield, label: 'Enterprise-grade security' },
  { icon: Users, label: 'Multi-tenant organization' },
  { icon: BarChart3, label: 'Role-based dashboards' },
]

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    try {
      // TODO: replace with Firebase Auth + Firestore org/role lookup
      // 1. signInWithEmailAndPassword(auth, data.email, data.password)
      // 2. fetch user doc to get { role, orgId }
      // 3. verify data.orgId matches user's orgId
      // 4. redirect to ROLE_REDIRECTS[role]
      console.log('Login payload:', data)
      await new Promise((r) => setTimeout(r, 1000)) // simulate network
      setLoginSuccess(true)
      const role = 'student' // placeholder – replace with real role
      window.location.href = ROLE_REDIRECTS[role] ?? '/dashboard'
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    // TODO: Firebase Google OAuth
    // signInWithPopup(auth, googleProvider)
    console.log('Google login')
  }

  return (
    <div className="min-h-screen mesh-bg flex">
      {/* ── Left branding panel (desktop only) ── */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <Link href="/" className="inline-flex items-center gap-3 relative z-10">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center glow-primary">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold font-poppins gradient-text">lvlBase</span>
        </Link>

        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold font-poppins text-white leading-tight mb-4">
            Welcome Back to{' '}
            <span className="gradient-text-neon">lvlBase</span>
          </h1>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Your AI-powered OS for schools, hospitals, and enterprises. Sign in
            to continue where you left off.
          </p>

          <div className="space-y-4">
            {FEATURES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-violet-400" />
                </div>
                <span className="text-slate-300 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-slate-600 text-xs relative z-10">
          © {new Date().getFullYear()} lvlBase Inc. All rights reserved.
        </p>
      </div>

      {/* ── Right form panel ── */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex lg:hidden flex-col items-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold font-poppins gradient-text">lvlBase</span>
            </Link>
          </div>

          <div className="mb-8 lg:text-left text-center">
            <h2 className="text-3xl font-bold text-white mb-1">Sign in</h2>
            <p className="text-slate-400 text-sm">Enter your credentials to access your dashboard</p>
          </div>

          <div className="glass rounded-2xl p-8 shadow-2xl">
            {loginSuccess ? (
              <div className="text-center py-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-white font-bold text-xl mb-1">Signed in!</h3>
                <p className="text-slate-400 text-sm">Redirecting to your dashboard…</p>
              </div>
            ) : (
              <>
                {/* Social login */}
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full flex items-center justify-center gap-3 py-3 mb-4 bg-white/5 border border-white/10 rounded-xl text-slate-300 text-sm font-medium hover:bg-white/10 active:scale-[0.98] transition-all"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Continue with Google
                </button>

                <div className="relative mb-5">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-[#0f172a] px-4 text-slate-500 text-xs">or continue with email</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Email */}
                  <div>
                    <label className="block text-slate-300 text-sm mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="you@org.com"
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all"
                      />
                    </div>
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-slate-300 text-sm mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                      <input
                        {...register('password')}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
                  </div>

                  {/* Organization ID */}
                  <div>
                    <label className="block text-slate-300 text-sm mb-2">
                      Organization ID
                      <span className="ml-2 text-xs text-slate-500">(provided by your admin)</span>
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                      <input
                        {...register('orgId')}
                        type="text"
                        placeholder="ORG-XXXX"
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all uppercase"
                      />
                    </div>
                    {errors.orgId && <p className="text-red-400 text-xs mt-1">{errors.orgId.message}</p>}
                  </div>

                  {/* Remember me + Forgot password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        {...register('rememberMe')}
                        type="checkbox"
                        className="w-4 h-4 rounded border-white/20 bg-white/5 accent-violet-600 cursor-pointer"
                      />
                      <span className="text-slate-400 text-xs group-hover:text-slate-300 transition-colors">Remember me</span>
                    </label>
                    <Link href="/forgot-password" className="text-violet-400 text-xs hover:text-violet-300 transition-colors">
                      Forgot password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl text-white font-bold hover:from-violet-500 hover:to-blue-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Sign In <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-center text-slate-400 text-sm mt-6">
                  No account?{' '}
                  <Link href="/register" className="text-violet-400 hover:text-violet-300 font-medium transition-colors">
                    Register your organization
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
