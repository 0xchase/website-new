export default function Performances() {
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
        <section className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Performances</h1>
          <p className="text-muted-foreground">
            Piano compositions, performances, and explorations of classical and contemporary repertoire.
          </p>
        </section>
        
        <section className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Original Compositions</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎹</span>
                </div>
                <div>
                  <h3 className="font-medium">Nocturne in E Minor</h3>
                  <p className="text-sm text-muted-foreground">Classical • 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌙</span>
                </div>
                <div>
                  <h3 className="font-medium">Moonlight Variations</h3>
                  <p className="text-sm text-muted-foreground">Contemporary • 2023</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌊</span>
                </div>
                <div>
                  <h3 className="font-medium">River Flow</h3>
                  <p className="text-sm text-muted-foreground">Impressionist • 2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Performance Repertoire</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium">Classical</h3>
                <p className="text-sm text-muted-foreground">Bach, Mozart, Beethoven, Chopin</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Romantic</h3>
                <p className="text-sm text-muted-foreground">Liszt, Rachmaninoff, Debussy</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Contemporary</h3>
                <p className="text-sm text-muted-foreground">Glass, Reich, Ligeti</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Jazz</h3>
                <p className="text-sm text-muted-foreground">Bill Evans, Keith Jarrett, Herbie Hancock</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Technique & Style</h2>
            <p className="text-muted-foreground mb-4">
              Exploring different approaches to piano performance and composition.
            </p>
            <div className="space-y-3">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Classical Technique</h3>
                <p className="text-sm text-muted-foreground">Finger independence, Pedaling, Phrasing, Dynamics</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Improvisation</h3>
                <p className="text-sm text-muted-foreground">Jazz harmony, Modal playing, Free improvisation</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Extended Techniques</h3>
                <p className="text-sm text-muted-foreground">Prepared piano, Inside piano, Percussive effects</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Recordings & Performances</h2>
            <p className="text-muted-foreground mb-4">
              Live performances and studio recordings of piano works.
            </p>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                YouTube
              </button>
              <button className="px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors">
                SoundCloud
              </button>
              <button className="px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors">
                Bandcamp
              </button>
            </div>
          </div>
        </section>
    </main>
  )
}
