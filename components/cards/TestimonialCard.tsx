import { Star } from 'lucide-react'
import type { Testimonial } from '@/lib/data/testimonials'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full flex flex-col">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-slate-300 leading-relaxed mb-6 flex-1 text-sm">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{testimonial.name}</p>
          <p className="text-slate-400 text-xs">{testimonial.role} · {testimonial.organization}</p>
        </div>
        <div className="ml-auto">
          <span className="px-2 py-0.5 text-xs bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded-full">
            {testimonial.industry}
          </span>
        </div>
      </div>
    </div>
  )
}
