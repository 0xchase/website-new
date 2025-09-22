import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
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
            I write about a variety of topics, including science, technology, and philosophy. During undergrad, I was president of the Philosophy Club at the University of Maryland for 2 years.
          </p>
        </section>

        <BlogFilter posts={posts} />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Book Reviews</h2>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Title</TableHead>
                  <TableHead className="text-xs">Author</TableHead>
                  <TableHead className="text-xs">Rating</TableHead>
                  <TableHead className="text-xs">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-sm">The C Programming Language</TableCell>
                  <TableCell className="text-xs text-muted-foreground">Kernighan & Ritchie</TableCell>
                  <TableCell className="text-xs text-muted-foreground">★★★★★</TableCell>
                  <TableCell className="text-xs text-muted-foreground">2024-01-15</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-sm">Clean Code</TableCell>
                  <TableCell className="text-xs text-muted-foreground">Robert Martin</TableCell>
                  <TableCell className="text-xs text-muted-foreground">★★★★☆</TableCell>
                  <TableCell className="text-xs text-muted-foreground">2024-01-10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-sm">Design Patterns</TableCell>
                  <TableCell className="text-xs text-muted-foreground">Gang of Four</TableCell>
                  <TableCell className="text-xs text-muted-foreground">★★★★☆</TableCell>
                  <TableCell className="text-xs text-muted-foreground">2024-01-05</TableCell>
                </TableRow>
              </TableBody>
            </Table>
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