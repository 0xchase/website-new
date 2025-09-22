import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ProceduralAudio() {
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Procedural Audio</h1>
        <p className="text-muted-foreground">
          Novel audio generation and processing tools for musicians, sound designers, and audio developers.
        </p>
      </section>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Manifesto for Procedural Audio</CardTitle>
          <CardDescription>
            Our foundational principles and vision for the future of procedural audio generation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link 
            href="/documents/manifesto-for-procedural-audio" 
            className="text-primary hover:text-primary/80 underline font-medium"
          >
            Read the Manifesto →
          </Link>
        </CardContent>
      </Card>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="text-muted-foreground">
          Procedural Audio creates innovative tools that push the boundaries of digital audio. 
          Our focus is on developing novel algorithms and user interfaces that make complex 
          audio processing accessible to creators of all skill levels.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Procedure</h3>
            <p className="text-sm text-muted-foreground">
              A real-time audio synthesis framework built with modern C++ and JUCE.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Procedural Audio Player</h3>
            <p className="text-sm text-muted-foreground">
              Advanced 3D audio processing for immersive sound experiences.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
