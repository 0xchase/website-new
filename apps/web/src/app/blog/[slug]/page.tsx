import { notFound } from 'next/navigation'
import fs from 'node:fs'
import path from 'node:path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import matter from 'gray-matter'
import { DefinitionCallout } from '../definition-callout'
import { InlineDefinition } from '../inline-definition'
import { TableOfContents } from '@/components/table-of-contents'
import { processDefinitions } from '../process-definitions'
import { BlogControls } from '../blog-controls'
import { Assumption } from '../labels/assumption'
import { Claim } from '../labels/claim'
import { Evidence } from '../labels/evidence'
import { AreaChartExample } from '../america/charts/area-chart'
import { BarChartExample } from '../america/charts/bar-chart'
import { PieChartExample } from '../america/charts/pie-chart'
import { RadarChartExample } from '../america/charts/radar-chart'
import { RadialChartExample } from '../america/charts/radial-chart'

// Components available in MDX
const components = {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  DefinitionCallout,
  InlineDefinition,
  Assumption,
  Claim,
  Evidence,
  AreaChartExample,
  BarChartExample,
  PieChartExample,
  RadarChartExample,
  RadialChartExample,
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
  const { slug } = await params
  const filePath = path.join(blogRoot, `${slug}.mdx`)
  
  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const file = fs.readFileSync(filePath, 'utf8')
  const { data: frontmatter, content } = matter(file)
  
  // Process content to automatically inject inline definitions
  const processedContent = processDefinitions(content)
  
  const title = frontmatter.title || slug
  const date = frontmatter.date

  return (
    <div className="relative">
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
          <div className="space-y-2">
            {date && (
              <p className="text-muted-foreground">
                {new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            )}
                   {frontmatter.tags && frontmatter.tags.length > 0 && (
                     <div className="flex flex-wrap gap-2">
                       {frontmatter.tags.map((tag: string) => (
                         <Badge key={tag} variant="secondary" className="text-xs">
                           {tag}
                         </Badge>
                       ))}
                     </div>
                   )}
                 </div>
                 <BlogControls />
               </section>
        
        <section className="prose prose-neutral dark:prose-invert max-w-none prose-p:leading-relaxed prose-headings:leading-tight prose-li:leading-relaxed">
          <MDXRemote source={processedContent} components={components} />
        </section>
      </main>
      
        <aside className="hidden lg:block absolute top-0 right-0 h-full">
          <TableOfContents />
        </aside>
      </div>
    )
  }
