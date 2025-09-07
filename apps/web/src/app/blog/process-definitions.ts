import { definitions } from './definitions'

export function processDefinitions(content: string): string {
  let processedContent = content
  
  // Sort definitions by length (longest first) to avoid partial matches
  const sortedDefinitions = [...definitions].sort((a, b) => b.term.length - a.term.length)
  
  sortedDefinitions.forEach(({ term, definition }) => {
    // Create regex that matches word boundaries to avoid partial matches
    const regex = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi')
    
    // Replace matches with inline definition component, but avoid JSX components
    processedContent = processedContent.replace(regex, (match, offset) => {
      // Check if this match is inside a JSX component
      const beforeMatch = processedContent.substring(0, offset)
      
      // Count unclosed JSX tags before this match
      const openTags = (beforeMatch.match(/</g) || []).length
      const closeTags = (beforeMatch.match(/>/g) || []).length
      const isInsideJSX = openTags > closeTags
      
      if (isInsideJSX) {
        // Don't process if we're inside JSX
        return match
      }
      
      // Escape quotes in definition for JSX
      const escapedDefinition = definition.replace(/"/g, '&quot;').replace(/'/g, '&#39;')
      return `<InlineDefinition term="${term}">${escapedDefinition}</InlineDefinition>`
    })
  })
  
  return processedContent
}
