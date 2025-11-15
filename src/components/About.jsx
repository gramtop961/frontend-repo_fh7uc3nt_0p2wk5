export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-black to-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About me</h2>
            <p className="mt-4 text-white/70">
              I’m a front-end engineer focused on building interfaces that feel alive. My work blends strong UX, performance, and cinematic motion.
            </p>
            <p className="mt-3 text-white/70">
              I’ve collaborated with startups and agencies to deliver fast, accessible, and polished products. Tools I love include React, Tailwind, Framer Motion, and 3D on the web.
            </p>
          </div>
          <div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="h-full w-full bg-gradient-to-br from-fuchsia-500/20 via-purple-500/20 to-blue-500/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
