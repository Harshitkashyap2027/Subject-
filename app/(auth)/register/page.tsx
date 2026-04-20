'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Zap,
  Building2,
  User,
  Mail,
  Lock,
  Phone,
  MapPin,
  Eye,
  EyeOff,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Star,
  Globe,
  ChevronDown,
  Hash,
} from 'lucide-react'

const MOCK_NETWORK_DELAY = 1200

// ── Schemas ──────────────────────────────────────────────────────────────────

const orgInfoSchema = z.object({
  orgName: z.string().min(2, 'Organization name required'),
  orgType: z.string().min(1, 'Select organization type'),
  address: z.string().min(5, 'Address required'),
  contactEmail: z.string().email('Valid contact email required'),
  phone: z.string().min(7, 'Phone number required'),
})

const adminSchema = z.object({
  adminName: z.string().min(2, 'Name required'),
  adminEmail: z.string().email('Valid email required'),
  password: z.string().min(8, 'Min 8 characters'),
  confirmPassword: z.string().min(8),
}).refine((d) => d.password === d.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})

const planSchema = z.object({
  plan: z.enum(['free', 'pro', 'enterprise']),
})

const userJoinSchema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  password: z.string().min(8, 'Min 8 characters'),
  role: z.string().min(1, 'Select a role'),
  orgCode: z.string().min(3, 'Org code required'),
})

type OrgInfoData = z.infer<typeof orgInfoSchema>
type AdminData = z.infer<typeof adminSchema>
type PlanData = z.infer<typeof planSchema>
type UserJoinData = z.infer<typeof userJoinSchema>

// ── Constants ─────────────────────────────────────────────────────────────────

const ORG_TYPES = ['School', 'University', 'Hospital', 'Company', 'Government', 'NGO', 'Other']
const ROLES = ['Student', 'Teacher', 'Staff', 'Manager', 'Other']

const PLANS = [
  {
    id: 'free' as const,
    name: 'Free',
    price: '$0',
    period: 'forever',
    icon: Star,
    color: 'slate',
    features: ['Up to 50 users', 'Basic dashboards', 'Email support'],
  },
  {
    id: 'pro' as const,
    name: 'Pro',
    price: '$29',
    period: '/month',
    icon: Zap,
    color: 'violet',
    features: ['Up to 500 users', 'Advanced analytics', 'Priority support', 'Custom roles'],
    popular: true,
  },
  {
    id: 'enterprise' as const,
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    icon: Globe,
    color: 'cyan',
    features: ['Unlimited users', 'Dedicated infra', '24/7 support', 'SLA guarantee', 'SSO/SAML'],
  },
]

const STEPS = ['Organization', 'Admin Account', 'Select Plan', 'Review & Submit']

// ── Reusable input component ──────────────────────────────────────────────────

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string
  hint?: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block text-slate-300 text-sm mb-2">
        {label}
        {hint && <span className="ml-2 text-xs text-slate-500">{hint}</span>}
      </label>
      {children}
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  )
}

