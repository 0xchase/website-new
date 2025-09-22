export default function Bookbinding() {
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Bookbinding</h1>
        <p className="text-muted-foreground">
          Traditional bookbinding techniques and restoration work for preserving and creating beautiful books.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="text-muted-foreground">
          Bookbinding combines craftsmanship with artistry to create functional and beautiful books. 
          This work involves both restoration of historical texts and creation of new volumes using 
          traditional techniques passed down through generations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Techniques</h2>
        <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
          <li>Coptic binding</li>
          <li>Japanese stab binding</li>
          <li>Case binding</li>
          <li>Leather tooling</li>
          <li>Gold leaf application</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Restoration Work</h3>
            <p className="text-sm text-muted-foreground">
              Repairing and restoring vintage books and manuscripts.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Custom Journals</h3>
            <p className="text-sm text-muted-foreground">
              Handcrafted journals and notebooks with unique designs.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
