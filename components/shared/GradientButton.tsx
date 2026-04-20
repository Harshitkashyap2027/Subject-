'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface GradientButtonProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'outline' | 'neon'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  href?: string
}

export default function GradientButton({
  children,
  className,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
}: GradientButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variantClasses = {
    primary: 'bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500 shadow-glow-primary',
    outline: 'bg-transparent border border-violet-500/50 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400',
    neon: 'bg-transparent border border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-300 shadow-glow-neon',
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={cn(
        'relative inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 overflow-hidden',
        sizeClasses[size],
        variantClasses[variant],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </motion.button>
  )
}
