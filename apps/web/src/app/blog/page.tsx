import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BlogFlowWrapper } from './blog-flow-wrapper'
import { BlogFilter } from './blog-filter'

// Force static generation
export const dynamic = 'force-static'

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
        
        <BlogFlowWrapper posts={posts} />

        <BlogFilter posts={posts} />

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