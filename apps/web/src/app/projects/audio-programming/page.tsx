export default function AudioProgramming() {
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
        <section className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Audio Programming</h1>
          <p className="text-muted-foreground">
            Digital signal processing, audio software development, and real-time audio systems.
          </p>
        </section>
        
        <section className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Digital Signal Processing</h2>
            <p className="text-muted-foreground mb-4">
              Real-time audio processing, filtering, and synthesis algorithms.
            </p>
            <div className="space-y-3">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Audio Effects</h3>
                <p className="text-sm text-muted-foreground">Reverb, Delay, Distortion, Modulation effects</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Synthesis</h3>
                <p className="text-sm text-muted-foreground">Subtractive, Additive, FM, Granular synthesis</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Audio Software Development</h2>
            <p className="text-muted-foreground mb-4">
              Building professional audio applications and plugins.
            </p>
            <div className="space-y-3">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">VST/AU Plugins</h3>
                <p className="text-sm text-muted-foreground">JUCE, VST SDK, Audio Unit development</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Standalone Applications</h3>
                <p className="text-sm text-muted-foreground">Cross-platform audio software, Real-time processing</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Technologies & Frameworks</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium">Languages</h3>
                <p className="text-sm text-muted-foreground">C++, Python, Rust, JavaScript</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Frameworks</h3>
                <p className="text-sm text-muted-foreground">JUCE, PortAudio, Web Audio API, SuperCollider</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Standards</h3>
                <p className="text-sm text-muted-foreground">VST, AU, AAX, MIDI, OSC</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Specializations</h3>
                <p className="text-sm text-muted-foreground">Low-latency audio, Spatial audio, Machine learning audio</p>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}