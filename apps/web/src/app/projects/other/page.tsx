export default function Other() {
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Other Projects</h1>
        <p className="text-muted-foreground">
          Miscellaneous projects and experiments that don't fit into other categories.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="text-muted-foreground">
          This collection includes various experimental projects, prototypes, and creative endeavors 
          that explore the intersection of technology, art, and craftsmanship. These projects often 
          represent learning experiences and creative explorations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Project Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Electronics</h3>
            <p className="text-sm text-muted-foreground">
              Circuit design, embedded systems, and hardware prototyping.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Art & Design</h3>
            <p className="text-sm text-muted-foreground">
              Visual art, graphic design, and creative installations.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Software Experiments</h3>
            <p className="text-sm text-muted-foreground">
              Experimental programming projects and proof-of-concepts.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Craft & Making</h3>
            <p className="text-sm text-muted-foreground">
              Physical crafting, woodworking, and hands-on projects.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Projects</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Arduino Weather Station</h3>
            <p className="text-sm text-muted-foreground">
              A custom weather monitoring system with data logging capabilities.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Digital Art Generator</h3>
            <p className="text-sm text-muted-foreground">
              A Python script that creates algorithmic art using mathematical functions.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
