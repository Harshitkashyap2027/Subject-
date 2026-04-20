import Link from 'next/link'
import SectionWrapper from '@/components/shared/SectionWrapper'
import { blogPosts } from '@/lib/data/blog'
import { formatDate } from '@/lib/utils'

export default function BlogPage() {
  return (
    <div>
      <section className="py-24 px-4 mesh-bg text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white mb-4">lvlBase <span className="gradient-text">Blog</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">Insights on AI, organizational management, and the future of work.</p>
      </section>
      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 hover:bg-white/10 transition-all">
              <span className="px-2 py-0.5 text-xs bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded-full">{post.category}</span>
              <h2 className="text-white font-bold mt-3 mb-2 group-hover:text-violet-300 transition-colors">{post.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{post.author}</span>
                <span>{formatDate(post.publishedAt)} · {post.readTime} min</span>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
