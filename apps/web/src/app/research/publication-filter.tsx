"use client"

import { useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"

type Publication = {
  title: string
  venue: string
  year: number
  tags?: string[]
}

interface PublicationFilterProps {
  publications: Publication[]
}

export function PublicationFilter({ publications }: PublicationFilterProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    publications.forEach((p) => p.tags?.forEach((t) => tagSet.add(t)))
    return Array.from(tagSet).sort()
  }, [publications])

  const filtered = useMemo(() => {
    if (!selectedTag) return publications
    return publications.filter((p) => p.tags?.includes(selectedTag))
  }, [publications, selectedTag])

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Badge
          variant={selectedTag === null ? "secondary" : "outline"}
          className="cursor-pointer hover:bg-primary/10 transition-colors"
          onClick={() => setSelectedTag(null)}
        >
          All ({publications.length})
        </Badge>
        {allTags.map((tag) => {
          const count = publications.filter((p) => p.tags?.includes(tag)).length
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
        {filtered.map((p) => (
          <div
            key={`${p.title}-${p.year}`}
            className="flex items-center justify-between py-2 hover:bg-accent/50 rounded-md px-2 -mx-2 transition-colors"
          >
            <div className="text-foreground">{p.title}</div>
            <span className="text-muted-foreground text-sm">{p.venue ? `${p.venue}, ` : ""}{p.year}</span>
          </div>
        ))}
      </div>
    </div>
  )
}


