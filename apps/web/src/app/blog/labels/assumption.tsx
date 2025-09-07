import { ReactNode } from 'react'
import { InlineLabel } from './inline-label'

interface AssumptionProps {
  children: ReactNode
  label?: string
  className?: string
}

export function Assumption({ children, label, className }: AssumptionProps) {
  return (
    <InlineLabel type="assumption" label={label} className={className}>
      {children}
    </InlineLabel>
  )
}
