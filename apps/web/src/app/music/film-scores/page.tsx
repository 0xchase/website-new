export default function FilmScores() {
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
        <section className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Film Scores</h1>
          <p className="text-muted-foreground">
            Original music compositions for film, television, and multimedia projects.
          </p>
        </section>
        
        <section className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎬</span>
                </div>
                <div>
                  <h3 className="font-medium">The Digital Frontier</h3>
                  <p className="text-sm text-muted-foreground">Sci-Fi Documentary • 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎭</span>
                </div>
                <div>
                  <h3 className="font-medium">Urban Stories</h3>
                  <p className="text-sm text-muted-foreground">Drama Series • 2023</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌊</span>
                </div>
                <div>
                  <h3 className="font-medium">Ocean Depths</h3>
                  <p className="text-sm text-muted-foreground">Nature Documentary • 2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Composition Styles</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium">Orchestral</h3>
                <p className="text-sm text-muted-foreground">Full symphony, Chamber ensembles</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Electronic</h3>
                <p className="text-sm text-muted-foreground">Synthesizers, Digital soundscapes</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Hybrid</h3>
                <p className="text-sm text-muted-foreground">Acoustic + Electronic fusion</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Minimalist</h3>
                <p className="text-sm text-muted-foreground">Sparse, Atmospheric textures</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Collaboration Process</h2>
            <p className="text-muted-foreground mb-4">
              Working closely with directors and producers to create music that enhances storytelling.
            </p>
            <div className="space-y-3">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Pre-Production</h3>
                <p className="text-sm text-muted-foreground">Script analysis, Theme development, Style exploration</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Production</h3>
                <p className="text-sm text-muted-foreground">Spotting sessions, Temp music, Live recording</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Post-Production</h3>
                <p className="text-sm text-muted-foreground">Final mixing, Mastering, Delivery</p>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}