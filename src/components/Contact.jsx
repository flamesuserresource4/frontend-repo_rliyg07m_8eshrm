export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-8">
            <h2 className="text-3xl font-bold text-white">Let’s build something cool</h2>
            <p className="mt-3 text-slate-300">Open to internships, freelance, and collabs. Drop a message and I’ll get back soon.</p>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Your name" />
              <input type="email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Email" />
              <textarea rows={4} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Message" />
              <button className="rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white font-semibold px-5 py-3">Send Message</button>
            </form>
          </div>
          <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8">
            <h3 className="text-white font-semibold">Direct</h3>
            <ul className="mt-3 text-slate-200/90 space-y-2">
              <li>Email: you@example.com</li>
              <li>GitHub: github.com/yourhandle</li>
              <li>LinkedIn: linkedin.com/in/yourhandle</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
