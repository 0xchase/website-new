import { ReactNode } from 'react'
import { InlineLabel } from './inline-label'

interface ClaimProps {
  children: ReactNode
  label?: string
  className?: string
}

export function Claim({ children, label, className }: ClaimProps) {
  return (
    <InlineLabel type="claim" label={label} className={className}>
      {children}
    </InlineLabel>
  )
}
