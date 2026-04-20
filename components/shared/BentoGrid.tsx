import { cn } from '@/lib/utils'

interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        'grid auto-rows-[18rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
        className
      )}
    >
      {children}
    </div>
  )
}

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  colSpan?: 1 | 2 | 3
  rowSpan?: 1 | 2
}

export function BentoCard({ children, className, colSpan = 1, rowSpan = 1 }: BentoCardProps) {
  const colClasses = { 1: '', 2: 'md:col-span-2', 3: 'md:col-span-3' }
  const rowClasses = { 1: '', 2: 'row-span-2' }

  return (
    <div
      className={cn(
        'bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden',
        'transition-all duration-300 hover:bg-white/10 hover:border-white/20',
        colClasses[colSpan],
        rowClasses[rowSpan],
        className
      )}
    >
      {children}
    </div>
  )
}
