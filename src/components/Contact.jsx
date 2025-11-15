export default function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s build something</h2>
          <p className="mt-2 text-white/70">Have a project in mind? I’m available for freelance and collaborations.</p>
          <form className="mt-8 grid gap-4 sm:grid-cols-2">
            <input placeholder="Name" className="rounded-md border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40 sm:col-span-1" />
            <input placeholder="Email" className="rounded-md border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40 sm:col-span-1" />
            <textarea placeholder="Tell me about your project" rows="4" className="rounded-md border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40 sm:col-span-2" />
            <button type="button" className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
