export default function About() {
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
        <section className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">About</h1>
          <p className="text-muted-foreground">
            Learn more about my background, interests, and journey.
          </p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Background</h2>
          <p className="text-muted-foreground">
            I&apos;m a passionate developer and researcher with a love for creating meaningful digital experiences. 
            My journey spans across web development, data science, and creative projects.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Interests</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Full-stack web development</li>
            <li>• Machine learning and AI</li>
            <li>• Music production and composition</li>
            <li>• Open source contributions</li>
            <li>• User experience design</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <p className="text-muted-foreground">
            Feel free to reach out if you&apos;d like to collaborate or just have a chat about technology, 
            music, or anything else that interests you.
          </p>
        </section>
    </main>
  )
}