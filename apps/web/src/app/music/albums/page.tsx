export default function Albums() {
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
        <section className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Albums</h1>
          <p className="text-muted-foreground">
            Complete album releases and musical collections spanning different genres and styles.
          </p>
        </section>
        
        <section className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Latest Releases</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎵</span>
                </div>
                <div>
                  <h3 className="font-medium">Digital Dreams</h3>
                  <p className="text-sm text-muted-foreground">Electronic • 2024 • 12 tracks</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎸</span>
                </div>
                <div>
                  <h3 className="font-medium">Acoustic Sessions</h3>
                  <p className="text-sm text-muted-foreground">Folk • 2023 • 8 tracks</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎹</span>
                </div>
                <div>
                  <h3 className="font-medium">Piano Reflections</h3>
                  <p className="text-sm text-muted-foreground">Classical • 2023 • 10 tracks</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Album Collections</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium">Electronic Series</h3>
                <p className="text-sm text-muted-foreground">Ambient, IDM, Synthwave</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Acoustic Collection</h3>
                <p className="text-sm text-muted-foreground">Folk, Indie, Singer-songwriter</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Classical Works</h3>
                <p className="text-sm text-muted-foreground">Piano, Chamber music, Orchestral</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Experimental</h3>
                <p className="text-sm text-muted-foreground">Sound design, Field recordings</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Streaming & Purchase</h2>
            <p className="text-muted-foreground mb-4">
              Available on all major streaming platforms and for direct purchase.
            </p>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Spotify
              </button>
              <button className="px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors">
                Apple Music
              </button>
              <button className="px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors">
                Bandcamp
              </button>
              <button className="px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors">
                SoundCloud
              </button>
            </div>
          </div>
        </section>
    </main>
  )
}