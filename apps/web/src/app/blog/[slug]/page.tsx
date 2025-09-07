import { notFound } from 'next/navigation'
import fs from 'node:fs'
import path from 'node:path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import matter from 'gray-matter'

// Components available in MDX
const components = {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
}

interface PostPageProps {
  params: {
    slug: string
  }
}

const blogRoot = path.join(process.cwd(), 'posts')

export async function generateStaticParams() {
  const files = fs.readdirSync(blogRoot).filter((name) => name.endsWith('.mdx'))
  return files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }))
}

// Force static generation
export const dynamic = 'force-static'

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = params
  const filePath = path.join(blogRoot, `${slug}.mdx`)
  
  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const file = fs.readFileSync(filePath, 'utf8')
  const { data: frontmatter, content } = matter(file)
  
  const title = frontmatter.title || slug
  const date = frontmatter.date

  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
      <div className="mb-6">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>
      
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {date && (
          <p className="text-muted-foreground">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        )}
      </section>
      
      <section className="prose prose-neutral dark:prose-invert max-w-none prose-p:leading-relaxed prose-headings:leading-tight prose-li:leading-relaxed">
        <MDXRemote source={content} components={components} />
      </section>
    </main>
  )
}
