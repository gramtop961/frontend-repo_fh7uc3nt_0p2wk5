export default function Projects() {
  const projects = [
    {
      title: 'Neon Commerce',
      desc: 'A headless e-commerce storefront with blazing-fast navigation and dynamic 3D previews.',
      tags: ['Next.js', 'Stripe', 'Three.js'],
    },
    {
      title: 'Signal Studio',
      desc: 'A real-time analytics dashboard with elegant motion and dark, tactile UI.',
      tags: ['React', 'WebSockets', 'Framer Motion'],
    },
    {
      title: 'Orbit Docs',
      desc: 'Collaborative docs with multiplayer cursors and offline-first syncing.',
      tags: ['CRDTs', 'PWA', 'Tailwind'],
    },
  ]

  return (
    <section id="projects" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected projects</h2>
        <p className="mt-2 text-white/70">A few things I loved building recently.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]">
              <div className="h-40 w-full rounded-xl bg-gradient-to-br from-fuchsia-500/30 via-purple-500/20 to-blue-500/30" />
              <h3 className="mt-4 text-xl font-medium">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
