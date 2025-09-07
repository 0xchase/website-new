import { ReactNode } from 'react'
import { InlineLabel } from './inline-label'

interface EvidenceProps {
  children: ReactNode
  label?: string
  className?: string
}

export function Evidence({ children, label, className }: EvidenceProps) {
  return (
    <InlineLabel type="evidence" label={label} className={className}>
      {children}
    </InlineLabel>
  )
}
