import Link from 'next/link'
import { Zap, Twitter, Linkedin, Github } from 'lucide-react'

const footerLinks = {
  Product: [
    { href: '/product', label: 'Overview' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/demo', label: 'Live Demo' },
    { href: '/marketplace', label: 'Marketplace' },
    { href: '/integrations', label: 'Integrations' },
  ],
  Solutions: [
    { href: '/solutions/education', label: 'Education' },
    { href: '/solutions/healthcare', label: 'Healthcare' },
    { href: '/solutions/corporate', label: 'Corporate' },
    { href: '/solutions/government', label: 'Government' },
    { href: '/use-cases', label: 'Use Cases' },
    { href: '/ai-lab', label: 'AI Lab' },
  ],
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/careers', label: 'Careers' },
    { href: '/partners', label: 'Partners' },
    { href: '/contact', label: 'Contact' },
    { href: '/developers', label: 'Developers' },
  ],
  Legal: [
    { href: '/legal/terms', label: 'Terms of Service' },
    { href: '/legal/privacy', label: 'Privacy Policy' },
    { href: '/legal/cookies', label: 'Cookie Policy' },
    { href: '/legal/data-protection', label: 'Data Protection' },
    { href: '/support', label: 'Support' },
    { href: '/faq', label: 'FAQ' },
  ],
}

const socialLinks = [
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com', icon: Github, label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#080e1a] border-t border-white/5">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top: Logo + description */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold font-poppins gradient-text">lvlBase</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              The all-in-one platform that helps organizations of every kind operate smarter with AI.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} lvlBase Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-slate-500 text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
