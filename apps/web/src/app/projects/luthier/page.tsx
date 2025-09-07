export default function Luthier() {
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
        <section className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Luthier</h1>
          <p className="text-muted-foreground">
            Handcrafted musical instruments built with traditional techniques and modern innovation.
          </p>
        </section>
        
        <section className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Instrument Building</h2>
            <p className="text-muted-foreground mb-4">
              Creating custom musical instruments with attention to detail and acoustic excellence.
            </p>
            <div className="space-y-3">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Guitars</h3>
                <p className="text-sm text-muted-foreground">Acoustic, Electric, Classical, Steel-string</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">String Instruments</h3>
                <p className="text-sm text-muted-foreground">Violins, Cellos, Basses, Mandolins</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Woodworking & Craftsmanship</h2>
            <p className="text-muted-foreground mb-4">
              Traditional woodworking techniques combined with modern precision tools.
            </p>
            <div className="space-y-3">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Wood Selection</h3>
                <p className="text-sm text-muted-foreground">Tonewoods, Grain patterns, Acoustic properties</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Construction Techniques</h3>
                <p className="text-sm text-muted-foreground">Hand-carving, Steam bending, Joinery, Finishing</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Custom Commissions</h2>
            <p className="text-muted-foreground mb-4">
              Bespoke instruments tailored to individual musicians&apos; needs and preferences.
            </p>
            <div className="space-y-3">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Design Consultation</h3>
                <p className="text-sm text-muted-foreground">Ergonomics, Aesthetics, Sound characteristics</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Restoration & Repair</h3>
                <p className="text-sm text-muted-foreground">Vintage instruments, Structural repairs, Setup optimization</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Materials & Tools</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium">Tonewoods</h3>
                <p className="text-sm text-muted-foreground">Spruce, Cedar, Mahogany, Rosewood, Maple</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Hardware</h3>
                <p className="text-sm text-muted-foreground">Tuners, Bridges, Pickups, Electronics</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Tools</h3>
                <p className="text-sm text-muted-foreground">Hand planes, Chisels, Routers, Clamps</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Finishing</h3>
                <p className="text-sm text-muted-foreground">Nitrocellulose, Polyurethane, Oil finishes</p>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}