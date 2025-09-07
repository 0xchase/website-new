"use client"

import { useState, useEffect } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Toggle } from '@/components/ui/toggle'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Settings, ChevronDown } from 'lucide-react'

export function BlogControls() {
  const [showDefinitions, setShowDefinitions] = useState(true)
  const [showCodeBlocks, setShowCodeBlocks] = useState(true)
  const [showAssumptions, setShowAssumptions] = useState(false)
  const [showClaims, setShowClaims] = useState(false)
  const [showEvidence, setShowEvidence] = useState(false)
  const [compactMode, setCompactMode] = useState(false)
  const [fontSize, setFontSize] = useState('medium')

  // Update CSS classes on document body
  useEffect(() => {
    const body = document.body
    
    // Toggle label classes
    if (showAssumptions) {
      body.classList.add('label-assumptions-enabled')
    } else {
      body.classList.remove('label-assumptions-enabled')
    }
    
    if (showClaims) {
      body.classList.add('label-claims-enabled')
    } else {
      body.classList.remove('label-claims-enabled')
    }
    
    if (showEvidence) {
      body.classList.add('label-evidence-enabled')
    } else {
      body.classList.remove('label-evidence-enabled')
    }
  }, [showAssumptions, showClaims, showEvidence])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs gap-1">
          <Settings className="h-3 w-3" />
          Display
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
          <div className="flex items-center gap-2 px-2 py-1">
            <Checkbox 
              id="definitions" 
              checked={showDefinitions}
              onCheckedChange={setShowDefinitions}
              className="h-3 w-3"
            />
            <label htmlFor="definitions" className="cursor-pointer text-xs">Definitions</label>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
          <div className="flex items-center gap-2 px-2 py-1">
            <Checkbox 
              id="code-blocks" 
              checked={showCodeBlocks}
              onCheckedChange={setShowCodeBlocks}
              className="h-3 w-3"
            />
            <label htmlFor="code-blocks" className="cursor-pointer text-xs">Code</label>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
          <div className="flex items-center gap-2 px-2 py-1">
            <Checkbox 
              id="assumptions" 
              checked={showAssumptions}
              onCheckedChange={setShowAssumptions}
              className="h-3 w-3"
            />
            <label htmlFor="assumptions" className="cursor-pointer text-xs">Assumptions</label>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
          <div className="flex items-center gap-2 px-2 py-1">
            <Checkbox 
              id="claims" 
              checked={showClaims}
              onCheckedChange={setShowClaims}
              className="h-3 w-3"
            />
            <label htmlFor="claims" className="cursor-pointer text-xs">Claims</label>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
          <div className="flex items-center gap-2 px-2 py-1">
            <Checkbox 
              id="evidence" 
              checked={showEvidence}
              onCheckedChange={setShowEvidence}
              className="h-3 w-3"
            />
            <label htmlFor="evidence" className="cursor-pointer text-xs">Evidence</label>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
          <div className="px-2 py-1">
            <Toggle 
              pressed={compactMode}
              onPressedChange={setCompactMode}
              size="sm"
              className="h-6 px-2 text-xs"
            >
              Compact
            </Toggle>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setFontSize('small')}>
          Small
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setFontSize('medium')}>
          Medium
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setFontSize('large')}>
          Large
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