function Input({
  icon: Icon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { icon?: React.ElementType }) {
  return (
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
      )}
      <input
        {...props}
        className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all ${props.className ?? ''}`}
      />
    </div>
  )
}

// ── Step components ────────────────────────────────────────────────────────────

function StepOrgInfo({ onNext }: { onNext: (d: OrgInfoData) => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<OrgInfoData>({
    resolver: zodResolver(orgInfoSchema),
  })
  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
      <Field label="Organization Name" error={errors.orgName?.message}>
        <Input icon={Building2} {...register('orgName')} placeholder="Acme Academy" />
      </Field>
      <Field label="Organization Type" error={errors.orgType?.message}>
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
          <select
            {...register('orgType')}
            className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-violet-500/50 appearance-none"
          >
            <option value="" disabled>Select type…</option>
            {ORG_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
        </div>
      </Field>
      <Field label="Address" error={errors.address?.message}>
        <Input icon={MapPin} {...register('address')} placeholder="123 Main St, City" />
      </Field>
      <Field label="Contact Email" error={errors.contactEmail?.message}>
        <Input icon={Mail} {...register('contactEmail')} type="email" placeholder="contact@org.com" />
      </Field>
      <Field label="Phone" error={errors.phone?.message}>
        <Input icon={Phone} {...register('phone')} type="tel" placeholder="+1 555 000 0000" />
      </Field>
      <StepNav isFirst />
    </form>
  )
}

function StepAdminAccount({ onNext, onBack }: { onNext: (d: AdminData) => void; onBack: () => void }) {
  const [showPw, setShowPw] = useState(false)
  const [showCpw, setShowCpw] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<AdminData>({
    resolver: zodResolver(adminSchema),
  })
  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
      <p className="text-slate-400 text-sm -mt-1 mb-2">This account becomes the Organization Admin.</p>
      <Field label="Full Name" error={errors.adminName?.message}>
        <Input icon={User} {...register('adminName')} placeholder="Jane Smith" />
      </Field>
      <Field label="Work Email" error={errors.adminEmail?.message}>
        <Input icon={Mail} {...register('adminEmail')} type="email" placeholder="jane@org.com" />
      </Field>
      <Field label="Password" error={errors.password?.message}>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
          <input
            {...register('password')}
            type={showPw ? 'text' : 'password'}
            placeholder="••••••••"
            className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all"
          />
          <button type="button" onClick={() => setShowPw((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors" aria-label="Toggle password">
            {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </Field>
      <Field label="Confirm Password" error={errors.confirmPassword?.message}>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
          <input
            {...register('confirmPassword')}
            type={showCpw ? 'text' : 'password'}
            placeholder="••••••••"
            className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all"
          />
          <button type="button" onClick={() => setShowCpw((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors" aria-label="Toggle confirm password">
            {showCpw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </Field>
      <StepNav onBack={onBack} />
    </form>
  )
}

function StepPlan({ onNext, onBack }: { onNext: (d: PlanData) => void; onBack: () => void }) {
  const { setValue, watch, handleSubmit } = useForm<PlanData>({
    resolver: zodResolver(planSchema),
    defaultValues: { plan: 'pro' },
  })
  const selected = watch('plan')
  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-4">
      <div className="space-y-3">
        {PLANS.map(({ id, name, price, period, icon: Icon, features, popular }) => (
          <button
            key={id}
            type="button"
            onClick={() => setValue('plan', id)}
            className={`w-full text-left p-4 rounded-xl border transition-all ${
              selected === id
                ? 'border-violet-500/60 bg-violet-600/10 ring-1 ring-violet-500/30'
                : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${selected === id ? 'bg-violet-600/30' : 'bg-white/5'}`}>
                  <Icon className={`w-4 h-4 ${selected === id ? 'text-violet-400' : 'text-slate-400'}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold text-sm">{name}</span>
                    {popular && (
                      <span className="px-2 py-0.5 bg-violet-600/40 border border-violet-500/40 rounded-full text-violet-300 text-[10px] font-medium">Popular</span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {features.map((f) => (
                      <span key={f} className="text-slate-400 text-xs">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-white font-bold">{price}</span>
                {period && <span className="text-slate-400 text-xs">{period}</span>}
              </div>
            </div>
          </button>
        ))}
      </div>
      <StepNav onBack={onBack} />
    </form>
  )
}

function StepReview({
  orgData,
  adminData,
  planData,
  onBack,
  onSubmit,
  isLoading,
}: {
  orgData: OrgInfoData
  adminData: AdminData
  planData: PlanData
  onBack: () => void
  onSubmit: () => void
  isLoading: boolean
}) {
  const [agreed, setAgreed] = useState(false)
  const plan = PLANS.find((p) => p.id === planData.plan)
  return (
    <div className="space-y-5">
      <ReviewSection title="Organization">
        <ReviewRow label="Name" value={orgData.orgName} />
        <ReviewRow label="Type" value={orgData.orgType} />
        <ReviewRow label="Email" value={orgData.contactEmail} />
        <ReviewRow label="Phone" value={orgData.phone} />
      </ReviewSection>
      <ReviewSection title="Admin Account">
        <ReviewRow label="Name" value={adminData.adminName} />
        <ReviewRow label="Email" value={adminData.adminEmail} />
      </ReviewSection>
      <ReviewSection title="Plan">
        <ReviewRow label="Selected" value={plan?.name ?? planData.plan} />
      </ReviewSection>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 w-4 h-4 accent-violet-600"
        />
        <span className="text-slate-400 text-xs leading-relaxed">
          I agree to lvlBase&apos;s{' '}
          <Link href="/legal/terms" className="text-violet-400 hover:text-violet-300">Terms of Service</Link>
          {' '}and{' '}
          <Link href="/legal/privacy" className="text-violet-400 hover:text-violet-300">Privacy Policy</Link>.
          I understand this request is subject to approval by lvlBase.
        </span>
      </label>

      <div className="flex gap-3 pt-1">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-3 border border-white/10 rounded-xl text-slate-300 text-sm hover:border-white/20 hover:bg-white/5 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button
          type="button"
          disabled={!agreed || isLoading}
          onClick={onSubmit}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl text-white font-bold hover:from-violet-500 hover:to-blue-500 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>Submit Request <ArrowRight className="w-4 h-4" /></>
          )}
        </button>
      </div>
    </div>
  )
}

function ReviewSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 overflow-hidden">
      <div className="px-4 py-2 bg-white/5 border-b border-white/10">
        <span className="text-slate-300 text-xs font-semibold uppercase tracking-wider">{title}</span>
      </div>
      <div className="px-4 py-3 space-y-2">{children}</div>
    </div>
  )
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-slate-500 text-xs">{label}</span>
      <span className="text-slate-200 text-xs font-medium text-right">{value}</span>
    </div>
  )
}

function StepNav({ isFirst, onBack }: { isFirst?: boolean; onBack?: () => void }) {
  return (
    <div className="flex gap-3 pt-1">
      {!isFirst && (
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-3 border border-white/10 rounded-xl text-slate-300 text-sm hover:border-white/20 hover:bg-white/5 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
      )}
      <button
        type="submit"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl text-white font-bold hover:from-violet-500 hover:to-blue-500 active:scale-[0.98] transition-all"
      >
        Continue <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  )
}

// ── User join form ─────────────────────────────────────────────────────────────

function UserJoinForm() {
  const [showPw, setShowPw] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<UserJoinData>({
    resolver: zodResolver(userJoinSchema),
  })
  const onSubmit = (data: UserJoinData) => {
    // TODO: Firebase Auth create user + link to org via orgCode
    console.log('User join:', data)
    setSubmitted(true)
  }
  if (submitted) return <SuccessState type="user" />
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <p className="text-slate-400 text-sm -mt-1 mb-2">Join an existing organization using your invite code.</p>
      <Field label="Full Name" error={errors.name?.message}>
        <Input icon={User} {...register('name')} placeholder="Jane Smith" />
      </Field>
      <Field label="Email" error={errors.email?.message}>
        <Input icon={Mail} {...register('email')} type="email" placeholder="jane@org.com" />
      </Field>
      <Field label="Password" error={errors.password?.message}>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
          <input
            {...register('password')}
            type={showPw ? 'text' : 'password'}
            placeholder="••••••••"
            className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all"
          />
          <button type="button" onClick={() => setShowPw((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors" aria-label="Toggle password">
            {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </Field>
      <Field label="Role" error={errors.role?.message}>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
          <select
            {...register('role')}
            className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-violet-500/50 appearance-none"
          >
            <option value="" disabled>Select role…</option>
            {ROLES.map((r) => <option key={r} value={r.toLowerCase()}>{r}</option>)}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
        </div>
      </Field>
      <Field label="Organization Code" hint="(provided by your admin)" error={errors.orgCode?.message}>
        <Input icon={Hash} {...register('orgCode')} placeholder="ORG-XXXX" className="uppercase" />
      </Field>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl text-white font-bold hover:from-violet-500 hover:to-blue-500 active:scale-[0.98] transition-all"
      >
        Join Organization <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  )
}

function SuccessState({ type }: { type: 'org' | 'user' }) {
  return (
    <div className="text-center py-6">
      <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
      <h3 className="text-white font-bold text-xl mb-2">
        {type === 'org' ? 'Request Submitted!' : 'Account Created!'}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
        {type === 'org'
          ? 'Your organization registration is under review. You will receive an email once approved by our team.'
          : 'Your account has been created and linked to the organization. You can now sign in.'}
      </p>
      <Link
        href="/login"
        className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl text-white font-bold hover:from-violet-500 hover:to-blue-500 transition-all text-sm"
      >
        Go to Sign In <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}

// ── Step indicator ─────────────────────────────────────────────────────────────

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex items-center gap-2 flex-1">
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all ${
              i < current
                ? 'bg-violet-600 text-white'
                : i === current
                ? 'bg-gradient-to-br from-violet-600 to-blue-600 text-white ring-2 ring-violet-500/40'
                : 'bg-white/10 text-slate-500'
            }`}
          >
            {i < current ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
          </div>
          {i < total - 1 && (
            <div className={`h-0.5 flex-1 rounded-full transition-all ${i < current ? 'bg-violet-600' : 'bg-white/10'}`} />
          )}
        </div>
      ))}
    </div>
  )
}

// ── Main Page ──────────────────────────────────────────────────────────────────

export default function RegisterPage() {
  const [tab, setTab] = useState<'org' | 'user'>('org')

  // Multi-step state
  const [step, setStep] = useState(0)
  const [orgData, setOrgData] = useState<OrgInfoData | null>(null)
  const [adminData, setAdminData] = useState<AdminData | null>(null)
  const [planData, setPlanData] = useState<PlanData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleOrgNext = (d: OrgInfoData) => { setOrgData(d); setStep(1) }
  const handleAdminNext = (d: AdminData) => { setAdminData(d); setStep(2) }
  const handlePlanNext = (d: PlanData) => { setPlanData(d); setStep(3) }

  const handleFinalSubmit = async () => {
    setIsLoading(true)
    try {
      // TODO: Firebase Auth create admin user + Firestore org document
      console.log('Org registration:', { orgData, adminData, planData })
      await new Promise((r) => setTimeout(r, MOCK_NETWORK_DELAY))
      setSubmitted(true)
    } finally {
      setIsLoading(false)
    }
  }

  const stepTitle = STEPS[step]

  return (
    <div className="min-h-screen mesh-bg flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center glow-primary">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold font-poppins gradient-text">lvlBase</span>
          </Link>
          <h1 className="text-2xl font-bold text-white">Get started with lvlBase</h1>
          <p className="text-slate-400 text-sm mt-1">Register your organization or join an existing one</p>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-1 p-1 bg-white/5 border border-white/10 rounded-xl mb-6">
          <button
            onClick={() => { setTab('org'); setStep(0); setSubmitted(false) }}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
              tab === 'org' ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Register Organization
          </button>
          <button
            onClick={() => setTab('user')}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
              tab === 'user' ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Join via Code
          </button>
        </div>

        <div className="glass rounded-2xl p-8 shadow-2xl">
          {tab === 'user' ? (
            <UserJoinForm />
          ) : submitted ? (
            <SuccessState type="org" />
          ) : (
            <>
              <StepIndicator current={step} total={STEPS.length} />
              <h2 className="text-white font-bold text-lg mb-5">
                Step {step + 1}: {stepTitle}
              </h2>

              {step === 0 && <StepOrgInfo onNext={handleOrgNext} />}
              {step === 1 && <StepAdminAccount onNext={handleAdminNext} onBack={() => setStep(0)} />}
              {step === 2 && <StepPlan onNext={handlePlanNext} onBack={() => setStep(1)} />}
              {step === 3 && orgData && adminData && planData && (
                <StepReview
                  orgData={orgData}
                  adminData={adminData}
                  planData={planData}
                  onBack={() => setStep(2)}
                  onSubmit={handleFinalSubmit}
                  isLoading={isLoading}
                />
              )}
            </>
          )}

          <p className="text-center text-slate-400 text-sm mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-violet-400 hover:text-violet-300 font-medium transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
