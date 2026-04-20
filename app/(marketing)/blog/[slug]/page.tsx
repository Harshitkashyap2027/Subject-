import { notFound } from 'next/navigation'
import SectionWrapper from '@/components/shared/SectionWrapper'
import { blogPosts } from '@/lib/data/blog'
import { formatDate } from '@/lib/utils'

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()
  return (
    <div>
      <section className="py-24 px-4 mesh-bg">
        <div className="max-w-3xl mx-auto">
          <span className="px-3 py-1 bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded-full text-sm">{post.category}</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white mt-4 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <span>{post.author} · {post.authorRole}</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </section>
      <SectionWrapper>
        <div className="max-w-3xl mx-auto prose prose-invert prose-slate">
          <p className="text-slate-300 leading-relaxed text-lg">{post.excerpt}</p>
          <div className="mt-6 text-slate-400 leading-relaxed">{post.content}</div>
        </div>
      </SectionWrapper>
    </div>
  )
}
