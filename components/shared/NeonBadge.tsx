import { cn } from '@/lib/utils'

interface NeonBadgeProps {
  children: React.ReactNode
  className?: string
  color?: 'cyan' | 'violet' | 'blue' | 'green'
}

export default function NeonBadge({ children, className, color = 'cyan' }: NeonBadgeProps) {
  const colorClasses = {
    cyan: 'border-cyan-400/40 text-cyan-300 bg-cyan-400/10 shadow-[0_0_10px_rgba(34,211,238,0.2)]',
    violet: 'border-violet-400/40 text-violet-300 bg-violet-400/10 shadow-[0_0_10px_rgba(167,139,250,0.2)]',
    blue: 'border-blue-400/40 text-blue-300 bg-blue-400/10 shadow-[0_0_10px_rgba(96,165,250,0.2)]',
    green: 'border-emerald-400/40 text-emerald-300 bg-emerald-400/10 shadow-[0_0_10px_rgba(52,211,153,0.2)]',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border uppercase tracking-wider',
        colorClasses[color],
        className
      )}
    >
      <span className={cn('w-1.5 h-1.5 rounded-full animate-pulse', {
        'bg-cyan-400': color === 'cyan',
        'bg-violet-400': color === 'violet',
        'bg-blue-400': color === 'blue',
        'bg-emerald-400': color === 'green',
      })} />
      {children}
    </span>
  )
}
