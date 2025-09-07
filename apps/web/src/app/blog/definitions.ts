export interface Definition {
  term: string
  definition: string
  caseSensitive?: boolean
}

export const definitions: Definition[] = [
  {
    term: "free will",
    definition: "The ability of agents to make choices that are not determined by prior causes or divine intervention, often considered essential for moral responsibility."
  },
  {
    term: "determine",
    definition: "To fix or decide the outcome of events in advance, leaving no room for alternative possibilities or free choice."
  },
  {
    term: "determinism",
    definition: "The philosophical doctrine that all events, including human actions and decisions, are the inevitable result of prior causes and natural laws."
  },
  {
    term: "compatibilism",
    definition: "The philosophical position that free will and determinism are compatible. Compatibilists argue that even if our actions are determined by prior causes, we can still be considered free agents if our actions align with our desires and intentions."
  },
  {
    term: "incompatibilism",
    definition: "The view that free will and determinism are fundamentally incompatible. Incompatibilists believe that if determinism is true, then free will cannot exist, and vice versa."
  },
  {
    term: "libertarianism",
    definition: "In philosophy, the view that humans have free will and that determinism is false. This position maintains that some human actions are not determined by prior causes."
  },
  {
    term: "mechanistic",
    definition: "Relating to or characterized by the belief that natural processes are determined by physical and chemical laws, without reference to purpose or intention."
  },
  {
    term: "teleological",
    definition: "Relating to or characterized by the belief that natural processes are directed toward a purpose or goal, rather than being purely mechanical."
  }
]

// Create a lookup map for efficient searching
export const definitionMap = new Map<string, Definition>()

definitions.forEach(def => {
  definitionMap.set(def.term.toLowerCase(), def)
  // Also add capitalized version if not case sensitive
  if (!def.caseSensitive) {
    definitionMap.set(def.term, def)
  }
})

// Function to find definition for a term
export function findDefinition(term: string): Definition | undefined {
  return definitionMap.get(term.toLowerCase()) || definitionMap.get(term)
}
