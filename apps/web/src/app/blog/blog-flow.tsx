"use client"

import { useCallback, useMemo } from 'react'
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  NodeTypes,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { getPosts, PostMeta } from '@/lib/posts'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

// Custom node component for blog posts
function BlogPostNode({ data }: { data: PostMeta }) {
  return (
    <div className="bg-card border rounded-lg p-4 shadow-md min-w-[200px] max-w-[300px]">
      <div className="space-y-2">
        <h3 className="font-semibold text-sm leading-tight">
          <Link 
            href={`/blog/${data.slug}`}
            className="hover:text-primary transition-colors"
          >
            {data.title}
          </Link>
        </h3>
        {data.date && (
          <p className="text-xs text-muted-foreground">
            {new Date(data.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </p>
        )}
        <div className="flex flex-wrap gap-1">
          <Badge variant="outline" className="text-xs">
            {data.slug}
          </Badge>
        </div>
      </div>
    </div>
  )
}

// Define custom node types
const nodeTypes: NodeTypes = {
  blogPost: BlogPostNode,
}

interface BlogFlowProps {
  posts: PostMeta[]
}

export function BlogFlow({ posts }: BlogFlowProps) {
  // Create nodes from blog posts
  const initialNodes: Node[] = useMemo(() => {
    return posts.map((post, index) => ({
      id: post.slug,
      type: 'blogPost',
      position: {
        x: (index % 3) * 350 + 50,
        y: Math.floor(index / 3) * 200 + 50,
      },
      data: post,
    }))
  }, [posts])

  // Create edges between related posts (simple example - you can make this more sophisticated)
  const initialEdges: Edge[] = useMemo(() => {
    const edges: Edge[] = []
    
    // Create connections between posts based on some criteria
    // For now, just connect posts that share similar words in their titles
    for (let i = 0; i < posts.length; i++) {
      for (let j = i + 1; j < posts.length; j++) {
        const post1 = posts[i]
        const post2 = posts[j]
        
        // Simple similarity check - posts with common words
        const words1 = post1.title.toLowerCase().split(/\s+/)
        const words2 = post2.title.toLowerCase().split(/\s+/)
        const commonWords = words1.filter(word => words2.includes(word) && word.length > 3)
        
        if (commonWords.length > 0) {
          edges.push({
            id: `${post1.slug}-${post2.slug}`,
            source: post1.slug,
            target: post2.slug,
            type: 'smoothstep',
            animated: true,
            style: { stroke: 'hsl(var(--muted-foreground))', strokeWidth: 1 },
          })
        }
      }
    }
    
    return edges
  }, [posts])

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  )

  return (
    <div className="h-[400px] w-full border rounded-lg">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        className="bg-background"
        proOptions={{ hideAttribution: true }}
      >
        <Background 
          gap={20} 
          size={1}
          color="hsl(var(--muted-foreground) / 0.3)"
        />
      </ReactFlow>
    </div>
  )
}
