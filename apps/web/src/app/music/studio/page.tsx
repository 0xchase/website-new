export default function Studio() {
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Studio</h1>
        <p className="text-muted-foreground">
          Recording studio and production work for music, film, and multimedia projects.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="text-muted-foreground">
          The studio serves as a creative space for recording, mixing, and producing music across 
          various genres and media. Equipped with professional-grade equipment and software, 
          it supports everything from solo acoustic recordings to full orchestral productions.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Music Recording</h3>
            <p className="text-sm text-muted-foreground">
              Multi-track recording for bands, solo artists, and ensembles.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Film Scoring</h3>
            <p className="text-sm text-muted-foreground">
              Original music composition and recording for film and video.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Mixing & Mastering</h3>
            <p className="text-sm text-muted-foreground">
              Professional audio post-production and final mastering.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Podcast Production</h3>
            <p className="text-sm text-muted-foreground">
              Audio editing and production for podcast and spoken word content.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Equipment</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm">Audio Interface</span>
            <span className="text-sm text-muted-foreground">Focusrite Scarlett 18i20</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Microphones</span>
            <span className="text-sm text-muted-foreground">Neumann U87, AKG C414</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Monitors</span>
            <span className="text-sm text-muted-foreground">Yamaha HS8</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">DAW</span>
            <span className="text-sm text-muted-foreground">Pro Tools, Logic Pro</span>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Work</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Indie Album Production</h3>
            <p className="text-sm text-muted-foreground">
              Full production of a 12-track indie rock album, from recording to mastering.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Documentary Score</h3>
            <p className="text-sm text-muted-foreground">
              Original orchestral score for a nature documentary film.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
