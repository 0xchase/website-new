"use client"

import { useState } from 'react'
import { BlogFlow } from './blog-flow'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight } from "lucide-react"
import { PostMeta } from '@/lib/posts'

interface BlogFlowWrapperProps {
  posts: PostMeta[]
}

export function BlogFlowWrapper({ posts }: BlogFlowWrapperProps) {
  const [isFlowOpen, setIsFlowOpen] = useState(false)

  return (
    <Collapsible open={isFlowOpen} onOpenChange={setIsFlowOpen}>
      <CollapsibleTrigger asChild>
        <button className="flex w-full items-center justify-between rounded-lg border p-4 text-left hover:bg-accent/50 transition-colors">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">Post Network</h2>
            <p className="text-muted-foreground text-sm">
              Explore the connections between blog posts. Posts with similar topics are connected.
            </p>
          </div>
          {isFlowOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-4">
        <BlogFlow posts={posts} />
      </CollapsibleContent>
    </Collapsible>
  )
}
