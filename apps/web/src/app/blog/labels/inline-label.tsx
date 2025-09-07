"use client"

import { ReactNode } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface InlineLabelProps {
  children: ReactNode
  type: 'assumption' | 'claim' | 'evidence'
  label?: string
  className?: string
}

const typeLabels = {
  assumption: 'Assumption',
  claim: 'Claim',
  evidence: 'Evidence',
}

export function InlineLabel({ children, type, label, className = '' }: InlineLabelProps) {
  const cssVar = `--label-${type}-bg`
  const displayLabel = label || typeLabels[type]
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span 
            className={`inline cursor-help ${className}`}
            style={{ backgroundColor: `var(${cssVar})` }}
          >
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{displayLabel}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
