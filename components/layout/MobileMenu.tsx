'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface NavLink {
  href: string
  label: string
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navLinks: NavLink[]
  pathname: string
}

export default function MobileMenu({ isOpen, onClose, navLinks, pathname }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-72 glass-dark border-l border-white/10 md:hidden"
          >
            <div className="p-6 pt-20 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      'block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200',
                      pathname === link.href
                        ? 'text-white bg-white/10'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/login"
                  onClick={onClose}
                  className="block px-4 py-3 text-center rounded-xl border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition-all font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={onClose}
                  className="block px-4 py-3 text-center rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold hover:from-violet-500 hover:to-blue-500 transition-all"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
