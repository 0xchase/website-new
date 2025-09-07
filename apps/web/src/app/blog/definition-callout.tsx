import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { BookOpen } from "lucide-react"

interface DefinitionCalloutProps {
  term: string
  children: React.ReactNode
}

export function DefinitionCallout({ term, children }: DefinitionCalloutProps) {
  return (
    <Alert className="relative">
      <BookOpen />
      <AlertTitle>{term}</AlertTitle>
      <AlertDescription className="gap-0 [&_p]:leading-snug [&_p]:my-2">{children}</AlertDescription>
    </Alert>
  )
}
