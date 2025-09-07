"use client"

import { useState } from "react"
import { BookOpen } from "lucide-react"

interface InlineDefinitionProps {
  term: string
  children: React.ReactNode
}

export function InlineDefinition({ term, children }: InlineDefinitionProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <span className="relative inline-block">
      <span
        className={`cursor-help transition-all duration-200 underline decoration-dotted decoration-muted-foreground/30 ${
          isHovered ? "decoration-foreground/60" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {term}
      </span>
      
      {isHovered && (
        <span className="absolute top-full left-0 z-50 mt-2 w-80">
          <span className="inline-flex items-start gap-3 rounded-lg border bg-card px-3 py-2 text-sm shadow-lg">
            <BookOpen className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span className="flex flex-col gap-1">
              <span className="font-medium leading-none">{term}</span>
              <span className="text-muted-foreground leading-snug">{children}</span>
            </span>
          </span>
        </span>
      )}
    </span>
  )
}
