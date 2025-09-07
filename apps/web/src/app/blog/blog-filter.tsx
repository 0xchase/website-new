"use client"

import { useState, useMemo } from 'react'
import { Badge } from '@/components/ui/badge'
import { PostMeta } from '@/lib/posts'
import Link from 'next/link'

interface BlogFilterProps {
  posts: PostMeta[]
}

export function BlogFilter({ posts }: BlogFilterProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Collect all unique tags from posts
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    posts.forEach(post => {
      if (post.tags) {
        post.tags.forEach(tag => tagSet.add(tag))
      }
    })
    return Array.from(tagSet).sort()
  }, [posts])

  // Filter posts based on selected tag
  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts
    return posts.filter(post => post.tags?.includes(selectedTag))
  }, [posts, selectedTag])

  return (
    <>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Posts</h2>
        <div className="flex flex-wrap gap-2">
          <Badge 
            variant={selectedTag === null ? "secondary" : "outline"}
            className="cursor-pointer hover:bg-primary/10 transition-colors"
            onClick={() => setSelectedTag(null)}
          >
            All ({posts.length})
          </Badge>
          {allTags.map((tag) => {
            const count = posts.filter(post => post.tags?.includes(tag)).length
            return (
              <Badge 
                key={tag}
                variant={selectedTag === tag ? "secondary" : "outline"}
                className="cursor-pointer hover:bg-primary/10 transition-colors"
                onClick={() => setSelectedTag(tag)}
              >
                {tag} ({count})
              </Badge>
            )
          })}
        </div>
        <div className="space-y-1">
          {filteredPosts.map((post) => (
            <div key={post.slug} className="flex items-center justify-between py-2 hover:bg-accent/50 rounded-md px-2 -mx-2 transition-colors">
              <Link href={`/blog/${post.slug}/`} className="hover:underline text-foreground">
                {post.title}
              </Link>
              <span className="text-muted-foreground text-sm">
                {post.date?.slice(0,10) || '—'}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
