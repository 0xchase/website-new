import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import { Badge } from '@/components/ui/badge'

export default function Blog() {
  const posts = getPosts()
  
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
        <section className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
          <p className="text-muted-foreground">
            Thoughts on technology, development, and the creative process.
          </p>
        </section>
        
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">All Posts</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <article key={post.slug} className="border rounded-lg p-6 hover:bg-accent/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{post.date?.slice(0,10) || '—'}</Badge>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  <Link href={`/blog/${post.slug}/`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground">
                  Read more about this topic and explore the full article.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Categories</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Technology</Badge>
            <Badge variant="outline">Development</Badge>
            <Badge variant="outline">Design</Badge>
            <Badge variant="outline">Music</Badge>
            <Badge variant="outline">Research</Badge>
            <Badge variant="outline">Tutorials</Badge>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Subscribe</h2>
          <p className="text-muted-foreground">
            Stay updated with the latest posts and insights.
          </p>
          <div className="flex space-x-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
    </main>
  )
}